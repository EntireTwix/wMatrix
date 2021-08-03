# wMatrix
a port of [Matrix](https://github.com/EntireTwix/Matrix) for WASM

the currently supported types are 
```
mat_i32   : signed 32 bit integer
mat_uin32 : unsigned 32 bit integer
mat_bool  : 8 bit bool (no bit array yet)
mat_float : 64 bit double
```

## Operations
as a general rule, always use the built libary algs when possible, as they are much faster then vanilla JS.

| name                   | 1000x1000 speedup | description                                                                |
| :--------------------- | :---------------: | -------------------------------------------------------------------------- |
| `fill_mat_*`           |       ~25x        | Fills a matrix with a given value                                          |
| `copy_mat_*`           |       ~15x        | Copies the contents of one matrix to another, without modifying dimensions |
| `sort_mat_*`           |       ~24x        | Sorts a given matrix                                                       |
| `.get_fast_at(size_t)` |       ~36x        | Indexing as a 1d array                                                     |

speedup increases as size does.
