/**
 * # CategoryProcess
 *
 * Process control support.
 *
 * These functions provide a cross-platform way to spawn and manage OS-level
 * processes.
 *
 * You can create a new subprocess with SDL_CreateProcess() and optionally
 * read and write to it using SDL_ReadProcess() or SDL_GetProcessInput() and
 * SDL_GetProcessOutput(). If more advanced functionality like chaining input
 * between processes is necessary, you can use
 * SDL_CreateProcessWithProperties().
 *
 * You can get the status of a created process with SDL_WaitProcess(), or
 * terminate the process with SDL_KillProcess().
 *
 * Don't forget to call SDL_DestroyProcess() to clean up, whether the process
 * process was killed, terminated on its own, or is still running!
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

import * as SDL_process_enums from "../enums/SDL_process.ts";
import { lib } from "./lib.ts";

/**
 * @from SDL_process:219 SDL_PROP_PROCESS_CREATE_
 */
export const PROP_PROCESS_CREATE = SDL_process_enums.PROP_PROCESS_CREATE;

/**
 * @from SDL_process:261 SDL_PROP_PROCESS_
 */
export const PROP_PROCESS = SDL_process_enums.PROP_PROCESS;

/**
 * Description of where standard I/O should be directed when creating a
 * process.
 *
 * If a standard I/O stream is set to SDL_PROCESS_STDIO_INHERITED, it will go
 * to the same place as the application's I/O stream. This is the default for
 * standard output and standard error.
 *
 * If a standard I/O stream is set to SDL_PROCESS_STDIO_NULL, it is connected
 * to `NUL:` on Windows and `/dev/null` on POSIX systems. This is the default
 * for standard input.
 *
 * If a standard I/O stream is set to SDL_PROCESS_STDIO_APP, it is connected
 * to a new SDL_IOStream that is available to the application. Standard input
 * will be available as `SDL_PROP_PROCESS_STDIN_POINTER` and allows
 * SDL_GetProcessInput(), standard output will be available as
 * `SDL_PROP_PROCESS_STDOUT_POINTER` and allows SDL_ReadProcess() and
 * SDL_GetProcessOutput(), and standard error will be available as
 * `SDL_PROP_PROCESS_STDERR_POINTER` in the properties for the created
 * process.
 *
 * If a standard I/O stream is set to SDL_PROCESS_STDIO_REDIRECT, it is
 * connected to an existing SDL_IOStream provided by the application. Standard
 * input is provided using `SDL_PROP_PROCESS_CREATE_STDIN_POINTER`, standard
 * output is provided using `SDL_PROP_PROCESS_CREATE_STDOUT_POINTER`, and
 * standard error is provided using `SDL_PROP_PROCESS_CREATE_STDERR_POINTER`
 * in the creation properties. These existing streams should be closed by the
 * application once the new process is created.
 *
 * In order to use an SDL_IOStream with SDL_PROCESS_STDIO_REDIRECT, it must
 * have `SDL_PROP_IOSTREAM_WINDOWS_HANDLE_POINTER` or
 * `SDL_PROP_IOSTREAM_FILE_DESCRIPTOR_NUMBER` set. This is true for streams
 * representing files and process I/O.
 *
 * @since This enum is available since SDL 3.2.0.
 *
 * @sa SDL_CreateProcessWithProperties
 * @sa SDL_GetProcessProperties
 * @sa SDL_ReadProcess
 * @sa SDL_GetProcessInput
 * @sa SDL_GetProcessOutput
 *
 * @from SDL_process.h:149 SDL_PROCESS_STDIO_
 */
export const PROCESS_STDIO = SDL_process_enums.SDL_ProcessIO;



/**
 * Create a new process.
 *
 * The path to the executable is supplied in args[0]. args[1..N] are
 * additional arguments passed on the command line of the new process, and the
 * argument list should be terminated with a NULL, e.g.:
 *
 * ```c
 * const char *args[] = { "myprogram", "argument", NULL };
 * ```
 *
 * Setting pipe_stdio to true is equivalent to setting
 * `SDL_PROP_PROCESS_CREATE_STDIN_NUMBER` and
 * `SDL_PROP_PROCESS_CREATE_STDOUT_NUMBER` to `SDL_PROCESS_STDIO_APP`, and
 * will allow the use of SDL_ReadProcess() or SDL_GetProcessInput() and
 * SDL_GetProcessOutput().
 *
 * See SDL_CreateProcessWithProperties() for more details.
 *
 * @param args the path and arguments for the new process.
 * @param pipe_stdio true to create pipes to the process's standard input and
 *                   from the process's standard output, false for the process
 *                   to have no input and inherit the application's standard
 *                   output.
 * @returns the newly created and running process, or NULL if the process
 *          couldn't be created.
 *
 * @threadsafety It is safe to call this function from any thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_CreateProcessWithProperties
 * @sa SDL_GetProcessProperties
 * @sa SDL_ReadProcess
 * @sa SDL_GetProcessInput
 * @sa SDL_GetProcessOutput
 * @sa SDL_KillProcess
 * @sa SDL_WaitProcess
 * @sa SDL_DestroyProcess
 *
 * @from SDL_process.h:105 SDL_Process * SDL_CreateProcess(const char * const *args, bool pipe_stdio);
 */
export const createProcess = lib.symbols.SDL_CreateProcess;

/**
 * Create a new process with the specified properties.
 *
 * These are the supported properties:
 *
 * - `SDL_PROP_PROCESS_CREATE_ARGS_POINTER`: an array of strings containing
 *   the program to run, any arguments, and a NULL pointer, e.g. const char
 *   *args[] = { "myprogram", "argument", NULL }. This is a required property.
 * - `SDL_PROP_PROCESS_CREATE_ENVIRONMENT_POINTER`: an SDL_Environment
 *   pointer. If this property is set, it will be the entire environment for
 *   the process, otherwise the current environment is used.
 * - `SDL_PROP_PROCESS_CREATE_STDIN_NUMBER`: an SDL_ProcessIO value describing
 *   where standard input for the process comes from, defaults to
 *   `SDL_PROCESS_STDIO_NULL`.
 * - `SDL_PROP_PROCESS_CREATE_STDIN_POINTER`: an SDL_IOStream pointer used for
 *   standard input when `SDL_PROP_PROCESS_CREATE_STDIN_NUMBER` is set to
 *   `SDL_PROCESS_STDIO_REDIRECT`.
 * - `SDL_PROP_PROCESS_CREATE_STDOUT_NUMBER`: an SDL_ProcessIO value
 *   describing where standard output for the process goes to, defaults to
 *   `SDL_PROCESS_STDIO_INHERITED`.
 * - `SDL_PROP_PROCESS_CREATE_STDOUT_POINTER`: an SDL_IOStream pointer used
 *   for standard output when `SDL_PROP_PROCESS_CREATE_STDOUT_NUMBER` is set
 *   to `SDL_PROCESS_STDIO_REDIRECT`.
 * - `SDL_PROP_PROCESS_CREATE_STDERR_NUMBER`: an SDL_ProcessIO value
 *   describing where standard error for the process goes to, defaults to
 *   `SDL_PROCESS_STDIO_INHERITED`.
 * - `SDL_PROP_PROCESS_CREATE_STDERR_POINTER`: an SDL_IOStream pointer used
 *   for standard error when `SDL_PROP_PROCESS_CREATE_STDERR_NUMBER` is set to
 *   `SDL_PROCESS_STDIO_REDIRECT`.
 * - `SDL_PROP_PROCESS_CREATE_STDERR_TO_STDOUT_BOOLEAN`: true if the error
 *   output of the process should be redirected into the standard output of
 *   the process. This property has no effect if
 *   `SDL_PROP_PROCESS_CREATE_STDERR_NUMBER` is set.
 * - `SDL_PROP_PROCESS_CREATE_BACKGROUND_BOOLEAN`: true if the process should
 *   run in the background. In this case the default input and output is
 *   `SDL_PROCESS_STDIO_NULL` and the exitcode of the process is not
 *   available, and will always be 0.
 *
 * On POSIX platforms, wait() and waitpid(-1, ...) should not be called, and
 * SIGCHLD should not be ignored or handled because those would prevent SDL
 * from properly tracking the lifetime of the underlying process. You should
 * use SDL_WaitProcess() instead.
 *
 * @param props the properties to use.
 * @returns the newly created and running process, or NULL if the process
 *          couldn't be created.
 *
 * @threadsafety It is safe to call this function from any thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_CreateProcess
 * @sa SDL_GetProcessProperties
 * @sa SDL_ReadProcess
 * @sa SDL_GetProcessInput
 * @sa SDL_GetProcessOutput
 * @sa SDL_KillProcess
 * @sa SDL_WaitProcess
 * @sa SDL_DestroyProcess
 *
 * @from SDL_process.h:217 SDL_Process * SDL_CreateProcessWithProperties(SDL_PropertiesID props);
 */
export const createProcessWithProperties = lib.symbols.SDL_CreateProcessWithProperties;

/**
 * Get the properties associated with a process.
 *
 * The following read-only properties are provided by SDL:
 *
 * - `SDL_PROP_PROCESS_PID_NUMBER`: the process ID of the process.
 * - `SDL_PROP_PROCESS_STDIN_POINTER`: an SDL_IOStream that can be used to
 *   write input to the process, if it was created with
 *   `SDL_PROP_PROCESS_CREATE_STDIN_NUMBER` set to `SDL_PROCESS_STDIO_APP`.
 * - `SDL_PROP_PROCESS_STDOUT_POINTER`: a non-blocking SDL_IOStream that can
 *   be used to read output from the process, if it was created with
 *   `SDL_PROP_PROCESS_CREATE_STDOUT_NUMBER` set to `SDL_PROCESS_STDIO_APP`.
 * - `SDL_PROP_PROCESS_STDERR_POINTER`: a non-blocking SDL_IOStream that can
 *   be used to read error output from the process, if it was created with
 *   `SDL_PROP_PROCESS_CREATE_STDERR_NUMBER` set to `SDL_PROCESS_STDIO_APP`.
 * - `SDL_PROP_PROCESS_BACKGROUND_BOOLEAN`: true if the process is running in
 *   the background.
 *
 * @param process the process to query.
 * @returns a valid property ID on success or 0 on failure; call
 *          SDL_GetError() for more information.
 *
 * @threadsafety It is safe to call this function from any thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_CreateProcess
 * @sa SDL_CreateProcessWithProperties
 *
 * @from SDL_process.h:259 SDL_PropertiesID SDL_GetProcessProperties(SDL_Process *process);
 */
export const getProcessProperties = lib.symbols.SDL_GetProcessProperties;

/**
 * Read all the output from a process.
 *
 * If a process was created with I/O enabled, you can use this function to
 * read the output. This function blocks until the process is complete,
 * capturing all output, and providing the process exit code.
 *
 * The data is allocated with a zero byte at the end (null terminated) for
 * convenience. This extra byte is not included in the value reported via
 * `datasize`.
 *
 * The data should be freed with SDL_free().
 *
 * @param process The process to read.
 * @param datasize a pointer filled in with the number of bytes read, may be
 *                 NULL.
 * @param exitcode a pointer filled in with the process exit code if the
 *                 process has exited, may be NULL.
 * @returns the data or NULL on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function is not thread safe.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_CreateProcess
 * @sa SDL_CreateProcessWithProperties
 * @sa SDL_DestroyProcess
 *
 * @from SDL_process.h:296 void * SDL_ReadProcess(SDL_Process *process, size_t *datasize, int *exitcode);
 */
export const readProcess = lib.symbols.SDL_ReadProcess;

/**
 * Get the SDL_IOStream associated with process standard input.
 *
 * The process must have been created with SDL_CreateProcess() and pipe_stdio
 * set to true, or with SDL_CreateProcessWithProperties() and
 * `SDL_PROP_PROCESS_CREATE_STDIN_NUMBER` set to `SDL_PROCESS_STDIO_APP`.
 *
 * Writing to this stream can return less data than expected if the process
 * hasn't read its input. It may be blocked waiting for its output to be read,
 * if so you may need to call SDL_GetProcessOutput() and read the output in
 * parallel with writing input.
 *
 * @param process The process to get the input stream for.
 * @returns the input stream or NULL on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety It is safe to call this function from any thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_CreateProcess
 * @sa SDL_CreateProcessWithProperties
 * @sa SDL_GetProcessOutput
 *
 * @from SDL_process.h:322 SDL_IOStream * SDL_GetProcessInput(SDL_Process *process);
 */
export const getProcessInput = lib.symbols.SDL_GetProcessInput;

/**
 * Get the SDL_IOStream associated with process standard output.
 *
 * The process must have been created with SDL_CreateProcess() and pipe_stdio
 * set to true, or with SDL_CreateProcessWithProperties() and
 * `SDL_PROP_PROCESS_CREATE_STDOUT_NUMBER` set to `SDL_PROCESS_STDIO_APP`.
 *
 * Reading from this stream can return 0 with SDL_GetIOStatus() returning
 * SDL_IO_STATUS_NOT_READY if no output is available yet.
 *
 * @param process The process to get the output stream for.
 * @returns the output stream or NULL on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety It is safe to call this function from any thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_CreateProcess
 * @sa SDL_CreateProcessWithProperties
 * @sa SDL_GetProcessInput
 *
 * @from SDL_process.h:346 SDL_IOStream * SDL_GetProcessOutput(SDL_Process *process);
 */
export const getProcessOutput = lib.symbols.SDL_GetProcessOutput;

/**
 * Stop a process.
 *
 * @param process The process to stop.
 * @param force true to terminate the process immediately, false to try to
 *              stop the process gracefully. In general you should try to stop
 *              the process gracefully first as terminating a process may
 *              leave it with half-written data or in some other unstable
 *              state.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function is not thread safe.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_CreateProcess
 * @sa SDL_CreateProcessWithProperties
 * @sa SDL_WaitProcess
 * @sa SDL_DestroyProcess
 *
 * @from SDL_process.h:369 bool SDL_KillProcess(SDL_Process *process, bool force);
 */
export const killProcess = lib.symbols.SDL_KillProcess;

/**
 * Wait for a process to finish.
 *
 * This can be called multiple times to get the status of a process.
 *
 * The exit code will be the exit code of the process if it terminates
 * normally, a negative signal if it terminated due to a signal, or -255
 * otherwise. It will not be changed if the process is still running.
 *
 * If you create a process with standard output piped to the application
 * (`pipe_stdio` being true) then you should read all of the process output
 * before calling SDL_WaitProcess(). If you don't do this the process might be
 * blocked indefinitely waiting for output to be read and SDL_WaitProcess()
 * will never return true;
 *
 * @param process The process to wait for.
 * @param block If true, block until the process finishes; otherwise, report
 *              on the process' status.
 * @param exitcode a pointer filled in with the process exit code if the
 *                 process has exited, may be NULL.
 * @returns true if the process exited, false otherwise.
 *
 * @threadsafety This function is not thread safe.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_CreateProcess
 * @sa SDL_CreateProcessWithProperties
 * @sa SDL_KillProcess
 * @sa SDL_DestroyProcess
 *
 * @from SDL_process.h:402 bool SDL_WaitProcess(SDL_Process *process, bool block, int *exitcode);
 */
export const waitProcess = lib.symbols.SDL_WaitProcess;

/**
 * Destroy a previously created process object.
 *
 * Note that this does not stop the process, just destroys the SDL object used
 * to track it. If you want to stop the process you should use
 * SDL_KillProcess().
 *
 * @param process The process object to destroy.
 *
 * @threadsafety This function is not thread safe.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_CreateProcess
 * @sa SDL_CreateProcessWithProperties
 * @sa SDL_KillProcess
 *
 * @from SDL_process.h:421 void SDL_DestroyProcess(SDL_Process *process);
 */
export const destroyProcess = lib.symbols.SDL_DestroyProcess;

