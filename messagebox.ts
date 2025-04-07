/**
 * # CategoryMessagebox
 *
 * SDL offers a simple message box API, which is useful for simple alerts,
 * such as informing the user when something fatal happens at startup without
 * the need to build a UI for it (or informing the user _before_ your UI is
 * ready).
 *
 * These message boxes are native system dialogs where possible.
 *
 * There is both a customizable function (SDL_ShowMessageBox()) that offers
 * lots of options for what to display and reports on what choice the user
 * made, and also a much-simplified version (SDL_ShowSimpleMessageBox()),
 * merely takes a text message and title, and waits until the user presses a
 * single "OK" UI button. Often, this is all that is necessary.
 *
 * @module
 */

import { SDL } from "./gen/SDL.ts";

import { cstr } from "./_utils.ts";

/** informational dialog  */
export function info(title: string, message: string, flags?: number): void {
  simple({ title, message, type: "information", flags });
}

/** warning dialog */
export function warn(title: string, message: string, flags?: number): void {
  simple({ title, message, type: "warning", flags });
}

/** error dialog */
export function error(title: string, message: string, flags?: number): void {
  simple({ title, message, type: "error", flags });
}

export type MsgBoxFlag = "information" | "warning" | "error";

function msgBoxFlag(f: MsgBoxFlag): number {
  switch (f) {
    case "information":
      return SDL.MESSAGEBOX.INFORMATION;
    case "warning":
      return SDL.MESSAGEBOX.WARNING;
    case "error":
      return SDL.MESSAGEBOX.ERROR;
    default:
      return 0;
  }
}

/**
 * Display a simple modal message box.
 *
 * If your needs aren't complex, this function is preferred over
 * SDL_ShowMessageBox.
 *
 * `flags` may be any of the following:
 *
 * - `SDL_MESSAGEBOX_ERROR`: error dialog
 * - `SDL_MESSAGEBOX_WARNING`: warning dialog
 * - `SDL_MESSAGEBOX_INFORMATION`: informational dialog
 *
 * This function should be called on the thread that created the parent
 * window, or on the main thread if the messagebox has no parent. It will
 * block execution of that thread until the user clicks a button or closes the
 * messagebox.
 *
 * This function may be called at any time, even before SDL_Init(). This makes
 * it useful for reporting errors like a failure to create a renderer or
 * OpenGL context.
 *
 * On X11, SDL rolls its own dialog box with X11 primitives instead of a
 * formal toolkit like GTK+ or Qt.
 *
 * Note that if SDL_Init() would fail because there isn't any available video
 * target, this function is likely to fail for the same reasons. If this is a
 * concern, check the return value from this function and fall back to writing
 * to stderr if you can.
 *
 * @param flags an SDL_MessageBoxFlags value.
 * @param title UTF-8 title text.
 * @param message UTF-8 message text.
 * @param window the parent window, or NULL for no parent.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_ShowMessageBox
 *
 * @from SDL_messagebox.h:216 bool SDL_ShowSimpleMessageBox(SDL_MessageBoxFlags flags, const char *title, const char *message, SDL_Window *window);
 */
export function simple(
  { title, message, window, flags, type }: {
    title: string;
    message: string;
    type?: string;
    flags?: number;
    window?: Deno.PointerValue;
  },
): void {
  let f = flags ?? 0;
  if (type) f |= msgBoxFlag(type);
  SDL.showSimpleMessageBox(
    f,
    cstr(title),
    cstr(message),
    window ?? null,
  );
}
