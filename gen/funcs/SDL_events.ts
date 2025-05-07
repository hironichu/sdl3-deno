/**
 * # CategoryEvents
 *
 * Event queue management.
 *
 * It's extremely common--often required--that an app deal with SDL's event
 * queue. Almost all useful information about interactions with the real world
 * flow through here: the user interacting with the computer and app, hardware
 * coming and going, the system changing in some way, etc.
 *
 * An app generally takes a moment, perhaps at the start of a new frame, to
 * examine any events that have occured since the last time and process or
 * ignore them. This is generally done by calling SDL_PollEvent() in a loop
 * until it returns false (or, if using the main callbacks, events are
 * provided one at a time in calls to SDL_AppEvent() before the next call to
 * SDL_AppIterate(); in this scenario, the app does not call SDL_PollEvent()
 * at all).
 *
 * There is other forms of control, too: SDL_PeepEvents() has more
 * functionality at the cost of more complexity, and SDL_WaitEvent() can block
 * the process until something interesting happens, which might be beneficial
 * for certain types of programs on low-power hardware. One may also call
 * SDL_AddEventWatch() to set a callback when new events arrive.
 *
 * The app is free to generate their own events, too: SDL_PushEvent allows the
 * app to put events onto the queue for later retrieval; SDL_RegisterEvents
 * can guarantee that these events have a type that isn't in use by other
 * parts of the system.
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

export const symbols = {

/**
 * Pump the event loop, gathering events from the input devices.
 *
 * This function updates the event queue and internal input device state.
 *
 * SDL_PumpEvents() gathers all the pending input information from devices and
 * places it in the event queue. Without calls to SDL_PumpEvents() no events
 * would ever be placed on the queue. Often the need for calls to
 * SDL_PumpEvents() is hidden from the user since SDL_PollEvent() and
 * SDL_WaitEvent() implicitly call SDL_PumpEvents(). However, if you are not
 * polling or waiting for events (e.g. you are filtering them), then you must
 * call SDL_PumpEvents() to force an event queue update.
 *
 * @threadsafety This function should only be called on the main thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_PollEvent
 * @sa SDL_WaitEvent
 *
 * @from SDL_events.h:1070 void SDL_PumpEvents(void);
 */
SDL_PumpEvents: {
      parameters: [],
      result: "void"
    },


/**
 * Check the event queue for messages and optionally return them.
 *
 * `action` may be any of the following:
 *
 * - `SDL_ADDEVENT`: up to `numevents` events will be added to the back of the
 *   event queue.
 * - `SDL_PEEKEVENT`: `numevents` events at the front of the event queue,
 *   within the specified minimum and maximum type, will be returned to the
 *   caller and will _not_ be removed from the queue. If you pass NULL for
 *   `events`, then `numevents` is ignored and the total number of matching
 *   events will be returned.
 * - `SDL_GETEVENT`: up to `numevents` events at the front of the event queue,
 *   within the specified minimum and maximum type, will be returned to the
 *   caller and will be removed from the queue.
 *
 * You may have to call SDL_PumpEvents() before calling this function.
 * Otherwise, the events may not be ready to be filtered when you call
 * SDL_PeepEvents().
 *
 * @param events destination buffer for the retrieved events, may be NULL to
 *               leave the events in the queue and return the number of events
 *               that would have been stored.
 * @param numevents if action is SDL_ADDEVENT, the number of events to add
 *                  back to the event queue; if action is SDL_PEEKEVENT or
 *                  SDL_GETEVENT, the maximum number of events to retrieve.
 * @param action action to take; see [Remarks](#remarks) for details.
 * @param minType minimum value of the event type to be considered;
 *                SDL_EVENT_FIRST is a safe choice.
 * @param maxType maximum value of the event type to be considered;
 *                SDL_EVENT_LAST is a safe choice.
 * @returns the number of events actually stored or -1 on failure; call
 *          SDL_GetError() for more information.
 *
 * @threadsafety It is safe to call this function from any thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_PollEvent
 * @sa SDL_PumpEvents
 * @sa SDL_PushEvent
 *
 * @from SDL_events.h:1128 int SDL_PeepEvents(SDL_Event *events, int numevents, SDL_EventAction action, Uint32 minType, Uint32 maxType);
 */
SDL_PeepEvents: {
      parameters: ["pointer", "i32", "u32", "u32", "u32"],
      result: "i32"
    },


/**
 * Check for the existence of a certain event type in the event queue.
 *
 * If you need to check for a range of event types, use SDL_HasEvents()
 * instead.
 *
 * @param type the type of event to be queried; see SDL_EventType for details.
 * @returns true if events matching `type` are present, or false if events
 *          matching `type` are not present.
 *
 * @threadsafety It is safe to call this function from any thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_HasEvents
 *
 * @from SDL_events.h:1147 bool SDL_HasEvent(Uint32 type);
 */
SDL_HasEvent: {
      parameters: ["u32"],
      result: "bool"
    },


/**
 * Check for the existence of certain event types in the event queue.
 *
 * If you need to check for a single event type, use SDL_HasEvent() instead.
 *
 * @param minType the low end of event type to be queried, inclusive; see
 *                SDL_EventType for details.
 * @param maxType the high end of event type to be queried, inclusive; see
 *                SDL_EventType for details.
 * @returns true if events with type >= `minType` and <= `maxType` are
 *          present, or false if not.
 *
 * @threadsafety It is safe to call this function from any thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_HasEvents
 *
 * @from SDL_events.h:1168 bool SDL_HasEvents(Uint32 minType, Uint32 maxType);
 */
SDL_HasEvents: {
      parameters: ["u32", "u32"],
      result: "bool"
    },


/**
 * Clear events of a specific type from the event queue.
 *
 * This will unconditionally remove any events from the queue that match
 * `type`. If you need to remove a range of event types, use SDL_FlushEvents()
 * instead.
 *
 * It's also normal to just ignore events you don't care about in your event
 * loop without calling this function.
 *
 * This function only affects currently queued events. If you want to make
 * sure that all pending OS events are flushed, you can call SDL_PumpEvents()
 * on the main thread immediately before the flush call.
 *
 * If you have user events with custom data that needs to be freed, you should
 * use SDL_PeepEvents() to remove and clean up those events before calling
 * this function.
 *
 * @param type the type of event to be cleared; see SDL_EventType for details.
 *
 * @threadsafety It is safe to call this function from any thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_FlushEvents
 *
 * @from SDL_events.h:1196 void SDL_FlushEvent(Uint32 type);
 */
SDL_FlushEvent: {
      parameters: ["u32"],
      result: "void"
    },


/**
 * Clear events of a range of types from the event queue.
 *
 * This will unconditionally remove any events from the queue that are in the
 * range of `minType` to `maxType`, inclusive. If you need to remove a single
 * event type, use SDL_FlushEvent() instead.
 *
 * It's also normal to just ignore events you don't care about in your event
 * loop without calling this function.
 *
 * This function only affects currently queued events. If you want to make
 * sure that all pending OS events are flushed, you can call SDL_PumpEvents()
 * on the main thread immediately before the flush call.
 *
 * @param minType the low end of event type to be cleared, inclusive; see
 *                SDL_EventType for details.
 * @param maxType the high end of event type to be cleared, inclusive; see
 *                SDL_EventType for details.
 *
 * @threadsafety It is safe to call this function from any thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_FlushEvent
 *
 * @from SDL_events.h:1223 void SDL_FlushEvents(Uint32 minType, Uint32 maxType);
 */
SDL_FlushEvents: {
      parameters: ["u32", "u32"],
      result: "void"
    },


/**
 * Poll for currently pending events.
 *
 * If `event` is not NULL, the next event is removed from the queue and stored
 * in the SDL_Event structure pointed to by `event`. The 1 returned refers to
 * this event, immediately stored in the SDL Event structure -- not an event
 * to follow.
 *
 * If `event` is NULL, it simply returns 1 if there is an event in the queue,
 * but will not remove it from the queue.
 *
 * As this function may implicitly call SDL_PumpEvents(), you can only call
 * this function in the thread that set the video mode.
 *
 * SDL_PollEvent() is the favored way of receiving system events since it can
 * be done from the main loop and does not suspend the main loop while waiting
 * on an event to be posted.
 *
 * The common practice is to fully process the event queue once every frame,
 * usually as a first step before updating the game's state:
 *
 * ```c
 * while (game_is_still_running) {
 *     SDL_Event event;
 *     while (SDL_PollEvent(&event)) {  // poll until all events are handled!
 *         // decide what to do with this event.
 *     }
 *
 *     // update game state, draw the current frame
 * }
 * ```
 *
 * @param event the SDL_Event structure to be filled with the next event from
 *              the queue, or NULL.
 * @returns true if this got an event or false if there are none available.
 *
 * @threadsafety This function should only be called on the main thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_PushEvent
 * @sa SDL_WaitEvent
 * @sa SDL_WaitEventTimeout
 *
 * @from SDL_events.h:1269 bool SDL_PollEvent(SDL_Event *event);
 */
SDL_PollEvent: {
      parameters: ["pointer"],
      result: "bool"
    },


/**
 * Wait indefinitely for the next available event.
 *
 * If `event` is not NULL, the next event is removed from the queue and stored
 * in the SDL_Event structure pointed to by `event`.
 *
 * As this function may implicitly call SDL_PumpEvents(), you can only call
 * this function in the thread that initialized the video subsystem.
 *
 * @param event the SDL_Event structure to be filled in with the next event
 *              from the queue, or NULL.
 * @returns true on success or false if there was an error while waiting for
 *          events; call SDL_GetError() for more information.
 *
 * @threadsafety This function should only be called on the main thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_PollEvent
 * @sa SDL_PushEvent
 * @sa SDL_WaitEventTimeout
 *
 * @from SDL_events.h:1293 bool SDL_WaitEvent(SDL_Event *event);
 */
SDL_WaitEvent: {
      parameters: ["pointer"],
      result: "bool"
    },


/**
 * Wait until the specified timeout (in milliseconds) for the next available
 * event.
 *
 * If `event` is not NULL, the next event is removed from the queue and stored
 * in the SDL_Event structure pointed to by `event`.
 *
 * As this function may implicitly call SDL_PumpEvents(), you can only call
 * this function in the thread that initialized the video subsystem.
 *
 * The timeout is not guaranteed, the actual wait time could be longer due to
 * system scheduling.
 *
 * @param event the SDL_Event structure to be filled in with the next event
 *              from the queue, or NULL.
 * @param timeoutMS the maximum number of milliseconds to wait for the next
 *                  available event.
 * @returns true if this got an event or false if the timeout elapsed without
 *          any events available.
 *
 * @threadsafety This function should only be called on the main thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_PollEvent
 * @sa SDL_PushEvent
 * @sa SDL_WaitEvent
 *
 * @from SDL_events.h:1323 bool SDL_WaitEventTimeout(SDL_Event *event, Sint32 timeoutMS);
 */
SDL_WaitEventTimeout: {
      parameters: ["pointer", "i32"],
      result: "bool"
    },


/**
 * Add an event to the event queue.
 *
 * The event queue can actually be used as a two way communication channel.
 * Not only can events be read from the queue, but the user can also push
 * their own events onto it. `event` is a pointer to the event structure you
 * wish to push onto the queue. The event is copied into the queue, and the
 * caller may dispose of the memory pointed to after SDL_PushEvent() returns.
 *
 * Note: Pushing device input events onto the queue doesn't modify the state
 * of the device within SDL.
 *
 * Note: Events pushed onto the queue with SDL_PushEvent() get passed through
 * the event filter but events added with SDL_PeepEvents() do not.
 *
 * For pushing application-specific events, please use SDL_RegisterEvents() to
 * get an event type that does not conflict with other code that also wants
 * its own custom event types.
 *
 * @param event the SDL_Event to be added to the queue.
 * @returns true on success, false if the event was filtered or on failure;
 *          call SDL_GetError() for more information. A common reason for
 *          error is the event queue being full.
 *
 * @threadsafety It is safe to call this function from any thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_PeepEvents
 * @sa SDL_PollEvent
 * @sa SDL_RegisterEvents
 *
 * @from SDL_events.h:1357 bool SDL_PushEvent(SDL_Event *event);
 */
SDL_PushEvent: {
      parameters: ["pointer"],
      result: "bool"
    },


/**
 * Set up a filter to process all events before they are added to the internal
 * event queue.
 *
 * If you just want to see events without modifying them or preventing them
 * from being queued, you should use SDL_AddEventWatch() instead.
 *
 * If the filter function returns true when called, then the event will be
 * added to the internal queue. If it returns false, then the event will be
 * dropped from the queue, but the internal state will still be updated. This
 * allows selective filtering of dynamically arriving events.
 *
 * **WARNING**: Be very careful of what you do in the event filter function,
 * as it may run in a different thread!
 *
 * On platforms that support it, if the quit event is generated by an
 * interrupt signal (e.g. pressing Ctrl-C), it will be delivered to the
 * application at the next event poll.
 *
 * Note: Disabled events never make it to the event filter function; see
 * SDL_SetEventEnabled().
 *
 * Note: Events pushed onto the queue with SDL_PushEvent() get passed through
 * the event filter, but events pushed onto the queue with SDL_PeepEvents() do
 * not.
 *
 * @param filter an SDL_EventFilter function to call when an event happens.
 * @param userdata a pointer that is passed to `filter`.
 *
 * @threadsafety It is safe to call this function from any thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_AddEventWatch
 * @sa SDL_SetEventEnabled
 * @sa SDL_GetEventFilter
 * @sa SDL_PeepEvents
 * @sa SDL_PushEvent
 *
 * @from SDL_events.h:1419 void SDL_SetEventFilter(SDL_EventFilter filter, void *userdata);
 */
SDL_SetEventFilter: {
      parameters: ["function", "pointer"],
      result: "void"
    },


/**
 * Query the current event filter.
 *
 * This function can be used to "chain" filters, by saving the existing filter
 * before replacing it with a function that will call that saved filter.
 *
 * @param filter the current callback function will be stored here.
 * @param userdata the pointer that is passed to the current event filter will
 *                 be stored here.
 * @returns true on success or false if there is no event filter set.
 *
 * @threadsafety It is safe to call this function from any thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_SetEventFilter
 *
 * @from SDL_events.h:1438 bool SDL_GetEventFilter(SDL_EventFilter *filter, void **userdata);
 */
SDL_GetEventFilter: {
      parameters: ["pointer", "pointer"],
      result: "bool"
    },


/**
 * Add a callback to be triggered when an event is added to the event queue.
 *
 * `filter` will be called when an event happens, and its return value is
 * ignored.
 *
 * **WARNING**: Be very careful of what you do in the event filter function,
 * as it may run in a different thread!
 *
 * If the quit event is generated by a signal (e.g. SIGINT), it will bypass
 * the internal queue and be delivered to the watch callback immediately, and
 * arrive at the next event poll.
 *
 * Note: the callback is called for events posted by the user through
 * SDL_PushEvent(), but not for disabled events, nor for events by a filter
 * callback set with SDL_SetEventFilter(), nor for events posted by the user
 * through SDL_PeepEvents().
 *
 * @param filter an SDL_EventFilter function to call when an event happens.
 * @param userdata a pointer that is passed to `filter`.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety It is safe to call this function from any thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_RemoveEventWatch
 * @sa SDL_SetEventFilter
 *
 * @from SDL_events.h:1470 bool SDL_AddEventWatch(SDL_EventFilter filter, void *userdata);
 */
SDL_AddEventWatch: {
      parameters: ["function", "pointer"],
      result: "bool"
    },


/**
 * Remove an event watch callback added with SDL_AddEventWatch().
 *
 * This function takes the same input as SDL_AddEventWatch() to identify and
 * delete the corresponding callback.
 *
 * @param filter the function originally passed to SDL_AddEventWatch().
 * @param userdata the pointer originally passed to SDL_AddEventWatch().
 *
 * @threadsafety It is safe to call this function from any thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_AddEventWatch
 *
 * @from SDL_events.h:1487 void SDL_RemoveEventWatch(SDL_EventFilter filter, void *userdata);
 */
SDL_RemoveEventWatch: {
      parameters: ["function", "pointer"],
      result: "void"
    },


/**
 * Run a specific filter function on the current event queue, removing any
 * events for which the filter returns false.
 *
 * See SDL_SetEventFilter() for more information. Unlike SDL_SetEventFilter(),
 * this function does not change the filter permanently, it only uses the
 * supplied filter until this function returns.
 *
 * @param filter the SDL_EventFilter function to call when an event happens.
 * @param userdata a pointer that is passed to `filter`.
 *
 * @threadsafety It is safe to call this function from any thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_GetEventFilter
 * @sa SDL_SetEventFilter
 *
 * @from SDL_events.h:1507 void SDL_FilterEvents(SDL_EventFilter filter, void *userdata);
 */
SDL_FilterEvents: {
      parameters: ["function", "pointer"],
      result: "void"
    },


/**
 * Set the state of processing events by type.
 *
 * @param type the type of event; see SDL_EventType for details.
 * @param enabled whether to process the event or not.
 *
 * @threadsafety It is safe to call this function from any thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_EventEnabled
 *
 * @from SDL_events.h:1521 void SDL_SetEventEnabled(Uint32 type, bool enabled);
 */
SDL_SetEventEnabled: {
      parameters: ["u32", "bool"],
      result: "void"
    },


/**
 * Query the state of processing events by type.
 *
 * @param type the type of event; see SDL_EventType for details.
 * @returns true if the event is being processed, false otherwise.
 *
 * @threadsafety It is safe to call this function from any thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_SetEventEnabled
 *
 * @from SDL_events.h:1535 bool SDL_EventEnabled(Uint32 type);
 */
SDL_EventEnabled: {
      parameters: ["u32"],
      result: "bool"
    },


/**
 * Allocate a set of user-defined events, and return the beginning event
 * number for that set of events.
 *
 * @param numevents the number of events to be allocated.
 * @returns the beginning event number, or 0 if numevents is invalid or if
 *          there are not enough user-defined events left.
 *
 * @threadsafety It is safe to call this function from any thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_PushEvent
 *
 * @from SDL_events.h:1551 Uint32 SDL_RegisterEvents(int numevents);
 */
SDL_RegisterEvents: {
      parameters: ["i32"],
      result: "u32"
    },


/**
 * Get window associated with an event.
 *
 * @param event an event containing a `windowID`.
 * @returns the associated window on success or NULL if there is none.
 *
 * @threadsafety It is safe to call this function from any thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_PollEvent
 * @sa SDL_WaitEvent
 * @sa SDL_WaitEventTimeout
 *
 * @from SDL_events.h:1567 SDL_Window * SDL_GetWindowFromEvent(const SDL_Event *event);
 */
SDL_GetWindowFromEvent: {
      parameters: ["pointer"],
      result: "pointer"
    },

} as const satisfies Deno.ForeignLibraryInterface;
