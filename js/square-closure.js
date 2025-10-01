// This is the outer function that will form the closure
function createSquareFunction() {
    // This is the inner function that "closes over" the num variable
    function square(num) {
        return num * num;
    }
    return square;
}