/**
 * # CategoryHaptic
 *
 * The SDL haptic subsystem manages haptic (force feedback) devices.
 *
 * The basic usage is as follows:
 *
 * - Initialize the subsystem (SDL_INIT_HAPTIC).
 * - Open a haptic device.
 * - SDL_OpenHaptic() to open from index.
 * - SDL_OpenHapticFromJoystick() to open from an existing joystick.
 * - Create an effect (SDL_HapticEffect).
 * - Upload the effect with SDL_CreateHapticEffect().
 * - Run the effect with SDL_RunHapticEffect().
 * - (optional) Free the effect with SDL_DestroyHapticEffect().
 * - Close the haptic device with SDL_CloseHaptic().
 *
 * Simple rumble example:
 *
 * ```c
 *    SDL_Haptic *haptic = NULL;
 *
 *    // Open the device
 *    SDL_HapticID *haptics = SDL_GetHaptics(NULL);
 *    if (haptics) {
 *        haptic = SDL_OpenHaptic(haptics[0]);
 *        SDL_free(haptics);
 *    }
 *    if (haptic == NULL)
 *       return;
 *
 *    // Initialize simple rumble
 *    if (!SDL_InitHapticRumble(haptic))
 *       return;
 *
 *    // Play effect at 50% strength for 2 seconds
 *    if (!SDL_PlayHapticRumble(haptic, 0.5, 2000))
 *       return;
 *    SDL_Delay(2000);
 *
 *    // Clean up
 *    SDL_CloseHaptic(haptic);
 * ```
 *
 * Complete example:
 *
 * ```c
 * bool test_haptic(SDL_Joystick *joystick)
 * {
 *    SDL_Haptic *haptic;
 *    SDL_HapticEffect effect;
 *    int effect_id;
 *
 *    // Open the device
 *    haptic = SDL_OpenHapticFromJoystick(joystick);
 *    if (haptic == NULL) return false; // Most likely joystick isn't haptic
 *
 *    // See if it can do sine waves
 *    if ((SDL_GetHapticFeatures(haptic) & SDL_HAPTIC_SINE)==0) {
 *       SDL_CloseHaptic(haptic); // No sine effect
 *       return false;
 *    }
 *
 *    // Create the effect
 *    SDL_memset(&effect, 0, sizeof(SDL_HapticEffect)); // 0 is safe default
 *    effect.type = SDL_HAPTIC_SINE;
 *    effect.periodic.direction.type = SDL_HAPTIC_POLAR; // Polar coordinates
 *    effect.periodic.direction.dir[0] = 18000; // Force comes from south
 *    effect.periodic.period = 1000; // 1000 ms
 *    effect.periodic.magnitude = 20000; // 20000/32767 strength
 *    effect.periodic.length = 5000; // 5 seconds long
 *    effect.periodic.attack_length = 1000; // Takes 1 second to get max strength
 *    effect.periodic.fade_length = 1000; // Takes 1 second to fade away
 *
 *    // Upload the effect
 *    effect_id = SDL_CreateHapticEffect(haptic, &effect);
 *
 *    // Test the effect
 *    SDL_RunHapticEffect(haptic, effect_id, 1);
 *    SDL_Delay(5000); // Wait for the effect to finish
 *
 *    // We destroy the effect, although closing the device also does this
 *    SDL_DestroyHapticEffect(haptic, effect_id);
 *
 *    // Close the device
 *    SDL_CloseHaptic(haptic);
 *
 *    return true; // Success
 * }
 * ```
 *
 * Note that the SDL haptic subsystem is not thread-safe.
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
 * Get a list of currently connected haptic devices.
 *
 * @param count a pointer filled in with the number of haptic devices
 *              returned, may be NULL.
 * @returns a 0 terminated array of haptic device instance IDs or NULL on
 *          failure; call SDL_GetError() for more information. This should be
 *          freed with SDL_free() when it is no longer needed.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_OpenHaptic
 *
 * @from SDL_haptic.h:954 SDL_HapticID * SDL_GetHaptics(int *count);
 */
export const getHaptics = lib.symbols.SDL_GetHaptics;

/**
 * Get the implementation dependent name of a haptic device.
 *
 * This can be called before any haptic devices are opened.
 *
 * @param instance_id the haptic device instance ID.
 * @returns the name of the selected haptic device. If no name can be found,
 *          this function returns NULL; call SDL_GetError() for more
 *          information.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_GetHapticName
 * @sa SDL_OpenHaptic
 *
 * @from SDL_haptic.h:971 const char * SDL_GetHapticNameForID(SDL_HapticID instance_id);
 */
export const getHapticNameForId = lib.symbols.SDL_GetHapticNameForID;

/**
 * Open a haptic device for use.
 *
 * The index passed as an argument refers to the N'th haptic device on this
 * system.
 *
 * When opening a haptic device, its gain will be set to maximum and
 * autocenter will be disabled. To modify these values use SDL_SetHapticGain()
 * and SDL_SetHapticAutocenter().
 *
 * @param instance_id the haptic device instance ID.
 * @returns the device identifier or NULL on failure; call SDL_GetError() for
 *          more information.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_CloseHaptic
 * @sa SDL_GetHaptics
 * @sa SDL_OpenHapticFromJoystick
 * @sa SDL_OpenHapticFromMouse
 * @sa SDL_SetHapticAutocenter
 * @sa SDL_SetHapticGain
 *
 * @from SDL_haptic.h:996 SDL_Haptic * SDL_OpenHaptic(SDL_HapticID instance_id);
 */
export const openHaptic = lib.symbols.SDL_OpenHaptic;

/**
 * Get the SDL_Haptic associated with an instance ID, if it has been opened.
 *
 * @param instance_id the instance ID to get the SDL_Haptic for.
 * @returns an SDL_Haptic on success or NULL on failure or if it hasn't been
 *          opened yet; call SDL_GetError() for more information.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @from SDL_haptic.h:1008 SDL_Haptic * SDL_GetHapticFromID(SDL_HapticID instance_id);
 */
export const getHapticFromId = lib.symbols.SDL_GetHapticFromID;

/**
 * Get the instance ID of an opened haptic device.
 *
 * @param haptic the SDL_Haptic device to query.
 * @returns the instance ID of the specified haptic device on success or 0 on
 *          failure; call SDL_GetError() for more information.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @from SDL_haptic.h:1019 SDL_HapticID SDL_GetHapticID(SDL_Haptic *haptic);
 */
export const getHapticId = lib.symbols.SDL_GetHapticID;

/**
 * Get the implementation dependent name of a haptic device.
 *
 * @param haptic the SDL_Haptic obtained from SDL_OpenJoystick().
 * @returns the name of the selected haptic device. If no name can be found,
 *          this function returns NULL; call SDL_GetError() for more
 *          information.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_GetHapticNameForID
 *
 * @from SDL_haptic.h:1033 const char * SDL_GetHapticName(SDL_Haptic *haptic);
 */
export const getHapticName = lib.symbols.SDL_GetHapticName;

/**
 * Query whether or not the current mouse has haptic capabilities.
 *
 * @returns true if the mouse is haptic or false if it isn't.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_OpenHapticFromMouse
 *
 * @from SDL_haptic.h:1044 bool SDL_IsMouseHaptic(void);
 */
export const isMouseHaptic = lib.symbols.SDL_IsMouseHaptic;

/**
 * Try to open a haptic device from the current mouse.
 *
 * @returns the haptic device identifier or NULL on failure; call
 *          SDL_GetError() for more information.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_CloseHaptic
 * @sa SDL_IsMouseHaptic
 *
 * @from SDL_haptic.h:1057 SDL_Haptic * SDL_OpenHapticFromMouse(void);
 */
export const openHapticFromMouse = lib.symbols.SDL_OpenHapticFromMouse;

/**
 * Query if a joystick has haptic features.
 *
 * @param joystick the SDL_Joystick to test for haptic capabilities.
 * @returns true if the joystick is haptic or false if it isn't.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_OpenHapticFromJoystick
 *
 * @from SDL_haptic.h:1069 bool SDL_IsJoystickHaptic(SDL_Joystick *joystick);
 */
export const isJoystickHaptic = lib.symbols.SDL_IsJoystickHaptic;

/**
 * Open a haptic device for use from a joystick device.
 *
 * You must still close the haptic device separately. It will not be closed
 * with the joystick.
 *
 * When opened from a joystick you should first close the haptic device before
 * closing the joystick device. If not, on some implementations the haptic
 * device will also get unallocated and you'll be unable to use force feedback
 * on that device.
 *
 * @param joystick the SDL_Joystick to create a haptic device from.
 * @returns a valid haptic device identifier on success or NULL on failure;
 *          call SDL_GetError() for more information.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_CloseHaptic
 * @sa SDL_IsJoystickHaptic
 *
 * @from SDL_haptic.h:1091 SDL_Haptic * SDL_OpenHapticFromJoystick(SDL_Joystick *joystick);
 */
export const openHapticFromJoystick = lib.symbols.SDL_OpenHapticFromJoystick;

/**
 * Close a haptic device previously opened with SDL_OpenHaptic().
 *
 * @param haptic the SDL_Haptic device to close.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_OpenHaptic
 *
 * @from SDL_haptic.h:1102 void SDL_CloseHaptic(SDL_Haptic *haptic);
 */
export const closeHaptic = lib.symbols.SDL_CloseHaptic;

/**
 * Get the number of effects a haptic device can store.
 *
 * On some platforms this isn't fully supported, and therefore is an
 * approximation. Always check to see if your created effect was actually
 * created and do not rely solely on SDL_GetMaxHapticEffects().
 *
 * @param haptic the SDL_Haptic device to query.
 * @returns the number of effects the haptic device can store or a negative
 *          error code on failure; call SDL_GetError() for more information.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_GetMaxHapticEffectsPlaying
 * @sa SDL_GetHapticFeatures
 *
 * @from SDL_haptic.h:1120 int SDL_GetMaxHapticEffects(SDL_Haptic *haptic);
 */
export const getMaxHapticEffects = lib.symbols.SDL_GetMaxHapticEffects;

/**
 * Get the number of effects a haptic device can play at the same time.
 *
 * This is not supported on all platforms, but will always return a value.
 *
 * @param haptic the SDL_Haptic device to query maximum playing effects.
 * @returns the number of effects the haptic device can play at the same time
 *          or -1 on failure; call SDL_GetError() for more information.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_GetMaxHapticEffects
 * @sa SDL_GetHapticFeatures
 *
 * @from SDL_haptic.h:1136 int SDL_GetMaxHapticEffectsPlaying(SDL_Haptic *haptic);
 */
export const getMaxHapticEffectsPlaying = lib.symbols.SDL_GetMaxHapticEffectsPlaying;

/**
 * Get the haptic device's supported features in bitwise manner.
 *
 * @param haptic the SDL_Haptic device to query.
 * @returns a list of supported haptic features in bitwise manner (OR'd), or 0
 *          on failure; call SDL_GetError() for more information.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_HapticEffectSupported
 * @sa SDL_GetMaxHapticEffects
 *
 * @from SDL_haptic.h:1150 Uint32 SDL_GetHapticFeatures(SDL_Haptic *haptic);
 */
export const getHapticFeatures = lib.symbols.SDL_GetHapticFeatures;

/**
 * Get the number of haptic axes the device has.
 *
 * The number of haptic axes might be useful if working with the
 * SDL_HapticDirection effect.
 *
 * @param haptic the SDL_Haptic device to query.
 * @returns the number of axes on success or -1 on failure; call
 *          SDL_GetError() for more information.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @from SDL_haptic.h:1164 int SDL_GetNumHapticAxes(SDL_Haptic *haptic);
 */
export const getNumHapticAxes = lib.symbols.SDL_GetNumHapticAxes;

/**
 * Check to see if an effect is supported by a haptic device.
 *
 * @param haptic the SDL_Haptic device to query.
 * @param effect the desired effect to query.
 * @returns true if the effect is supported or false if it isn't.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_CreateHapticEffect
 * @sa SDL_GetHapticFeatures
 *
 * @from SDL_haptic.h:1178 bool SDL_HapticEffectSupported(SDL_Haptic *haptic, const SDL_HapticEffect *effect);
 */
export const hapticEffectSupported = lib.symbols.SDL_HapticEffectSupported;

/**
 * Create a new haptic effect on a specified device.
 *
 * @param haptic an SDL_Haptic device to create the effect on.
 * @param effect an SDL_HapticEffect structure containing the properties of
 *               the effect to create.
 * @returns the ID of the effect on success or -1 on failure; call
 *          SDL_GetError() for more information.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_DestroyHapticEffect
 * @sa SDL_RunHapticEffect
 * @sa SDL_UpdateHapticEffect
 *
 * @from SDL_haptic.h:1195 int SDL_CreateHapticEffect(SDL_Haptic *haptic, const SDL_HapticEffect *effect);
 */
export const createHapticEffect = lib.symbols.SDL_CreateHapticEffect;

/**
 * Update the properties of an effect.
 *
 * Can be used dynamically, although behavior when dynamically changing
 * direction may be strange. Specifically the effect may re-upload itself and
 * start playing from the start. You also cannot change the type either when
 * running SDL_UpdateHapticEffect().
 *
 * @param haptic the SDL_Haptic device that has the effect.
 * @param effect the identifier of the effect to update.
 * @param data an SDL_HapticEffect structure containing the new effect
 *             properties to use.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_CreateHapticEffect
 * @sa SDL_RunHapticEffect
 *
 * @from SDL_haptic.h:1217 bool SDL_UpdateHapticEffect(SDL_Haptic *haptic, int effect, const SDL_HapticEffect *data);
 */
export const updateHapticEffect = lib.symbols.SDL_UpdateHapticEffect;

/**
 * Run the haptic effect on its associated haptic device.
 *
 * To repeat the effect over and over indefinitely, set `iterations` to
 * `SDL_HAPTIC_INFINITY`. (Repeats the envelope - attack and fade.) To make
 * one instance of the effect last indefinitely (so the effect does not fade),
 * set the effect's `length` in its structure/union to `SDL_HAPTIC_INFINITY`
 * instead.
 *
 * @param haptic the SDL_Haptic device to run the effect on.
 * @param effect the ID of the haptic effect to run.
 * @param iterations the number of iterations to run the effect; use
 *                   `SDL_HAPTIC_INFINITY` to repeat forever.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_GetHapticEffectStatus
 * @sa SDL_StopHapticEffect
 * @sa SDL_StopHapticEffects
 *
 * @from SDL_haptic.h:1241 bool SDL_RunHapticEffect(SDL_Haptic *haptic, int effect, Uint32 iterations);
 */
export const runHapticEffect = lib.symbols.SDL_RunHapticEffect;

/**
 * Stop the haptic effect on its associated haptic device.
 *
 * @param haptic the SDL_Haptic device to stop the effect on.
 * @param effect the ID of the haptic effect to stop.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_RunHapticEffect
 * @sa SDL_StopHapticEffects
 *
 * @from SDL_haptic.h:1256 bool SDL_StopHapticEffect(SDL_Haptic *haptic, int effect);
 */
export const stopHapticEffect = lib.symbols.SDL_StopHapticEffect;

/**
 * Destroy a haptic effect on the device.
 *
 * This will stop the effect if it's running. Effects are automatically
 * destroyed when the device is closed.
 *
 * @param haptic the SDL_Haptic device to destroy the effect on.
 * @param effect the ID of the haptic effect to destroy.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_CreateHapticEffect
 *
 * @from SDL_haptic.h:1271 void SDL_DestroyHapticEffect(SDL_Haptic *haptic, int effect);
 */
export const destroyHapticEffect = lib.symbols.SDL_DestroyHapticEffect;

/**
 * Get the status of the current effect on the specified haptic device.
 *
 * Device must support the SDL_HAPTIC_STATUS feature.
 *
 * @param haptic the SDL_Haptic device to query for the effect status on.
 * @param effect the ID of the haptic effect to query its status.
 * @returns true if it is playing, false if it isn't playing or haptic status
 *          isn't supported.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_GetHapticFeatures
 *
 * @from SDL_haptic.h:1287 bool SDL_GetHapticEffectStatus(SDL_Haptic *haptic, int effect);
 */
export const getHapticEffectStatus = lib.symbols.SDL_GetHapticEffectStatus;

/**
 * Set the global gain of the specified haptic device.
 *
 * Device must support the SDL_HAPTIC_GAIN feature.
 *
 * The user may specify the maximum gain by setting the environment variable
 * `SDL_HAPTIC_GAIN_MAX` which should be between 0 and 100. All calls to
 * SDL_SetHapticGain() will scale linearly using `SDL_HAPTIC_GAIN_MAX` as the
 * maximum.
 *
 * @param haptic the SDL_Haptic device to set the gain on.
 * @param gain value to set the gain to, should be between 0 and 100 (0 -
 *             100).
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_GetHapticFeatures
 *
 * @from SDL_haptic.h:1309 bool SDL_SetHapticGain(SDL_Haptic *haptic, int gain);
 */
export const setHapticGain = lib.symbols.SDL_SetHapticGain;

/**
 * Set the global autocenter of the device.
 *
 * Autocenter should be between 0 and 100. Setting it to 0 will disable
 * autocentering.
 *
 * Device must support the SDL_HAPTIC_AUTOCENTER feature.
 *
 * @param haptic the SDL_Haptic device to set autocentering on.
 * @param autocenter value to set autocenter to (0-100).
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_GetHapticFeatures
 *
 * @from SDL_haptic.h:1328 bool SDL_SetHapticAutocenter(SDL_Haptic *haptic, int autocenter);
 */
export const setHapticAutocenter = lib.symbols.SDL_SetHapticAutocenter;

/**
 * Pause a haptic device.
 *
 * Device must support the `SDL_HAPTIC_PAUSE` feature. Call SDL_ResumeHaptic()
 * to resume playback.
 *
 * Do not modify the effects nor add new ones while the device is paused. That
 * can cause all sorts of weird errors.
 *
 * @param haptic the SDL_Haptic device to pause.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_ResumeHaptic
 *
 * @from SDL_haptic.h:1347 bool SDL_PauseHaptic(SDL_Haptic *haptic);
 */
export const pauseHaptic = lib.symbols.SDL_PauseHaptic;

/**
 * Resume a haptic device.
 *
 * Call to unpause after SDL_PauseHaptic().
 *
 * @param haptic the SDL_Haptic device to unpause.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_PauseHaptic
 *
 * @from SDL_haptic.h:1362 bool SDL_ResumeHaptic(SDL_Haptic *haptic);
 */
export const resumeHaptic = lib.symbols.SDL_ResumeHaptic;

/**
 * Stop all the currently playing effects on a haptic device.
 *
 * @param haptic the SDL_Haptic device to stop.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_RunHapticEffect
 * @sa SDL_StopHapticEffects
 *
 * @from SDL_haptic.h:1376 bool SDL_StopHapticEffects(SDL_Haptic *haptic);
 */
export const stopHapticEffects = lib.symbols.SDL_StopHapticEffects;

/**
 * Check whether rumble is supported on a haptic device.
 *
 * @param haptic haptic device to check for rumble support.
 * @returns true if the effect is supported or false if it isn't.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_InitHapticRumble
 *
 * @from SDL_haptic.h:1388 bool SDL_HapticRumbleSupported(SDL_Haptic *haptic);
 */
export const hapticRumbleSupported = lib.symbols.SDL_HapticRumbleSupported;

/**
 * Initialize a haptic device for simple rumble playback.
 *
 * @param haptic the haptic device to initialize for simple rumble playback.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_PlayHapticRumble
 * @sa SDL_StopHapticRumble
 * @sa SDL_HapticRumbleSupported
 *
 * @from SDL_haptic.h:1403 bool SDL_InitHapticRumble(SDL_Haptic *haptic);
 */
export const initHapticRumble = lib.symbols.SDL_InitHapticRumble;

/**
 * Run a simple rumble effect on a haptic device.
 *
 * @param haptic the haptic device to play the rumble effect on.
 * @param strength strength of the rumble to play as a 0-1 float value.
 * @param length length of the rumble to play in milliseconds.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_InitHapticRumble
 * @sa SDL_StopHapticRumble
 *
 * @from SDL_haptic.h:1419 bool SDL_PlayHapticRumble(SDL_Haptic *haptic, float strength, Uint32 length);
 */
export const playHapticRumble = lib.symbols.SDL_PlayHapticRumble;

/**
 * Stop the simple rumble on a haptic device.
 *
 * @param haptic the haptic device to stop the rumble effect on.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_PlayHapticRumble
 *
 * @from SDL_haptic.h:1432 bool SDL_StopHapticRumble(SDL_Haptic *haptic);
 */
export const stopHapticRumble = lib.symbols.SDL_StopHapticRumble;

