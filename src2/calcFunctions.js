function areaOfCircle(n) {

    if (typeof(n) !== "number") {
        return "Error!";
    }

    if (arguments.length > 1) {
        return "please enter only one argument";
    }
    let result = 3.1416 * (n * n);
    return Number(result.toFixed(2));

}

function squareRoot(n) {
    if (typeof(n) !== "number") {
        return "Error!";
    }
    if (arguments.length > 1) {
        return "Error!";
    }
    let result = Math.sqrt(n);
    return Number(result.toFixed(2));
}

function squareMe(n) {
    if (typeof(n) !== "number") {
        return "Error!";
    }
    let result = (n * n);
    return Number(result.toFixed(2));
}

function areaOfTriangle(x, y) {
    if (arguments.length < 2) {
        return "Error!";
    }
    if (typeof(x) !== "number" || typeof(y) !== "number") {
        return "Error!";

    }
    if (x == 0 || y == 0) {
        return "Error!";
    }
    let result = (x * y) / 2;
    return result;
}

function yearsToFuture(x) {
    if (x > 2073) {
        return "Error!";
    }
    if (typeof(x) !== "number") {
        return "Error!";
    }

    if (arguments.length > 1) {
        return "Error!";
        
    }
    if (x < 0) {
        return "Error!";
    }
    if ((x % 1) !==0) {
        return "whole numbers only!";
    }
    let result = (2073 - x);
    return result;
}
