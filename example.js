
const Matrix = require('./wmat.js')


Matrix().then(function(Module) { 
    let a = new Module.mat_f64(100, 100);
    let sum_a = 0, sum_b = 0;
    for(let i = 0; i < 100; i++) {
        let c = [];
        let sz = a.area();
        for(let i = 0; i < sz; i++) {
            a.set_fast_at(i, Math.random()*100);
            c.push(Math.random()*100);
        }
        
        {
            let t0 = performance.now()
            c.sort();
            let t1 = performance.now()
            sum_a += (t1 - t0);
        }
        {
            let t0 = performance.now()
            Module.sort_mat_f64(a);
            let t1 = performance.now()
            sum_b += (t1 - t0);
        }
    }
    console.log(sum_a/100);
    console.log(sum_b/100);    
});
