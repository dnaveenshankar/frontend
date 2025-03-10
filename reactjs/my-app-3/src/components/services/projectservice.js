import axios from 'axios';

const baseUrl = "http://localhost:5000";

export function fetchAllProjects() {
    return axios.get(baseUrl + "/projects");
}

export function fetchProjectById(id) {
    return axios.get(baseUrl + "/projects/" + id);
}

export function addProject(project) {
    return axios.post(baseUrl + "/projects", project);
}

export function updateProject(id, project) {
    return axios.put(baseUrl + "/projects/" + id, project);
}

export function deleteProject(id) {
    return axios.delete(baseUrl + "/projects/" + id);
}