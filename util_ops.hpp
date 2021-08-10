#pragma once
#include <random>
#include "hmat.hpp"

namespace mat
{
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

    static std::default_random_engine generator(time(NULL));
    template <typename M>
    void RandFill(M &mat, typename M::type min, typename M::type max)
    {
        assert(max > min);
        std::uniform_real_distribution<typename M::type> distribution(min, max);
        for (auto &e : mat)
        {
            e = distribution(generator);
        }
    }
    template <>
    void RandFill(hMat<int32_t> &mat, int32_t min, int32_t max)
    {
        assert(max > min);
        std::uniform_int_distribution<int32_t> distribution(min, max);
        for (auto &e : mat)
        {
            e = distribution(generator);
        }
    }
    template <>
    void RandFill(hMat<int64_t> &mat, int64_t min, int64_t max)
    {
        assert(max > min);
        std::uniform_int_distribution<int64_t> distribution(min, max);
        for (auto &e : mat)
        {
            e = distribution(generator);
        }
    }
};
