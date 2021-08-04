#include <emscripten/bind.h>
#include "hmat.hpp"
#include "util_ops.hpp"

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
    function("fill_mat_i32_i32", &Fill<hMat<int32_t>, int32_t>);
    function("fill_mat_i32_i64", &Fill<hMat<int32_t>, int64_t>);
    function("fill_mat_i32_float", &Fill<hMat<int32_t>, float>); 
    function("fill_mat_i32_f64", &Fill<hMat<int32_t>, double>);

    function("copy_mat_i32_i32", &Copy<hMat<int32_t>>); //self
    function("copy_mat_i32_i64", &Copy<hMat<int32_t>, hMat<int64_t>>);
    function("copy_mat_i32_float", &Copy<hMat<int32_t>, hMat<float>>);
    function("copy_mat_i32_f64", &Copy<hMat<int32_t>, hMat<double>>);

    function("sort_mat_i32", &SortMut<hMat<int32_t>>);

    MAT_GEN(mat_i64, int64_t)
    function("fill_mat_i64_i32", &Fill<hMat<int64_t>, int32_t>);
    function("fill_mat_i64_i64", &Fill<hMat<int64_t>, int64_t>);
    function("fill_mat_i64_float", &Fill<hMat<int64_t>, float>); 
    function("fill_mat_i64_f64", &Fill<hMat<int64_t>, double>);

    function("copy_mat_i64_i32", &Copy<hMat<int64_t>, hMat<int32_t>>);
    function("copy_mat_i64_i64", &Copy<hMat<int64_t>>); //self
    function("copy_mat_i64_float", &Copy<hMat<int64_t>, hMat<float>>);
    function("copy_mat_i64_f64", &Copy<hMat<int64_t>, hMat<double>>);

    function("sort_mat_i32", &SortMut<hMat<int32_t>>);

    MAT_GEN(mat_f32, float)
    function("fill_mat_float_i32", &Fill<hMat<float>, int32_t>);
    function("fill_mat_float_i64", &Fill<hMat<float>, int64_t>);
    function("fill_mat_float_float", &Fill<hMat<float>, float>); 
    function("fill_mat_float_f64", &Fill<hMat<float>, double>);

    function("copy_mat_float_i32", &Copy<hMat<float>, hMat<int32_t>>);
    function("copy_mat_float_i64", &Copy<hMat<float>, hMat<int64_t>>);
    function("copy_mat_float_float", &Copy<hMat<float>>); //self
    function("copy_mat_float_f64", &Copy<hMat<float>, hMat<double>>);

    function("sort_mat_float", &SortMut<hMat<float>>);

    MAT_GEN(mat_f64, double)
    function("fill_mat_f64_i32", &Fill<hMat<double>, int32_t>);
    function("fill_mat_f64_i64", &Fill<hMat<double>, int64_t>);
    function("fill_mat_f64_float", &Fill<hMat<double>, float>); 
    function("fill_mat_f64_f64", &Fill<hMat<double>, double>);
    
    function("copy_mat_f64_i32", &Copy<hMat<double>, hMat<int32_t>>);
    function("copy_mat_f64_i64", &Copy<hMat<double>, hMat<int64_t>>);
    function("copy_mat_f64_float", &Copy<hMat<double>, hMat<float>>);
    function("copy_mat_f64_f64", &Copy<hMat<double>>); //self

    function("sort_mat_f64", &SortMut<hMat<double>>);
}

// em++ --bind include/funcs.cpp -O3 -fno-exceptions -fno-rtti -DEMSCRIPTEN_HAS_UNBOUND_TYPE_NAMES=0 -s WASM=1 -s ALLOW_MEMORY_GROWTH=1 -s WASM_BIGINT --closure 1 -s ASSERTIONS=0 -s MODULARIZE=1 -s 'EXPORT_NAME="Matrix"'
