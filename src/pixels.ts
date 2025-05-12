import { SDL_Color } from "../gen/_structs/SDL_pixels.ts";


const internal = Symbol.for("internal");

export class Color {

  [internal]: DataView;


  constructor(r = 0, g = 0, b = 0, a = 255) {
    if (!Color.check(r, g, b, a)) {
        throw new Error("Color values must be between 0 and 255");
    }
    const buff = new Uint8Array(4);
    const view = new DataView(buff.buffer);

    SDL_Color.write({
        r: r, /** Uint8 */
        g: g, /** Uint8 */
        b: b, /** Uint8 */
        a: a, /** Uint8 */
    }, view);
    
    this[internal] = view;
  }


  get source(): BufferSource {
    return this[internal];
  }

  set values({r, g, b, a}: { r: number; g: number; b: number; a: number }) {
    const c = { r, g, b, a };
    if (!Color.check(c.r, c.g, c.b, c.a)) {
      throw new Error("Color values must be between 0 and 255");
    }
    if (this[internal].byteLength !== 4) {
      throw new Error("Color buffer is not 4 bytes long");
    }
    SDL_Color.write({
        r: c.r, /** Uint8 */
        g: c.g, /** Uint8 */
        b: c.b, /** Uint8 */
        a: c.a, /** Uint8 */
    }, this[internal]);
  }


  static check(r: number,g: number,b: number, a: number = 0): boolean {
    if (r > 255 || g > 255 || b > 255 || a > 255) return false;
    if (r < 0 || g < 0 || b < 0 || a < 0) return false;
    return true;
  }
    
}
