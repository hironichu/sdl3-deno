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

import * as _ from "../_utils.ts";
import * as _b from "../_structs/SDL_mutex.ts";


/**
 * A structure used for thread-safe initialization and shutdown.
 *
 * Here is an example of using this:
 *
 * ```c
 *    static SDL_AtomicInitState init;
 *
 *    bool InitSystem(void)
 *    {
 *        if (!SDL_ShouldInit(&init)) {
 *            // The system is initialized
 *            return true;
 *        }
 *
 *        // At this point, you should not leave this function without calling SDL_SetInitialized()
 *
 *        bool initialized = DoInitTasks();
 *        SDL_SetInitialized(&init, initialized);
 *        return initialized;
 *    }
 *
 *    bool UseSubsystem(void)
 *    {
 *        if (SDL_ShouldInit(&init)) {
 *            // Error, the subsystem isn't initialized
 *            SDL_SetInitialized(&init, false);
 *            return false;
 *        }
 *
 *        // Do work using the initialized subsystem
 *
 *        return true;
 *    }
 *
 *    void QuitSystem(void)
 *    {
 *        if (!SDL_ShouldQuit(&init)) {
 *            // The system is not initialized
 *            return;
 *        }
 *
 *        // At this point, you should not leave this function without calling SDL_SetInitialized()
 *
 *        DoQuitTasks();
 *        SDL_SetInitialized(&init, false);
 *    }
 * ```
 *
 * Note that this doesn't protect any resources created during initialization,
 * or guarantee that nobody is using those resources during cleanup. You
 * should use other mechanisms to protect those, if that's a concern for your
 * code.
 *
 * @since This struct is available since SDL 3.2.0.
 *
 * @from SDL_mutex.h:994 
 */
export interface SDL_InitState {
  status: SDL_AtomicInt; /* SDL_AtomicInt */
  thread: bigint; /* SDL_ThreadID */
  reserved: Deno.PointerValue; /* void * */
}

export function read_SDL_InitState(dt: DataView): SDL_InitState {
  const t = _b.SDL_InitState.read(dt);
  return {
    status: t.status, /** SDL_AtomicInt */
    thread: t.thread, /** SDL_ThreadID */
    reserved: Deno.UnsafePointer.create(t.reserved), /** void * */
  };
}

export function write_SDL_InitState(t: SDL_InitState, dt: DataView) {
  _b.SDL_InitState.write({
    status: t.status, /** SDL_AtomicInt */
    thread: t.thread, /** SDL_ThreadID */
    reserved: Deno.UnsafePointer.value(t.reserved), /** void * */
  }, dt);
}


