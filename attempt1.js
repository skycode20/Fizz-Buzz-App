let n = 30;
let numArray = [...Array(n+1).keys()].slice(1);

for (let i = 0; i < numArray.length; i++) {
    if (numArray[i] % 3 == 0) {

        console.log("fizz")

    } if (numArray[i] % 5 == 0) {

        console.log("buzz")

    } if (numArray[i] % 15 == 0) {

        console.log("fizz-buzz")
    }
    console.log(numArray[i])
};

// numArray.filter((n) => {
//     return n % 3 == 0;
    
// })

// numArray[i].filter(n => n % 3 == 0)