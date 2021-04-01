import regRoutes from './api/register/register-routes'
import userRoutes from './api/user/user-routes'
import authRoutes from './api/auth/auth-routes'
import postRoutes from './api/posts/posts-routes'

export function registerRoutes (app) {
  app.use('/api', regRoutes)
  app.use('/api', userRoutes)
  app.use('/api', authRoutes)
  app.use('/api', postRoutes)
}
