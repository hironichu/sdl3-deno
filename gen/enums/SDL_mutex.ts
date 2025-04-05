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
 * # CategoryMutex
 *
 * SDL offers several thread synchronization primitives. This document can't
 * cover the complicated topic of thread safety, but reading up on what each
 * of these primitives are, why they are useful, and how to correctly use them
 * is vital to writing correct and safe multithreaded programs.
 *
 * - Mutexes: SDL_CreateMutex()
 * - Read/Write locks: SDL_CreateRWLock()
 * - Semaphores: SDL_CreateSemaphore()
 * - Condition variables: SDL_CreateCondition()
 *
 * SDL also offers a datatype, SDL_InitState, which can be used to make sure
 * only one thread initializes/deinitializes some resource that several
 * threads might try to use for the first time simultaneously.
 */

/**
 * The current status of an SDL_InitState structure.
 *
 * @since This enum is available since SDL 3.2.0.
 *
 * @from SDL_mutex.h:930 SDL_INIT_STATUS_
 */
export enum SDL_InitStatus {
  UNINITIALIZED, 
  INITIALIZING, 
  INITIALIZED, 
  UNINITIALIZING, 
}



