import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

function DeleteCustomer() {
    const navigate = useNavigate();
    const [customer, setCustomer] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8081/customer/${id}`)
            .then(resp => { setCustomer(resp.data); });
    }, []);

    const handleDelete = () => {
        if (window.confirm(`Are you sure you want to delete customer with ID: ${id}?`)) {
            axios.delete(`http://localhost:8081/customer/${id}`)
                .then(() => {
                    alert(`Customer deleted successfully with ID: ${id}`);
                    navigate(-1);
                });
        }
    };

    return (
        <div>
            <h1>Customer Details</h1>
            {customer !== null &&
                <div>
                    <h2>ID: {customer.customerId}</h2>
                    <h2>Name: {customer.firstName} {customer.lastName}</h2>
                    <h2>Email: {customer.email}</h2>
                    <h2>Mobile: {customer.mobile}</h2>
                    <h2>City: {customer.city}</h2>

                    <button onClick={handleDelete}>Delete</button>
                    <Link to="/customer/all"><button>Cancel</button></Link>
                </div>
            }
        </div>
    );
}

export default DeleteCustomer;
