#include <emscripten/bind.h>
#include "hmat.hpp"
#include "util_ops.hpp"
#include "stl_wrappers.hpp"

using namespace emscripten;
using namespace mat;

#define MAT_GEN(type_name, base_type)                         \
    class_<hMat<base_type>>(#type_name)                       \
        .constructor()                                        \
        .constructor<const hMat<base_type> &>()               \
        .constructor<size_t, size_t>()                        \
        .function("width", &hMat<base_type>::Width)           \
        .function("height", &hMat<base_type>::Height)         \
        .function("area", &hMat<base_type>::Area)             \
        .function("capacity", &hMat<base_type>::Capacity)     \
        .function("reserve", &hMat<base_type>::Reserve)       \
        .function("resize", &hMat<base_type>::Resize)         \
        .function("flatten", &hMat<base_type>::Flatten)       \
        .function("get_at", &hMat<base_type>::GetAt)          \
        .function("get_fast_at", &hMat<base_type>::GetFastAt) \
        .function("set_at", &hMat<base_type>::SetAt)          \
        .function("set_fast_at", &hMat<base_type>::SetFastAt);

EMSCRIPTEN_BINDINGS(module)
{
    MAT_GEN(mat_i32, int32_t)
    function("fill_mat_i32", &Fill<hMat<int32_t>>);

    function("copy_mat_i32_i32", &Copy<hMat<int32_t>, hMat<int32_t>>);
    function("copy_mat_i32_i64", &Copy<hMat<int32_t>, hMat<int64_t>>);
    function("copy_mat_i32_f32", &Copy<hMat<int32_t>, hMat<float>>);
    function("copy_mat_i32_f64", &Copy<hMat<int32_t>, hMat<double>>);

    function("sort_mat_i32", &SortMut<hMat<int32_t>>);

    function("randfill_mat_i32", &RandFill<hMat<int32_t>>);

    MAT_GEN(mat_i64, int64_t)
    function("fill_mat_i64", &Fill<hMat<int64_t>>);

    function("copy_mat_i64_i32", &Copy<hMat<int64_t>, hMat<int32_t>>);
    function("copy_mat_i64_i64", &Copy<hMat<int64_t>, hMat<int64_t>>);
    function("copy_mat_i64_f32", &Copy<hMat<int64_t>, hMat<float>>);
    function("copy_mat_i64_f64", &Copy<hMat<int64_t>, hMat<double>>);

    function("sort_mat_i64", &SortMut<hMat<int32_t>>);

    function("randfill_mat_i64", &RandFill<hMat<int64_t>>);

    MAT_GEN(mat_f32, float)
    function("fill_mat_f32", &Fill<hMat<float>>);

    function("copy_mat_f32_i32", &Copy<hMat<float>, hMat<int32_t>>);
    function("copy_mat_f32_i64", &Copy<hMat<float>, hMat<int64_t>>);
    function("copy_mat_f32_f32", &Copy<hMat<float>, hMat<float>>);
    function("copy_mat_f32_f64", &Copy<hMat<float>, hMat<double>>);

    function("sort_mat_f32", &SortMut<hMat<float>>);

    function("randfill_mat_f32", &RandFill<hMat<float>>);

    MAT_GEN(mat_f64, double)
    function("fill_mat_f64", &Fill<hMat<double>>);

    function("copy_mat_f64_i32", &Copy<hMat<double>, hMat<int32_t>>);
    function("copy_mat_f64_i64", &Copy<hMat<double>, hMat<int64_t>>);
    function("copy_mat_f64_f32", &Copy<hMat<double>, hMat<float>>);
    function("copy_mat_f64_f64", &Copy<hMat<double>, hMat<double>>);

    function("sort_mat_f64", &SortMut<hMat<double>>);

    function("randfill_mat_f64", &RandFill<hMat<double>>);
}

// em++ --bind funcs.cpp -O3 -fno-exceptions -fno-rtti -DEMSCRIPTEN_HAS_UNBOUND_TYPE_NAMES=0 -s WASM=1 -s ALLOW_MEMORY_GROWTH=1 -s WASM_BIGINT --closure 1 -s ASSERTIONS=0 -s MODULARIZE=1 -s 'EXPORT_NAME="Matrix"' -o wmat.js
