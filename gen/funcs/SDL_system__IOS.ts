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
 * Use this function to set the animation callback on Apple iOS.
 *
 * The function prototype for `callback` is:
 *
 * ```c
 * void callback(void *callbackParam);
 * ```
 *
 * Where its parameter, `callbackParam`, is what was passed as `callbackParam`
 * to SDL_SetiOSAnimationCallback().
 *
 * This function is only available on Apple iOS.
 *
 * For more information see:
 *
 * https://wiki.libsdl.org/SDL3/README/ios
 *
 * Note that if you use the "main callbacks" instead of a standard C `main`
 * function, you don't have to use this API, as SDL will manage this for you.
 *
 * Details on main callbacks are here:
 *
 * https://wiki.libsdl.org/SDL3/README/main-functions
 *
 * @param window the window for which the animation callback should be set.
 * @param interval the number of frames after which **callback** will be
 *                 called.
 * @param callback the function to call for every frame.
 * @param callbackParam a pointer that is passed to `callback`.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_SetiOSEventPump
 *
 * @from SDL_system.h:270 bool SDL_SetiOSAnimationCallback(SDL_Window *window, int interval, SDL_iOSAnimationCallback callback, void *callbackParam);
 * @platform-specific SDL_system.h:213 IOS: #ifdef SDL_PLATFORM_IOS
 */
SDL_SetiOSAnimationCallback: {
      parameters: ["pointer", "i32", "function", "pointer"],
      result: "bool"
    },


/**
 * Use this function to enable or disable the SDL event pump on Apple iOS.
 *
 * This function is only available on Apple iOS.
 *
 * @param enabled true to enable the event pump, false to disable it.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_SetiOSAnimationCallback
 *
 * @from SDL_system.h:283 void SDL_SetiOSEventPump(bool enabled);
 * @platform-specific SDL_system.h:213 IOS: #ifdef SDL_PLATFORM_IOS
 */
SDL_SetiOSEventPump: {
      parameters: ["bool"],
      result: "void"
    },


/**
 * Let iOS apps with external event handling report
 * onApplicationDidChangeStatusBarOrientation.
 *
 * This functions allows iOS apps that have their own event handling to hook
 * into SDL to generate SDL events. This maps directly to an iOS-specific
 * event, but since it doesn't do anything iOS-specific internally, it is
 * available on all platforms, in case it might be useful for some specific
 * paradigm. Most apps do not need to use this directly; SDL's internal event
 * code will handle all this for windows created by SDL_CreateWindow!
 *
 * @threadsafety It is safe to call this function from any thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @from SDL_system.h:768 void SDL_OnApplicationDidChangeStatusBarOrientation(void);
 * @platform-specific SDL_system.h:213 IOS: #ifdef SDL_PLATFORM_IOS
 */
SDL_OnApplicationDidChangeStatusBarOrientation: {
      parameters: [],
      result: "void"
    },

} as const satisfies Deno.ForeignLibraryInterface;
