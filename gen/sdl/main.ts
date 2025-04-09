/**
 * # CategoryMain
 *
 * Redefine main() if necessary so that it is called by SDL.
 *
 * In order to make this consistent on all platforms, the application's main()
 * should look like this:
 *
 * ```c
 * #include <SDL3/SDL.h>
 * #include <SDL3/SDL_main.h>
 *
 * int main(int argc, char *argv[])
 * {
 * }
 * ```
 *
 * SDL will take care of platform specific details on how it gets called.
 *
 * This is also where an app can be configured to use the main callbacks, via
 * the SDL_MAIN_USE_CALLBACKS macro.
 *
 * SDL_main.h is a "single-header library," which is to say that including
 * this header inserts code into your program, and you should only include it
 * once in most cases. SDL.h does not include this header automatically.
 *
 * For more information, see:
 *
 * https://wiki.libsdl.org/SDL3/README/main-functions
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
 * Circumvent failure of SDL_Init() when not using SDL_main() as an entry
 * point.
 *
 * This function is defined in SDL_main.h, along with the preprocessor rule to
 * redefine main() as SDL_main(). Thus to ensure that your main() function
 * will not be changed it is necessary to define SDL_MAIN_HANDLED before
 * including SDL.h.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_Init
 *
 * @from SDL_main.h:543 void SDL_SetMainReady(void);
 */
export const setMainReady = lib.symbols.SDL_SetMainReady;

/**
 * Initializes and launches an SDL application, by doing platform-specific
 * initialization before calling your mainFunction and cleanups after it
 * returns, if that is needed for a specific platform, otherwise it just calls
 * mainFunction.
 *
 * You can use this if you want to use your own main() implementation without
 * using SDL_main (like when using SDL_MAIN_HANDLED). When using this, you do
 * *not* need SDL_SetMainReady().
 *
 * @param argc the argc parameter from the application's main() function, or 0
 *             if the platform's main-equivalent has no argc.
 * @param argv the argv parameter from the application's main() function, or
 *             NULL if the platform's main-equivalent has no argv.
 * @param mainFunction your SDL app's C-style main(). NOT the function you're
 *                     calling this from! Its name doesn't matter; it doesn't
 *                     literally have to be `main`.
 * @param reserved should be NULL (reserved for future use, will probably be
 *                 platform-specific then).
 * @returns the return value from mainFunction: 0 on success, otherwise
 *          failure; SDL_GetError() might have more information on the
 *          failure.
 *
 * @threadsafety Generally this is called once, near startup, from the
 *               process's initial thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @from SDL_main.h:573 int SDL_RunApp(int argc, char *argv[], SDL_main_func mainFunction, void *reserved);
 */
export const runApp = lib.symbols.SDL_RunApp;

/**
 * An entry point for SDL's use in SDL_MAIN_USE_CALLBACKS.
 *
 * Generally, you should not call this function directly. This only exists to
 * hand off work into SDL as soon as possible, where it has a lot more control
 * and functionality available, and make the inline code in SDL_main.h as
 * small as possible.
 *
 * Not all platforms use this, it's actual use is hidden in a magic
 * header-only library, and you should not call this directly unless you
 * _really_ know what you're doing.
 *
 * @param argc standard Unix main argc.
 * @param argv standard Unix main argv.
 * @param appinit the application's SDL_AppInit function.
 * @param appiter the application's SDL_AppIterate function.
 * @param appevent the application's SDL_AppEvent function.
 * @param appquit the application's SDL_AppQuit function.
 * @returns standard Unix main return value.
 *
 * @threadsafety It is not safe to call this anywhere except as the only
 *               function call in SDL_main.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @from SDL_main.h:600 int SDL_EnterAppMainCallbacks(int argc, char *argv[], SDL_AppInit_func appinit, SDL_AppIterate_func appiter, SDL_AppEvent_func appevent, SDL_AppQuit_func appquit);
 */
export const enterAppMainCallbacks = lib.symbols.SDL_EnterAppMainCallbacks;

/**
 * Register a win32 window class for SDL's use.
 *
 * This can be called to set the application window class at startup. It is
 * safe to call this multiple times, as long as every call is eventually
 * paired with a call to SDL_UnregisterApp, but a second registration attempt
 * while a previous registration is still active will be ignored, other than
 * to increment a counter.
 *
 * Most applications do not need to, and should not, call this directly; SDL
 * will call it when initializing the video subsystem.
 *
 * @param name the window class name, in UTF-8 encoding. If NULL, SDL
 *             currently uses "SDL_app" but this isn't guaranteed.
 * @param style the value to use in WNDCLASSEX::style. If `name` is NULL, SDL
 *              currently uses `(CS_BYTEALIGNCLIENT | CS_OWNDC)` regardless of
 *              what is specified here.
 * @param hInst the HINSTANCE to use in WNDCLASSEX::hInstance. If zero, SDL
 *              will use `GetModuleHandle(NULL)` instead.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @from SDL_main.h:629 bool SDL_RegisterApp(const char *name, Uint32 style, void *hInst);
 */
export const registerApp = lib.symbols.SDL_RegisterApp;

/**
 * Deregister the win32 window class from an SDL_RegisterApp call.
 *
 * This can be called to undo the effects of SDL_RegisterApp.
 *
 * Most applications do not need to, and should not, call this directly; SDL
 * will call it when deinitializing the video subsystem.
 *
 * It is safe to call this multiple times, as long as every call is eventually
 * paired with a prior call to SDL_RegisterApp. The window class will only be
 * deregistered when the registration counter in SDL_RegisterApp decrements to
 * zero through calls to this function.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @from SDL_main.h:646 void SDL_UnregisterApp(void);
 */
export const unregisterApp = lib.symbols.SDL_UnregisterApp;

/**
 * Callback from the application to let the suspend continue.
 *
 * This function is only needed for Xbox GDK support; all other platforms will
 * do nothing and set an "unsupported" error message.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @from SDL_main.h:658 void SDL_GDKSuspendComplete(void);
 */
export const gdkSuspendComplete = lib.symbols.SDL_GDKSuspendComplete;

