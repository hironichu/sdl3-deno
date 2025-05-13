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

export const callbacks = {
/**
 * A callback to be used with SDL_SetWindowsMessageHook.
 *
 * This callback may modify the message, and should return true if the message
 * should continue to be processed, or false to prevent further processing.
 *
 * As this is processing a message directly from the Windows event loop, this
 * callback should do the minimum required work and return quickly.
 *
 * @param userdata the app-defined pointer provided to
 *                 SDL_SetWindowsMessageHook.
 * @param msg a pointer to a Win32 event structure to process.
 * @returns true to let event continue on, false to drop it.
 *
 * @threadsafety This may only be called (by SDL) from the thread handling the
 *               Windows event loop.
 *
 * @since This datatype is available since SDL 3.2.0.
 *
 * @sa SDL_SetWindowsMessageHook
 * @sa SDL_HINT_WINDOWS_ENABLE_MESSAGELOOP
 *
 * @from SDL_system.h:77 typedef bool (*SDL_WindowsMessageHook)(void *userdata, MSG *msg);
 * @platform-specific SDL_system.h:51 WINDOWS: #if defined(SDL_PLATFORM_WINDOWS)
 */
SDL_WindowsMessageHook: {
      parameters: ["pointer", "pointer"],
      result: "bool"
    },

} as const;
