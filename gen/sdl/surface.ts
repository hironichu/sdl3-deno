/**
 * # CategorySurface
 *
 * SDL surfaces are buffers of pixels in system RAM. These are useful for
 * passing around and manipulating images that are not stored in GPU memory.
 *
 * SDL_Surface makes serious efforts to manage images in various formats, and
 * provides a reasonable toolbox for transforming the data, including copying
 * between surfaces, filling rectangles in the image data, etc.
 *
 * There is also a simple .bmp loader, SDL_LoadBMP(). SDL itself does not
 * provide loaders for various other file formats, but there are several
 * excellent external libraries that do, including its own satellite library,
 * SDL_image:
 *
 * https://github.com/libsdl-org/SDL_image
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
  SURFACE as SURFACE,
  PROP_SURFACE as PROP_SURFACE,
  SDL_ScaleMode as SCALEMODE,
  SDL_FlipMode as FLIP,
} from "../enums/SDL_surface.ts"

/**
 * Allocate a new surface with a specific pixel format.
 *
 * The pixels of the new surface are initialized to zero.
 *
 * @param width the width of the surface.
 * @param height the height of the surface.
 * @param format the SDL_PixelFormat for the new surface's pixel format.
 * @returns the new SDL_Surface structure that is created or NULL on failure;
 *          call SDL_GetError() for more information.
 *
 * @threadsafety It is safe to call this function from any thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_CreateSurfaceFrom
 * @sa SDL_DestroySurface
 *
 * @from SDL_surface.h:166 SDL_Surface * SDL_CreateSurface(int width, int height, SDL_PixelFormat format);
 */
export const createSurface = lib.symbols.SDL_CreateSurface;

/**
 * Allocate a new surface with a specific pixel format and existing pixel
 * data.
 *
 * No copy is made of the pixel data. Pixel data is not managed automatically;
 * you must free the surface before you free the pixel data.
 *
 * Pitch is the offset in bytes from one row of pixels to the next, e.g.
 * `width*4` for `SDL_PIXELFORMAT_RGBA8888`.
 *
 * You may pass NULL for pixels and 0 for pitch to create a surface that you
 * will fill in with valid values later.
 *
 * @param width the width of the surface.
 * @param height the height of the surface.
 * @param format the SDL_PixelFormat for the new surface's pixel format.
 * @param pixels a pointer to existing pixel data.
 * @param pitch the number of bytes between each row, including padding.
 * @returns the new SDL_Surface structure that is created or NULL on failure;
 *          call SDL_GetError() for more information.
 *
 * @threadsafety It is safe to call this function from any thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_CreateSurface
 * @sa SDL_DestroySurface
 *
 * @from SDL_surface.h:196 SDL_Surface * SDL_CreateSurfaceFrom(int width, int height, SDL_PixelFormat format, void *pixels, int pitch);
 */
export const createSurfaceFrom = lib.symbols.SDL_CreateSurfaceFrom;

/**
 * Free a surface.
 *
 * It is safe to pass NULL to this function.
 *
 * @param surface the SDL_Surface to free.
 *
 * @threadsafety No other thread should be using the surface when it is freed.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_CreateSurface
 * @sa SDL_CreateSurfaceFrom
 *
 * @from SDL_surface.h:212 void SDL_DestroySurface(SDL_Surface *surface);
 */
export const destroySurface = lib.symbols.SDL_DestroySurface;

/**
 * Get the properties associated with a surface.
 *
 * The following properties are understood by SDL:
 *
 * - `SDL_PROP_SURFACE_SDR_WHITE_POINT_FLOAT`: for HDR10 and floating point
 *   surfaces, this defines the value of 100% diffuse white, with higher
 *   values being displayed in the High Dynamic Range headroom. This defaults
 *   to 203 for HDR10 surfaces and 1.0 for floating point surfaces.
 * - `SDL_PROP_SURFACE_HDR_HEADROOM_FLOAT`: for HDR10 and floating point
 *   surfaces, this defines the maximum dynamic range used by the content, in
 *   terms of the SDR white point. This defaults to 0.0, which disables tone
 *   mapping.
 * - `SDL_PROP_SURFACE_TONEMAP_OPERATOR_STRING`: the tone mapping operator
 *   used when compressing from a surface with high dynamic range to another
 *   with lower dynamic range. Currently this supports "chrome", which uses
 *   the same tone mapping that Chrome uses for HDR content, the form "*=N",
 *   where N is a floating point scale factor applied in linear space, and
 *   "none", which disables tone mapping. This defaults to "chrome".
 * - `SDL_PROP_SURFACE_HOTSPOT_X_NUMBER`: the hotspot pixel offset from the
 *   left edge of the image, if this surface is being used as a cursor.
 * - `SDL_PROP_SURFACE_HOTSPOT_Y_NUMBER`: the hotspot pixel offset from the
 *   top edge of the image, if this surface is being used as a cursor.
 *
 * @param surface the SDL_Surface structure to query.
 * @returns a valid property ID on success or 0 on failure; call
 *          SDL_GetError() for more information.
 *
 * @threadsafety It is safe to call this function from any thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @from SDL_surface.h:246 SDL_PropertiesID SDL_GetSurfaceProperties(SDL_Surface *surface);
 */
export const getSurfaceProperties = lib.symbols.SDL_GetSurfaceProperties;

/**
 * Set the colorspace used by a surface.
 *
 * Setting the colorspace doesn't change the pixels, only how they are
 * interpreted in color operations.
 *
 * @param surface the SDL_Surface structure to update.
 * @param colorspace an SDL_Colorspace value describing the surface
 *                   colorspace.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function is not thread safe.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_GetSurfaceColorspace
 *
 * @from SDL_surface.h:272 bool SDL_SetSurfaceColorspace(SDL_Surface *surface, SDL_Colorspace colorspace);
 */
export const setSurfaceColorspace = lib.symbols.SDL_SetSurfaceColorspace;

/**
 * Get the colorspace used by a surface.
 *
 * The colorspace defaults to SDL_COLORSPACE_SRGB_LINEAR for floating point
 * formats, SDL_COLORSPACE_HDR10 for 10-bit formats, SDL_COLORSPACE_SRGB for
 * other RGB surfaces and SDL_COLORSPACE_BT709_FULL for YUV textures.
 *
 * @param surface the SDL_Surface structure to query.
 * @returns the colorspace used by the surface, or SDL_COLORSPACE_UNKNOWN if
 *          the surface is NULL.
 *
 * @threadsafety This function is not thread safe.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_SetSurfaceColorspace
 *
 * @from SDL_surface.h:291 SDL_Colorspace SDL_GetSurfaceColorspace(SDL_Surface *surface);
 */
export const getSurfaceColorspace = lib.symbols.SDL_GetSurfaceColorspace;

/**
 * Create a palette and associate it with a surface.
 *
 * This function creates a palette compatible with the provided surface. The
 * palette is then returned for you to modify, and the surface will
 * automatically use the new palette in future operations. You do not need to
 * destroy the returned palette, it will be freed when the reference count
 * reaches 0, usually when the surface is destroyed.
 *
 * Bitmap surfaces (with format SDL_PIXELFORMAT_INDEX1LSB or
 * SDL_PIXELFORMAT_INDEX1MSB) will have the palette initialized with 0 as
 * white and 1 as black. Other surfaces will get a palette initialized with
 * white in every entry.
 *
 * If this function is called for a surface that already has a palette, a new
 * palette will be created to replace it.
 *
 * @param surface the SDL_Surface structure to update.
 * @returns a new SDL_Palette structure on success or NULL on failure (e.g. if
 *          the surface didn't have an index format); call SDL_GetError() for
 *          more information.
 *
 * @threadsafety This function is not thread safe.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_SetPaletteColors
 *
 * @from SDL_surface.h:321 SDL_Palette * SDL_CreateSurfacePalette(SDL_Surface *surface);
 */
export const createSurfacePalette = lib.symbols.SDL_CreateSurfacePalette;

/**
 * Set the palette used by a surface.
 *
 * A single palette can be shared with many surfaces.
 *
 * @param surface the SDL_Surface structure to update.
 * @param palette the SDL_Palette structure to use.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function is not thread safe.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_CreatePalette
 * @sa SDL_GetSurfacePalette
 *
 * @from SDL_surface.h:340 bool SDL_SetSurfacePalette(SDL_Surface *surface, SDL_Palette *palette);
 */
export const setSurfacePalette = lib.symbols.SDL_SetSurfacePalette;

/**
 * Get the palette used by a surface.
 *
 * @param surface the SDL_Surface structure to query.
 * @returns a pointer to the palette used by the surface, or NULL if there is
 *          no palette used.
 *
 * @threadsafety It is safe to call this function from any thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_SetSurfacePalette
 *
 * @from SDL_surface.h:355 SDL_Palette * SDL_GetSurfacePalette(SDL_Surface *surface);
 */
export const getSurfacePalette = lib.symbols.SDL_GetSurfacePalette;

/**
 * Add an alternate version of a surface.
 *
 * This function adds an alternate version of this surface, usually used for
 * content with high DPI representations like cursors or icons. The size,
 * format, and content do not need to match the original surface, and these
 * alternate versions will not be updated when the original surface changes.
 *
 * This function adds a reference to the alternate version, so you should call
 * SDL_DestroySurface() on the image after this call.
 *
 * @param surface the SDL_Surface structure to update.
 * @param image a pointer to an alternate SDL_Surface to associate with this
 *              surface.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function is not thread safe.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_RemoveSurfaceAlternateImages
 * @sa SDL_GetSurfaceImages
 * @sa SDL_SurfaceHasAlternateImages
 *
 * @from SDL_surface.h:382 bool SDL_AddSurfaceAlternateImage(SDL_Surface *surface, SDL_Surface *image);
 */
export const addSurfaceAlternateImage = lib.symbols.SDL_AddSurfaceAlternateImage;

/**
 * Return whether a surface has alternate versions available.
 *
 * @param surface the SDL_Surface structure to query.
 * @returns true if alternate versions are available or false otherwise.
 *
 * @threadsafety It is safe to call this function from any thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_AddSurfaceAlternateImage
 * @sa SDL_RemoveSurfaceAlternateImages
 * @sa SDL_GetSurfaceImages
 *
 * @from SDL_surface.h:398 bool SDL_SurfaceHasAlternateImages(SDL_Surface *surface);
 */
export const surfaceHasAlternateImages = lib.symbols.SDL_SurfaceHasAlternateImages;

/**
 * Get an array including all versions of a surface.
 *
 * This returns all versions of a surface, with the surface being queried as
 * the first element in the returned array.
 *
 * Freeing the array of surfaces does not affect the surfaces in the array.
 * They are still referenced by the surface being queried and will be cleaned
 * up normally.
 *
 * @param surface the SDL_Surface structure to query.
 * @param count a pointer filled in with the number of surface pointers
 *              returned, may be NULL.
 * @returns a NULL terminated array of SDL_Surface pointers or NULL on
 *          failure; call SDL_GetError() for more information. This should be
 *          freed with SDL_free() when it is no longer needed.
 *
 * @threadsafety This function is not thread safe.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_AddSurfaceAlternateImage
 * @sa SDL_RemoveSurfaceAlternateImages
 * @sa SDL_SurfaceHasAlternateImages
 *
 * @from SDL_surface.h:425 SDL_Surface ** SDL_GetSurfaceImages(SDL_Surface *surface, int *count);
 */
export const getSurfaceImages = lib.symbols.SDL_GetSurfaceImages;

/**
 * Remove all alternate versions of a surface.
 *
 * This function removes a reference from all the alternative versions,
 * destroying them if this is the last reference to them.
 *
 * @param surface the SDL_Surface structure to update.
 *
 * @threadsafety This function is not thread safe.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_AddSurfaceAlternateImage
 * @sa SDL_GetSurfaceImages
 * @sa SDL_SurfaceHasAlternateImages
 *
 * @from SDL_surface.h:443 void SDL_RemoveSurfaceAlternateImages(SDL_Surface *surface);
 */
export const removeSurfaceAlternateImages = lib.symbols.SDL_RemoveSurfaceAlternateImages;

/**
 * Set up a surface for directly accessing the pixels.
 *
 * Between calls to SDL_LockSurface() / SDL_UnlockSurface(), you can write to
 * and read from `surface->pixels`, using the pixel format stored in
 * `surface->format`. Once you are done accessing the surface, you should use
 * SDL_UnlockSurface() to release it.
 *
 * Not all surfaces require locking. If `SDL_MUSTLOCK(surface)` evaluates to
 * 0, then you can read and write to the surface at any time, and the pixel
 * format of the surface will not change.
 *
 * @param surface the SDL_Surface structure to be locked.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function is not thread safe. The locking referred to by
 *               this function is making the pixels available for direct
 *               access, not thread-safe locking.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_MUSTLOCK
 * @sa SDL_UnlockSurface
 *
 * @from SDL_surface.h:470 bool SDL_LockSurface(SDL_Surface *surface);
 */
export const lockSurface = lib.symbols.SDL_LockSurface;

/**
 * Release a surface after directly accessing the pixels.
 *
 * @param surface the SDL_Surface structure to be unlocked.
 *
 * @threadsafety This function is not thread safe. The locking referred to by
 *               this function is making the pixels available for direct
 *               access, not thread-safe locking.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_LockSurface
 *
 * @from SDL_surface.h:485 void SDL_UnlockSurface(SDL_Surface *surface);
 */
export const unlockSurface = lib.symbols.SDL_UnlockSurface;

/**
 * Load a BMP image from a seekable SDL data stream.
 *
 * The new surface should be freed with SDL_DestroySurface(). Not doing so
 * will result in a memory leak.
 *
 * @param src the data stream for the surface.
 * @param closeio if true, calls SDL_CloseIO() on `src` before returning, even
 *                in the case of an error.
 * @returns a pointer to a new SDL_Surface structure or NULL on failure; call
 *          SDL_GetError() for more information.
 *
 * @threadsafety It is safe to call this function from any thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_DestroySurface
 * @sa SDL_LoadBMP
 * @sa SDL_SaveBMP_IO
 *
 * @from SDL_surface.h:507 SDL_Surface * SDL_LoadBMP_IO(SDL_IOStream *src, bool closeio);
 */
export const loadBmpIo = lib.symbols.SDL_LoadBMP_IO;

/**
 * Load a BMP image from a file.
 *
 * The new surface should be freed with SDL_DestroySurface(). Not doing so
 * will result in a memory leak.
 *
 * @param file the BMP file to load.
 * @returns a pointer to a new SDL_Surface structure or NULL on failure; call
 *          SDL_GetError() for more information.
 *
 * @threadsafety It is safe to call this function from any thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_DestroySurface
 * @sa SDL_LoadBMP_IO
 * @sa SDL_SaveBMP
 *
 * @from SDL_surface.h:527 SDL_Surface * SDL_LoadBMP(const char *file);
 */
export const loadBmp = lib.symbols.SDL_LoadBMP;

/**
 * Save a surface to a seekable SDL data stream in BMP format.
 *
 * Surfaces with a 24-bit, 32-bit and paletted 8-bit format get saved in the
 * BMP directly. Other RGB formats with 8-bit or higher get converted to a
 * 24-bit surface or, if they have an alpha mask or a colorkey, to a 32-bit
 * surface before they are saved. YUV and paletted 1-bit and 4-bit formats are
 * not supported.
 *
 * @param surface the SDL_Surface structure containing the image to be saved.
 * @param dst a data stream to save to.
 * @param closeio if true, calls SDL_CloseIO() on `dst` before returning, even
 *                in the case of an error.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function is not thread safe.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_LoadBMP_IO
 * @sa SDL_SaveBMP
 *
 * @from SDL_surface.h:552 bool SDL_SaveBMP_IO(SDL_Surface *surface, SDL_IOStream *dst, bool closeio);
 */
export const saveBmpIo = lib.symbols.SDL_SaveBMP_IO;

/**
 * Save a surface to a file.
 *
 * Surfaces with a 24-bit, 32-bit and paletted 8-bit format get saved in the
 * BMP directly. Other RGB formats with 8-bit or higher get converted to a
 * 24-bit surface or, if they have an alpha mask or a colorkey, to a 32-bit
 * surface before they are saved. YUV and paletted 1-bit and 4-bit formats are
 * not supported.
 *
 * @param surface the SDL_Surface structure containing the image to be saved.
 * @param file a file to save to.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function is not thread safe.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_LoadBMP
 * @sa SDL_SaveBMP_IO
 *
 * @from SDL_surface.h:575 bool SDL_SaveBMP(SDL_Surface *surface, const char *file);
 */
export const saveBmp = lib.symbols.SDL_SaveBMP;

/**
 * Set the RLE acceleration hint for a surface.
 *
 * If RLE is enabled, color key and alpha blending blits are much faster, but
 * the surface must be locked before directly accessing the pixels.
 *
 * @param surface the SDL_Surface structure to optimize.
 * @param enabled true to enable RLE acceleration, false to disable it.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function is not thread safe.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_BlitSurface
 * @sa SDL_LockSurface
 * @sa SDL_UnlockSurface
 *
 * @from SDL_surface.h:596 bool SDL_SetSurfaceRLE(SDL_Surface *surface, bool enabled);
 */
export const setSurfaceRle = lib.symbols.SDL_SetSurfaceRLE;

/**
 * Returns whether the surface is RLE enabled.
 *
 * It is safe to pass a NULL `surface` here; it will return false.
 *
 * @param surface the SDL_Surface structure to query.
 * @returns true if the surface is RLE enabled, false otherwise.
 *
 * @threadsafety It is safe to call this function from any thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_SetSurfaceRLE
 *
 * @from SDL_surface.h:612 bool SDL_SurfaceHasRLE(SDL_Surface *surface);
 */
export const surfaceHasRle = lib.symbols.SDL_SurfaceHasRLE;

/**
 * Set the color key (transparent pixel) in a surface.
 *
 * The color key defines a pixel value that will be treated as transparent in
 * a blit. For example, one can use this to specify that cyan pixels should be
 * considered transparent, and therefore not rendered.
 *
 * It is a pixel of the format used by the surface, as generated by
 * SDL_MapRGB().
 *
 * @param surface the SDL_Surface structure to update.
 * @param enabled true to enable color key, false to disable color key.
 * @param key the transparent pixel.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function is not thread safe.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_GetSurfaceColorKey
 * @sa SDL_SetSurfaceRLE
 * @sa SDL_SurfaceHasColorKey
 *
 * @from SDL_surface.h:638 bool SDL_SetSurfaceColorKey(SDL_Surface *surface, bool enabled, Uint32 key);
 */
export const setSurfaceColorKey = lib.symbols.SDL_SetSurfaceColorKey;

/**
 * Returns whether the surface has a color key.
 *
 * It is safe to pass a NULL `surface` here; it will return false.
 *
 * @param surface the SDL_Surface structure to query.
 * @returns true if the surface has a color key, false otherwise.
 *
 * @threadsafety It is safe to call this function from any thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_SetSurfaceColorKey
 * @sa SDL_GetSurfaceColorKey
 *
 * @from SDL_surface.h:655 bool SDL_SurfaceHasColorKey(SDL_Surface *surface);
 */
export const surfaceHasColorKey = lib.symbols.SDL_SurfaceHasColorKey;

/**
 * Get the color key (transparent pixel) for a surface.
 *
 * The color key is a pixel of the format used by the surface, as generated by
 * SDL_MapRGB().
 *
 * If the surface doesn't have color key enabled this function returns false.
 *
 * @param surface the SDL_Surface structure to query.
 * @param key a pointer filled in with the transparent pixel.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety It is safe to call this function from any thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_SetSurfaceColorKey
 * @sa SDL_SurfaceHasColorKey
 *
 * @from SDL_surface.h:677 bool SDL_GetSurfaceColorKey(SDL_Surface *surface, Uint32 *key);
 */
export const getSurfaceColorKey = lib.symbols.SDL_GetSurfaceColorKey;

/**
 * Set an additional color value multiplied into blit operations.
 *
 * When this surface is blitted, during the blit operation each source color
 * channel is modulated by the appropriate color value according to the
 * following formula:
 *
 * `srcC = srcC * (color / 255)`
 *
 * @param surface the SDL_Surface structure to update.
 * @param r the red color value multiplied into blit operations.
 * @param g the green color value multiplied into blit operations.
 * @param b the blue color value multiplied into blit operations.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function is not thread safe.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_GetSurfaceColorMod
 * @sa SDL_SetSurfaceAlphaMod
 *
 * @from SDL_surface.h:702 bool SDL_SetSurfaceColorMod(SDL_Surface *surface, Uint8 r, Uint8 g, Uint8 b);
 */
export const setSurfaceColorMod = lib.symbols.SDL_SetSurfaceColorMod;

/**
 * Get the additional color value multiplied into blit operations.
 *
 * @param surface the SDL_Surface structure to query.
 * @param r a pointer filled in with the current red color value.
 * @param g a pointer filled in with the current green color value.
 * @param b a pointer filled in with the current blue color value.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function is not thread safe.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_GetSurfaceAlphaMod
 * @sa SDL_SetSurfaceColorMod
 *
 * @from SDL_surface.h:722 bool SDL_GetSurfaceColorMod(SDL_Surface *surface, Uint8 *r, Uint8 *g, Uint8 *b);
 */
export const getSurfaceColorMod = lib.symbols.SDL_GetSurfaceColorMod;

/**
 * Set an additional alpha value used in blit operations.
 *
 * When this surface is blitted, during the blit operation the source alpha
 * value is modulated by this alpha value according to the following formula:
 *
 * `srcA = srcA * (alpha / 255)`
 *
 * @param surface the SDL_Surface structure to update.
 * @param alpha the alpha value multiplied into blit operations.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function is not thread safe.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_GetSurfaceAlphaMod
 * @sa SDL_SetSurfaceColorMod
 *
 * @from SDL_surface.h:744 bool SDL_SetSurfaceAlphaMod(SDL_Surface *surface, Uint8 alpha);
 */
export const setSurfaceAlphaMod = lib.symbols.SDL_SetSurfaceAlphaMod;

/**
 * Get the additional alpha value used in blit operations.
 *
 * @param surface the SDL_Surface structure to query.
 * @param alpha a pointer filled in with the current alpha value.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety It is safe to call this function from any thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_GetSurfaceColorMod
 * @sa SDL_SetSurfaceAlphaMod
 *
 * @from SDL_surface.h:761 bool SDL_GetSurfaceAlphaMod(SDL_Surface *surface, Uint8 *alpha);
 */
export const getSurfaceAlphaMod = lib.symbols.SDL_GetSurfaceAlphaMod;

/**
 * Set the blend mode used for blit operations.
 *
 * To copy a surface to another surface (or texture) without blending with the
 * existing data, the blendmode of the SOURCE surface should be set to
 * `SDL_BLENDMODE_NONE`.
 *
 * @param surface the SDL_Surface structure to update.
 * @param blendMode the SDL_BlendMode to use for blit blending.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function is not thread safe.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_GetSurfaceBlendMode
 *
 * @from SDL_surface.h:781 bool SDL_SetSurfaceBlendMode(SDL_Surface *surface, SDL_BlendMode blendMode);
 */
export const setSurfaceBlendMode = lib.symbols.SDL_SetSurfaceBlendMode;

/**
 * Get the blend mode used for blit operations.
 *
 * @param surface the SDL_Surface structure to query.
 * @param blendMode a pointer filled in with the current SDL_BlendMode.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety It is safe to call this function from any thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_SetSurfaceBlendMode
 *
 * @from SDL_surface.h:797 bool SDL_GetSurfaceBlendMode(SDL_Surface *surface, SDL_BlendMode *blendMode);
 */
export const getSurfaceBlendMode = lib.symbols.SDL_GetSurfaceBlendMode;

/**
 * Set the clipping rectangle for a surface.
 *
 * When `surface` is the destination of a blit, only the area within the clip
 * rectangle is drawn into.
 *
 * Note that blits are automatically clipped to the edges of the source and
 * destination surfaces.
 *
 * @param surface the SDL_Surface structure to be clipped.
 * @param rect the SDL_Rect structure representing the clipping rectangle, or
 *             NULL to disable clipping.
 * @returns true if the rectangle intersects the surface, otherwise false and
 *          blits will be completely clipped.
 *
 * @threadsafety This function is not thread safe.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_GetSurfaceClipRect
 *
 * @from SDL_surface.h:820 bool SDL_SetSurfaceClipRect(SDL_Surface *surface, const SDL_Rect *rect);
 */
export const setSurfaceClipRect = lib.symbols.SDL_SetSurfaceClipRect;

/**
 * Get the clipping rectangle for a surface.
 *
 * When `surface` is the destination of a blit, only the area within the clip
 * rectangle is drawn into.
 *
 * @param surface the SDL_Surface structure representing the surface to be
 *                clipped.
 * @param rect an SDL_Rect structure filled in with the clipping rectangle for
 *             the surface.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function is not thread safe.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_SetSurfaceClipRect
 *
 * @from SDL_surface.h:841 bool SDL_GetSurfaceClipRect(SDL_Surface *surface, SDL_Rect *rect);
 */
export const getSurfaceClipRect = lib.symbols.SDL_GetSurfaceClipRect;

/**
 * Flip a surface vertically or horizontally.
 *
 * @param surface the surface to flip.
 * @param flip the direction to flip.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function is not thread safe.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @from SDL_surface.h:855 bool SDL_FlipSurface(SDL_Surface *surface, SDL_FlipMode flip);
 */
export const flipSurface = lib.symbols.SDL_FlipSurface;

/**
 * Creates a new surface identical to the existing surface.
 *
 * If the original surface has alternate images, the new surface will have a
 * reference to them as well.
 *
 * The returned surface should be freed with SDL_DestroySurface().
 *
 * @param surface the surface to duplicate.
 * @returns a copy of the surface or NULL on failure; call SDL_GetError() for
 *          more information.
 *
 * @threadsafety This function is not thread safe.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_DestroySurface
 *
 * @from SDL_surface.h:875 SDL_Surface * SDL_DuplicateSurface(SDL_Surface *surface);
 */
export const duplicateSurface = lib.symbols.SDL_DuplicateSurface;

/**
 * Creates a new surface identical to the existing surface, scaled to the
 * desired size.
 *
 * The returned surface should be freed with SDL_DestroySurface().
 *
 * @param surface the surface to duplicate and scale.
 * @param width the width of the new surface.
 * @param height the height of the new surface.
 * @param scaleMode the SDL_ScaleMode to be used.
 * @returns a copy of the surface or NULL on failure; call SDL_GetError() for
 *          more information.
 *
 * @threadsafety This function is not thread safe.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_DestroySurface
 *
 * @from SDL_surface.h:896 SDL_Surface * SDL_ScaleSurface(SDL_Surface *surface, int width, int height, SDL_ScaleMode scaleMode);
 */
export const scaleSurface = lib.symbols.SDL_ScaleSurface;

/**
 * Copy an existing surface to a new surface of the specified format.
 *
 * This function is used to optimize images for faster *repeat* blitting. This
 * is accomplished by converting the original and storing the result as a new
 * surface. The new, optimized surface can then be used as the source for
 * future blits, making them faster.
 *
 * If you are converting to an indexed surface and want to map colors to a
 * palette, you can use SDL_ConvertSurfaceAndColorspace() instead.
 *
 * If the original surface has alternate images, the new surface will have a
 * reference to them as well.
 *
 * @param surface the existing SDL_Surface structure to convert.
 * @param format the new pixel format.
 * @returns the new SDL_Surface structure that is created or NULL on failure;
 *          call SDL_GetError() for more information.
 *
 * @threadsafety This function is not thread safe.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_ConvertSurfaceAndColorspace
 * @sa SDL_DestroySurface
 *
 * @from SDL_surface.h:924 SDL_Surface * SDL_ConvertSurface(SDL_Surface *surface, SDL_PixelFormat format);
 */
export const convertSurface = lib.symbols.SDL_ConvertSurface;

/**
 * Copy an existing surface to a new surface of the specified format and
 * colorspace.
 *
 * This function converts an existing surface to a new format and colorspace
 * and returns the new surface. This will perform any pixel format and
 * colorspace conversion needed.
 *
 * If the original surface has alternate images, the new surface will have a
 * reference to them as well.
 *
 * @param surface the existing SDL_Surface structure to convert.
 * @param format the new pixel format.
 * @param palette an optional palette to use for indexed formats, may be NULL.
 * @param colorspace the new colorspace.
 * @param props an SDL_PropertiesID with additional color properties, or 0.
 * @returns the new SDL_Surface structure that is created or NULL on failure;
 *          call SDL_GetError() for more information.
 *
 * @threadsafety This function is not thread safe.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_ConvertSurface
 * @sa SDL_DestroySurface
 *
 * @from SDL_surface.h:952 SDL_Surface * SDL_ConvertSurfaceAndColorspace(SDL_Surface *surface, SDL_PixelFormat format, SDL_Palette *palette, SDL_Colorspace colorspace, SDL_PropertiesID props);
 */
export const convertSurfaceAndColorspace = lib.symbols.SDL_ConvertSurfaceAndColorspace;

/**
 * Copy a block of pixels of one format to another format.
 *
 * @param width the width of the block to copy, in pixels.
 * @param height the height of the block to copy, in pixels.
 * @param src_format an SDL_PixelFormat value of the `src` pixels format.
 * @param src a pointer to the source pixels.
 * @param src_pitch the pitch of the source pixels, in bytes.
 * @param dst_format an SDL_PixelFormat value of the `dst` pixels format.
 * @param dst a pointer to be filled in with new pixel data.
 * @param dst_pitch the pitch of the destination pixels, in bytes.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety The same destination pixels should not be used from two
 *               threads at once. It is safe to use the same source pixels
 *               from multiple threads.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_ConvertPixelsAndColorspace
 *
 * @from SDL_surface.h:976 bool SDL_ConvertPixels(int width, int height, SDL_PixelFormat src_format, const void *src, int src_pitch, SDL_PixelFormat dst_format, void *dst, int dst_pitch);
 */
export const convertPixels = lib.symbols.SDL_ConvertPixels;

/**
 * Copy a block of pixels of one format and colorspace to another format and
 * colorspace.
 *
 * @param width the width of the block to copy, in pixels.
 * @param height the height of the block to copy, in pixels.
 * @param src_format an SDL_PixelFormat value of the `src` pixels format.
 * @param src_colorspace an SDL_Colorspace value describing the colorspace of
 *                       the `src` pixels.
 * @param src_properties an SDL_PropertiesID with additional source color
 *                       properties, or 0.
 * @param src a pointer to the source pixels.
 * @param src_pitch the pitch of the source pixels, in bytes.
 * @param dst_format an SDL_PixelFormat value of the `dst` pixels format.
 * @param dst_colorspace an SDL_Colorspace value describing the colorspace of
 *                       the `dst` pixels.
 * @param dst_properties an SDL_PropertiesID with additional destination color
 *                       properties, or 0.
 * @param dst a pointer to be filled in with new pixel data.
 * @param dst_pitch the pitch of the destination pixels, in bytes.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety The same destination pixels should not be used from two
 *               threads at once. It is safe to use the same source pixels
 *               from multiple threads.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_ConvertPixels
 *
 * @from SDL_surface.h:1009 bool SDL_ConvertPixelsAndColorspace(int width, int height, SDL_PixelFormat src_format, SDL_Colorspace src_colorspace, SDL_PropertiesID src_properties, const void *src, int src_pitch, SDL_PixelFormat dst_format, SDL_Colorspace dst_colorspace, SDL_PropertiesID dst_properties, void *dst, int dst_pitch);
 */
export const convertPixelsAndColorspace = lib.symbols.SDL_ConvertPixelsAndColorspace;

/**
 * Premultiply the alpha on a block of pixels.
 *
 * This is safe to use with src == dst, but not for other overlapping areas.
 *
 * @param width the width of the block to convert, in pixels.
 * @param height the height of the block to convert, in pixels.
 * @param src_format an SDL_PixelFormat value of the `src` pixels format.
 * @param src a pointer to the source pixels.
 * @param src_pitch the pitch of the source pixels, in bytes.
 * @param dst_format an SDL_PixelFormat value of the `dst` pixels format.
 * @param dst a pointer to be filled in with premultiplied pixel data.
 * @param dst_pitch the pitch of the destination pixels, in bytes.
 * @param linear true to convert from sRGB to linear space for the alpha
 *               multiplication, false to do multiplication in sRGB space.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety The same destination pixels should not be used from two
 *               threads at once. It is safe to use the same source pixels
 *               from multiple threads.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @from SDL_surface.h:1035 bool SDL_PremultiplyAlpha(int width, int height, SDL_PixelFormat src_format, const void *src, int src_pitch, SDL_PixelFormat dst_format, void *dst, int dst_pitch, bool linear);
 */
export const premultiplyAlpha = lib.symbols.SDL_PremultiplyAlpha;

/**
 * Premultiply the alpha in a surface.
 *
 * This is safe to use with src == dst, but not for other overlapping areas.
 *
 * @param surface the surface to modify.
 * @param linear true to convert from sRGB to linear space for the alpha
 *               multiplication, false to do multiplication in sRGB space.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function is not thread safe.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @from SDL_surface.h:1052 bool SDL_PremultiplySurfaceAlpha(SDL_Surface *surface, bool linear);
 */
export const premultiplySurfaceAlpha = lib.symbols.SDL_PremultiplySurfaceAlpha;

/**
 * Clear a surface with a specific color, with floating point precision.
 *
 * This function handles all surface formats, and ignores any clip rectangle.
 *
 * If the surface is YUV, the color is assumed to be in the sRGB colorspace,
 * otherwise the color is assumed to be in the colorspace of the suface.
 *
 * @param surface the SDL_Surface to clear.
 * @param r the red component of the pixel, normally in the range 0-1.
 * @param g the green component of the pixel, normally in the range 0-1.
 * @param b the blue component of the pixel, normally in the range 0-1.
 * @param a the alpha component of the pixel, normally in the range 0-1.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function is not thread safe.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @from SDL_surface.h:1074 bool SDL_ClearSurface(SDL_Surface *surface, float r, float g, float b, float a);
 */
export const clearSurface = lib.symbols.SDL_ClearSurface;

/**
 * Perform a fast fill of a rectangle with a specific color.
 *
 * `color` should be a pixel of the format used by the surface, and can be
 * generated by SDL_MapRGB() or SDL_MapRGBA(). If the color value contains an
 * alpha component then the destination is simply filled with that alpha
 * information, no blending takes place.
 *
 * If there is a clip rectangle set on the destination (set via
 * SDL_SetSurfaceClipRect()), then this function will fill based on the
 * intersection of the clip rectangle and `rect`.
 *
 * @param dst the SDL_Surface structure that is the drawing target.
 * @param rect the SDL_Rect structure representing the rectangle to fill, or
 *             NULL to fill the entire surface.
 * @param color the color to fill with.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function is not thread safe.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_FillSurfaceRects
 *
 * @from SDL_surface.h:1101 bool SDL_FillSurfaceRect(SDL_Surface *dst, const SDL_Rect *rect, Uint32 color);
 */
export const fillSurfaceRect = lib.symbols.SDL_FillSurfaceRect;

/**
 * Perform a fast fill of a set of rectangles with a specific color.
 *
 * `color` should be a pixel of the format used by the surface, and can be
 * generated by SDL_MapRGB() or SDL_MapRGBA(). If the color value contains an
 * alpha component then the destination is simply filled with that alpha
 * information, no blending takes place.
 *
 * If there is a clip rectangle set on the destination (set via
 * SDL_SetSurfaceClipRect()), then this function will fill based on the
 * intersection of the clip rectangle and `rect`.
 *
 * @param dst the SDL_Surface structure that is the drawing target.
 * @param rects an array of SDL_Rects representing the rectangles to fill.
 * @param count the number of rectangles in the array.
 * @param color the color to fill with.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function is not thread safe.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_FillSurfaceRect
 *
 * @from SDL_surface.h:1128 bool SDL_FillSurfaceRects(SDL_Surface *dst, const SDL_Rect *rects, int count, Uint32 color);
 */
export const fillSurfaceRects = lib.symbols.SDL_FillSurfaceRects;

/**
 * Performs a fast blit from the source surface to the destination surface
 * with clipping.
 *
 * If either `srcrect` or `dstrect` are NULL, the entire surface (`src` or
 * `dst`) is copied while ensuring clipping to `dst->clip_rect`.
 *
 * The blit function should not be called on a locked surface.
 *
 * The blit semantics for surfaces with and without blending and colorkey are
 * defined as follows:
 *
 * ```
 *    RGBA->RGB:
 *      Source surface blend mode set to SDL_BLENDMODE_BLEND:
 *       alpha-blend (using the source alpha-channel and per-surface alpha)
 *       SDL_SRCCOLORKEY ignored.
 *     Source surface blend mode set to SDL_BLENDMODE_NONE:
 *       copy RGB.
 *       if SDL_SRCCOLORKEY set, only copy the pixels that do not match the
 *       RGB values of the source color key, ignoring alpha in the
 *       comparison.
 *
 *   RGB->RGBA:
 *     Source surface blend mode set to SDL_BLENDMODE_BLEND:
 *       alpha-blend (using the source per-surface alpha)
 *     Source surface blend mode set to SDL_BLENDMODE_NONE:
 *       copy RGB, set destination alpha to source per-surface alpha value.
 *     both:
 *       if SDL_SRCCOLORKEY set, only copy the pixels that do not match the
 *       source color key.
 *
 *   RGBA->RGBA:
 *     Source surface blend mode set to SDL_BLENDMODE_BLEND:
 *       alpha-blend (using the source alpha-channel and per-surface alpha)
 *       SDL_SRCCOLORKEY ignored.
 *     Source surface blend mode set to SDL_BLENDMODE_NONE:
 *       copy all of RGBA to the destination.
 *       if SDL_SRCCOLORKEY set, only copy the pixels that do not match the
 *       RGB values of the source color key, ignoring alpha in the
 *       comparison.
 *
 *   RGB->RGB:
 *     Source surface blend mode set to SDL_BLENDMODE_BLEND:
 *       alpha-blend (using the source per-surface alpha)
 *     Source surface blend mode set to SDL_BLENDMODE_NONE:
 *       copy RGB.
 *     both:
 *       if SDL_SRCCOLORKEY set, only copy the pixels that do not match the
 *       source color key.
 * ```
 *
 * @param src the SDL_Surface structure to be copied from.
 * @param srcrect the SDL_Rect structure representing the rectangle to be
 *                copied, or NULL to copy the entire surface.
 * @param dst the SDL_Surface structure that is the blit target.
 * @param dstrect the SDL_Rect structure representing the x and y position in
 *                the destination surface, or NULL for (0,0). The width and
 *                height are ignored, and are copied from `srcrect`. If you
 *                want a specific width and height, you should use
 *                SDL_BlitSurfaceScaled().
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety Only one thread should be using the `src` and `dst` surfaces
 *               at any given time.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_BlitSurfaceScaled
 *
 * @from SDL_surface.h:1201 bool SDL_BlitSurface(SDL_Surface *src, const SDL_Rect *srcrect, SDL_Surface *dst, const SDL_Rect *dstrect);
 */
export const blitSurface = lib.symbols.SDL_BlitSurface;

/**
 * Perform low-level surface blitting only.
 *
 * This is a semi-private blit function and it performs low-level surface
 * blitting, assuming the input rectangles have already been clipped.
 *
 * @param src the SDL_Surface structure to be copied from.
 * @param srcrect the SDL_Rect structure representing the rectangle to be
 *                copied, may not be NULL.
 * @param dst the SDL_Surface structure that is the blit target.
 * @param dstrect the SDL_Rect structure representing the target rectangle in
 *                the destination surface, may not be NULL.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety Only one thread should be using the `src` and `dst` surfaces
 *               at any given time.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_BlitSurface
 *
 * @from SDL_surface.h:1225 bool SDL_BlitSurfaceUnchecked(SDL_Surface *src, const SDL_Rect *srcrect, SDL_Surface *dst, const SDL_Rect *dstrect);
 */
export const blitSurfaceUnchecked = lib.symbols.SDL_BlitSurfaceUnchecked;

/**
 * Perform a scaled blit to a destination surface, which may be of a different
 * format.
 *
 * @param src the SDL_Surface structure to be copied from.
 * @param srcrect the SDL_Rect structure representing the rectangle to be
 *                copied, or NULL to copy the entire surface.
 * @param dst the SDL_Surface structure that is the blit target.
 * @param dstrect the SDL_Rect structure representing the target rectangle in
 *                the destination surface, or NULL to fill the entire
 *                destination surface.
 * @param scaleMode the SDL_ScaleMode to be used.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety Only one thread should be using the `src` and `dst` surfaces
 *               at any given time.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_BlitSurface
 *
 * @from SDL_surface.h:1249 bool SDL_BlitSurfaceScaled(SDL_Surface *src, const SDL_Rect *srcrect, SDL_Surface *dst, const SDL_Rect *dstrect, SDL_ScaleMode scaleMode);
 */
export const blitSurfaceScaled = lib.symbols.SDL_BlitSurfaceScaled;

/**
 * Perform low-level surface scaled blitting only.
 *
 * This is a semi-private function and it performs low-level surface blitting,
 * assuming the input rectangles have already been clipped.
 *
 * @param src the SDL_Surface structure to be copied from.
 * @param srcrect the SDL_Rect structure representing the rectangle to be
 *                copied, may not be NULL.
 * @param dst the SDL_Surface structure that is the blit target.
 * @param dstrect the SDL_Rect structure representing the target rectangle in
 *                the destination surface, may not be NULL.
 * @param scaleMode the SDL_ScaleMode to be used.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety Only one thread should be using the `src` and `dst` surfaces
 *               at any given time.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_BlitSurfaceScaled
 *
 * @from SDL_surface.h:1274 bool SDL_BlitSurfaceUncheckedScaled(SDL_Surface *src, const SDL_Rect *srcrect, SDL_Surface *dst, const SDL_Rect *dstrect, SDL_ScaleMode scaleMode);
 */
export const blitSurfaceUncheckedScaled = lib.symbols.SDL_BlitSurfaceUncheckedScaled;

/**
 * Perform a stretched pixel copy from one surface to another.
 *
 * @param src the SDL_Surface structure to be copied from.
 * @param srcrect the SDL_Rect structure representing the rectangle to be
 *                copied, may not be NULL.
 * @param dst the SDL_Surface structure that is the blit target.
 * @param dstrect the SDL_Rect structure representing the target rectangle in
 *                the destination surface, may not be NULL.
 * @param scaleMode the SDL_ScaleMode to be used.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety Only one thread should be using the `src` and `dst` surfaces
 *               at any given time.
 *
 * @since This function is available since SDL 3.4.0.
 *
 * @sa SDL_BlitSurfaceScaled
 *
 * @from SDL_surface.h:1296 bool SDL_StretchSurface(SDL_Surface *src, const SDL_Rect *srcrect, SDL_Surface *dst, const SDL_Rect *dstrect, SDL_ScaleMode scaleMode);
 */
export const stretchSurface = lib.symbols.SDL_StretchSurface;

/**
 * Perform a tiled blit to a destination surface, which may be of a different
 * format.
 *
 * The pixels in `srcrect` will be repeated as many times as needed to
 * completely fill `dstrect`.
 *
 * @param src the SDL_Surface structure to be copied from.
 * @param srcrect the SDL_Rect structure representing the rectangle to be
 *                copied, or NULL to copy the entire surface.
 * @param dst the SDL_Surface structure that is the blit target.
 * @param dstrect the SDL_Rect structure representing the target rectangle in
 *                the destination surface, or NULL to fill the entire surface.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety Only one thread should be using the `src` and `dst` surfaces
 *               at any given time.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_BlitSurface
 *
 * @from SDL_surface.h:1321 bool SDL_BlitSurfaceTiled(SDL_Surface *src, const SDL_Rect *srcrect, SDL_Surface *dst, const SDL_Rect *dstrect);
 */
export const blitSurfaceTiled = lib.symbols.SDL_BlitSurfaceTiled;

/**
 * Perform a scaled and tiled blit to a destination surface, which may be of a
 * different format.
 *
 * The pixels in `srcrect` will be scaled and repeated as many times as needed
 * to completely fill `dstrect`.
 *
 * @param src the SDL_Surface structure to be copied from.
 * @param srcrect the SDL_Rect structure representing the rectangle to be
 *                copied, or NULL to copy the entire surface.
 * @param scale the scale used to transform srcrect into the destination
 *              rectangle, e.g. a 32x32 texture with a scale of 2 would fill
 *              64x64 tiles.
 * @param scaleMode scale algorithm to be used.
 * @param dst the SDL_Surface structure that is the blit target.
 * @param dstrect the SDL_Rect structure representing the target rectangle in
 *                the destination surface, or NULL to fill the entire surface.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety Only one thread should be using the `src` and `dst` surfaces
 *               at any given time.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_BlitSurface
 *
 * @from SDL_surface.h:1350 bool SDL_BlitSurfaceTiledWithScale(SDL_Surface *src, const SDL_Rect *srcrect, float scale, SDL_ScaleMode scaleMode, SDL_Surface *dst, const SDL_Rect *dstrect);
 */
export const blitSurfaceTiledWithScale = lib.symbols.SDL_BlitSurfaceTiledWithScale;

/**
 * Perform a scaled blit using the 9-grid algorithm to a destination surface,
 * which may be of a different format.
 *
 * The pixels in the source surface are split into a 3x3 grid, using the
 * different corner sizes for each corner, and the sides and center making up
 * the remaining pixels. The corners are then scaled using `scale` and fit
 * into the corners of the destination rectangle. The sides and center are
 * then stretched into place to cover the remaining destination rectangle.
 *
 * @param src the SDL_Surface structure to be copied from.
 * @param srcrect the SDL_Rect structure representing the rectangle to be used
 *                for the 9-grid, or NULL to use the entire surface.
 * @param left_width the width, in pixels, of the left corners in `srcrect`.
 * @param right_width the width, in pixels, of the right corners in `srcrect`.
 * @param top_height the height, in pixels, of the top corners in `srcrect`.
 * @param bottom_height the height, in pixels, of the bottom corners in
 *                      `srcrect`.
 * @param scale the scale used to transform the corner of `srcrect` into the
 *              corner of `dstrect`, or 0.0f for an unscaled blit.
 * @param scaleMode scale algorithm to be used.
 * @param dst the SDL_Surface structure that is the blit target.
 * @param dstrect the SDL_Rect structure representing the target rectangle in
 *                the destination surface, or NULL to fill the entire surface.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety Only one thread should be using the `src` and `dst` surfaces
 *               at any given time.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_BlitSurface
 *
 * @from SDL_surface.h:1386 bool SDL_BlitSurface9Grid(SDL_Surface *src, const SDL_Rect *srcrect, int left_width, int right_width, int top_height, int bottom_height, float scale, SDL_ScaleMode scaleMode, SDL_Surface *dst, const SDL_Rect *dstrect);
 */
export const blitSurface9Grid = lib.symbols.SDL_BlitSurface9Grid;

/**
 * Map an RGB triple to an opaque pixel value for a surface.
 *
 * This function maps the RGB color value to the specified pixel format and
 * returns the pixel value best approximating the given RGB color value for
 * the given pixel format.
 *
 * If the surface has a palette, the index of the closest matching color in
 * the palette will be returned.
 *
 * If the surface pixel format has an alpha component it will be returned as
 * all 1 bits (fully opaque).
 *
 * If the pixel format bpp (color depth) is less than 32-bpp then the unused
 * upper bits of the return value can safely be ignored (e.g., with a 16-bpp
 * format the return value can be assigned to a Uint16, and similarly a Uint8
 * for an 8-bpp format).
 *
 * @param surface the surface to use for the pixel format and palette.
 * @param r the red component of the pixel in the range 0-255.
 * @param g the green component of the pixel in the range 0-255.
 * @param b the blue component of the pixel in the range 0-255.
 * @returns a pixel value.
 *
 * @threadsafety It is safe to call this function from any thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_MapSurfaceRGBA
 *
 * @from SDL_surface.h:1418 Uint32 SDL_MapSurfaceRGB(SDL_Surface *surface, Uint8 r, Uint8 g, Uint8 b);
 */
export const mapSurfaceRgb = lib.symbols.SDL_MapSurfaceRGB;

/**
 * Map an RGBA quadruple to a pixel value for a surface.
 *
 * This function maps the RGBA color value to the specified pixel format and
 * returns the pixel value best approximating the given RGBA color value for
 * the given pixel format.
 *
 * If the surface pixel format has no alpha component the alpha value will be
 * ignored (as it will be in formats with a palette).
 *
 * If the surface has a palette, the index of the closest matching color in
 * the palette will be returned.
 *
 * If the pixel format bpp (color depth) is less than 32-bpp then the unused
 * upper bits of the return value can safely be ignored (e.g., with a 16-bpp
 * format the return value can be assigned to a Uint16, and similarly a Uint8
 * for an 8-bpp format).
 *
 * @param surface the surface to use for the pixel format and palette.
 * @param r the red component of the pixel in the range 0-255.
 * @param g the green component of the pixel in the range 0-255.
 * @param b the blue component of the pixel in the range 0-255.
 * @param a the alpha component of the pixel in the range 0-255.
 * @returns a pixel value.
 *
 * @threadsafety It is safe to call this function from any thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_MapSurfaceRGB
 *
 * @from SDL_surface.h:1451 Uint32 SDL_MapSurfaceRGBA(SDL_Surface *surface, Uint8 r, Uint8 g, Uint8 b, Uint8 a);
 */
export const mapSurfaceRgba = lib.symbols.SDL_MapSurfaceRGBA;

/**
 * Retrieves a single pixel from a surface.
 *
 * This function prioritizes correctness over speed: it is suitable for unit
 * tests, but is not intended for use in a game engine.
 *
 * Like SDL_GetRGBA, this uses the entire 0..255 range when converting color
 * components from pixel formats with less than 8 bits per RGB component.
 *
 * @param surface the surface to read.
 * @param x the horizontal coordinate, 0 <= x < width.
 * @param y the vertical coordinate, 0 <= y < height.
 * @param r a pointer filled in with the red channel, 0-255, or NULL to ignore
 *          this channel.
 * @param g a pointer filled in with the green channel, 0-255, or NULL to
 *          ignore this channel.
 * @param b a pointer filled in with the blue channel, 0-255, or NULL to
 *          ignore this channel.
 * @param a a pointer filled in with the alpha channel, 0-255, or NULL to
 *          ignore this channel.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function is not thread safe.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @from SDL_surface.h:1480 bool SDL_ReadSurfacePixel(SDL_Surface *surface, int x, int y, Uint8 *r, Uint8 *g, Uint8 *b, Uint8 *a);
 */
export const readSurfacePixel = lib.symbols.SDL_ReadSurfacePixel;

/**
 * Retrieves a single pixel from a surface.
 *
 * This function prioritizes correctness over speed: it is suitable for unit
 * tests, but is not intended for use in a game engine.
 *
 * @param surface the surface to read.
 * @param x the horizontal coordinate, 0 <= x < width.
 * @param y the vertical coordinate, 0 <= y < height.
 * @param r a pointer filled in with the red channel, normally in the range
 *          0-1, or NULL to ignore this channel.
 * @param g a pointer filled in with the green channel, normally in the range
 *          0-1, or NULL to ignore this channel.
 * @param b a pointer filled in with the blue channel, normally in the range
 *          0-1, or NULL to ignore this channel.
 * @param a a pointer filled in with the alpha channel, normally in the range
 *          0-1, or NULL to ignore this channel.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function is not thread safe.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @from SDL_surface.h:1506 bool SDL_ReadSurfacePixelFloat(SDL_Surface *surface, int x, int y, float *r, float *g, float *b, float *a);
 */
export const readSurfacePixelFloat = lib.symbols.SDL_ReadSurfacePixelFloat;

/**
 * Writes a single pixel to a surface.
 *
 * This function prioritizes correctness over speed: it is suitable for unit
 * tests, but is not intended for use in a game engine.
 *
 * Like SDL_MapRGBA, this uses the entire 0..255 range when converting color
 * components from pixel formats with less than 8 bits per RGB component.
 *
 * @param surface the surface to write.
 * @param x the horizontal coordinate, 0 <= x < width.
 * @param y the vertical coordinate, 0 <= y < height.
 * @param r the red channel value, 0-255.
 * @param g the green channel value, 0-255.
 * @param b the blue channel value, 0-255.
 * @param a the alpha channel value, 0-255.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function is not thread safe.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @from SDL_surface.h:1531 bool SDL_WriteSurfacePixel(SDL_Surface *surface, int x, int y, Uint8 r, Uint8 g, Uint8 b, Uint8 a);
 */
export const writeSurfacePixel = lib.symbols.SDL_WriteSurfacePixel;

/**
 * Writes a single pixel to a surface.
 *
 * This function prioritizes correctness over speed: it is suitable for unit
 * tests, but is not intended for use in a game engine.
 *
 * @param surface the surface to write.
 * @param x the horizontal coordinate, 0 <= x < width.
 * @param y the vertical coordinate, 0 <= y < height.
 * @param r the red channel value, normally in the range 0-1.
 * @param g the green channel value, normally in the range 0-1.
 * @param b the blue channel value, normally in the range 0-1.
 * @param a the alpha channel value, normally in the range 0-1.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function is not thread safe.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @from SDL_surface.h:1553 bool SDL_WriteSurfacePixelFloat(SDL_Surface *surface, int x, int y, float r, float g, float b, float a);
 */
export const writeSurfacePixelFloat = lib.symbols.SDL_WriteSurfacePixelFloat;

