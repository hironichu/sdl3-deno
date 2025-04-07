import { SDL } from "./gen/SDL.ts";

const enc = new TextEncoder();

export function cstr(s?: string): Deno.PointerValue {
  if (s === undefined) return null;
  return Deno.UnsafePointer.of(enc.encode(`${s}\0`));
}

export function cstr_v(s: string): bigint {
  return Deno.UnsafePointer.value(cstr(s));
}

export function ptr_view(p: Deno.PointerValue): Deno.UnsafePointerView {
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

export function throwSdlError(s?: string): string {
  throw new Error(`${s || "SDL Error"}: ${getErr()}`);
}

export function init_pumpEvents(tick = 1000 / 60): number {
  if (!SDL.init(SDL.INIT.VIDEO | SDL.INIT.EVENTS)) {
    throw new Error("SDL init video and events failed");
  }
  return setInterval(SDL.pumpEvents, tick);
}
