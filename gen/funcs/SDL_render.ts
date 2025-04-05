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
 */

export const symbols = {

/**
 * Get the number of 2D rendering drivers available for the current display.
 *
 * A render driver is a set of code that handles rendering and texture
 * management on a particular display. Normally there is only one, but some
 * drivers may have several available with different capabilities.
 *
 * There may be none if SDL was compiled without render support.
 *
 * @returns the number of built in render drivers.
 *
 * @threadsafety It is safe to call this function from any thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_CreateRenderer
 * @sa SDL_GetRenderDriver
 *
 * @from SDL_render.h:164 int SDL_GetNumRenderDrivers(void);
 */
SDL_GetNumRenderDrivers: {
      parameters: [],
      result: "i32"
    },


/**
 * Use this function to get the name of a built in 2D rendering driver.
 *
 * The list of rendering drivers is given in the order that they are normally
 * initialized by default; the drivers that seem more reasonable to choose
 * first (as far as the SDL developers believe) are earlier in the list.
 *
 * The names of drivers are all simple, low-ASCII identifiers, like "opengl",
 * "direct3d12" or "metal". These never have Unicode characters, and are not
 * meant to be proper names.
 *
 * @param index the index of the rendering driver; the value ranges from 0 to
 *              SDL_GetNumRenderDrivers() - 1.
 * @returns the name of the rendering driver at the requested index, or NULL
 *          if an invalid index was specified.
 *
 * @threadsafety It is safe to call this function from any thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_GetNumRenderDrivers
 *
 * @from SDL_render.h:188 const char * SDL_GetRenderDriver(int index);
 */
SDL_GetRenderDriver: {
      parameters: ["i32"],
      result: "pointer"
    },


/**
 * Create a window and default renderer.
 *
 * @param title the title of the window, in UTF-8 encoding.
 * @param width the width of the window.
 * @param height the height of the window.
 * @param window_flags the flags used to create the window (see
 *                     SDL_CreateWindow()).
 * @param window a pointer filled with the window, or NULL on error.
 * @param renderer a pointer filled with the renderer, or NULL on error.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function should only be called on the main thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_CreateRenderer
 * @sa SDL_CreateWindow
 *
 * @from SDL_render.h:210 bool SDL_CreateWindowAndRenderer(const char *title, int width, int height, SDL_WindowFlags window_flags, SDL_Window **window, SDL_Renderer **renderer);
 */
SDL_CreateWindowAndRenderer: {
      parameters: ["pointer", "i32", "i32", "u64", "pointer", "pointer"],
      result: "bool"
    },


/**
 * Create a 2D rendering context for a window.
 *
 * If you want a specific renderer, you can specify its name here. A list of
 * available renderers can be obtained by calling SDL_GetRenderDriver()
 * multiple times, with indices from 0 to SDL_GetNumRenderDrivers()-1. If you
 * don't need a specific renderer, specify NULL and SDL will attempt to choose
 * the best option for you, based on what is available on the user's system.
 *
 * If `name` is a comma-separated list, SDL will try each name, in the order
 * listed, until one succeeds or all of them fail.
 *
 * By default the rendering size matches the window size in pixels, but you
 * can call SDL_SetRenderLogicalPresentation() to change the content size and
 * scaling options.
 *
 * @param window the window where rendering is displayed.
 * @param name the name of the rendering driver to initialize, or NULL to let
 *             SDL choose one.
 * @returns a valid rendering context or NULL if there was an error; call
 *          SDL_GetError() for more information.
 *
 * @threadsafety This function should only be called on the main thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_CreateRendererWithProperties
 * @sa SDL_CreateSoftwareRenderer
 * @sa SDL_DestroyRenderer
 * @sa SDL_GetNumRenderDrivers
 * @sa SDL_GetRenderDriver
 * @sa SDL_GetRendererName
 *
 * @from SDL_render.h:245 SDL_Renderer * SDL_CreateRenderer(SDL_Window *window, const char *name);
 */
SDL_CreateRenderer: {
      parameters: ["pointer", "pointer"],
      result: "pointer"
    },


/**
 * Create a 2D rendering context for a window, with the specified properties.
 *
 * These are the supported properties:
 *
 * - `SDL_PROP_RENDERER_CREATE_NAME_STRING`: the name of the rendering driver
 *   to use, if a specific one is desired
 * - `SDL_PROP_RENDERER_CREATE_WINDOW_POINTER`: the window where rendering is
 *   displayed, required if this isn't a software renderer using a surface
 * - `SDL_PROP_RENDERER_CREATE_SURFACE_POINTER`: the surface where rendering
 *   is displayed, if you want a software renderer without a window
 * - `SDL_PROP_RENDERER_CREATE_OUTPUT_COLORSPACE_NUMBER`: an SDL_Colorspace
 *   value describing the colorspace for output to the display, defaults to
 *   SDL_COLORSPACE_SRGB. The direct3d11, direct3d12, and metal renderers
 *   support SDL_COLORSPACE_SRGB_LINEAR, which is a linear color space and
 *   supports HDR output. If you select SDL_COLORSPACE_SRGB_LINEAR, drawing
 *   still uses the sRGB colorspace, but values can go beyond 1.0 and float
 *   (linear) format textures can be used for HDR content.
 * - `SDL_PROP_RENDERER_CREATE_PRESENT_VSYNC_NUMBER`: non-zero if you want
 *   present synchronized with the refresh rate. This property can take any
 *   value that is supported by SDL_SetRenderVSync() for the renderer.
 *
 * With the vulkan renderer:
 *
 * - `SDL_PROP_RENDERER_CREATE_VULKAN_INSTANCE_POINTER`: the VkInstance to use
 *   with the renderer, optional.
 * - `SDL_PROP_RENDERER_CREATE_VULKAN_SURFACE_NUMBER`: the VkSurfaceKHR to use
 *   with the renderer, optional.
 * - `SDL_PROP_RENDERER_CREATE_VULKAN_PHYSICAL_DEVICE_POINTER`: the
 *   VkPhysicalDevice to use with the renderer, optional.
 * - `SDL_PROP_RENDERER_CREATE_VULKAN_DEVICE_POINTER`: the VkDevice to use
 *   with the renderer, optional.
 * - `SDL_PROP_RENDERER_CREATE_VULKAN_GRAPHICS_QUEUE_FAMILY_INDEX_NUMBER`: the
 *   queue family index used for rendering.
 * - `SDL_PROP_RENDERER_CREATE_VULKAN_PRESENT_QUEUE_FAMILY_INDEX_NUMBER`: the
 *   queue family index used for presentation.
 *
 * @param props the properties to use.
 * @returns a valid rendering context or NULL if there was an error; call
 *          SDL_GetError() for more information.
 *
 * @threadsafety This function should only be called on the main thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_CreateProperties
 * @sa SDL_CreateRenderer
 * @sa SDL_CreateSoftwareRenderer
 * @sa SDL_DestroyRenderer
 * @sa SDL_GetRendererName
 *
 * @from SDL_render.h:298 SDL_Renderer * SDL_CreateRendererWithProperties(SDL_PropertiesID props);
 */
SDL_CreateRendererWithProperties: {
      parameters: ["u32"],
      result: "pointer"
    },


/**
 * Create a 2D software rendering context for a surface.
 *
 * Two other API which can be used to create SDL_Renderer:
 * SDL_CreateRenderer() and SDL_CreateWindowAndRenderer(). These can _also_
 * create a software renderer, but they are intended to be used with an
 * SDL_Window as the final destination and not an SDL_Surface.
 *
 * @param surface the SDL_Surface structure representing the surface where
 *                rendering is done.
 * @returns a valid rendering context or NULL if there was an error; call
 *          SDL_GetError() for more information.
 *
 * @threadsafety This function should only be called on the main thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_DestroyRenderer
 *
 * @from SDL_render.h:331 SDL_Renderer * SDL_CreateSoftwareRenderer(SDL_Surface *surface);
 */
SDL_CreateSoftwareRenderer: {
      parameters: ["pointer"],
      result: "pointer"
    },


/**
 * Get the renderer associated with a window.
 *
 * @param window the window to query.
 * @returns the rendering context on success or NULL on failure; call
 *          SDL_GetError() for more information.
 *
 * @threadsafety It is safe to call this function from any thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @from SDL_render.h:344 SDL_Renderer * SDL_GetRenderer(SDL_Window *window);
 */
SDL_GetRenderer: {
      parameters: ["pointer"],
      result: "pointer"
    },


/**
 * Get the window associated with a renderer.
 *
 * @param renderer the renderer to query.
 * @returns the window on success or NULL on failure; call SDL_GetError() for
 *          more information.
 *
 * @threadsafety It is safe to call this function from any thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @from SDL_render.h:357 SDL_Window * SDL_GetRenderWindow(SDL_Renderer *renderer);
 */
SDL_GetRenderWindow: {
      parameters: ["pointer"],
      result: "pointer"
    },


/**
 * Get the name of a renderer.
 *
 * @param renderer the rendering context.
 * @returns the name of the selected renderer, or NULL on failure; call
 *          SDL_GetError() for more information.
 *
 * @threadsafety It is safe to call this function from any thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_CreateRenderer
 * @sa SDL_CreateRendererWithProperties
 *
 * @from SDL_render.h:373 const char * SDL_GetRendererName(SDL_Renderer *renderer);
 */
SDL_GetRendererName: {
      parameters: ["pointer"],
      result: "pointer"
    },


/**
 * Get the properties associated with a renderer.
 *
 * The following read-only properties are provided by SDL:
 *
 * - `SDL_PROP_RENDERER_NAME_STRING`: the name of the rendering driver
 * - `SDL_PROP_RENDERER_WINDOW_POINTER`: the window where rendering is
 *   displayed, if any
 * - `SDL_PROP_RENDERER_SURFACE_POINTER`: the surface where rendering is
 *   displayed, if this is a software renderer without a window
 * - `SDL_PROP_RENDERER_VSYNC_NUMBER`: the current vsync setting
 * - `SDL_PROP_RENDERER_MAX_TEXTURE_SIZE_NUMBER`: the maximum texture width
 *   and height
 * - `SDL_PROP_RENDERER_TEXTURE_FORMATS_POINTER`: a (const SDL_PixelFormat *)
 *   array of pixel formats, terminated with SDL_PIXELFORMAT_UNKNOWN,
 *   representing the available texture formats for this renderer.
 * - `SDL_PROP_RENDERER_OUTPUT_COLORSPACE_NUMBER`: an SDL_Colorspace value
 *   describing the colorspace for output to the display, defaults to
 *   SDL_COLORSPACE_SRGB.
 * - `SDL_PROP_RENDERER_HDR_ENABLED_BOOLEAN`: true if the output colorspace is
 *   SDL_COLORSPACE_SRGB_LINEAR and the renderer is showing on a display with
 *   HDR enabled. This property can change dynamically when
 *   SDL_EVENT_WINDOW_HDR_STATE_CHANGED is sent.
 * - `SDL_PROP_RENDERER_SDR_WHITE_POINT_FLOAT`: the value of SDR white in the
 *   SDL_COLORSPACE_SRGB_LINEAR colorspace. When HDR is enabled, this value is
 *   automatically multiplied into the color scale. This property can change
 *   dynamically when SDL_EVENT_WINDOW_HDR_STATE_CHANGED is sent.
 * - `SDL_PROP_RENDERER_HDR_HEADROOM_FLOAT`: the additional high dynamic range
 *   that can be displayed, in terms of the SDR white point. When HDR is not
 *   enabled, this will be 1.0. This property can change dynamically when
 *   SDL_EVENT_WINDOW_HDR_STATE_CHANGED is sent.
 *
 * With the direct3d renderer:
 *
 * - `SDL_PROP_RENDERER_D3D9_DEVICE_POINTER`: the IDirect3DDevice9 associated
 *   with the renderer
 *
 * With the direct3d11 renderer:
 *
 * - `SDL_PROP_RENDERER_D3D11_DEVICE_POINTER`: the ID3D11Device associated
 *   with the renderer
 * - `SDL_PROP_RENDERER_D3D11_SWAPCHAIN_POINTER`: the IDXGISwapChain1
 *   associated with the renderer. This may change when the window is resized.
 *
 * With the direct3d12 renderer:
 *
 * - `SDL_PROP_RENDERER_D3D12_DEVICE_POINTER`: the ID3D12Device associated
 *   with the renderer
 * - `SDL_PROP_RENDERER_D3D12_SWAPCHAIN_POINTER`: the IDXGISwapChain4
 *   associated with the renderer.
 * - `SDL_PROP_RENDERER_D3D12_COMMAND_QUEUE_POINTER`: the ID3D12CommandQueue
 *   associated with the renderer
 *
 * With the vulkan renderer:
 *
 * - `SDL_PROP_RENDERER_VULKAN_INSTANCE_POINTER`: the VkInstance associated
 *   with the renderer
 * - `SDL_PROP_RENDERER_VULKAN_SURFACE_NUMBER`: the VkSurfaceKHR associated
 *   with the renderer
 * - `SDL_PROP_RENDERER_VULKAN_PHYSICAL_DEVICE_POINTER`: the VkPhysicalDevice
 *   associated with the renderer
 * - `SDL_PROP_RENDERER_VULKAN_DEVICE_POINTER`: the VkDevice associated with
 *   the renderer
 * - `SDL_PROP_RENDERER_VULKAN_GRAPHICS_QUEUE_FAMILY_INDEX_NUMBER`: the queue
 *   family index used for rendering
 * - `SDL_PROP_RENDERER_VULKAN_PRESENT_QUEUE_FAMILY_INDEX_NUMBER`: the queue
 *   family index used for presentation
 * - `SDL_PROP_RENDERER_VULKAN_SWAPCHAIN_IMAGE_COUNT_NUMBER`: the number of
 *   swapchain images, or potential frames in flight, used by the Vulkan
 *   renderer
 *
 * With the gpu renderer:
 *
 * - `SDL_PROP_RENDERER_GPU_DEVICE_POINTER`: the SDL_GPUDevice associated with
 *   the renderer
 *
 * @param renderer the rendering context.
 * @returns a valid property ID on success or 0 on failure; call
 *          SDL_GetError() for more information.
 *
 * @threadsafety It is safe to call this function from any thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @from SDL_render.h:459 SDL_PropertiesID SDL_GetRendererProperties(SDL_Renderer *renderer);
 */
SDL_GetRendererProperties: {
      parameters: ["pointer"],
      result: "u32"
    },


/**
 * Get the output size in pixels of a rendering context.
 *
 * This returns the true output size in pixels, ignoring any render targets or
 * logical size and presentation.
 *
 * For the output size of the current rendering target, with logical size
 * adjustments, use SDL_GetCurrentRenderOutputSize() instead.
 *
 * @param renderer the rendering context.
 * @param w a pointer filled in with the width in pixels.
 * @param h a pointer filled in with the height in pixels.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function should only be called on the main thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_GetCurrentRenderOutputSize
 *
 * @from SDL_render.h:507 bool SDL_GetRenderOutputSize(SDL_Renderer *renderer, int *w, int *h);
 */
SDL_GetRenderOutputSize: {
      parameters: ["pointer", "pointer", "pointer"],
      result: "bool"
    },


/**
 * Get the current output size in pixels of a rendering context.
 *
 * If a rendering target is active, this will return the size of the rendering
 * target in pixels, otherwise return the value of SDL_GetRenderOutputSize().
 *
 * Rendering target or not, the output will be adjusted by the current logical
 * presentation state, dictated by SDL_SetRenderLogicalPresentation().
 *
 * @param renderer the rendering context.
 * @param w a pointer filled in with the current width.
 * @param h a pointer filled in with the current height.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function should only be called on the main thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_GetRenderOutputSize
 *
 * @from SDL_render.h:530 bool SDL_GetCurrentRenderOutputSize(SDL_Renderer *renderer, int *w, int *h);
 */
SDL_GetCurrentRenderOutputSize: {
      parameters: ["pointer", "pointer", "pointer"],
      result: "bool"
    },


/**
 * Create a texture for a rendering context.
 *
 * The contents of a texture when first created are not defined.
 *
 * @param renderer the rendering context.
 * @param format one of the enumerated values in SDL_PixelFormat.
 * @param access one of the enumerated values in SDL_TextureAccess.
 * @param w the width of the texture in pixels.
 * @param h the height of the texture in pixels.
 * @returns the created texture or NULL on failure; call SDL_GetError() for
 *          more information.
 *
 * @threadsafety This function should only be called on the main thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_CreateTextureFromSurface
 * @sa SDL_CreateTextureWithProperties
 * @sa SDL_DestroyTexture
 * @sa SDL_GetTextureSize
 * @sa SDL_UpdateTexture
 *
 * @from SDL_render.h:555 SDL_Texture * SDL_CreateTexture(SDL_Renderer *renderer, SDL_PixelFormat format, SDL_TextureAccess access, int w, int h);
 */
SDL_CreateTexture: {
      parameters: ["pointer", "u32", "u32", "i32", "i32"],
      result: "pointer"
    },


/**
 * Create a texture from an existing surface.
 *
 * The surface is not modified or freed by this function.
 *
 * The SDL_TextureAccess hint for the created texture is
 * `SDL_TEXTUREACCESS_STATIC`.
 *
 * The pixel format of the created texture may be different from the pixel
 * format of the surface, and can be queried using the
 * SDL_PROP_TEXTURE_FORMAT_NUMBER property.
 *
 * @param renderer the rendering context.
 * @param surface the SDL_Surface structure containing pixel data used to fill
 *                the texture.
 * @returns the created texture or NULL on failure; call SDL_GetError() for
 *          more information.
 *
 * @threadsafety This function should only be called on the main thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_CreateTexture
 * @sa SDL_CreateTextureWithProperties
 * @sa SDL_DestroyTexture
 *
 * @from SDL_render.h:583 SDL_Texture * SDL_CreateTextureFromSurface(SDL_Renderer *renderer, SDL_Surface *surface);
 */
SDL_CreateTextureFromSurface: {
      parameters: ["pointer", "pointer"],
      result: "pointer"
    },


/**
 * Create a texture for a rendering context with the specified properties.
 *
 * These are the supported properties:
 *
 * - `SDL_PROP_TEXTURE_CREATE_COLORSPACE_NUMBER`: an SDL_Colorspace value
 *   describing the texture colorspace, defaults to SDL_COLORSPACE_SRGB_LINEAR
 *   for floating point textures, SDL_COLORSPACE_HDR10 for 10-bit textures,
 *   SDL_COLORSPACE_SRGB for other RGB textures and SDL_COLORSPACE_JPEG for
 *   YUV textures.
 * - `SDL_PROP_TEXTURE_CREATE_FORMAT_NUMBER`: one of the enumerated values in
 *   SDL_PixelFormat, defaults to the best RGBA format for the renderer
 * - `SDL_PROP_TEXTURE_CREATE_ACCESS_NUMBER`: one of the enumerated values in
 *   SDL_TextureAccess, defaults to SDL_TEXTUREACCESS_STATIC
 * - `SDL_PROP_TEXTURE_CREATE_WIDTH_NUMBER`: the width of the texture in
 *   pixels, required
 * - `SDL_PROP_TEXTURE_CREATE_HEIGHT_NUMBER`: the height of the texture in
 *   pixels, required
 * - `SDL_PROP_TEXTURE_CREATE_SDR_WHITE_POINT_FLOAT`: for HDR10 and floating
 *   point textures, this defines the value of 100% diffuse white, with higher
 *   values being displayed in the High Dynamic Range headroom. This defaults
 *   to 100 for HDR10 textures and 1.0 for floating point textures.
 * - `SDL_PROP_TEXTURE_CREATE_HDR_HEADROOM_FLOAT`: for HDR10 and floating
 *   point textures, this defines the maximum dynamic range used by the
 *   content, in terms of the SDR white point. This would be equivalent to
 *   maxCLL / SDL_PROP_TEXTURE_CREATE_SDR_WHITE_POINT_FLOAT for HDR10 content.
 *   If this is defined, any values outside the range supported by the display
 *   will be scaled into the available HDR headroom, otherwise they are
 *   clipped.
 *
 * With the direct3d11 renderer:
 *
 * - `SDL_PROP_TEXTURE_CREATE_D3D11_TEXTURE_POINTER`: the ID3D11Texture2D
 *   associated with the texture, if you want to wrap an existing texture.
 * - `SDL_PROP_TEXTURE_CREATE_D3D11_TEXTURE_U_POINTER`: the ID3D11Texture2D
 *   associated with the U plane of a YUV texture, if you want to wrap an
 *   existing texture.
 * - `SDL_PROP_TEXTURE_CREATE_D3D11_TEXTURE_V_POINTER`: the ID3D11Texture2D
 *   associated with the V plane of a YUV texture, if you want to wrap an
 *   existing texture.
 *
 * With the direct3d12 renderer:
 *
 * - `SDL_PROP_TEXTURE_CREATE_D3D12_TEXTURE_POINTER`: the ID3D12Resource
 *   associated with the texture, if you want to wrap an existing texture.
 * - `SDL_PROP_TEXTURE_CREATE_D3D12_TEXTURE_U_POINTER`: the ID3D12Resource
 *   associated with the U plane of a YUV texture, if you want to wrap an
 *   existing texture.
 * - `SDL_PROP_TEXTURE_CREATE_D3D12_TEXTURE_V_POINTER`: the ID3D12Resource
 *   associated with the V plane of a YUV texture, if you want to wrap an
 *   existing texture.
 *
 * With the metal renderer:
 *
 * - `SDL_PROP_TEXTURE_CREATE_METAL_PIXELBUFFER_POINTER`: the CVPixelBufferRef
 *   associated with the texture, if you want to create a texture from an
 *   existing pixel buffer.
 *
 * With the opengl renderer:
 *
 * - `SDL_PROP_TEXTURE_CREATE_OPENGL_TEXTURE_NUMBER`: the GLuint texture
 *   associated with the texture, if you want to wrap an existing texture.
 * - `SDL_PROP_TEXTURE_CREATE_OPENGL_TEXTURE_UV_NUMBER`: the GLuint texture
 *   associated with the UV plane of an NV12 texture, if you want to wrap an
 *   existing texture.
 * - `SDL_PROP_TEXTURE_CREATE_OPENGL_TEXTURE_U_NUMBER`: the GLuint texture
 *   associated with the U plane of a YUV texture, if you want to wrap an
 *   existing texture.
 * - `SDL_PROP_TEXTURE_CREATE_OPENGL_TEXTURE_V_NUMBER`: the GLuint texture
 *   associated with the V plane of a YUV texture, if you want to wrap an
 *   existing texture.
 *
 * With the opengles2 renderer:
 *
 * - `SDL_PROP_TEXTURE_CREATE_OPENGLES2_TEXTURE_NUMBER`: the GLuint texture
 *   associated with the texture, if you want to wrap an existing texture.
 * - `SDL_PROP_TEXTURE_CREATE_OPENGLES2_TEXTURE_NUMBER`: the GLuint texture
 *   associated with the texture, if you want to wrap an existing texture.
 * - `SDL_PROP_TEXTURE_CREATE_OPENGLES2_TEXTURE_UV_NUMBER`: the GLuint texture
 *   associated with the UV plane of an NV12 texture, if you want to wrap an
 *   existing texture.
 * - `SDL_PROP_TEXTURE_CREATE_OPENGLES2_TEXTURE_U_NUMBER`: the GLuint texture
 *   associated with the U plane of a YUV texture, if you want to wrap an
 *   existing texture.
 * - `SDL_PROP_TEXTURE_CREATE_OPENGLES2_TEXTURE_V_NUMBER`: the GLuint texture
 *   associated with the V plane of a YUV texture, if you want to wrap an
 *   existing texture.
 *
 * With the vulkan renderer:
 *
 * - `SDL_PROP_TEXTURE_CREATE_VULKAN_TEXTURE_NUMBER`: the VkImage with layout
 *   VK_IMAGE_LAYOUT_SHADER_READ_ONLY_OPTIMAL associated with the texture, if
 *   you want to wrap an existing texture.
 *
 * @param renderer the rendering context.
 * @param props the properties to use.
 * @returns the created texture or NULL on failure; call SDL_GetError() for
 *          more information.
 *
 * @threadsafety This function should only be called on the main thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_CreateProperties
 * @sa SDL_CreateTexture
 * @sa SDL_CreateTextureFromSurface
 * @sa SDL_DestroyTexture
 * @sa SDL_GetTextureSize
 * @sa SDL_UpdateTexture
 *
 * @from SDL_render.h:695 SDL_Texture * SDL_CreateTextureWithProperties(SDL_Renderer *renderer, SDL_PropertiesID props);
 */
SDL_CreateTextureWithProperties: {
      parameters: ["pointer", "u32"],
      result: "pointer"
    },


/**
 * Get the properties associated with a texture.
 *
 * The following read-only properties are provided by SDL:
 *
 * - `SDL_PROP_TEXTURE_COLORSPACE_NUMBER`: an SDL_Colorspace value describing
 *   the texture colorspace.
 * - `SDL_PROP_TEXTURE_FORMAT_NUMBER`: one of the enumerated values in
 *   SDL_PixelFormat.
 * - `SDL_PROP_TEXTURE_ACCESS_NUMBER`: one of the enumerated values in
 *   SDL_TextureAccess.
 * - `SDL_PROP_TEXTURE_WIDTH_NUMBER`: the width of the texture in pixels.
 * - `SDL_PROP_TEXTURE_HEIGHT_NUMBER`: the height of the texture in pixels.
 * - `SDL_PROP_TEXTURE_SDR_WHITE_POINT_FLOAT`: for HDR10 and floating point
 *   textures, this defines the value of 100% diffuse white, with higher
 *   values being displayed in the High Dynamic Range headroom. This defaults
 *   to 100 for HDR10 textures and 1.0 for other textures.
 * - `SDL_PROP_TEXTURE_HDR_HEADROOM_FLOAT`: for HDR10 and floating point
 *   textures, this defines the maximum dynamic range used by the content, in
 *   terms of the SDR white point. If this is defined, any values outside the
 *   range supported by the display will be scaled into the available HDR
 *   headroom, otherwise they are clipped. This defaults to 1.0 for SDR
 *   textures, 4.0 for HDR10 textures, and no default for floating point
 *   textures.
 *
 * With the direct3d11 renderer:
 *
 * - `SDL_PROP_TEXTURE_D3D11_TEXTURE_POINTER`: the ID3D11Texture2D associated
 *   with the texture
 * - `SDL_PROP_TEXTURE_D3D11_TEXTURE_U_POINTER`: the ID3D11Texture2D
 *   associated with the U plane of a YUV texture
 * - `SDL_PROP_TEXTURE_D3D11_TEXTURE_V_POINTER`: the ID3D11Texture2D
 *   associated with the V plane of a YUV texture
 *
 * With the direct3d12 renderer:
 *
 * - `SDL_PROP_TEXTURE_D3D12_TEXTURE_POINTER`: the ID3D12Resource associated
 *   with the texture
 * - `SDL_PROP_TEXTURE_D3D12_TEXTURE_U_POINTER`: the ID3D12Resource associated
 *   with the U plane of a YUV texture
 * - `SDL_PROP_TEXTURE_D3D12_TEXTURE_V_POINTER`: the ID3D12Resource associated
 *   with the V plane of a YUV texture
 *
 * With the vulkan renderer:
 *
 * - `SDL_PROP_TEXTURE_VULKAN_TEXTURE_NUMBER`: the VkImage associated with the
 *   texture
 *
 * With the opengl renderer:
 *
 * - `SDL_PROP_TEXTURE_OPENGL_TEXTURE_NUMBER`: the GLuint texture associated
 *   with the texture
 * - `SDL_PROP_TEXTURE_OPENGL_TEXTURE_UV_NUMBER`: the GLuint texture
 *   associated with the UV plane of an NV12 texture
 * - `SDL_PROP_TEXTURE_OPENGL_TEXTURE_U_NUMBER`: the GLuint texture associated
 *   with the U plane of a YUV texture
 * - `SDL_PROP_TEXTURE_OPENGL_TEXTURE_V_NUMBER`: the GLuint texture associated
 *   with the V plane of a YUV texture
 * - `SDL_PROP_TEXTURE_OPENGL_TEXTURE_TARGET_NUMBER`: the GLenum for the
 *   texture target (`GL_TEXTURE_2D`, `GL_TEXTURE_RECTANGLE_ARB`, etc)
 * - `SDL_PROP_TEXTURE_OPENGL_TEX_W_FLOAT`: the texture coordinate width of
 *   the texture (0.0 - 1.0)
 * - `SDL_PROP_TEXTURE_OPENGL_TEX_H_FLOAT`: the texture coordinate height of
 *   the texture (0.0 - 1.0)
 *
 * With the opengles2 renderer:
 *
 * - `SDL_PROP_TEXTURE_OPENGLES2_TEXTURE_NUMBER`: the GLuint texture
 *   associated with the texture
 * - `SDL_PROP_TEXTURE_OPENGLES2_TEXTURE_UV_NUMBER`: the GLuint texture
 *   associated with the UV plane of an NV12 texture
 * - `SDL_PROP_TEXTURE_OPENGLES2_TEXTURE_U_NUMBER`: the GLuint texture
 *   associated with the U plane of a YUV texture
 * - `SDL_PROP_TEXTURE_OPENGLES2_TEXTURE_V_NUMBER`: the GLuint texture
 *   associated with the V plane of a YUV texture
 * - `SDL_PROP_TEXTURE_OPENGLES2_TEXTURE_TARGET_NUMBER`: the GLenum for the
 *   texture target (`GL_TEXTURE_2D`, `GL_TEXTURE_EXTERNAL_OES`, etc)
 *
 * @param texture the texture to query.
 * @returns a valid property ID on success or 0 on failure; call
 *          SDL_GetError() for more information.
 *
 * @threadsafety It is safe to call this function from any thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @from SDL_render.h:807 SDL_PropertiesID SDL_GetTextureProperties(SDL_Texture *texture);
 */
SDL_GetTextureProperties: {
      parameters: ["pointer"],
      result: "u32"
    },


/**
 * Get the renderer that created an SDL_Texture.
 *
 * @param texture the texture to query.
 * @returns a pointer to the SDL_Renderer that created the texture, or NULL on
 *          failure; call SDL_GetError() for more information.
 *
 * @threadsafety It is safe to call this function from any thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @from SDL_render.h:847 SDL_Renderer * SDL_GetRendererFromTexture(SDL_Texture *texture);
 */
SDL_GetRendererFromTexture: {
      parameters: ["pointer"],
      result: "pointer"
    },


/**
 * Get the size of a texture, as floating point values.
 *
 * @param texture the texture to query.
 * @param w a pointer filled in with the width of the texture in pixels. This
 *          argument can be NULL if you don't need this information.
 * @param h a pointer filled in with the height of the texture in pixels. This
 *          argument can be NULL if you don't need this information.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function should only be called on the main thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @from SDL_render.h:864 bool SDL_GetTextureSize(SDL_Texture *texture, float *w, float *h);
 */
SDL_GetTextureSize: {
      parameters: ["pointer", "pointer", "pointer"],
      result: "bool"
    },


/**
 * Set an additional color value multiplied into render copy operations.
 *
 * When this texture is rendered, during the copy operation each source color
 * channel is modulated by the appropriate color value according to the
 * following formula:
 *
 * `srcC = srcC * (color / 255)`
 *
 * Color modulation is not always supported by the renderer; it will return
 * false if color modulation is not supported.
 *
 * @param texture the texture to update.
 * @param r the red color value multiplied into copy operations.
 * @param g the green color value multiplied into copy operations.
 * @param b the blue color value multiplied into copy operations.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function should only be called on the main thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_GetTextureColorMod
 * @sa SDL_SetTextureAlphaMod
 * @sa SDL_SetTextureColorModFloat
 *
 * @from SDL_render.h:893 bool SDL_SetTextureColorMod(SDL_Texture *texture, Uint8 r, Uint8 g, Uint8 b);
 */
SDL_SetTextureColorMod: {
      parameters: ["pointer", "u8", "u8", "u8"],
      result: "bool"
    },


/**
 * Set an additional color value multiplied into render copy operations.
 *
 * When this texture is rendered, during the copy operation each source color
 * channel is modulated by the appropriate color value according to the
 * following formula:
 *
 * `srcC = srcC * color`
 *
 * Color modulation is not always supported by the renderer; it will return
 * false if color modulation is not supported.
 *
 * @param texture the texture to update.
 * @param r the red color value multiplied into copy operations.
 * @param g the green color value multiplied into copy operations.
 * @param b the blue color value multiplied into copy operations.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function should only be called on the main thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_GetTextureColorModFloat
 * @sa SDL_SetTextureAlphaModFloat
 * @sa SDL_SetTextureColorMod
 *
 * @from SDL_render.h:923 bool SDL_SetTextureColorModFloat(SDL_Texture *texture, float r, float g, float b);
 */
SDL_SetTextureColorModFloat: {
      parameters: ["pointer", "f32", "f32", "f32"],
      result: "bool"
    },


/**
 * Get the additional color value multiplied into render copy operations.
 *
 * @param texture the texture to query.
 * @param r a pointer filled in with the current red color value.
 * @param g a pointer filled in with the current green color value.
 * @param b a pointer filled in with the current blue color value.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function should only be called on the main thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_GetTextureAlphaMod
 * @sa SDL_GetTextureColorModFloat
 * @sa SDL_SetTextureColorMod
 *
 * @from SDL_render.h:944 bool SDL_GetTextureColorMod(SDL_Texture *texture, Uint8 *r, Uint8 *g, Uint8 *b);
 */
SDL_GetTextureColorMod: {
      parameters: ["pointer", "pointer", "pointer", "pointer"],
      result: "bool"
    },


/**
 * Get the additional color value multiplied into render copy operations.
 *
 * @param texture the texture to query.
 * @param r a pointer filled in with the current red color value.
 * @param g a pointer filled in with the current green color value.
 * @param b a pointer filled in with the current blue color value.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function should only be called on the main thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_GetTextureAlphaModFloat
 * @sa SDL_GetTextureColorMod
 * @sa SDL_SetTextureColorModFloat
 *
 * @from SDL_render.h:964 bool SDL_GetTextureColorModFloat(SDL_Texture *texture, float *r, float *g, float *b);
 */
SDL_GetTextureColorModFloat: {
      parameters: ["pointer", "pointer", "pointer", "pointer"],
      result: "bool"
    },


/**
 * Set an additional alpha value multiplied into render copy operations.
 *
 * When this texture is rendered, during the copy operation the source alpha
 * value is modulated by this alpha value according to the following formula:
 *
 * `srcA = srcA * (alpha / 255)`
 *
 * Alpha modulation is not always supported by the renderer; it will return
 * false if alpha modulation is not supported.
 *
 * @param texture the texture to update.
 * @param alpha the source alpha value multiplied into copy operations.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function should only be called on the main thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_GetTextureAlphaMod
 * @sa SDL_SetTextureAlphaModFloat
 * @sa SDL_SetTextureColorMod
 *
 * @from SDL_render.h:990 bool SDL_SetTextureAlphaMod(SDL_Texture *texture, Uint8 alpha);
 */
SDL_SetTextureAlphaMod: {
      parameters: ["pointer", "u8"],
      result: "bool"
    },


/**
 * Set an additional alpha value multiplied into render copy operations.
 *
 * When this texture is rendered, during the copy operation the source alpha
 * value is modulated by this alpha value according to the following formula:
 *
 * `srcA = srcA * alpha`
 *
 * Alpha modulation is not always supported by the renderer; it will return
 * false if alpha modulation is not supported.
 *
 * @param texture the texture to update.
 * @param alpha the source alpha value multiplied into copy operations.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function should only be called on the main thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_GetTextureAlphaModFloat
 * @sa SDL_SetTextureAlphaMod
 * @sa SDL_SetTextureColorModFloat
 *
 * @from SDL_render.h:1016 bool SDL_SetTextureAlphaModFloat(SDL_Texture *texture, float alpha);
 */
SDL_SetTextureAlphaModFloat: {
      parameters: ["pointer", "f32"],
      result: "bool"
    },


/**
 * Get the additional alpha value multiplied into render copy operations.
 *
 * @param texture the texture to query.
 * @param alpha a pointer filled in with the current alpha value.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function should only be called on the main thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_GetTextureAlphaModFloat
 * @sa SDL_GetTextureColorMod
 * @sa SDL_SetTextureAlphaMod
 *
 * @from SDL_render.h:1034 bool SDL_GetTextureAlphaMod(SDL_Texture *texture, Uint8 *alpha);
 */
SDL_GetTextureAlphaMod: {
      parameters: ["pointer", "pointer"],
      result: "bool"
    },


/**
 * Get the additional alpha value multiplied into render copy operations.
 *
 * @param texture the texture to query.
 * @param alpha a pointer filled in with the current alpha value.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function should only be called on the main thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_GetTextureAlphaMod
 * @sa SDL_GetTextureColorModFloat
 * @sa SDL_SetTextureAlphaModFloat
 *
 * @from SDL_render.h:1052 bool SDL_GetTextureAlphaModFloat(SDL_Texture *texture, float *alpha);
 */
SDL_GetTextureAlphaModFloat: {
      parameters: ["pointer", "pointer"],
      result: "bool"
    },


/**
 * Set the blend mode for a texture, used by SDL_RenderTexture().
 *
 * If the blend mode is not supported, the closest supported mode is chosen
 * and this function returns false.
 *
 * @param texture the texture to update.
 * @param blendMode the SDL_BlendMode to use for texture blending.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function should only be called on the main thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_GetTextureBlendMode
 *
 * @from SDL_render.h:1071 bool SDL_SetTextureBlendMode(SDL_Texture *texture, SDL_BlendMode blendMode);
 */
SDL_SetTextureBlendMode: {
      parameters: ["pointer", "u32"],
      result: "bool"
    },


/**
 * Get the blend mode used for texture copy operations.
 *
 * @param texture the texture to query.
 * @param blendMode a pointer filled in with the current SDL_BlendMode.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function should only be called on the main thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_SetTextureBlendMode
 *
 * @from SDL_render.h:1087 bool SDL_GetTextureBlendMode(SDL_Texture *texture, SDL_BlendMode *blendMode);
 */
SDL_GetTextureBlendMode: {
      parameters: ["pointer", "pointer"],
      result: "bool"
    },


/**
 * Set the scale mode used for texture scale operations.
 *
 * The default texture scale mode is SDL_SCALEMODE_LINEAR.
 *
 * If the scale mode is not supported, the closest supported mode is chosen.
 *
 * @param texture the texture to update.
 * @param scaleMode the SDL_ScaleMode to use for texture scaling.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function should only be called on the main thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_GetTextureScaleMode
 *
 * @from SDL_render.h:1107 bool SDL_SetTextureScaleMode(SDL_Texture *texture, SDL_ScaleMode scaleMode);
 */
SDL_SetTextureScaleMode: {
      parameters: ["pointer", "u32"],
      result: "bool"
    },


/**
 * Get the scale mode used for texture scale operations.
 *
 * @param texture the texture to query.
 * @param scaleMode a pointer filled in with the current scale mode.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function should only be called on the main thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_SetTextureScaleMode
 *
 * @from SDL_render.h:1123 bool SDL_GetTextureScaleMode(SDL_Texture *texture, SDL_ScaleMode *scaleMode);
 */
SDL_GetTextureScaleMode: {
      parameters: ["pointer", "pointer"],
      result: "bool"
    },


/**
 * Update the given texture rectangle with new pixel data.
 *
 * The pixel data must be in the pixel format of the texture, which can be
 * queried using the SDL_PROP_TEXTURE_FORMAT_NUMBER property.
 *
 * This is a fairly slow function, intended for use with static textures that
 * do not change often.
 *
 * If the texture is intended to be updated often, it is preferred to create
 * the texture as streaming and use the locking functions referenced below.
 * While this function will work with streaming textures, for optimization
 * reasons you may not get the pixels back if you lock the texture afterward.
 *
 * @param texture the texture to update.
 * @param rect an SDL_Rect structure representing the area to update, or NULL
 *             to update the entire texture.
 * @param pixels the raw pixel data in the format of the texture.
 * @param pitch the number of bytes in a row of pixel data, including padding
 *              between lines.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function should only be called on the main thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_LockTexture
 * @sa SDL_UnlockTexture
 * @sa SDL_UpdateNVTexture
 * @sa SDL_UpdateYUVTexture
 *
 * @from SDL_render.h:1157 bool SDL_UpdateTexture(SDL_Texture *texture, const SDL_Rect *rect, const void *pixels, int pitch);
 */
SDL_UpdateTexture: {
      parameters: ["pointer", "pointer", "pointer", "i32"],
      result: "bool"
    },


/**
 * Update a rectangle within a planar YV12 or IYUV texture with new pixel
 * data.
 *
 * You can use SDL_UpdateTexture() as long as your pixel data is a contiguous
 * block of Y and U/V planes in the proper order, but this function is
 * available if your pixel data is not contiguous.
 *
 * @param texture the texture to update.
 * @param rect a pointer to the rectangle of pixels to update, or NULL to
 *             update the entire texture.
 * @param Yplane the raw pixel data for the Y plane.
 * @param Ypitch the number of bytes between rows of pixel data for the Y
 *               plane.
 * @param Uplane the raw pixel data for the U plane.
 * @param Upitch the number of bytes between rows of pixel data for the U
 *               plane.
 * @param Vplane the raw pixel data for the V plane.
 * @param Vpitch the number of bytes between rows of pixel data for the V
 *               plane.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function should only be called on the main thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_UpdateNVTexture
 * @sa SDL_UpdateTexture
 *
 * @from SDL_render.h:1189 bool SDL_UpdateYUVTexture(SDL_Texture *texture,                                                 const SDL_Rect *rect,                                                 const Uint8 *Yplane, int Ypitch,                                                 const Uint8 *Uplane, int Upitch,                                                 const Uint8 *Vplane, int Vpitch);
 */
SDL_UpdateYUVTexture: {
      parameters: ["pointer", "pointer", "pointer", "i32", "pointer", "i32", "pointer", "i32"],
      result: "bool"
    },


/**
 * Update a rectangle within a planar NV12 or NV21 texture with new pixels.
 *
 * You can use SDL_UpdateTexture() as long as your pixel data is a contiguous
 * block of NV12/21 planes in the proper order, but this function is available
 * if your pixel data is not contiguous.
 *
 * @param texture the texture to update.
 * @param rect a pointer to the rectangle of pixels to update, or NULL to
 *             update the entire texture.
 * @param Yplane the raw pixel data for the Y plane.
 * @param Ypitch the number of bytes between rows of pixel data for the Y
 *               plane.
 * @param UVplane the raw pixel data for the UV plane.
 * @param UVpitch the number of bytes between rows of pixel data for the UV
 *                plane.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function should only be called on the main thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_UpdateTexture
 * @sa SDL_UpdateYUVTexture
 *
 * @from SDL_render.h:1221 bool SDL_UpdateNVTexture(SDL_Texture *texture,                                                 const SDL_Rect *rect,                                                 const Uint8 *Yplane, int Ypitch,                                                 const Uint8 *UVplane, int UVpitch);
 */
SDL_UpdateNVTexture: {
      parameters: ["pointer", "pointer", "pointer", "i32", "pointer", "i32"],
      result: "bool"
    },


/**
 * Lock a portion of the texture for **write-only** pixel access.
 *
 * As an optimization, the pixels made available for editing don't necessarily
 * contain the old texture data. This is a write-only operation, and if you
 * need to keep a copy of the texture data you should do that at the
 * application level.
 *
 * You must use SDL_UnlockTexture() to unlock the pixels and apply any
 * changes.
 *
 * @param texture the texture to lock for access, which was created with
 *                `SDL_TEXTUREACCESS_STREAMING`.
 * @param rect an SDL_Rect structure representing the area to lock for access;
 *             NULL to lock the entire texture.
 * @param pixels this is filled in with a pointer to the locked pixels,
 *               appropriately offset by the locked area.
 * @param pitch this is filled in with the pitch of the locked pixels; the
 *              pitch is the length of one row in bytes.
 * @returns true on success or false if the texture is not valid or was not
 *          created with `SDL_TEXTUREACCESS_STREAMING`; call SDL_GetError()
 *          for more information.
 *
 * @threadsafety This function should only be called on the main thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_LockTextureToSurface
 * @sa SDL_UnlockTexture
 *
 * @from SDL_render.h:1256 bool SDL_LockTexture(SDL_Texture *texture,                                            const SDL_Rect *rect,                                            void **pixels, int *pitch);
 */
SDL_LockTexture: {
      parameters: ["pointer", "pointer", "pointer", "pointer"],
      result: "bool"
    },


/**
 * Lock a portion of the texture for **write-only** pixel access, and expose
 * it as a SDL surface.
 *
 * Besides providing an SDL_Surface instead of raw pixel data, this function
 * operates like SDL_LockTexture.
 *
 * As an optimization, the pixels made available for editing don't necessarily
 * contain the old texture data. This is a write-only operation, and if you
 * need to keep a copy of the texture data you should do that at the
 * application level.
 *
 * You must use SDL_UnlockTexture() to unlock the pixels and apply any
 * changes.
 *
 * The returned surface is freed internally after calling SDL_UnlockTexture()
 * or SDL_DestroyTexture(). The caller should not free it.
 *
 * @param texture the texture to lock for access, which must be created with
 *                `SDL_TEXTUREACCESS_STREAMING`.
 * @param rect a pointer to the rectangle to lock for access. If the rect is
 *             NULL, the entire texture will be locked.
 * @param surface a pointer to an SDL surface of size **rect**. Don't assume
 *                any specific pixel content.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function should only be called on the main thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_LockTexture
 * @sa SDL_UnlockTexture
 *
 * @from SDL_render.h:1294 bool SDL_LockTextureToSurface(SDL_Texture *texture, const SDL_Rect *rect, SDL_Surface **surface);
 */
SDL_LockTextureToSurface: {
      parameters: ["pointer", "pointer", "pointer"],
      result: "bool"
    },


/**
 * Unlock a texture, uploading the changes to video memory, if needed.
 *
 * **Warning**: Please note that SDL_LockTexture() is intended to be
 * write-only; it will not guarantee the previous contents of the texture will
 * be provided. You must fully initialize any area of a texture that you lock
 * before unlocking it, as the pixels might otherwise be uninitialized memory.
 *
 * Which is to say: locking and immediately unlocking a texture can result in
 * corrupted textures, depending on the renderer in use.
 *
 * @param texture a texture locked by SDL_LockTexture().
 *
 * @threadsafety This function should only be called on the main thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_LockTexture
 *
 * @from SDL_render.h:1315 void SDL_UnlockTexture(SDL_Texture *texture);
 */
SDL_UnlockTexture: {
      parameters: ["pointer"],
      result: "void"
    },


/**
 * Set a texture as the current rendering target.
 *
 * The default render target is the window for which the renderer was created.
 * To stop rendering to a texture and render to the window again, call this
 * function with a NULL `texture`.
 *
 * Viewport, cliprect, scale, and logical presentation are unique to each
 * render target. Get and set functions for these states apply to the current
 * render target set by this function, and those states persist on each target
 * when the current render target changes.
 *
 * @param renderer the rendering context.
 * @param texture the targeted texture, which must be created with the
 *                `SDL_TEXTUREACCESS_TARGET` flag, or NULL to render to the
 *                window instead of a texture.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function should only be called on the main thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_GetRenderTarget
 *
 * @from SDL_render.h:1342 bool SDL_SetRenderTarget(SDL_Renderer *renderer, SDL_Texture *texture);
 */
SDL_SetRenderTarget: {
      parameters: ["pointer", "pointer"],
      result: "bool"
    },


/**
 * Get the current render target.
 *
 * The default render target is the window for which the renderer was created,
 * and is reported a NULL here.
 *
 * @param renderer the rendering context.
 * @returns the current render target or NULL for the default render target.
 *
 * @threadsafety This function should only be called on the main thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_SetRenderTarget
 *
 * @from SDL_render.h:1359 SDL_Texture * SDL_GetRenderTarget(SDL_Renderer *renderer);
 */
SDL_GetRenderTarget: {
      parameters: ["pointer"],
      result: "pointer"
    },


/**
 * Set a device-independent resolution and presentation mode for rendering.
 *
 * This function sets the width and height of the logical rendering output.
 * The renderer will act as if the current render target is always the
 * requested dimensions, scaling to the actual resolution as necessary.
 *
 * This can be useful for games that expect a fixed size, but would like to
 * scale the output to whatever is available, regardless of how a user resizes
 * a window, or if the display is high DPI.
 *
 * Logical presentation can be used with both render target textures and the
 * renderer's window; the state is unique to each render target, and this
 * function sets the state for the current render target. It might be useful
 * to draw to a texture that matches the window dimensions with logical
 * presentation enabled, and then draw that texture across the entire window
 * with logical presentation disabled. Be careful not to render both with
 * logical presentation enabled, however, as this could produce
 * double-letterboxing, etc.
 *
 * You can disable logical coordinates by setting the mode to
 * SDL_LOGICAL_PRESENTATION_DISABLED, and in that case you get the full pixel
 * resolution of the render target; it is safe to toggle logical presentation
 * during the rendering of a frame: perhaps most of the rendering is done to
 * specific dimensions but to make fonts look sharp, the app turns off logical
 * presentation while drawing text, for example.
 *
 * For the renderer's window, letterboxing is drawn into the framebuffer if
 * logical presentation is enabled during SDL_RenderPresent; be sure to
 * reenable it before presenting if you were toggling it, otherwise the
 * letterbox areas might have artifacts from previous frames (or artifacts
 * from external overlays, etc). Letterboxing is never drawn into texture
 * render targets; be sure to call SDL_RenderClear() before drawing into the
 * texture so the letterboxing areas are cleared, if appropriate.
 *
 * You can convert coordinates in an event into rendering coordinates using
 * SDL_ConvertEventToRenderCoordinates().
 *
 * @param renderer the rendering context.
 * @param w the width of the logical resolution.
 * @param h the height of the logical resolution.
 * @param mode the presentation mode used.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function should only be called on the main thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_ConvertEventToRenderCoordinates
 * @sa SDL_GetRenderLogicalPresentation
 * @sa SDL_GetRenderLogicalPresentationRect
 *
 * @from SDL_render.h:1414 bool SDL_SetRenderLogicalPresentation(SDL_Renderer *renderer, int w, int h, SDL_RendererLogicalPresentation mode);
 */
SDL_SetRenderLogicalPresentation: {
      parameters: ["pointer", "i32", "i32", "u32"],
      result: "bool"
    },


/**
 * Get device independent resolution and presentation mode for rendering.
 *
 * This function gets the width and height of the logical rendering output, or
 * the output size in pixels if a logical resolution is not enabled.
 *
 * Each render target has its own logical presentation state. This function
 * gets the state for the current render target.
 *
 * @param renderer the rendering context.
 * @param w an int to be filled with the width.
 * @param h an int to be filled with the height.
 * @param mode the presentation mode used.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function should only be called on the main thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_SetRenderLogicalPresentation
 *
 * @from SDL_render.h:1438 bool SDL_GetRenderLogicalPresentation(SDL_Renderer *renderer, int *w, int *h, SDL_RendererLogicalPresentation *mode);
 */
SDL_GetRenderLogicalPresentation: {
      parameters: ["pointer", "pointer", "pointer", "pointer"],
      result: "bool"
    },


/**
 * Get the final presentation rectangle for rendering.
 *
 * This function returns the calculated rectangle used for logical
 * presentation, based on the presentation mode and output size. If logical
 * presentation is disabled, it will fill the rectangle with the output size,
 * in pixels.
 *
 * Each render target has its own logical presentation state. This function
 * gets the rectangle for the current render target.
 *
 * @param renderer the rendering context.
 * @param rect a pointer filled in with the final presentation rectangle, may
 *             be NULL.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function should only be called on the main thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_SetRenderLogicalPresentation
 *
 * @from SDL_render.h:1463 bool SDL_GetRenderLogicalPresentationRect(SDL_Renderer *renderer, SDL_FRect *rect);
 */
SDL_GetRenderLogicalPresentationRect: {
      parameters: ["pointer", "pointer"],
      result: "bool"
    },


/**
 * Get a point in render coordinates when given a point in window coordinates.
 *
 * This takes into account several states:
 *
 * - The window dimensions.
 * - The logical presentation settings (SDL_SetRenderLogicalPresentation)
 * - The scale (SDL_SetRenderScale)
 * - The viewport (SDL_SetRenderViewport)
 *
 * @param renderer the rendering context.
 * @param window_x the x coordinate in window coordinates.
 * @param window_y the y coordinate in window coordinates.
 * @param x a pointer filled with the x coordinate in render coordinates.
 * @param y a pointer filled with the y coordinate in render coordinates.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function should only be called on the main thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_SetRenderLogicalPresentation
 * @sa SDL_SetRenderScale
 *
 * @from SDL_render.h:1490 bool SDL_RenderCoordinatesFromWindow(SDL_Renderer *renderer, float window_x, float window_y, float *x, float *y);
 */
SDL_RenderCoordinatesFromWindow: {
      parameters: ["pointer", "f32", "f32", "pointer", "pointer"],
      result: "bool"
    },


/**
 * Get a point in window coordinates when given a point in render coordinates.
 *
 * This takes into account several states:
 *
 * - The window dimensions.
 * - The logical presentation settings (SDL_SetRenderLogicalPresentation)
 * - The scale (SDL_SetRenderScale)
 * - The viewport (SDL_SetRenderViewport)
 *
 * @param renderer the rendering context.
 * @param x the x coordinate in render coordinates.
 * @param y the y coordinate in render coordinates.
 * @param window_x a pointer filled with the x coordinate in window
 *                 coordinates.
 * @param window_y a pointer filled with the y coordinate in window
 *                 coordinates.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function should only be called on the main thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_SetRenderLogicalPresentation
 * @sa SDL_SetRenderScale
 * @sa SDL_SetRenderViewport
 *
 * @from SDL_render.h:1520 bool SDL_RenderCoordinatesToWindow(SDL_Renderer *renderer, float x, float y, float *window_x, float *window_y);
 */
SDL_RenderCoordinatesToWindow: {
      parameters: ["pointer", "f32", "f32", "pointer", "pointer"],
      result: "bool"
    },


/**
 * Convert the coordinates in an event to render coordinates.
 *
 * This takes into account several states:
 *
 * - The window dimensions.
 * - The logical presentation settings (SDL_SetRenderLogicalPresentation)
 * - The scale (SDL_SetRenderScale)
 * - The viewport (SDL_SetRenderViewport)
 *
 * Various event types are converted with this function: mouse, touch, pen,
 * etc.
 *
 * Touch coordinates are converted from normalized coordinates in the window
 * to non-normalized rendering coordinates.
 *
 * Relative mouse coordinates (xrel and yrel event fields) are _also_
 * converted. Applications that do not want these fields converted should use
 * SDL_RenderCoordinatesFromWindow() on the specific event fields instead of
 * converting the entire event structure.
 *
 * Once converted, coordinates may be outside the rendering area.
 *
 * @param renderer the rendering context.
 * @param event the event to modify.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function should only be called on the main thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_RenderCoordinatesFromWindow
 *
 * @from SDL_render.h:1556 bool SDL_ConvertEventToRenderCoordinates(SDL_Renderer *renderer, SDL_Event *event);
 */
SDL_ConvertEventToRenderCoordinates: {
      parameters: ["pointer", "pointer"],
      result: "bool"
    },


/**
 * Set the drawing area for rendering on the current target.
 *
 * Drawing will clip to this area (separately from any clipping done with
 * SDL_SetRenderClipRect), and the top left of the area will become coordinate
 * (0, 0) for future drawing commands.
 *
 * The area's width and height must be >= 0.
 *
 * Each render target has its own viewport. This function sets the viewport
 * for the current render target.
 *
 * @param renderer the rendering context.
 * @param rect the SDL_Rect structure representing the drawing area, or NULL
 *             to set the viewport to the entire target.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function should only be called on the main thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_GetRenderViewport
 * @sa SDL_RenderViewportSet
 *
 * @from SDL_render.h:1583 bool SDL_SetRenderViewport(SDL_Renderer *renderer, const SDL_Rect *rect);
 */
SDL_SetRenderViewport: {
      parameters: ["pointer", "pointer"],
      result: "bool"
    },


/**
 * Get the drawing area for the current target.
 *
 * Each render target has its own viewport. This function gets the viewport
 * for the current render target.
 *
 * @param renderer the rendering context.
 * @param rect an SDL_Rect structure filled in with the current drawing area.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function should only be called on the main thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_RenderViewportSet
 * @sa SDL_SetRenderViewport
 *
 * @from SDL_render.h:1603 bool SDL_GetRenderViewport(SDL_Renderer *renderer, SDL_Rect *rect);
 */
SDL_GetRenderViewport: {
      parameters: ["pointer", "pointer"],
      result: "bool"
    },


/**
 * Return whether an explicit rectangle was set as the viewport.
 *
 * This is useful if you're saving and restoring the viewport and want to know
 * whether you should restore a specific rectangle or NULL. Note that the
 * viewport is always reset when changing rendering targets.
 *
 * Each render target has its own viewport. This function checks the viewport
 * for the current render target.
 *
 * @param renderer the rendering context.
 * @returns true if the viewport was set to a specific rectangle, or false if
 *          it was set to NULL (the entire target).
 *
 * @threadsafety This function should only be called on the main thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_GetRenderViewport
 * @sa SDL_SetRenderViewport
 *
 * @from SDL_render.h:1626 bool SDL_RenderViewportSet(SDL_Renderer *renderer);
 */
SDL_RenderViewportSet: {
      parameters: ["pointer"],
      result: "bool"
    },


/**
 * Get the safe area for rendering within the current viewport.
 *
 * Some devices have portions of the screen which are partially obscured or
 * not interactive, possibly due to on-screen controls, curved edges, camera
 * notches, TV overscan, etc. This function provides the area of the current
 * viewport which is safe to have interactible content. You should continue
 * rendering into the rest of the render target, but it should not contain
 * visually important or interactible content.
 *
 * @param renderer the rendering context.
 * @param rect a pointer filled in with the area that is safe for interactive
 *             content.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function should only be called on the main thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @from SDL_render.h:1648 bool SDL_GetRenderSafeArea(SDL_Renderer *renderer, SDL_Rect *rect);
 */
SDL_GetRenderSafeArea: {
      parameters: ["pointer", "pointer"],
      result: "bool"
    },


/**
 * Set the clip rectangle for rendering on the specified target.
 *
 * Each render target has its own clip rectangle. This function sets the
 * cliprect for the current render target.
 *
 * @param renderer the rendering context.
 * @param rect an SDL_Rect structure representing the clip area, relative to
 *             the viewport, or NULL to disable clipping.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function should only be called on the main thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_GetRenderClipRect
 * @sa SDL_RenderClipEnabled
 *
 * @from SDL_render.h:1669 bool SDL_SetRenderClipRect(SDL_Renderer *renderer, const SDL_Rect *rect);
 */
SDL_SetRenderClipRect: {
      parameters: ["pointer", "pointer"],
      result: "bool"
    },


/**
 * Get the clip rectangle for the current target.
 *
 * Each render target has its own clip rectangle. This function gets the
 * cliprect for the current render target.
 *
 * @param renderer the rendering context.
 * @param rect an SDL_Rect structure filled in with the current clipping area
 *             or an empty rectangle if clipping is disabled.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function should only be called on the main thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_RenderClipEnabled
 * @sa SDL_SetRenderClipRect
 *
 * @from SDL_render.h:1690 bool SDL_GetRenderClipRect(SDL_Renderer *renderer, SDL_Rect *rect);
 */
SDL_GetRenderClipRect: {
      parameters: ["pointer", "pointer"],
      result: "bool"
    },


/**
 * Get whether clipping is enabled on the given render target.
 *
 * Each render target has its own clip rectangle. This function checks the
 * cliprect for the current render target.
 *
 * @param renderer the rendering context.
 * @returns true if clipping is enabled or false if not; call SDL_GetError()
 *          for more information.
 *
 * @threadsafety This function should only be called on the main thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_GetRenderClipRect
 * @sa SDL_SetRenderClipRect
 *
 * @from SDL_render.h:1709 bool SDL_RenderClipEnabled(SDL_Renderer *renderer);
 */
SDL_RenderClipEnabled: {
      parameters: ["pointer"],
      result: "bool"
    },


/**
 * Set the drawing scale for rendering on the current target.
 *
 * The drawing coordinates are scaled by the x/y scaling factors before they
 * are used by the renderer. This allows resolution independent drawing with a
 * single coordinate system.
 *
 * If this results in scaling or subpixel drawing by the rendering backend, it
 * will be handled using the appropriate quality hints. For best results use
 * integer scaling factors.
 *
 * Each render target has its own scale. This function sets the scale for the
 * current render target.
 *
 * @param renderer the rendering context.
 * @param scaleX the horizontal scaling factor.
 * @param scaleY the vertical scaling factor.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function should only be called on the main thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_GetRenderScale
 *
 * @from SDL_render.h:1737 bool SDL_SetRenderScale(SDL_Renderer *renderer, float scaleX, float scaleY);
 */
SDL_SetRenderScale: {
      parameters: ["pointer", "f32", "f32"],
      result: "bool"
    },


/**
 * Get the drawing scale for the current target.
 *
 * Each render target has its own scale. This function gets the scale for the
 * current render target.
 *
 * @param renderer the rendering context.
 * @param scaleX a pointer filled in with the horizontal scaling factor.
 * @param scaleY a pointer filled in with the vertical scaling factor.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function should only be called on the main thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_SetRenderScale
 *
 * @from SDL_render.h:1757 bool SDL_GetRenderScale(SDL_Renderer *renderer, float *scaleX, float *scaleY);
 */
SDL_GetRenderScale: {
      parameters: ["pointer", "pointer", "pointer"],
      result: "bool"
    },


/**
 * Set the color used for drawing operations.
 *
 * Set the color for drawing or filling rectangles, lines, and points, and for
 * SDL_RenderClear().
 *
 * @param renderer the rendering context.
 * @param r the red value used to draw on the rendering target.
 * @param g the green value used to draw on the rendering target.
 * @param b the blue value used to draw on the rendering target.
 * @param a the alpha value used to draw on the rendering target; usually
 *          `SDL_ALPHA_OPAQUE` (255). Use SDL_SetRenderDrawBlendMode to
 *          specify how the alpha channel is used.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function should only be called on the main thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_GetRenderDrawColor
 * @sa SDL_SetRenderDrawColorFloat
 *
 * @from SDL_render.h:1782 bool SDL_SetRenderDrawColor(SDL_Renderer *renderer, Uint8 r, Uint8 g, Uint8 b, Uint8 a);
 */
SDL_SetRenderDrawColor: {
      parameters: ["pointer", "u8", "u8", "u8", "u8"],
      result: "bool"
    },


/**
 * Set the color used for drawing operations (Rect, Line and Clear).
 *
 * Set the color for drawing or filling rectangles, lines, and points, and for
 * SDL_RenderClear().
 *
 * @param renderer the rendering context.
 * @param r the red value used to draw on the rendering target.
 * @param g the green value used to draw on the rendering target.
 * @param b the blue value used to draw on the rendering target.
 * @param a the alpha value used to draw on the rendering target. Use
 *          SDL_SetRenderDrawBlendMode to specify how the alpha channel is
 *          used.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function should only be called on the main thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_GetRenderDrawColorFloat
 * @sa SDL_SetRenderDrawColor
 *
 * @from SDL_render.h:1807 bool SDL_SetRenderDrawColorFloat(SDL_Renderer *renderer, float r, float g, float b, float a);
 */
SDL_SetRenderDrawColorFloat: {
      parameters: ["pointer", "f32", "f32", "f32", "f32"],
      result: "bool"
    },


/**
 * Get the color used for drawing operations (Rect, Line and Clear).
 *
 * @param renderer the rendering context.
 * @param r a pointer filled in with the red value used to draw on the
 *          rendering target.
 * @param g a pointer filled in with the green value used to draw on the
 *          rendering target.
 * @param b a pointer filled in with the blue value used to draw on the
 *          rendering target.
 * @param a a pointer filled in with the alpha value used to draw on the
 *          rendering target; usually `SDL_ALPHA_OPAQUE` (255).
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function should only be called on the main thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_GetRenderDrawColorFloat
 * @sa SDL_SetRenderDrawColor
 *
 * @from SDL_render.h:1831 bool SDL_GetRenderDrawColor(SDL_Renderer *renderer, Uint8 *r, Uint8 *g, Uint8 *b, Uint8 *a);
 */
SDL_GetRenderDrawColor: {
      parameters: ["pointer", "pointer", "pointer", "pointer", "pointer"],
      result: "bool"
    },


/**
 * Get the color used for drawing operations (Rect, Line and Clear).
 *
 * @param renderer the rendering context.
 * @param r a pointer filled in with the red value used to draw on the
 *          rendering target.
 * @param g a pointer filled in with the green value used to draw on the
 *          rendering target.
 * @param b a pointer filled in with the blue value used to draw on the
 *          rendering target.
 * @param a a pointer filled in with the alpha value used to draw on the
 *          rendering target.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function should only be called on the main thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_SetRenderDrawColorFloat
 * @sa SDL_GetRenderDrawColor
 *
 * @from SDL_render.h:1855 bool SDL_GetRenderDrawColorFloat(SDL_Renderer *renderer, float *r, float *g, float *b, float *a);
 */
SDL_GetRenderDrawColorFloat: {
      parameters: ["pointer", "pointer", "pointer", "pointer", "pointer"],
      result: "bool"
    },


/**
 * Set the color scale used for render operations.
 *
 * The color scale is an additional scale multiplied into the pixel color
 * value while rendering. This can be used to adjust the brightness of colors
 * during HDR rendering, or changing HDR video brightness when playing on an
 * SDR display.
 *
 * The color scale does not affect the alpha channel, only the color
 * brightness.
 *
 * @param renderer the rendering context.
 * @param scale the color scale value.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function should only be called on the main thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_GetRenderColorScale
 *
 * @from SDL_render.h:1879 bool SDL_SetRenderColorScale(SDL_Renderer *renderer, float scale);
 */
SDL_SetRenderColorScale: {
      parameters: ["pointer", "f32"],
      result: "bool"
    },


/**
 * Get the color scale used for render operations.
 *
 * @param renderer the rendering context.
 * @param scale a pointer filled in with the current color scale value.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function should only be called on the main thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_SetRenderColorScale
 *
 * @from SDL_render.h:1895 bool SDL_GetRenderColorScale(SDL_Renderer *renderer, float *scale);
 */
SDL_GetRenderColorScale: {
      parameters: ["pointer", "pointer"],
      result: "bool"
    },


/**
 * Set the blend mode used for drawing operations (Fill and Line).
 *
 * If the blend mode is not supported, the closest supported mode is chosen.
 *
 * @param renderer the rendering context.
 * @param blendMode the SDL_BlendMode to use for blending.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function should only be called on the main thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_GetRenderDrawBlendMode
 *
 * @from SDL_render.h:1913 bool SDL_SetRenderDrawBlendMode(SDL_Renderer *renderer, SDL_BlendMode blendMode);
 */
SDL_SetRenderDrawBlendMode: {
      parameters: ["pointer", "u32"],
      result: "bool"
    },


/**
 * Get the blend mode used for drawing operations.
 *
 * @param renderer the rendering context.
 * @param blendMode a pointer filled in with the current SDL_BlendMode.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function should only be called on the main thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_SetRenderDrawBlendMode
 *
 * @from SDL_render.h:1929 bool SDL_GetRenderDrawBlendMode(SDL_Renderer *renderer, SDL_BlendMode *blendMode);
 */
SDL_GetRenderDrawBlendMode: {
      parameters: ["pointer", "pointer"],
      result: "bool"
    },


/**
 * Clear the current rendering target with the drawing color.
 *
 * This function clears the entire rendering target, ignoring the viewport and
 * the clip rectangle. Note, that clearing will also set/fill all pixels of
 * the rendering target to current renderer draw color, so make sure to invoke
 * SDL_SetRenderDrawColor() when needed.
 *
 * @param renderer the rendering context.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function should only be called on the main thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_SetRenderDrawColor
 *
 * @from SDL_render.h:1949 bool SDL_RenderClear(SDL_Renderer *renderer);
 */
SDL_RenderClear: {
      parameters: ["pointer"],
      result: "bool"
    },


/**
 * Draw a point on the current rendering target at subpixel precision.
 *
 * @param renderer the renderer which should draw a point.
 * @param x the x coordinate of the point.
 * @param y the y coordinate of the point.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function should only be called on the main thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_RenderPoints
 *
 * @from SDL_render.h:1966 bool SDL_RenderPoint(SDL_Renderer *renderer, float x, float y);
 */
SDL_RenderPoint: {
      parameters: ["pointer", "f32", "f32"],
      result: "bool"
    },


/**
 * Draw multiple points on the current rendering target at subpixel precision.
 *
 * @param renderer the renderer which should draw multiple points.
 * @param points the points to draw.
 * @param count the number of points to draw.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function should only be called on the main thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_RenderPoint
 *
 * @from SDL_render.h:1983 bool SDL_RenderPoints(SDL_Renderer *renderer, const SDL_FPoint *points, int count);
 */
SDL_RenderPoints: {
      parameters: ["pointer", "pointer", "i32"],
      result: "bool"
    },


/**
 * Draw a line on the current rendering target at subpixel precision.
 *
 * @param renderer the renderer which should draw a line.
 * @param x1 the x coordinate of the start point.
 * @param y1 the y coordinate of the start point.
 * @param x2 the x coordinate of the end point.
 * @param y2 the y coordinate of the end point.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function should only be called on the main thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_RenderLines
 *
 * @from SDL_render.h:2002 bool SDL_RenderLine(SDL_Renderer *renderer, float x1, float y1, float x2, float y2);
 */
SDL_RenderLine: {
      parameters: ["pointer", "f32", "f32", "f32", "f32"],
      result: "bool"
    },


/**
 * Draw a series of connected lines on the current rendering target at
 * subpixel precision.
 *
 * @param renderer the renderer which should draw multiple lines.
 * @param points the points along the lines.
 * @param count the number of points, drawing count-1 lines.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function should only be called on the main thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_RenderLine
 *
 * @from SDL_render.h:2020 bool SDL_RenderLines(SDL_Renderer *renderer, const SDL_FPoint *points, int count);
 */
SDL_RenderLines: {
      parameters: ["pointer", "pointer", "i32"],
      result: "bool"
    },


/**
 * Draw a rectangle on the current rendering target at subpixel precision.
 *
 * @param renderer the renderer which should draw a rectangle.
 * @param rect a pointer to the destination rectangle, or NULL to outline the
 *             entire rendering target.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function should only be called on the main thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_RenderRects
 *
 * @from SDL_render.h:2037 bool SDL_RenderRect(SDL_Renderer *renderer, const SDL_FRect *rect);
 */
SDL_RenderRect: {
      parameters: ["pointer", "pointer"],
      result: "bool"
    },


/**
 * Draw some number of rectangles on the current rendering target at subpixel
 * precision.
 *
 * @param renderer the renderer which should draw multiple rectangles.
 * @param rects a pointer to an array of destination rectangles.
 * @param count the number of rectangles.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function should only be called on the main thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_RenderRect
 *
 * @from SDL_render.h:2055 bool SDL_RenderRects(SDL_Renderer *renderer, const SDL_FRect *rects, int count);
 */
SDL_RenderRects: {
      parameters: ["pointer", "pointer", "i32"],
      result: "bool"
    },


/**
 * Fill a rectangle on the current rendering target with the drawing color at
 * subpixel precision.
 *
 * @param renderer the renderer which should fill a rectangle.
 * @param rect a pointer to the destination rectangle, or NULL for the entire
 *             rendering target.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function should only be called on the main thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_RenderFillRects
 *
 * @from SDL_render.h:2073 bool SDL_RenderFillRect(SDL_Renderer *renderer, const SDL_FRect *rect);
 */
SDL_RenderFillRect: {
      parameters: ["pointer", "pointer"],
      result: "bool"
    },


/**
 * Fill some number of rectangles on the current rendering target with the
 * drawing color at subpixel precision.
 *
 * @param renderer the renderer which should fill multiple rectangles.
 * @param rects a pointer to an array of destination rectangles.
 * @param count the number of rectangles.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function should only be called on the main thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_RenderFillRect
 *
 * @from SDL_render.h:2091 bool SDL_RenderFillRects(SDL_Renderer *renderer, const SDL_FRect *rects, int count);
 */
SDL_RenderFillRects: {
      parameters: ["pointer", "pointer", "i32"],
      result: "bool"
    },


/**
 * Copy a portion of the texture to the current rendering target at subpixel
 * precision.
 *
 * @param renderer the renderer which should copy parts of a texture.
 * @param texture the source texture.
 * @param srcrect a pointer to the source rectangle, or NULL for the entire
 *                texture.
 * @param dstrect a pointer to the destination rectangle, or NULL for the
 *                entire rendering target.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function should only be called on the main thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_RenderTextureRotated
 * @sa SDL_RenderTextureTiled
 *
 * @from SDL_render.h:2113 bool SDL_RenderTexture(SDL_Renderer *renderer, SDL_Texture *texture, const SDL_FRect *srcrect, const SDL_FRect *dstrect);
 */
SDL_RenderTexture: {
      parameters: ["pointer", "pointer", "pointer", "pointer"],
      result: "bool"
    },


/**
 * Copy a portion of the source texture to the current rendering target, with
 * rotation and flipping, at subpixel precision.
 *
 * @param renderer the renderer which should copy parts of a texture.
 * @param texture the source texture.
 * @param srcrect a pointer to the source rectangle, or NULL for the entire
 *                texture.
 * @param dstrect a pointer to the destination rectangle, or NULL for the
 *                entire rendering target.
 * @param angle an angle in degrees that indicates the rotation that will be
 *              applied to dstrect, rotating it in a clockwise direction.
 * @param center a pointer to a point indicating the point around which
 *               dstrect will be rotated (if NULL, rotation will be done
 *               around dstrect.w/2, dstrect.h/2).
 * @param flip an SDL_FlipMode value stating which flipping actions should be
 *             performed on the texture.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function should only be called on the main thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_RenderTexture
 *
 * @from SDL_render.h:2141 bool SDL_RenderTextureRotated(SDL_Renderer *renderer, SDL_Texture *texture,                                                     const SDL_FRect *srcrect, const SDL_FRect *dstrect,                                                     double angle, const SDL_FPoint *center,                                                     SDL_FlipMode flip);
 */
SDL_RenderTextureRotated: {
      parameters: ["pointer", "pointer", "pointer", "pointer", "f64", "pointer", "u32"],
      result: "bool"
    },


/**
 * Copy a portion of the source texture to the current rendering target, with
 * affine transform, at subpixel precision.
 *
 * @param renderer the renderer which should copy parts of a texture.
 * @param texture the source texture.
 * @param srcrect a pointer to the source rectangle, or NULL for the entire
 *                texture.
 * @param origin a pointer to a point indicating where the top-left corner of
 *               srcrect should be mapped to, or NULL for the rendering
 *               target's origin.
 * @param right a pointer to a point indicating where the top-right corner of
 *              srcrect should be mapped to, or NULL for the rendering
 *              target's top-right corner.
 * @param down a pointer to a point indicating where the bottom-left corner of
 *             srcrect should be mapped to, or NULL for the rendering target's
 *             bottom-left corner.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety You may only call this function from the main thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_RenderTexture
 *
 * @from SDL_render.h:2172 bool SDL_RenderTextureAffine(SDL_Renderer *renderer, SDL_Texture *texture,                                                     const SDL_FRect *srcrect, const SDL_FPoint *origin,                                                     const SDL_FPoint *right, const SDL_FPoint *down);
 */
SDL_RenderTextureAffine: {
      parameters: ["pointer", "pointer", "pointer", "pointer", "pointer", "pointer"],
      result: "bool"
    },


/**
 * Tile a portion of the texture to the current rendering target at subpixel
 * precision.
 *
 * The pixels in `srcrect` will be repeated as many times as needed to
 * completely fill `dstrect`.
 *
 * @param renderer the renderer which should copy parts of a texture.
 * @param texture the source texture.
 * @param srcrect a pointer to the source rectangle, or NULL for the entire
 *                texture.
 * @param scale the scale used to transform srcrect into the destination
 *              rectangle, e.g. a 32x32 texture with a scale of 2 would fill
 *              64x64 tiles.
 * @param dstrect a pointer to the destination rectangle, or NULL for the
 *                entire rendering target.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function should only be called on the main thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_RenderTexture
 *
 * @from SDL_render.h:2201 bool SDL_RenderTextureTiled(SDL_Renderer *renderer, SDL_Texture *texture, const SDL_FRect *srcrect, float scale, const SDL_FRect *dstrect);
 */
SDL_RenderTextureTiled: {
      parameters: ["pointer", "pointer", "pointer", "f32", "pointer"],
      result: "bool"
    },


/**
 * Perform a scaled copy using the 9-grid algorithm to the current rendering
 * target at subpixel precision.
 *
 * The pixels in the texture are split into a 3x3 grid, using the different
 * corner sizes for each corner, and the sides and center making up the
 * remaining pixels. The corners are then scaled using `scale` and fit into
 * the corners of the destination rectangle. The sides and center are then
 * stretched into place to cover the remaining destination rectangle.
 *
 * @param renderer the renderer which should copy parts of a texture.
 * @param texture the source texture.
 * @param srcrect the SDL_Rect structure representing the rectangle to be used
 *                for the 9-grid, or NULL to use the entire texture.
 * @param left_width the width, in pixels, of the left corners in `srcrect`.
 * @param right_width the width, in pixels, of the right corners in `srcrect`.
 * @param top_height the height, in pixels, of the top corners in `srcrect`.
 * @param bottom_height the height, in pixels, of the bottom corners in
 *                      `srcrect`.
 * @param scale the scale used to transform the corner of `srcrect` into the
 *              corner of `dstrect`, or 0.0f for an unscaled copy.
 * @param dstrect a pointer to the destination rectangle, or NULL for the
 *                entire rendering target.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function should only be called on the main thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_RenderTexture
 *
 * @from SDL_render.h:2235 bool SDL_RenderTexture9Grid(SDL_Renderer *renderer, SDL_Texture *texture, const SDL_FRect *srcrect, float left_width, float right_width, float top_height, float bottom_height, float scale, const SDL_FRect *dstrect);
 */
SDL_RenderTexture9Grid: {
      parameters: ["pointer", "pointer", "pointer", "f32", "f32", "f32", "f32", "f32", "pointer"],
      result: "bool"
    },


/**
 * Render a list of triangles, optionally using a texture and indices into the
 * vertex array Color and alpha modulation is done per vertex
 * (SDL_SetTextureColorMod and SDL_SetTextureAlphaMod are ignored).
 *
 * @param renderer the rendering context.
 * @param texture (optional) The SDL texture to use.
 * @param vertices vertices.
 * @param num_vertices number of vertices.
 * @param indices (optional) An array of integer indices into the 'vertices'
 *                array, if NULL all vertices will be rendered in sequential
 *                order.
 * @param num_indices number of indices.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function should only be called on the main thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_RenderGeometryRaw
 *
 * @from SDL_render.h:2259 bool SDL_RenderGeometry(SDL_Renderer *renderer,                                               SDL_Texture *texture,                                               const SDL_Vertex *vertices, int num_vertices,                                               const int *indices, int num_indices);
 */
SDL_RenderGeometry: {
      parameters: ["pointer", "pointer", "pointer", "i32", "pointer", "i32"],
      result: "bool"
    },


/**
 * Render a list of triangles, optionally using a texture and indices into the
 * vertex arrays Color and alpha modulation is done per vertex
 * (SDL_SetTextureColorMod and SDL_SetTextureAlphaMod are ignored).
 *
 * @param renderer the rendering context.
 * @param texture (optional) The SDL texture to use.
 * @param xy vertex positions.
 * @param xy_stride byte size to move from one element to the next element.
 * @param color vertex colors (as SDL_FColor).
 * @param color_stride byte size to move from one element to the next element.
 * @param uv vertex normalized texture coordinates.
 * @param uv_stride byte size to move from one element to the next element.
 * @param num_vertices number of vertices.
 * @param indices (optional) An array of indices into the 'vertices' arrays,
 *                if NULL all vertices will be rendered in sequential order.
 * @param num_indices number of indices.
 * @param size_indices index size: 1 (byte), 2 (short), 4 (int).
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function should only be called on the main thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_RenderGeometry
 *
 * @from SDL_render.h:2291 bool SDL_RenderGeometryRaw(SDL_Renderer *renderer,                                               SDL_Texture *texture,                                               const float *xy, int xy_stride,                                               const SDL_FColor *color, int color_stride,                                               const float *uv, int uv_stride,                                               int num_vertices,                                               const void *indices, int num_indices, int size_indices);
 */
SDL_RenderGeometryRaw: {
      parameters: ["pointer", "pointer", "pointer", "i32", "pointer", "i32", "pointer", "i32", "i32", "pointer", "i32", "i32"],
      result: "bool"
    },


/**
 * Read pixels from the current rendering target.
 *
 * The returned surface contains pixels inside the desired area clipped to the
 * current viewport, and should be freed with SDL_DestroySurface().
 *
 * Note that this returns the actual pixels on the screen, so if you are using
 * logical presentation you should use SDL_GetRenderLogicalPresentationRect()
 * to get the area containing your content.
 *
 * **WARNING**: This is a very slow operation, and should not be used
 * frequently. If you're using this on the main rendering target, it should be
 * called after rendering and before SDL_RenderPresent().
 *
 * @param renderer the rendering context.
 * @param rect an SDL_Rect structure representing the area to read, which will
 *             be clipped to the current viewport, or NULL for the entire
 *             viewport.
 * @returns a new SDL_Surface on success or NULL on failure; call
 *          SDL_GetError() for more information.
 *
 * @threadsafety This function should only be called on the main thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @from SDL_render.h:2324 SDL_Surface * SDL_RenderReadPixels(SDL_Renderer *renderer, const SDL_Rect *rect);
 */
SDL_RenderReadPixels: {
      parameters: ["pointer", "pointer"],
      result: "pointer"
    },


/**
 * Update the screen with any rendering performed since the previous call.
 *
 * SDL's rendering functions operate on a backbuffer; that is, calling a
 * rendering function such as SDL_RenderLine() does not directly put a line on
 * the screen, but rather updates the backbuffer. As such, you compose your
 * entire scene and *present* the composed backbuffer to the screen as a
 * complete picture.
 *
 * Therefore, when using SDL's rendering API, one does all drawing intended
 * for the frame, and then calls this function once per frame to present the
 * final drawing to the user.
 *
 * The backbuffer should be considered invalidated after each present; do not
 * assume that previous contents will exist between frames. You are strongly
 * encouraged to call SDL_RenderClear() to initialize the backbuffer before
 * starting each new frame's drawing, even if you plan to overwrite every
 * pixel.
 *
 * Please note, that in case of rendering to a texture - there is **no need**
 * to call `SDL_RenderPresent` after drawing needed objects to a texture, and
 * should not be done; you are only required to change back the rendering
 * target to default via `SDL_SetRenderTarget(renderer, NULL)` afterwards, as
 * textures by themselves do not have a concept of backbuffers. Calling
 * SDL_RenderPresent while rendering to a texture will still update the screen
 * with any current drawing that has been done _to the window itself_.
 *
 * @param renderer the rendering context.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function should only be called on the main thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_CreateRenderer
 * @sa SDL_RenderClear
 * @sa SDL_RenderFillRect
 * @sa SDL_RenderFillRects
 * @sa SDL_RenderLine
 * @sa SDL_RenderLines
 * @sa SDL_RenderPoint
 * @sa SDL_RenderPoints
 * @sa SDL_RenderRect
 * @sa SDL_RenderRects
 * @sa SDL_SetRenderDrawBlendMode
 * @sa SDL_SetRenderDrawColor
 *
 * @from SDL_render.h:2374 bool SDL_RenderPresent(SDL_Renderer *renderer);
 */
SDL_RenderPresent: {
      parameters: ["pointer"],
      result: "bool"
    },


/**
 * Destroy the specified texture.
 *
 * Passing NULL or an otherwise invalid texture will set the SDL error message
 * to "Invalid texture".
 *
 * @param texture the texture to destroy.
 *
 * @threadsafety This function should only be called on the main thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_CreateTexture
 * @sa SDL_CreateTextureFromSurface
 *
 * @from SDL_render.h:2391 void SDL_DestroyTexture(SDL_Texture *texture);
 */
SDL_DestroyTexture: {
      parameters: ["pointer"],
      result: "void"
    },


/**
 * Destroy the rendering context for a window and free all associated
 * textures.
 *
 * This should be called before destroying the associated window.
 *
 * @param renderer the rendering context.
 *
 * @threadsafety This function should only be called on the main thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_CreateRenderer
 *
 * @from SDL_render.h:2407 void SDL_DestroyRenderer(SDL_Renderer *renderer);
 */
SDL_DestroyRenderer: {
      parameters: ["pointer"],
      result: "void"
    },


/**
 * Force the rendering context to flush any pending commands and state.
 *
 * You do not need to (and in fact, shouldn't) call this function unless you
 * are planning to call into OpenGL/Direct3D/Metal/whatever directly, in
 * addition to using an SDL_Renderer.
 *
 * This is for a very-specific case: if you are using SDL's render API, and
 * you plan to make OpenGL/D3D/whatever calls in addition to SDL render API
 * calls. If this applies, you should call this function between calls to
 * SDL's render API and the low-level API you're using in cooperation.
 *
 * In all other cases, you can ignore this function.
 *
 * This call makes SDL flush any pending rendering work it was queueing up to
 * do later in a single batch, and marks any internal cached state as invalid,
 * so it'll prepare all its state again later, from scratch.
 *
 * This means you do not need to save state in your rendering code to protect
 * the SDL renderer. However, there lots of arbitrary pieces of Direct3D and
 * OpenGL state that can confuse things; you should use your best judgment and
 * be prepared to make changes if specific state needs to be protected.
 *
 * @param renderer the rendering context.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function should only be called on the main thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @from SDL_render.h:2440 bool SDL_FlushRenderer(SDL_Renderer *renderer);
 */
SDL_FlushRenderer: {
      parameters: ["pointer"],
      result: "bool"
    },


/**
 * Get the CAMetalLayer associated with the given Metal renderer.
 *
 * This function returns `void *`, so SDL doesn't have to include Metal's
 * headers, but it can be safely cast to a `CAMetalLayer *`.
 *
 * @param renderer the renderer to query.
 * @returns a `CAMetalLayer *` on success, or NULL if the renderer isn't a
 *          Metal renderer.
 *
 * @threadsafety This function should only be called on the main thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_GetRenderMetalCommandEncoder
 *
 * @from SDL_render.h:2458 void * SDL_GetRenderMetalLayer(SDL_Renderer *renderer);
 */
SDL_GetRenderMetalLayer: {
      parameters: ["pointer"],
      result: "pointer"
    },


/**
 * Get the Metal command encoder for the current frame.
 *
 * This function returns `void *`, so SDL doesn't have to include Metal's
 * headers, but it can be safely cast to an `id<MTLRenderCommandEncoder>`.
 *
 * This will return NULL if Metal refuses to give SDL a drawable to render to,
 * which might happen if the window is hidden/minimized/offscreen. This
 * doesn't apply to command encoders for render targets, just the window's
 * backbuffer. Check your return values!
 *
 * @param renderer the renderer to query.
 * @returns an `id<MTLRenderCommandEncoder>` on success, or NULL if the
 *          renderer isn't a Metal renderer or there was an error.
 *
 * @threadsafety This function should only be called on the main thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_GetRenderMetalLayer
 *
 * @from SDL_render.h:2481 void * SDL_GetRenderMetalCommandEncoder(SDL_Renderer *renderer);
 */
SDL_GetRenderMetalCommandEncoder: {
      parameters: ["pointer"],
      result: "pointer"
    },


/**
 * Add a set of synchronization semaphores for the current frame.
 *
 * The Vulkan renderer will wait for `wait_semaphore` before submitting
 * rendering commands and signal `signal_semaphore` after rendering commands
 * are complete for this frame.
 *
 * This should be called each frame that you want semaphore synchronization.
 * The Vulkan renderer may have multiple frames in flight on the GPU, so you
 * should have multiple semaphores that are used for synchronization. Querying
 * SDL_PROP_RENDERER_VULKAN_SWAPCHAIN_IMAGE_COUNT_NUMBER will give you the
 * maximum number of semaphores you'll need.
 *
 * @param renderer the rendering context.
 * @param wait_stage_mask the VkPipelineStageFlags for the wait.
 * @param wait_semaphore a VkSempahore to wait on before rendering the current
 *                       frame, or 0 if not needed.
 * @param signal_semaphore a VkSempahore that SDL will signal when rendering
 *                         for the current frame is complete, or 0 if not
 *                         needed.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety It is **NOT** safe to call this function from two threads at
 *               once.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @from SDL_render.h:2512 bool SDL_AddVulkanRenderSemaphores(SDL_Renderer *renderer, Uint32 wait_stage_mask, Sint64 wait_semaphore, Sint64 signal_semaphore);
 */
SDL_AddVulkanRenderSemaphores: {
      parameters: ["pointer", "u32", "i64", "i64"],
      result: "bool"
    },


/**
 * Toggle VSync of the given renderer.
 *
 * When a renderer is created, vsync defaults to SDL_RENDERER_VSYNC_DISABLED.
 *
 * The `vsync` parameter can be 1 to synchronize present with every vertical
 * refresh, 2 to synchronize present with every second vertical refresh, etc.,
 * SDL_RENDERER_VSYNC_ADAPTIVE for late swap tearing (adaptive vsync), or
 * SDL_RENDERER_VSYNC_DISABLED to disable. Not every value is supported by
 * every driver, so you should check the return value to see whether the
 * requested setting is supported.
 *
 * @param renderer the renderer to toggle.
 * @param vsync the vertical refresh sync interval.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function should only be called on the main thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_GetRenderVSync
 *
 * @from SDL_render.h:2537 bool SDL_SetRenderVSync(SDL_Renderer *renderer, int vsync);
 */
SDL_SetRenderVSync: {
      parameters: ["pointer", "i32"],
      result: "bool"
    },


/**
 * Get VSync of the given renderer.
 *
 * @param renderer the renderer to toggle.
 * @param vsync an int filled with the current vertical refresh sync interval.
 *              See SDL_SetRenderVSync() for the meaning of the value.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function should only be called on the main thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_SetRenderVSync
 *
 * @from SDL_render.h:2557 bool SDL_GetRenderVSync(SDL_Renderer *renderer, int *vsync);
 */
SDL_GetRenderVSync: {
      parameters: ["pointer", "pointer"],
      result: "bool"
    },


/**
 * Draw debug text to an SDL_Renderer.
 *
 * This function will render a string of text to an SDL_Renderer. Note that
 * this is a convenience function for debugging, with severe limitations, and
 * not intended to be used for production apps and games.
 *
 * Among these limitations:
 *
 * - It accepts UTF-8 strings, but will only renders ASCII characters.
 * - It has a single, tiny size (8x8 pixels). One can use logical presentation
 *   or scaling to adjust it, but it will be blurry.
 * - It uses a simple, hardcoded bitmap font. It does not allow different font
 *   selections and it does not support truetype, for proper scaling.
 * - It does no word-wrapping and does not treat newline characters as a line
 *   break. If the text goes out of the window, it's gone.
 *
 * For serious text rendering, there are several good options, such as
 * SDL_ttf, stb_truetype, or other external libraries.
 *
 * On first use, this will create an internal texture for rendering glyphs.
 * This texture will live until the renderer is destroyed.
 *
 * The text is drawn in the color specified by SDL_SetRenderDrawColor().
 *
 * @param renderer the renderer which should draw a line of text.
 * @param x the x coordinate where the top-left corner of the text will draw.
 * @param y the y coordinate where the top-left corner of the text will draw.
 * @param str the string to render.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function should only be called on the main thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_RenderDebugTextFormat
 * @sa SDL_DEBUG_TEXT_FONT_CHARACTER_SIZE
 *
 * @from SDL_render.h:2609 bool SDL_RenderDebugText(SDL_Renderer *renderer, float x, float y, const char *str);
 */
SDL_RenderDebugText: {
      parameters: ["pointer", "f32", "f32", "pointer"],
      result: "bool"
    },

} as const satisfies Deno.ForeignLibraryInterface;
