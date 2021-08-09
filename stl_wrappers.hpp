#include <algorithm>
#include <cassert>
#include <numeric>

namespace mat
{
    template <typename M>
    void SortMut(M &mat)
    {
        std::sort(mat.begin(), mat.end());
    }

    template <typename M>
    size_t Find(const M &mat, typename M::type val)
    {
        return ValidIndex(std::find(mat.begin(), mat.end(), val) - mat.begin());
    }

    template <typename M>
    typename M::type Accumulate(const M &mat)
    {
        return std::accumulate(mat.begin(), mat.end());
    }

    template <typename M>
    size_t LowerBound(const M &mat, typename M::type val)
    {
        return ValidIndex(std::lower_bound(mat.begin(), mat.end(), val) - mat.begin());
    }

    template <typename M>
    size_t UpperBound(const M &mat, typename M::type val)
    {
        return ValidIndex(std::upper_bound(mat.begin(), mat.end(), val) - mat.begin());
    }

    template <typename M>
    void Reverse(M &mat)
    {
        std::reverse(mat.begin(), mat.end());
    }

    template <typename M>
    size_t MinElement(const M &mat)
    {
        return ValidIndex(std::min_element(mat.begin(), mat.end()) - mat.begin());
    }

    template <typename M>
    size_t MaxElement(const M &mat)
    {
        return ValidIndex(std::max_element(mat.begin(), mat.end()) - mat.begin());
    }

    template <typename M>
    void Iota(M &mat, typename M::type val)
    {
        std::iota(mat.begin(), mat.end(), val);
    }

    template <typename M>
    size_t Count(const M &mat, typename M::type val)
    {
        return std::count(mat.begin(), mat.end());
    }

    template <typename M>
    size_t BinarySearch(const M &mat, typename M::type val)
    {
        return ValidIndex(std::binary_search(mat.begin(), mat.end(), val) - mat.begin());
    }

    template <typename M, typename M2>
    bool Equal(const M &a, const M &b)
    {
        if (a.Area() != b.Area())
        {
            return false;
        }
        return std::equal(a.begin(), a.end(), b.begin());
    }

    template <typename M>
    void Fill(M &mat, typename M::type val)
    {
        std::fill(mat.begin(), mat.end(), val);
    }

    template <typename M>
    void Rotate(M &mat, size_t middle_idx)
    {
        std::rotate(mat.begin(), mat.begin() + middle_idx, mat.end());
    }

    template <typename M>
    size_t ValidIndex(const M &mat, size_t idx)
    {
        assert(mat.Area() > idx);
        return idx;
    }
}
