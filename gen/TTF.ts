/**
 * SDL3_ttf library bindings.
 *
 * This module exports functions and enums to the `TTF` object from the SDL3_ttf library
 *
 * @module
 */


import { libSdlPath } from './_utils.ts';

import * as SDL_textengine_enums from "./enums/SDL_textengine.ts";
import * as SDL_ttf_enums from "./enums/SDL_ttf.ts";

import { symbols } from "./funcs/SDL_ttf.ts";
export { symbols };

export const lib = Deno.dlopen(libSdlPath("SDL3_ttf"), symbols);

export const TTF = {
  lib,



/*--- SDL_textengine ---*/

/**
 * A font atlas draw command.
 *
 * @since This enum is available since SDL_ttf 3.0.0.
 *
 * @from SDL_textengine.h:45 TTF_DRAW_COMMAND_
 */
  DRAW_COMMAND: SDL_textengine_enums.TTF_DrawCommand,





/*--- SDL_ttf ---*/

/**
 * @from SDL_ttf:46 SDL_TTF_
 */
  SDL_TTF: SDL_ttf_enums.TTF,

/**
 * @from SDL_ttf:226 TTF_PROP_FONT_CREATE_
 */
  PROP_FONT_CREATE: SDL_ttf_enums.PROP_FONT_CREATE,

/**
 * @from SDL_ttf:281 TTF_PROP_FONT_OUTLINE_
 */
  PROP_FONT_OUTLINE: SDL_ttf_enums.PROP_FONT_OUTLINE,

/**
 * @from SDL_ttf:454 TTF_STYLE_
 */
  STYLE: SDL_ttf_enums.STYLE,

/**
 * @from SDL_ttf:1809 TTF_PROP_RENDERER_TEXT_ENGINE_
 */
  PROP_RENDERER_TEXT_ENGINE: SDL_ttf_enums.PROP_RENDERER_TEXT_ENGINE,

/**
 * @from SDL_ttf:1900 TTF_PROP_GPU_TEXT_ENGINE_
 */
  PROP_GPU_TEXT_ENGINE: SDL_ttf_enums.PROP_GPU_TEXT_ENGINE,

/**
 * @from SDL_ttf:2543 TTF_SUBSTRING_
 */
  SUBSTRING: SDL_ttf_enums.SUBSTRING,

/**
 * Hinting flags for TTF (TrueType Fonts)
 *
 * This enum specifies the level of hinting to be applied to the font
 * rendering. The hinting level determines how much the font's outlines are
 * adjusted for better alignment on the pixel grid.
 *
 * @since This enum is available since SDL_ttf 3.0.0.
 *
 * @sa TTF_SetFontHinting
 * @sa TTF_GetFontHinting
 *
 * @from SDL_ttf.h:558 TTF_HINTING_
 */
  HINTING: SDL_ttf_enums.TTF_HintingFlags,

/**
 * The horizontal alignment used when rendering wrapped text.
 *
 * @since This enum is available since SDL_ttf 3.0.0.
 *
 * @from SDL_ttf.h:672 TTF_HORIZONTAL_ALIGN_
 */
  HORIZONTAL_ALIGN: SDL_ttf_enums.TTF_HorizontalAlignment,

/**
 * Direction flags
 *
 * The values here are chosen to match
 * [hb_direction_t](https://harfbuzz.github.io/harfbuzz-hb-common.html#hb-direction-t)
 * .
 *
 * @since This enum is available since SDL_ttf 3.0.0.
 *
 * @sa TTF_SetFontDirection
 *
 * @from SDL_ttf.h:901 TTF_DIRECTION_
 */
  DIRECTION: SDL_ttf_enums.TTF_Direction,

/**
 * The type of data in a glyph image
 *
 * @since This enum is available since SDL_ttf 3.0.0.
 *
 * @from SDL_ttf.h:1073 TTF_IMAGE_
 */
  IMAGE: SDL_ttf_enums.TTF_ImageType,

/**
 * The winding order of the vertices returned by TTF_GetGPUTextDrawData
 *
 * @since This enum is available since SDL_ttf 3.0.0.
 *
 * @from SDL_ttf.h:1975 TTF_GPU_TEXTENGINE_WINDING_
 */
  GPU_TEXTENGINE_WINDING: SDL_ttf_enums.TTF_GPUTextEngineWinding,



/**
 * This function gets the version of the dynamically linked SDL_ttf library.
 *
 * @returns SDL_ttf version.
 *
 * @threadsafety It is safe to call this function from any thread.
 *
 * @since This function is available since SDL_ttf 3.0.0.
 *
 * @from SDL_ttf.h:73 int TTF_Version(void);
 */
  version: lib.symbols.TTF_Version,

/**
 * Query the version of the FreeType library in use.
 *
 * TTF_Init() should be called before calling this function.
 *
 * @param major to be filled in with the major version number. Can be NULL.
 * @param minor to be filled in with the minor version number. Can be NULL.
 * @param patch to be filled in with the param version number. Can be NULL.
 *
 * @threadsafety It is safe to call this function from any thread.
 *
 * @since This function is available since SDL_ttf 3.0.0.
 *
 * @sa TTF_Init
 *
 * @from SDL_ttf.h:90 void TTF_GetFreeTypeVersion(int *major, int *minor, int *patch);
 */
  getFreeTypeVersion: lib.symbols.TTF_GetFreeTypeVersion,

/**
 * Query the version of the HarfBuzz library in use.
 *
 * If HarfBuzz is not available, the version reported is 0.0.0.
 *
 * @param major to be filled in with the major version number. Can be NULL.
 * @param minor to be filled in with the minor version number. Can be NULL.
 * @param patch to be filled in with the param version number. Can be NULL.
 *
 * @threadsafety It is safe to call this function from any thread.
 *
 * @since This function is available since SDL_ttf 3.0.0.
 *
 * @from SDL_ttf.h:105 void TTF_GetHarfBuzzVersion(int *major, int *minor, int *patch);
 */
  getHarfBuzzVersion: lib.symbols.TTF_GetHarfBuzzVersion,

/**
 * Initialize SDL_ttf.
 *
 * You must successfully call this function before it is safe to call any
 * other function in this library.
 *
 * It is safe to call this more than once, and each successful TTF_Init() call
 * should be paired with a matching TTF_Quit() call.
 *
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @since This function is available since SDL_ttf 3.0.0.
 *
 * @sa TTF_Quit
 *
 * @from SDL_ttf.h:130 bool TTF_Init(void);
 */
  init: lib.symbols.TTF_Init,

/**
 * Create a font from a file, using a specified point size.
 *
 * Some .fon fonts will have several sizes embedded in the file, so the point
 * size becomes the index of choosing which size. If the value is too high,
 * the last indexed size will be the default.
 *
 * When done with the returned TTF_Font, use TTF_CloseFont() to dispose of it.
 *
 * @param file path to font file.
 * @param ptsize point size to use for the newly-opened font.
 * @returns a valid TTF_Font, or NULL on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety It is safe to call this function from any thread.
 *
 * @since This function is available since SDL_ttf 3.0.0.
 *
 * @sa TTF_CloseFont
 *
 * @from SDL_ttf.h:152 TTF_Font * TTF_OpenFont(const char *file, float ptsize);
 */
  openFont: lib.symbols.TTF_OpenFont,

/**
 * Create a font from an SDL_IOStream, using a specified point size.
 *
 * Some .fon fonts will have several sizes embedded in the file, so the point
 * size becomes the index of choosing which size. If the value is too high,
 * the last indexed size will be the default.
 *
 * If `closeio` is true, `src` will be automatically closed once the font is
 * closed. Otherwise you should close `src` yourself after closing the font.
 *
 * When done with the returned TTF_Font, use TTF_CloseFont() to dispose of it.
 *
 * @param src an SDL_IOStream to provide a font file's data.
 * @param closeio true to close `src` when the font is closed, false to leave
 *                it open.
 * @param ptsize point size to use for the newly-opened font.
 * @returns a valid TTF_Font, or NULL on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety It is safe to call this function from any thread.
 *
 * @since This function is available since SDL_ttf 3.0.0.
 *
 * @sa TTF_CloseFont
 *
 * @from SDL_ttf.h:179 TTF_Font * TTF_OpenFontIO(SDL_IOStream *src, bool closeio, float ptsize);
 */
  openFontIo: lib.symbols.TTF_OpenFontIO,

/**
 * Create a font with the specified properties.
 *
 * These are the supported properties:
 *
 * - `TTF_PROP_FONT_CREATE_FILENAME_STRING`: the font file to open, if an
 *   SDL_IOStream isn't being used. This is required if
 *   `TTF_PROP_FONT_CREATE_IOSTREAM_POINTER` and
 *   `TTF_PROP_FONT_CREATE_EXISTING_FONT` aren't set.
 * - `TTF_PROP_FONT_CREATE_IOSTREAM_POINTER`: an SDL_IOStream containing the
 *   font to be opened. This should not be closed until the font is closed.
 *   This is required if `TTF_PROP_FONT_CREATE_FILENAME_STRING` and
 *   `TTF_PROP_FONT_CREATE_EXISTING_FONT` aren't set.
 * - `TTF_PROP_FONT_CREATE_IOSTREAM_OFFSET_NUMBER`: the offset in the iostream
 *   for the beginning of the font, defaults to 0.
 * - `TTF_PROP_FONT_CREATE_IOSTREAM_AUTOCLOSE_BOOLEAN`: true if closing the
 *   font should also close the associated SDL_IOStream.
 * - `TTF_PROP_FONT_CREATE_SIZE_FLOAT`: the point size of the font. Some .fon
 *   fonts will have several sizes embedded in the file, so the point size
 *   becomes the index of choosing which size. If the value is too high, the
 *   last indexed size will be the default.
 * - `TTF_PROP_FONT_CREATE_FACE_NUMBER`: the face index of the font, if the
 *   font contains multiple font faces.
 * - `TTF_PROP_FONT_CREATE_HORIZONTAL_DPI_NUMBER`: the horizontal DPI to use
 *   for font rendering, defaults to
 *   `TTF_PROP_FONT_CREATE_VERTICAL_DPI_NUMBER` if set, or 72 otherwise.
 * - `TTF_PROP_FONT_CREATE_VERTICAL_DPI_NUMBER`: the vertical DPI to use for
 *   font rendering, defaults to `TTF_PROP_FONT_CREATE_HORIZONTAL_DPI_NUMBER`
 *   if set, or 72 otherwise.
 * - `TTF_PROP_FONT_CREATE_EXISTING_FONT`: an optional TTF_Font that, if set,
 *   will be used as the font data source and the initial size and style of
 *   the new font.
 *
 * @param props the properties to use.
 * @returns a valid TTF_Font, or NULL on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety It is safe to call this function from any thread.
 *
 * @since This function is available since SDL_ttf 3.0.0.
 *
 * @sa TTF_CloseFont
 *
 * @from SDL_ttf.h:224 TTF_Font * TTF_OpenFontWithProperties(SDL_PropertiesID props);
 */
  openFontWithProperties: lib.symbols.TTF_OpenFontWithProperties,

/**
 * Create a copy of an existing font.
 *
 * The copy will be distinct from the original, but will share the font file
 * and have the same size and style as the original.
 *
 * When done with the returned TTF_Font, use TTF_CloseFont() to dispose of it.
 *
 * @param existing_font the font to copy.
 * @returns a valid TTF_Font, or NULL on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function should be called on the thread that created the
 *               original font.
 *
 * @since This function is available since SDL_ttf 3.0.0.
 *
 * @sa TTF_CloseFont
 *
 * @from SDL_ttf.h:255 TTF_Font * TTF_CopyFont(TTF_Font *existing_font);
 */
  copyFont: lib.symbols.TTF_CopyFont,

/**
 * Get the properties associated with a font.
 *
 * The following read-write properties are provided by SDL:
 *
 * - `TTF_PROP_FONT_OUTLINE_LINE_CAP_NUMBER`: The FT_Stroker_LineCap value
 *   used when setting the font outline, defaults to
 *   `FT_STROKER_LINECAP_ROUND`.
 * - `TTF_PROP_FONT_OUTLINE_LINE_JOIN_NUMBER`: The FT_Stroker_LineJoin value
 *   used when setting the font outline, defaults to
 *   `FT_STROKER_LINEJOIN_ROUND`.
 * - `TTF_PROP_FONT_OUTLINE_MITER_LIMIT_NUMBER`: The FT_Fixed miter limit used
 *   when setting the font outline, defaults to 0.
 *
 * @param font the font to query.
 * @returns a valid property ID on success or 0 on failure; call
 *          SDL_GetError() for more information.
 *
 * @threadsafety It is safe to call this function from any thread.
 *
 * @since This function is available since SDL_ttf 3.0.0.
 *
 * @from SDL_ttf.h:279 SDL_PropertiesID TTF_GetFontProperties(TTF_Font *font);
 */
  getFontProperties: lib.symbols.TTF_GetFontProperties,

/**
 * Get the font generation.
 *
 * The generation is incremented each time font properties change that require
 * rebuilding glyphs, such as style, size, etc.
 *
 * @param font the font to query.
 * @returns the font generation or 0 on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function should be called on the thread that created the
 *               font.
 *
 * @since This function is available since SDL_ttf 3.0.0.
 *
 * @from SDL_ttf.h:300 Uint32 TTF_GetFontGeneration(TTF_Font *font);
 */
  getFontGeneration: lib.symbols.TTF_GetFontGeneration,

/**
 * Add a fallback font.
 *
 * Add a font that will be used for glyphs that are not in the current font.
 * The fallback font should have the same size and style as the current font.
 *
 * If there are multiple fallback fonts, they are used in the order added.
 *
 * This updates any TTF_Text objects using this font.
 *
 * @param font the font to modify.
 * @param fallback the font to add as a fallback.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function should be called on the thread that created
 *               both fonts.
 *
 * @since This function is available since SDL_ttf 3.0.0.
 *
 * @sa TTF_ClearFallbackFonts
 * @sa TTF_RemoveFallbackFont
 *
 * @from SDL_ttf.h:325 bool TTF_AddFallbackFont(TTF_Font *font, TTF_Font *fallback);
 */
  addFallbackFont: lib.symbols.TTF_AddFallbackFont,

/**
 * Remove a fallback font.
 *
 * This updates any TTF_Text objects using this font.
 *
 * @param font the font to modify.
 * @param fallback the font to remove as a fallback.
 *
 * @threadsafety This function should be called on the thread that created
 *               both fonts.
 *
 * @since This function is available since SDL_ttf 3.0.0.
 *
 * @sa TTF_AddFallbackFont
 * @sa TTF_ClearFallbackFonts
 *
 * @from SDL_ttf.h:343 void TTF_RemoveFallbackFont(TTF_Font *font, TTF_Font *fallback);
 */
  removeFallbackFont: lib.symbols.TTF_RemoveFallbackFont,

/**
 * Remove all fallback fonts.
 *
 * This updates any TTF_Text objects using this font.
 *
 * @param font the font to modify.
 *
 * @threadsafety This function should be called on the thread that created the
 *               font.
 *
 * @since This function is available since SDL_ttf 3.0.0.
 *
 * @sa TTF_AddFallbackFont
 * @sa TTF_RemoveFallbackFont
 *
 * @from SDL_ttf.h:360 void TTF_ClearFallbackFonts(TTF_Font *font);
 */
  clearFallbackFonts: lib.symbols.TTF_ClearFallbackFonts,

/**
 * Set a font's size dynamically.
 *
 * This updates any TTF_Text objects using this font, and clears
 * already-generated glyphs, if any, from the cache.
 *
 * @param font the font to resize.
 * @param ptsize the new point size.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function should be called on the thread that created the
 *               font.
 *
 * @since This function is available since SDL_ttf 3.0.0.
 *
 * @sa TTF_GetFontSize
 *
 * @from SDL_ttf.h:380 bool TTF_SetFontSize(TTF_Font *font, float ptsize);
 */
  setFontSize: lib.symbols.TTF_SetFontSize,

/**
 * Set font size dynamically with target resolutions, in dots per inch.
 *
 * This updates any TTF_Text objects using this font, and clears
 * already-generated glyphs, if any, from the cache.
 *
 * @param font the font to resize.
 * @param ptsize the new point size.
 * @param hdpi the target horizontal DPI.
 * @param vdpi the target vertical DPI.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function should be called on the thread that created the
 *               font.
 *
 * @since This function is available since SDL_ttf 3.0.0.
 *
 * @sa TTF_GetFontSize
 * @sa TTF_GetFontSizeDPI
 *
 * @from SDL_ttf.h:403 bool TTF_SetFontSizeDPI(TTF_Font *font, float ptsize, int hdpi, int vdpi);
 */
  setFontSizeDpi: lib.symbols.TTF_SetFontSizeDPI,

/**
 * Get the size of a font.
 *
 * @param font the font to query.
 * @returns the size of the font, or 0.0f on failure; call SDL_GetError() for
 *          more information.
 *
 * @threadsafety This function should be called on the thread that created the
 *               font.
 *
 * @since This function is available since SDL_ttf 3.0.0.
 *
 * @sa TTF_SetFontSize
 * @sa TTF_SetFontSizeDPI
 *
 * @from SDL_ttf.h:420 float TTF_GetFontSize(TTF_Font *font);
 */
  getFontSize: lib.symbols.TTF_GetFontSize,

/**
 * Get font target resolutions, in dots per inch.
 *
 * @param font the font to query.
 * @param hdpi a pointer filled in with the target horizontal DPI.
 * @param vdpi a pointer filled in with the target vertical DPI.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function should be called on the thread that created the
 *               font.
 *
 * @since This function is available since SDL_ttf 3.0.0.
 *
 * @sa TTF_SetFontSizeDPI
 *
 * @from SDL_ttf.h:438 bool TTF_GetFontDPI(TTF_Font *font, int *hdpi, int *vdpi);
 */
  getFontDpi: lib.symbols.TTF_GetFontDPI,

/**
 * Set a font's current style.
 *
 * This updates any TTF_Text objects using this font, and clears
 * already-generated glyphs, if any, from the cache.
 *
 * The font styles are a set of bit flags, OR'd together:
 *
 * - `TTF_STYLE_NORMAL` (is zero)
 * - `TTF_STYLE_BOLD`
 * - `TTF_STYLE_ITALIC`
 * - `TTF_STYLE_UNDERLINE`
 * - `TTF_STYLE_STRIKETHROUGH`
 *
 * @param font the font to set a new style on.
 * @param style the new style values to set, OR'd together.
 *
 * @threadsafety This function should be called on the thread that created the
 *               font.
 *
 * @since This function is available since SDL_ttf 3.0.0.
 *
 * @sa TTF_GetFontStyle
 *
 * @from SDL_ttf.h:484 void TTF_SetFontStyle(TTF_Font *font, TTF_FontStyleFlags style);
 */
  setFontStyle: lib.symbols.TTF_SetFontStyle,

/**
 * Query a font's current style.
 *
 * The font styles are a set of bit flags, OR'd together:
 *
 * - `TTF_STYLE_NORMAL` (is zero)
 * - `TTF_STYLE_BOLD`
 * - `TTF_STYLE_ITALIC`
 * - `TTF_STYLE_UNDERLINE`
 * - `TTF_STYLE_STRIKETHROUGH`
 *
 * @param font the font to query.
 * @returns the current font style, as a set of bit flags.
 *
 * @threadsafety It is safe to call this function from any thread.
 *
 * @since This function is available since SDL_ttf 3.0.0.
 *
 * @sa TTF_SetFontStyle
 *
 * @from SDL_ttf.h:506 TTF_FontStyleFlags TTF_GetFontStyle(const TTF_Font *font);
 */
  getFontStyle: lib.symbols.TTF_GetFontStyle,

/**
 * Set a font's current outline.
 *
 * This uses the font properties `TTF_PROP_FONT_OUTLINE_LINE_CAP_NUMBER`,
 * `TTF_PROP_FONT_OUTLINE_LINE_JOIN_NUMBER`, and
 * `TTF_PROP_FONT_OUTLINE_MITER_LIMIT_NUMBER` when setting the font outline.
 *
 * This updates any TTF_Text objects using this font, and clears
 * already-generated glyphs, if any, from the cache.
 *
 * @param font the font to set a new outline on.
 * @param outline positive outline value, 0 to default.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function should be called on the thread that created the
 *               font.
 *
 * @since This function is available since SDL_ttf 3.0.0.
 *
 * @sa TTF_GetFontOutline
 *
 * @from SDL_ttf.h:530 bool TTF_SetFontOutline(TTF_Font *font, int outline);
 */
  setFontOutline: lib.symbols.TTF_SetFontOutline,

/**
 * Query a font's current outline.
 *
 * @param font the font to query.
 * @returns the font's current outline value.
 *
 * @threadsafety It is safe to call this function from any thread.
 *
 * @since This function is available since SDL_ttf 3.0.0.
 *
 * @sa TTF_SetFontOutline
 *
 * @from SDL_ttf.h:544 int TTF_GetFontOutline(const TTF_Font *font);
 */
  getFontOutline: lib.symbols.TTF_GetFontOutline,

/**
 * Set a font's current hinter setting.
 *
 * This updates any TTF_Text objects using this font, and clears
 * already-generated glyphs, if any, from the cache.
 *
 * The hinter setting is a single value:
 *
 * - `TTF_HINTING_NORMAL`
 * - `TTF_HINTING_LIGHT`
 * - `TTF_HINTING_MONO`
 * - `TTF_HINTING_NONE`
 * - `TTF_HINTING_LIGHT_SUBPIXEL` (available in SDL_ttf 3.0.0 and later)
 *
 * @param font the font to set a new hinter setting on.
 * @param hinting the new hinter setting.
 *
 * @threadsafety This function should be called on the thread that created the
 *               font.
 *
 * @since This function is available since SDL_ttf 3.0.0.
 *
 * @sa TTF_GetFontHinting
 *
 * @from SDL_ttf.h:591 void TTF_SetFontHinting(TTF_Font *font, TTF_HintingFlags hinting);
 */
  setFontHinting: lib.symbols.TTF_SetFontHinting,

/**
 * Query the number of faces of a font.
 *
 * @param font the font to query.
 * @returns the number of FreeType font faces.
 *
 * @threadsafety It is safe to call this function from any thread.
 *
 * @since This function is available since SDL_ttf 3.0.0.
 *
 * @from SDL_ttf.h:603 int TTF_GetNumFontFaces(const TTF_Font *font);
 */
  getNumFontFaces: lib.symbols.TTF_GetNumFontFaces,

/**
 * Query a font's current FreeType hinter setting.
 *
 * The hinter setting is a single value:
 *
 * - `TTF_HINTING_NORMAL`
 * - `TTF_HINTING_LIGHT`
 * - `TTF_HINTING_MONO`
 * - `TTF_HINTING_NONE`
 * - `TTF_HINTING_LIGHT_SUBPIXEL` (available in SDL_ttf 3.0.0 and later)
 *
 * @param font the font to query.
 * @returns the font's current hinter value.
 *
 * @threadsafety It is safe to call this function from any thread.
 *
 * @since This function is available since SDL_ttf 3.0.0.
 *
 * @sa TTF_SetFontHinting
 *
 * @from SDL_ttf.h:625 TTF_HintingFlags TTF_GetFontHinting(const TTF_Font *font);
 */
  getFontHinting: lib.symbols.TTF_GetFontHinting,

/**
 * Enable Signed Distance Field rendering for a font.
 *
 * SDF is a technique that helps fonts look sharp even when scaling and
 * rotating, and requires special shader support for display.
 *
 * This works with Blended APIs, and generates the raw signed distance values
 * in the alpha channel of the resulting texture.
 *
 * This updates any TTF_Text objects using this font, and clears
 * already-generated glyphs, if any, from the cache.
 *
 * @param font the font to set SDF support on.
 * @param enabled true to enable SDF, false to disable.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function should be called on the thread that created the
 *               font.
 *
 * @since This function is available since SDL_ttf 3.0.0.
 *
 * @sa TTF_GetFontSDF
 *
 * @from SDL_ttf.h:651 bool TTF_SetFontSDF(TTF_Font *font, bool enabled);
 */
  setFontSdf: lib.symbols.TTF_SetFontSDF,

/**
 * Query whether Signed Distance Field rendering is enabled for a font.
 *
 * @param font the font to query.
 * @returns true if enabled, false otherwise.
 *
 * @threadsafety It is safe to call this function from any thread.
 *
 * @since This function is available since SDL_ttf 3.0.0.
 *
 * @sa TTF_SetFontSDF
 *
 * @from SDL_ttf.h:665 bool TTF_GetFontSDF(const TTF_Font *font);
 */
  getFontSdf: lib.symbols.TTF_GetFontSDF,

/**
 * Set a font's current wrap alignment option.
 *
 * This updates any TTF_Text objects using this font.
 *
 * @param font the font to set a new wrap alignment option on.
 * @param align the new wrap alignment option.
 *
 * @threadsafety This function should be called on the thread that created the
 *               font.
 *
 * @since This function is available since SDL_ttf 3.0.0.
 *
 * @sa TTF_GetFontWrapAlignment
 *
 * @from SDL_ttf.h:695 void TTF_SetFontWrapAlignment(TTF_Font *font, TTF_HorizontalAlignment align);
 */
  setFontWrapAlignment: lib.symbols.TTF_SetFontWrapAlignment,

/**
 * Query a font's current wrap alignment option.
 *
 * @param font the font to query.
 * @returns the font's current wrap alignment option.
 *
 * @threadsafety It is safe to call this function from any thread.
 *
 * @since This function is available since SDL_ttf 3.0.0.
 *
 * @sa TTF_SetFontWrapAlignment
 *
 * @from SDL_ttf.h:709 TTF_HorizontalAlignment TTF_GetFontWrapAlignment(const TTF_Font *font);
 */
  getFontWrapAlignment: lib.symbols.TTF_GetFontWrapAlignment,

/**
 * Query the total height of a font.
 *
 * This is usually equal to point size.
 *
 * @param font the font to query.
 * @returns the font's height.
 *
 * @threadsafety It is safe to call this function from any thread.
 *
 * @since This function is available since SDL_ttf 3.0.0.
 *
 * @from SDL_ttf.h:723 int TTF_GetFontHeight(const TTF_Font *font);
 */
  getFontHeight: lib.symbols.TTF_GetFontHeight,

/**
 * Query the offset from the baseline to the top of a font.
 *
 * This is a positive value, relative to the baseline.
 *
 * @param font the font to query.
 * @returns the font's ascent.
 *
 * @threadsafety It is safe to call this function from any thread.
 *
 * @since This function is available since SDL_ttf 3.0.0.
 *
 * @from SDL_ttf.h:737 int TTF_GetFontAscent(const TTF_Font *font);
 */
  getFontAscent: lib.symbols.TTF_GetFontAscent,

/**
 * Query the offset from the baseline to the bottom of a font.
 *
 * This is a negative value, relative to the baseline.
 *
 * @param font the font to query.
 * @returns the font's descent.
 *
 * @threadsafety It is safe to call this function from any thread.
 *
 * @since This function is available since SDL_ttf 3.0.0.
 *
 * @from SDL_ttf.h:751 int TTF_GetFontDescent(const TTF_Font *font);
 */
  getFontDescent: lib.symbols.TTF_GetFontDescent,

/**
 * Set the spacing between lines of text for a font.
 *
 * This updates any TTF_Text objects using this font.
 *
 * @param font the font to modify.
 * @param lineskip the new line spacing for the font.
 *
 * @threadsafety This function should be called on the thread that created the
 *               font.
 *
 * @since This function is available since SDL_ttf 3.0.0.
 *
 * @sa TTF_GetFontLineSkip
 *
 * @from SDL_ttf.h:768 void TTF_SetFontLineSkip(TTF_Font *font, int lineskip);
 */
  setFontLineSkip: lib.symbols.TTF_SetFontLineSkip,

/**
 * Query the spacing between lines of text for a font.
 *
 * @param font the font to query.
 * @returns the font's recommended spacing.
 *
 * @threadsafety It is safe to call this function from any thread.
 *
 * @since This function is available since SDL_ttf 3.0.0.
 *
 * @sa TTF_SetFontLineSkip
 *
 * @from SDL_ttf.h:782 int TTF_GetFontLineSkip(const TTF_Font *font);
 */
  getFontLineSkip: lib.symbols.TTF_GetFontLineSkip,

/**
 * Set if kerning is enabled for a font.
 *
 * Newly-opened fonts default to allowing kerning. This is generally a good
 * policy unless you have a strong reason to disable it, as it tends to
 * produce better rendering (with kerning disabled, some fonts might render
 * the word `kerning` as something that looks like `keming` for example).
 *
 * This updates any TTF_Text objects using this font.
 *
 * @param font the font to set kerning on.
 * @param enabled true to enable kerning, false to disable.
 *
 * @threadsafety This function should be called on the thread that created the
 *               font.
 *
 * @since This function is available since SDL_ttf 3.0.0.
 *
 * @sa TTF_GetFontKerning
 *
 * @from SDL_ttf.h:804 void TTF_SetFontKerning(TTF_Font *font, bool enabled);
 */
  setFontKerning: lib.symbols.TTF_SetFontKerning,

/**
 * Query whether or not kerning is enabled for a font.
 *
 * @param font the font to query.
 * @returns true if kerning is enabled, false otherwise.
 *
 * @threadsafety It is safe to call this function from any thread.
 *
 * @since This function is available since SDL_ttf 3.0.0.
 *
 * @sa TTF_SetFontKerning
 *
 * @from SDL_ttf.h:818 bool TTF_GetFontKerning(const TTF_Font *font);
 */
  getFontKerning: lib.symbols.TTF_GetFontKerning,

/**
 * Query whether a font is fixed-width.
 *
 * A "fixed-width" font means all glyphs are the same width across; a
 * lowercase 'i' will be the same size across as a capital 'W', for example.
 * This is common for terminals and text editors, and other apps that treat
 * text as a grid. Most other things (WYSIWYG word processors, web pages, etc)
 * are more likely to not be fixed-width in most cases.
 *
 * @param font the font to query.
 * @returns true if the font is fixed-width, false otherwise.
 *
 * @threadsafety It is safe to call this function from any thread.
 *
 * @since This function is available since SDL_ttf 3.0.0.
 *
 * @from SDL_ttf.h:836 bool TTF_FontIsFixedWidth(const TTF_Font *font);
 */
  fontIsFixedWidth: lib.symbols.TTF_FontIsFixedWidth,

/**
 * Query whether a font is scalable or not.
 *
 * Scalability lets us distinguish between outline and bitmap fonts.
 *
 * @param font the font to query.
 * @returns true if the font is scalable, false otherwise.
 *
 * @threadsafety It is safe to call this function from any thread.
 *
 * @since This function is available since SDL_ttf 3.0.0.
 *
 * @sa TTF_SetFontSDF
 *
 * @from SDL_ttf.h:852 bool TTF_FontIsScalable(const TTF_Font *font);
 */
  fontIsScalable: lib.symbols.TTF_FontIsScalable,

/**
 * Query a font's family name.
 *
 * This string is dictated by the contents of the font file.
 *
 * Note that the returned string is to internal storage, and should not be
 * modified or free'd by the caller. The string becomes invalid, with the rest
 * of the font, when `font` is handed to TTF_CloseFont().
 *
 * @param font the font to query.
 * @returns the font's family name.
 *
 * @threadsafety It is safe to call this function from any thread.
 *
 * @since This function is available since SDL_ttf 3.0.0.
 *
 * @from SDL_ttf.h:870 const char * TTF_GetFontFamilyName(const TTF_Font *font);
 */
  getFontFamilyName: lib.symbols.TTF_GetFontFamilyName,

/**
 * Query a font's style name.
 *
 * This string is dictated by the contents of the font file.
 *
 * Note that the returned string is to internal storage, and should not be
 * modified or free'd by the caller. The string becomes invalid, with the rest
 * of the font, when `font` is handed to TTF_CloseFont().
 *
 * @param font the font to query.
 * @returns the font's style name.
 *
 * @threadsafety It is safe to call this function from any thread.
 *
 * @since This function is available since SDL_ttf 3.0.0.
 *
 * @from SDL_ttf.h:888 const char * TTF_GetFontStyleName(const TTF_Font *font);
 */
  getFontStyleName: lib.symbols.TTF_GetFontStyleName,

/**
 * Set the direction to be used for text shaping by a font.
 *
 * This function only supports left-to-right text shaping if SDL_ttf was not
 * built with HarfBuzz support.
 *
 * This updates any TTF_Text objects using this font.
 *
 * @param font the font to modify.
 * @param direction the new direction for text to flow.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function should be called on the thread that created the
 *               font.
 *
 * @since This function is available since SDL_ttf 3.0.0.
 *
 * @from SDL_ttf.h:928 bool TTF_SetFontDirection(TTF_Font *font, TTF_Direction direction);
 */
  setFontDirection: lib.symbols.TTF_SetFontDirection,

/**
 * Get the direction to be used for text shaping by a font.
 *
 * This defaults to TTF_DIRECTION_INVALID if it hasn't been set.
 *
 * @param font the font to query.
 * @returns the direction to be used for text shaping.
 *
 * @threadsafety This function should be called on the thread that created the
 *               font.
 *
 * @since This function is available since SDL_ttf 3.0.0.
 *
 * @from SDL_ttf.h:943 TTF_Direction TTF_GetFontDirection(TTF_Font *font);
 */
  getFontDirection: lib.symbols.TTF_GetFontDirection,

/**
 * Convert from a 4 character string to a 32-bit tag.
 *
 * @param string the 4 character string to convert.
 * @returns the 32-bit representation of the string.
 *
 * @threadsafety It is safe to call this function from any thread.
 *
 * @since This function is available since SDL_ttf 3.0.0.
 *
 * @sa TTF_TagToString
 *
 * @from SDL_ttf.h:957 Uint32 TTF_StringToTag(const char *string);
 */
  stringToTag: lib.symbols.TTF_StringToTag,

/**
 * Convert from a 32-bit tag to a 4 character string.
 *
 * @param tag the 32-bit tag to convert.
 * @param string a pointer filled in with the 4 character representation of
 *               the tag.
 * @param size the size of the buffer pointed at by string, should be at least
 *             4.
 *
 * @threadsafety It is safe to call this function from any thread.
 *
 * @since This function is available since SDL_ttf 3.0.0.
 *
 * @sa TTF_TagToString
 *
 * @from SDL_ttf.h:974 void TTF_TagToString(Uint32 tag, char *string, size_t size);
 */
  tagToString: lib.symbols.TTF_TagToString,

/**
 * Set the script to be used for text shaping by a font.
 *
 * This returns false if SDL_ttf isn't built with HarfBuzz support.
 *
 * This updates any TTF_Text objects using this font.
 *
 * @param font the font to modify.
 * @param script an
 *               [ISO 15924 code](https://unicode.org/iso15924/iso15924-codes.html)
 *               .
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function should be called on the thread that created the
 *               font.
 *
 * @since This function is available since SDL_ttf 3.0.0.
 *
 * @sa TTF_StringToTag
 *
 * @from SDL_ttf.h:997 bool TTF_SetFontScript(TTF_Font *font, Uint32 script);
 */
  setFontScript: lib.symbols.TTF_SetFontScript,

/**
 * Get the script used for text shaping a font.
 *
 * @param font the font to query.
 * @returns an
 *          [ISO 15924 code](https://unicode.org/iso15924/iso15924-codes.html)
 *          or 0 if a script hasn't been set.
 *
 * @threadsafety This function should be called on the thread that created the
 *               font.
 *
 * @since This function is available since SDL_ttf 3.0.0.
 *
 * @sa TTF_TagToString
 *
 * @from SDL_ttf.h:1014 Uint32 TTF_GetFontScript(TTF_Font *font);
 */
  getFontScript: lib.symbols.TTF_GetFontScript,

/**
 * Get the script used by a 32-bit codepoint.
 *
 * @param ch the character code to check.
 * @returns an
 *          [ISO 15924 code](https://unicode.org/iso15924/iso15924-codes.html)
 *          on success, or 0 on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function is thread-safe.
 *
 * @since This function is available since SDL_ttf 3.0.0.
 *
 * @sa TTF_TagToString
 *
 * @from SDL_ttf.h:1031 Uint32 TTF_GetGlyphScript(Uint32 ch);
 */
  getGlyphScript: lib.symbols.TTF_GetGlyphScript,

/**
 * Set language to be used for text shaping by a font.
 *
 * If SDL_ttf was not built with HarfBuzz support, this function returns
 * false.
 *
 * This updates any TTF_Text objects using this font.
 *
 * @param font the font to specify a language for.
 * @param language_bcp47 a null-terminated string containing the desired
 *                       language's BCP47 code. Or null to reset the value.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function should be called on the thread that created the
 *               font.
 *
 * @since This function is available since SDL_ttf 3.0.0.
 *
 * @from SDL_ttf.h:1052 bool TTF_SetFontLanguage(TTF_Font *font, const char *language_bcp47);
 */
  setFontLanguage: lib.symbols.TTF_SetFontLanguage,

/**
 * Check whether a glyph is provided by the font for a UNICODE codepoint.
 *
 * @param font the font to query.
 * @param ch the codepoint to check.
 * @returns true if font provides a glyph for this character, false if not.
 *
 * @threadsafety This function should be called on the thread that created the
 *               font.
 *
 * @since This function is available since SDL_ttf 3.0.0.
 *
 * @from SDL_ttf.h:1066 bool TTF_FontHasGlyph(TTF_Font *font, Uint32 ch);
 */
  fontHasGlyph: lib.symbols.TTF_FontHasGlyph,

/**
 * Get the pixel image for a UNICODE codepoint.
 *
 * @param font the font to query.
 * @param ch the codepoint to check.
 * @param image_type a pointer filled in with the glyph image type, may be
 *                   NULL.
 * @returns an SDL_Surface containing the glyph, or NULL on failure; call
 *          SDL_GetError() for more information.
 *
 * @threadsafety This function should be called on the thread that created the
 *               font.
 *
 * @since This function is available since SDL_ttf 3.0.0.
 *
 * @from SDL_ttf.h:1096 SDL_Surface * TTF_GetGlyphImage(TTF_Font *font, Uint32 ch, TTF_ImageType *image_type);
 */
  getGlyphImage: lib.symbols.TTF_GetGlyphImage,

/**
 * Get the pixel image for a character index.
 *
 * This is useful for text engine implementations, which can call this with
 * the `glyph_index` in a TTF_CopyOperation
 *
 * @param font the font to query.
 * @param glyph_index the index of the glyph to return.
 * @param image_type a pointer filled in with the glyph image type, may be
 *                   NULL.
 * @returns an SDL_Surface containing the glyph, or NULL on failure; call
 *          SDL_GetError() for more information.
 *
 * @threadsafety This function should be called on the thread that created the
 *               font.
 *
 * @since This function is available since SDL_ttf 3.0.0.
 *
 * @from SDL_ttf.h:1116 SDL_Surface * TTF_GetGlyphImageForIndex(TTF_Font *font, Uint32 glyph_index, TTF_ImageType *image_type);
 */
  getGlyphImageForIndex: lib.symbols.TTF_GetGlyphImageForIndex,

/**
 * Query the metrics (dimensions) of a font's glyph for a UNICODE codepoint.
 *
 * To understand what these metrics mean, here is a useful link:
 *
 * https://freetype.sourceforge.net/freetype2/docs/tutorial/step2.html
 *
 * @param font the font to query.
 * @param ch the codepoint to check.
 * @param minx a pointer filled in with the minimum x coordinate of the glyph
 *             from the left edge of its bounding box. This value may be
 *             negative.
 * @param maxx a pointer filled in with the maximum x coordinate of the glyph
 *             from the left edge of its bounding box.
 * @param miny a pointer filled in with the minimum y coordinate of the glyph
 *             from the bottom edge of its bounding box. This value may be
 *             negative.
 * @param maxy a pointer filled in with the maximum y coordinate of the glyph
 *             from the bottom edge of its bounding box.
 * @param advance a pointer filled in with the distance to the next glyph from
 *                the left edge of this glyph's bounding box.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function should be called on the thread that created the
 *               font.
 *
 * @since This function is available since SDL_ttf 3.0.0.
 *
 * @from SDL_ttf.h:1147 bool TTF_GetGlyphMetrics(TTF_Font *font, Uint32 ch, int *minx, int *maxx, int *miny, int *maxy, int *advance);
 */
  getGlyphMetrics: lib.symbols.TTF_GetGlyphMetrics,

/**
 * Query the kerning size between the glyphs of two UNICODE codepoints.
 *
 * @param font the font to query.
 * @param previous_ch the previous codepoint.
 * @param ch the current codepoint.
 * @param kerning a pointer filled in with the kerning size between the two
 *                glyphs, in pixels, may be NULL.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function should be called on the thread that created the
 *               font.
 *
 * @since This function is available since SDL_ttf 3.0.0.
 *
 * @from SDL_ttf.h:1165 bool TTF_GetGlyphKerning(TTF_Font *font, Uint32 previous_ch, Uint32 ch, int *kerning);
 */
  getGlyphKerning: lib.symbols.TTF_GetGlyphKerning,

/**
 * Calculate the dimensions of a rendered string of UTF-8 text.
 *
 * This will report the width and height, in pixels, of the space that the
 * specified string will take to fully render.
 *
 * @param font the font to query.
 * @param text text to calculate, in UTF-8 encoding.
 * @param length the length of the text, in bytes, or 0 for null terminated
 *               text.
 * @param w will be filled with width, in pixels, on return.
 * @param h will be filled with height, in pixels, on return.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function should be called on the thread that created the
 *               font.
 *
 * @since This function is available since SDL_ttf 3.0.0.
 *
 * @from SDL_ttf.h:1187 bool TTF_GetStringSize(TTF_Font *font, const char *text, size_t length, int *w, int *h);
 */
  getStringSize: lib.symbols.TTF_GetStringSize,

/**
 * Calculate the dimensions of a rendered string of UTF-8 text.
 *
 * This will report the width and height, in pixels, of the space that the
 * specified string will take to fully render.
 *
 * Text is wrapped to multiple lines on line endings and on word boundaries if
 * it extends beyond `wrap_width` in pixels.
 *
 * If wrap_width is 0, this function will only wrap on newline characters.
 *
 * @param font the font to query.
 * @param text text to calculate, in UTF-8 encoding.
 * @param length the length of the text, in bytes, or 0 for null terminated
 *               text.
 * @param wrap_width the maximum width or 0 to wrap on newline characters.
 * @param w will be filled with width, in pixels, on return.
 * @param h will be filled with height, in pixels, on return.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function should be called on the thread that created the
 *               font.
 *
 * @since This function is available since SDL_ttf 3.0.0.
 *
 * @from SDL_ttf.h:1215 bool TTF_GetStringSizeWrapped(TTF_Font *font, const char *text, size_t length, int wrap_width, int *w, int *h);
 */
  getStringSizeWrapped: lib.symbols.TTF_GetStringSizeWrapped,

/**
 * Calculate how much of a UTF-8 string will fit in a given width.
 *
 * This reports the number of characters that can be rendered before reaching
 * `max_width`.
 *
 * This does not need to render the string to do this calculation.
 *
 * @param font the font to query.
 * @param text text to calculate, in UTF-8 encoding.
 * @param length the length of the text, in bytes, or 0 for null terminated
 *               text.
 * @param max_width maximum width, in pixels, available for the string, or 0
 *                  for unbounded width.
 * @param measured_width a pointer filled in with the width, in pixels, of the
 *                       string that will fit, may be NULL.
 * @param measured_length a pointer filled in with the length, in bytes, of
 *                        the string that will fit, may be NULL.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function should be called on the thread that created the
 *               font.
 *
 * @since This function is available since SDL_ttf 3.0.0.
 *
 * @from SDL_ttf.h:1243 bool TTF_MeasureString(TTF_Font *font, const char *text, size_t length, int max_width, int *measured_width, size_t *measured_length);
 */
  measureString: lib.symbols.TTF_MeasureString,

/**
 * Render UTF-8 text at fast quality to a new 8-bit surface.
 *
 * This function will allocate a new 8-bit, palettized surface. The surface's
 * 0 pixel will be the colorkey, giving a transparent background. The 1 pixel
 * will be set to the text color.
 *
 * This will not word-wrap the string; you'll get a surface with a single line
 * of text, as long as the string requires. You can use
 * TTF_RenderText_Solid_Wrapped() instead if you need to wrap the output to
 * multiple lines.
 *
 * This will not wrap on newline characters.
 *
 * You can render at other quality levels with TTF_RenderText_Shaded,
 * TTF_RenderText_Blended, and TTF_RenderText_LCD.
 *
 * @param font the font to render with.
 * @param text text to render, in UTF-8 encoding.
 * @param length the length of the text, in bytes, or 0 for null terminated
 *               text.
 * @param fg the foreground color for the text.
 * @returns a new 8-bit, palettized surface, or NULL if there was an error.
 *
 * @threadsafety This function should be called on the thread that created the
 *               font.
 *
 * @since This function is available since SDL_ttf 3.0.0.
 *
 * @sa TTF_RenderText_Blended
 * @sa TTF_RenderText_LCD
 * @sa TTF_RenderText_Shaded
 * @sa TTF_RenderText_Solid
 * @sa TTF_RenderText_Solid_Wrapped
 *
 * @from SDL_ttf.h:1280 SDL_Surface * TTF_RenderText_Solid(TTF_Font *font, const char *text, size_t length, SDL_Color fg);
 */
  renderTextSolid: lib.symbols.TTF_RenderText_Solid,

/**
 * Render word-wrapped UTF-8 text at fast quality to a new 8-bit surface.
 *
 * This function will allocate a new 8-bit, palettized surface. The surface's
 * 0 pixel will be the colorkey, giving a transparent background. The 1 pixel
 * will be set to the text color.
 *
 * Text is wrapped to multiple lines on line endings and on word boundaries if
 * it extends beyond `wrapLength` in pixels.
 *
 * If wrapLength is 0, this function will only wrap on newline characters.
 *
 * You can render at other quality levels with TTF_RenderText_Shaded_Wrapped,
 * TTF_RenderText_Blended_Wrapped, and TTF_RenderText_LCD_Wrapped.
 *
 * @param font the font to render with.
 * @param text text to render, in UTF-8 encoding.
 * @param length the length of the text, in bytes, or 0 for null terminated
 *               text.
 * @param fg the foreground color for the text.
 * @param wrapLength the maximum width of the text surface or 0 to wrap on
 *                   newline characters.
 * @returns a new 8-bit, palettized surface, or NULL if there was an error.
 *
 * @threadsafety This function should be called on the thread that created the
 *               font.
 *
 * @since This function is available since SDL_ttf 3.0.0.
 *
 * @sa TTF_RenderText_Blended_Wrapped
 * @sa TTF_RenderText_LCD_Wrapped
 * @sa TTF_RenderText_Shaded_Wrapped
 * @sa TTF_RenderText_Solid
 *
 * @from SDL_ttf.h:1316 SDL_Surface * TTF_RenderText_Solid_Wrapped(TTF_Font *font, const char *text, size_t length, SDL_Color fg, int wrapLength);
 */
  renderTextSolidWrapped: lib.symbols.TTF_RenderText_Solid_Wrapped,

/**
 * Render a single 32-bit glyph at fast quality to a new 8-bit surface.
 *
 * This function will allocate a new 8-bit, palettized surface. The surface's
 * 0 pixel will be the colorkey, giving a transparent background. The 1 pixel
 * will be set to the text color.
 *
 * The glyph is rendered without any padding or centering in the X direction,
 * and aligned normally in the Y direction.
 *
 * You can render at other quality levels with TTF_RenderGlyph_Shaded,
 * TTF_RenderGlyph_Blended, and TTF_RenderGlyph_LCD.
 *
 * @param font the font to render with.
 * @param ch the character to render.
 * @param fg the foreground color for the text.
 * @returns a new 8-bit, palettized surface, or NULL if there was an error.
 *
 * @threadsafety This function should be called on the thread that created the
 *               font.
 *
 * @since This function is available since SDL_ttf 3.0.0.
 *
 * @sa TTF_RenderGlyph_Blended
 * @sa TTF_RenderGlyph_LCD
 * @sa TTF_RenderGlyph_Shaded
 *
 * @from SDL_ttf.h:1345 SDL_Surface * TTF_RenderGlyph_Solid(TTF_Font *font, Uint32 ch, SDL_Color fg);
 */
  renderGlyphSolid: lib.symbols.TTF_RenderGlyph_Solid,

/**
 * Render UTF-8 text at high quality to a new 8-bit surface.
 *
 * This function will allocate a new 8-bit, palettized surface. The surface's
 * 0 pixel will be the specified background color, while other pixels have
 * varying degrees of the foreground color. This function returns the new
 * surface, or NULL if there was an error.
 *
 * This will not word-wrap the string; you'll get a surface with a single line
 * of text, as long as the string requires. You can use
 * TTF_RenderText_Shaded_Wrapped() instead if you need to wrap the output to
 * multiple lines.
 *
 * This will not wrap on newline characters.
 *
 * You can render at other quality levels with TTF_RenderText_Solid,
 * TTF_RenderText_Blended, and TTF_RenderText_LCD.
 *
 * @param font the font to render with.
 * @param text text to render, in UTF-8 encoding.
 * @param length the length of the text, in bytes, or 0 for null terminated
 *               text.
 * @param fg the foreground color for the text.
 * @param bg the background color for the text.
 * @returns a new 8-bit, palettized surface, or NULL if there was an error.
 *
 * @threadsafety This function should be called on the thread that created the
 *               font.
 *
 * @since This function is available since SDL_ttf 3.0.0.
 *
 * @sa TTF_RenderText_Blended
 * @sa TTF_RenderText_LCD
 * @sa TTF_RenderText_Shaded_Wrapped
 * @sa TTF_RenderText_Solid
 *
 * @from SDL_ttf.h:1383 SDL_Surface * TTF_RenderText_Shaded(TTF_Font *font, const char *text, size_t length, SDL_Color fg, SDL_Color bg);
 */
  renderTextShaded: lib.symbols.TTF_RenderText_Shaded,

/**
 * Render word-wrapped UTF-8 text at high quality to a new 8-bit surface.
 *
 * This function will allocate a new 8-bit, palettized surface. The surface's
 * 0 pixel will be the specified background color, while other pixels have
 * varying degrees of the foreground color. This function returns the new
 * surface, or NULL if there was an error.
 *
 * Text is wrapped to multiple lines on line endings and on word boundaries if
 * it extends beyond `wrap_width` in pixels.
 *
 * If wrap_width is 0, this function will only wrap on newline characters.
 *
 * You can render at other quality levels with TTF_RenderText_Solid_Wrapped,
 * TTF_RenderText_Blended_Wrapped, and TTF_RenderText_LCD_Wrapped.
 *
 * @param font the font to render with.
 * @param text text to render, in UTF-8 encoding.
 * @param length the length of the text, in bytes, or 0 for null terminated
 *               text.
 * @param fg the foreground color for the text.
 * @param bg the background color for the text.
 * @param wrap_width the maximum width of the text surface or 0 to wrap on
 *                   newline characters.
 * @returns a new 8-bit, palettized surface, or NULL if there was an error.
 *
 * @threadsafety This function should be called on the thread that created the
 *               font.
 *
 * @since This function is available since SDL_ttf 3.0.0.
 *
 * @sa TTF_RenderText_Blended_Wrapped
 * @sa TTF_RenderText_LCD_Wrapped
 * @sa TTF_RenderText_Shaded
 * @sa TTF_RenderText_Solid_Wrapped
 *
 * @from SDL_ttf.h:1421 SDL_Surface * TTF_RenderText_Shaded_Wrapped(TTF_Font *font, const char *text, size_t length, SDL_Color fg, SDL_Color bg, int wrap_width);
 */
  renderTextShadedWrapped: lib.symbols.TTF_RenderText_Shaded_Wrapped,

/**
 * Render a single UNICODE codepoint at high quality to a new 8-bit surface.
 *
 * This function will allocate a new 8-bit, palettized surface. The surface's
 * 0 pixel will be the specified background color, while other pixels have
 * varying degrees of the foreground color. This function returns the new
 * surface, or NULL if there was an error.
 *
 * The glyph is rendered without any padding or centering in the X direction,
 * and aligned normally in the Y direction.
 *
 * You can render at other quality levels with TTF_RenderGlyph_Solid,
 * TTF_RenderGlyph_Blended, and TTF_RenderGlyph_LCD.
 *
 * @param font the font to render with.
 * @param ch the codepoint to render.
 * @param fg the foreground color for the text.
 * @param bg the background color for the text.
 * @returns a new 8-bit, palettized surface, or NULL if there was an error.
 *
 * @threadsafety This function should be called on the thread that created the
 *               font.
 *
 * @since This function is available since SDL_ttf 3.0.0.
 *
 * @sa TTF_RenderGlyph_Blended
 * @sa TTF_RenderGlyph_LCD
 * @sa TTF_RenderGlyph_Solid
 *
 * @from SDL_ttf.h:1452 SDL_Surface * TTF_RenderGlyph_Shaded(TTF_Font *font, Uint32 ch, SDL_Color fg, SDL_Color bg);
 */
  renderGlyphShaded: lib.symbols.TTF_RenderGlyph_Shaded,

/**
 * Render UTF-8 text at high quality to a new ARGB surface.
 *
 * This function will allocate a new 32-bit, ARGB surface, using alpha
 * blending to dither the font with the given color. This function returns the
 * new surface, or NULL if there was an error.
 *
 * This will not word-wrap the string; you'll get a surface with a single line
 * of text, as long as the string requires. You can use
 * TTF_RenderText_Blended_Wrapped() instead if you need to wrap the output to
 * multiple lines.
 *
 * This will not wrap on newline characters.
 *
 * You can render at other quality levels with TTF_RenderText_Solid,
 * TTF_RenderText_Shaded, and TTF_RenderText_LCD.
 *
 * @param font the font to render with.
 * @param text text to render, in UTF-8 encoding.
 * @param length the length of the text, in bytes, or 0 for null terminated
 *               text.
 * @param fg the foreground color for the text.
 * @returns a new 32-bit, ARGB surface, or NULL if there was an error.
 *
 * @threadsafety This function should be called on the thread that created the
 *               font.
 *
 * @since This function is available since SDL_ttf 3.0.0.
 *
 * @sa TTF_RenderText_Blended_Wrapped
 * @sa TTF_RenderText_LCD
 * @sa TTF_RenderText_Shaded
 * @sa TTF_RenderText_Solid
 *
 * @from SDL_ttf.h:1488 SDL_Surface * TTF_RenderText_Blended(TTF_Font *font, const char *text, size_t length, SDL_Color fg);
 */
  renderTextBlended: lib.symbols.TTF_RenderText_Blended,

/**
 * Render word-wrapped UTF-8 text at high quality to a new ARGB surface.
 *
 * This function will allocate a new 32-bit, ARGB surface, using alpha
 * blending to dither the font with the given color. This function returns the
 * new surface, or NULL if there was an error.
 *
 * Text is wrapped to multiple lines on line endings and on word boundaries if
 * it extends beyond `wrap_width` in pixels.
 *
 * If wrap_width is 0, this function will only wrap on newline characters.
 *
 * You can render at other quality levels with TTF_RenderText_Solid_Wrapped,
 * TTF_RenderText_Shaded_Wrapped, and TTF_RenderText_LCD_Wrapped.
 *
 * @param font the font to render with.
 * @param text text to render, in UTF-8 encoding.
 * @param length the length of the text, in bytes, or 0 for null terminated
 *               text.
 * @param fg the foreground color for the text.
 * @param wrap_width the maximum width of the text surface or 0 to wrap on
 *                   newline characters.
 * @returns a new 32-bit, ARGB surface, or NULL if there was an error.
 *
 * @threadsafety This function should be called on the thread that created the
 *               font.
 *
 * @since This function is available since SDL_ttf 3.0.0.
 *
 * @sa TTF_RenderText_Blended
 * @sa TTF_RenderText_LCD_Wrapped
 * @sa TTF_RenderText_Shaded_Wrapped
 * @sa TTF_RenderText_Solid_Wrapped
 *
 * @from SDL_ttf.h:1524 SDL_Surface * TTF_RenderText_Blended_Wrapped(TTF_Font *font, const char *text, size_t length, SDL_Color fg, int wrap_width);
 */
  renderTextBlendedWrapped: lib.symbols.TTF_RenderText_Blended_Wrapped,

/**
 * Render a single UNICODE codepoint at high quality to a new ARGB surface.
 *
 * This function will allocate a new 32-bit, ARGB surface, using alpha
 * blending to dither the font with the given color. This function returns the
 * new surface, or NULL if there was an error.
 *
 * The glyph is rendered without any padding or centering in the X direction,
 * and aligned normally in the Y direction.
 *
 * You can render at other quality levels with TTF_RenderGlyph_Solid,
 * TTF_RenderGlyph_Shaded, and TTF_RenderGlyph_LCD.
 *
 * @param font the font to render with.
 * @param ch the codepoint to render.
 * @param fg the foreground color for the text.
 * @returns a new 32-bit, ARGB surface, or NULL if there was an error.
 *
 * @threadsafety This function should be called on the thread that created the
 *               font.
 *
 * @since This function is available since SDL_ttf 3.0.0.
 *
 * @sa TTF_RenderGlyph_LCD
 * @sa TTF_RenderGlyph_Shaded
 * @sa TTF_RenderGlyph_Solid
 *
 * @from SDL_ttf.h:1553 SDL_Surface * TTF_RenderGlyph_Blended(TTF_Font *font, Uint32 ch, SDL_Color fg);
 */
  renderGlyphBlended: lib.symbols.TTF_RenderGlyph_Blended,

/**
 * Render UTF-8 text at LCD subpixel quality to a new ARGB surface.
 *
 * This function will allocate a new 32-bit, ARGB surface, and render
 * alpha-blended text using FreeType's LCD subpixel rendering. This function
 * returns the new surface, or NULL if there was an error.
 *
 * This will not word-wrap the string; you'll get a surface with a single line
 * of text, as long as the string requires. You can use
 * TTF_RenderText_LCD_Wrapped() instead if you need to wrap the output to
 * multiple lines.
 *
 * This will not wrap on newline characters.
 *
 * You can render at other quality levels with TTF_RenderText_Solid,
 * TTF_RenderText_Shaded, and TTF_RenderText_Blended.
 *
 * @param font the font to render with.
 * @param text text to render, in UTF-8 encoding.
 * @param length the length of the text, in bytes, or 0 for null terminated
 *               text.
 * @param fg the foreground color for the text.
 * @param bg the background color for the text.
 * @returns a new 32-bit, ARGB surface, or NULL if there was an error.
 *
 * @threadsafety This function should be called on the thread that created the
 *               font.
 *
 * @since This function is available since SDL_ttf 3.0.0.
 *
 * @sa TTF_RenderText_Blended
 * @sa TTF_RenderText_LCD_Wrapped
 * @sa TTF_RenderText_Shaded
 * @sa TTF_RenderText_Solid
 *
 * @from SDL_ttf.h:1590 SDL_Surface * TTF_RenderText_LCD(TTF_Font *font, const char *text, size_t length, SDL_Color fg, SDL_Color bg);
 */
  renderTextLcd: lib.symbols.TTF_RenderText_LCD,

/**
 * Render word-wrapped UTF-8 text at LCD subpixel quality to a new ARGB
 * surface.
 *
 * This function will allocate a new 32-bit, ARGB surface, and render
 * alpha-blended text using FreeType's LCD subpixel rendering. This function
 * returns the new surface, or NULL if there was an error.
 *
 * Text is wrapped to multiple lines on line endings and on word boundaries if
 * it extends beyond `wrap_width` in pixels.
 *
 * If wrap_width is 0, this function will only wrap on newline characters.
 *
 * You can render at other quality levels with TTF_RenderText_Solid_Wrapped,
 * TTF_RenderText_Shaded_Wrapped, and TTF_RenderText_Blended_Wrapped.
 *
 * @param font the font to render with.
 * @param text text to render, in UTF-8 encoding.
 * @param length the length of the text, in bytes, or 0 for null terminated
 *               text.
 * @param fg the foreground color for the text.
 * @param bg the background color for the text.
 * @param wrap_width the maximum width of the text surface or 0 to wrap on
 *                   newline characters.
 * @returns a new 32-bit, ARGB surface, or NULL if there was an error.
 *
 * @threadsafety This function should be called on the thread that created the
 *               font.
 *
 * @since This function is available since SDL_ttf 3.0.0.
 *
 * @sa TTF_RenderText_Blended_Wrapped
 * @sa TTF_RenderText_LCD
 * @sa TTF_RenderText_Shaded_Wrapped
 * @sa TTF_RenderText_Solid_Wrapped
 *
 * @from SDL_ttf.h:1628 SDL_Surface * TTF_RenderText_LCD_Wrapped(TTF_Font *font, const char *text, size_t length, SDL_Color fg, SDL_Color bg, int wrap_width);
 */
  renderTextLcdWrapped: lib.symbols.TTF_RenderText_LCD_Wrapped,

/**
 * Render a single UNICODE codepoint at LCD subpixel quality to a new ARGB
 * surface.
 *
 * This function will allocate a new 32-bit, ARGB surface, and render
 * alpha-blended text using FreeType's LCD subpixel rendering. This function
 * returns the new surface, or NULL if there was an error.
 *
 * The glyph is rendered without any padding or centering in the X direction,
 * and aligned normally in the Y direction.
 *
 * You can render at other quality levels with TTF_RenderGlyph_Solid,
 * TTF_RenderGlyph_Shaded, and TTF_RenderGlyph_Blended.
 *
 * @param font the font to render with.
 * @param ch the codepoint to render.
 * @param fg the foreground color for the text.
 * @param bg the background color for the text.
 * @returns a new 32-bit, ARGB surface, or NULL if there was an error.
 *
 * @threadsafety This function should be called on the thread that created the
 *               font.
 *
 * @since This function is available since SDL_ttf 3.0.0.
 *
 * @sa TTF_RenderGlyph_Blended
 * @sa TTF_RenderGlyph_Shaded
 * @sa TTF_RenderGlyph_Solid
 *
 * @from SDL_ttf.h:1659 SDL_Surface * TTF_RenderGlyph_LCD(TTF_Font *font, Uint32 ch, SDL_Color fg, SDL_Color bg);
 */
  renderGlyphLcd: lib.symbols.TTF_RenderGlyph_LCD,

/**
 * Create a text engine for drawing text on SDL surfaces.
 *
 * @returns a TTF_TextEngine object or NULL on failure; call SDL_GetError()
 *          for more information.
 *
 * @threadsafety It is safe to call this function from any thread.
 *
 * @since This function is available since SDL_ttf 3.0.0.
 *
 * @sa TTF_DestroySurfaceTextEngine
 * @sa TTF_DrawSurfaceText
 *
 * @from SDL_ttf.h:1720 TTF_TextEngine * TTF_CreateSurfaceTextEngine(void);
 */
  createSurfaceTextEngine: lib.symbols.TTF_CreateSurfaceTextEngine,

/**
 * Draw text to an SDL surface.
 *
 * `text` must have been created using a TTF_TextEngine from
 * TTF_CreateSurfaceTextEngine().
 *
 * @param text the text to draw.
 * @param x the x coordinate in pixels, positive from the left edge towards
 *          the right.
 * @param y the y coordinate in pixels, positive from the top edge towards the
 *          bottom.
 * @param surface the surface to draw on.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function should be called on the thread that created the
 *               text.
 *
 * @since This function is available since SDL_ttf 3.0.0.
 *
 * @sa TTF_CreateSurfaceTextEngine
 * @sa TTF_CreateText
 *
 * @from SDL_ttf.h:1745 bool TTF_DrawSurfaceText(TTF_Text *text, int x, int y, SDL_Surface *surface);
 */
  drawSurfaceText: lib.symbols.TTF_DrawSurfaceText,

/**
 * Destroy a text engine created for drawing text on SDL surfaces.
 *
 * All text created by this engine should be destroyed before calling this
 * function.
 *
 * @param engine a TTF_TextEngine object created with
 *               TTF_CreateSurfaceTextEngine().
 *
 * @threadsafety This function should be called on the thread that created the
 *               engine.
 *
 * @since This function is available since SDL_ttf 3.0.0.
 *
 * @sa TTF_CreateSurfaceTextEngine
 *
 * @from SDL_ttf.h:1763 void TTF_DestroySurfaceTextEngine(TTF_TextEngine *engine);
 */
  destroySurfaceTextEngine: lib.symbols.TTF_DestroySurfaceTextEngine,

/**
 * Create a text engine for drawing text on an SDL renderer.
 *
 * @param renderer the renderer to use for creating textures and drawing text.
 * @returns a TTF_TextEngine object or NULL on failure; call SDL_GetError()
 *          for more information.
 *
 * @threadsafety This function should be called on the thread that created the
 *               renderer.
 *
 * @since This function is available since SDL_ttf 3.0.0.
 *
 * @sa TTF_DestroyRendererTextEngine
 * @sa TTF_DrawRendererText
 * @sa TTF_CreateRendererTextEngineWithProperties
 *
 * @from SDL_ttf.h:1781 TTF_TextEngine * TTF_CreateRendererTextEngine(SDL_Renderer *renderer);
 */
  createRendererTextEngine: lib.symbols.TTF_CreateRendererTextEngine,

/**
 * Create a text engine for drawing text on an SDL renderer, with the
 * specified properties.
 *
 * These are the supported properties:
 *
 * - `TTF_PROP_RENDERER_TEXT_ENGINE_RENDERER`: the renderer to use for
 *   creating textures and drawing text
 * - `TTF_PROP_RENDERER_TEXT_ENGINE_ATLAS_TEXTURE_SIZE`: the size of the
 *   texture atlas
 *
 * @param props the properties to use.
 * @returns a TTF_TextEngine object or NULL on failure; call SDL_GetError()
 *          for more information.
 *
 * @threadsafety This function should be called on the thread that created the
 *               renderer.
 *
 * @since This function is available since SDL_ttf 3.0.0.
 *
 * @sa TTF_CreateRendererTextEngine
 * @sa TTF_DestroyRendererTextEngine
 * @sa TTF_DrawRendererText
 *
 * @from SDL_ttf.h:1807 TTF_TextEngine * TTF_CreateRendererTextEngineWithProperties(SDL_PropertiesID props);
 */
  createRendererTextEngineWithProperties: lib.symbols.TTF_CreateRendererTextEngineWithProperties,

/**
 * Draw text to an SDL renderer.
 *
 * `text` must have been created using a TTF_TextEngine from
 * TTF_CreateRendererTextEngine(), and will draw using the renderer passed to
 * that function.
 *
 * @param text the text to draw.
 * @param x the x coordinate in pixels, positive from the left edge towards
 *          the right.
 * @param y the y coordinate in pixels, positive from the top edge towards the
 *          bottom.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function should be called on the thread that created the
 *               text.
 *
 * @since This function is available since SDL_ttf 3.0.0.
 *
 * @sa TTF_CreateRendererTextEngine
 * @sa TTF_CreateText
 *
 * @from SDL_ttf.h:1835 bool TTF_DrawRendererText(TTF_Text *text, float x, float y);
 */
  drawRendererText: lib.symbols.TTF_DrawRendererText,

/**
 * Destroy a text engine created for drawing text on an SDL renderer.
 *
 * All text created by this engine should be destroyed before calling this
 * function.
 *
 * @param engine a TTF_TextEngine object created with
 *               TTF_CreateRendererTextEngine().
 *
 * @threadsafety This function should be called on the thread that created the
 *               engine.
 *
 * @since This function is available since SDL_ttf 3.0.0.
 *
 * @sa TTF_CreateRendererTextEngine
 *
 * @from SDL_ttf.h:1853 void TTF_DestroyRendererTextEngine(TTF_TextEngine *engine);
 */
  destroyRendererTextEngine: lib.symbols.TTF_DestroyRendererTextEngine,

/**
 * Create a text engine for drawing text with the SDL GPU API.
 *
 * @param device the SDL_GPUDevice to use for creating textures and drawing
 *               text.
 * @returns a TTF_TextEngine object or NULL on failure; call SDL_GetError()
 *          for more information.
 *
 * @threadsafety This function should be called on the thread that created the
 *               device.
 *
 * @since This function is available since SDL_ttf 3.0.0.
 *
 * @sa TTF_CreateGPUTextEngineWithProperties
 * @sa TTF_DestroyGPUTextEngine
 * @sa TTF_GetGPUTextDrawData
 *
 * @from SDL_ttf.h:1872 TTF_TextEngine * TTF_CreateGPUTextEngine(SDL_GPUDevice *device);
 */
  createGpuTextEngine: lib.symbols.TTF_CreateGPUTextEngine,

/**
 * Create a text engine for drawing text with the SDL GPU API, with the
 * specified properties.
 *
 * These are the supported properties:
 *
 * - `TTF_PROP_GPU_TEXT_ENGINE_DEVICE`: the SDL_GPUDevice to use for creating
 *   textures and drawing text.
 * - `TTF_PROP_GPU_TEXT_ENGINE_ATLAS_TEXTURE_SIZE`: the size of the texture
 *   atlas
 *
 * @param props the properties to use.
 * @returns a TTF_TextEngine object or NULL on failure; call SDL_GetError()
 *          for more information.
 *
 * @threadsafety This function should be called on the thread that created the
 *               device.
 *
 * @since This function is available since SDL_ttf 3.0.0.
 *
 * @sa TTF_CreateGPUTextEngine
 * @sa TTF_DestroyGPUTextEngine
 * @sa TTF_GetGPUTextDrawData
 *
 * @from SDL_ttf.h:1898 TTF_TextEngine * TTF_CreateGPUTextEngineWithProperties(SDL_PropertiesID props);
 */
  createGpuTextEngineWithProperties: lib.symbols.TTF_CreateGPUTextEngineWithProperties,

/**
 * Get the geometry data needed for drawing the text.
 *
 * `text` must have been created using a TTF_TextEngine from
 * TTF_CreateGPUTextEngine().
 *
 * The positive X-axis is taken towards the right and the positive Y-axis is
 * taken upwards for both the vertex and the texture coordinates, i.e, it
 * follows the same convention used by the SDL_GPU API. If you want to use a
 * different coordinate system you will need to transform the vertices
 * yourself.
 *
 * If the text looks blocky use linear filtering.
 *
 * @param text the text to draw.
 * @returns a NULL terminated linked list of TTF_GPUAtlasDrawSequence objects
 *          or NULL if the passed text is empty or in case of failure; call
 *          SDL_GetError() for more information.
 *
 * @threadsafety This function should be called on the thread that created the
 *               text.
 *
 * @since This function is available since SDL_ttf 3.0.0.
 *
 * @sa TTF_CreateGPUTextEngine
 * @sa TTF_CreateText
 *
 * @from SDL_ttf.h:1950 TTF_GPUAtlasDrawSequence * TTF_GetGPUTextDrawData(TTF_Text *text);
 */
  getGpuTextDrawData: lib.symbols.TTF_GetGPUTextDrawData,

/**
 * Destroy a text engine created for drawing text with the SDL GPU API.
 *
 * All text created by this engine should be destroyed before calling this
 * function.
 *
 * @param engine a TTF_TextEngine object created with
 *               TTF_CreateGPUTextEngine().
 *
 * @threadsafety This function should be called on the thread that created the
 *               engine.
 *
 * @since This function is available since SDL_ttf 3.0.0.
 *
 * @sa TTF_CreateGPUTextEngine
 *
 * @from SDL_ttf.h:1968 void TTF_DestroyGPUTextEngine(TTF_TextEngine *engine);
 */
  destroyGpuTextEngine: lib.symbols.TTF_DestroyGPUTextEngine,

/**
 * Sets the winding order of the vertices returned by TTF_GetGPUTextDrawData
 * for a particular GPU text engine.
 *
 * @param engine a TTF_TextEngine object created with
 *               TTF_CreateGPUTextEngine().
 * @param winding the new winding order option.
 *
 * @threadsafety This function should be called on the thread that created the
 *               engine.
 *
 * @since This function is available since SDL_ttf 3.0.0.
 *
 * @sa TTF_GetGPUTextEngineWinding
 *
 * @from SDL_ttf.h:1997 void TTF_SetGPUTextEngineWinding(TTF_TextEngine *engine, TTF_GPUTextEngineWinding winding);
 */
  setGpuTextEngineWinding: lib.symbols.TTF_SetGPUTextEngineWinding,

/**
 * Get the winding order of the vertices returned by TTF_GetGPUTextDrawData
 * for a particular GPU text engine
 *
 * @param engine a TTF_TextEngine object created with
 *               TTF_CreateGPUTextEngine().
 * @returns the winding order used by the GPU text engine or
 *          TTF_GPU_TEXTENGINE_WINDING_INVALID in case of error.
 *
 * @threadsafety This function should be called on the thread that created the
 *               engine.
 *
 * @since This function is available since SDL_ttf 3.0.0.
 *
 * @sa TTF_SetGPUTextEngineWinding
 *
 * @from SDL_ttf.h:2015 TTF_GPUTextEngineWinding TTF_GetGPUTextEngineWinding(const TTF_TextEngine *engine);
 */
  getGpuTextEngineWinding: lib.symbols.TTF_GetGPUTextEngineWinding,

/**
 * Create a text object from UTF-8 text and a text engine.
 *
 * @param engine the text engine to use when creating the text object, may be
 *               NULL.
 * @param font the font to render with.
 * @param text the text to use, in UTF-8 encoding.
 * @param length the length of the text, in bytes, or 0 for null terminated
 *               text.
 * @returns a TTF_Text object or NULL on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function should be called on the thread that created the
 *               font and text engine.
 *
 * @since This function is available since SDL_ttf 3.0.0.
 *
 * @sa TTF_DestroyText
 *
 * @from SDL_ttf.h:2036 TTF_Text * TTF_CreateText(TTF_TextEngine *engine, TTF_Font *font, const char *text, size_t length);
 */
  createText: lib.symbols.TTF_CreateText,

/**
 * Get the properties associated with a text object.
 *
 * @param text the TTF_Text to query.
 * @returns a valid property ID on success or 0 on failure; call
 *          SDL_GetError() for more information.
 *
 * @threadsafety This function should be called on the thread that created the
 *               text.
 *
 * @since This function is available since SDL_ttf 3.0.0.
 *
 * @from SDL_ttf.h:2050 SDL_PropertiesID TTF_GetTextProperties(TTF_Text *text);
 */
  getTextProperties: lib.symbols.TTF_GetTextProperties,

/**
 * Set the text engine used by a text object.
 *
 * This function may cause the internal text representation to be rebuilt.
 *
 * @param text the TTF_Text to modify.
 * @param engine the text engine to use for drawing.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function should be called on the thread that created the
 *               text.
 *
 * @since This function is available since SDL_ttf 3.0.0.
 *
 * @sa TTF_GetTextEngine
 *
 * @from SDL_ttf.h:2069 bool TTF_SetTextEngine(TTF_Text *text, TTF_TextEngine *engine);
 */
  setTextEngine: lib.symbols.TTF_SetTextEngine,

/**
 * Get the text engine used by a text object.
 *
 * @param text the TTF_Text to query.
 * @returns the TTF_TextEngine used by the text on success or NULL on failure;
 *          call SDL_GetError() for more information.
 *
 * @threadsafety This function should be called on the thread that created the
 *               text.
 *
 * @since This function is available since SDL_ttf 3.0.0.
 *
 * @sa TTF_SetTextEngine
 *
 * @from SDL_ttf.h:2085 TTF_TextEngine * TTF_GetTextEngine(TTF_Text *text);
 */
  getTextEngine: lib.symbols.TTF_GetTextEngine,

/**
 * Set the font used by a text object.
 *
 * When a text object has a font, any changes to the font will automatically
 * regenerate the text. If you set the font to NULL, the text will continue to
 * render but changes to the font will no longer affect the text.
 *
 * This function may cause the internal text representation to be rebuilt.
 *
 * @param text the TTF_Text to modify.
 * @param font the font to use, may be NULL.
 * @returns false if the text pointer is null; otherwise, true. call
 *          SDL_GetError() for more information.
 *
 * @threadsafety This function should be called on the thread that created the
 *               text.
 *
 * @since This function is available since SDL_ttf 3.0.0.
 *
 * @sa TTF_GetTextFont
 *
 * @from SDL_ttf.h:2108 bool TTF_SetTextFont(TTF_Text *text, TTF_Font *font);
 */
  setTextFont: lib.symbols.TTF_SetTextFont,

/**
 * Get the font used by a text object.
 *
 * @param text the TTF_Text to query.
 * @returns the TTF_Font used by the text on success or NULL on failure; call
 *          SDL_GetError() for more information.
 *
 * @threadsafety This function should be called on the thread that created the
 *               text.
 *
 * @since This function is available since SDL_ttf 3.0.0.
 *
 * @sa TTF_SetTextFont
 *
 * @from SDL_ttf.h:2124 TTF_Font * TTF_GetTextFont(TTF_Text *text);
 */
  getTextFont: lib.symbols.TTF_GetTextFont,

/**
 * Set the direction to be used for text shaping a text object.
 *
 * This function only supports left-to-right text shaping if SDL_ttf was not
 * built with HarfBuzz support.
 *
 * @param text the text to modify.
 * @param direction the new direction for text to flow.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function should be called on the thread that created the
 *               text.
 *
 * @since This function is available since SDL_ttf 3.0.0.
 *
 * @from SDL_ttf.h:2142 bool TTF_SetTextDirection(TTF_Text *text, TTF_Direction direction);
 */
  setTextDirection: lib.symbols.TTF_SetTextDirection,

/**
 * Get the direction to be used for text shaping a text object.
 *
 * This defaults to the direction of the font used by the text object.
 *
 * @param text the text to query.
 * @returns the direction to be used for text shaping.
 *
 * @threadsafety This function should be called on the thread that created the
 *               text.
 *
 * @since This function is available since SDL_ttf 3.0.0.
 *
 * @from SDL_ttf.h:2157 TTF_Direction TTF_GetTextDirection(TTF_Text *text);
 */
  getTextDirection: lib.symbols.TTF_GetTextDirection,

/**
 * Set the script to be used for text shaping a text object.
 *
 * This returns false if SDL_ttf isn't built with HarfBuzz support.
 *
 * @param text the text to modify.
 * @param script an
 *               [ISO 15924 code](https://unicode.org/iso15924/iso15924-codes.html)
 *               .
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function should be called on the thread that created the
 *               text.
 *
 * @since This function is available since SDL_ttf 3.0.0.
 *
 * @sa TTF_StringToTag
 *
 * @from SDL_ttf.h:2178 bool TTF_SetTextScript(TTF_Text *text, Uint32 script);
 */
  setTextScript: lib.symbols.TTF_SetTextScript,

/**
 * Get the script used for text shaping a text object.
 *
 * This defaults to the script of the font used by the text object.
 *
 * @param text the text to query.
 * @returns an
 *          [ISO 15924 code](https://unicode.org/iso15924/iso15924-codes.html)
 *          or 0 if a script hasn't been set on either the text object or the
 *          font.
 *
 * @threadsafety This function should be called on the thread that created the
 *               text.
 *
 * @since This function is available since SDL_ttf 3.0.0.
 *
 * @sa TTF_TagToString
 *
 * @from SDL_ttf.h:2198 Uint32 TTF_GetTextScript(TTF_Text *text);
 */
  getTextScript: lib.symbols.TTF_GetTextScript,

/**
 * Set the color of a text object.
 *
 * The default text color is white (255, 255, 255, 255).
 *
 * @param text the TTF_Text to modify.
 * @param r the red color value in the range of 0-255.
 * @param g the green color value in the range of 0-255.
 * @param b the blue color value in the range of 0-255.
 * @param a the alpha value in the range of 0-255.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function should be called on the thread that created the
 *               text.
 *
 * @since This function is available since SDL_ttf 3.0.0.
 *
 * @sa TTF_GetTextColor
 * @sa TTF_SetTextColorFloat
 *
 * @from SDL_ttf.h:2221 bool TTF_SetTextColor(TTF_Text *text, Uint8 r, Uint8 g, Uint8 b, Uint8 a);
 */
  setTextColor: lib.symbols.TTF_SetTextColor,

/**
 * Set the color of a text object.
 *
 * The default text color is white (1.0f, 1.0f, 1.0f, 1.0f).
 *
 * @param text the TTF_Text to modify.
 * @param r the red color value, normally in the range of 0-1.
 * @param g the green color value, normally in the range of 0-1.
 * @param b the blue color value, normally in the range of 0-1.
 * @param a the alpha value in the range of 0-1.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function should be called on the thread that created the
 *               text.
 *
 * @since This function is available since SDL_ttf 3.0.0.
 *
 * @sa TTF_GetTextColorFloat
 * @sa TTF_SetTextColor
 *
 * @from SDL_ttf.h:2244 bool TTF_SetTextColorFloat(TTF_Text *text, float r, float g, float b, float a);
 */
  setTextColorFloat: lib.symbols.TTF_SetTextColorFloat,

/**
 * Get the color of a text object.
 *
 * @param text the TTF_Text to query.
 * @param r a pointer filled in with the red color value in the range of
 *          0-255, may be NULL.
 * @param g a pointer filled in with the green color value in the range of
 *          0-255, may be NULL.
 * @param b a pointer filled in with the blue color value in the range of
 *          0-255, may be NULL.
 * @param a a pointer filled in with the alpha value in the range of 0-255,
 *          may be NULL.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function should be called on the thread that created the
 *               text.
 *
 * @since This function is available since SDL_ttf 3.0.0.
 *
 * @sa TTF_GetTextColorFloat
 * @sa TTF_SetTextColor
 *
 * @from SDL_ttf.h:2269 bool TTF_GetTextColor(TTF_Text *text, Uint8 *r, Uint8 *g, Uint8 *b, Uint8 *a);
 */
  getTextColor: lib.symbols.TTF_GetTextColor,

/**
 * Get the color of a text object.
 *
 * @param text the TTF_Text to query.
 * @param r a pointer filled in with the red color value, normally in the
 *          range of 0-1, may be NULL.
 * @param g a pointer filled in with the green color value, normally in the
 *          range of 0-1, may be NULL.
 * @param b a pointer filled in with the blue color value, normally in the
 *          range of 0-1, may be NULL.
 * @param a a pointer filled in with the alpha value in the range of 0-1, may
 *          be NULL.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function should be called on the thread that created the
 *               text.
 *
 * @since This function is available since SDL_ttf 3.0.0.
 *
 * @sa TTF_GetTextColor
 * @sa TTF_SetTextColorFloat
 *
 * @from SDL_ttf.h:2294 bool TTF_GetTextColorFloat(TTF_Text *text, float *r, float *g, float *b, float *a);
 */
  getTextColorFloat: lib.symbols.TTF_GetTextColorFloat,

/**
 * Set the position of a text object.
 *
 * This can be used to position multiple text objects within a single wrapping
 * text area.
 *
 * This function may cause the internal text representation to be rebuilt.
 *
 * @param text the TTF_Text to modify.
 * @param x the x offset of the upper left corner of this text in pixels.
 * @param y the y offset of the upper left corner of this text in pixels.
 *
 * @threadsafety This function should be called on the thread that created the
 *               text.
 *
 * @since This function is available since SDL_ttf 3.0.0.
 *
 * @sa TTF_GetTextPosition
 *
 * @from SDL_ttf.h:2315 bool TTF_SetTextPosition(TTF_Text *text, int x, int y);
 */
  setTextPosition: lib.symbols.TTF_SetTextPosition,

/**
 * Get the position of a text object.
 *
 * @param text the TTF_Text to query.
 * @param x a pointer filled in with the x offset of the upper left corner of
 *          this text in pixels, may be NULL.
 * @param y a pointer filled in with the y offset of the upper left corner of
 *          this text in pixels, may be NULL.
 *
 * @threadsafety This function should be called on the thread that created the
 *               text.
 *
 * @since This function is available since SDL_ttf 3.0.0.
 *
 * @sa TTF_SetTextPosition
 *
 * @from SDL_ttf.h:2333 bool TTF_GetTextPosition(TTF_Text *text, int *x, int *y);
 */
  getTextPosition: lib.symbols.TTF_GetTextPosition,

/**
 * Set whether wrapping is enabled on a text object.
 *
 * This function may cause the internal text representation to be rebuilt.
 *
 * @param text the TTF_Text to modify.
 * @param wrap_width the maximum width in pixels, 0 to wrap on newline
 *                   characters.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function should be called on the thread that created the
 *               text.
 *
 * @since This function is available since SDL_ttf 3.0.0.
 *
 * @sa TTF_GetTextWrapWidth
 *
 * @from SDL_ttf.h:2353 bool TTF_SetTextWrapWidth(TTF_Text *text, int wrap_width);
 */
  setTextWrapWidth: lib.symbols.TTF_SetTextWrapWidth,

/**
 * Get whether wrapping is enabled on a text object.
 *
 * @param text the TTF_Text to query.
 * @param wrap_width a pointer filled in with the maximum width in pixels or 0
 *                   if the text is being wrapped on newline characters.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function should be called on the thread that created the
 *               text.
 *
 * @since This function is available since SDL_ttf 3.0.0.
 *
 * @sa TTF_SetTextWrapWidth
 *
 * @from SDL_ttf.h:2371 bool TTF_GetTextWrapWidth(TTF_Text *text, int *wrap_width);
 */
  getTextWrapWidth: lib.symbols.TTF_GetTextWrapWidth,

/**
 * Set whether whitespace should be visible when wrapping a text object.
 *
 * If the whitespace is visible, it will take up space for purposes of
 * alignment and wrapping. This is good for editing, but looks better when
 * centered or aligned if whitespace around line wrapping is hidden. This
 * defaults false.
 *
 * This function may cause the internal text representation to be rebuilt.
 *
 * @param text the TTF_Text to modify.
 * @param visible true to show whitespace when wrapping text, false to hide
 *                it.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function should be called on the thread that created the
 *               text.
 *
 * @since This function is available since SDL_ttf 3.0.0.
 *
 * @sa TTF_TextWrapWhitespaceVisible
 *
 * @from SDL_ttf.h:2396 bool TTF_SetTextWrapWhitespaceVisible(TTF_Text *text, bool visible);
 */
  setTextWrapWhitespaceVisible: lib.symbols.TTF_SetTextWrapWhitespaceVisible,

/**
 * Return whether whitespace is shown when wrapping a text object.
 *
 * @param text the TTF_Text to query.
 * @returns true if whitespace is shown when wrapping text, or false
 *          otherwise.
 *
 * @threadsafety This function should be called on the thread that created the
 *               text.
 *
 * @since This function is available since SDL_ttf 3.0.0.
 *
 * @sa TTF_SetTextWrapWhitespaceVisible
 *
 * @from SDL_ttf.h:2412 bool TTF_TextWrapWhitespaceVisible(TTF_Text *text);
 */
  textWrapWhitespaceVisible: lib.symbols.TTF_TextWrapWhitespaceVisible,

/**
 * Set the UTF-8 text used by a text object.
 *
 * This function may cause the internal text representation to be rebuilt.
 *
 * @param text the TTF_Text to modify.
 * @param string the UTF-8 text to use, may be NULL.
 * @param length the length of the text, in bytes, or 0 for null terminated
 *               text.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function should be called on the thread that created the
 *               text.
 *
 * @since This function is available since SDL_ttf 3.0.0.
 *
 * @sa TTF_AppendTextString
 * @sa TTF_DeleteTextString
 * @sa TTF_InsertTextString
 *
 * @from SDL_ttf.h:2435 bool TTF_SetTextString(TTF_Text *text, const char *string, size_t length);
 */
  setTextString: lib.symbols.TTF_SetTextString,

/**
 * Insert UTF-8 text into a text object.
 *
 * This function may cause the internal text representation to be rebuilt.
 *
 * @param text the TTF_Text to modify.
 * @param offset the offset, in bytes, from the beginning of the string if >=
 *               0, the offset from the end of the string if < 0. Note that
 *               this does not do UTF-8 validation, so you should only insert
 *               at UTF-8 sequence boundaries.
 * @param string the UTF-8 text to insert.
 * @param length the length of the text, in bytes, or 0 for null terminated
 *               text.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function should be called on the thread that created the
 *               text.
 *
 * @since This function is available since SDL_ttf 3.0.0.
 *
 * @sa TTF_AppendTextString
 * @sa TTF_DeleteTextString
 * @sa TTF_SetTextString
 *
 * @from SDL_ttf.h:2462 bool TTF_InsertTextString(TTF_Text *text, int offset, const char *string, size_t length);
 */
  insertTextString: lib.symbols.TTF_InsertTextString,

/**
 * Append UTF-8 text to a text object.
 *
 * This function may cause the internal text representation to be rebuilt.
 *
 * @param text the TTF_Text to modify.
 * @param string the UTF-8 text to insert.
 * @param length the length of the text, in bytes, or 0 for null terminated
 *               text.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function should be called on the thread that created the
 *               text.
 *
 * @since This function is available since SDL_ttf 3.0.0.
 *
 * @sa TTF_DeleteTextString
 * @sa TTF_InsertTextString
 * @sa TTF_SetTextString
 *
 * @from SDL_ttf.h:2485 bool TTF_AppendTextString(TTF_Text *text, const char *string, size_t length);
 */
  appendTextString: lib.symbols.TTF_AppendTextString,

/**
 * Delete UTF-8 text from a text object.
 *
 * This function may cause the internal text representation to be rebuilt.
 *
 * @param text the TTF_Text to modify.
 * @param offset the offset, in bytes, from the beginning of the string if >=
 *               0, the offset from the end of the string if < 0. Note that
 *               this does not do UTF-8 validation, so you should only delete
 *               at UTF-8 sequence boundaries.
 * @param length the length of text to delete, in bytes, or -1 for the
 *               remainder of the string.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function should be called on the thread that created the
 *               text.
 *
 * @since This function is available since SDL_ttf 3.0.0.
 *
 * @sa TTF_AppendTextString
 * @sa TTF_InsertTextString
 * @sa TTF_SetTextString
 *
 * @from SDL_ttf.h:2511 bool TTF_DeleteTextString(TTF_Text *text, int offset, int length);
 */
  deleteTextString: lib.symbols.TTF_DeleteTextString,

/**
 * Get the size of a text object.
 *
 * The size of the text may change when the font or font style and size
 * change.
 *
 * @param text the TTF_Text to query.
 * @param w a pointer filled in with the width of the text, in pixels, may be
 *          NULL.
 * @param h a pointer filled in with the height of the text, in pixels, may be
 *          NULL.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function should be called on the thread that created the
 *               text.
 *
 * @since This function is available since SDL_ttf 3.0.0.
 *
 * @from SDL_ttf.h:2532 bool TTF_GetTextSize(TTF_Text *text, int *w, int *h);
 */
  getTextSize: lib.symbols.TTF_GetTextSize,

/**
 * Get the substring of a text object that surrounds a text offset.
 *
 * If `offset` is less than 0, this will return a zero length substring at the
 * beginning of the text with the TTF_SUBSTRING_TEXT_START flag set. If
 * `offset` is greater than or equal to the length of the text string, this
 * will return a zero length substring at the end of the text with the
 * TTF_SUBSTRING_TEXT_END flag set.
 *
 * @param text the TTF_Text to query.
 * @param offset a byte offset into the text string.
 * @param substring a pointer filled in with the substring containing the
 *                  offset.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function should be called on the thread that created the
 *               text.
 *
 * @since This function is available since SDL_ttf 3.0.0.
 *
 * @from SDL_ttf.h:2592 bool TTF_GetTextSubString(TTF_Text *text, int offset, TTF_SubString *substring);
 */
  getTextSubString: lib.symbols.TTF_GetTextSubString,

/**
 * Get the substring of a text object that contains the given line.
 *
 * If `line` is less than 0, this will return a zero length substring at the
 * beginning of the text with the TTF_SUBSTRING_TEXT_START flag set. If `line`
 * is greater than or equal to `text->num_lines` this will return a zero
 * length substring at the end of the text with the TTF_SUBSTRING_TEXT_END
 * flag set.
 *
 * @param text the TTF_Text to query.
 * @param line a zero-based line index, in the range [0 .. text->num_lines-1].
 * @param substring a pointer filled in with the substring containing the
 *                  offset.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function should be called on the thread that created the
 *               text.
 *
 * @since This function is available since SDL_ttf 3.0.0.
 *
 * @from SDL_ttf.h:2615 bool TTF_GetTextSubStringForLine(TTF_Text *text, int line, TTF_SubString *substring);
 */
  getTextSubStringForLine: lib.symbols.TTF_GetTextSubStringForLine,

/**
 * Get the substrings of a text object that contain a range of text.
 *
 * @param text the TTF_Text to query.
 * @param offset a byte offset into the text string.
 * @param length the length of the range being queried, in bytes, or -1 for
 *               the remainder of the string.
 * @param count a pointer filled in with the number of substrings returned,
 *              may be NULL.
 * @returns a NULL terminated array of substring pointers or NULL on failure;
 *          call SDL_GetError() for more information. This is a single
 *          allocation that should be freed with SDL_free() when it is no
 *          longer needed.
 *
 * @threadsafety This function should be called on the thread that created the
 *               text.
 *
 * @since This function is available since SDL_ttf 3.0.0.
 *
 * @from SDL_ttf.h:2636 TTF_SubString ** TTF_GetTextSubStringsForRange(TTF_Text *text, int offset, int length, int *count);
 */
  getTextSubStringsForRange: lib.symbols.TTF_GetTextSubStringsForRange,

/**
 * Get the portion of a text string that is closest to a point.
 *
 * This will return the closest substring of text to the given point.
 *
 * @param text the TTF_Text to query.
 * @param x the x coordinate relative to the left side of the text, may be
 *          outside the bounds of the text area.
 * @param y the y coordinate relative to the top side of the text, may be
 *          outside the bounds of the text area.
 * @param substring a pointer filled in with the closest substring of text to
 *                  the given point.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function should be called on the thread that created the
 *               text.
 *
 * @since This function is available since SDL_ttf 3.0.0.
 *
 * @from SDL_ttf.h:2658 bool TTF_GetTextSubStringForPoint(TTF_Text *text, int x, int y, TTF_SubString *substring);
 */
  getTextSubStringForPoint: lib.symbols.TTF_GetTextSubStringForPoint,

/**
 * Get the previous substring in a text object
 *
 * If called at the start of the text, this will return a zero length
 * substring with the TTF_SUBSTRING_TEXT_START flag set.
 *
 * @param text the TTF_Text to query.
 * @param substring the TTF_SubString to query.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function should be called on the thread that created the
 *               text.
 *
 * @since This function is available since SDL_ttf 3.0.0.
 *
 * @from SDL_ttf.h:2676 bool TTF_GetPreviousTextSubString(TTF_Text *text, const TTF_SubString *substring, TTF_SubString *previous);
 */
  getPreviousTextSubString: lib.symbols.TTF_GetPreviousTextSubString,

/**
 * Get the next substring in a text object
 *
 * If called at the end of the text, this will return a zero length substring
 * with the TTF_SUBSTRING_TEXT_END flag set.
 *
 * @param text the TTF_Text to query.
 * @param substring the TTF_SubString to query.
 * @param next a pointer filled in with the next substring.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function should be called on the thread that created the
 *               text.
 *
 * @since This function is available since SDL_ttf 3.0.0.
 *
 * @from SDL_ttf.h:2695 bool TTF_GetNextTextSubString(TTF_Text *text, const TTF_SubString *substring, TTF_SubString *next);
 */
  getNextTextSubString: lib.symbols.TTF_GetNextTextSubString,

/**
 * Update the layout of a text object.
 *
 * This is automatically done when the layout is requested or the text is
 * rendered, but you can call this if you need more control over the timing of
 * when the layout and text engine representation are updated.
 *
 * @param text the TTF_Text to update.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function should be called on the thread that created the
 *               text.
 *
 * @since This function is available since SDL_ttf 3.0.0.
 *
 * @from SDL_ttf.h:2713 bool TTF_UpdateText(TTF_Text *text);
 */
  updateText: lib.symbols.TTF_UpdateText,

/**
 * Destroy a text object created by a text engine.
 *
 * @param text the text to destroy.
 *
 * @threadsafety This function should be called on the thread that created the
 *               text.
 *
 * @since This function is available since SDL_ttf 3.0.0.
 *
 * @sa TTF_CreateText
 *
 * @from SDL_ttf.h:2727 void TTF_DestroyText(TTF_Text *text);
 */
  destroyText: lib.symbols.TTF_DestroyText,

/**
 * Dispose of a previously-created font.
 *
 * Call this when done with a font. This function will free any resources
 * associated with it. It is safe to call this function on NULL, for example
 * on the result of a failed call to TTF_OpenFont().
 *
 * The font is not valid after being passed to this function. String pointers
 * from functions that return information on this font, such as
 * TTF_GetFontFamilyName() and TTF_GetFontStyleName(), are no longer valid
 * after this call, as well.
 *
 * @param font the font to dispose of.
 *
 * @threadsafety This function should not be called while any other thread is
 *               using the font.
 *
 * @since This function is available since SDL_ttf 3.0.0.
 *
 * @sa TTF_OpenFont
 * @sa TTF_OpenFontIO
 *
 * @from SDL_ttf.h:2751 void TTF_CloseFont(TTF_Font *font);
 */
  closeFont: lib.symbols.TTF_CloseFont,

/**
 * Deinitialize SDL_ttf.
 *
 * You must call this when done with the library, to free internal resources.
 * It is safe to call this when the library isn't initialized, as it will just
 * return immediately.
 *
 * Once you have as many quit calls as you have had successful calls to
 * TTF_Init, the library will actually deinitialize.
 *
 * Please note that this does not automatically close any fonts that are still
 * open at the time of deinitialization, and it is possibly not safe to close
 * them afterwards, as parts of the library will no longer be initialized to
 * deal with it. A well-written program should call TTF_CloseFont() on any
 * open fonts before calling this function!
 *
 * @threadsafety It is safe to call this function from any thread.
 *
 * @since This function is available since SDL_ttf 3.0.0.
 *
 * @from SDL_ttf.h:2773 void TTF_Quit(void);
 */
  quit: lib.symbols.TTF_Quit,

/**
 * Check if SDL_ttf is initialized.
 *
 * This reports the number of times the library has been initialized by a call
 * to TTF_Init(), without a paired deinitialization request from TTF_Quit().
 *
 * In short: if it's greater than zero, the library is currently initialized
 * and ready to work. If zero, it is not initialized.
 *
 * Despite the return value being a signed integer, this function should not
 * return a negative number.
 *
 * @returns the current number of initialization calls, that need to
 *          eventually be paired with this many calls to TTF_Quit().
 *
 * @threadsafety It is safe to call this function from any thread.
 *
 * @since This function is available since SDL_ttf 3.0.0.
 *
 * @sa TTF_Init
 * @sa TTF_Quit
 *
 * @from SDL_ttf.h:2797 int TTF_WasInit(void);
 */
  wasInit: lib.symbols.TTF_WasInit,

};
