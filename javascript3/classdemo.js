class product{
    /*constructor(){
        this.productId =0;
        this.productName = null;
        this.productPrice = 0.0;
    }*/
    constructor(productId, productName, productPrice){
        this.productId = productId;
        this.productName = productName;
        this.productPrice = productPrice;
    }

    display(){
        console.log("Id: "+this.productId);
        console.log("Name: "+this.productName);
        console.log("Price: "+this.productPrice);
    }
}

let p1 = new product();
p1.productId = 1;
p1.productName = 'Laptop';
p1.productPrice = 50000;

p1.display();

let p2 = new product(2, 'Mobile', 20000);
p2.display();