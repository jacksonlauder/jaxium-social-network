import { http } from "./HttpService";

export function getAllPosts() {
  return http().get("/post");
}

export function getAllPostsByUserId(id) {
  return http().get(`/post/user${id}`);
}

export function getPostById(id) {
  return http().get(`/post/${id}`);
}

export function createPost(post) {
  return http().post("/post", post);
}

export function deletePost(id) {
  return http().delete(`/post/${id}`);
}

export function updatePost(post) {
  return http().put("/post", post);
}

export function likePost(id) {
  return http().put(`/post/${id}`);
}
