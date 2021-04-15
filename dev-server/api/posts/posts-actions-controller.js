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

export function liked(req, res) {
  // GET BOOL REPRESENTING LIKED OR NOT
  // const id = auth.getUserId(req);
}

export function like(req, res) {
  // POST LIKE ON POST
  const id = auth.getUserId(req);
  const username = auth.getUsername(req);

  User.findOne({ _id: id }, (error, user) => {
    if (error) {
      return res.status(500).json();
    }
    if (!user) {
      return remove.status(404).json();
    }

    Post.findByIdAndUpdate(
      { _id: req.params.id },
      { $push: { likes: { by: username } } },
      error => {
        if (error) {
          return res.status(500).json();
        } else {
          return res.status(204).json();
        }
      }
    );
  });
}

export function unlike(req, res) {
  // DELETE LIKE ON POST
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
