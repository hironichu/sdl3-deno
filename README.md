# sdl-tray

Deno FFI bindings for SDL3's tray functionality with safe wrappers.

## Overview

`sdl-tray` provides Deno FFI (Foreign Function Interface) bindings for SDL3's system tray functionality, along with safe TypeScript wrappers. This allows Deno applications to interact with native system tray features in a cross-platform way.

## Features

- Full FFI bindings for SDL_tray functionality
- Type-safe TypeScript wrappers
- Cross-platform support (Windows, macOS, Linux)
- Memory safety guarantees
- Simple, Deno-style API

## Installation

```typescript
import { Tray } from "./sdl3_tray.ts";

```

## Basic Usage

```typescript
import { SDL, Tray } from "./sdl3_tray.ts";

if (!SDL.init(SDL.INIT.VIDEO | SDL.INIT.EVENTS)) {
  throw new Error("SDL init video and events failed");
}
// call SDL.pollEvents if you need handle events
const pumpInterval = setInterval(SDL.pumpEvents, 1000 / 60);

const tray = new Tray("./examples/search.svg", "a tooltip");

const menu = tray.createMenu();

const entry = menu.insertEntryAt(
  -1,
  "a label",
  SDL.TRAYENTRY.BUTTON,
);

let clicked = 0;
entry.setCallback(tray, () => {
  console.log("Tray entry clicked!", ++clicked);
}, null);

// a separator
menu.insertEntryAt(-1, "", 0);

const quit = menu.insertEntryAt(
  -1,
  "Quit",
  SDL.TRAYENTRY.BUTTON,
);
quit.setCallback(tray, () => {
  console.log("quit");
  tray.destroy();
  clearInterval(pumpInterval);
  SDL.quit();
});

```

## API Documentation

See the full API documentation at [docs]().

## Requirements

- Deno 1.25+
- SDL3 runtime libraries installed


## Building from Source

1. Clone the repository
2. Run `deno task build`

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

MIT
