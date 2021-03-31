'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import * as controller from './auth-controller'
var router = _express2.default.Router();

router.post('/auth', function (req, res) {
  res.send('post.auth - login');
});

exports.default = router;