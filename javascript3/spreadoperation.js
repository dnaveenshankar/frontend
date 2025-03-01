//variable arguments

function sum(a,...b) {

    let  sum = a;

    for(let i=0;i<b.length;i++){
        sum += b[i];
    }
    return sum;
}

let result1 = sum(10);
console.log("Result 1 = ",result1);

let result2 = sum(10,20);
console.log("Result 2 = ",result2);

let result3 = sum(10,20,30);
console.log("Result 3 = ",result3);

let result4 = sum(10,20,30,90,100);
console.log("Result 4 = ",result4);