/**
 * # CategoryTray
 *
 * SDL offers a way to add items to the "system tray" (more correctly called
 * the "notification area" on Windows). On platforms that offer this concept,
 * an SDL app can add a tray icon, submenus, checkboxes, and clickable
 * entries, and register a callback that is fired when the user clicks on
 * these pieces.
 *
 * @module
 */

/*
  Simple DirectMedia Layer
  Copyright (C) 1997-2025 Sam Lantinga <slouken@libsdl.org>

  This software is provided 'as-is', without any express or implied
  warranty.  In no event will the authors be held liable for any damages
  arising from the use of this software.

  Permission is granted to anyone to use this software for any purpose,
  including commercial applications, and to alter it and redistribute it
  freely, subject to the following restrictions:

  1. The origin of this software must not be misrepresented; you must not
     claim that you wrote the original software. If you use this software
     in a product, an acknowledgment in the product documentation would be
     appreciated but is not required.
  2. Altered source versions must be plainly marked as such, and must not be
     misrepresented as being the original software.
  3. This notice may not be removed or altered from any source distribution.
*/

import { lib } from "./lib.ts";

export {
  TRAYENTRY as TRAYENTRY,
} from "../enums/SDL_tray.ts"

/**
 * Create an icon to be placed in the operating system's tray, or equivalent.
 *
 * Many platforms advise not using a system tray unless persistence is a
 * necessary feature. Avoid needlessly creating a tray icon, as the user may
 * feel like it clutters their interface.
 *
 * Using tray icons require the video subsystem.
 *
 * @param icon a surface to be used as icon. May be NULL.
 * @param tooltip a tooltip to be displayed when the mouse hovers the icon in
 *                UTF-8 encoding. Not supported on all platforms. May be NULL.
 * @returns The newly created system tray icon.
 *
 * @threadsafety This function should only be called on the main thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_CreateTrayMenu
 * @sa SDL_GetTrayMenu
 * @sa SDL_DestroyTray
 *
 * @from SDL_tray.h:120 SDL_Tray * SDL_CreateTray(SDL_Surface *icon, const char *tooltip);
 */
export const createTray = lib.symbols.SDL_CreateTray;

/**
 * Updates the system tray icon's icon.
 *
 * @param tray the tray icon to be updated.
 * @param icon the new icon. May be NULL.
 *
 * @threadsafety This function should be called on the thread that created the
 *               tray.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_CreateTray
 *
 * @from SDL_tray.h:135 void SDL_SetTrayIcon(SDL_Tray *tray, SDL_Surface *icon);
 */
export const setTrayIcon = lib.symbols.SDL_SetTrayIcon;

/**
 * Updates the system tray icon's tooltip.
 *
 * @param tray the tray icon to be updated.
 * @param tooltip the new tooltip in UTF-8 encoding. May be NULL.
 *
 * @threadsafety This function should be called on the thread that created the
 *               tray.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_CreateTray
 *
 * @from SDL_tray.h:150 void SDL_SetTrayTooltip(SDL_Tray *tray, const char *tooltip);
 */
export const setTrayTooltip = lib.symbols.SDL_SetTrayTooltip;

/**
 * Create a menu for a system tray.
 *
 * This should be called at most once per tray icon.
 *
 * This function does the same thing as SDL_CreateTraySubmenu(), except that
 * it takes a SDL_Tray instead of a SDL_TrayEntry.
 *
 * A menu does not need to be destroyed; it will be destroyed with the tray.
 *
 * @param tray the tray to bind the menu to.
 * @returns the newly created menu.
 *
 * @threadsafety This function should be called on the thread that created the
 *               tray.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_CreateTray
 * @sa SDL_GetTrayMenu
 * @sa SDL_GetTrayMenuParentTray
 *
 * @from SDL_tray.h:174 SDL_TrayMenu * SDL_CreateTrayMenu(SDL_Tray *tray);
 */
export const createTrayMenu = lib.symbols.SDL_CreateTrayMenu;

/**
 * Create a submenu for a system tray entry.
 *
 * This should be called at most once per tray entry.
 *
 * This function does the same thing as SDL_CreateTrayMenu, except that it
 * takes a SDL_TrayEntry instead of a SDL_Tray.
 *
 * A menu does not need to be destroyed; it will be destroyed with the tray.
 *
 * @param entry the tray entry to bind the menu to.
 * @returns the newly created menu.
 *
 * @threadsafety This function should be called on the thread that created the
 *               tray.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_InsertTrayEntryAt
 * @sa SDL_GetTraySubmenu
 * @sa SDL_GetTrayMenuParentEntry
 *
 * @from SDL_tray.h:198 SDL_TrayMenu * SDL_CreateTraySubmenu(SDL_TrayEntry *entry);
 */
export const createTraySubmenu = lib.symbols.SDL_CreateTraySubmenu;

/**
 * Gets a previously created tray menu.
 *
 * You should have called SDL_CreateTrayMenu() on the tray object. This
 * function allows you to fetch it again later.
 *
 * This function does the same thing as SDL_GetTraySubmenu(), except that it
 * takes a SDL_Tray instead of a SDL_TrayEntry.
 *
 * A menu does not need to be destroyed; it will be destroyed with the tray.
 *
 * @param tray the tray entry to bind the menu to.
 * @returns the newly created menu.
 *
 * @threadsafety This function should be called on the thread that created the
 *               tray.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_CreateTray
 * @sa SDL_CreateTrayMenu
 *
 * @from SDL_tray.h:222 SDL_TrayMenu * SDL_GetTrayMenu(SDL_Tray *tray);
 */
export const getTrayMenu = lib.symbols.SDL_GetTrayMenu;

/**
 * Gets a previously created tray entry submenu.
 *
 * You should have called SDL_CreateTraySubmenu() on the entry object. This
 * function allows you to fetch it again later.
 *
 * This function does the same thing as SDL_GetTrayMenu(), except that it
 * takes a SDL_TrayEntry instead of a SDL_Tray.
 *
 * A menu does not need to be destroyed; it will be destroyed with the tray.
 *
 * @param entry the tray entry to bind the menu to.
 * @returns the newly created menu.
 *
 * @threadsafety This function should be called on the thread that created the
 *               tray.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_InsertTrayEntryAt
 * @sa SDL_CreateTraySubmenu
 *
 * @from SDL_tray.h:246 SDL_TrayMenu * SDL_GetTraySubmenu(SDL_TrayEntry *entry);
 */
export const getTraySubmenu = lib.symbols.SDL_GetTraySubmenu;

/**
 * Returns a list of entries in the menu, in order.
 *
 * @param menu The menu to get entries from.
 * @param count An optional pointer to obtain the number of entries in the
 *              menu.
 * @returns a NULL-terminated list of entries within the given menu. The
 *          pointer becomes invalid when any function that inserts or deletes
 *          entries in the menu is called.
 *
 * @threadsafety This function should be called on the thread that created the
 *               tray.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_RemoveTrayEntry
 * @sa SDL_InsertTrayEntryAt
 *
 * @from SDL_tray.h:266 const SDL_TrayEntry ** SDL_GetTrayEntries(SDL_TrayMenu *menu, int *count);
 */
export const getTrayEntries = lib.symbols.SDL_GetTrayEntries;

/**
 * Removes a tray entry.
 *
 * @param entry The entry to be deleted.
 *
 * @threadsafety This function should be called on the thread that created the
 *               tray.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_GetTrayEntries
 * @sa SDL_InsertTrayEntryAt
 *
 * @from SDL_tray.h:281 void SDL_RemoveTrayEntry(SDL_TrayEntry *entry);
 */
export const removeTrayEntry = lib.symbols.SDL_RemoveTrayEntry;

/**
 * Insert a tray entry at a given position.
 *
 * If label is NULL, the entry will be a separator. Many functions won't work
 * for an entry that is a separator.
 *
 * An entry does not need to be destroyed; it will be destroyed with the tray.
 *
 * @param menu the menu to append the entry to.
 * @param pos the desired position for the new entry. Entries at or following
 *            this place will be moved. If pos is -1, the entry is appended.
 * @param label the text to be displayed on the entry, in UTF-8 encoding, or
 *              NULL for a separator.
 * @param flags a combination of flags, some of which are mandatory.
 * @returns the newly created entry, or NULL if pos is out of bounds.
 *
 * @threadsafety This function should be called on the thread that created the
 *               tray.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_TrayEntryFlags
 * @sa SDL_GetTrayEntries
 * @sa SDL_RemoveTrayEntry
 * @sa SDL_GetTrayEntryParent
 *
 * @from SDL_tray.h:309 SDL_TrayEntry * SDL_InsertTrayEntryAt(SDL_TrayMenu *menu, int pos, const char *label, SDL_TrayEntryFlags flags);
 */
export const insertTrayEntryAt = lib.symbols.SDL_InsertTrayEntryAt;

/**
 * Sets the label of an entry.
 *
 * An entry cannot change between a separator and an ordinary entry; that is,
 * it is not possible to set a non-NULL label on an entry that has a NULL
 * label (separators), or to set a NULL label to an entry that has a non-NULL
 * label. The function will silently fail if that happens.
 *
 * @param entry the entry to be updated.
 * @param label the new label for the entry in UTF-8 encoding.
 *
 * @threadsafety This function should be called on the thread that created the
 *               tray.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_GetTrayEntries
 * @sa SDL_InsertTrayEntryAt
 * @sa SDL_GetTrayEntryLabel
 *
 * @from SDL_tray.h:331 void SDL_SetTrayEntryLabel(SDL_TrayEntry *entry, const char *label);
 */
export const setTrayEntryLabel = lib.symbols.SDL_SetTrayEntryLabel;

/**
 * Gets the label of an entry.
 *
 * If the returned value is NULL, the entry is a separator.
 *
 * @param entry the entry to be read.
 * @returns the label of the entry in UTF-8 encoding.
 *
 * @threadsafety This function should be called on the thread that created the
 *               tray.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_GetTrayEntries
 * @sa SDL_InsertTrayEntryAt
 * @sa SDL_SetTrayEntryLabel
 *
 * @from SDL_tray.h:350 const char * SDL_GetTrayEntryLabel(SDL_TrayEntry *entry);
 */
export const getTrayEntryLabel = lib.symbols.SDL_GetTrayEntryLabel;

/**
 * Sets whether or not an entry is checked.
 *
 * The entry must have been created with the SDL_TRAYENTRY_CHECKBOX flag.
 *
 * @param entry the entry to be updated.
 * @param checked true if the entry should be checked; false otherwise.
 *
 * @threadsafety This function should be called on the thread that created the
 *               tray.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_GetTrayEntries
 * @sa SDL_InsertTrayEntryAt
 * @sa SDL_GetTrayEntryChecked
 *
 * @from SDL_tray.h:369 void SDL_SetTrayEntryChecked(SDL_TrayEntry *entry, bool checked);
 */
export const setTrayEntryChecked = lib.symbols.SDL_SetTrayEntryChecked;

/**
 * Gets whether or not an entry is checked.
 *
 * The entry must have been created with the SDL_TRAYENTRY_CHECKBOX flag.
 *
 * @param entry the entry to be read.
 * @returns true if the entry is checked; false otherwise.
 *
 * @threadsafety This function should be called on the thread that created the
 *               tray.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_GetTrayEntries
 * @sa SDL_InsertTrayEntryAt
 * @sa SDL_SetTrayEntryChecked
 *
 * @from SDL_tray.h:388 bool SDL_GetTrayEntryChecked(SDL_TrayEntry *entry);
 */
export const getTrayEntryChecked = lib.symbols.SDL_GetTrayEntryChecked;

/**
 * Sets whether or not an entry is enabled.
 *
 * @param entry the entry to be updated.
 * @param enabled true if the entry should be enabled; false otherwise.
 *
 * @threadsafety This function should be called on the thread that created the
 *               tray.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_GetTrayEntries
 * @sa SDL_InsertTrayEntryAt
 * @sa SDL_GetTrayEntryEnabled
 *
 * @from SDL_tray.h:405 void SDL_SetTrayEntryEnabled(SDL_TrayEntry *entry, bool enabled);
 */
export const setTrayEntryEnabled = lib.symbols.SDL_SetTrayEntryEnabled;

/**
 * Gets whether or not an entry is enabled.
 *
 * @param entry the entry to be read.
 * @returns true if the entry is enabled; false otherwise.
 *
 * @threadsafety This function should be called on the thread that created the
 *               tray.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_GetTrayEntries
 * @sa SDL_InsertTrayEntryAt
 * @sa SDL_SetTrayEntryEnabled
 *
 * @from SDL_tray.h:422 bool SDL_GetTrayEntryEnabled(SDL_TrayEntry *entry);
 */
export const getTrayEntryEnabled = lib.symbols.SDL_GetTrayEntryEnabled;

/**
 * Sets a callback to be invoked when the entry is selected.
 *
 * @param entry the entry to be updated.
 * @param callback a callback to be invoked when the entry is selected.
 * @param userdata an optional pointer to pass extra data to the callback when
 *                 it will be invoked.
 *
 * @threadsafety This function should be called on the thread that created the
 *               tray.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_GetTrayEntries
 * @sa SDL_InsertTrayEntryAt
 *
 * @from SDL_tray.h:440 void SDL_SetTrayEntryCallback(SDL_TrayEntry *entry, SDL_TrayCallback callback, void *userdata);
 */
export const setTrayEntryCallback = lib.symbols.SDL_SetTrayEntryCallback;

/**
 * Simulate a click on a tray entry.
 *
 * @param entry The entry to activate.
 *
 * @threadsafety This function should be called on the thread that created the
 *               tray.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @from SDL_tray.h:452 void SDL_ClickTrayEntry(SDL_TrayEntry *entry);
 */
export const clickTrayEntry = lib.symbols.SDL_ClickTrayEntry;

/**
 * Destroys a tray object.
 *
 * This also destroys all associated menus and entries.
 *
 * @param tray the tray icon to be destroyed.
 *
 * @threadsafety This function should be called on the thread that created the
 *               tray.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_CreateTray
 *
 * @from SDL_tray.h:468 void SDL_DestroyTray(SDL_Tray *tray);
 */
export const destroyTray = lib.symbols.SDL_DestroyTray;

/**
 * Gets the menu containing a certain tray entry.
 *
 * @param entry the entry for which to get the parent menu.
 * @returns the parent menu.
 *
 * @threadsafety This function should be called on the thread that created the
 *               tray.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_InsertTrayEntryAt
 *
 * @from SDL_tray.h:483 SDL_TrayMenu * SDL_GetTrayEntryParent(SDL_TrayEntry *entry);
 */
export const getTrayEntryParent = lib.symbols.SDL_GetTrayEntryParent;

/**
 * Gets the entry for which the menu is a submenu, if the current menu is a
 * submenu.
 *
 * Either this function or SDL_GetTrayMenuParentTray() will return non-NULL
 * for any given menu.
 *
 * @param menu the menu for which to get the parent entry.
 * @returns the parent entry, or NULL if this menu is not a submenu.
 *
 * @threadsafety This function should be called on the thread that created the
 *               tray.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_CreateTraySubmenu
 * @sa SDL_GetTrayMenuParentTray
 *
 * @from SDL_tray.h:503 SDL_TrayEntry * SDL_GetTrayMenuParentEntry(SDL_TrayMenu *menu);
 */
export const getTrayMenuParentEntry = lib.symbols.SDL_GetTrayMenuParentEntry;

/**
 * Gets the tray for which this menu is the first-level menu, if the current
 * menu isn't a submenu.
 *
 * Either this function or SDL_GetTrayMenuParentEntry() will return non-NULL
 * for any given menu.
 *
 * @param menu the menu for which to get the parent enttrayry.
 * @returns the parent tray, or NULL if this menu is a submenu.
 *
 * @threadsafety This function should be called on the thread that created the
 *               tray.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_CreateTrayMenu
 * @sa SDL_GetTrayMenuParentEntry
 *
 * @from SDL_tray.h:523 SDL_Tray * SDL_GetTrayMenuParentTray(SDL_TrayMenu *menu);
 */
export const getTrayMenuParentTray = lib.symbols.SDL_GetTrayMenuParentTray;

/**
 * Update the trays.
 *
 * This is called automatically by the event loop and is only needed if you're
 * using trays but aren't handling SDL events.
 *
 * @threadsafety This function should only be called on the main thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @from SDL_tray.h:535 void SDL_UpdateTrays(void);
 */
export const updateTrays = lib.symbols.SDL_UpdateTrays;

