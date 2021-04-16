import User from "../../model/user-model";
import Post from "../../model/post-model";
import * as auth from "../../services/auth-service";
import { StringUtil } from "../../utilities/string-util";

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
      return res.status(404).json();
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
      return res.status(404).json();
    }

    var query = { _id: req.params.id },
      update = {
        $pull: { likes: { by: { userId: user._id, username: username } } }
      },
      options = { timestamps: false, upsert: false };

    Post.findByIdAndUpdate(query, update, options, error => {
      if (error) {
        return res.status(500).json();
      } else {
        return res.status(204).json();
      }
    });
  });
}

export function postComment(req, res) {
  // POST COMMENT ON POST
  const validation = validateIndex(req.body);
  if (!validation.isValid) {
    return res.status(400).json({ message: validation.message });
  }

  const id = auth.getUserId(req);
  const username = auth.getUsername(req);

  User.findOne({ _id: id }, (error, user) => {
    if (error) {
      return res.status(500).json();
    }
    if (!user) {
      return res.status(404).json();
    }

    var query = { _id: req.params.id },
      update = {
        $addToSet: {
          comments: { 
            by: { userId: user._id, username: username },
            commentContent: req.body.commentContent 
          }
        }
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

export function showComment(req, res) {
  // SHOW COMMENT ON POST
}

export function updateComment(req, res) {
  // UPDATE COMMENT ON POST
}

export function removeComment(req, res) {
  // REMOVE COMMENT ON POST
}

function validateIndex(body) {
  let errors = "";
  if (StringUtil.isEmpty(body.commentContent)) {
    errors += "Comment is required. ";
  }

  return {
    isValid: StringUtil.isEmpty(errors),
    message: errors
  };
}
