import express from 'express';
const router = express.Router();
import * as controller from './posts-controller';
import * as auth from '../../services/auth-service';

router.post('/post', auth.requireLogin, controller.create);
router.get('/post', auth.requireLogin, controller.index);
router.get('/post/:id', auth.requireLogin, controller.show);
router.put('/post', auth.requireLogin, controller.update);
router.delete('/post/:id', auth.requireLogin, controller.remove);

export default router;
