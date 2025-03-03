function MyOrders() {
    let customer = {
        customerId: 1,
        firstname: 'John',
        lastname: 'Doe',
        email: 'john@gmail.com',
        mobile: '9876543210'
    }

    let customerOrders = [
        {
            itemName: "Iphone",
            itemPrice: 100000,
            itemQty: 1
        },
        {
            itemName: "Samsung",
            itemPrice: 20000,
            itemQty: 1
        },
        {
            itemName: "Oppo",
            itemPrice: 50000,
            itemQty: 1
        }
    ]

    return (
        <div>
            <div>
                <h3>Customer Details</h3>
                <p>Customer Id: {customer.customerId}</p>
                <p>First Name: {customer.firstname}</p>
                <p>Last Name: {customer.lastname}</p>
                <p>Email: {customer.email}</p>
                <p>Mobile: {customer.mobile}</p>
            </div>
            <div>
                <h3>Order Details</h3>
                {
                    customerOrders.map((order, index) => (
                        <div key={index}>
                            <p>Index : {index}</p>
                            <p>Item Name :{order.itemName}</p>
                            <p>Price{order.itemPrice} </p>
                            <p>Quantity : {order.itemQty}</p>
                            <hr/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default MyOrders;
