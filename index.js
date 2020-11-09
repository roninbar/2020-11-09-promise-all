const { performance } = require('perf_hooks');

function doSomething(ms) {
    return new Promise((resolve, reject) => {
        let time = performance.now();
        while (performance.now() - time < ms)
            ;
        resolve();
    });
}

function run(ms, message) {
    doSomething(ms).then(function () {
        console.log(message);
    });
}

Promise.all([run(150, "first"), run(10, "second")]);