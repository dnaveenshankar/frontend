import axios from 'axios';

const baseUrl = "http://localhost:5001";

export function fetchAllComments() {
    return axios.get(baseUrl + "/comments");
}

export function fetchCommentById(id) {
    return axios.get(baseUrl + "/comments/" + id);
}

export function addComment(comment) {
    return axios.post(baseUrl + "/comments/", comment);
}
