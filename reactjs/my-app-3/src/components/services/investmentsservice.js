import axios from 'axios';

const baseUrl = "http://localhost:5000";

export function fetchAllInvestments() {
    return axios.get(baseUrl + "/investments");
}

export function fetchInvestmentById(id) {
    return axios.get(baseUrl + "/investments/" + id);
}

export function addInvestment(investment) {
    return axios.post(baseUrl + "/investments", investment);
}

export function updateInvestment(id, investment) {
    return axios.put(baseUrl + "/investments/" + id, investment);
}

export function deleteInvestment(id) {
    return axios.delete(baseUrl + "/investments/" + id);
}