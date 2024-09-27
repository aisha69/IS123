alert(
function sumMultiplesOf3And5(limit) {
    let total = 0;
    
    for (let i = 0; i < limit; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            total = total+i;
        }
    }
    
    return total;
}

)