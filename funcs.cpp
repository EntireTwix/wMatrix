#include <emscripten/bind.h>
#include "hmat.hpp"
#include "util_ops.hpp"
#include "stl_wrappers.hpp"

using namespace emscripten;
using namespace mat;

#define COMBINE_MACRO_MACRO(A, B) #A #B
#define COMBINE_MACRO_STR(A, B) #A B

#define MAT_GEN(type_name, base_type)                                                        \
    class_<hMat<base_type>>(#type_name)                                                      \
        .constructor()                                                                       \
        .constructor<const hMat<base_type> &>()                                              \
        .constructor<size_t, size_t>()                                                       \
        .function("width", &hMat<base_type>::Width)                                          \
        .function("height", &hMat<base_type>::Height)                                        \
        .function("area", &hMat<base_type>::Area)                                            \
        .function("capacity", &hMat<base_type>::Capacity)                                    \
        .function("reserve", &hMat<base_type>::Reserve)                                      \
        .function("resize", &hMat<base_type>::Resize)                                        \
        .function("flatten", &hMat<base_type>::Flatten)                                      \
        .function("get_at", &hMat<base_type>::GetAt)                                         \
        .function("get_fast_at", &hMat<base_type>::GetFastAt)                                \
        .function("set_at", &hMat<base_type>::SetAt)                                         \
        .function("set_fast_at", &hMat<base_type>::SetFastAt);                               \
    function(COMBINE_MACRO_STR(sort_, #type_name), &SortMut<hMat<base_type>>);               \
    function(COMBINE_MACRO_STR(find_, #type_name), &Find<hMat<base_type>>);                  \
    function(COMBINE_MACRO_STR(accumulate_, #type_name), &Accumulate<hMat<base_type>>);      \
    function(COMBINE_MACRO_STR(lower_bound_, #type_name), &LowerBound<hMat<base_type>>);     \
    function(COMBINE_MACRO_STR(upper_bound_, #type_name), &UpperBound<hMat<base_type>>);     \
    function(COMBINE_MACRO_STR(reverse_, #type_name), &Reverse<hMat<base_type>>);            \
    function(COMBINE_MACRO_STR(min_element_, #type_name), &MinElement<hMat<base_type>>);     \
    function(COMBINE_MACRO_STR(max_element_, #type_name), &MaxElement<hMat<base_type>>);     \
    function(COMBINE_MACRO_STR(iota_, #type_name), &Iota<hMat<base_type>>);                  \
    function(COMBINE_MACRO_STR(count_, #type_name), &Count<hMat<base_type>>);                \
    function(COMBINE_MACRO_STR(binary_search_, #type_name), &BinarySearch<hMat<base_type>>); \
    function(COMBINE_MACRO_STR(fill_, #type_name), &Fill<hMat<base_type>>);                  \
    function(COMBINE_MACRO_STR(rotate_, #type_name), &Rotate<hMat<base_type>>);              \
    function(COMBINE_MACRO_STR(randfill_, #type_name), &RandFill<hMat<base_type>>);

EMSCRIPTEN_BINDINGS(module)
{
    MAT_GEN(mat_i32, int32_t)

    function("copy_mat_i32_i32", &Copy<hMat<int32_t>, hMat<int32_t>>);
    function("copy_mat_i32_i64", &Copy<hMat<int32_t>, hMat<int64_t>>);
    function("copy_mat_i32_f32", &Copy<hMat<int32_t>, hMat<float>>);
    function("copy_mat_i32_f64", &Copy<hMat<int32_t>, hMat<double>>);

    function("equal_mat_i32_i32", &Equal<hMat<int32_t>, hMat<int32_t>>);
    function("equal_mat_i32_i64", &Equal<hMat<int32_t>, hMat<int64_t>>);
    function("equal_mat_i32_f32", &Equal<hMat<int32_t>, hMat<float>>);
    function("equal_mat_i32_f64", &Equal<hMat<int32_t>, hMat<double>>);

    MAT_GEN(mat_i64, int64_t)

    function("copy_mat_i64_i32", &Copy<hMat<int64_t>, hMat<int32_t>>);
    function("copy_mat_i64_i64", &Copy<hMat<int64_t>, hMat<int64_t>>);
    function("copy_mat_i64_f32", &Copy<hMat<int64_t>, hMat<float>>);
    function("copy_mat_i64_f64", &Copy<hMat<int64_t>, hMat<double>>);

    function("equal_mat_i64_i32", &Equal<hMat<int32_t>, hMat<int32_t>>);
    function("equal_mat_i64_i64", &Equal<hMat<int32_t>, hMat<int64_t>>);
    function("equal_mat_i64_f32", &Equal<hMat<int32_t>, hMat<float>>);
    function("equal_mat_i64_f64", &Equal<hMat<int32_t>, hMat<double>>);

    MAT_GEN(mat_f32, float)

    function("copy_mat_f32_i32", &Copy<hMat<float>, hMat<int32_t>>);
    function("copy_mat_f32_i64", &Copy<hMat<float>, hMat<int64_t>>);
    function("copy_mat_f32_f32", &Copy<hMat<float>, hMat<float>>);
    function("copy_mat_f32_f64", &Copy<hMat<float>, hMat<double>>);

    function("equal_mat_f32_i32", &Equal<hMat<int32_t>, hMat<int32_t>>);
    function("equal_mat_f32_i64", &Equal<hMat<int32_t>, hMat<int64_t>>);
    function("equal_mat_f32_f32", &Equal<hMat<int32_t>, hMat<float>>);
    function("equal_mat_f32_f64", &Equal<hMat<int32_t>, hMat<double>>);

    MAT_GEN(mat_f64, double)

    function("copy_mat_f64_i32", &Copy<hMat<double>, hMat<int32_t>>);
    function("copy_mat_f64_i64", &Copy<hMat<double>, hMat<int64_t>>);
    function("copy_mat_f64_f32", &Copy<hMat<double>, hMat<float>>);
    function("copy_mat_f64_f64", &Copy<hMat<double>, hMat<double>>);

    function("equal_mat_f64_i32", &Equal<hMat<int32_t>, hMat<int32_t>>);
    function("equal_mat_f64_i64", &Equal<hMat<int32_t>, hMat<int64_t>>);
    function("equal_mat_f64_f32", &Equal<hMat<int32_t>, hMat<float>>);
    function("equal_mat_f64_f64", &Equal<hMat<int32_t>, hMat<double>>);
}

// em++ --bind funcs.cpp -O3 -fno-exceptions -fno-rtti -DEMSCRIPTEN_HAS_UNBOUND_TYPE_NAMES=0 -s WASM=1 -s ALLOW_MEMORY_GROWTH=1 -s WASM_BIGINT --closure 1 -s ASSERTIONS=0 -s MODULARIZE=1 -s 'EXPORT_NAME="Matrix"' -o wmat.js
