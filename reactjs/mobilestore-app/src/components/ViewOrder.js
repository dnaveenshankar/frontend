import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function ViewOrder() {

    const [orderId, setOrderId] = useState('');
    const [order, setOrder] = useState(null);
    const navigate = useNavigate();

    const handleViewOrder = (event) => {
        event.preventDefault();

        axios.get(`http://localhost:8081/order/${orderId}`)
            .then(resp => {
                setOrder(resp.data);
            })
            .catch(err => {
                if (err.response) {
                    alert(err.response.data);
                } else {
                    alert("An unexpected error occurred.");
                }
            });
    }

    return (
        <div className="container mt-4">
            <h3 className="text-primary">View Order</h3>
            <form onSubmit={handleViewOrder}>
                <p>
                    <label className="form-label">Order ID</label>
                    <input type="text" className="form-control" value={orderId} onChange={(event) => setOrderId(event.target.value)} required />
                </p>
                <p>
                    <button type="submit" className="btn btn-primary">View Order</button>
                    <button type="button" className="btn btn-danger mx-2" onClick={() => navigate(-1)}>Back</button>
                </p>
            </form>

            {order && (
                <div className="mt-4">
                    <h4>Order Details</h4>
                    <p>Order ID: {order.orderId}</p>
                    <p>Order Date: {order.orderDate}</p>
                    <p>Order Amount: {order.orderAmount}</p>
                    <p>Order Status: {order.orderStatus}</p>
                    <h5>Order Items:</h5>
                    {order.orderItems.map(item => (
                        <div>
                            <p>Order Item ID: {item.orderItemId}</p>
                            <p>Mobile ID: {item.mobileId}</p>
                            <p>Quantity: {item.qty}</p>
                            <p>Item Total: {item.itemTotal}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default ViewOrder;