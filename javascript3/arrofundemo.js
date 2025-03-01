function sayHello() {
    console.log("Hello, World!");
}

sayHello();

let f1 = function ( ) {
    console.log("Test function");
}

f1();


//ES6
let f2 = () => {
    console.log("Array function");
}

f2();

let sum = (a, b) => {
    return a + b;
}

let result = sum(10, 20);
console.log("Sum =",result);

//fucntion returns another function

let myfun = (a,b,c) => {

    let v = a*a+b*b+c*c;
    console.log("Result 1 =",v);

    return () => {
        console.log("Result 2 =",v*100);
    };
}

const finalResult = myfun(1,2,3);

finalResult();