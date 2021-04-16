'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// mongoose.set('debug', true);

_mongoose2.default.set('useFindAndModify', false);

var commentSchema = new _mongoose2.default.Schema({
  by: {
    userId: { type: _mongoose2.default.Schema.Types.ObjectId, ref: 'user' },
    username: String
  },
  commentContent: { type: String, required: true }
}, { _id: false });
commentSchema.set('timestamps', true);

var likeSchema = new _mongoose2.default.Schema({
  by: {
    userId: { type: _mongoose2.default.Schema.Types.ObjectId, ref: 'user' },
    username: String
  }
}, { _id: false });
likeSchema.set('timestamps', true);

var postSchema = new _mongoose2.default.Schema({
  postContent: { type: String, required: true },
  author: { type: _mongoose2.default.Schema.Types.ObjectId, ref: 'user' },
  comments: [commentSchema],
  likes: [likeSchema]
});
postSchema.set('timestamps', true);

exports.default = _mongoose2.default.model('post', postSchema);