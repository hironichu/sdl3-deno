/**
 * # CategorySystem
 *
 * Platform-specific SDL API functions. These are functions that deal with
 * needs of specific operating systems, that didn't make sense to offer as
 * platform-independent, generic APIs.
 *
 * Most apps can make do without these functions, but they can be useful for
 * integrating with other parts of a specific system, adding platform-specific
 * polish to an app, or solving problems that only affect one target.
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

export const symbols = {

/**
 * Sets the UNIX nice value for a thread.
 *
 * This uses setpriority() if possible, and RealtimeKit if available.
 *
 * @param threadID the Unix thread ID to change priority of.
 * @param priority the new, Unix-specific, priority value.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @from SDL_system.h:190 bool SDL_SetLinuxThreadPriority(Sint64 threadID, int priority);
 * @platform-specific SDL_system.h:176 LINUX: #ifdef SDL_PLATFORM_LINUX
 */
SDL_SetLinuxThreadPriority: {
      parameters: ["i64", "i32"],
      result: "bool"
    },


/**
 * Sets the priority (not nice level) and scheduling policy for a thread.
 *
 * This uses setpriority() if possible, and RealtimeKit if available.
 *
 * @param threadID the Unix thread ID to change priority of.
 * @param sdlPriority the new SDL_ThreadPriority value.
 * @param schedPolicy the new scheduling policy (SCHED_FIFO, SCHED_RR,
 *                    SCHED_OTHER, etc...).
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @from SDL_system.h:206 bool SDL_SetLinuxThreadPriorityAndPolicy(Sint64 threadID, int sdlPriority, int schedPolicy);
 * @platform-specific SDL_system.h:176 LINUX: #ifdef SDL_PLATFORM_LINUX
 */
SDL_SetLinuxThreadPriorityAndPolicy: {
      parameters: ["i64", "i32", "i32"],
      result: "bool"
    },

} as const satisfies Deno.ForeignLibraryInterface;
