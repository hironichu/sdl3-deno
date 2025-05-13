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
 * The prototype for an Apple iOS animation callback.
 *
 * This datatype is only useful on Apple iOS.
 *
 * After passing a function pointer of this type to
 * SDL_SetiOSAnimationCallback, the system will call that function pointer at
 * a regular interval.
 *
 * @param userdata what was passed as `callbackParam` to
 *                 SDL_SetiOSAnimationCallback as `callbackParam`.
 *
 * @since This datatype is available since SDL 3.2.0.
 *
 * @sa SDL_SetiOSAnimationCallback
 *
 * @from SDL_system.h:231 typedef void (*SDL_iOSAnimationCallback)(void *userdata);
 * @platform-specific SDL_system.h:213 IOS: #ifdef SDL_PLATFORM_IOS
 */
SDL_iOSAnimationCallback: {
      parameters: ["pointer"],
      result: "void"
    },

} as const;
