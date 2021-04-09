import mongoose from 'mongoose'

mongoose.set('useFindAndModify', false);

const postSchema = new mongoose.Schema ({
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
  postContent: String

  // TODO:
  // Likes
  // Comments, needs separate model?
  // Pictures
})
postSchema.set('timestamps', true);

export default mongoose.model('post', postSchema);
