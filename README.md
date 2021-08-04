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
| name                              | 1000x1000 `mat_f64` speedup | 1000x1000 `mat_i32` speedup | description                                            |
| :-------------------------------- | :-------------------------: | :-------------------------: | ------------------------------------------------------ |
| `.width()`                        |            `N/A`            |            `N/A`            | Retrieves the `width` of the matrix                    |
| `.height()`                       |            `N/A`            |            `N/A`            | Retrieves the `height` of the matrix                   |
| `.area()`                         |            0.70x            |            0.73x            | Retrieves the `area` of the matrix                     |
| `.capacity()`                     |            `N/A`            |            `N/A`            | Retrieves the current number of elements allocated     |
| `.reserve(size_t n)`              |            `N/A`            |            `N/A`            | Reserves `n` elements in memory                        |
| `.resize(size_t w, size_t h)`     |          0.85x-6x           |           2x-11x            | Resizes the array to a new size                        |
| `.flatten()`                      |            `N/A`            |            `N/A`            | Flattens a matrix into a 1D vector                     |
| `.set_fast_at(size_t idx, T val)` |              ?              |              ?              | Setting the value of the matrix, indexed as a 1D array |
| `.get_fast_at(size_t idx)`        |              ?              |              ?              | Indexing as a 1D array                                 |
 
 
## Operations
as a general rule, always use the built libary algs when possible, as they are much faster than vanilla JS.

| name         | 1000x1000 `mat_f64` speedup | 1000x1000 `mat_i32` speedup | description                                                                |
| :----------- | :-------------------------: | :-------------------------: | -------------------------------------------------------------------------- |
| `fill_mat_*` |             ~5x             |            ~28x             | Fills a matrix with a given value                                          |
| `copy_mat_*` |            ~11x             |            ~26x             | Copies the contents of one matrix to another, without modifying dimensions |
| `sort_mat_*` |            ~24x             |            ~78x             | Sorts a given matrix                                                       |

speedup increases as size does.
