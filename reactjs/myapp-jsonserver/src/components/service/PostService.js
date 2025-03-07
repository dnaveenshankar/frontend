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
