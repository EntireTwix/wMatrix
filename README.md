# wMatrix
a port of [Matrix](https://github.com/EntireTwix/Matrix) for WASM

the currently supported types are 
```
mat_i32    : signed 32 bit integer
mat_i64    : signed 64 bit integer        (JS BigInt required)
mat_f32    : 32 bit float
mat_f64    : 64 bit float                 (JS number)
```

## Member Functions
| name                      | 1000x1000 `mat_f64` speedup | 1000x1000 `mat_i32` speedup | description                                            |
| :------------------------ | :-------------------------: | :-------------------------: | ------------------------------------------------------ |
| `.resize(size_t, size_t)` |             ~6x             |            ~11x             | Resizes the array to a new size                        |
| `.set_fast_at(size_t, T)` |              ?              |              ?              | Setting the value of the matrix, indexed as a 1d array |
| `.get_fast_at(size_t)`    |              ?              |              ?              | Indexing as a 1d array                                 |
 
 
## Operations
as a general rule, always use the built libary algs when possible, as they are much faster than vanilla JS.

| name         | 1000x1000 `mat_f64` speedup | 1000x1000 `mat_i32` speedup | description                                                                |
| :----------- | :-------------------------: | :-------------------------: | -------------------------------------------------------------------------- |
| `fill_mat_*` |             ~5x             |            ~28x             | Fills a matrix with a given value                                          |
| `copy_mat_*` |            ~11x             |            ~26x             | Copies the contents of one matrix to another, without modifying dimensions |
| `sort_mat_*` |            ~24x             |            ~78x             | Sorts a given matrix                                                       |

speedup increases as size does.
