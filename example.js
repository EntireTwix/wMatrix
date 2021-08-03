const Matrix = require('./hmat.js')


Matrix().then(function(Module) { 
    let a = new Module.mat_float(1000, 1000);
    let b = [];
    let sz = a.area();
    for(let i = 0; i < sz; i++) {
        a.set_fast_at(i, Math.random()*100);
        b.push(Math.random()*100);
    }
    {
        let t0 = performance.now()
        b.sort();
        let t1 = performance.now()
        console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.")
    }
    {
        let t0 = performance.now()
        Module.sort_mat_float(a);
        let t1 = performance.now()
        console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.")
    }
});
