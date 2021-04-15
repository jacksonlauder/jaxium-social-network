import User from "../../model/user-model";
import Post from "../../model/post-model";
import * as auth from "../../services/auth-service";

export function indexByPostId(req, res) {
  // GET ALL LIKES ON POST BY ID
  Post.findOne({ _id: req.params.id }, (error, post) => {
    if (error) {
      return res.status(500).json();
    }
    return res.status(200).json({ post: post });
  }).populate("likes");
}

export function like(req, res) {
  // UPDATE TO LIKE POST
  const id = auth.getUserId(req);
  const username = auth.getUsername(req);

  User.findOne({ _id: id }, (error, user) => {
    if (error) {
      return res.status(500).json();
    }
    if (!user) {
      return remove.status(404).json();
    }

    var query = { _id: req.params.id },
      update = {
        $addToSet: { likes: { by: { userId: user._id, username: username } } }
      },
      options = { timestamps: false };

    Post.findByIdAndUpdate(query, update, options, error => {
      if (error) {
        return res.status(500).json();
      } else {
        return res.status(204).json();
      }
    });
  });
}

export function unlike(req, res) {
  // UPDATE TO UNLIKE POST
  const id = auth.getUserId(req);
  const username = auth.getUsername(req);

  User.findOne({ _id: id }, (error, user) => {
    if (error) {
      return res.status(500).json();
    }
    if (!user) {
      return remove.status(404).json();
    }

    var query = { _id: req.params.id },
      update = {
        $pull: { likes: { by: { userId: user._id, username: username } } }
      },
      options = { timestamps: false };

    Post.findByIdAndUpdate(query, update, options, error => {
      if (error) {
        return res.status(500).json();
      } else {
        return res.status(204).json();
      }
    });
  });
}

export function comment(req, res) {
  // POST COMMENT ON POST
}

export function update(req, res) {
  // UPDATE COMMENT ON POST
}

export function remove(req, res) {
  // REMOVE COMMENT ON POST
}
