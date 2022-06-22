function alternatingSums(arr) {    
    let totalWeight1 = 0;
    let totalWeight2 = 0;
    for (let i = 0; i < arr.length; i++) { 
        if (i % 2 === 0) {
            totalWeight1 +=arr[i];
        }
        else { 
            totalWeight2 += arr[i];
        }
    }    
    return [...[], totalWeight1, totalWeight2];
}

let demo = [60, 40, 55, 75, 64, 51, 68, 78];
let finalResult = alternatingSums(demo);
console.log("Tong can nang 2 team lan luot là: ");
console.log(finalResult);
