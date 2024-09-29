function sumMultiplesOf3And5() {
    let total = 0;
    
    for (let i = 0; i < 1000; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            total = total+i;
        }
    }
    
    alert ('exercise one ans is '  +total)
}



sumMultiplesOf3And5();