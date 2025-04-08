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

import * as S from "./gen/structs/SDL_events.ts";
import { SDL_EventType as EventType } from "./gen/enums/SDL_events.ts";
export { EventType };

import { SDL } from "./gen/SDL.ts";

export class Event {
  #buffer: Uint8Array = new Uint8Array(128);
  type: number = 0;
  timestamp: bigint = 0n;
  private pointer: Deno.PointerObject;
  private get dt(): DataView {
    return new DataView(this.#buffer.buffer);
  }

  constructor() {
    this.pointer = Deno.UnsafePointer.of(this.#buffer)!;
  }

  poll(): boolean {
    const r = SDL.pollEvent(this.pointer);
    if (r) {
      const view = new Deno.UnsafePointerView(this.pointer);
      this.type = view.getUint32(0);
      this.timestamp = view.getBigUint64(8);
    }
    return r;
  }

  pump() {
    SDL.pumpEvents();
  }

  /** -------gen------*/

  get common(): S.CommonEvent {
    return S.read_CommonEvent(this.dt);
  }
  pushCommon(e: S.CommonEvent) {
    S.write_CommonEvent(e, this.dt);
    SDL.pushEvent(this.pointer);
  }

  get display(): S.DisplayEvent {
    return S.read_DisplayEvent(this.dt);
  }
  pushDisplay(e: S.DisplayEvent) {
    S.write_DisplayEvent(e, this.dt);
    SDL.pushEvent(this.pointer);
  }

  get window(): S.WindowEvent {
    return S.read_WindowEvent(this.dt);
  }
  pushWindow(e: S.WindowEvent) {
    S.write_WindowEvent(e, this.dt);
    SDL.pushEvent(this.pointer);
  }

  get keyboardDevice(): S.KeyboardDeviceEvent {
    return S.read_KeyboardDeviceEvent(this.dt);
  }
  pushKeyboardDevice(e: S.KeyboardDeviceEvent) {
    S.write_KeyboardDeviceEvent(e, this.dt);
    SDL.pushEvent(this.pointer);
  }

  get keyboard(): S.KeyboardEvent {
    return S.read_KeyboardEvent(this.dt);
  }
  pushKeyboard(e: S.KeyboardEvent) {
    S.write_KeyboardEvent(e, this.dt);
    SDL.pushEvent(this.pointer);
  }

  get textEditing(): S.TextEditingEvent {
    return S.read_TextEditingEvent(this.dt);
  }
  pushTextEditing(e: S.TextEditingEvent) {
    S.write_TextEditingEvent(e, this.dt);
    SDL.pushEvent(this.pointer);
  }

  get textEditingCandidates(): S.TextEditingCandidatesEvent {
    return S.read_TextEditingCandidatesEvent(this.dt);
  }
  pushTextEditingCandidates(e: S.TextEditingCandidatesEvent) {
    S.write_TextEditingCandidatesEvent(e, this.dt);
    SDL.pushEvent(this.pointer);
  }

  get textInput(): S.TextInputEvent {
    return S.read_TextInputEvent(this.dt);
  }
  pushTextInput(e: S.TextInputEvent) {
    S.write_TextInputEvent(e, this.dt);
    SDL.pushEvent(this.pointer);
  }

  get mouseDevice(): S.MouseDeviceEvent {
    return S.read_MouseDeviceEvent(this.dt);
  }
  pushMouseDevice(e: S.MouseDeviceEvent) {
    S.write_MouseDeviceEvent(e, this.dt);
    SDL.pushEvent(this.pointer);
  }

  get mouseMotion(): S.MouseMotionEvent {
    return S.read_MouseMotionEvent(this.dt);
  }
  pushMouseMotion(e: S.MouseMotionEvent) {
    S.write_MouseMotionEvent(e, this.dt);
    SDL.pushEvent(this.pointer);
  }

  get mouseButton(): S.MouseButtonEvent {
    return S.read_MouseButtonEvent(this.dt);
  }
  pushMouseButton(e: S.MouseButtonEvent) {
    S.write_MouseButtonEvent(e, this.dt);
    SDL.pushEvent(this.pointer);
  }

  get mouseWheel(): S.MouseWheelEvent {
    return S.read_MouseWheelEvent(this.dt);
  }
  pushMouseWheel(e: S.MouseWheelEvent) {
    S.write_MouseWheelEvent(e, this.dt);
    SDL.pushEvent(this.pointer);
  }

  get joyAxis(): S.JoyAxisEvent {
    return S.read_JoyAxisEvent(this.dt);
  }
  pushJoyAxis(e: S.JoyAxisEvent) {
    S.write_JoyAxisEvent(e, this.dt);
    SDL.pushEvent(this.pointer);
  }

  get joyBall(): S.JoyBallEvent {
    return S.read_JoyBallEvent(this.dt);
  }
  pushJoyBall(e: S.JoyBallEvent) {
    S.write_JoyBallEvent(e, this.dt);
    SDL.pushEvent(this.pointer);
  }

  get joyHat(): S.JoyHatEvent {
    return S.read_JoyHatEvent(this.dt);
  }
  pushJoyHat(e: S.JoyHatEvent) {
    S.write_JoyHatEvent(e, this.dt);
    SDL.pushEvent(this.pointer);
  }

  get joyButton(): S.JoyButtonEvent {
    return S.read_JoyButtonEvent(this.dt);
  }
  pushJoyButton(e: S.JoyButtonEvent) {
    S.write_JoyButtonEvent(e, this.dt);
    SDL.pushEvent(this.pointer);
  }

  get joyDevice(): S.JoyDeviceEvent {
    return S.read_JoyDeviceEvent(this.dt);
  }
  pushJoyDevice(e: S.JoyDeviceEvent) {
    S.write_JoyDeviceEvent(e, this.dt);
    SDL.pushEvent(this.pointer);
  }

  get joyBattery(): S.JoyBatteryEvent {
    return S.read_JoyBatteryEvent(this.dt);
  }
  pushJoyBattery(e: S.JoyBatteryEvent) {
    S.write_JoyBatteryEvent(e, this.dt);
    SDL.pushEvent(this.pointer);
  }

  get gamepadAxis(): S.GamepadAxisEvent {
    return S.read_GamepadAxisEvent(this.dt);
  }
  pushGamepadAxis(e: S.GamepadAxisEvent) {
    S.write_GamepadAxisEvent(e, this.dt);
    SDL.pushEvent(this.pointer);
  }

  get gamepadButton(): S.GamepadButtonEvent {
    return S.read_GamepadButtonEvent(this.dt);
  }
  pushGamepadButton(e: S.GamepadButtonEvent) {
    S.write_GamepadButtonEvent(e, this.dt);
    SDL.pushEvent(this.pointer);
  }

  get gamepadDevice(): S.GamepadDeviceEvent {
    return S.read_GamepadDeviceEvent(this.dt);
  }
  pushGamepadDevice(e: S.GamepadDeviceEvent) {
    S.write_GamepadDeviceEvent(e, this.dt);
    SDL.pushEvent(this.pointer);
  }

  get gamepadTouchpad(): S.GamepadTouchpadEvent {
    return S.read_GamepadTouchpadEvent(this.dt);
  }
  pushGamepadTouchpad(e: S.GamepadTouchpadEvent) {
    S.write_GamepadTouchpadEvent(e, this.dt);
    SDL.pushEvent(this.pointer);
  }

  get gamepadSensor(): S.GamepadSensorEvent {
    return S.read_GamepadSensorEvent(this.dt);
  }
  pushGamepadSensor(e: S.GamepadSensorEvent) {
    S.write_GamepadSensorEvent(e, this.dt);
    SDL.pushEvent(this.pointer);
  }

  get audioDevice(): S.AudioDeviceEvent {
    return S.read_AudioDeviceEvent(this.dt);
  }
  pushAudioDevice(e: S.AudioDeviceEvent) {
    S.write_AudioDeviceEvent(e, this.dt);
    SDL.pushEvent(this.pointer);
  }

  get cameraDevice(): S.CameraDeviceEvent {
    return S.read_CameraDeviceEvent(this.dt);
  }
  pushCameraDevice(e: S.CameraDeviceEvent) {
    S.write_CameraDeviceEvent(e, this.dt);
    SDL.pushEvent(this.pointer);
  }

  get render(): S.RenderEvent {
    return S.read_RenderEvent(this.dt);
  }
  pushRender(e: S.RenderEvent) {
    S.write_RenderEvent(e, this.dt);
    SDL.pushEvent(this.pointer);
  }

  get touchFinger(): S.TouchFingerEvent {
    return S.read_TouchFingerEvent(this.dt);
  }
  pushTouchFinger(e: S.TouchFingerEvent) {
    S.write_TouchFingerEvent(e, this.dt);
    SDL.pushEvent(this.pointer);
  }

  get penProximity(): S.PenProximityEvent {
    return S.read_PenProximityEvent(this.dt);
  }
  pushPenProximity(e: S.PenProximityEvent) {
    S.write_PenProximityEvent(e, this.dt);
    SDL.pushEvent(this.pointer);
  }

  get penMotion(): S.PenMotionEvent {
    return S.read_PenMotionEvent(this.dt);
  }
  pushPenMotion(e: S.PenMotionEvent) {
    S.write_PenMotionEvent(e, this.dt);
    SDL.pushEvent(this.pointer);
  }

  get penTouch(): S.PenTouchEvent {
    return S.read_PenTouchEvent(this.dt);
  }
  pushPenTouch(e: S.PenTouchEvent) {
    S.write_PenTouchEvent(e, this.dt);
    SDL.pushEvent(this.pointer);
  }

  get penButton(): S.PenButtonEvent {
    return S.read_PenButtonEvent(this.dt);
  }
  pushPenButton(e: S.PenButtonEvent) {
    S.write_PenButtonEvent(e, this.dt);
    SDL.pushEvent(this.pointer);
  }

  get penAxis(): S.PenAxisEvent {
    return S.read_PenAxisEvent(this.dt);
  }
  pushPenAxis(e: S.PenAxisEvent) {
    S.write_PenAxisEvent(e, this.dt);
    SDL.pushEvent(this.pointer);
  }

  get drop(): S.DropEvent {
    return S.read_DropEvent(this.dt);
  }
  pushDrop(e: S.DropEvent) {
    S.write_DropEvent(e, this.dt);
    SDL.pushEvent(this.pointer);
  }

  get clipboard(): S.ClipboardEvent {
    return S.read_ClipboardEvent(this.dt);
  }
  pushClipboard(e: S.ClipboardEvent) {
    S.write_ClipboardEvent(e, this.dt);
    SDL.pushEvent(this.pointer);
  }

  get sensor(): S.SensorEvent {
    return S.read_SensorEvent(this.dt);
  }
  pushSensor(e: S.SensorEvent) {
    S.write_SensorEvent(e, this.dt);
    SDL.pushEvent(this.pointer);
  }

  get quit(): S.QuitEvent {
    return S.read_QuitEvent(this.dt);
  }
  pushQuit(e: S.QuitEvent) {
    S.write_QuitEvent(e, this.dt);
    SDL.pushEvent(this.pointer);
  }

  get user(): S.UserEvent {
    return S.read_UserEvent(this.dt);
  }
  pushUser(e: S.UserEvent) {
    S.write_UserEvent(e, this.dt);
    SDL.pushEvent(this.pointer);
  }
}
