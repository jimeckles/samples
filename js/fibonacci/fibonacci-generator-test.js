

/* fibonacci generator
create a sequence of numbers, each new number based on the sum of the two previous numbers
starting with 0, 1
*/
var fibonacciSequence = [0, 1, 1];
function nextfibonacci(fibonacciSequence) {
    return (fibonacciSequence[fibonacciSequence.length - 1]) + (fibonacciSequence[fibonacciSequence.length - 2]);
}

function createFibonacciSequence() {
    /*run the test create 50 fibonacci numbers*/
    for (i = 0; i < 50; i++) {
        nextfib = nextfibonacci(fibonacciSequence);
        fibonacciSequence.push(nextfib);
    }
}

function print() {
    fibonacciSequence.forEach((fibnumber) => {
        console.log(fibnumber + ',');
    });
}
createFibonacciSequence();
print();
