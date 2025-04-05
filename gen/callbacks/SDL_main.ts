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
 */

export const callbacks = {
/**
 * The prototype for the application's main() function
 *
 * @param argc an ANSI-C style main function's argc.
 * @param argv an ANSI-C style main function's argv.
 * @returns an ANSI-C main return code; generally 0 is considered successful
 *          program completion, and small non-zero values are considered
 *          errors.
 *
 * @since This datatype is available since SDL 3.2.0.
 *
 * @from SDL_main.h:495 typedef int (*SDL_main_func)(int argc, char *argv[]);
 */
SDL_main_func: {
      parameters: ["i32", "pointer"],
      result: "i32"
    },

} as const;
