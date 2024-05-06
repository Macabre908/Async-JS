/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

const promiseFunction = (n) => {
    let promise = new Promise( resolve => {
        setTimeout(resolve, n * 1000);
    });

    return promise;
}

module.exports = promiseFunction;