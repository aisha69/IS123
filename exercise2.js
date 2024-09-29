
function sumMultipleWithParams(a, b, n) {
    let total = 0;
    
    for (let i = 0; i < n; i++) {
        if (i % a === 0 || i % b === 0) {
            total = total+i;
        }
    }
    
    alert ('exercise two ans is '  +total)
}

sumMultipleWithParams(3,8,500);