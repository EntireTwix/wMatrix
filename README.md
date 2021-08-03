# wMatrix
a port of [Matrix](https://github.com/EntireTwix/Matrix) for WASM

## Operations
as a general rule, always use the built libary algs when possible, as they are much faster then vanilla JS.

| name       | 1000x1000 speedup | description                                                                |
| :--------- | :---------------: | -------------------------------------------------------------------------- |
| `fill_mat_*` |                   | Fills a matrix with a given value                                          |
| `copy_mat_*` |                   | Copies the contents of one matrix to another, without modifying dimensions |
| `sort_mat_*` |                   | Sorts a given matrix                                                       |
