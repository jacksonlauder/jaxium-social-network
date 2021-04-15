'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerRoutes = registerRoutes;

var _registerRoutes = require('./api/register/register-routes');

var _registerRoutes2 = _interopRequireDefault(_registerRoutes);

var _userRoutes = require('./api/user/user-routes');

var _userRoutes2 = _interopRequireDefault(_userRoutes);

var _authRoutes = require('./api/auth/auth-routes');

var _authRoutes2 = _interopRequireDefault(_authRoutes);

var _postsRoutes = require('./api/posts/posts-routes');

var _postsRoutes2 = _interopRequireDefault(_postsRoutes);

var _postsActionsRoutes = require('./api/posts/posts-actions-routes');

var _postsActionsRoutes2 = _interopRequireDefault(_postsActionsRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function registerRoutes(app) {
  app.use('/api', _registerRoutes2.default);
  app.use('/api', _userRoutes2.default);
  app.use('/api', _authRoutes2.default);
  app.use('/api', _postsRoutes2.default);
  app.use('/api', _postsActionsRoutes2.default);
}