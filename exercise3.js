function sumMultiple(a, b, n) {
    let total = 0;
    
    for (let i = 0; i < n; i++) {
        if (i % a === 0 || i % b === 0) {
            total = total+i;
        }
    }
    
    alert ('exercise ans is '  +total)
}
function calculateExercise3() {
  
    let first = parseInt(document.getElementById('first').value);
    let second = parseInt(document.getElementById('second').value);
    let limit = parseInt(document.getElementById('limit').value);

    sumMultiple(first,second,limit);
}