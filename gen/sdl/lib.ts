import { symbols } from "../funcs/SDL.ts";
import { libSdlPath } from '../_utils.ts';

export const lib = Deno.dlopen(libSdlPath("SDL3"), symbols);
