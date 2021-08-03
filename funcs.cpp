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
    function("fill_mat_i32", &Fill<hMat<int32_t>, int32_t>);

    function("copy_mat_i32_i32", &Copy<hMat<int32_t>>); //self
    function("copy_mat_i32_ui32", &Copy<hMat<int32_t>, hMat<uint32_t>>);
    function("copy_mat_i32_bool", &Copy<hMat<int32_t>, hMat<bool>>);
    function("copy_mat_i32_float", &Copy<hMat<int32_t>, hMat<float>>);

    function("sort_mat_i32", &SortMut<hMat<int32_t>>);

    MAT_GEN(mat_ui32, uint32_t)
    function("fill_mat_ui32", &Fill<hMat<uint32_t>, uint32_t>);

    function("copy_mat_ui32_i32", &Copy<hMat<uint32_t>, hMat<int32_t>>);
    function("copy_mat_ui32_ui32", &Copy<hMat<uint32_t>>); //self
    function("copy_mat_ui32_bool", &Copy<hMat<uint32_t>, hMat<bool>>);
    function("copy_mat_ui32_float", &Copy<hMat<uint32_t>, hMat<float>>);

    function("sort_mat_i32", &SortMut<hMat<int32_t>>);

    MAT_GEN(mat_bool, bool)
    function("fill_mat_bool", &Fill<hMat<bool>, bool>);

    function("copy_mat_bool_i32", &Copy<hMat<bool>, hMat<int32_t>>);
    function("copy_mat_bool_ui32", &Copy<hMat<bool>, hMat<uint32_t>>);
    function("copy_mat_bool_bool", &Copy<hMat<bool>>); //self
    function("copy_mat_bool_float", &Copy<hMat<bool>, hMat<float>>);

    function("sort_mat_bool", &SortMut<hMat<bool>>);

    MAT_GEN(mat_float, double)
    function("fill_mat_float", &Fill<hMat<double>, double>);

    function("copy_mat_float_i32", &Copy<hMat<double>, hMat<int32_t>>);
    function("copy_mat_float_ui32", &Copy<hMat<double>, hMat<uint32_t>>);
    function("copy_mat_float_bool", &Copy<hMat<double>, hMat<bool>>);
    function("copy_mat_float_float", &Copy<hMat<double>>); //self

    function("sort_mat_float", &SortMut<hMat<double>>);
}

// em++ --bind include/funcs.cpp -O3 -fno-exceptions -fno-rtti -DEMSCRIPTEN_HAS_UNBOUND_TYPE_NAMES=0 -s WASM=1 -s ALLOW_MEMORY_GROWTH=1 -s WASM_BIGINT --closure 1 -s ASSERTIONS=0 -s MODULARIZE=1 -s 'EXPORT_NAME="Matrix"'
