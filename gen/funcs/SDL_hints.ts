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
 * # CategoryHints
 *
 * This file contains functions to set and get configuration hints, as well as
 * listing each of them alphabetically.
 *
 * The convention for naming hints is SDL_HINT_X, where "SDL_X" is the
 * environment variable that can be used to override the default.
 *
 * In general these hints are just that - they may or may not be supported or
 * applicable on any given platform, but they provide a way for an application
 * or user to give the library a hint as to how they would like the library to
 * work.
 */

export const symbols = {

/**
 * Set a hint with a specific priority.
 *
 * The priority controls the behavior when setting a hint that already has a
 * value. Hints will replace existing hints of their priority and lower.
 * Environment variables are considered to have override priority.
 *
 * @param name the hint to set.
 * @param value the value of the hint variable.
 * @param priority the SDL_HintPriority level for the hint.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety It is safe to call this function from any thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_GetHint
 * @sa SDL_ResetHint
 * @sa SDL_SetHint
 *
 * @from SDL_hints.h:4323 bool SDL_SetHintWithPriority(const char *name, const char *value, SDL_HintPriority priority);
 */
SDL_SetHintWithPriority: {
      parameters: ["pointer", "pointer", "u32"],
      result: "bool"
    },


/**
 * Set a hint with normal priority.
 *
 * Hints will not be set if there is an existing override hint or environment
 * variable that takes precedence. You can use SDL_SetHintWithPriority() to
 * set the hint with override priority instead.
 *
 * @param name the hint to set.
 * @param value the value of the hint variable.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety It is safe to call this function from any thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_GetHint
 * @sa SDL_ResetHint
 * @sa SDL_SetHintWithPriority
 *
 * @from SDL_hints.h:4345 bool SDL_SetHint(const char *name, const char *value);
 */
SDL_SetHint: {
      parameters: ["pointer", "pointer"],
      result: "bool"
    },


/**
 * Reset a hint to the default value.
 *
 * This will reset a hint to the value of the environment variable, or NULL if
 * the environment isn't set. Callbacks will be called normally with this
 * change.
 *
 * @param name the hint to set.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety It is safe to call this function from any thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_SetHint
 * @sa SDL_ResetHints
 *
 * @from SDL_hints.h:4365 bool SDL_ResetHint(const char *name);
 */
SDL_ResetHint: {
      parameters: ["pointer"],
      result: "bool"
    },


/**
 * Reset all hints to the default values.
 *
 * This will reset all hints to the value of the associated environment
 * variable, or NULL if the environment isn't set. Callbacks will be called
 * normally with this change.
 *
 * @threadsafety It is safe to call this function from any thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_ResetHint
 *
 * @from SDL_hints.h:4380 void SDL_ResetHints(void);
 */
SDL_ResetHints: {
      parameters: [],
      result: "void"
    },


/**
 * Get the value of a hint.
 *
 * @param name the hint to query.
 * @returns the string value of a hint or NULL if the hint isn't set.
 *
 * @threadsafety It is safe to call this function from any thread, however the
 *               return value only remains valid until the hint is changed; if
 *               another thread might do so, the app should supply locks
 *               and/or make a copy of the string. Note that using a hint
 *               callback instead is always thread-safe, as SDL holds a lock
 *               on the thread subsystem during the callback.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_SetHint
 * @sa SDL_SetHintWithPriority
 *
 * @from SDL_hints.h:4400 const char * SDL_GetHint(const char *name);
 */
SDL_GetHint: {
      parameters: ["pointer"],
      result: "pointer"
    },


/**
 * Get the boolean value of a hint variable.
 *
 * @param name the name of the hint to get the boolean value from.
 * @param default_value the value to return if the hint does not exist.
 * @returns the boolean value of a hint or the provided default value if the
 *          hint does not exist.
 *
 * @threadsafety It is safe to call this function from any thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_GetHint
 * @sa SDL_SetHint
 *
 * @from SDL_hints.h:4417 bool SDL_GetHintBoolean(const char *name, bool default_value);
 */
SDL_GetHintBoolean: {
      parameters: ["pointer", "bool"],
      result: "bool"
    },


/**
 * Add a function to watch a particular hint.
 *
 * The callback function is called _during_ this function, to provide it an
 * initial value, and again each time the hint's value changes.
 *
 * @param name the hint to watch.
 * @param callback An SDL_HintCallback function that will be called when the
 *                 hint value changes.
 * @param userdata a pointer to pass to the callback function.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety It is safe to call this function from any thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_RemoveHintCallback
 *
 * @from SDL_hints.h:4459 bool SDL_AddHintCallback(const char *name, SDL_HintCallback callback, void *userdata);
 */
SDL_AddHintCallback: {
      parameters: ["pointer", "function", "pointer"],
      result: "bool"
    },


/**
 * Remove a function watching a particular hint.
 *
 * @param name the hint being watched.
 * @param callback an SDL_HintCallback function that will be called when the
 *                 hint value changes.
 * @param userdata a pointer being passed to the callback function.
 *
 * @threadsafety It is safe to call this function from any thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_AddHintCallback
 *
 * @from SDL_hints.h:4475 void SDL_RemoveHintCallback(const char *name,                                                     SDL_HintCallback callback,                                                     void *userdata);
 */
SDL_RemoveHintCallback: {
      parameters: ["pointer", "function", "pointer"],
      result: "void"
    },

} as const satisfies Deno.ForeignLibraryInterface;
