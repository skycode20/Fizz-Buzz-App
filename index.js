// array of numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
    30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
    40, 41, 42, 43, 44, 45, 46, 47, 48, 49,
    50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
    60, 61, 62, 63, 64, 65, 66, 67, 68, 69,
    70, 71, 72, 73, 74, 75, 76, 77, 78, 79,
    80, 81, 82, 83, 84, 85, 86, 87, 88, 89,
    90, 91, 92, 93, 94, 95, 96, 97, 98, 99,
    100];

// function to check if divide by 3
// function divideByThree () {
//     if (numbers % 3 == 0) {
//         console.log(result)
//     }
// }

// function to divide by 5


// for loop to cycle through numbers
let text = "";
for (let i=0; i <= numbers.length; i++) {
    // check to see if number can divide by 3, 5
    if (numbers[i] % 3 == 0)  {

        console.log("fizz")

        // console log results
        

    } if (numbers[i] % 5 == 0) {
        console.log("buzz")

        // console log results
        

    } if (numbers[i] % 15 == 0) {
        console.log("fizz-buzz")

        // console log results
    
    }

    console.log(numbers[i])
}

