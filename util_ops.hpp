#pragma once
#include <algorithm>
#include <cassert>

namespace mat
{
    template <typename M, typename T>
    constexpr void Fill(M &mat, T v)
    {
        for (typename M::type &e : mat)
        {
            e = v;
        }
    }

    template <typename M, typename M2>
    constexpr void Copy(const M &src, M2 &dest)
    {
        if (src.Area() == dest.Area())
        {
            for (size_t i = 0; i < src.Area(); ++i)
            {
                dest.SetFastAt(i, src.GetFastAt(i));
            }
        }
        else
        {
            for (size_t i = 0; i < dest.Height(); ++i)
            {
                for (size_t j = 0; j < dest.Width(); ++j)
                {
                    if (j < src.Width() && i < src.Height())
                    {
                        dest.SetAt(j, i, src.GetAt(j, i));
                    }
                }
            }
        }
    }
    template <typename M>
    constexpr void Copy(const M &src, M &dest)
    {
        if (src.Area() == dest.Area())
        {
            dest = src; //calling operator=
        }
        else
        {
            for (size_t i = 0; i < dest.Height(); ++i)
            {
                for (size_t j = 0; j < dest.Width(); ++j)
                {
                    if (j < src.Width() && i < src.Height())
                    {
                        dest.SetAt(j, i, src.GetAt(j, i));
                    }
                }
            }
        }
    }

    template <typename M>
    constexpr void SortMut(M &mat)
    {
        std::sort(mat.begin(), mat.end());
    }
};
