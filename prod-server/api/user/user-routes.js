'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import * as controller from './register-controller'
var router = _express2.default.Router();

router.get('/user', function (req, res) {
  res.send('get.user - get all users');
});

exports.default = router;