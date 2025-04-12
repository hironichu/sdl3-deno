import { UnsafeDataView } from "@g9wp/ptr";

import type { FPoint, FRect, Point, Rect } from "../gen/structs/SDL_rect.ts";
import * as _ from "../gen/structs/SDL_rect.ts";
export type { FPoint, FRect, Point, Rect };
import { Buf } from "@g9wp/ptr";

export interface Size {
  w: number;
  h: number;
}

export function writeRect(rect: Rect): Deno.PointerObject {
  const b = Buf.of(Int32Array, 4);
  _.write_Rect(rect, b.dataView);
  return b.pointer;
}

export function readRect(ptr: Deno.PointerObject): Rect {
  return _.read_Rect(UnsafeDataView(ptr, 16));
}

export function writeFRect(rect: FRect): Deno.PointerObject {
  const b = Buf.of(Float32Array, 4);
  _.write_FRect(rect, b.dataView);
  return b.pointer;
}

export function readFRect(ptr: Deno.PointerObject): FRect {
  return _.read_FRect(UnsafeDataView(ptr, 16));
}

export function writePoint(point: Point): Deno.PointerObject {
  const b = Buf.of(Int32Array, 4);
  _.write_Point(point, b.dataView);
  return b.pointer;
}

export function readPoint(ptr: Deno.PointerObject): Point {
  return _.read_Point(UnsafeDataView(ptr, 16));
}

export function writeFPoint(point: FPoint): Deno.PointerObject {
  const b = Buf.of(Float32Array, 4);
  _.write_FPoint(point, b.dataView);
  return b.pointer;
}

export function readFPoint(ptr: Deno.PointerObject): FPoint {
  return _.read_FPoint(UnsafeDataView(ptr, 16));
}
