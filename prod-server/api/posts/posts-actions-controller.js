"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.indexByPostId = indexByPostId;
exports.like = like;
exports.unlike = unlike;
exports.postComment = postComment;
exports.showComment = showComment;
exports.updateComment = updateComment;
exports.removeComment = removeComment;

var _userModel = require("../../model/user-model");

var _userModel2 = _interopRequireDefault(_userModel);

var _postModel = require("../../model/post-model");

var _postModel2 = _interopRequireDefault(_postModel);

var _authService = require("../../services/auth-service");

var auth = _interopRequireWildcard(_authService);

var _stringUtil = require("../../utilities/string-util");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function indexByPostId(req, res) {
  // GET ALL LIKES ON POST BY ID
  _postModel2.default.findOne({ _id: req.params.id }, function (error, post) {
    if (error) {
      return res.status(500).json();
    }
    return res.status(200).json({ post: post });
  }).populate("likes");
}

function like(req, res) {
  // UPDATE TO LIKE POST
  var id = auth.getUserId(req);
  var username = auth.getUsername(req);

  _userModel2.default.findOne({ _id: id }, function (error, user) {
    if (error) {
      return res.status(500).json();
    }
    if (!user) {
      return res.status(404).json();
    }

    var query = { _id: req.params.id },
        update = {
      $addToSet: { likes: { by: { userId: user._id, username: username } } }
    },
        options = { timestamps: false };

    _postModel2.default.findByIdAndUpdate(query, update, options, function (error) {
      if (error) {
        return res.status(500).json();
      } else {
        return res.status(204).json();
      }
    });
  });
}

function unlike(req, res) {
  // UPDATE TO UNLIKE POST
  var id = auth.getUserId(req);
  var username = auth.getUsername(req);

  _userModel2.default.findOne({ _id: id }, function (error, user) {
    if (error) {
      return res.status(500).json();
    }
    if (!user) {
      return res.status(404).json();
    }

    var query = { _id: req.params.id },
        update = {
      $pull: { likes: { by: { userId: user._id, username: username } } }
    },
        options = { timestamps: false, upsert: false };

    _postModel2.default.findByIdAndUpdate(query, update, options, function (error) {
      if (error) {
        return res.status(500).json();
      } else {
        return res.status(204).json();
      }
    });
  });
}

function postComment(req, res) {
  // POST COMMENT ON POST
  var validation = validateIndex(req.body);
  if (!validation.isValid) {
    return res.status(400).json({ message: validation.message });
  }

  var id = auth.getUserId(req);
  var username = auth.getUsername(req);

  _userModel2.default.findOne({ _id: id }, function (error, user) {
    if (error) {
      return res.status(500).json();
    }
    if (!user) {
      return res.status(404).json();
    }

    var query = { _id: req.params.id },
        update = {
      $addToSet: {
        comments: {
          by: { userId: user._id, username: username },
          commentContent: req.body.commentContent
        }
      }
    },
        options = { timestamps: false };

    _postModel2.default.findByIdAndUpdate(query, update, options, function (error) {
      if (error) {
        return res.status(500).json();
      } else {
        return res.status(204).json();
      }
    });
  });
}

function showComment(req, res) {
  // SHOW COMMENT ON POST
}

function updateComment(req, res) {
  // UPDATE COMMENT ON POST
}

function removeComment(req, res) {
  // REMOVE COMMENT ON POST
}

function validateIndex(body) {
  var errors = "";
  if (_stringUtil.StringUtil.isEmpty(body.commentContent)) {
    errors += "Comment is required. ";
  }

  return {
    isValid: _stringUtil.StringUtil.isEmpty(errors),
    message: errors
  };
}