'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _postsActionsController = require('./posts-actions-controller');

var controller = _interopRequireWildcard(_postsActionsController);

var _authService = require('../../services/auth-service');

var auth = _interopRequireWildcard(_authService);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();


router.get('/likes/:id', auth.requireLogin, controller.indexByPostId);
// router.get('/liked-or-not', auth.requireLogin, controller.liked);
router.put('/like/:id', auth.requireLogin, controller.like);
// router.delete('/unlike/:id', auth.requireLogin, controller.unlike);

// router.get('/comment/:id', auth.requireLogin, controller.show);
// router.post('/comment', auth.requireLogin, controller.comment);
// router.put('/comment', auth.requireLogin, controller.update);
// router.delete('/comment/:id', auth.requireLogin, controller.remove);

exports.default = router;