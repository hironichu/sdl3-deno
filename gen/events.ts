import * as _ from "./structs/SDL_events.ts";
import { SDL_EventType as EventType } from "./enums/SDL_events.ts";
export { EventType };

export type PartialCommon<T extends _.CommonEvent> = Partial<_.CommonEvent> & Omit<T, keyof _.CommonEvent>;

export type PartialComm_T<T extends _.CommonEvent> =
  Pick<_.CommonEvent, "type"> &
  Partial<Omit<_.CommonEvent, "type">> &
  Omit<T, keyof _.CommonEvent>;

export abstract class EventUnion {
  abstract get dt(): DataView;
  abstract push(): void;


  /**< Event type, shared with all events, Uint32 to cover user events which are not in the SDL_EventType enumeration */
  get common(): _.CommonEvent {
    return _.read_CommonEvent(this.dt);
  }
  pushCommon(e: PartialComm_T<_.CommonEvent>) {
    _.write_CommonEvent({ reserved: 0, timestamp: 0n, ...e }, this.dt);
    this.push();
  }

  /**< SDL_DISPLAYEVENT_* */
  get display(): _.DisplayEvent {
    return _.read_DisplayEvent(this.dt);
  }
  pushDisplay(e: PartialComm_T<_.DisplayEvent>) {
    _.write_DisplayEvent({ reserved: 0, timestamp: 0n, ...e }, this.dt);
    this.push();
  }

  /**< SDL_EVENT_WINDOW_* */
  get window(): _.WindowEvent {
    return _.read_WindowEvent(this.dt);
  }
  pushWindow(e: PartialComm_T<_.WindowEvent>) {
    _.write_WindowEvent({ reserved: 0, timestamp: 0n, ...e }, this.dt);
    this.push();
  }

  /**< SDL_EVENT_KEYBOARD_ADDED or SDL_EVENT_KEYBOARD_REMOVED */
  get keyboardDevice(): _.KeyboardDeviceEvent {
    return _.read_KeyboardDeviceEvent(this.dt);
  }
  pushKeyboardDevice(e: PartialComm_T<_.KeyboardDeviceEvent>) {
    _.write_KeyboardDeviceEvent({ reserved: 0, timestamp: 0n, ...e }, this.dt);
    this.push();
  }

  /**< SDL_EVENT_KEY_DOWN or SDL_EVENT_KEY_UP */
  get keyboard(): _.KeyboardEvent {
    return _.read_KeyboardEvent(this.dt);
  }
  pushKeyboard(e: PartialComm_T<_.KeyboardEvent>) {
    _.write_KeyboardEvent({ reserved: 0, timestamp: 0n, ...e }, this.dt);
    this.push();
  }

  /**< SDL_EVENT_TEXT_EDITING */
  get textEditing(): _.TextEditingEvent {
    return _.read_TextEditingEvent(this.dt);
  }
  pushTextEditing(e: PartialCommon<_.TextEditingEvent>) {
    _.write_TextEditingEvent({ type: EventType.TEXT_EDITING, reserved: 0, timestamp: 0n, ...e }, this.dt);
    this.push();
  }

  /**< SDL_EVENT_TEXT_EDITING_CANDIDATES */
  get textEditingCandidates(): _.TextEditingCandidatesEvent {
    return _.read_TextEditingCandidatesEvent(this.dt);
  }
  pushTextEditingCandidates(e: PartialCommon<_.TextEditingCandidatesEvent>) {
    _.write_TextEditingCandidatesEvent({ type: EventType.TEXT_EDITING_CANDIDATES, reserved: 0, timestamp: 0n, ...e }, this.dt);
    this.push();
  }

  /**< SDL_EVENT_TEXT_INPUT */
  get textInput(): _.TextInputEvent {
    return _.read_TextInputEvent(this.dt);
  }
  pushTextInput(e: PartialCommon<_.TextInputEvent>) {
    _.write_TextInputEvent({ type: EventType.TEXT_INPUT, reserved: 0, timestamp: 0n, ...e }, this.dt);
    this.push();
  }

  /**< SDL_EVENT_MOUSE_ADDED or SDL_EVENT_MOUSE_REMOVED */
  get mouseDevice(): _.MouseDeviceEvent {
    return _.read_MouseDeviceEvent(this.dt);
  }
  pushMouseDevice(e: PartialComm_T<_.MouseDeviceEvent>) {
    _.write_MouseDeviceEvent({ reserved: 0, timestamp: 0n, ...e }, this.dt);
    this.push();
  }

  /**< SDL_EVENT_MOUSE_MOTION */
  get mouseMotion(): _.MouseMotionEvent {
    return _.read_MouseMotionEvent(this.dt);
  }
  pushMouseMotion(e: PartialCommon<_.MouseMotionEvent>) {
    _.write_MouseMotionEvent({ type: EventType.MOUSE_MOTION, reserved: 0, timestamp: 0n, ...e }, this.dt);
    this.push();
  }

  /**< SDL_EVENT_MOUSE_BUTTON_DOWN or SDL_EVENT_MOUSE_BUTTON_UP */
  get mouseButton(): _.MouseButtonEvent {
    return _.read_MouseButtonEvent(this.dt);
  }
  pushMouseButton(e: PartialComm_T<_.MouseButtonEvent>) {
    _.write_MouseButtonEvent({ reserved: 0, timestamp: 0n, ...e }, this.dt);
    this.push();
  }

  /**< SDL_EVENT_MOUSE_WHEEL */
  get mouseWheel(): _.MouseWheelEvent {
    return _.read_MouseWheelEvent(this.dt);
  }
  pushMouseWheel(e: PartialCommon<_.MouseWheelEvent>) {
    _.write_MouseWheelEvent({ type: EventType.MOUSE_WHEEL, reserved: 0, timestamp: 0n, ...e }, this.dt);
    this.push();
  }

  /**< SDL_EVENT_JOYSTICK_AXIS_MOTION */
  get joyAxis(): _.JoyAxisEvent {
    return _.read_JoyAxisEvent(this.dt);
  }
  pushJoyAxis(e: PartialCommon<_.JoyAxisEvent>) {
    _.write_JoyAxisEvent({ type: EventType.JOYSTICK_AXIS_MOTION, reserved: 0, timestamp: 0n, ...e }, this.dt);
    this.push();
  }

  /**< SDL_EVENT_JOYSTICK_BALL_MOTION */
  get joyBall(): _.JoyBallEvent {
    return _.read_JoyBallEvent(this.dt);
  }
  pushJoyBall(e: PartialCommon<_.JoyBallEvent>) {
    _.write_JoyBallEvent({ type: EventType.JOYSTICK_BALL_MOTION, reserved: 0, timestamp: 0n, ...e }, this.dt);
    this.push();
  }

  /**< SDL_EVENT_JOYSTICK_HAT_MOTION */
  get joyHat(): _.JoyHatEvent {
    return _.read_JoyHatEvent(this.dt);
  }
  pushJoyHat(e: PartialCommon<_.JoyHatEvent>) {
    _.write_JoyHatEvent({ type: EventType.JOYSTICK_HAT_MOTION, reserved: 0, timestamp: 0n, ...e }, this.dt);
    this.push();
  }

  /**< SDL_EVENT_JOYSTICK_BUTTON_DOWN or SDL_EVENT_JOYSTICK_BUTTON_UP */
  get joyButton(): _.JoyButtonEvent {
    return _.read_JoyButtonEvent(this.dt);
  }
  pushJoyButton(e: PartialComm_T<_.JoyButtonEvent>) {
    _.write_JoyButtonEvent({ reserved: 0, timestamp: 0n, ...e }, this.dt);
    this.push();
  }

  /**< SDL_EVENT_JOYSTICK_ADDED or SDL_EVENT_JOYSTICK_REMOVED or SDL_EVENT_JOYSTICK_UPDATE_COMPLETE */
  get joyDevice(): _.JoyDeviceEvent {
    return _.read_JoyDeviceEvent(this.dt);
  }
  pushJoyDevice(e: PartialComm_T<_.JoyDeviceEvent>) {
    _.write_JoyDeviceEvent({ reserved: 0, timestamp: 0n, ...e }, this.dt);
    this.push();
  }

  /**< SDL_EVENT_JOYSTICK_BATTERY_UPDATED */
  get joyBattery(): _.JoyBatteryEvent {
    return _.read_JoyBatteryEvent(this.dt);
  }
  pushJoyBattery(e: PartialCommon<_.JoyBatteryEvent>) {
    _.write_JoyBatteryEvent({ type: EventType.JOYSTICK_BATTERY_UPDATED, reserved: 0, timestamp: 0n, ...e }, this.dt);
    this.push();
  }

  /**< SDL_EVENT_GAMEPAD_AXIS_MOTION */
  get gamepadAxis(): _.GamepadAxisEvent {
    return _.read_GamepadAxisEvent(this.dt);
  }
  pushGamepadAxis(e: PartialCommon<_.GamepadAxisEvent>) {
    _.write_GamepadAxisEvent({ type: EventType.GAMEPAD_AXIS_MOTION, reserved: 0, timestamp: 0n, ...e }, this.dt);
    this.push();
  }

  /**< SDL_EVENT_GAMEPAD_BUTTON_DOWN or SDL_EVENT_GAMEPAD_BUTTON_UP */
  get gamepadButton(): _.GamepadButtonEvent {
    return _.read_GamepadButtonEvent(this.dt);
  }
  pushGamepadButton(e: PartialComm_T<_.GamepadButtonEvent>) {
    _.write_GamepadButtonEvent({ reserved: 0, timestamp: 0n, ...e }, this.dt);
    this.push();
  }

  /**< SDL_EVENT_GAMEPAD_ADDED, SDL_EVENT_GAMEPAD_REMOVED, or SDL_EVENT_GAMEPAD_REMAPPED, SDL_EVENT_GAMEPAD_UPDATE_COMPLETE or SDL_EVENT_GAMEPAD_STEAM_HANDLE_UPDATED */
  get gamepadDevice(): _.GamepadDeviceEvent {
    return _.read_GamepadDeviceEvent(this.dt);
  }
  pushGamepadDevice(e: PartialComm_T<_.GamepadDeviceEvent>) {
    _.write_GamepadDeviceEvent({ reserved: 0, timestamp: 0n, ...e }, this.dt);
    this.push();
  }

  /**< SDL_EVENT_GAMEPAD_TOUCHPAD_DOWN or SDL_EVENT_GAMEPAD_TOUCHPAD_MOTION or SDL_EVENT_GAMEPAD_TOUCHPAD_UP */
  get gamepadTouchpad(): _.GamepadTouchpadEvent {
    return _.read_GamepadTouchpadEvent(this.dt);
  }
  pushGamepadTouchpad(e: PartialComm_T<_.GamepadTouchpadEvent>) {
    _.write_GamepadTouchpadEvent({ reserved: 0, timestamp: 0n, ...e }, this.dt);
    this.push();
  }

  /**< SDL_EVENT_GAMEPAD_SENSOR_UPDATE */
  get gamepadSensor(): _.GamepadSensorEvent {
    return _.read_GamepadSensorEvent(this.dt);
  }
  pushGamepadSensor(e: PartialCommon<_.GamepadSensorEvent>) {
    _.write_GamepadSensorEvent({ type: EventType.GAMEPAD_SENSOR_UPDATE, reserved: 0, timestamp: 0n, ...e }, this.dt);
    this.push();
  }

  /**< SDL_EVENT_AUDIO_DEVICE_ADDED, or SDL_EVENT_AUDIO_DEVICE_REMOVED, or SDL_EVENT_AUDIO_DEVICE_FORMAT_CHANGED */
  get audioDevice(): _.AudioDeviceEvent {
    return _.read_AudioDeviceEvent(this.dt);
  }
  pushAudioDevice(e: PartialComm_T<_.AudioDeviceEvent>) {
    _.write_AudioDeviceEvent({ reserved: 0, timestamp: 0n, ...e }, this.dt);
    this.push();
  }

  /**< SDL_EVENT_CAMERA_DEVICE_ADDED, SDL_EVENT_CAMERA_DEVICE_REMOVED, SDL_EVENT_CAMERA_DEVICE_APPROVED, SDL_EVENT_CAMERA_DEVICE_DENIED */
  get cameraDevice(): _.CameraDeviceEvent {
    return _.read_CameraDeviceEvent(this.dt);
  }
  pushCameraDevice(e: PartialComm_T<_.CameraDeviceEvent>) {
    _.write_CameraDeviceEvent({ reserved: 0, timestamp: 0n, ...e }, this.dt);
    this.push();
  }

  /**< SDL_EVENT_RENDER_TARGETS_RESET, SDL_EVENT_RENDER_DEVICE_RESET, SDL_EVENT_RENDER_DEVICE_LOST */
  get render(): _.RenderEvent {
    return _.read_RenderEvent(this.dt);
  }
  pushRender(e: PartialComm_T<_.RenderEvent>) {
    _.write_RenderEvent({ reserved: 0, timestamp: 0n, ...e }, this.dt);
    this.push();
  }

  /**< SDL_EVENT_FINGER_DOWN, SDL_EVENT_FINGER_UP, SDL_EVENT_FINGER_MOTION, or SDL_EVENT_FINGER_CANCELED */
  get touchFinger(): _.TouchFingerEvent {
    return _.read_TouchFingerEvent(this.dt);
  }
  pushTouchFinger(e: PartialComm_T<_.TouchFingerEvent>) {
    _.write_TouchFingerEvent({ reserved: 0, timestamp: 0n, ...e }, this.dt);
    this.push();
  }

  /**< SDL_EVENT_PEN_PROXIMITY_IN or SDL_EVENT_PEN_PROXIMITY_OUT */
  get penProximity(): _.PenProximityEvent {
    return _.read_PenProximityEvent(this.dt);
  }
  pushPenProximity(e: PartialComm_T<_.PenProximityEvent>) {
    _.write_PenProximityEvent({ reserved: 0, timestamp: 0n, ...e }, this.dt);
    this.push();
  }

  /**< SDL_EVENT_PEN_MOTION */
  get penMotion(): _.PenMotionEvent {
    return _.read_PenMotionEvent(this.dt);
  }
  pushPenMotion(e: PartialCommon<_.PenMotionEvent>) {
    _.write_PenMotionEvent({ type: EventType.PEN_MOTION, reserved: 0, timestamp: 0n, ...e }, this.dt);
    this.push();
  }

  /**< SDL_EVENT_PEN_DOWN or SDL_EVENT_PEN_UP */
  get penTouch(): _.PenTouchEvent {
    return _.read_PenTouchEvent(this.dt);
  }
  pushPenTouch(e: PartialComm_T<_.PenTouchEvent>) {
    _.write_PenTouchEvent({ reserved: 0, timestamp: 0n, ...e }, this.dt);
    this.push();
  }

  /**< SDL_EVENT_PEN_BUTTON_DOWN or SDL_EVENT_PEN_BUTTON_UP */
  get penButton(): _.PenButtonEvent {
    return _.read_PenButtonEvent(this.dt);
  }
  pushPenButton(e: PartialComm_T<_.PenButtonEvent>) {
    _.write_PenButtonEvent({ reserved: 0, timestamp: 0n, ...e }, this.dt);
    this.push();
  }

  /**< SDL_EVENT_PEN_AXIS */
  get penAxis(): _.PenAxisEvent {
    return _.read_PenAxisEvent(this.dt);
  }
  pushPenAxis(e: PartialCommon<_.PenAxisEvent>) {
    _.write_PenAxisEvent({ type: EventType.PEN_AXIS, reserved: 0, timestamp: 0n, ...e }, this.dt);
    this.push();
  }

  /**< SDL_EVENT_DROP_BEGIN or SDL_EVENT_DROP_FILE or SDL_EVENT_DROP_TEXT or SDL_EVENT_DROP_COMPLETE or SDL_EVENT_DROP_POSITION */
  get drop(): _.DropEvent {
    return _.read_DropEvent(this.dt);
  }
  pushDrop(e: PartialComm_T<_.DropEvent>) {
    _.write_DropEvent({ reserved: 0, timestamp: 0n, ...e }, this.dt);
    this.push();
  }

  /**< SDL_EVENT_CLIPBOARD_UPDATE */
  get clipboard(): _.ClipboardEvent {
    return _.read_ClipboardEvent(this.dt);
  }
  pushClipboard(e: PartialCommon<_.ClipboardEvent>) {
    _.write_ClipboardEvent({ type: EventType.CLIPBOARD_UPDATE, reserved: 0, timestamp: 0n, ...e }, this.dt);
    this.push();
  }

  /**< SDL_EVENT_SENSOR_UPDATE */
  get sensor(): _.SensorEvent {
    return _.read_SensorEvent(this.dt);
  }
  pushSensor(e: PartialCommon<_.SensorEvent>) {
    _.write_SensorEvent({ type: EventType.SENSOR_UPDATE, reserved: 0, timestamp: 0n, ...e }, this.dt);
    this.push();
  }

  /**< SDL_EVENT_QUIT */
  get quit(): _.QuitEvent {
    return _.read_QuitEvent(this.dt);
  }
  pushQuit(e: PartialCommon<_.QuitEvent>) {
    _.write_QuitEvent({ type: EventType.QUIT, reserved: 0, timestamp: 0n, ...e }, this.dt);
    this.push();
  }

  /**< SDL_EVENT_USER through SDL_EVENT_LAST-1, Uint32 because these are not in the SDL_EventType enumeration */
  get user(): _.UserEvent {
    return _.read_UserEvent(this.dt);
  }
  pushUser(e: PartialComm_T<_.UserEvent>) {
    _.write_UserEvent({ reserved: 0, timestamp: 0n, ...e }, this.dt);
    this.push();
  }
}
