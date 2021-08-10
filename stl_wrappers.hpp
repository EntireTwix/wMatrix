#include <algorithm>
#include <cassert>
#include <numeric>
#include "js.hpp"

namespace mat
{
    template <typename M>
    constexpr size_t ValidIndex(const M &mat, size_t idx)
    {
        assert(mat.Area() > idx);
        return idx;
    }

    template <typename M>
    constexpr void SortMut(M &mat)
    {
        std::sort(mat.begin(), mat.end());
    }

    template <typename M>
    constexpr size_t Find(const M &mat, js_number val)
    {
        return std::find(mat.begin(), mat.end(), val) - mat.begin();
    }

    template <typename M>
    constexpr js_number Accumulate(const M &mat, js_number init)
    {
        return std::accumulate(mat.begin(), mat.end(), init);
    }

    template <typename M>
    constexpr size_t LowerBound(const M &mat, js_number val)
    {
        return std::lower_bound(mat.begin(), mat.end(), val) - mat.begin();
    }

    template <typename M>
    constexpr size_t UpperBound(const M &mat, js_number val)
    {
        return std::upper_bound(mat.begin(), mat.end(), val) - mat.begin();
    }

    template <typename M>
    constexpr void Reverse(M &mat)
    {
        std::reverse(mat.begin(), mat.end());
    }

    template <typename M>
    constexpr size_t MinElement(const M &mat)
    {
        return std::min_element(mat.begin(), mat.end()) - mat.begin();
    }

    template <typename M>
    constexpr size_t MaxElement(const M &mat)
    {
        return std::max_element(mat.begin(), mat.end()) - mat.begin();
    }

    template <typename M>
    constexpr void Iota(M &mat, js_number val)
    {
        std::iota(mat.begin(), mat.end(), val);
    }

    template <typename M>
    constexpr size_t Count(const M &mat, js_number val)
    {
        return std::count(mat.begin(), mat.end(), val);
    }

    template <typename M>
    constexpr bool BinarySearch(const M &mat, js_number val)
    {
        return std::binary_search(mat.begin(), mat.end(), val);
    }

    template <typename M, typename M2>
    constexpr bool Equal(const M &a, const M2 &b)
    {
        if (a.Area() != b.Area())
        {
            return false;
        }
        return std::equal(a.begin(), a.end(), b.begin());
    }

    template <typename M>
    constexpr void Fill(M &mat, js_number val)
    {
        std::fill(mat.begin(), mat.end(), val);
    }

    template <typename M>
    constexpr void Rotate(M &mat, size_t middle_idx)
    {
        std::rotate(mat.begin(), mat.begin() + middle_idx, mat.end());
    }
}
