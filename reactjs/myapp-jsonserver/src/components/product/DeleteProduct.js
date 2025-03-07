import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FetchByIdProduct, deleteProduct } from "../service/ProductService";

function DeleteProduct() {
    const navigate = useNavigate();
    const { id } = useParams();

    const [product, setProduct] = useState({});

    useEffect(() => {
        FetchByIdProduct(id)
            .then(resp => setProduct(resp.data))
    }, []);

    const handleDelete = () => {
        if (window.confirm("Are you sure you want to delete this product?")) {
            deleteProduct(id)
                .then(() => {
                    alert("Product deleted successfully!");
                    navigate(-1); 
                })
        }
    };

    return (
        <div>
            <h3>Delete Product</h3>
            <div>
                <p><strong>ID:</strong> {product.id}</p>
                <p><strong>Name:</strong> {product.name}</p>
                <p><strong>Price:</strong> {product.price}</p>
                <p><strong>MFD:</strong> {product.mfd}</p>

                <button onClick={handleDelete}>Delete</button>
                <button onClick={() => navigate(-1)}>Back</button>
            </div>
        </div>
    );
}

export default DeleteProduct;
