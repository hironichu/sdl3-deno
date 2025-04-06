/**
 * # CategoryIntrinsics
 *
 * SDL does some preprocessor gymnastics to determine if any CPU-specific
 * compiler intrinsics are available, as this is not necessarily an easy thing
 * to calculate, and sometimes depends on quirks of a system, versions of
 * build tools, and other external forces.
 *
 * Apps including SDL's headers will be able to check consistent preprocessor
 * definitions to decide if it's safe to use compiler intrinsics for a
 * specific CPU architecture. This check only tells you that the compiler is
 * capable of using those intrinsics; at runtime, you should still check if
 * they are available on the current system with the
 * [CPU info functions](https://wiki.libsdl.org/SDL3/CategoryCPUInfo)
 * , such as SDL_HasSSE() or SDL_HasNEON(). Otherwise, the process might crash
 * for using an unsupported CPU instruction.
 *
 * SDL only sets preprocessor defines for CPU intrinsics if they are
 * supported, so apps should check with `#ifdef` and not `#if`.
 *
 * SDL will also include the appropriate instruction-set-specific support
 * headers, so if SDL decides to define SDL_SSE2_INTRINSICS, it will also
 * `#include <emmintrin.h>` as well.
 *
 * @module
 */

/*
  Simple DirectMedia Layer
  Copyright (C) 1997-2025 Sam Lantinga <slouken@libsdl.org>

  This software is provided 'as-is', without any express or implied
  warranty.  In no event will the authors be held liable for any damages
  arising from the use of this software.

  Permission is granted to anyone to use this software for any purpose,
  including commercial applications, and to alter it and redistribute it
  freely, subject to the following restrictions:

  1. The origin of this software must not be misrepresented; you must not
     claim that you wrote the original software. If you use this software
     in a product, an acknowledgment in the product documentation would be
     appreciated but is not required.
  2. Altered source versions must be plainly marked as such, and must not be
     misrepresented as being the original software.
  3. This notice may not be removed or altered from any source distribution.
*/

/**
 * @from SDL_intrin:64
 */
export const SDL_LSX_INTRINSICS = 1;

/**
 * @from SDL_intrin:75
 */
export const SDL_LASX_INTRINSICS = 1;

/**
 * @from SDL_intrin:85
 */
export const SDL_NEON_INTRINSICS = 1;

/**
 * @from SDL_intrin:94
 */
export const SDL_ALTIVEC_INTRINSICS = 1;

/**
 * @from SDL_intrin:105
 */
export const SDL_MMX_INTRINSICS = 1;

/**
 * @from SDL_intrin:119
 */
export const SDL_SSE_INTRINSICS = 1;

/**
 * @from SDL_intrin:133
 */
export const SDL_SSE2_INTRINSICS = 1;

/**
 * @from SDL_intrin:147
 */
export const SDL_SSE3_INTRINSICS = 1;

/**
 * @from SDL_intrin:161
 */
export const SDL_SSE4_1_INTRINSICS = 1;

/**
 * @from SDL_intrin:175
 */
export const SDL_SSE4_2_INTRINSICS = 1;

/**
 * @from SDL_intrin:187
 */
export const SDL_AVX_INTRINSICS = 1;

/**
 * @from SDL_intrin:199
 */
export const SDL_AVX2_INTRINSICS = 1;

/**
 * @from SDL_intrin:213
 */
export const SDL_AVX512F_INTRINSICS = 1;

/**
 * @from SDL_intrin:236
 */
export const SDL_NEON_INTRINSICS = 1;

/**
 * @from SDL_intrin:243
 */
export const SDL_ALTIVEC_INTRINSICS = 1;

/**
 * @from SDL_intrin:248
 */
export const SDL_NEON_INTRINSICS = 1;

/**
 * @from SDL_intrin:253
 */
export const SDL_NEON_INTRINSICS = 1;

/**
 * @from SDL_intrin:256
 */
export const __ARM_NEON = 1;/* Set __ARM_NEON so that it can be used elsewhere, at compile time */

/**
 * @from SDL_intrin:259
 */
export const SDL_NEON_INTRINSICS = 1;

/**
 * @from SDL_intrin:349
 */
export const SDL_LSX_INTRINSICS = 1;

/**
 * @from SDL_intrin:353
 */
export const SDL_LASX_INTRINSICS = 1;

/**
 * @from SDL_intrin:360
 */
export const SDL_MMX_INTRINSICS = 1;

/**
 * @from SDL_intrin:364
 */
export const SDL_SSE_INTRINSICS = 1;

/**
 * @from SDL_intrin:368
 */
export const SDL_SSE2_INTRINSICS = 1;

/**
 * @from SDL_intrin:372
 */
export const SDL_SSE3_INTRINSICS = 1;

/**
 * @from SDL_intrin:376
 */
export const SDL_SSE4_1_INTRINSICS = 1;

/**
 * @from SDL_intrin:380
 */
export const SDL_SSE4_2_INTRINSICS = 1;

/**
 * @from SDL_intrin:384
 */
export const SDL_DISABLE_AVX = ;/* see https://reviews.llvm.org/D20291 and https://reviews.llvm.org/D79194 */

/**
 * @from SDL_intrin:387
 */
export const SDL_AVX_INTRINSICS = 1;

/**
 * @from SDL_intrin:391
 */
export const SDL_DISABLE_AVX2 = ;/* see https://reviews.llvm.org/D20291 and https://reviews.llvm.org/D79194 */

/**
 * @from SDL_intrin:394
 */
export const SDL_AVX2_INTRINSICS = 1;

/**
 * @from SDL_intrin:398
 */
export const SDL_DISABLE_AVX512F = ;/* see https://reviews.llvm.org/D20291 and https://reviews.llvm.org/D79194 */

/**
 * @from SDL_intrin:401
 */
export const SDL_AVX512F_INTRINSICS = 1;

