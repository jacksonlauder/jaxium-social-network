import express from 'express';
const router = express.Router();
import * as controller from './posts-actions-controller';
import * as auth from '../../services/auth-service';

router.get('/likes/:id', auth.requireLogin, controller.indexByPostId);
router.put('/like/:id', auth.requireLogin, controller.like);
router.put('/unlike/:id', auth.requireLogin, controller.unlike);

router.get('/comment/:id', auth.requireLogin, controller.showComment);
router.put('/postComment/:id', auth.requireLogin, controller.postComment);
router.put('/updateComment/:id', auth.requireLogin, controller.updateComment);
router.delete('/removeComment/:id', auth.requireLogin, controller.removeComment);

export default router;
