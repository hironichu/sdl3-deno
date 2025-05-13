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

/**
 * Get the D3D9 adapter index that matches the specified display.
 *
 * The returned adapter index can be passed to `IDirect3D9::CreateDevice` and
 * controls on which monitor a full screen application will appear.
 *
 * @param displayID the instance of the display to query.
 * @returns the D3D9 adapter index on success or -1 on failure; call
 *          SDL_GetError() for more information.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @from SDL_system.h:111 int SDL_GetDirect3D9AdapterIndex(SDL_DisplayID displayID);
 * @platform-specific SDL_system.h:97 WIN32: #if defined(SDL_PLATFORM_WIN32) || defined(SDL_PLATFORM_WINGDK)
 */
export const getDirect3D9AdapterIndex = lib.symbols.SDL_GetDirect3D9AdapterIndex;

/**
 * Get the DXGI Adapter and Output indices for the specified display.
 *
 * The DXGI Adapter and Output indices can be passed to `EnumAdapters` and
 * `EnumOutputs` respectively to get the objects required to create a DX10 or
 * DX11 device and swap chain.
 *
 * @param displayID the instance of the display to query.
 * @param adapterIndex a pointer to be filled in with the adapter index.
 * @param outputIndex a pointer to be filled in with the output index.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @from SDL_system.h:128 bool SDL_GetDXGIOutputInfo(SDL_DisplayID displayID, int *adapterIndex, int *outputIndex);
 * @platform-specific SDL_system.h:97 WIN32: #if defined(SDL_PLATFORM_WIN32) || defined(SDL_PLATFORM_WINGDK)
 */
export const getDxgiOutputInfo = lib.symbols.SDL_GetDXGIOutputInfo;

