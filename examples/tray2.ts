import { Tray } from "../src/tray.ts";
import { init_pumpEvents } from "../src/_utils.ts";
import  * as SDL from "../gen/SDL.ts";

if (import.meta.main) {
  main();
}

function main() {
  const pumpInterval = init_pumpEvents();

  console.log("createTray");
  const tray = new Tray({ icon: "./examples/search.svg", tooltip: "heelo" });

  const menu = tray.createMenu();

  const clickMe = menu.insertEntryAt(
    -1,
    "click Me",
    SDL.TRAYENTRY.BUTTON,
  );

  let clicked = 0;
  clickMe.setCallback(tray, () => {
    console.log("Tray entry clicked!", ++clicked);
  }, null);

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

  const subEntry = menu.insertEntryAt(
    1,
    "SubMenu",
    SDL.TRAYENTRY.SUBMENU,
  );
  const subMenu = subEntry.createSubmenu();

  const genId = (() => {
    let id = 0;
    return () => id++;
  })();

  function add_entries(m: TrayMenu) {
    const last = m.entries.length;
    const insertEntryAt = (pos: number, label: string, flag: number) => {
      const entry = m.insertEntryAt(pos, label, flag);
      const id = genId();

      let checked = false;
      entry.setCallback(tray, () => {
        checked = !checked;
        entry.setChecked(checked);

        console.log(
          id,
          entry.label,
          "clicked",
          entry.checked,
          entry.enabled,
          checked,
        );
      });
      return entry;
    };
    insertEntryAt(-1, "checked", SDL.TRAYENTRY.CHECKED);
    insertEntryAt(-1, "disabled", SDL.TRAYENTRY.DISABLED);
    insertEntryAt(-1, "", 0);
    insertEntryAt(-1, "checkbox", SDL.TRAYENTRY.CHECKBOX);
    insertEntryAt(-1, "", SDL.TRAYENTRY.BUTTON);
    insertEntryAt(-1, "button", SDL.TRAYENTRY.BUTTON);

    for (const i of m.entries.slice(last)) {
      console.log(i.label, i.checked, i.enabled);
    }
  }
  add_entries(subMenu);
  add_entries(tray.menu);
}
