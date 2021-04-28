import mongoose from 'mongoose'
// mongoose.set('debug', true);

mongoose.set('useFindAndModify', false);

const commentSchema = new mongoose.Schema({
  by: {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    username: String
  },
  commentContent: { type: String, required: true }
})
commentSchema.set('timestamps', true);

const likeSchema = new mongoose.Schema({
  by: {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    username: String
  }
}, { _id: false })
likeSchema.set('timestamps', true);

const postSchema = new mongoose.Schema({
  postContent: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
  comments: [commentSchema],
  likes: [likeSchema]
})
postSchema.set('timestamps', true);

export default mongoose.model('post', postSchema);
