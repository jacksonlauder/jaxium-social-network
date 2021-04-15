import mongoose from 'mongoose'
// mongoose.set('debug', true);

mongoose.set('useFindAndModify', false);

const commentSchema = new mongoose.Schema ({
  by: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
  commentContent: String
}, { _id: false })
commentSchema.set('timestamps', true);

const likeSchema = new mongoose.Schema ({
  by: { type: mongoose.Schema.Types.ObjectId, ref: 'user' }
}, { _id: false })
likeSchema.set('timestamps', true);

const postSchema = new mongoose.Schema ({
  postContent: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
  // TODO:
  // Comments
  comments: [commentSchema],
  // Likes
  likes: [{like: likeSchema}]
})
postSchema.set('timestamps', true);

export default mongoose.model('post', postSchema);
