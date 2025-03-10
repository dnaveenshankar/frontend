import axios from 'axios';

const baseUrl = "http://localhost:5000/investments";

export function fetchAllInvestments() {
    return axios.get(baseUrl);
}

export function fetchInvestmentsByProjectId(projectId) {
    return axios.get(`${baseUrl}?projectId=${projectId}`);
}

export function addInvestment(investment) {
    return axios.post(baseUrl, investment);
}

export function updateInvestment(id, investment) {
    return axios.put(`${baseUrl}/${id}`, investment);
}

export function deleteInvestment(id) {
    return axios.delete(`${baseUrl}/${id}`);
}

export function searchInvestmentsByName(name) {
    return axios.get(`${baseUrl}?investorName=${name}`);
}
