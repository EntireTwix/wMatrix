# wMatrix
a port of [Matrix](https://github.com/EntireTwix/Matrix) for WASM

the currently supported types are 
```
mat_i32    : signed 32 bit integer
mat_f32    : 32 bit float
mat_f64    : 64 bit float                 (JS number)
```

all tests done with JS Array, speedup varies per system of course.
## Member Functions
| name                                   | 1000x1000 `mat_f32` speedup | 1000x1000 `mat_f64` speedup | 1000x1000 `mat_i32` speedup | description                                                                |
| :------------------------------------- | :-------------------------: | :-------------------------: | :-------------------------: | -------------------------------------------------------------------------- |
| `new Module.mat_*(mat_* m)`            |            3.36x            |            2.26x            |            3.43x            | Constructs a new Matrix from an existing one                               |
| `new Module.mat_*(size_t w, size_t h)` |            3.64x            |            1.18x            |            3.27x            | Constructs a new Matrix of `w * h`                                         |
| `.width()`                             |            `N/A`            |            `N/A`            |            `N/A`            | Returns the `width` of the matrix                                          |
| `.height()`                            |            `N/A`            |            `N/A`            |            `N/A`            | Returns the `height` of the matrix                                         |
| `.area()`                              |            0.57x            |            0.57x            |            0.57x            | Returns the `area` of the matrix                                           |
| `.capacity()`                          |            `N/A`            |            `N/A`            |            `N/A`            | Returns the current number of elements allocated                           |
| `.reserve(size_t n)`                   |            `N/A`            |            `N/A`            |            `N/A`            | Explicitly reserves `n` elements in memory if larger then current capacity |
| `.resize(size_t w, size_t h)`          |         0.32x - 34x         |         0.32x - 18x         |         0.32x - 31x         | Resizes the array to a new size, reserves more memory if nessasary         |
| `.flatten()`                           |            `N/A`            |            `N/A`            |            `N/A`            | Flattens a matrix into a 1D vector                                         |
| `.set_at(size_t w, size_t h, T val)`   |              ?              |              ?              |              ?              | Setting the value of the matrix, indexed as a 2D array                     |
| `.get_at(size_t w, size_t h)`          |              ?              |              ?              |              ?              | Indexing as a 2D array                                                     |
| `.set_fast_at(size_t idx, T val)`      |              ?              |              ?              |              ?              | Setting the value of the matrix, indexed as a 1D array                     |
| `.get_fast_at(size_t idx)`             |              ?              |              ?              |              ?              | Indexing as a 1D array                                                     |
 
 
## Operations
as a general rule, always use the built libary algs when possible, as they are much faster than vanilla JS.

| name                  | 1000x1000 `mat_f32` speedup | 1000x1000 `mat_f64` speedup | 1000x1000 `mat_i32` speedup | description                                                                |
| :-------------------- | :-------------------------: | :-------------------------: | :-------------------------: | -------------------------------------------------------------------------- |
| `sort_mat_*`          |             40x             |             41x             |            119x             | `std::sort` wrapper                                                        |
| `find_mat_*`          |                             |                             |                             | `std::find` wrapper                                                        |
| `accumulate_mat_*`    |                             |                             |                             | `std::accumulate` wrapper                                                  |
| `lower_bound_mat_*`   |                             |                             |                             | `std::lower_bound` wrapper                                                 |
| `upper_bound_mat_*`   |                             |                             |                             | `std::upper_bound` wrapper                                                 |
| `reverse_mat_*`       |                             |                             |                             | `std::reverse` wrapper                                                     |
| `min_element_mat_*`   |                             |                             |                             | `std::min_element` wrapper                                                 |
| `max_element_mat_*`   |                             |                             |                             | `std::max_element` wrapper                                                 |
| `iota_mat_*`          |                             |                             |                             | `std::iota` wrapper                                                        |
| `count_mat_*`         |                             |                             |                             | `std::count` wrapper                                                       |
| `binary_search_mat_*` |                             |                             |                             | `std::binary_search` wrapper                                               |
| `fill_mat_*_*`        |            8.25x            |             5x              |             7x              | `std::fill` wrapper                                                        |
| `rotate_mat_*`        |                             |                             |                             | `std::rotate` wrapper                                                      |
| `randfill_mat_*`      |            1.15x            |            1.22x            |            0.95x            | Fills a matrix with a random value between `min` and `max`                 |
| `equal_mat_*_*`       |                             |                             |                             | `std::equal` wrapper                                                       |
| `copy_mat_*_*`        |           11.63x            |             7x              |             14x             | Copies the contents of one matrix to another, without modifying dimensions |

speedup increases as size does.
