const DENO_SDL3_PATH = (() => {
  try {
    return Deno.env.get("DENO_SDL3_PATH");
  } catch (_) {
    return undefined;
  }
})();

const OS_PREFIX = Deno.build.os === "windows" ? "" : "lib";
const OS_SUFFIX = Deno.build.os === "windows"
  ? ".dll"
  : Deno.build.os === "darwin"
  ? ".dylib"
  : ".so";

export function libSdlPath(lib: string): string {
  lib = `${OS_PREFIX}${lib}${OS_SUFFIX}`;
  if (DENO_SDL3_PATH) {
    return `${DENO_SDL3_PATH}/${lib}`;
  } else {
    return `${import.meta.dirname}/../sdl3/${lib}`;
  }
}
