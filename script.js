alert("Hello class!");

alert("The value of 4/3+1/3+1/3 is:  "+(4/3+1/3+1/3));
alert("The value of 1/3+1/3+4/3 is:  "+(1/3+1/3+4/3));
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