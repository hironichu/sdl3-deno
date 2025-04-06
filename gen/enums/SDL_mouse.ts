/**
 * # CategoryMouse
 *
 * Any GUI application has to deal with the mouse, and SDL provides functions
 * to manage mouse input and the displayed cursor.
 *
 * Most interactions with the mouse will come through the event subsystem.
 * Moving a mouse generates an SDL_EVENT_MOUSE_MOTION event, pushing a button
 * generates SDL_EVENT_MOUSE_BUTTON_DOWN, etc, but one can also query the
 * current state of the mouse at any time with SDL_GetMouseState().
 *
 * For certain games, it's useful to disassociate the mouse cursor from mouse
 * input. An FPS, for example, would not want the player's motion to stop as
 * the mouse hits the edge of the window. For these scenarios, use
 * SDL_SetWindowRelativeMouseMode(), which hides the cursor, grabs mouse input
 * to the window, and reads mouse input no matter how far it moves.
 *
 * Games that want the system to track the mouse but want to draw their own
 * cursor can use SDL_HideCursor() and SDL_ShowCursor(). It might be more
 * efficient to let the system manage the cursor, if possible, using
 * SDL_SetCursor() with a custom image made through SDL_CreateColorCursor(),
 * or perhaps just a specific system cursor from SDL_CreateSystemCursor().
 *
 * SDL can, on many platforms, differentiate between multiple connected mice,
 * allowing for interesting input scenarios and multiplayer games. They can be
 * enumerated with SDL_GetMice(), and SDL will send SDL_EVENT_MOUSE_ADDED and
 * SDL_EVENT_MOUSE_REMOVED events as they are connected and unplugged.
 *
 * Since many apps only care about basic mouse input, SDL offers a virtual
 * mouse device for touch and pen input, which often can make a desktop
 * application work on a touchscreen phone without any code changes. Apps that
 * care about touch/pen separately from mouse input should filter out events
 * with a `which` field of SDL_TOUCH_MOUSEID/SDL_PEN_MOUSEID.
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
 * @from SDL_mouse:149 SDL_BUTTON_
 */
export enum BUTTON {
  LEFT = 1, 
  MIDDLE = 2, 
  RIGHT = 3, 
  X1 = 4, 
  X2 = 5, 
}



/**
 * Cursor types for SDL_CreateSystemCursor().
 *
 * @since This enum is available since SDL 3.2.0.
 *
 * @from SDL_mouse.h:96 SDL_SYSTEM_CURSOR_
 */
export enum SDL_SystemCursor {
  DEFAULT, /**< Default cursor. Usually an arrow. */
  TEXT, /**< Text selection. Usually an I-beam. */
  WAIT, /**< Wait. Usually an hourglass or watch or spinning ball. */
  CROSSHAIR, /**< Crosshair. */
  PROGRESS, /**< Program is busy but still interactive. Usually it's WAIT with an arrow. */
  NWSE_RESIZE, /**< Double arrow pointing northwest and southeast. */
  NESW_RESIZE, /**< Double arrow pointing northeast and southwest. */
  EW_RESIZE, /**< Double arrow pointing west and east. */
  NS_RESIZE, /**< Double arrow pointing north and south. */
  MOVE, /**< Four pointed arrow pointing north, south, east, and west. */
  NOT_ALLOWED, /**< Not permitted. Usually a slashed circle or crossbones. */
  POINTER, /**< Pointer that indicates a link. Usually a pointing hand. */
  NW_RESIZE, /**< Window resize top-left. This may be a single arrow or a double arrow like NWSE_RESIZE. */
  N_RESIZE, /**< Window resize top. May be NS_RESIZE. */
  NE_RESIZE, /**< Window resize top-right. May be NESW_RESIZE. */
  E_RESIZE, /**< Window resize right. May be EW_RESIZE. */
  SE_RESIZE, /**< Window resize bottom-right. May be NWSE_RESIZE. */
  S_RESIZE, /**< Window resize bottom. May be NS_RESIZE. */
  SW_RESIZE, /**< Window resize bottom-left. May be NESW_RESIZE. */
  W_RESIZE, /**< Window resize left. May be EW_RESIZE. */
  COUNT, 
}



/**
 * Scroll direction types for the Scroll event
 *
 * @since This enum is available since SDL 3.2.0.
 *
 * @from SDL_mouse.h:126 SDL_MOUSEWHEEL_
 */
export enum SDL_MouseWheelDirection {
  NORMAL, /**< The scroll direction is normal */
  FLIPPED, /**< The scroll direction is flipped / natural */
}



