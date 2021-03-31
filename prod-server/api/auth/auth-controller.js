'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.index = index;

var _stringUtil = require('../../utilities/string-util');

var _userModel = require('../../model/user-model');

var _userModel2 = _interopRequireDefault(_userModel);

var _authService = require('../../services/auth-service');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function index(req, res) {
  var validation = validateIndex(req.body);
  if (!validation.isValid) {
    return res.status(400).json({ message: validation.message });
  }
  _userModel2.default.findOne({ username: req.body.username.toLowerCase() }, function (error, user) {
    if (error) {
      return res.status(500).json();
    }
    if (!user) {
      return res.status(401).json();
    }

    var passwordsMatch = _userModel2.default.passwordMatches(req.body.password, user.password);
    if (!passwordsMatch) {
      return res.status(401).json();
    }
    var token = (0, _authService.generateJWT)(user);
    return res.status(200).json({ token: token });
  });
}

function validateIndex(body) {
  var errors = '';
  if (_stringUtil.StringUtil.isEmpty(body.username)) {
    errors += 'Username is required. ';
  }
  if (_stringUtil.StringUtil.isEmpty(body.password)) {
    errors += 'Password is required. ';
  }

  return {
    isValid: _stringUtil.StringUtil.isEmpty(errors),
    message: errors
  };
}