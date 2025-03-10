import axios from "axios";

const baseUrl = "http://localhost:5000/projects";

export function fetchAllProjects() {
    return axios.get(baseUrl);
}

export function fetchProjectById(id) {
    return axios.get(`${baseUrl}/${id}`);
}

export async function fetchNextProjectId() {
    const response = await axios.get(`${baseUrl}`);
    const projects = response.data;

    if (projects.length === 0) {
        return 1; 
    }
    const lastId = Math.max(...projects.map(proj => parseInt(proj.id, 10) || 0));
    return lastId + 1;
}


export async function addProject(projectData) {
    const nextId = await fetchNextProjectId();
    const projectWithId = { id: nextId, ...projectData };
    return axios.post(baseUrl, projectWithId);
}

export function updateProject(id, projectData) {
    return axios.put(`${baseUrl}/${id}`, projectData);
}

export function deleteProject(id) {
    return axios.delete(`${baseUrl}/${id}`);
}
