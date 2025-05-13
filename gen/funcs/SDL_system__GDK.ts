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
 * Gets a reference to the global async task queue handle for GDK,
 * initializing if needed.
 *
 * Once you are done with the task queue, you should call
 * XTaskQueueCloseHandle to reduce the reference count to avoid a resource
 * leak.
 *
 * @param outTaskQueue a pointer to be filled in with task queue handle.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @from SDL_system.h:792 bool SDL_GetGDKTaskQueue(XTaskQueueHandle *outTaskQueue);
 * @platform-specific SDL_system.h:774 GDK: #ifdef SDL_PLATFORM_GDK
 */
SDL_GetGDKTaskQueue: {
      parameters: ["pointer"],
      result: "bool"
    },


/**
 * Gets a reference to the default user handle for GDK.
 *
 * This is effectively a synchronous version of XUserAddAsync, which always
 * prefers the default user and allows a sign-in UI.
 *
 * @param outUserHandle a pointer to be filled in with the default user
 *                      handle.
 * @returns true if success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @from SDL_system.h:807 bool SDL_GetGDKDefaultUser(XUserHandle *outUserHandle);
 * @platform-specific SDL_system.h:774 GDK: #ifdef SDL_PLATFORM_GDK
 */
SDL_GetGDKDefaultUser: {
      parameters: ["pointer"],
      result: "bool"
    },

} as const satisfies Deno.ForeignLibraryInterface;
