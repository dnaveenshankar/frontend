import axios from 'axios';

const baseUrl = "http://localhost:5001";

export function fetchAllPosts() {
    return axios.get(baseUrl + "/posts");
}

export function fetchPostById(id) {
    return axios.get(baseUrl + "/posts/" + id);
}

export function addPost(post) {
    return axios.post(baseUrl + "/posts/", post);
}

export function updatePost(id, post) {
    return axios.put(baseUrl + "/posts/" + id, post);
}

export function deletePost(id) {
    return axios.delete(baseUrl + "/posts/" + id);
}
