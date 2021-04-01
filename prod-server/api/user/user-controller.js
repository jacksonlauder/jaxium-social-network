'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.index = index;
exports.show = show;

var _userModel = require('../../model/user-model');

var _userModel2 = _interopRequireDefault(_userModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function index(req, res) {
  // Find all Users
  _userModel2.default.find({}, function (error, users) {
    if (error) {
      return res.status(500).json();
    }
    return res.status(200).json({ users: users });
  });
}

function show(req, res) {
  // Get User by Id
  _userModel2.default.findOne({ _id: req.params.id }, function (error, user) {
    if (error) {
      return res.status(500).json();
    }
    if (!user) {
      return res.status(404).json();
    }
    return res.status(200).json({ user: user });
  });
}