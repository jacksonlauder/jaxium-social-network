'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.set('useFindAndModify', false);

var postSchema = new _mongoose2.default.Schema({
  author: { type: _mongoose2.default.Schema.Types.ObjectId, ref: 'user' },
  postContent: String

  // TODO:
  // Likes
  // Comments, needs separate model?
  // Pictures
});
postSchema.set('timestamps', true);

exports.default = _mongoose2.default.model('post', postSchema);