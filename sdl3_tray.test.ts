import { assertEquals } from "@std/assert/equals";
import {
  init_pumpEvents,
  SDL,
  Tray,
  TrayEntry,
  TrayMenu,
} from "./sdl3_tray.ts";

console.log(Deno.env);

import { assertNotEquals } from "@std/assert";

function assertNotNull(b: any, msg?: string) {
  return assertNotEquals(b, null, msg);
}

type Ptr = TrayEntry | TrayMenu | Tray;

function ptrNotNull(p: Ptr, msg?: string) {
  assertNotNull(p.pointer, msg);
}

function ptrEq(
  a: Deno.PointerValue | Ptr,
  b: Deno.PointerValue | Ptr,
) {
  const pa = (a != null && typeof a === "object" && "pointer" in a)
    ? (a as { pointer: Deno.PointerValue }).pointer
    : a;
  const pb = (b != null && typeof b === "object" && "pointer" in b)
    ? (b as { pointer: Deno.PointerValue }).pointer
    : b;
  assertEquals(pa, pb);
}

function ptrArrEq(
  a: Ptr[],
  b: Ptr[],
) {
  assertEquals(a.map((e) => e.pointer), b.map((e) => e.pointer));
}

Deno.test("simple", async () => {
  const pumpInterval = init_pumpEvents();

  console.log("createTray");
  const tray = new Tray("./bk/bmp/search.svg", "heelo");
  ptrNotNull(tray);

  // 添加一个菜单项
  const menu = tray.createMenu();
  ptrNotNull(menu);

  ptrEq(menu.parentTray, tray);

  const entry = menu.insertEntryAt(
    -1,
    "click Me",
    SDL.TRAYENTRY.BUTTON,
  );

  assertNotNull(entry.pointer, "Failed to add tray entry");
  assertEquals(entry.parentMenu.pointer, menu.pointer);

  let clicked = 0;
  tray.setEntryCallback(entry.pointer, () => {
    console.log("Tray entry clicked!", ++clicked);
  }, null);

  menu.insertEntryAt(-1, "", 0);

  const quitEntry = menu.insertEntryAt(
    -1,
    "Quit",
    SDL.TRAYENTRY.BUTTON,
  );
  ptrNotNull(quitEntry, "Failed to add tray entry");
  ptrEq(quitEntry.parentMenu, menu);

  let timeout: number;

  let quitClicked = 0;
  const checkClick = (entry1: number, entryQuit: number = 0) => {
    assertEquals(clicked, entry1);
    assertEquals(quitClicked, entryQuit);
  };

  setTimeout(() => {
    checkClick(0);
    entry.click();
  }, 500);
  setTimeout(() => {
    checkClick(1);
    entry.click();
  }, 700);
  setTimeout(() => {
    checkClick(2);
    quitEntry.click();
  }, 900);

  const isTimeout = await Promise.race([
    new Promise((resolve) => {
      quitEntry.setCallback(tray, () => {
        console.log("Tray quit clicked!", ++quitClicked);

        clearTimeout(timeout);
        resolve(false);
      }, null);
    }),
    new Promise((resolve) => {
      timeout = setTimeout(() => {
        resolve(true);
      }, 15000);
    }),
  ]);
  console.log("quit", isTimeout ? "timeout" : "");
  checkClick(2, 1);

  tray.destroy();
  clearInterval(pumpInterval);
  SDL.quit();
});

Deno.test("wrapper", async () => {
  const pumpInterval = init_pumpEvents();

  console.log("createTray");
  const tray = new Tray("./examples/search.svg", "heelo");
  ptrNotNull(tray);

  const menu = tray.createMenu();
  ptrNotNull(menu);

  ptrEq(menu.parentTray, tray);
  ptrEq(tray.menu, menu);

  const entry = menu.insertEntryAt(
    -1,
    "click Me",
    SDL.TRAYENTRY.BUTTON,
  );

  ptrNotNull(entry, "Failed to add tray entry");
  ptrEq(entry.parentMenu, menu);
  ptrArrEq(menu.entries, [entry]);

  let clicked = 0;
  entry.setCallback(tray, () => {
    console.log("Tray entry clicked!", ++clicked);
  }, null);

  const sep = menu.insertEntryAt(-1, "", 0);

  const quitEntry = menu.insertEntryAt(
    -1,
    "Quit",
    SDL.TRAYENTRY.BUTTON,
  );
  ptrNotNull(quitEntry, "Failed to add tray entry");
  ptrEq(quitEntry.parentMenu, menu);
  ptrArrEq(menu.entries, [entry, sep, quitEntry]);

  const subEntry = menu.insertEntryAt(
    1,
    "SubMenu",
    SDL.TRAYENTRY.SUBMENU,
  );
  const subMenu = subEntry.createSubmenu();
  ptrNotNull(subMenu, "Failed to create subMenu");
  ptrEq(subMenu.parentEntry, subEntry);
  ptrEq(subEntry.submenu, subMenu);

  ptrArrEq(menu.entries, [entry, subEntry, sep, quitEntry]);

  function add_entries(m: TrayMenu) {
    const last = m.entries.length;
    const insertEntryAt = (pos: number, label: string, flag: number) => {
      const entry = m.insertEntryAt(pos, label, flag);
      ptrNotNull(entry, "Failed to add entry");
      ptrEq(entry.parentMenu, m);

      const id = m.entries.length;
      let checked = false;
      entry.setCallback(tray, (u, p) => {
        ptrEq(entry, p);
        assertEquals(Deno.UnsafePointer.value(u), BigInt(id));

        checked = !checked;
        entry.setChecked(entry.checked);

        console.log(
          entry.label,
          "clicked",
          entry.checked,
          entry.enabled,
          checked,
        );
      }, Deno.UnsafePointer.create(BigInt(id)));
      return entry;
    };
    const chkEntry = insertEntryAt(-1, "checked", SDL.TRAYENTRY.CHECKED);
    const disabledEntry = insertEntryAt(-1, "disabled", SDL.TRAYENTRY.DISABLED);
    const sepEntry = insertEntryAt(-1, "", 0);
    const chkboxEntry = insertEntryAt(-1, "checkbox", SDL.TRAYENTRY.CHECKBOX);
    const emptyEntry = insertEntryAt(-1, "", SDL.TRAYENTRY.BUTTON);
    const btnEntry = insertEntryAt(-1, "button", SDL.TRAYENTRY.BUTTON);
    ptrArrEq(m.entries.slice(last), [
      chkEntry,
      disabledEntry,
      sepEntry,
      chkboxEntry,
      emptyEntry,
      btnEntry,
    ]);
    for (const i of m.entries.slice(last)) {
      console.log(i.label, i.checked, i.enabled);
    }
  }
  ptrNotNull(subMenu);
  add_entries(subMenu);
  ptrNotNull(tray.menu);
  add_entries(tray.menu);

  let timeout: number;

  let quitClicked = 0;
  const checkClick = (entry1: number, entryQuit: number = 0) => {
    assertEquals(clicked, entry1);
    assertEquals(quitClicked, entryQuit);
  };

  setTimeout(() => {
    checkClick(0);
    entry.click();
  }, 500);
  setTimeout(() => {
    checkClick(1);
    entry.click();
  }, 800);
  setTimeout(() => {
    checkClick(2);
    // quitEntry.click();
  }, 1200);

  const isTimeout = await Promise.race([
    new Promise((resolve) => {
      quitEntry.setCallback(tray, () => {
        console.log("Tray quit clicked!", ++quitClicked);

        clearTimeout(timeout);
        resolve(false);
      }, null);
    }),
    new Promise((resolve) => {
      timeout = setTimeout(() => {
        resolve(true);
      }, 30000);
    }),
  ]);
  console.log("quit", isTimeout ? "timeout" : "");
  checkClick(2, isTimeout ? 0 : 1);

  tray.destroy();
  clearInterval(pumpInterval);
  SDL.quit();
});
