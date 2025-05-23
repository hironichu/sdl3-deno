/**
 * # CategoryCPUInfo
 *
 * CPU feature detection for SDL.
 *
 * These functions are largely concerned with reporting if the system has
 * access to various SIMD instruction sets, but also has other important info
 * to share, such as system RAM size and number of logical CPU cores.
 *
 * CPU instruction set checks, like SDL_HasSSE() and SDL_HasNEON(), are
 * available on all platforms, even if they don't make sense (an ARM processor
 * will never have SSE and an x86 processor will never have NEON, for example,
 * but these functions still exist and will simply return false in these
 * cases).
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

import { lib } from "./lib.ts";

/**
 * Get the number of logical CPU cores available.
 *
 * @returns the total number of logical CPU cores. On CPUs that include
 *          technologies such as hyperthreading, the number of logical cores
 *          may be more than the number of physical cores.
 *
 * @threadsafety It is safe to call this function from any thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @from SDL_cpuinfo.h:72 int SDL_GetNumLogicalCPUCores(void);
 */
export const getNumLogicalCpuCores = lib.symbols.SDL_GetNumLogicalCPUCores;

/**
 * Determine the L1 cache line size of the CPU.
 *
 * This is useful for determining multi-threaded structure padding or SIMD
 * prefetch sizes.
 *
 * @returns the L1 cache line size of the CPU, in bytes.
 *
 * @threadsafety It is safe to call this function from any thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @from SDL_cpuinfo.h:86 int SDL_GetCPUCacheLineSize(void);
 */
export const getCpuCacheLineSize = lib.symbols.SDL_GetCPUCacheLineSize;

/**
 * Determine whether the CPU has AltiVec features.
 *
 * This always returns false on CPUs that aren't using PowerPC instruction
 * sets.
 *
 * @returns true if the CPU has AltiVec features or false if not.
 *
 * @threadsafety It is safe to call this function from any thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @from SDL_cpuinfo.h:100 bool SDL_HasAltiVec(void);
 */
export const hasAltiVec = lib.symbols.SDL_HasAltiVec;

/**
 * Determine whether the CPU has MMX features.
 *
 * This always returns false on CPUs that aren't using Intel instruction sets.
 *
 * @returns true if the CPU has MMX features or false if not.
 *
 * @threadsafety It is safe to call this function from any thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @from SDL_cpuinfo.h:113 bool SDL_HasMMX(void);
 */
export const hasMmx = lib.symbols.SDL_HasMMX;

/**
 * Determine whether the CPU has SSE features.
 *
 * This always returns false on CPUs that aren't using Intel instruction sets.
 *
 * @returns true if the CPU has SSE features or false if not.
 *
 * @threadsafety It is safe to call this function from any thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_HasSSE2
 * @sa SDL_HasSSE3
 * @sa SDL_HasSSE41
 * @sa SDL_HasSSE42
 *
 * @from SDL_cpuinfo.h:131 bool SDL_HasSSE(void);
 */
export const hasSse = lib.symbols.SDL_HasSSE;

/**
 * Determine whether the CPU has SSE2 features.
 *
 * This always returns false on CPUs that aren't using Intel instruction sets.
 *
 * @returns true if the CPU has SSE2 features or false if not.
 *
 * @threadsafety It is safe to call this function from any thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_HasSSE
 * @sa SDL_HasSSE3
 * @sa SDL_HasSSE41
 * @sa SDL_HasSSE42
 *
 * @from SDL_cpuinfo.h:149 bool SDL_HasSSE2(void);
 */
export const hasSse2 = lib.symbols.SDL_HasSSE2;

/**
 * Determine whether the CPU has SSE3 features.
 *
 * This always returns false on CPUs that aren't using Intel instruction sets.
 *
 * @returns true if the CPU has SSE3 features or false if not.
 *
 * @threadsafety It is safe to call this function from any thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_HasSSE
 * @sa SDL_HasSSE2
 * @sa SDL_HasSSE41
 * @sa SDL_HasSSE42
 *
 * @from SDL_cpuinfo.h:167 bool SDL_HasSSE3(void);
 */
export const hasSse3 = lib.symbols.SDL_HasSSE3;

/**
 * Determine whether the CPU has SSE4.1 features.
 *
 * This always returns false on CPUs that aren't using Intel instruction sets.
 *
 * @returns true if the CPU has SSE4.1 features or false if not.
 *
 * @threadsafety It is safe to call this function from any thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_HasSSE
 * @sa SDL_HasSSE2
 * @sa SDL_HasSSE3
 * @sa SDL_HasSSE42
 *
 * @from SDL_cpuinfo.h:185 bool SDL_HasSSE41(void);
 */
export const hasSse41 = lib.symbols.SDL_HasSSE41;

/**
 * Determine whether the CPU has SSE4.2 features.
 *
 * This always returns false on CPUs that aren't using Intel instruction sets.
 *
 * @returns true if the CPU has SSE4.2 features or false if not.
 *
 * @threadsafety It is safe to call this function from any thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_HasSSE
 * @sa SDL_HasSSE2
 * @sa SDL_HasSSE3
 * @sa SDL_HasSSE41
 *
 * @from SDL_cpuinfo.h:203 bool SDL_HasSSE42(void);
 */
export const hasSse42 = lib.symbols.SDL_HasSSE42;

/**
 * Determine whether the CPU has AVX features.
 *
 * This always returns false on CPUs that aren't using Intel instruction sets.
 *
 * @returns true if the CPU has AVX features or false if not.
 *
 * @threadsafety It is safe to call this function from any thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_HasAVX2
 * @sa SDL_HasAVX512F
 *
 * @from SDL_cpuinfo.h:219 bool SDL_HasAVX(void);
 */
export const hasAvx = lib.symbols.SDL_HasAVX;

/**
 * Determine whether the CPU has AVX2 features.
 *
 * This always returns false on CPUs that aren't using Intel instruction sets.
 *
 * @returns true if the CPU has AVX2 features or false if not.
 *
 * @threadsafety It is safe to call this function from any thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_HasAVX
 * @sa SDL_HasAVX512F
 *
 * @from SDL_cpuinfo.h:235 bool SDL_HasAVX2(void);
 */
export const hasAvx2 = lib.symbols.SDL_HasAVX2;

/**
 * Determine whether the CPU has AVX-512F (foundation) features.
 *
 * This always returns false on CPUs that aren't using Intel instruction sets.
 *
 * @returns true if the CPU has AVX-512F features or false if not.
 *
 * @threadsafety It is safe to call this function from any thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_HasAVX
 * @sa SDL_HasAVX2
 *
 * @from SDL_cpuinfo.h:251 bool SDL_HasAVX512F(void);
 */
export const hasAvx512F = lib.symbols.SDL_HasAVX512F;

/**
 * Determine whether the CPU has ARM SIMD (ARMv6) features.
 *
 * This is different from ARM NEON, which is a different instruction set.
 *
 * This always returns false on CPUs that aren't using ARM instruction sets.
 *
 * @returns true if the CPU has ARM SIMD features or false if not.
 *
 * @threadsafety It is safe to call this function from any thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_HasNEON
 *
 * @from SDL_cpuinfo.h:268 bool SDL_HasARMSIMD(void);
 */
export const hasArmsimd = lib.symbols.SDL_HasARMSIMD;

/**
 * Determine whether the CPU has NEON (ARM SIMD) features.
 *
 * This always returns false on CPUs that aren't using ARM instruction sets.
 *
 * @returns true if the CPU has ARM NEON features or false if not.
 *
 * @threadsafety It is safe to call this function from any thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @from SDL_cpuinfo.h:281 bool SDL_HasNEON(void);
 */
export const hasNeon = lib.symbols.SDL_HasNEON;

/**
 * Determine whether the CPU has LSX (LOONGARCH SIMD) features.
 *
 * This always returns false on CPUs that aren't using LOONGARCH instruction
 * sets.
 *
 * @returns true if the CPU has LOONGARCH LSX features or false if not.
 *
 * @threadsafety It is safe to call this function from any thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @from SDL_cpuinfo.h:295 bool SDL_HasLSX(void);
 */
export const hasLsx = lib.symbols.SDL_HasLSX;

/**
 * Determine whether the CPU has LASX (LOONGARCH SIMD) features.
 *
 * This always returns false on CPUs that aren't using LOONGARCH instruction
 * sets.
 *
 * @returns true if the CPU has LOONGARCH LASX features or false if not.
 *
 * @threadsafety It is safe to call this function from any thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @from SDL_cpuinfo.h:309 bool SDL_HasLASX(void);
 */
export const hasLasx = lib.symbols.SDL_HasLASX;

/**
 * Get the amount of RAM configured in the system.
 *
 * @returns the amount of RAM configured in the system in MiB.
 *
 * @threadsafety It is safe to call this function from any thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @from SDL_cpuinfo.h:320 int SDL_GetSystemRAM(void);
 */
export const getSystemRam = lib.symbols.SDL_GetSystemRAM;

/**
 * Report the alignment this system needs for SIMD allocations.
 *
 * This will return the minimum number of bytes to which a pointer must be
 * aligned to be compatible with SIMD instructions on the current machine. For
 * example, if the machine supports SSE only, it will return 16, but if it
 * supports AVX-512F, it'll return 64 (etc). This only reports values for
 * instruction sets SDL knows about, so if your SDL build doesn't have
 * SDL_HasAVX512F(), then it might return 16 for the SSE support it sees and
 * not 64 for the AVX-512 instructions that exist but SDL doesn't know about.
 * Plan accordingly.
 *
 * @returns the alignment in bytes needed for available, known SIMD
 *          instructions.
 *
 * @threadsafety It is safe to call this function from any thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_aligned_alloc
 * @sa SDL_aligned_free
 *
 * @from SDL_cpuinfo.h:344 size_t SDL_GetSIMDAlignment(void);
 */
export const getSimdAlignment = lib.symbols.SDL_GetSIMDAlignment;

