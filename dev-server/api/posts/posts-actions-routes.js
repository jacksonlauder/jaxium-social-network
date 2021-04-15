import express from 'express';
const router = express.Router();
import * as controller from './posts-actions-controller';
import * as auth from '../../services/auth-service';

router.get('/likes/:id', auth.requireLogin, controller.indexByPostId);
router.put('/like/:id', auth.requireLogin, controller.like);
router.put('/unlike/:id', auth.requireLogin, controller.unlike);

// router.get('/comment/:id', auth.requireLogin, controller.show);
// router.post('/comment', auth.requireLogin, controller.comment);
// router.put('/comment', auth.requireLogin, controller.update);
// router.delete('/comment/:id', auth.requireLogin, controller.remove);

export default router;
