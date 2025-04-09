/**
 * # CategoryPixels
 *
 * SDL offers facilities for pixel management.
 *
 * Largely these facilities deal with pixel _format_: what does this set of
 * bits represent?
 *
 * If you mostly want to think of a pixel as some combination of red, green,
 * blue, and maybe alpha intensities, this is all pretty straightforward, and
 * in many cases, is enough information to build a perfectly fine game.
 *
 * However, the actual definition of a pixel is more complex than that:
 *
 * Pixels are a representation of a color in a particular color space.
 *
 * The first characteristic of a color space is the color type. SDL
 * understands two different color types, RGB and YCbCr, or in SDL also
 * referred to as YUV.
 *
 * RGB colors consist of red, green, and blue channels of color that are added
 * together to represent the colors we see on the screen.
 *
 * https://en.wikipedia.org/wiki/RGB_color_model
 *
 * YCbCr colors represent colors as a Y luma brightness component and red and
 * blue chroma color offsets. This color representation takes advantage of the
 * fact that the human eye is more sensitive to brightness than the color in
 * an image. The Cb and Cr components are often compressed and have lower
 * resolution than the luma component.
 *
 * https://en.wikipedia.org/wiki/YCbCr
 *
 * When the color information in YCbCr is compressed, the Y pixels are left at
 * full resolution and each Cr and Cb pixel represents an average of the color
 * information in a block of Y pixels. The chroma location determines where in
 * that block of pixels the color information is coming from.
 *
 * The color range defines how much of the pixel to use when converting a
 * pixel into a color on the display. When the full color range is used, the
 * entire numeric range of the pixel bits is significant. When narrow color
 * range is used, for historical reasons, the pixel uses only a portion of the
 * numeric range to represent colors.
 *
 * The color primaries and white point are a definition of the colors in the
 * color space relative to the standard XYZ color space.
 *
 * https://en.wikipedia.org/wiki/CIE_1931_color_space
 *
 * The transfer characteristic, or opto-electrical transfer function (OETF),
 * is the way a color is converted from mathematically linear space into a
 * non-linear output signals.
 *
 * https://en.wikipedia.org/wiki/Rec._709#Transfer_characteristics
 *
 * The matrix coefficients are used to convert between YCbCr and RGB colors.
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

import * as SDL_pixels_enums from "../enums/SDL_pixels.ts";
import { lib } from "./lib.ts";

/**
 * Pixel type.
 *
 * @since This enum is available since SDL 3.2.0.
 *
 * @from SDL_pixels.h:133 SDL_PIXELTYPE_
 */
export const PIXELTYPE = SDL_pixels_enums.SDL_PixelType;

/**
 * Bitmap pixel order, high bit -> low bit.
 *
 * @since This enum is available since SDL 3.2.0.
 *
 * @from SDL_pixels.h:156 SDL_BITMAPORDER_
 */
export const BITMAPORDER = SDL_pixels_enums.SDL_BitmapOrder;

/**
 * Packed component order, high bit -> low bit.
 *
 * @since This enum is available since SDL 3.2.0.
 *
 * @from SDL_pixels.h:168 SDL_PACKEDORDER_
 */
export const PACKEDORDER = SDL_pixels_enums.SDL_PackedOrder;

/**
 * Array component order, low byte -> high byte.
 *
 * @since This enum is available since SDL 3.2.0.
 *
 * @from SDL_pixels.h:186 SDL_ARRAYORDER_
 */
export const ARRAYORDER = SDL_pixels_enums.SDL_ArrayOrder;

/**
 * Packed component layout.
 *
 * @since This enum is available since SDL 3.2.0.
 *
 * @from SDL_pixels.h:202 SDL_PACKEDLAYOUT_
 */
export const PACKEDLAYOUT = SDL_pixels_enums.SDL_PackedLayout;

/**
 * Pixel format.
 *
 * SDL's pixel formats have the following naming convention:
 *
 * - Names with a list of components and a single bit count, such as RGB24 and
 *   ABGR32, define a platform-independent encoding into bytes in the order
 *   specified. For example, in RGB24 data, each pixel is encoded in 3 bytes
 *   (red, green, blue) in that order, and in ABGR32 data, each pixel is
 *   encoded in 4 bytes alpha, blue, green, red) in that order. Use these
 *   names if the property of a format that is important to you is the order
 *   of the bytes in memory or on disk.
 * - Names with a bit count per component, such as ARGB8888 and XRGB1555, are
 *   "packed" into an appropriately-sized integer in the platform's native
 *   endianness. For example, ARGB8888 is a sequence of 32-bit integers; in
 *   each integer, the most significant bits are alpha, and the least
 *   significant bits are blue. On a little-endian CPU such as x86, the least
 *   significant bits of each integer are arranged first in memory, but on a
 *   big-endian CPU such as s390x, the most significant bits are arranged
 *   first. Use these names if the property of a format that is important to
 *   you is the meaning of each bit position within a native-endianness
 *   integer.
 * - In indexed formats such as INDEX4LSB, each pixel is represented by
 *   encoding an index into the palette into the indicated number of bits,
 *   with multiple pixels packed into each byte if appropriate. In LSB
 *   formats, the first (leftmost) pixel is stored in the least-significant
 *   bits of the byte; in MSB formats, it's stored in the most-significant
 *   bits. INDEX8 does not need LSB/MSB variants, because each pixel exactly
 *   fills one byte.
 *
 * The 32-bit byte-array encodings such as RGBA32 are aliases for the
 * appropriate 8888 encoding for the current platform. For example, RGBA32 is
 * an alias for ABGR8888 on little-endian CPUs like x86, or an alias for
 * RGBA8888 on big-endian CPUs.
 *
 * @since This enum is available since SDL 3.2.0.
 *
 * @from SDL_pixels.h:547 SDL_PIXELFORMAT_
 */
export const PIXELFORMAT = SDL_pixels_enums.SDL_PixelFormat;

/**
 * Colorspace color type.
 *
 * @since This enum is available since SDL 3.2.0.
 *
 * @from SDL_pixels.h:708 SDL_COLOR_TYPE_
 */
export const COLOR_TYPE = SDL_pixels_enums.SDL_ColorType;

/**
 * Colorspace color range, as described by
 * https://www.itu.int/rec/R-REC-BT.2100-2-201807-I/en
 *
 * @since This enum is available since SDL 3.2.0.
 *
 * @from SDL_pixels.h:721 SDL_COLOR_RANGE_
 */
export const COLOR_RANGE = SDL_pixels_enums.SDL_ColorRange;

/**
 * Colorspace color primaries, as described by
 * https://www.itu.int/rec/T-REC-H.273-201612-S/en
 *
 * @since This enum is available since SDL 3.2.0.
 *
 * @from SDL_pixels.h:734 SDL_COLOR_PRIMARIES_
 */
export const COLOR_PRIMARIES = SDL_pixels_enums.SDL_ColorPrimaries;

/**
 * Colorspace transfer characteristics.
 *
 * These are as described by https://www.itu.int/rec/T-REC-H.273-201612-S/en
 *
 * @since This enum is available since SDL 3.2.0.
 *
 * @from SDL_pixels.h:759 SDL_TRANSFER_CHARACTERISTICS_
 */
export const TRANSFER_CHARACTERISTICS = SDL_pixels_enums.SDL_TransferCharacteristics;

/**
 * Colorspace matrix coefficients.
 *
 * These are as described by https://www.itu.int/rec/T-REC-H.273-201612-S/en
 *
 * @since This enum is available since SDL 3.2.0.
 *
 * @from SDL_pixels.h:789 SDL_MATRIX_COEFFICIENTS_
 */
export const MATRIX_COEFFICIENTS = SDL_pixels_enums.SDL_MatrixCoefficients;

/**
 * Colorspace chroma sample location.
 *
 * @since This enum is available since SDL 3.2.0.
 *
 * @from SDL_pixels.h:813 SDL_CHROMA_LOCATION_
 */
export const CHROMA_LOCATION = SDL_pixels_enums.SDL_ChromaLocation;

/**
 * Colorspace definitions.
 *
 * Since similar colorspaces may vary in their details (matrix, transfer
 * function, etc.), this is not an exhaustive list, but rather a
 * representative sample of the kinds of colorspaces supported in SDL.
 *
 * @since This enum is available since SDL 3.2.0.
 *
 * @sa SDL_ColorPrimaries
 * @sa SDL_ColorRange
 * @sa SDL_ColorType
 * @sa SDL_MatrixCoefficients
 * @sa SDL_TransferCharacteristics
 *
 * @from SDL_pixels.h:1010 SDL_COLORSPACE_
 */
export const COLORSPACE = SDL_pixels_enums.SDL_Colorspace;



/**
 * Get the human readable name of a pixel format.
 *
 * @param format the pixel format to query.
 * @returns the human readable name of the specified pixel format or
 *          "SDL_PIXELFORMAT_UNKNOWN" if the format isn't recognized.
 *
 * @threadsafety It is safe to call this function from any thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @from SDL_pixels.h:1184 const char * SDL_GetPixelFormatName(SDL_PixelFormat format);
 */
export const getPixelFormatName = lib.symbols.SDL_GetPixelFormatName;

/**
 * Convert one of the enumerated pixel formats to a bpp value and RGBA masks.
 *
 * @param format one of the SDL_PixelFormat values.
 * @param bpp a bits per pixel value; usually 15, 16, or 32.
 * @param Rmask a pointer filled in with the red mask for the format.
 * @param Gmask a pointer filled in with the green mask for the format.
 * @param Bmask a pointer filled in with the blue mask for the format.
 * @param Amask a pointer filled in with the alpha mask for the format.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety It is safe to call this function from any thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_GetPixelFormatForMasks
 *
 * @from SDL_pixels.h:1204 bool SDL_GetMasksForPixelFormat(SDL_PixelFormat format, int *bpp, Uint32 *Rmask, Uint32 *Gmask, Uint32 *Bmask, Uint32 *Amask);
 */
export const getMasksForPixelFormat = lib.symbols.SDL_GetMasksForPixelFormat;

/**
 * Convert a bpp value and RGBA masks to an enumerated pixel format.
 *
 * This will return `SDL_PIXELFORMAT_UNKNOWN` if the conversion wasn't
 * possible.
 *
 * @param bpp a bits per pixel value; usually 15, 16, or 32.
 * @param Rmask the red mask for the format.
 * @param Gmask the green mask for the format.
 * @param Bmask the blue mask for the format.
 * @param Amask the alpha mask for the format.
 * @returns the SDL_PixelFormat value corresponding to the format masks, or
 *          SDL_PIXELFORMAT_UNKNOWN if there isn't a match.
 *
 * @threadsafety It is safe to call this function from any thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_GetMasksForPixelFormat
 *
 * @from SDL_pixels.h:1226 SDL_PixelFormat SDL_GetPixelFormatForMasks(int bpp, Uint32 Rmask, Uint32 Gmask, Uint32 Bmask, Uint32 Amask);
 */
export const getPixelFormatForMasks = lib.symbols.SDL_GetPixelFormatForMasks;

/**
 * Create an SDL_PixelFormatDetails structure corresponding to a pixel format.
 *
 * Returned structure may come from a shared global cache (i.e. not newly
 * allocated), and hence should not be modified, especially the palette. Weird
 * errors such as `Blit combination not supported` may occur.
 *
 * @param format one of the SDL_PixelFormat values.
 * @returns a pointer to a SDL_PixelFormatDetails structure or NULL on
 *          failure; call SDL_GetError() for more information.
 *
 * @threadsafety It is safe to call this function from any thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @from SDL_pixels.h:1243 const SDL_PixelFormatDetails * SDL_GetPixelFormatDetails(SDL_PixelFormat format);
 */
export const getPixelFormatDetails = lib.symbols.SDL_GetPixelFormatDetails;

/**
 * Create a palette structure with the specified number of color entries.
 *
 * The palette entries are initialized to white.
 *
 * @param ncolors represents the number of color entries in the color palette.
 * @returns a new SDL_Palette structure on success or NULL on failure (e.g. if
 *          there wasn't enough memory); call SDL_GetError() for more
 *          information.
 *
 * @threadsafety It is safe to call this function from any thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_DestroyPalette
 * @sa SDL_SetPaletteColors
 * @sa SDL_SetSurfacePalette
 *
 * @from SDL_pixels.h:1263 SDL_Palette * SDL_CreatePalette(int ncolors);
 */
export const createPalette = lib.symbols.SDL_CreatePalette;

/**
 * Set a range of colors in a palette.
 *
 * @param palette the SDL_Palette structure to modify.
 * @param colors an array of SDL_Color structures to copy into the palette.
 * @param firstcolor the index of the first palette entry to modify.
 * @param ncolors the number of entries to modify.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety It is safe to call this function from any thread, as long as
 *               the palette is not modified or destroyed in another thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @from SDL_pixels.h:1280 bool SDL_SetPaletteColors(SDL_Palette *palette, const SDL_Color *colors, int firstcolor, int ncolors);
 */
export const setPaletteColors = lib.symbols.SDL_SetPaletteColors;

/**
 * Free a palette created with SDL_CreatePalette().
 *
 * @param palette the SDL_Palette structure to be freed.
 *
 * @threadsafety It is safe to call this function from any thread, as long as
 *               the palette is not modified or destroyed in another thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_CreatePalette
 *
 * @from SDL_pixels.h:1294 void SDL_DestroyPalette(SDL_Palette *palette);
 */
export const destroyPalette = lib.symbols.SDL_DestroyPalette;

/**
 * Map an RGB triple to an opaque pixel value for a given pixel format.
 *
 * This function maps the RGB color value to the specified pixel format and
 * returns the pixel value best approximating the given RGB color value for
 * the given pixel format.
 *
 * If the format has a palette (8-bit) the index of the closest matching color
 * in the palette will be returned.
 *
 * If the specified pixel format has an alpha component it will be returned as
 * all 1 bits (fully opaque).
 *
 * If the pixel format bpp (color depth) is less than 32-bpp then the unused
 * upper bits of the return value can safely be ignored (e.g., with a 16-bpp
 * format the return value can be assigned to a Uint16, and similarly a Uint8
 * for an 8-bpp format).
 *
 * @param format a pointer to SDL_PixelFormatDetails describing the pixel
 *               format.
 * @param palette an optional palette for indexed formats, may be NULL.
 * @param r the red component of the pixel in the range 0-255.
 * @param g the green component of the pixel in the range 0-255.
 * @param b the blue component of the pixel in the range 0-255.
 * @returns a pixel value.
 *
 * @threadsafety It is safe to call this function from any thread, as long as
 *               the palette is not modified.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_GetPixelFormatDetails
 * @sa SDL_GetRGB
 * @sa SDL_MapRGBA
 * @sa SDL_MapSurfaceRGB
 *
 * @from SDL_pixels.h:1332 Uint32 SDL_MapRGB(const SDL_PixelFormatDetails *format, const SDL_Palette *palette, Uint8 r, Uint8 g, Uint8 b);
 */
export const mapRgb = lib.symbols.SDL_MapRGB;

/**
 * Map an RGBA quadruple to a pixel value for a given pixel format.
 *
 * This function maps the RGBA color value to the specified pixel format and
 * returns the pixel value best approximating the given RGBA color value for
 * the given pixel format.
 *
 * If the specified pixel format has no alpha component the alpha value will
 * be ignored (as it will be in formats with a palette).
 *
 * If the format has a palette (8-bit) the index of the closest matching color
 * in the palette will be returned.
 *
 * If the pixel format bpp (color depth) is less than 32-bpp then the unused
 * upper bits of the return value can safely be ignored (e.g., with a 16-bpp
 * format the return value can be assigned to a Uint16, and similarly a Uint8
 * for an 8-bpp format).
 *
 * @param format a pointer to SDL_PixelFormatDetails describing the pixel
 *               format.
 * @param palette an optional palette for indexed formats, may be NULL.
 * @param r the red component of the pixel in the range 0-255.
 * @param g the green component of the pixel in the range 0-255.
 * @param b the blue component of the pixel in the range 0-255.
 * @param a the alpha component of the pixel in the range 0-255.
 * @returns a pixel value.
 *
 * @threadsafety It is safe to call this function from any thread, as long as
 *               the palette is not modified.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_GetPixelFormatDetails
 * @sa SDL_GetRGBA
 * @sa SDL_MapRGB
 * @sa SDL_MapSurfaceRGBA
 *
 * @from SDL_pixels.h:1371 Uint32 SDL_MapRGBA(const SDL_PixelFormatDetails *format, const SDL_Palette *palette, Uint8 r, Uint8 g, Uint8 b, Uint8 a);
 */
export const mapRgba = lib.symbols.SDL_MapRGBA;

/**
 * Get RGB values from a pixel in the specified format.
 *
 * This function uses the entire 8-bit [0..255] range when converting color
 * components from pixel formats with less than 8-bits per RGB component
 * (e.g., a completely white pixel in 16-bit RGB565 format would return [0xff,
 * 0xff, 0xff] not [0xf8, 0xfc, 0xf8]).
 *
 * @param pixel a pixel value.
 * @param format a pointer to SDL_PixelFormatDetails describing the pixel
 *               format.
 * @param palette an optional palette for indexed formats, may be NULL.
 * @param r a pointer filled in with the red component, may be NULL.
 * @param g a pointer filled in with the green component, may be NULL.
 * @param b a pointer filled in with the blue component, may be NULL.
 *
 * @threadsafety It is safe to call this function from any thread, as long as
 *               the palette is not modified.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_GetPixelFormatDetails
 * @sa SDL_GetRGBA
 * @sa SDL_MapRGB
 * @sa SDL_MapRGBA
 *
 * @from SDL_pixels.h:1399 void SDL_GetRGB(Uint32 pixel, const SDL_PixelFormatDetails *format, const SDL_Palette *palette, Uint8 *r, Uint8 *g, Uint8 *b);
 */
export const getRgb = lib.symbols.SDL_GetRGB;

/**
 * Get RGBA values from a pixel in the specified format.
 *
 * This function uses the entire 8-bit [0..255] range when converting color
 * components from pixel formats with less than 8-bits per RGB component
 * (e.g., a completely white pixel in 16-bit RGB565 format would return [0xff,
 * 0xff, 0xff] not [0xf8, 0xfc, 0xf8]).
 *
 * If the surface has no alpha component, the alpha will be returned as 0xff
 * (100% opaque).
 *
 * @param pixel a pixel value.
 * @param format a pointer to SDL_PixelFormatDetails describing the pixel
 *               format.
 * @param palette an optional palette for indexed formats, may be NULL.
 * @param r a pointer filled in with the red component, may be NULL.
 * @param g a pointer filled in with the green component, may be NULL.
 * @param b a pointer filled in with the blue component, may be NULL.
 * @param a a pointer filled in with the alpha component, may be NULL.
 *
 * @threadsafety It is safe to call this function from any thread, as long as
 *               the palette is not modified.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_GetPixelFormatDetails
 * @sa SDL_GetRGB
 * @sa SDL_MapRGB
 * @sa SDL_MapRGBA
 *
 * @from SDL_pixels.h:1431 void SDL_GetRGBA(Uint32 pixel, const SDL_PixelFormatDetails *format, const SDL_Palette *palette, Uint8 *r, Uint8 *g, Uint8 *b, Uint8 *a);
 */
export const getRgba = lib.symbols.SDL_GetRGBA;

