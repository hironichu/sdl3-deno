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

import { lib } from "./lib.ts";

export {
  SDL_Sandbox as SANDBOX,
} from "../enums/SDL_system.ts"

/**
 * Set a callback for every X11 event.
 *
 * The callback may modify the event, and should return true if the event
 * should continue to be processed, or false to prevent further processing.
 *
 * @param callback the SDL_X11EventHook function to call.
 * @param userdata a pointer to pass to every iteration of `callback`.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @from SDL_system.h:173 void SDL_SetX11EventHook(SDL_X11EventHook callback, void *userdata);
 */
export const setX11EventHook = lib.symbols.SDL_SetX11EventHook;

/**
 * Query if the current device is a tablet.
 *
 * If SDL can't determine this, it will return false.
 *
 * @returns true if the device is a tablet, false otherwise.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @from SDL_system.h:609 bool SDL_IsTablet(void);
 */
export const isTablet = lib.symbols.SDL_IsTablet;

/**
 * Query if the current device is a TV.
 *
 * If SDL can't determine this, it will return false.
 *
 * @returns true if the device is a TV, false otherwise.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @from SDL_system.h:620 bool SDL_IsTV(void);
 */
export const isTv = lib.symbols.SDL_IsTV;

/**
 * Get the application sandbox environment, if any.
 *
 * @returns the application sandbox environment or SDL_SANDBOX_NONE if the
 *          application is not running in a sandbox environment.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @from SDL_system.h:644 SDL_Sandbox SDL_GetSandbox(void);
 */
export const getSandbox = lib.symbols.SDL_GetSandbox;

/**
 * Let iOS apps with external event handling report
 * onApplicationWillTerminate.
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
 * @from SDL_system.h:664 void SDL_OnApplicationWillTerminate(void);
 */
export const onApplicationWillTerminate = lib.symbols.SDL_OnApplicationWillTerminate;

/**
 * Let iOS apps with external event handling report
 * onApplicationDidReceiveMemoryWarning.
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
 * @from SDL_system.h:681 void SDL_OnApplicationDidReceiveMemoryWarning(void);
 */
export const onApplicationDidReceiveMemoryWarning = lib.symbols.SDL_OnApplicationDidReceiveMemoryWarning;

/**
 * Let iOS apps with external event handling report
 * onApplicationWillResignActive.
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
 * @from SDL_system.h:698 void SDL_OnApplicationWillEnterBackground(void);
 */
export const onApplicationWillEnterBackground = lib.symbols.SDL_OnApplicationWillEnterBackground;

/**
 * Let iOS apps with external event handling report
 * onApplicationDidEnterBackground.
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
 * @from SDL_system.h:715 void SDL_OnApplicationDidEnterBackground(void);
 */
export const onApplicationDidEnterBackground = lib.symbols.SDL_OnApplicationDidEnterBackground;

/**
 * Let iOS apps with external event handling report
 * onApplicationWillEnterForeground.
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
 * @from SDL_system.h:732 void SDL_OnApplicationWillEnterForeground(void);
 */
export const onApplicationWillEnterForeground = lib.symbols.SDL_OnApplicationWillEnterForeground;

/**
 * Let iOS apps with external event handling report
 * onApplicationDidBecomeActive.
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
 * @from SDL_system.h:749 void SDL_OnApplicationDidEnterForeground(void);
 */
export const onApplicationDidEnterForeground = lib.symbols.SDL_OnApplicationDidEnterForeground;

