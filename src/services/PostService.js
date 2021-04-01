import { http } from './HttpService'

export function getAllPosts() {
    return http().get('/post');
}

export function getPostById(id) {
    return http().get(`/post/${id}`);
}

export function createPost(task) {
    return http().post('/post', task);
}

export function deletePost(id) {
    return http().delete(`/post/${id}`);
}

export function updatePost(task) {
    return http().put('/post', task);
}
