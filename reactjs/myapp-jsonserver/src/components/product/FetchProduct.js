import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FetchByIdProduct } from "../service/ProductService";

function FetchProduct() {
    const [product, setProduct] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        FetchByIdProduct(id).then(resp => setProduct(resp.data));
    }); 

    return (
        <div>
            <h3>Product Details</h3>
            <div>
                {product !== null && (
                    <div>
                        <h2>Product Details</h2>
                        <p>Id: {product.id}</p>
                        <p>Name: {product.name}</p>
                        <p>Price: {product.price}</p>
                        <p>MFD: {product.mfd}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default FetchProduct;