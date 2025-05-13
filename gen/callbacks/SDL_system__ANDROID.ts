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
 * Callback that presents a response from a SDL_RequestAndroidPermission call.
 *
 * @param userdata an app-controlled pointer that is passed to the callback.
 * @param permission the Android-specific permission name that was requested.
 * @param granted true if permission is granted, false if denied.
 *
 * @since This datatype is available since SDL 3.2.0.
 *
 * @sa SDL_RequestAndroidPermission
 *
 * @from SDL_system.h:516 typedef void (*SDL_RequestAndroidPermissionCallback)(void *userdata, const char *permission, bool granted);
 * @platform-specific SDL_system.h:291 ANDROID: #ifdef SDL_PLATFORM_ANDROID
 */
SDL_RequestAndroidPermissionCallback: {
      parameters: ["pointer", "pointer", "bool"],
      result: "void"
    },

} as const;
