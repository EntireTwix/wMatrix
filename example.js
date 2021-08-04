
const Matrix = require('./wmat.js')

function resize(arr, newSize, defaultValue) {
    while(newSize > arr.length)
        arr.push(defaultValue);
    arr.length = newSize;
}

Matrix().then(function(Module) { 
    let a = new Module.mat_i32(1000, 1000);
    let c = [];
    let sz = a.area();
    for(let i = 0; i < sz; i++) {
        a.set_fast_at(i, Math.random()*100);
        c.push(Math.random()*100);
    }
    let sum_a = 0, sum_b = 0;
    for(let i = 0; i < 10; i++) {
        let b = new Module.mat_i32(1000, 1000);
        let d = [];
        
        {
            let t0 = performance.now()
            // resize(d, 4000000, 0);
            // for(let j = 0; j < sz; j++) {
                // d[j] = d[j];
                // d[j] = 10;
            // }
            // c.sort();
            let t1 = performance.now()
            sum_a += (t1 - t0);
        }
        {
            let t0 = performance.now()
            // b.resize(2000, 2000);
            // Module.copy_mat_i32_i32(a, b);
            // Module.fill_mat_i32_i32(a, 10);
            // Module.sort_mat_i32(a);
            let t1 = performance.now()
            sum_b += (t1 - t0);
        }
    }
    console.log(sum_a/sum_b);    
});
