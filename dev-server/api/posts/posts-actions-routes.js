import express from 'express';
const router = express.Router();
import * as controller from './posts-actions-controller';
import * as auth from '../../services/auth-service';

router.get('/likes/:id', auth.requireLogin, controller.indexByPostId);
router.put('/like/:id', auth.requireLogin, controller.like);
router.put('/unlike/:id', auth.requireLogin, controller.unlike);

router.get('/comment/:id', auth.requireLogin, controller.showComment);
router.put('/post-comment/:id', auth.requireLogin, controller.postComment);
router.put('/update-comment/:id', auth.requireLogin, controller.updateComment);
router.put('/remove-comment/:id', auth.requireLogin, controller.removeComment);

export default router;
