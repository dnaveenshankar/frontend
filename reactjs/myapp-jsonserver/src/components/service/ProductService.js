import axios from 'axios';

const baseUrl = "http://localhost:5000"

export function FetchAllProducts(){

    return axios.get(baseUrl+"/myproducts/");
}

export function FetchByIdProduct(id){

    return axios.get(baseUrl+"/myproducts/"+id)
}

export function AddProducts(product){

    return axios.post(baseUrl+"/myproducts/",product)
}
