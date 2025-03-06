import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function AddItemToCart() {

    const [cartId, setCartId] = useState('');
    const [mobileId, setMobileId] = useState('');
    const [qty, setQty] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        const payload = {
            cartId: cartId,
            mobileId: mobileId,
            qty: qty
        }

        axios.post("http://localhost:8081/cart/addItem", payload)
            .then(resp => {
                alert("Item added to cart! You new cart Total: " + resp.data.cartTotal);
                resetForm();
            })
            .catch(err => {
                if (err.response) {
                    alert(err.response.data);
                } 
            });
    }

    const resetForm = () => {
        setCartId('');
        setMobileId('');
        setQty('');
    }

    return (
        <div className="container mt-4">
            <h3 className="text-primary">Add Item to Cart</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="form-label">Cart ID</label>
                    <input type="text" className="form-control" value={cartId} onChange={(event) => setCartId(event.target.value)} required />
                </div>
                <div className="form-group">
                    <label className="form-label">Mobile ID</label>
                    <input type="text" className="form-control" value={mobileId} onChange={(event) => setMobileId(event.target.value)} required />
                </div>
                <div className="form-group">
                    <label className="form-label">Quantity</label>
                    <input type="number" className="form-control" value={qty} onChange={(event) => setQty(event.target.value)} required />
                </div>
                <div className="form-group mt-3">
                    <button type="submit" className="btn btn-primary">Add to Cart</button>
                    <button type="button" className="btn btn-secondary mx-2" onClick={resetForm}>Reset</button>
                    <button type="button" className="btn btn-danger" onClick={() => navigate(-1)}>Back</button>
                </div>
            </form>
        </div>
    )
}

export default AddItemToCart;