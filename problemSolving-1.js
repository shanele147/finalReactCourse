function adjacentElementsProduct(inputArr) { 
    let result = [];
    for (let i = 0; i < inputArr.length-1; i++) { 
        result = [...result, inputArr[i] * inputArr[i + 1]];
    }
    return result;
}

let demo = [4, 12, 6, 20, -10];
let finalResult = adjacentElementsProduct(demo);
console.log("Tich lon nhat la - " + Math.max(...finalResult));
