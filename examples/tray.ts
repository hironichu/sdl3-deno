import { Tray } from "../src/tray.ts";
import { SDL } from "../gen/SDL.ts";

if (!SDL.init(SDL.INIT.VIDEO | SDL.INIT.EVENTS)) {
  throw new Error("SDL init video and events failed");
}
// call SDL.pollEvents if you need handle events
const pumpInterval = setInterval(SDL.pumpEvents, 1000 / 60);
let clicked = 0;
let checked = 0;

const tray = new Tray({
  icon: "./examples/search.svg",
  tooltip: "hello",
  menu: [
    {
      label: "a label",
      action: () => {
        console.log("Tray entry clicked!", ++clicked);
        if (clicked > 3) {
          tray.menu.entries[0].setEnabled(false);
        }
      },
    },
    {
      label: "a checkbox",
      checked: true,
      action: () => {
        console.log("checkbox entry clicked!", ++checked);
        const entries = tray.menu.entries;
        const checkbox = entries[1];
        console.log(
          "checkbox",
          checkbox.label,
          checkbox.checked ? "checked" : "x",
          checkbox.enabled ? "enabled" : "-",
        );
        if (checkbox.checked) entries[0].setEnabled(true);
      },
    },
    {}, //a sep
    {
      label: "a sub",
      submenu: [
        {
          label: "sub1",
          flag: "button",
          action: () => {
            console.log("sub1 clicked!");
            const entries = tray.menu.entries;
            const checkbox = entries[1];
            checkbox.setChecked(true);
          },
        },
        {
          label: "sub3",
          type: "button",
          action: () => {
            console.log("sub3 clicked!");
            const entries = tray.menu.entries;
            const checkbox = entries[1];
            checkbox.setChecked(false);
          },
        },
        {
          label: "sub2",
          pos: 1,
          action: () => {
            console.log("sub2 clicked!");
            const e = tray.menu.entries;
            console.log("menu", e.map((i) => i.label));
            const a_sub = e[3];
            a_sub.setChecked(!a_sub.checked);
          },
        },
      ],
    },
    {}, //a sep
    {
      label: "quit",
      type: "button",
      action: () => {
        console.log("quit");
        tray.destroy();
        clearInterval(pumpInterval);
        SDL.quit();
      },
    },
  ],
});
