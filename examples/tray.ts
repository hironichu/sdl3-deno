import { SDL, Tray } from "../sdl3_tray.ts";

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
