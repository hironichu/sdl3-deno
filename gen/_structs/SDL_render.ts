/**
 * # CategoryRender
 *
 * Header file for SDL 2D rendering functions.
 *
 * This API supports the following features:
 *
 * - single pixel points
 * - single pixel lines
 * - filled rectangles
 * - texture images
 * - 2D polygons
 *
 * The primitives may be drawn in opaque, blended, or additive modes.
 *
 * The texture images may be drawn in opaque, blended, or additive modes. They
 * can have an additional color tint or alpha modulation applied to them, and
 * may also be stretched with linear interpolation.
 *
 * This API is designed to accelerate simple 2D operations. You may want more
 * functionality such as polygons and particle effects and in that case you
 * should use SDL's OpenGL/Direct3D support, the SDL3 GPU API, or one of the
 * many good 3D engines.
 *
 * These functions must be called from the main thread. See this bug for
 * details: https://github.com/libsdl-org/SDL/issues/986
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

import * as _ from "@denosaurs/byte-type";


/**
 * Vertex structure.
 *
 * @since This struct is available since SDL 3.2.0.
 *
 * @from SDL_render.h:80 
 */
export const SDL_Vertex = new _.Struct({
  position: SDL_FPoint, /**< SDL_FPoint : Vertex position, in SDL_Renderer coordinates  */
  color: SDL_FColor, /**< SDL_FColor : Vertex color */
  tex_coord: SDL_FPoint, /**< SDL_FPoint : Normalized texture coordinates, if needed */
});



/**
 * An efficient driver-specific representation of pixel data
 *
 * @since This struct is available since SDL 3.2.0.
 *
 * @sa SDL_CreateTexture
 * @sa SDL_CreateTextureFromSurface
 * @sa SDL_CreateTextureWithProperties
 * @sa SDL_DestroyTexture
 *
 * @from SDL_render.h:132 
 */
export const SDL_Texture = new _.Struct({
  format: _.u32, /**< SDL_PixelFormat : The format of the texture, read-only */
  w: _.i32, /**< int : The width of the texture, read-only. */
  h: _.i32, /**< int : The height of the texture, read-only. */
  refcount: _.i32, /**< int : Application reference count, used when freeing texture */
});



