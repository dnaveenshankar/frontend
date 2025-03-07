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
export function deleteProduct(id) {
    return axios.delete(baseUrl + "/products/" + id);
}
export function updateProduct(id, product) {
    return axios.put(`http://localhost:5001/products/${id}`, product);
}
