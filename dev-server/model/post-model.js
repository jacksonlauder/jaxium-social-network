import mongoose from 'mongoose'

const postSchema = new mongoose.Schema ({
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
  body: String,
  // TODO:
  // Likes
  // Comments, needs separate model?
})
postSchema.set('timestamps', true);

export default mongoose.model('post', postSchema);
