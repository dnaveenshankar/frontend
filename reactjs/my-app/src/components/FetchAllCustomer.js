import React from "react";
import axios from "axios";

class FetchAllCustomers extends React.Component {
    constructor() {
        super();
        this.state = {
            customers: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:8081/customer/all')
            .then(resp => {
                console.log(resp);
                this.setState({
                    customers: resp.data  
                });
            })
    }

    render() {
        return (
            <div>
                <h2>Fetch All Customers</h2>
                {this.state.customers.map(customer => (
                    <div key={customer.customerId}>
                        <p>ID: {customer.customerId}</p>
                        <p>Name: {customer.firstName} {customer.lastName}</p>
                        <p>Email: {customer.email}</p>
                        <p>Mobile: {customer.mobile}</p>
                        <p>City: {customer.city}</p>
                        <h4>Orders:</h4>
                        {customer.orders.length > 0 ? (
                            customer.orders.map(order => (
                                <div key={order.orderId}>
                                    <p>Order ID: {order.orderId}</p>
                                    <p>Order Date: {order.orderDate}</p>
                                    <p>Order Amount: {order.orderAmount}</p>
                                    <p>Status: {order.orderStatus}</p>
                                    <h5>Order Items:</h5>
                                    {order.orderItems.map(item => (
                                        <p key={item.orderItemId}>Item ID: {item.orderItemId}, Mobile ID: {item.mobileId}, Qty: {item.qty}, Total: {item.itemTotal}</p>
                                    ))}
                                </div>
                            ))
                        ) : (
                            <p>No orders found.</p>
                        )}
                    </div>
                ))}
            </div>
        );
    }
}

export default FetchAllCustomers;
