
// Calculte and Sum of even number
let evenN: number = 100;
let sum: number = 0;
let calculate: number[] = [];
for (let index = 0; index < evenN; index++) {
    if (evenN % 2 == 0) {
        sum = sum + index;
        calculate.push(sum)
    }
}
console.log("cal and sum", sum, "Calculated value", calculate)

// Find Even number 
let Enumber: number[] = [10, 3, 4, 5, 6, 2, 7, 8, 10, 12, 13, 15, 16, 17, 19, 20]
for (let index = 0; index < Enumber.length; index++) {
    if (Enumber[index] % 2 == 0) {
        console.log("Even No", Enumber[index])
    }
}

// Odd number 

let Odnumber: number[] = [10, 3, 4, 5, 6, 2, 7, 8, 10, 12, 13, 15, 16, 17, 19, 20]
for (let index = 0; index < Enumber.length; index++) {
    if (Odnumber[index] % 2 != 0) {
        console.log("Odd No", Odnumber[index])
    }

}


// Write programe calculte area of circle

// let radius:number =  12;
let area: number = 0;
function CalculateArea(rad: number) {
    area = Math.PI * rad * rad;
    return area
}
CalculateArea(12)
console.log("arae of circle is", area)


// Write a program grade remover

let gradeArr: number[] = [90, 80, 70, 60, 65, 50, 45, 30, 35, 20, 25, 15, 10]

for (let index = 0; index < gradeArr.length; index++) {
    if (gradeArr[index] <= 50) {
        gradeArr.splice(index, 1)
        index--
    }

}
console.log("Remove below 50 number", gradeArr)

// Progaram 5
let LargeArr: number[] = [80, 70, 60, 65, 50, 45, 30, 35, 20, 25, 15, 10, 90]

let match: number = LargeArr[0]

for (let index = 1; index < LargeArr.length; index++) {
    if (LargeArr[index] > match) {
        match = LargeArr[index]
    }

}
