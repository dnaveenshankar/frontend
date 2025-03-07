import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { FetchAllProducts } from "../service/ProductService";

function FetchAllProduct() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        FetchAllProducts().then(resp => setProducts(resp.data));
    }, []);

    return (
        <div>
            <Link to ="/product/add">Add New Product</Link>
            <h3>All products</h3>
            <div>
                {
                    products.map(product => (
                        <div key={product.id}>
                            <p>{product.id} {product.name} {product.price}&nbsp; &nbsp;
                            <Link to={`/product/view/${product.id}`}>View</Link>&nbsp; &nbsp;
                            <Link to={`/product/edit/${product.id}`}>Edit</Link>&nbsp; &nbsp;
                            <Link to={`/product/delete/${product.id}`}>Delete</Link></p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default FetchAllProduct; 