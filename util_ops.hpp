#pragma once
#include <random>
#include "hmat.hpp"
#include "js.hpp"

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
    void RandFill(M &mat, js_number min, js_number max)
    {
        assert(max > min);
        std::uniform_real_distribution<js_number> distribution(min, max);
        for (auto &e : mat)
        {
            e = distribution(generator);
        }
    }
};
