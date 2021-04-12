import mongoose from 'mongoose'
// mongoose.set('debug', true);

mongoose.set('useFindAndModify', false);

const postSchema = new mongoose.Schema ({
  postContent: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
  // TODO:
  // Likes
  // Comments, needs separate model?
  // Pictures
})
postSchema.set('timestamps', true);

export default mongoose.model('post', postSchema);
