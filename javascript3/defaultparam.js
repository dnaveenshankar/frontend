function sum(a,b,c=100){
    console.log("A : ",a);
    console.log("B : ",b);
    console.log("C : ",c);
    return a+b+c;
}

let result1= sum(10,20,30);
console.log("Sum : ",result1);

let result2= sum(10,20);
console.log("Sum : ",result2);

let result3= sum(10);
console.log("Sum : ",result3);