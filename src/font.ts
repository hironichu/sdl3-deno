import * as SDL_TTF from "../gen/TTF.ts";
import { cstr } from "./_utils.ts";
import { Buf, Ptr } from "jsr:@g9wp/ptr";
// import { UnsafeDataView } from "@g9wp/ptr";
import { Color } from "./pixels.ts";
import { Surface } from "./surface.ts";
import { I32 } from "@denosaurs/byte-type";

const ttf = SDL_TTF.init();
if (!ttf) {
  throw new Error("TTF_Init failed");
}

export function TTF_Quit(): void {
  SDL_TTF.quit();
}

const _raw = Symbol.for("raw");

export class Font {
  [_raw]: Deno.PointerObject;

  private constructor(path: string, ptsize: number) {
    const font = SDL_TTF.openFont(cstr(path), ptsize);
    if (!font) {
      throw new Error("TTF_OpenFont failed");
    }

    this[_raw] = font;
  }


  getTextSize(
    text: string,
  ): { w: number; h: number } {
    const w = new Int32Array(1);
    const h = new Int32Array(1);
    const wptr = Deno.UnsafePointer.of(w);
    const hptr = Deno.UnsafePointer.of(h);
    const result = SDL_TTF.getStringSize(this[_raw], cstr(text), BigInt(text.length), wptr,  hptr);
    if (!result) {
      throw new Error("getStringSize failed");

    }
    return { w: w[0], h: h[0] };
  }


  static from(path: string, ptsize: number): Font {
    try {
      Deno.statSync(path);
      return new Font(path, ptsize);
    } catch (e) {
      throw new Error(`Font file not found: ${path}`);
    }
  }

  closeFont(): void {
    SDL_TTF.closeFont(this[_raw]);
  }
  setFontSize(ptsize: number): void {
    SDL_TTF.setFontSize(this[_raw], ptsize);
  }
  getFontSize(): number {
    return SDL_TTF.getFontSize(this[_raw]);
  }
  getFontHeight(): number {
    return SDL_TTF.getFontHeight(this[_raw]);
  }
  getFontAscent(): number {
    return SDL_TTF.getFontAscent(this[_raw]);
  }
  getFontDescent(): number {
    return SDL_TTF.getFontDescent(this[_raw]);
  }
  getFontLineSkip(): number {
    return SDL_TTF.getFontLineSkip(this[_raw]);
  }

  getFontKerning(): boolean {
    return SDL_TTF.getFontKerning(this[_raw]);
  }
  setFontKerning(allowed: boolean): void {
    SDL_TTF.setFontKerning(this[_raw], allowed);
  }
  getFontHinting(): SDL_TTF.HINTING {
    return SDL_TTF.getFontHinting(this[_raw]);
  }

  setFontHinting(hinting: SDL_TTF.HINTING): void {
    SDL_TTF.setFontHinting(this[_raw], hinting);
  }

  getFontDirection(): SDL_TTF.DIRECTION {
    return SDL_TTF.getFontDirection(this[_raw]);
  }

  setFontDirection(direction: SDL_TTF.DIRECTION): void {
    SDL_TTF.setFontDirection(this[_raw], direction);
  }

  renderText_Solid(
    text: string,
    fg: Color,
  ): Surface {
    const surface = SDL_TTF.renderTextSolid(
      this[_raw],
      cstr(text),
      BigInt(text.length),
      fg.source,
    );
    if (!surface) {
      throw new Error("renderTextSolid failed");
    }

    return Surface.of(surface);
  }

  renderText_Blended(
    text: string,
    fg: Color,
  ): Surface {
    const surface = SDL_TTF.renderTextBlended(
      this[_raw],
      cstr(text),
      BigInt(text.length),
      fg.source,
    );
    if (!surface) {
      throw new Error("renderTextBlended failed");
    }

    return Surface.of(surface);
  }

  renderText_Shaded(
    text: string,
    fg: Color,
    bg: Color,
  ): Surface {
    const surface = SDL_TTF.renderTextShaded(
      this[_raw],
      cstr(text),
      BigInt(text.length),
      fg.source,
      bg.source,
    );
    if (!surface) {
      throw new Error("renderTextShaded failed");
    }

    return Surface.of(surface);
  }

  renderText_Lcd(
    text: string,
    fg: Color,
    bg: Color,
  ): Surface {
    const surface = SDL_TTF.renderTextLcd(
      this[_raw],
      cstr(text),
      BigInt(text.length),
      fg.source,
      bg.source,
    );
    if (!surface) {
      throw new Error("renderTextLcd failed");
    }

    return Surface.of(surface);
  }
}
