"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.index = index;
exports.indexByUserId = indexByUserId;
exports.create = create;
exports.update = update;
exports.remove = remove;
exports.show = show;

var _userModel = require("../../model/user-model");

var _userModel2 = _interopRequireDefault(_userModel);

var _postModel = require("../../model/post-model");

var _postModel2 = _interopRequireDefault(_postModel);

var _authService = require("../../services/auth-service");

var auth = _interopRequireWildcard(_authService);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function index(req, res) {
  // FIND ALL POSTS
  _postModel2.default.find({}, function (error, posts) {
    if (error) {
      return res.status(500).json();
    }
    return res.status(200).json({ posts: posts });
  }).populate("author", "username", "user").sort({ createdAt: "desc" });
}

function indexByUserId(req, res) {
  // FIND ALL POSTS FOR CERTAIN USER
  var id = auth.getUserId(req);

  _userModel2.default.findOne({ _id: id }, function (error, user) {
    if (error) {
      return res.status(500).json();
    }
    if (!user) {
      return remove.status(404).json();
    }

    _postModel2.default.find({ author: id }, function (error, posts) {
      if (error) {
        return res.status(500).json();
      }
      return res.status(200).json({ posts: posts });
    }).populate("author", "username", "user").sort({ createdAt: "desc" });
  });
}

function create(req, res) {
  // CREATE POST
  var id = auth.getUserId(req);

  _userModel2.default.findOne({ _id: id }, function (error, user) {
    if (error && !user) {
      return res.status(500).json();
    }
    var post = new _postModel2.default({
      postContent: req.body.postContent
    });
    post.author = user._id;

    post.save(function (error) {
      if (error) {
        return res.status(500).json();
      }
      return res.status(201).json();
    });
  });
}

function update(req, res) {
  // UPDATE POST
  var id = auth.getUserId(req);

  _userModel2.default.findOne({ _id: id }, function (error, user) {
    if (error) {
      return res.status(500).json();
    }
    if (!user) {
      return remove.status(404).json();
    }

    var post = new _postModel2.default(req.body.post);
    post.author = user._id;

    console.log(post);

    _postModel2.default.findByIdAndUpdate({ _id: post._id }, post, function (error) {
      if (error) {
        return res.status(500).json();
      } else {
        return res.status(204).json();
      }
    });
  });
}

function remove(req, res) {
  // DELETE A POST
  var id = auth.getUserId(req);

  _postModel2.default.findOne({ _id: req.params.id }, function (error, post) {
    if (error) {
      return res.status(500).json();
    }
    if (!post) {
      return res.status(404).json();
    }
    if (post.author._id.toString() !== id) {
      return res.status(403).json({ message: "Not allowed to delete another user's post" });
    }
    _postModel2.default.deleteOne({ _id: req.params.id }, function (error) {
      if (error) {
        return res.status(500).json();
      }
      return res.status(204).json();
    });
  });
}

function show(req, res) {
  // GET A POST BY ID
  _postModel2.default.findOne({ _id: req.params.id }, function (error, post) {
    if (error) {
      return res.status(500).json();
    }
    if (!post) {
      return res.status(404).json();
    }
    return res.status(200).json({ post: post });
  });
}