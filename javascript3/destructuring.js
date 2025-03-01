const product ={
    productId: 1,
    productName: 'Laptop',
    productPrice: 50000
}

//console.log("Id: "+product.productId);
//console.log("Name: "+product.productName);
//console.log("Price: "+product.productPrice);

const {productId:pId, productName, productPrice} = product;

console.log("Id: "+pId);
console.log("Name: "+productName);
console.log("Price: "+productPrice);