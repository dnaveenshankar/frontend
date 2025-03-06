import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function PlaceOrder() {

    const [customerId, setCustomerId] = useState('');
    const navigate = useNavigate();

    const handlePlaceOrder = (event) => {
        event.preventDefault();

        axios.get(`http://localhost:8081/order/checkout?customerId=${customerId}`)
            .then(resp => {
                alert(`Order placed successfully!\nOrder ID: ${resp.data.orderId}\nOrder Amount: ${resp.data.orderAmount}\nOrder Status: ${resp.data.orderStatus}`);
                resetForm();
            })
            .catch(err => {
                if (err.response) {
                    alert(err.response.data);
                } 
            });
    }

    const resetForm = () => {
        setCustomerId('');
    }

    return (
        <div className="container mt-4">
            <h3 className="text-primary">Place Order</h3>
            <form onSubmit={handlePlaceOrder}>
                <div className="form-group">
                    <label className="form-label">Customer ID</label>
                    <input type="text" className="form-control" value={customerId} onChange={(event) => setCustomerId(event.target.value)} required />
                </div>
                <div className="form-group mt-3">
                    <button type="submit" className="btn btn-primary">Place Order</button>
                    <button type="button" className="btn btn-secondary mx-2" onClick={resetForm}>Reset</button>
                    <button type="button" className="btn btn-danger" onClick={() => navigate(-1)}>Back</button>
                </div>
            </form>
        </div>
    )
}

export default PlaceOrder;
