'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.index = index;

var _stringUtil = require('../../utilities/string-util');

function index(req, res) {
  var validation = validateIndex(req.body);
  if (!validation.isValid) {
    return res.status(400).json({ message: validation.message });
  }

  var user = {
    username: req.body.username.toLowerCase(),
    password: req.body.password,
    first: req.body.first,
    last: req.body.last
  };
  console.log(user);
  return res.status(201).json();

  // const user = new User({
  //   username: req.body.username,
  //   password: req.body.password,
  //   first: req.body.first,
  //   last: req.body.last
  // })
  // user.save(error => {
  //   if (error) {
  //     if (error.code === 11000) {
  //       return res.status(403).json({ message: 'Username is already taken' })
  //     }
  //     return res.status(500).json()
  //   }
  //   return res.status(201).json()
  // })
}

function validateIndex(body) {
  var errors = '';
  if (_stringUtil.StringUtil.isEmpty(body.username)) {
    errors += 'Username is required. ';
  }
  if (_stringUtil.StringUtil.isEmpty(body.password)) {
    errors += 'Password is required. ';
  }
  if (_stringUtil.StringUtil.isEmpty(body.first)) {
    errors += 'First Name is required. ';
  }
  if (_stringUtil.StringUtil.isEmpty(body.last)) {
    errors += 'Last Name is required. ';
  }

  return {
    isValid: _stringUtil.StringUtil.isEmpty(errors),
    message: errors
  };
}