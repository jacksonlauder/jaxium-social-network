import User from "../../model/user-model";
import Post from "../../model/post-model";
import * as auth from "../../services/auth-service";

export function index(req, res) {
  // FIND ALL POSTS
  Post.find({}, (error, posts) => {
    if (error) {
      return res.status(500).json();
    }
    return res.status(200).json({ posts: posts });
  })
    .populate("author", "username", "user")
    .sort({ createdAt: "desc" });
}

export function create(req, res) {
  // CREATE POST
  const id = auth.getUserId(req);

  User.findOne({ _id: id }, (error, user) => {
    if (error && !user) {
      return res.status(500).json();
    }
    const post = new Post({
      postContent: req.body.postContent
    });
    post.author = user._id;

    post.save(error => {
      if (error) {
        return res.status(500).json();
      }
      return res.status(201).json();
    });
  });
}

export function update(req, res) {
  // UPDATE POST
  const id = auth.getUserId(req);

  User.findOne({ _id: id }, (error, user) => {
    if (error) {
      return res.status(500).json();
    }
    if (!user) {
      return remove.status(404).json();
    }

    const post = new Post(req.body.post);
    post.author = user._id;

    console.log(post)

    Post.findByIdAndUpdate({ _id: post._id }, post, error => {
      if (error) {
        return res.status(500).json();
      } else {
        return res.status(204).json();
      }
    });
  });
}

export function remove(req, res) {
  // DELETE A POST
  const id = auth.getUserId(req);

  Post.findOne({ _id: req.params.id }, (error, post) => {
    if (error) {
      return res.status(500).json();
    }
    if (!post) {
      return res.status(404).json();
    }
    if (post.author._id.toString() !== id) {
      return res
        .status(403)
        .json({ message: "Not allowed to delete another user's post" });
    }
    Post.deleteOne({ _id: req.params.id }, error => {
      if (error) {
        return res.status(500).json();
      }
      return res.status(204).json();
    });
  });
}

export function show(req, res) {
  // GET A POST BY ID
  Post.findOne({ _id: req.params.id }, (error, post) => {
    if (error) {
      return res.status(500).json();
    }
    if (!post) {
      return res.status(404).json();
    }
    return res.status(200).json({ post: post });
  });
}
