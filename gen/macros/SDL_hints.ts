/**
 * # CategoryHints
 *
 * This file contains functions to set and get configuration hints, as well as
 * listing each of them alphabetically.
 *
 * The convention for naming hints is SDL_HINT_X, where "SDL_X" is the
 * environment variable that can be used to override the default.
 *
 * In general these hints are just that - they may or may not be supported or
 * applicable on any given platform, but they provide a way for an application
 * or user to give the library a hint as to how they would like the library to
 * work.
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

/**
 * @from SDL_hints:65
 */
export const SDL_HINT_ALLOW_ALT_TAB_WHILE_GRABBED = "SDL_ALLOW_ALT_TAB_WHILE_GRABBED";

/**
 * @from SDL_hints:85
 */
export const SDL_HINT_ANDROID_ALLOW_RECREATE_ACTIVITY = "SDL_ANDROID_ALLOW_RECREATE_ACTIVITY";

/**
 * @from SDL_hints:100
 */
export const SDL_HINT_ANDROID_BLOCK_ON_PAUSE = "SDL_ANDROID_BLOCK_ON_PAUSE";

/**
 * @from SDL_hints:117
 */
export const SDL_HINT_ANDROID_LOW_LATENCY_AUDIO = "SDL_ANDROID_LOW_LATENCY_AUDIO";

/**
 * @from SDL_hints:140
 */
export const SDL_HINT_ANDROID_TRAP_BACK_BUTTON = "SDL_ANDROID_TRAP_BACK_BUTTON";

/**
 * @from SDL_hints:156
 */
export const SDL_HINT_APP_ID = "SDL_APP_ID";

/**
 * @from SDL_hints:174
 */
export const SDL_HINT_APP_NAME = "SDL_APP_NAME";

/**
 * @from SDL_hints:197
 */
export const SDL_HINT_APPLE_TV_CONTROLLER_UI_EVENTS = "SDL_APPLE_TV_CONTROLLER_UI_EVENTS";

/**
 * @from SDL_hints:212
 */
export const SDL_HINT_APPLE_TV_REMOTE_ALLOW_ROTATION = "SDL_APPLE_TV_REMOTE_ALLOW_ROTATION";

/**
 * @from SDL_hints:232
 */
export const SDL_HINT_AUDIO_ALSA_DEFAULT_DEVICE = "SDL_AUDIO_ALSA_DEFAULT_DEVICE";

/**
 * @from SDL_hints:250
 */
export const SDL_HINT_AUDIO_ALSA_DEFAULT_PLAYBACK_DEVICE = "SDL_AUDIO_ALSA_DEFAULT_PLAYBACK_DEVICE";

/**
 * @from SDL_hints:268
 */
export const SDL_HINT_AUDIO_ALSA_DEFAULT_RECORDING_DEVICE = "SDL_AUDIO_ALSA_DEFAULT_RECORDING_DEVICE";

/**
 * @from SDL_hints:286
 */
export const SDL_HINT_AUDIO_CATEGORY = "SDL_AUDIO_CATEGORY";

/**
 * @from SDL_hints:299
 */
export const SDL_HINT_AUDIO_CHANNELS = "SDL_AUDIO_CHANNELS";

/**
 * @from SDL_hints:322
 */
export const SDL_HINT_AUDIO_DEVICE_APP_ICON_NAME = "SDL_AUDIO_DEVICE_APP_ICON_NAME";

/**
 * @from SDL_hints:344
 */
export const SDL_HINT_AUDIO_DEVICE_SAMPLE_FRAMES = "SDL_AUDIO_DEVICE_SAMPLE_FRAMES";

/**
 * @from SDL_hints:371
 */
export const SDL_HINT_AUDIO_DEVICE_STREAM_NAME = "SDL_AUDIO_DEVICE_STREAM_NAME";

/**
 * @from SDL_hints:397
 */
export const SDL_HINT_AUDIO_DEVICE_STREAM_ROLE = "SDL_AUDIO_DEVICE_STREAM_ROLE";

/**
 * @from SDL_hints:408
 */
export const SDL_HINT_AUDIO_DISK_INPUT_FILE = "SDL_AUDIO_DISK_INPUT_FILE";

/**
 * @from SDL_hints:419
 */
export const SDL_HINT_AUDIO_DISK_OUTPUT_FILE = "SDL_AUDIO_DISK_OUTPUT_FILE";

/**
 * @from SDL_hints:432
 */
export const SDL_HINT_AUDIO_DISK_TIMESCALE = "SDL_AUDIO_DISK_TIMESCALE";

/**
 * @from SDL_hints:446
 */
export const SDL_HINT_AUDIO_DRIVER = "SDL_AUDIO_DRIVER";

/**
 * @from SDL_hints:459
 */
export const SDL_HINT_AUDIO_DUMMY_TIMESCALE = "SDL_AUDIO_DUMMY_TIMESCALE";

/**
 * @from SDL_hints:486
 */
export const SDL_HINT_AUDIO_FORMAT = "SDL_AUDIO_FORMAT";

/**
 * @from SDL_hints:499
 */
export const SDL_HINT_AUDIO_FREQUENCY = "SDL_AUDIO_FREQUENCY";

/**
 * @from SDL_hints:522
 */
export const SDL_HINT_AUDIO_INCLUDE_MONITORS = "SDL_AUDIO_INCLUDE_MONITORS";

/**
 * @from SDL_hints:537
 */
export const SDL_HINT_AUTO_UPDATE_JOYSTICKS = "SDL_AUTO_UPDATE_JOYSTICKS";

/**
 * @from SDL_hints:552
 */
export const SDL_HINT_AUTO_UPDATE_SENSORS = "SDL_AUTO_UPDATE_SENSORS";

/**
 * @from SDL_hints:575
 */
export const SDL_HINT_BMP_SAVE_LEGACY_FORMAT = "SDL_BMP_SAVE_LEGACY_FORMAT";

/**
 * @from SDL_hints:591
 */
export const SDL_HINT_CAMERA_DRIVER = "SDL_CAMERA_DRIVER";

/**
 * @from SDL_hints:624
 */
export const SDL_HINT_CPU_FEATURE_MASK = "SDL_CPU_FEATURE_MASK";

/**
 * @from SDL_hints:638
 */
export const SDL_HINT_JOYSTICK_DIRECTINPUT = "SDL_JOYSTICK_DIRECTINPUT";

/**
 * @from SDL_hints:667
 */
export const SDL_HINT_FILE_DIALOG_DRIVER = "SDL_FILE_DIALOG_DRIVER";

/**
 * @from SDL_hints:685
 */
export const SDL_HINT_DISPLAY_USABLE_BOUNDS = "SDL_DISPLAY_USABLE_BOUNDS";

/**
 * @from SDL_hints:706
 */
export const SDL_HINT_EMSCRIPTEN_ASYNCIFY = "SDL_EMSCRIPTEN_ASYNCIFY";

/**
 * @from SDL_hints:719
 */
export const SDL_HINT_EMSCRIPTEN_CANVAS_SELECTOR = "SDL_EMSCRIPTEN_CANVAS_SELECTOR";

/**
 * @from SDL_hints:740
 */
export const SDL_HINT_EMSCRIPTEN_KEYBOARD_ELEMENT = "SDL_EMSCRIPTEN_KEYBOARD_ELEMENT";

/**
 * @from SDL_hints:757
 */
export const SDL_HINT_ENABLE_SCREEN_KEYBOARD = "SDL_ENABLE_SCREEN_KEYBOARD";

/**
 * @from SDL_hints:774
 */
export const SDL_HINT_EVDEV_DEVICES = "SDL_EVDEV_DEVICES";

/**
 * @from SDL_hints:798
 */
export const SDL_HINT_EVENT_LOGGING = "SDL_EVENT_LOGGING";

/**
 * @from SDL_hints:818
 */
export const SDL_HINT_FORCE_RAISEWINDOW = "SDL_FORCE_RAISEWINDOW";

/**
 * @from SDL_hints:839
 */
export const SDL_HINT_FRAMEBUFFER_ACCELERATION = "SDL_FRAMEBUFFER_ACCELERATION";

/**
 * @from SDL_hints:854
 */
export const SDL_HINT_GAMECONTROLLERCONFIG = "SDL_GAMECONTROLLERCONFIG";

/**
 * @from SDL_hints:870
 */
export const SDL_HINT_GAMECONTROLLERCONFIG_FILE = "SDL_GAMECONTROLLERCONFIG_FILE";

/**
 * @from SDL_hints:894
 */
export const SDL_HINT_GAMECONTROLLERTYPE = "SDL_GAMECONTROLLERTYPE";

/**
 * @from SDL_hints:912
 */
export const SDL_HINT_GAMECONTROLLER_IGNORE_DEVICES = "SDL_GAMECONTROLLER_IGNORE_DEVICES";

/**
 * @from SDL_hints:930
 */
export const SDL_HINT_GAMECONTROLLER_IGNORE_DEVICES_EXCEPT = "SDL_GAMECONTROLLER_IGNORE_DEVICES_EXCEPT";

/**
 * @from SDL_hints:953
 */
export const SDL_HINT_GAMECONTROLLER_SENSOR_FUSION = "SDL_GAMECONTROLLER_SENSOR_FUSION";

/**
 * @from SDL_hints:965
 */
export const SDL_HINT_GDK_TEXTINPUT_DEFAULT_TEXT = "SDL_GDK_TEXTINPUT_DEFAULT_TEXT";

/**
 * @from SDL_hints:977
 */
export const SDL_HINT_GDK_TEXTINPUT_DESCRIPTION = "SDL_GDK_TEXTINPUT_DESCRIPTION";

/**
 * @from SDL_hints:992
 */
export const SDL_HINT_GDK_TEXTINPUT_MAX_LENGTH = "SDL_GDK_TEXTINPUT_MAX_LENGTH";

/**
 * @from SDL_hints:1008
 */
export const SDL_HINT_GDK_TEXTINPUT_SCOPE = "SDL_GDK_TEXTINPUT_SCOPE";

/**
 * @from SDL_hints:1019
 */
export const SDL_HINT_GDK_TEXTINPUT_TITLE = "SDL_GDK_TEXTINPUT_TITLE";

/**
 * @from SDL_hints:1037
 */
export const SDL_HINT_HIDAPI_LIBUSB = "SDL_HIDAPI_LIBUSB";

/**
 * @from SDL_hints:1055
 */
export const SDL_HINT_HIDAPI_LIBUSB_WHITELIST = "SDL_HIDAPI_LIBUSB_WHITELIST";

/**
 * @from SDL_hints:1069
 */
export const SDL_HINT_HIDAPI_UDEV = "SDL_HIDAPI_UDEV";

/**
 * @from SDL_hints:1083
 */
export const SDL_HINT_GPU_DRIVER = "SDL_GPU_DRIVER";

/**
 * @from SDL_hints:1102
 */
export const SDL_HINT_HIDAPI_ENUMERATE_ONLY_CONTROLLERS = "SDL_HIDAPI_ENUMERATE_ONLY_CONTROLLERS";

/**
 * @from SDL_hints:1119
 */
export const SDL_HINT_HIDAPI_IGNORE_DEVICES = "SDL_HIDAPI_IGNORE_DEVICES";

/**
 * @from SDL_hints:1142
 */
export const SDL_HINT_IME_IMPLEMENTED_UI = "SDL_IME_IMPLEMENTED_UI";

/**
 * @from SDL_hints:1161
 */
export const SDL_HINT_IOS_HIDE_HOME_INDICATOR = "SDL_IOS_HIDE_HOME_INDICATOR";

/**
 * @from SDL_hints:1178
 */
export const SDL_HINT_JOYSTICK_ALLOW_BACKGROUND_EVENTS = "SDL_JOYSTICK_ALLOW_BACKGROUND_EVENTS";

/**
 * @from SDL_hints:1195
 */
export const SDL_HINT_JOYSTICK_ARCADESTICK_DEVICES = "SDL_JOYSTICK_ARCADESTICK_DEVICES";

/**
 * @from SDL_hints:1216
 */
export const SDL_HINT_JOYSTICK_ARCADESTICK_DEVICES_EXCLUDED = "SDL_JOYSTICK_ARCADESTICK_DEVICES_EXCLUDED";

/**
 * @from SDL_hints:1234
 */
export const SDL_HINT_JOYSTICK_BLACKLIST_DEVICES = "SDL_JOYSTICK_BLACKLIST_DEVICES";

/**
 * @from SDL_hints:1255
 */
export const SDL_HINT_JOYSTICK_BLACKLIST_DEVICES_EXCLUDED = "SDL_JOYSTICK_BLACKLIST_DEVICES_EXCLUDED";

/**
 * @from SDL_hints:1265
 */
export const SDL_HINT_JOYSTICK_DEVICE = "SDL_JOYSTICK_DEVICE";

/**
 * @from SDL_hints:1290
 */
export const SDL_HINT_JOYSTICK_ENHANCED_REPORTS = "SDL_JOYSTICK_ENHANCED_REPORTS";

/**
 * @from SDL_hints:1307
 */
export const SDL_HINT_JOYSTICK_FLIGHTSTICK_DEVICES = "SDL_JOYSTICK_FLIGHTSTICK_DEVICES";

/**
 * @from SDL_hints:1328
 */
export const SDL_HINT_JOYSTICK_FLIGHTSTICK_DEVICES_EXCLUDED = "SDL_JOYSTICK_FLIGHTSTICK_DEVICES_EXCLUDED";

/**
 * @from SDL_hints:1345
 */
export const SDL_HINT_JOYSTICK_GAMEINPUT = "SDL_JOYSTICK_GAMEINPUT";

/**
 * @from SDL_hints:1363
 */
export const SDL_HINT_JOYSTICK_GAMECUBE_DEVICES = "SDL_JOYSTICK_GAMECUBE_DEVICES";

/**
 * @from SDL_hints:1384
 */
export const SDL_HINT_JOYSTICK_GAMECUBE_DEVICES_EXCLUDED = "SDL_JOYSTICK_GAMECUBE_DEVICES_EXCLUDED";

/**
 * @from SDL_hints:1401
 */
export const SDL_HINT_JOYSTICK_HIDAPI = "SDL_JOYSTICK_HIDAPI";

/**
 * @from SDL_hints:1418
 */
export const SDL_HINT_JOYSTICK_HIDAPI_COMBINE_JOY_CONS = "SDL_JOYSTICK_HIDAPI_COMBINE_JOY_CONS";

/**
 * @from SDL_hints:1435
 */
export const SDL_HINT_JOYSTICK_HIDAPI_GAMECUBE = "SDL_JOYSTICK_HIDAPI_GAMECUBE";

/**
 * @from SDL_hints:1456
 */
export const SDL_HINT_JOYSTICK_HIDAPI_GAMECUBE_RUMBLE_BRAKE = "SDL_JOYSTICK_HIDAPI_GAMECUBE_RUMBLE_BRAKE";

/**
 * @from SDL_hints:1473
 */
export const SDL_HINT_JOYSTICK_HIDAPI_JOY_CONS = "SDL_JOYSTICK_HIDAPI_JOY_CONS";

/**
 * @from SDL_hints:1492
 */
export const SDL_HINT_JOYSTICK_HIDAPI_JOYCON_HOME_LED = "SDL_JOYSTICK_HIDAPI_JOYCON_HOME_LED";

/**
 * @from SDL_hints:1509
 */
export const SDL_HINT_JOYSTICK_HIDAPI_LUNA = "SDL_JOYSTICK_HIDAPI_LUNA";

/**
 * @from SDL_hints:1526
 */
export const SDL_HINT_JOYSTICK_HIDAPI_NINTENDO_CLASSIC = "SDL_JOYSTICK_HIDAPI_NINTENDO_CLASSIC";

/**
 * @from SDL_hints:1548
 */
export const SDL_HINT_JOYSTICK_HIDAPI_PS3 = "SDL_JOYSTICK_HIDAPI_PS3";

/**
 * @from SDL_hints:1565
 */
export const SDL_HINT_JOYSTICK_HIDAPI_PS3_SIXAXIS_DRIVER = "SDL_JOYSTICK_HIDAPI_PS3_SIXAXIS_DRIVER";

/**
 * @from SDL_hints:1582
 */
export const SDL_HINT_JOYSTICK_HIDAPI_PS4 = "SDL_JOYSTICK_HIDAPI_PS4";

/**
 * @from SDL_hints:1597
 */
export const SDL_HINT_JOYSTICK_HIDAPI_PS4_REPORT_INTERVAL = "SDL_JOYSTICK_HIDAPI_PS4_REPORT_INTERVAL";

/**
 * @from SDL_hints:1614
 */
export const SDL_HINT_JOYSTICK_HIDAPI_PS5 = "SDL_JOYSTICK_HIDAPI_PS5";

/**
 * @from SDL_hints:1627
 */
export const SDL_HINT_JOYSTICK_HIDAPI_PS5_PLAYER_LED = "SDL_JOYSTICK_HIDAPI_PS5_PLAYER_LED";

/**
 * @from SDL_hints:1644
 */
export const SDL_HINT_JOYSTICK_HIDAPI_SHIELD = "SDL_JOYSTICK_HIDAPI_SHIELD";

/**
 * @from SDL_hints:1659
 */
export const SDL_HINT_JOYSTICK_HIDAPI_STADIA = "SDL_JOYSTICK_HIDAPI_STADIA";

/**
 * @from SDL_hints:1676
 */
export const SDL_HINT_JOYSTICK_HIDAPI_STEAM = "SDL_JOYSTICK_HIDAPI_STEAM";

/**
 * @from SDL_hints:1695
 */
export const SDL_HINT_JOYSTICK_HIDAPI_STEAM_HOME_LED = "SDL_JOYSTICK_HIDAPI_STEAM_HOME_LED";

/**
 * @from SDL_hints:1712
 */
export const SDL_HINT_JOYSTICK_HIDAPI_STEAMDECK = "SDL_JOYSTICK_HIDAPI_STEAMDECK";

/**
 * @from SDL_hints:1723
 */
export const SDL_HINT_JOYSTICK_HIDAPI_STEAM_HORI = "SDL_JOYSTICK_HIDAPI_STEAM_HORI";

/**
 * @from SDL_hints:1740
 */
export const SDL_HINT_JOYSTICK_HIDAPI_SWITCH = "SDL_JOYSTICK_HIDAPI_SWITCH";

/**
 * @from SDL_hints:1759
 */
export const SDL_HINT_JOYSTICK_HIDAPI_SWITCH_HOME_LED = "SDL_JOYSTICK_HIDAPI_SWITCH_HOME_LED";

/**
 * @from SDL_hints:1774
 */
export const SDL_HINT_JOYSTICK_HIDAPI_SWITCH_PLAYER_LED = "SDL_JOYSTICK_HIDAPI_SWITCH_PLAYER_LED";

/**
 * @from SDL_hints:1790
 */
export const SDL_HINT_JOYSTICK_HIDAPI_VERTICAL_JOY_CONS = "SDL_JOYSTICK_HIDAPI_VERTICAL_JOY_CONS";

/**
 * @from SDL_hints:1808
 */
export const SDL_HINT_JOYSTICK_HIDAPI_WII = "SDL_JOYSTICK_HIDAPI_WII";

/**
 * @from SDL_hints:1823
 */
export const SDL_HINT_JOYSTICK_HIDAPI_WII_PLAYER_LED = "SDL_JOYSTICK_HIDAPI_WII_PLAYER_LED";

/**
 * @from SDL_hints:1841
 */
export const SDL_HINT_JOYSTICK_HIDAPI_XBOX = "SDL_JOYSTICK_HIDAPI_XBOX";

/**
 * @from SDL_hints:1858
 */
export const SDL_HINT_JOYSTICK_HIDAPI_XBOX_360 = "SDL_JOYSTICK_HIDAPI_XBOX_360";

/**
 * @from SDL_hints:1873
 */
export const SDL_HINT_JOYSTICK_HIDAPI_XBOX_360_PLAYER_LED = "SDL_JOYSTICK_HIDAPI_XBOX_360_PLAYER_LED";

/**
 * @from SDL_hints:1890
 */
export const SDL_HINT_JOYSTICK_HIDAPI_XBOX_360_WIRELESS = "SDL_JOYSTICK_HIDAPI_XBOX_360_WIRELESS";

/**
 * @from SDL_hints:1907
 */
export const SDL_HINT_JOYSTICK_HIDAPI_XBOX_ONE = "SDL_JOYSTICK_HIDAPI_XBOX_ONE";

/**
 * @from SDL_hints:1926
 */
export const SDL_HINT_JOYSTICK_HIDAPI_XBOX_ONE_HOME_LED = "SDL_JOYSTICK_HIDAPI_XBOX_ONE_HOME_LED";

/**
 * @from SDL_hints:1941
 */
export const SDL_HINT_JOYSTICK_IOKIT = "SDL_JOYSTICK_IOKIT";

/**
 * @from SDL_hints:1956
 */
export const SDL_HINT_JOYSTICK_LINUX_CLASSIC = "SDL_JOYSTICK_LINUX_CLASSIC";

/**
 * @from SDL_hints:1971
 */
export const SDL_HINT_JOYSTICK_LINUX_DEADZONES = "SDL_JOYSTICK_LINUX_DEADZONES";

/**
 * @from SDL_hints:1989
 */
export const SDL_HINT_JOYSTICK_LINUX_DIGITAL_HATS = "SDL_JOYSTICK_LINUX_DIGITAL_HATS";

/**
 * @from SDL_hints:2005
 */
export const SDL_HINT_JOYSTICK_LINUX_HAT_DEADZONES = "SDL_JOYSTICK_LINUX_HAT_DEADZONES";

/**
 * @from SDL_hints:2020
 */
export const SDL_HINT_JOYSTICK_MFI = "SDL_JOYSTICK_MFI";

/**
 * @from SDL_hints:2035
 */
export const SDL_HINT_JOYSTICK_RAWINPUT = "SDL_JOYSTICK_RAWINPUT";

/**
 * @from SDL_hints:2052
 */
export const SDL_HINT_JOYSTICK_RAWINPUT_CORRELATE_XINPUT = "SDL_JOYSTICK_RAWINPUT_CORRELATE_XINPUT";

/**
 * @from SDL_hints:2067
 */
export const SDL_HINT_JOYSTICK_ROG_CHAKRAM = "SDL_JOYSTICK_ROG_CHAKRAM";

/**
 * @from SDL_hints:2082
 */
export const SDL_HINT_JOYSTICK_THREAD = "SDL_JOYSTICK_THREAD";

/**
 * @from SDL_hints:2099
 */
export const SDL_HINT_JOYSTICK_THROTTLE_DEVICES = "SDL_JOYSTICK_THROTTLE_DEVICES";

/**
 * @from SDL_hints:2120
 */
export const SDL_HINT_JOYSTICK_THROTTLE_DEVICES_EXCLUDED = "SDL_JOYSTICK_THROTTLE_DEVICES_EXCLUDED";

/**
 * @from SDL_hints:2135
 */
export const SDL_HINT_JOYSTICK_WGI = "SDL_JOYSTICK_WGI";

/**
 * @from SDL_hints:2152
 */
export const SDL_HINT_JOYSTICK_WHEEL_DEVICES = "SDL_JOYSTICK_WHEEL_DEVICES";

/**
 * @from SDL_hints:2173
 */
export const SDL_HINT_JOYSTICK_WHEEL_DEVICES_EXCLUDED = "SDL_JOYSTICK_WHEEL_DEVICES_EXCLUDED";

/**
 * @from SDL_hints:2191
 */
export const SDL_HINT_JOYSTICK_ZERO_CENTERED_DEVICES = "SDL_JOYSTICK_ZERO_CENTERED_DEVICES";

/**
 * @from SDL_hints:2213
 */
export const SDL_HINT_JOYSTICK_HAPTIC_AXES = "SDL_JOYSTICK_HAPTIC_AXES";

/**
 * @from SDL_hints:2247
 */
export const SDL_HINT_KEYCODE_OPTIONS = "SDL_KEYCODE_OPTIONS";

/**
 * @from SDL_hints:2261
 */
export const SDL_HINT_KMSDRM_DEVICE_INDEX = "SDL_KMSDRM_DEVICE_INDEX";

/**
 * @from SDL_hints:2289
 */
export const SDL_HINT_KMSDRM_REQUIRE_DRM_MASTER = "SDL_KMSDRM_REQUIRE_DRM_MASTER";

/**
 * @from SDL_hints:2315
 */
export const SDL_HINT_LOGGING = "SDL_LOGGING";

/**
 * @from SDL_hints:2331
 */
export const SDL_HINT_MAC_BACKGROUND_APP = "SDL_MAC_BACKGROUND_APP";

/**
 * @from SDL_hints:2347
 */
export const SDL_HINT_MAC_CTRL_CLICK_EMULATE_RIGHT_CLICK = "SDL_MAC_CTRL_CLICK_EMULATE_RIGHT_CLICK";

/**
 * @from SDL_hints:2370
 */
export const SDL_HINT_MAC_OPENGL_ASYNC_DISPATCH = "SDL_MAC_OPENGL_ASYNC_DISPATCH";

/**
 * @from SDL_hints:2395
 */
export const SDL_HINT_MAC_OPTION_AS_ALT = "SDL_MAC_OPTION_AS_ALT";

/**
 * @from SDL_hints:2410
 */
export const SDL_HINT_MAC_SCROLL_MOMENTUM = "SDL_MAC_SCROLL_MOMENTUM";

/**
 * @from SDL_hints:2436
 */
export const SDL_HINT_MAIN_CALLBACK_RATE = "SDL_MAIN_CALLBACK_RATE";

/**
 * @from SDL_hints:2455
 */
export const SDL_HINT_MOUSE_AUTO_CAPTURE = "SDL_MOUSE_AUTO_CAPTURE";

/**
 * @from SDL_hints:2464
 */
export const SDL_HINT_MOUSE_DOUBLE_CLICK_RADIUS = "SDL_MOUSE_DOUBLE_CLICK_RADIUS";

/**
 * @from SDL_hints:2473
 */
export const SDL_HINT_MOUSE_DOUBLE_CLICK_TIME = "SDL_MOUSE_DOUBLE_CLICK_TIME";

/**
 * @from SDL_hints:2485
 */
export const SDL_HINT_MOUSE_DEFAULT_SYSTEM_CURSOR = "SDL_MOUSE_DEFAULT_SYSTEM_CURSOR";

/**
 * @from SDL_hints:2517
 */
export const SDL_HINT_MOUSE_EMULATE_WARP_WITH_RELATIVE = "SDL_MOUSE_EMULATE_WARP_WITH_RELATIVE";

/**
 * @from SDL_hints:2531
 */
export const SDL_HINT_MOUSE_FOCUS_CLICKTHROUGH = "SDL_MOUSE_FOCUS_CLICKTHROUGH";

/**
 * @from SDL_hints:2541
 */
export const SDL_HINT_MOUSE_NORMAL_SPEED_SCALE = "SDL_MOUSE_NORMAL_SPEED_SCALE";

/**
 * @from SDL_hints:2562
 */
export const SDL_HINT_MOUSE_RELATIVE_MODE_CENTER = "SDL_MOUSE_RELATIVE_MODE_CENTER";

/**
 * @from SDL_hints:2572
 */
export const SDL_HINT_MOUSE_RELATIVE_SPEED_SCALE = "SDL_MOUSE_RELATIVE_SPEED_SCALE";

/**
 * @from SDL_hints:2591
 */
export const SDL_HINT_MOUSE_RELATIVE_SYSTEM_SCALE = "SDL_MOUSE_RELATIVE_SYSTEM_SCALE";

/**
 * @from SDL_hints:2610
 */
export const SDL_HINT_MOUSE_RELATIVE_WARP_MOTION = "SDL_MOUSE_RELATIVE_WARP_MOTION";

/**
 * @from SDL_hints:2629
 */
export const SDL_HINT_MOUSE_RELATIVE_CURSOR_VISIBLE = "SDL_MOUSE_RELATIVE_CURSOR_VISIBLE";

/**
 * @from SDL_hints:2646
 */
export const SDL_HINT_MOUSE_TOUCH_EVENTS = "SDL_MOUSE_TOUCH_EVENTS";

/**
 * @from SDL_hints:2664
 */
export const SDL_HINT_MUTE_CONSOLE_KEYBOARD = "SDL_MUTE_CONSOLE_KEYBOARD";

/**
 * @from SDL_hints:2679
 */
export const SDL_HINT_NO_SIGNAL_HANDLERS = "SDL_NO_SIGNAL_HANDLERS";

/**
 * @from SDL_hints:2690
 */
export const SDL_HINT_OPENGL_LIBRARY = "SDL_OPENGL_LIBRARY";

/**
 * @from SDL_hints:2702
 */
export const SDL_HINT_EGL_LIBRARY = "SDL_EGL_LIBRARY";

/**
 * @from SDL_hints:2736
 */
export const SDL_HINT_OPENGL_ES_DRIVER = "SDL_OPENGL_ES_DRIVER";

/**
 * @from SDL_hints:2748
 */
export const SDL_HINT_OPENVR_LIBRARY = "SDL_OPENVR_LIBRARY";

/**
 * @from SDL_hints:2767
 */
export const SDL_HINT_ORIENTATIONS = "SDL_ORIENTATIONS";

/**
 * @from SDL_hints:2787
 */
export const SDL_HINT_POLL_SENTINEL = "SDL_POLL_SENTINEL";

/**
 * @from SDL_hints:2805
 */
export const SDL_HINT_PREFERRED_LOCALES = "SDL_PREFERRED_LOCALES";

/**
 * @from SDL_hints:2828
 */
export const SDL_HINT_QUIT_ON_LAST_WINDOW_CLOSE = "SDL_QUIT_ON_LAST_WINDOW_CLOSE";

/**
 * @from SDL_hints:2843
 */
export const SDL_HINT_RENDER_DIRECT3D_THREADSAFE = "SDL_RENDER_DIRECT3D_THREADSAFE";

/**
 * @from SDL_hints:2859
 */
export const SDL_HINT_RENDER_DIRECT3D11_DEBUG = "SDL_RENDER_DIRECT3D11_DEBUG";

/**
 * @from SDL_hints:2873
 */
export const SDL_HINT_RENDER_VULKAN_DEBUG = "SDL_RENDER_VULKAN_DEBUG";

/**
 * @from SDL_hints:2887
 */
export const SDL_HINT_RENDER_GPU_DEBUG = "SDL_RENDER_GPU_DEBUG";

/**
 * @from SDL_hints:2902
 */
export const SDL_HINT_RENDER_GPU_LOW_POWER = "SDL_RENDER_GPU_LOW_POWER";

/**
 * @from SDL_hints:2935
 */
export const SDL_HINT_RENDER_DRIVER = "SDL_RENDER_DRIVER";

/**
 * @from SDL_hints:2953
 */
export const SDL_HINT_RENDER_LINE_METHOD = "SDL_RENDER_LINE_METHOD";

/**
 * @from SDL_hints:2968
 */
export const SDL_HINT_RENDER_METAL_PREFER_LOW_POWER_DEVICE = "SDL_RENDER_METAL_PREFER_LOW_POWER_DEVICE";

/**
 * @from SDL_hints:2985
 */
export const SDL_HINT_RENDER_VSYNC = "SDL_RENDER_VSYNC";

/**
 * @from SDL_hints:3002
 */
export const SDL_HINT_RETURN_KEY_HIDES_IME = "SDL_RETURN_KEY_HIDES_IME";

/**
 * @from SDL_hints:3021
 */
export const SDL_HINT_ROG_GAMEPAD_MICE = "SDL_ROG_GAMEPAD_MICE";

/**
 * @from SDL_hints:3041
 */
export const SDL_HINT_ROG_GAMEPAD_MICE_EXCLUDED = "SDL_ROG_GAMEPAD_MICE_EXCLUDED";

/**
 * @from SDL_hints:3053
 */
export const SDL_HINT_RPI_VIDEO_LAYER = "SDL_RPI_VIDEO_LAYER";

/**
 * @from SDL_hints:3075
 */
export const SDL_HINT_SCREENSAVER_INHIBIT_ACTIVITY_NAME = "SDL_SCREENSAVER_INHIBIT_ACTIVITY_NAME";

/**
 * @from SDL_hints:3094
 */
export const SDL_HINT_SHUTDOWN_DBUS_ON_QUIT = "SDL_SHUTDOWN_DBUS_ON_QUIT";

/**
 * @from SDL_hints:3108
 */
export const SDL_HINT_STORAGE_TITLE_DRIVER = "SDL_STORAGE_TITLE_DRIVER";

/**
 * @from SDL_hints:3122
 */
export const SDL_HINT_STORAGE_USER_DRIVER = "SDL_STORAGE_USER_DRIVER";

/**
 * @from SDL_hints:3151
 */
export const SDL_HINT_THREAD_FORCE_REALTIME_TIME_CRITICAL = "SDL_THREAD_FORCE_REALTIME_TIME_CRITICAL";

/**
 * @from SDL_hints:3174
 */
export const SDL_HINT_THREAD_PRIORITY_POLICY = "SDL_THREAD_PRIORITY_POLICY";

/**
 * @from SDL_hints:3194
 */
export const SDL_HINT_TIMER_RESOLUTION = "SDL_TIMER_RESOLUTION";

/**
 * @from SDL_hints:3209
 */
export const SDL_HINT_TOUCH_MOUSE_EVENTS = "SDL_TOUCH_MOUSE_EVENTS";

/**
 * @from SDL_hints:3230
 */
export const SDL_HINT_TRACKPAD_IS_TOUCH_ONLY = "SDL_TRACKPAD_IS_TOUCH_ONLY";

/**
 * @from SDL_hints:3245
 */
export const SDL_HINT_TV_REMOTE_AS_JOYSTICK = "SDL_TV_REMOTE_AS_JOYSTICK";

/**
 * @from SDL_hints:3259
 */
export const SDL_HINT_VIDEO_ALLOW_SCREENSAVER = "SDL_VIDEO_ALLOW_SCREENSAVER";

/**
 * @from SDL_hints:3284
 */
export const SDL_HINT_VIDEO_DISPLAY_PRIORITY = "SDL_VIDEO_DISPLAY_PRIORITY";

/**
 * @from SDL_hints:3307
 */
export const SDL_HINT_VIDEO_DOUBLE_BUFFER = "SDL_VIDEO_DOUBLE_BUFFER";

/**
 * @from SDL_hints:3325
 */
export const SDL_HINT_VIDEO_DRIVER = "SDL_VIDEO_DRIVER";

/**
 * @from SDL_hints:3338
 */
export const SDL_HINT_VIDEO_DUMMY_SAVE_FRAMES = "SDL_VIDEO_DUMMY_SAVE_FRAMES";

/**
 * @from SDL_hints:3352
 */
export const SDL_HINT_VIDEO_EGL_ALLOW_GETDISPLAY_FALLBACK = "SDL_VIDEO_EGL_ALLOW_GETDISPLAY_FALLBACK";

/**
 * @from SDL_hints:3368
 */
export const SDL_HINT_VIDEO_FORCE_EGL = "SDL_VIDEO_FORCE_EGL";

/**
 * @from SDL_hints:3386
 */
export const SDL_HINT_VIDEO_MAC_FULLSCREEN_SPACES = "SDL_VIDEO_MAC_FULLSCREEN_SPACES";

/**
 * @from SDL_hints:3407
 */
export const SDL_HINT_VIDEO_MAC_FULLSCREEN_MENU_VISIBILITY = "SDL_VIDEO_MAC_FULLSCREEN_MENU_VISIBILITY";

/**
 * @from SDL_hints:3423
 */
export const SDL_HINT_VIDEO_MINIMIZE_ON_FOCUS_LOSS = "SDL_VIDEO_MINIMIZE_ON_FOCUS_LOSS";

/**
 * @from SDL_hints:3440
 */
export const SDL_HINT_VIDEO_OFFSCREEN_SAVE_FRAMES = "SDL_VIDEO_OFFSCREEN_SAVE_FRAMES";

/**
 * @from SDL_hints:3466
 */
export const SDL_HINT_VIDEO_SYNC_WINDOW_OPERATIONS = "SDL_VIDEO_SYNC_WINDOW_OPERATIONS";

/**
 * @from SDL_hints:3484
 */
export const SDL_HINT_VIDEO_WAYLAND_ALLOW_LIBDECOR = "SDL_VIDEO_WAYLAND_ALLOW_LIBDECOR";

/**
 * @from SDL_hints:3504
 */
export const SDL_HINT_VIDEO_WAYLAND_MODE_EMULATION = "SDL_VIDEO_WAYLAND_MODE_EMULATION";

/**
 * @from SDL_hints:3526
 */
export const SDL_HINT_VIDEO_WAYLAND_MODE_SCALING = "SDL_VIDEO_WAYLAND_MODE_SCALING";

/**
 * @from SDL_hints:3546
 */
export const SDL_HINT_VIDEO_WAYLAND_PREFER_LIBDECOR = "SDL_VIDEO_WAYLAND_PREFER_LIBDECOR";

/**
 * @from SDL_hints:3585
 */
export const SDL_HINT_VIDEO_WAYLAND_SCALE_TO_DISPLAY = "SDL_VIDEO_WAYLAND_SCALE_TO_DISPLAY";

/**
 * @from SDL_hints:3607
 */
export const SDL_HINT_VIDEO_WIN_D3DCOMPILER = "SDL_VIDEO_WIN_D3DCOMPILER";

/**
 * @from SDL_hints:3623
 */
export const SDL_HINT_VIDEO_X11_EXTERNAL_WINDOW_INPUT = "SDL_VIDEO_X11_EXTERNAL_WINDOW_INPUT";

/**
 * @from SDL_hints:3638
 */
export const SDL_HINT_VIDEO_X11_NET_WM_BYPASS_COMPOSITOR = "SDL_VIDEO_X11_NET_WM_BYPASS_COMPOSITOR";

/**
 * @from SDL_hints:3657
 */
export const SDL_HINT_VIDEO_X11_NET_WM_PING = "SDL_VIDEO_X11_NET_WM_PING";

/**
 * @from SDL_hints:3671
 */
export const SDL_HINT_VIDEO_X11_NODIRECTCOLOR = "SDL_VIDEO_X11_NODIRECTCOLOR";

/**
 * @from SDL_hints:3682
 */
export const SDL_HINT_VIDEO_X11_SCALING_FACTOR = "SDL_VIDEO_X11_SCALING_FACTOR";

/**
 * @from SDL_hints:3691
 */
export const SDL_HINT_VIDEO_X11_VISUALID = "SDL_VIDEO_X11_VISUALID";

/**
 * @from SDL_hints:3700
 */
export const SDL_HINT_VIDEO_X11_WINDOW_VISUALID = "SDL_VIDEO_X11_WINDOW_VISUALID";

/**
 * @from SDL_hints:3714
 */
export const SDL_HINT_VIDEO_X11_XRANDR = "SDL_VIDEO_X11_XRANDR";

/**
 * @from SDL_hints:3729
 */
export const SDL_HINT_VITA_ENABLE_BACK_TOUCH = "SDL_VITA_ENABLE_BACK_TOUCH";

/**
 * @from SDL_hints:3744
 */
export const SDL_HINT_VITA_ENABLE_FRONT_TOUCH = "SDL_VITA_ENABLE_FRONT_TOUCH";

/**
 * @from SDL_hints:3755
 */
export const SDL_HINT_VITA_MODULE_PATH = "SDL_VITA_MODULE_PATH";

/**
 * @from SDL_hints:3768
 */
export const SDL_HINT_VITA_PVR_INIT = "SDL_VITA_PVR_INIT";

/**
 * @from SDL_hints:3783
 */
export const SDL_HINT_VITA_RESOLUTION = "SDL_VITA_RESOLUTION";

/**
 * @from SDL_hints:3798
 */
export const SDL_HINT_VITA_PVR_OPENGL = "SDL_VITA_PVR_OPENGL";

/**
 * @from SDL_hints:3814
 */
export const SDL_HINT_VITA_TOUCH_MOUSE_DEVICE = "SDL_VITA_TOUCH_MOUSE_DEVICE";

/**
 * @from SDL_hints:3825
 */
export const SDL_HINT_VULKAN_DISPLAY = "SDL_VULKAN_DISPLAY";

/**
 * @from SDL_hints:3835
 */
export const SDL_HINT_VULKAN_LIBRARY = "SDL_VULKAN_LIBRARY";

/**
 * @from SDL_hints:3867
 */
export const SDL_HINT_WAVE_FACT_CHUNK = "SDL_WAVE_FACT_CHUNK";

/**
 * @from SDL_hints:3879
 */
export const SDL_HINT_WAVE_CHUNK_LIMIT = "SDL_WAVE_CHUNK_LIMIT";

/**
 * @from SDL_hints:3907
 */
export const SDL_HINT_WAVE_RIFF_CHUNK_SIZE = "SDL_WAVE_RIFF_CHUNK_SIZE";

/**
 * @from SDL_hints:3927
 */
export const SDL_HINT_WAVE_TRUNCATION = "SDL_WAVE_TRUNCATION";

/**
 * @from SDL_hints:3944
 */
export const SDL_HINT_WINDOW_ACTIVATE_WHEN_RAISED = "SDL_WINDOW_ACTIVATE_WHEN_RAISED";

/**
 * @from SDL_hints:3961
 */
export const SDL_HINT_WINDOW_ACTIVATE_WHEN_SHOWN = "SDL_WINDOW_ACTIVATE_WHEN_SHOWN";

/**
 * @from SDL_hints:3979
 */
export const SDL_HINT_WINDOW_ALLOW_TOPMOST = "SDL_WINDOW_ALLOW_TOPMOST";

/**
 * @from SDL_hints:3995
 */
export const SDL_HINT_WINDOW_FRAME_USABLE_WHILE_CURSOR_HIDDEN = "SDL_WINDOW_FRAME_USABLE_WHILE_CURSOR_HIDDEN";

/**
 * @from SDL_hints:4011
 */
export const SDL_HINT_WINDOWS_CLOSE_ON_ALT_F4 = "SDL_WINDOWS_CLOSE_ON_ALT_F4";

/**
 * @from SDL_hints:4040
 */
export const SDL_HINT_WINDOWS_ENABLE_MENU_MNEMONICS = "SDL_WINDOWS_ENABLE_MENU_MNEMONICS";

/**
 * @from SDL_hints:4055
 */
export const SDL_HINT_WINDOWS_ENABLE_MESSAGELOOP = "SDL_WINDOWS_ENABLE_MESSAGELOOP";

/**
 * @from SDL_hints:4071
 */
export const SDL_HINT_WINDOWS_GAMEINPUT = "SDL_WINDOWS_GAMEINPUT";

/**
 * @from SDL_hints:4085
 */
export const SDL_HINT_WINDOWS_RAW_KEYBOARD = "SDL_WINDOWS_RAW_KEYBOARD";

/**
 * @from SDL_hints:4106
 */
export const SDL_HINT_WINDOWS_FORCE_SEMAPHORE_KERNEL = "SDL_WINDOWS_FORCE_SEMAPHORE_KERNEL";

/**
 * @from SDL_hints:4116
 */
export const SDL_HINT_WINDOWS_INTRESOURCE_ICON = "SDL_WINDOWS_INTRESOURCE_ICON";

/**
 * @from SDL_hints:4126
 */
export const SDL_HINT_WINDOWS_INTRESOURCE_ICON_SMALL = "SDL_WINDOWS_INTRESOURCE_ICON_SMALL";

/**
 * @from SDL_hints:4152
 */
export const SDL_HINT_WINDOWS_USE_D3D9EX = "SDL_WINDOWS_USE_D3D9EX";

/**
 * @from SDL_hints:4169
 */
export const SDL_HINT_WINDOWS_ERASE_BACKGROUND_MODE = "SDL_WINDOWS_ERASE_BACKGROUND_MODE";

/**
 * @from SDL_hints:4190
 */
export const SDL_HINT_X11_FORCE_OVERRIDE_REDIRECT = "SDL_X11_FORCE_OVERRIDE_REDIRECT";

/**
 * @from SDL_hints:4207
 */
export const SDL_HINT_X11_WINDOW_TYPE = "SDL_X11_WINDOW_TYPE";

/**
 * @from SDL_hints:4218
 */
export const SDL_HINT_X11_XCB_LIBRARY = "SDL_X11_XCB_LIBRARY";

/**
 * @from SDL_hints:4233
 */
export const SDL_HINT_XINPUT_ENABLED = "SDL_XINPUT_ENABLED";

/**
 * @from SDL_hints:4257
 */
export const SDL_HINT_ASSERT = "SDL_ASSERT";

/**
 * @from SDL_hints:4272
 */
export const SDL_HINT_PEN_MOUSE_EVENTS = "SDL_PEN_MOUSE_EVENTS";

/**
 * @from SDL_hints:4287
 */
export const SDL_HINT_PEN_TOUCH_EVENTS = "SDL_PEN_TOUCH_EVENTS";

