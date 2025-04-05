import { SDL } from "./gen/SDL.ts";
import { IMG } from "./gen/IMG.ts";

export { SDL };
export { IMG };

import { callbacks as CB } from "./gen/callbacks/mod.ts";

type TrayEntryUnsafeCallback = Deno.UnsafeCallback<typeof CB.SDL_TrayCallback>;

type TrayEntryCallback = (
  userdata: Deno.PointerValue,
  entry: Deno.PointerValue,
) => void;

const enc = new TextEncoder();

export function cstr(s?: string): Deno.PointerValue {
  if (!s) return null;
  return Deno.UnsafePointer.of(enc.encode(`${s}\0`));
}

function ptr_view(p: Deno.PointerValue): Deno.UnsafePointerView {
  if (!p) throw new Error("Pointer is null");
  return new Deno.UnsafePointerView(p);
}

export function read_cstr(p: Deno.PointerValue): string {
  return ptr_view(p).getCString();
}

export function getErr(): string {
  const e = SDL.getError();
  return read_cstr(e);
}

export class Surface {
  pointer: Deno.PointerValue<unknown> = null;

  constructor(imagePath?: string) {
    if (!imagePath) return;
    this.load(imagePath);
  }

  /**
   * Load an image from a filesystem path into a software surface.
   *
   * An SDL_Surface is a buffer of pixels in memory accessible by the CPU. Use
   * this if you plan to hand the data to something else or manipulate it
   * further in code.
   *
   * There are no guarantees about what format the new SDL_Surface data will be;
   * in many cases, SDL_image will attempt to supply a surface that exactly
   * matches the provided image, but in others it might have to convert (either
   * because the image is in a format that SDL doesn't directly support or
   * because it's compressed data that could reasonably uncompress to various
   * formats and SDL_image had to pick one). You can inspect an SDL_Surface for
   * its specifics, and use SDL_ConvertSurface to then migrate to any supported
   * format.
   *
   * If the image format supports a transparent pixel, SDL will set the colorkey
   * for the surface. You can enable RLE acceleration on the surface afterwards
   * by calling: SDL_SetSurfaceColorKey(image, SDL_RLEACCEL,
   * image->format->colorkey);
   *
   * There is a separate function to read files from an SDL_IOStream, if you
   * need an i/o abstraction to provide data from anywhere instead of a simple
   * filesystem read; that function is IMG_Load_IO().
   *
   * If you are using SDL's 2D rendering API, there is an equivalent call to
   * load images directly into an SDL_Texture for use by the GPU without using a
   * software surface: call IMG_LoadTexture() instead.
   *
   * When done with the returned surface, the app should dispose of it with a
   * call to
   * [SDL_DestroySurface](https://wiki.libsdl.org/SDL3/SDL_DestroySurface)
   * ().
   *
   * @param imagePath a path on the filesystem to load an image from.
   * @returns a new SDL surface, or NULL on error.
   *
   * @since This function is available since SDL_image 3.0.0.
   *
   * @sa IMG_LoadTyped_IO
   * @sa IMG_Load_IO
   * @sa SDL_DestroySurface
   *
   * @from SDL_image.h:177 SDL_Surface * IMG_Load(const char *file);
   */
  load(imagePath: string) {
    this.pointer = IMG.load(cstr(imagePath));
    if (!this.pointer) {
      throw new Error(`Failed to load image: ${getErr()}`);
    }
    return this.pointer;
  }

  /**
   * Load an image from an SDL data source into a software surface.
   *
   * An SDL_Surface is a buffer of pixels in memory accessible by the CPU. Use
   * this if you plan to hand the data to something else or manipulate it
   * further in code.
   *
   * There are no guarantees about what format the new SDL_Surface data will be;
   * in many cases, SDL_image will attempt to supply a surface that exactly
   * matches the provided image, but in others it might have to convert (either
   * because the image is in a format that SDL doesn't directly support or
   * because it's compressed data that could reasonably uncompress to various
   * formats and SDL_image had to pick one). You can inspect an SDL_Surface for
   * its specifics, and use SDL_ConvertSurface to then migrate to any supported
   * format.
   *
   * If the image format supports a transparent pixel, SDL will set the colorkey
   * for the surface. You can enable RLE acceleration on the surface afterwards
   * by calling: SDL_SetSurfaceColorKey(image, SDL_RLEACCEL,
   * image->format->colorkey);
   *
   * If `closeio` is true, `src` will be closed before returning, whether this
   * function succeeds or not. SDL_image reads everything it needs from `src`
   * during this call in any case.
   *
   * There is a separate function to read files from disk without having to deal
   * with SDL_IOStream: `IMG_Load("filename.jpg")` will call this function and
   * manage those details for you, determining the file type from the filename's
   * extension.
   *
   * There is also IMG_LoadTyped_IO(), which is equivalent to this function
   * except a file extension (like "BMP", "JPG", etc) can be specified, in case
   * SDL_image cannot autodetect the file format.
   *
   * If you are using SDL's 2D rendering API, there is an equivalent call to
   * load images directly into an SDL_Texture for use by the GPU without using a
   * software surface: call IMG_LoadTexture_IO() instead.
   *
   * When done with the returned surface, the app should dispose of it with a
   * call to SDL_DestroySurface().
   *
   * @param buffer data will be read from.
   * @returns a new SDL surface, or NULL on error.
   *
   * @since This function is available since SDL_image 3.0.0.
   *
   * @sa IMG_Load
   * @sa IMG_LoadTyped_IO
   * @sa SDL_DestroySurface
   *
   * @from SDL_image.h:231 SDL_Surface * IMG_Load_IO(SDL_IOStream *src, bool closeio);
   */
  loadMem(buffer: Uint8Array) {
    const io = SDL.ioFromConstMem(
      Deno.UnsafePointer.of(buffer),
      BigInt(buffer.length),
    );
    this.pointer = IMG.loadIo(io, false);
    if (!this.pointer) {
      throw new Error(`Failed to load image: ${getErr()}`);
    }
    return this.pointer;
  }

  /**
   * Load an image from an SDL data source into a software surface.
   *
   * An SDL_Surface is a buffer of pixels in memory accessible by the CPU. Use
   * this if you plan to hand the data to something else or manipulate it
   * further in code.
   *
   * There are no guarantees about what format the new SDL_Surface data will be;
   * in many cases, SDL_image will attempt to supply a surface that exactly
   * matches the provided image, but in others it might have to convert (either
   * because the image is in a format that SDL doesn't directly support or
   * because it's compressed data that could reasonably uncompress to various
   * formats and SDL_image had to pick one). You can inspect an SDL_Surface for
   * its specifics, and use SDL_ConvertSurface to then migrate to any supported
   * format.
   *
   * If the image format supports a transparent pixel, SDL will set the colorkey
   * for the surface. You can enable RLE acceleration on the surface afterwards
   * by calling: SDL_SetSurfaceColorKey(image, SDL_RLEACCEL,
   * image->format->colorkey);
   *
   * If `closeio` is true, `src` will be closed before returning, whether this
   * function succeeds or not. SDL_image reads everything it needs from `src`
   * during this call in any case.
   *
   * Even though this function accepts a file type, SDL_image may still try
   * other decoders that are capable of detecting file type from the contents of
   * the image data, but may rely on the caller-provided type string for formats
   * that it cannot autodetect. If `type` is NULL, SDL_image will rely solely on
   * its ability to guess the format.
   *
   * There is a separate function to read files from disk without having to deal
   * with SDL_IOStream: `IMG_Load("filename.jpg")` will call this function and
   * manage those details for you, determining the file type from the filename's
   * extension.
   *
   * There is also IMG_Load_IO(), which is equivalent to this function except
   * that it will rely on SDL_image to determine what type of data it is
   * loading, much like passing a NULL for type.
   *
   * If you are using SDL's 2D rendering API, there is an equivalent call to
   * load images directly into an SDL_Texture for use by the GPU without using a
   * software surface: call IMG_LoadTextureTyped_IO() instead.
   *
   * When done with the returned surface, the app should dispose of it with a
   * call to SDL_DestroySurface().
   *
   * @param buffer data will be read from.
   * @param fmt_hint a filename extension that represent this data ("BMP", "GIF",
   *             "PNG", etc).
   * @returns a new SDL surface, or NULL on error.
   *
   * @since This function is available since SDL_image 3.0.0.
   *
   * @sa IMG_Load
   * @sa IMG_Load_IO
   * @sa SDL_DestroySurface
   *
   * @from SDL_image.h:132 SDL_Surface * IMG_LoadTyped_IO(SDL_IOStream *src, bool closeio, const char *type);
   */
  loadMemTyped(buffer: Uint8Array, fmt_hint: string) {
    const io = SDL.ioFromConstMem(
      Deno.UnsafePointer.of(buffer),
      BigInt(buffer.length),
    );
    this.pointer = IMG.loadTypedIo(io, false, cstr(fmt_hint));
    if (!this.pointer) {
      throw new Error(`Failed to load image: ${getErr()}`);
    }
    return this.pointer;
  }
  /**
   * Free a surface.
   *
   * It is safe to pass NULL to this function.
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
  destroy() {
    SDL.destroySurface(this.pointer);
    this.pointer = null;
  }
}

export function init_pumpEvents(tick = 1000 / 60): number {
  if (!SDL.init(SDL.INIT.VIDEO | SDL.INIT.EVENTS)) {
    throw new Error("SDL init video and events failed");
  }
  return setInterval(SDL.pumpEvents, tick);
}

export interface TrayOption {
  icon?: string;
  tooltip?: string;
  menu?: TrayEntryOption[];
}

export type TrayEntryFlag =
  | "button" /**< Make the entry a simple button. Required. */
  | "checkbox" /**< Make the entry a checkbox. Required. */
  | "submenu" /**< Prepare the entry to have a submenu. Required */
  | "disabled" /**< Make the entry disabled. Optional. */
  | "checked"; /**< Make the entry checked. This is valid only for checkboxes. Optional. */

export interface TrayEntryOption {
  pos?: number;
  label?: string;
  flag?: TrayEntryFlag | TrayEntryFlag[];
  action?: TrayEntryCallback;
  submenu?: TrayEntryOption[];
  userdata?: Deno.PointerValue;
}

/**
 * An opaque handle representing a toplevel system tray object.
 *
 * #example
 * ```typescript
 * const tray = new Tray({
 *   icon: "icon.png",
 *   tooltip: "My App",
 *   menu: [
 *     { label: "Item 1", action: () => console.log("Item 1 clicked") },
 *     { label: "Item 2", action: () => console.log("Item 2 clicked") },
 *     { label: "Item 3", submenu: [
 *       { label: "Subitem 1", action: () => console.log("Subitem 1 clicked") },
 *       { label: "Subitem 2", action: () => console.log("Subitem 2 clicked") },
 *     ] },
 *     {}, // a separator
 *     { label: "quit", action: () => {tray.destroy(); clearInterval(eventPumpInterval); SDL.quit(); } },
 *   ],
 * });
 * ```
 */
export class Tray {
  pointer: Deno.PointerValue;
  private entryCb: TrayEntryUnsafeCallback[] = [];

  constructor({ icon, tooltip, menu }: TrayOption, tray?: Deno.PointerValue) {
    this.pointer = tray !== undefined ? tray : Tray.create(icon, tooltip);
    if (menu && this.pointer) {
      this.createMenu().createSubmenu(this, menu);
    }
  }

  static of(tray: Deno.PointerValue): Tray {
    return new Tray({}, tray);
  }

  /**
   * Create an icon to be placed in the operating system's tray, or equivalent.
   *
   * Many platforms advise not using a system tray unless persistence is a
   * necessary feature. Avoid needlessly creating a tray icon, as the user may
   * feel like it clutters their interface.
   *
   * Using tray icons require the video subsystem.
   *
   * @param icon a surface to be used as icon. May be NULL.
   * @param tooltip a tooltip to be displayed when the mouse hovers the icon in
   *                UTF-8 encoding. Not supported on all platforms. May be NULL.
   * @returns The newly created system tray icon.
   *
   * @threadsafety This function should only be called on the main thread.
   *
   * @since This function is available since SDL 3.2.0.
   *
   * @sa SDL_CreateTrayMenu
   * @sa SDL_GetTrayMenu
   * @sa SDL_DestroyTray
   *
   * @from SDL_tray.h:120 SDL_Tray * SDL_CreateTray(SDL_Surface *icon, const char *tooltip);
   */
  static create(icon?: string, tooltip?: string): Deno.PointerValue {
    const s = new Surface(icon);
    const tray = SDL.createTray(s.pointer, cstr(tooltip));
    s.destroy();
    if (!tray) {
      throw new Error(`Failed to create system tray: ${getErr()}`);
    }
    return tray;
  }

  static destroy(tray: Deno.PointerValue) {
    SDL.destroyTray(tray);
  }

  /**
   * Destroys a tray object.
   *
   * This also destroys all associated menus and entries.
   *
   * @threadsafety This function should be called on the thread that created the
   *               tray.
   *
   * @since This function is available since SDL 3.2.0.
   *
   * @sa SDL_CreateTray
   *
   * @from SDL_tray.h:468 void SDL_DestroyTray(SDL_Tray *tray);
   */
  destroy() {
    Tray.destroy(this.pointer);
    this.pointer = null;

    let c;
    do {
      c = this.entryCb.pop();
      if (c) c.close();
    } while (c);
  }

  static setIcon(tray: Deno.PointerValue, iconPath?: string) {
    const icon = iconPath ? new Surface(iconPath) : null;
    SDL.setTrayIcon(tray, icon?.pointer ?? null);
    icon?.destroy();
  }

  /**
   * Updates the system tray icon's icon.
   *
   * @param icon the new icon. May be NULL.
   *
   * @threadsafety This function should be called on the thread that created the
   *               tray.
   *
   * @since This function is available since SDL 3.2.0.
   *
   * @sa SDL_CreateTray
   *
   * @from SDL_tray.h:135 void SDL_SetTrayIcon(SDL_Tray *tray, SDL_Surface *icon);
   */
  setIcon(iconPath?: string) {
    Tray.setIcon(this.pointer, iconPath);
  }

  static setTooltip(tray: Deno.PointerValue, tooltip?: string) {
    SDL.setTrayTooltip(tray, cstr(tooltip));
  }
  /**
   * Updates the system tray icon's tooltip.
   *
   * @param tooltip the new tooltip in UTF-8 encoding. May be NULL.
   *
   * @threadsafety This function should be called on the thread that created the
   *               tray.
   *
   * @since This function is available since SDL 3.2.0.
   *
   * @sa SDL_CreateTray
   *
   * @from SDL_tray.h:150 void SDL_SetTrayTooltip(SDL_Tray *tray, const char *tooltip);
   */
  setTooltip(tooltip?: string) {
    Tray.setTooltip(this.pointer, tooltip);
  }
  static createMenu(tray: Deno.PointerValue): Deno.PointerValue {
    const menu = SDL.createTrayMenu(tray);
    if (!menu) {
      throw new Error(`Failed to create menu: ${getErr()}`);
    }
    return menu;
  }
  /**
   * Create a menu for a system tray.
   *
   * This should be called at most once per tray icon.
   *
   * This function does the same thing as SDL_CreateTraySubmenu(), except that
   * it takes a SDL_Tray instead of a SDL_TrayEntry.
   *
   * A menu does not need to be destroyed; it will be destroyed with the tray.
   *
   * @returns the newly created menu.
   *
   * @threadsafety This function should be called on the thread that created the
   *               tray.
   *
   * @since This function is available since SDL 3.2.0.
   *
   * @sa SDL_CreateTray
   * @sa SDL_GetTrayMenu
   * @sa SDL_GetTrayMenuParentTray
   *
   * @from SDL_tray.h:174 SDL_TrayMenu * SDL_CreateTrayMenu(SDL_Tray *tray);
   */
  createMenu(): TrayMenu {
    return TrayMenu.of(Tray.createMenu(this.pointer));
  }

  static createSubmenu(entry: Deno.PointerValue): Deno.PointerValue {
    const menu = SDL.createTraySubmenu(entry);
    if (!menu) {
      throw new Error(`Failed to create sub menu: ${getErr()}`);
    }
    return menu;
  }

  static getMenu(tray: Deno.PointerValue): Deno.PointerValue {
    return SDL.getTrayMenu(tray);
  }

  /**
   * Gets a previously created tray menu.
   *
   * You should have called SDL_CreateTrayMenu() on the tray object. This
   * function allows you to fetch it again later.
   *
   * This function does the same thing as SDL_GetTraySubmenu(), except that it
   * takes a SDL_Tray instead of a SDL_TrayEntry.
   *
   * A menu does not need to be destroyed; it will be destroyed with the tray.
   *
   * @returns the newly created menu.
   *
   * @threadsafety This function should be called on the thread that created the
   *               tray.
   *
   * @since This function is available since SDL 3.2.0.
   *
   * @sa SDL_CreateTray
   * @sa SDL_CreateTrayMenu
   *
   * @from SDL_tray.h:222 SDL_TrayMenu * SDL_GetTrayMenu(SDL_Tray *tray);
   */
  get menu(): TrayMenu {
    return TrayMenu.of(Tray.getMenu(this.pointer));
  }

  static getSubmenu(entry: Deno.PointerValue): Deno.PointerValue {
    return SDL.getTraySubmenu(entry);
  }

  static getEntries(menu: Deno.PointerValue): Deno.PointerValue[] {
    const a = SDL.getTrayEntries(menu, null);
    if (!a) return [];

    const entries = [];
    const d = ptr_view(a);
    let i = 0;
    while (true) {
      // FIXME: suppose pointer size is 8 bytes
      const p = d.getBigUint64(i);
      if (p === 0n) {
        break;
      }
      i += 8;
      entries.push(Deno.UnsafePointer.create(p));
    }

    return entries;
  }

  static removeEntry(entry: Deno.PointerValue) {
    SDL.removeTrayEntry(entry);
  }

  static insertEntryAt(
    menu: Deno.PointerValue,
    pos: number,
    label: string,
    flag: number,
  ): Deno.PointerValue {
    return SDL.insertTrayEntryAt(menu, pos, cstr(label), flag);
  }

  static setEntryLabel(entry: Deno.PointerValue, label: string) {
    SDL.setTrayEntryLabel(entry, cstr(label));
  }

  static getEntryLabel(entry: Deno.PointerValue): string {
    const label = SDL.getTrayEntryLabel(entry);
    return label ? read_cstr(label) : "";
  }

  static setEntryChecked(entry: Deno.PointerValue, checked: boolean) {
    SDL.setTrayEntryChecked(entry, checked);
  }
  static getEntryChecked(entry: Deno.PointerValue): boolean {
    return SDL.getTrayEntryChecked(entry);
  }
  static setEntryEnabled(entry: Deno.PointerValue, enabled: boolean) {
    SDL.setTrayEntryEnabled(entry, enabled);
  }
  static getEntryEnabled(entry: Deno.PointerValue): boolean {
    return SDL.getTrayEntryEnabled(entry);
  }

  static setEntryCallback(
    entry: Deno.PointerValue,
    callback: TrayEntryCallback,
    userdata: Deno.PointerValue = null,
  ): TrayEntryUnsafeCallback {
    const c = new Deno.UnsafeCallback(CB.SDL_TrayCallback, callback);
    SDL.setTrayEntryCallback(entry, c.pointer, userdata);
    return c;
  }

  /**
   * Sets a callback to be invoked when the entry is selected.
   *
   * @param entry the entry to be updated.
   * @param callback a callback to be invoked when the entry is selected.
   * @param userdata an optional pointer to pass extra data to the callback when
   *                 it will be invoked.
   *
   * @threadsafety This function should be called on the thread that created the
   *               tray.
   *
   * @since This function is available since SDL 3.2.0.
   *
   * @sa SDL_GetTrayEntries
   * @sa SDL_InsertTrayEntryAt
   *
   * @from SDL_tray.h:440 void SDL_SetTrayEntryCallback(SDL_TrayEntry *entry, SDL_TrayCallback callback, void *userdata);
   */
  setEntryCallback(
    entry: Deno.PointerValue,
    callback: TrayEntryCallback,
    userdata: Deno.PointerValue = null,
  ) {
    const c = Tray.setEntryCallback(entry, callback, userdata);
    this.entryCb.push(c);
  }

  static clickEntry(entry: Deno.PointerValue) {
    SDL.clickTrayEntry(entry);
  }

  static getEntryParent(entry: Deno.PointerValue): Deno.PointerValue {
    return SDL.getTrayEntryParent(entry);
  }

  static getMenuParentEntry(entry: Deno.PointerValue): Deno.PointerValue {
    return SDL.getTrayMenuParentEntry(entry);
  }

  static getMenuParentTray(menu: Deno.PointerValue): Deno.PointerValue {
    return SDL.getTrayMenuParentTray(menu);
  }

  static update() {
    SDL.updateTrays();
  }
}

/**
 * An opaque handle representing an entry on a system tray object.
 */
export class TrayEntry {
  pointer: Deno.PointerValue;

  constructor(pointer: Deno.PointerValue) {
    this.pointer = pointer;
  }

  static of(pointer: Deno.PointerValue) {
    return new TrayEntry(pointer);
  }

  static getParentMenu(entry: Deno.PointerValue): Deno.PointerValue {
    return Tray.getEntryParent(entry);
  }
  /**
   * Gets the menu containing a certain tray entry.
   *
   * @returns the parent menu.
   *
   * @threadsafety This function should be called on the thread that created the
   *               tray.
   *
   * @since This function is available since SDL 3.2.0.
   *
   * @sa SDL_InsertTrayEntryAt
   *
   * @from SDL_tray.h:483 SDL_TrayMenu * SDL_GetTrayEntryParent(SDL_TrayEntry *entry);
   */
  get parentMenu(): TrayMenu {
    return TrayMenu.of(TrayEntry.getParentMenu(this.pointer));
  }

  static createSubmenu(menu: Deno.PointerValue): Deno.PointerValue {
    return Tray.createSubmenu(menu);
  }

  /**
   * Create a submenu for a system tray entry.
   *
   * This should be called at most once per tray entry.
   *
   * This function does the same thing as SDL_CreateTrayMenu, except that it
   * takes a SDL_TrayEntry instead of a SDL_Tray.
   *
   * A menu does not need to be destroyed; it will be destroyed with the tray.
   *
   * @returns the newly created menu.
   *
   * @threadsafety This function should be called on the thread that created the
   *               tray.
   *
   * @since This function is available since SDL 3.2.0.
   *
   * @sa SDL_InsertTrayEntryAt
   * @sa SDL_GetTraySubmenu
   * @sa SDL_GetTrayMenuParentEntry
   *
   * @from SDL_tray.h:198 SDL_TrayMenu * SDL_CreateTraySubmenu(SDL_TrayEntry *entry);
   */
  createSubmenu(): TrayMenu {
    return new TrayMenu(TrayEntry.createSubmenu(this.pointer));
  }

  static getSubmenu(menu: Deno.PointerValue): Deno.PointerValue {
    return Tray.getSubmenu(menu);
  }

  /**
   * Gets a previously created tray entry submenu.
   *
   * You should have called SDL_CreateTraySubmenu() on the entry object. This
   * function allows you to fetch it again later.
   *
   * This function does the same thing as SDL_GetTrayMenu(), except that it
   * takes a SDL_TrayEntry instead of a SDL_Tray.
   *
   * A menu does not need to be destroyed; it will be destroyed with the tray.
   *
   * @returns the newly created menu.
   *
   * @threadsafety This function should be called on the thread that created the
   *               tray.
   *
   * @since This function is available since SDL 3.2.0.
   *
   * @sa SDL_InsertTrayEntryAt
   * @sa SDL_CreateTraySubmenu
   *
   * @from SDL_tray.h:246 SDL_TrayMenu * SDL_GetTraySubmenu(SDL_TrayEntry *entry);
   */
  get submenu(): TrayMenu {
    return TrayMenu.of(TrayEntry.getSubmenu(this.pointer));
  }

  static remove(entry: Deno.PointerValue) {
    Tray.removeEntry(entry);
  }

  /**
   * Removes a tray entry.
   *
   * @threadsafety This function should be called on the thread that created the
   *               tray.
   *
   * @since This function is available since SDL 3.2.0.
   *
   * @sa SDL_GetTrayEntries
   * @sa SDL_InsertTrayEntryAt
   *
   * @from SDL_tray.h:281 void SDL_RemoveTrayEntry(SDL_TrayEntry *entry);
   */
  remove() {
    TrayEntry.remove(this.pointer);
  }

  static setLabel(entry: Deno.PointerValue, label: string) {
    Tray.setEntryLabel(entry, label);
  }

  /**
   * Sets the label of an entry.
   *
   * An entry cannot change between a separator and an ordinary entry; that is,
   * it is not possible to set a non-NULL label on an entry that has a NULL
   * label (separators), or to set a NULL label to an entry that has a non-NULL
   * label. The function will silently fail if that happens.
   *
   * @param label the new label for the entry in UTF-8 encoding.
   *
   * @threadsafety This function should be called on the thread that created the
   *               tray.
   *
   * @since This function is available since SDL 3.2.0.
   *
   * @sa SDL_GetTrayEntries
   * @sa SDL_InsertTrayEntryAt
   * @sa SDL_GetTrayEntryLabel
   *
   * @from SDL_tray.h:331 void SDL_SetTrayEntryLabel(SDL_TrayEntry *entry, const char *label);
   */
  setLabel(label: string) {
    TrayEntry.setLabel(this.pointer, label);
  }
  static getLabel(entry: Deno.PointerValue): string {
    return Tray.getEntryLabel(entry);
  }
  /**
   * Gets the label of an entry.
   *
   * If the returned value is NULL, the entry is a separator.
   *
   * @returns the label of the entry in UTF-8 encoding.
   *
   * @threadsafety This function should be called on the thread that created the
   *               tray.
   *
   * @since This function is available since SDL 3.2.0.
   *
   * @sa SDL_GetTrayEntries
   * @sa SDL_InsertTrayEntryAt
   * @sa SDL_SetTrayEntryLabel
   *
   * @from SDL_tray.h:350 const char * SDL_GetTrayEntryLabel(SDL_TrayEntry *entry);
   */
  get label(): string {
    return TrayEntry.getLabel(this.pointer);
  }

  static setChecked(entry: Deno.PointerValue, checked: boolean = true) {
    Tray.setEntryChecked(entry, checked);
  }

  /**
   * Sets whether or not an entry is checked.
   *
   * The entry must have been created with the SDL_TRAYENTRY_CHECKBOX flag.
   *
   * @param checked true if the entry should be checked; false otherwise.
   *
   * @threadsafety This function should be called on the thread that created the
   *               tray.
   *
   * @since This function is available since SDL 3.2.0.
   *
   * @sa SDL_GetTrayEntries
   * @sa SDL_InsertTrayEntryAt
   * @sa SDL_GetTrayEntryChecked
   *
   * @from SDL_tray.h:369 void SDL_SetTrayEntryChecked(SDL_TrayEntry *entry, bool checked);
   */
  setChecked(checked: boolean = true) {
    TrayEntry.setChecked(this.pointer, checked);
  }
  static getChecked(entry: Deno.PointerValue) {
    return Tray.getEntryChecked(entry);
  }

  /**
   * Gets whether or not an entry is checked.
   *
   * The entry must have been created with the SDL_TRAYENTRY_CHECKBOX flag.
   *
   * @returns true if the entry is checked; false otherwise.
   *
   * @threadsafety This function should be called on the thread that created the
   *               tray.
   *
   * @since This function is available since SDL 3.2.0.
   *
   * @sa SDL_GetTrayEntries
   * @sa SDL_InsertTrayEntryAt
   * @sa SDL_SetTrayEntryChecked
   *
   * @from SDL_tray.h:388 bool SDL_GetTrayEntryChecked(SDL_TrayEntry *entry);
   */
  get checked() {
    return TrayEntry.getChecked(this.pointer);
  }

  static setEnabled(entry: Deno.PointerValue, enabled: boolean = true) {
    Tray.setEntryEnabled(entry, enabled);
  }
  /**
   * Sets whether or not an entry is enabled.
   *
   * @param entry the entry to be updated.
   * @param enabled true if the entry should be enabled; false otherwise.
   *
   * @threadsafety This function should be called on the thread that created the
   *               tray.
   *
   * @since This function is available since SDL 3.2.0.
   *
   * @sa SDL_GetTrayEntries
   * @sa SDL_InsertTrayEntryAt
   * @sa SDL_GetTrayEntryEnabled
   *
   * @from SDL_tray.h:405 void SDL_SetTrayEntryEnabled(SDL_TrayEntry *entry, bool enabled);
   */
  setEnabled(checked: boolean = true) {
    TrayEntry.setEnabled(this.pointer, checked);
  }
  static getEnabled(entry: Deno.PointerValue) {
    return Tray.getEntryEnabled(entry);
  }
  /**
   * Gets whether or not an entry is enabled.
   *
   * @returns true if the entry is enabled; false otherwise.
   *
   * @threadsafety This function should be called on the thread that created the
   *               tray.
   *
   * @since This function is available since SDL 3.2.0.
   *
   * @sa SDL_GetTrayEntries
   * @sa SDL_InsertTrayEntryAt
   * @sa SDL_SetTrayEntryEnabled
   *
   * @from SDL_tray.h:422 bool SDL_GetTrayEntryEnabled(SDL_TrayEntry *entry);
   */
  get enabled() {
    return TrayEntry.getEnabled(this.pointer);
  }

  static setCallback(
    entry: Deno.PointerValue,
    callback: TrayEntryCallback,
    userdata: Deno.PointerValue = null,
  ): TrayEntryUnsafeCallback {
    return Tray.setEntryCallback(entry, callback, userdata);
  }

  /**
   * Sets a callback to be invoked when the entry is selected.
   *
   * @param callback a callback to be invoked when the entry is selected.
   * @param userdata an optional pointer to pass extra data to the callback when
   *                 it will be invoked.
   *
   * @threadsafety This function should be called on the thread that created the
   *               tray.
   *
   * @since This function is available since SDL 3.2.0.
   *
   * @sa SDL_GetTrayEntries
   * @sa SDL_InsertTrayEntryAt
   *
   * @from SDL_tray.h:440 void SDL_SetTrayEntryCallback(SDL_TrayEntry *entry, SDL_TrayCallback callback, void *userdata);
   */
  setCallback(
    tray: Tray,
    callback: TrayEntryCallback,
    userdata: Deno.PointerValue = null,
  ) {
    tray.setEntryCallback(this.pointer, callback, userdata);
  }

  static click(entry: Deno.PointerValue) {
    Tray.clickEntry(entry);
  }

  /**
   * Simulate a click on a tray entry.
   *
   * @threadsafety This function should be called on the thread that created the
   *               tray.
   *
   * @since This function is available since SDL 3.2.0.
   *
   * @from SDL_tray.h:452 void SDL_ClickTrayEntry(SDL_TrayEntry *entry);
   */
  click() {
    TrayEntry.click(this.pointer);
  }
}

/**
 * An opaque handle representing a menu/submenu on a system tray object.
 */
export class TrayMenu {
  pointer: Deno.PointerValue;

  constructor(pointer: Deno.PointerValue) {
    this.pointer = pointer;
  }

  createSubmenu(tray: Tray, entries?: TrayEntryOption[]) {
    if (!entries || entries.length === 0) return;
    for (const { pos, label, flag, action, submenu, userdata } of entries) {
      const flagType = (s: TrayEntryFlag): number => {
        switch (s) {
          case "button":
            return SDL.TRAYENTRY.BUTTON;
          case "checkbox":
            return SDL.TRAYENTRY.CHECKBOX;
          case "submenu":
            return SDL.TRAYENTRY.SUBMENU;
          case "disabled":
            return SDL.TRAYENTRY.DISABLED;
          case "checked":
            return SDL.TRAYENTRY.CHECKED;
          default:
            return 0;
        }
      };
      const f = !flag
        ? 0
        : typeof flag === "string"
        ? flagType(flag)
        : flag.reduce((acc, cur) => acc | flagType(cur), 0);

      const e = this.insertEntryAt(pos ?? -1, label ?? "", f);

      if (action) {
        e.setCallback(tray, action, userdata ?? null);
      }

      if (submenu) {
        e.createSubmenu().createSubmenu(tray, submenu);
      }
    }
  }

  static of(pointer: Deno.PointerValue) {
    return new TrayMenu(pointer);
  }

  getParentTray(): Deno.PointerValue {
    return Tray.getMenuParentTray(this.pointer);
  }

  /**
   * Gets the tray for which this menu is the first-level menu, if the current
   * menu isn't a submenu.
   *
   * Either this function or SDL_GetTrayMenuParentEntry() will return non-NULL
   * for any given menu.
   *
   * @returns the parent tray, or NULL if this menu is a submenu.
   *
   * @threadsafety This function should be called on the thread that created the
   *               tray.
   *
   * @since This function is available since SDL 3.2.0.
   *
   * @sa SDL_CreateTrayMenu
   * @sa SDL_GetTrayMenuParentEntry
   *
   * @from SDL_tray.h:523 SDL_Tray * SDL_GetTrayMenuParentTray(SDL_TrayMenu *menu);
   */
  get parentTray(): Deno.PointerValue {
    return Tray.getMenuParentTray(this.pointer);
  }

  static getParentEntry(menu: Deno.PointerValue): Deno.PointerValue {
    return Tray.getMenuParentEntry(menu);
  }

  /**
   * Gets the entry for which the menu is a submenu, if the current menu is a
   * submenu.
   *
   * Either this function or SDL_GetTrayMenuParentTray() will return non-NULL
   * for any given menu.
   *
   * @returns the parent entry, or NULL if this menu is not a submenu.
   *
   * @threadsafety This function should be called on the thread that created the
   *               tray.
   *
   * @since This function is available since SDL 3.2.0.
   *
   * @sa SDL_CreateTraySubmenu
   * @sa SDL_GetTrayMenuParentTray
   *
   * @from SDL_tray.h:503 SDL_TrayEntry * SDL_GetTrayMenuParentEntry(SDL_TrayMenu *menu);
   */
  get parentEntry(): TrayEntry {
    return TrayEntry.of(TrayMenu.getParentEntry(this.pointer));
  }

  static getEntries(menu: Deno.PointerValue): Deno.PointerValue[] {
    return Tray.getEntries(menu);
  }

  /**
   * Returns a list of entries in the menu, in order.
   *
   * @returns a list of entries within the given menu. The
   *          pointer becomes invalid when any function that inserts or deletes
   *          entries in the menu is called.
   *
   * @threadsafety This function should be called on the thread that created the
   *               tray.
   *
   * @since This function is available since SDL 3.2.0.
   *
   * @sa SDL_RemoveTrayEntry
   * @sa SDL_InsertTrayEntryAt
   *
   * @from SDL_tray.h:266 const SDL_TrayEntry ** SDL_GetTrayEntries(SDL_TrayMenu *menu, int *count);
   */
  get entries(): TrayEntry[] {
    return TrayMenu.getEntries(this.pointer).map(TrayEntry.of);
  }

  static insertEntryAt(
    menu: Deno.PointerValue,
    pos: number,
    label: string,
    flag: number,
  ): Deno.PointerValue {
    return Tray.insertEntryAt(menu, pos, label, flag);
  }

  /**
   * Insert a tray entry at a given position.
   *
   * If label is NULL, the entry will be a separator. Many functions won't work
   * for an entry that is a separator.
   *
   * An entry does not need to be destroyed; it will be destroyed with the tray.
   *
   * @param pos the desired position for the new entry. Entries at or following
   *            this place will be moved. If pos is -1, the entry is appended.
   * @param label the text to be displayed on the entry, in UTF-8 encoding, or
   *              NULL for a separator.
   * @param flags a combination of flags, some of which are mandatory.
   * @returns the newly created entry, or NULL if pos is out of bounds.
   *
   * @threadsafety This function should be called on the thread that created the
   *               tray.
   *
   * @since This function is available since SDL 3.2.0.
   *
   * @sa SDL_TrayEntryFlags
   * @sa SDL_GetTrayEntries
   * @sa SDL_RemoveTrayEntry
   * @sa SDL_GetTrayEntryParent
   *
   * @from SDL_tray.h:309 SDL_TrayEntry * SDL_InsertTrayEntryAt(SDL_TrayMenu *menu, int pos, const char *label, SDL_TrayEntryFlags flags);
   */
  insertEntryAt(
    pos: number,
    label: string,
    flag: number,
  ): TrayEntry {
    return TrayEntry.of(TrayMenu.insertEntryAt(this.pointer, pos, label, flag));
  }
}
