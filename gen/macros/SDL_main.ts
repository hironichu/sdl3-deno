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

/**
 * @from SDL_main:76
 */
export const SDL_MAIN_HANDLED = 1;

/**
 * @from SDL_main:98
 */
export const SDL_MAIN_USE_CALLBACKS = 1;

/**
 * @from SDL_main:255
 */
export const SDLMAIN_DECLSPEC = SDL_DECLSPEC;

/**
 * @from SDL_main:262
 */
export const main = SDL_main;

