/**
 * # CategoryPen
 *
 * SDL pen event handling.
 *
 * SDL provides an API for pressure-sensitive pen (stylus and/or eraser)
 * handling, e.g., for input and drawing tablets or suitably equipped mobile /
 * tablet devices.
 *
 * To get started with pens, simply handle SDL_EVENT_PEN_* events. When a pen
 * starts providing input, SDL will assign it a unique SDL_PenID, which will
 * remain for the life of the process, as long as the pen stays connected.
 *
 * Pens may provide more than simple touch input; they might have other axes,
 * such as pressure, tilt, rotation, etc.
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
 * @from SDL_pen:68
 */
export const SDL_PEN_MOUSEID = ((SDL_MouseID)-2);

/**
 * @from SDL_pen:75
 */
export const SDL_PEN_TOUCHID = ((SDL_TouchID)-2);

