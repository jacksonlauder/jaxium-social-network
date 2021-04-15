"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.indexByPostId = indexByPostId;
exports.liked = liked;
exports.like = like;
exports.unlike = unlike;
exports.comment = comment;
exports.update = update;
exports.remove = remove;

var _userModel = require("../../model/user-model");

var _userModel2 = _interopRequireDefault(_userModel);

var _postModel = require("../../model/post-model");

var _postModel2 = _interopRequireDefault(_postModel);

var _authService = require("../../services/auth-service");

var auth = _interopRequireWildcard(_authService);

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

function liked(req, res) {
  // GET BOOL REPRESENTING LIKED OR NOT
  // const id = auth.getUserId(req);
}

function like(req, res) {
  // POST LIKE ON POST
  var id = auth.getUserId(req);
  var username = auth.getUsername(req);

  _userModel2.default.findOne({ _id: id }, function (error, user) {
    if (error) {
      return res.status(500).json();
    }
    if (!user) {
      return remove.status(404).json();
    }

    _postModel2.default.findByIdAndUpdate({ _id: req.params.id }, { $push: { likes: { by: username } } }, function (error) {
      if (error) {
        return res.status(500).json();
      } else {
        return res.status(204).json();
      }
    });
  });
}

function unlike(req, res) {
  // DELETE LIKE ON POST
}

function comment(req, res) {
  // POST COMMENT ON POST
}

function update(req, res) {
  // UPDATE COMMENT ON POST
}

function remove(req, res) {
  // REMOVE COMMENT ON POST
}