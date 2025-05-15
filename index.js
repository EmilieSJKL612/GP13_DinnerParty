// Q1
const dinner = {
    cheeseburger: 12,
    steak: 20,
    soup: 8,
    "mac and cheese": 14,
    "unlimited soup and salad combo": 16
};

console.table(dinner);


// Q2 - print names of each food => keys in object dinner
for (const key in dinner){
    console.log(key);
}

console.log(Object.keys(dinner));

// const keys = Object.keys(dinner);
// console.log(keys);



// Q3
//for (let j = 0; j < keys.length; ++j){
//    console.log(keys[j]);
//}

for (let food in dinner) {
    console.log(dinner[food]);
}

console.log(Object.values(dinner));


// Q4 - obj totalCost

let totalCost = 0;
for (let item in dinner) {
    totalCost += dinner[item];
}

console.log(totalCost);

// Q5 - obj prices
const prices = Object.values(dinner);
let totalCost1 = 0;
for (let i = 0; i < prices.length; i++) {
    totalCost1 += prices[i];
}

console.log(totalCost1);


// Q6 (not sure if this is what the question is asking for...)
// convert Q5's function
function sumValues(obj) {
    const values = Object.values(obj);
    let total = 0;
    for (let i = 0; i < values.length; i++) {
        total += values[i];
    }
    return total;
}

console.log(sumValues(dinner));

