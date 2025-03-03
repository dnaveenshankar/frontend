function content() {

    const myProduct = {
        productId: 101,
        productName: 'Laptop',
        price: 45000
    }

    const productHeading = <h3>Product Details</h3>;

    return (
        <div>
            <p>Sum = {10 + 20}</p>
            <div>
                {productHeading}
                <p>Id: {myProduct.productId}</p>
                <p>Name: {myProduct.productName}</p>
                <p>Price: {myProduct.price}</p>
            </div>
            <p>This is a paragraph-1</p>
            <p>This is a paragraph-2</p>
            <p>This is a paragraph-3</p>
            <p>This is a paragraph-4</p>
            <p>This is a paragraph-5</p>
            <p>This is a paragraph-6</p>
            <p>This is a paragraph-7</p>
            <p>This is a paragraph-8</p>
        </div>
    );
}

export default content;