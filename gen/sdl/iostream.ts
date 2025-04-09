/**
 * # CategoryIOStream
 *
 * SDL provides an abstract interface for reading and writing data streams. It
 * offers implementations for files, memory, etc, and the app can provide
 * their own implementations, too.
 *
 * SDL_IOStream is not related to the standard C++ iostream class, other than
 * both are abstract interfaces to read/write data.
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

import * as SDL_iostream_enums from "../enums/SDL_iostream.ts";
import { lib } from "./lib.ts";

/**
 * @from SDL_iostream:275 SDL_PROP_IOSTREAM_
 */
export const PROP_IOSTREAM = SDL_iostream_enums.PROP_IOSTREAM;

/**
 * @from SDL_iostream:321 SDL_PROP_IOSTREAM_MEMORY_
 */
export const PROP_IOSTREAM_MEMORY = SDL_iostream_enums.PROP_IOSTREAM_MEMORY;

/**
 * @from SDL_iostream:395 SDL_PROP_IOSTREAM_DYNAMIC_
 */
export const PROP_IOSTREAM_DYNAMIC = SDL_iostream_enums.PROP_IOSTREAM_DYNAMIC;

/**
 * SDL_IOStream status, set by a read or write operation.
 *
 * @since This enum is available since SDL 3.2.0.
 *
 * @from SDL_iostream.h:52 SDL_IO_STATUS_
 */
export const IO_STATUS = SDL_iostream_enums.SDL_IOStatus;

/**
 * Possible `whence` values for SDL_IOStream seeking.
 *
 * These map to the same "whence" concept that `fseek` or `lseek` use in the
 * standard C runtime.
 *
 * @since This enum is available since SDL 3.2.0.
 *
 * @from SDL_iostream.h:70 SDL_IO_SEEK_
 */
export const IO_SEEK = SDL_iostream_enums.SDL_IOWhence;



/**
 * Use this function to create a new SDL_IOStream structure for reading from
 * and/or writing to a named file.
 *
 * The `mode` string is treated roughly the same as in a call to the C
 * library's fopen(), even if SDL doesn't happen to use fopen() behind the
 * scenes.
 *
 * Available `mode` strings:
 *
 * - "r": Open a file for reading. The file must exist.
 * - "w": Create an empty file for writing. If a file with the same name
 *   already exists its content is erased and the file is treated as a new
 *   empty file.
 * - "a": Append to a file. Writing operations append data at the end of the
 *   file. The file is created if it does not exist.
 * - "r+": Open a file for update both reading and writing. The file must
 *   exist.
 * - "w+": Create an empty file for both reading and writing. If a file with
 *   the same name already exists its content is erased and the file is
 *   treated as a new empty file.
 * - "a+": Open a file for reading and appending. All writing operations are
 *   performed at the end of the file, protecting the previous content to be
 *   overwritten. You can reposition (fseek, rewind) the internal pointer to
 *   anywhere in the file for reading, but writing operations will move it
 *   back to the end of file. The file is created if it does not exist.
 *
 * **NOTE**: In order to open a file as a binary file, a "b" character has to
 * be included in the `mode` string. This additional "b" character can either
 * be appended at the end of the string (thus making the following compound
 * modes: "rb", "wb", "ab", "r+b", "w+b", "a+b") or be inserted between the
 * letter and the "+" sign for the mixed modes ("rb+", "wb+", "ab+").
 * Additional characters may follow the sequence, although they should have no
 * effect. For example, "t" is sometimes appended to make explicit the file is
 * a text file.
 *
 * This function supports Unicode filenames, but they must be encoded in UTF-8
 * format, regardless of the underlying operating system.
 *
 * In Android, SDL_IOFromFile() can be used to open content:// URIs. As a
 * fallback, SDL_IOFromFile() will transparently open a matching filename in
 * the app's `assets`.
 *
 * Closing the SDL_IOStream will close SDL's internal file handle.
 *
 * The following properties may be set at creation time by SDL:
 *
 * - `SDL_PROP_IOSTREAM_WINDOWS_HANDLE_POINTER`: a pointer, that can be cast
 *   to a win32 `HANDLE`, that this SDL_IOStream is using to access the
 *   filesystem. If the program isn't running on Windows, or SDL used some
 *   other method to access the filesystem, this property will not be set.
 * - `SDL_PROP_IOSTREAM_STDIO_FILE_POINTER`: a pointer, that can be cast to a
 *   stdio `FILE *`, that this SDL_IOStream is using to access the filesystem.
 *   If SDL used some other method to access the filesystem, this property
 *   will not be set. PLEASE NOTE that if SDL is using a different C runtime
 *   than your app, trying to use this pointer will almost certainly result in
 *   a crash! This is mostly a problem on Windows; make sure you build SDL and
 *   your app with the same compiler and settings to avoid it.
 * - `SDL_PROP_IOSTREAM_FILE_DESCRIPTOR_NUMBER`: a file descriptor that this
 *   SDL_IOStream is using to access the filesystem.
 * - `SDL_PROP_IOSTREAM_ANDROID_AASSET_POINTER`: a pointer, that can be cast
 *   to an Android NDK `AAsset *`, that this SDL_IOStream is using to access
 *   the filesystem. If SDL used some other method to access the filesystem,
 *   this property will not be set.
 *
 * @param file a UTF-8 string representing the filename to open.
 * @param mode an ASCII string representing the mode to be used for opening
 *             the file.
 * @returns a pointer to the SDL_IOStream structure that is created or NULL on
 *          failure; call SDL_GetError() for more information.
 *
 * @threadsafety This function is not thread safe.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_CloseIO
 * @sa SDL_FlushIO
 * @sa SDL_ReadIO
 * @sa SDL_SeekIO
 * @sa SDL_TellIO
 * @sa SDL_WriteIO
 *
 * @from SDL_iostream.h:273 SDL_IOStream * SDL_IOFromFile(const char *file, const char *mode);
 */
export const ioFromFile = lib.symbols.SDL_IOFromFile;

/**
 * Use this function to prepare a read-write memory buffer for use with
 * SDL_IOStream.
 *
 * This function sets up an SDL_IOStream struct based on a memory area of a
 * certain size, for both read and write access.
 *
 * This memory buffer is not copied by the SDL_IOStream; the pointer you
 * provide must remain valid until you close the stream. Closing the stream
 * will not free the original buffer.
 *
 * If you need to make sure the SDL_IOStream never writes to the memory
 * buffer, you should use SDL_IOFromConstMem() with a read-only buffer of
 * memory instead.
 *
 * The following properties will be set at creation time by SDL:
 *
 * - `SDL_PROP_IOSTREAM_MEMORY_POINTER`: this will be the `mem` parameter that
 *   was passed to this function.
 * - `SDL_PROP_IOSTREAM_MEMORY_SIZE_NUMBER`: this will be the `size` parameter
 *   that was passed to this function.
 *
 * @param mem a pointer to a buffer to feed an SDL_IOStream stream.
 * @param size the buffer size, in bytes.
 * @returns a pointer to a new SDL_IOStream structure or NULL on failure; call
 *          SDL_GetError() for more information.
 *
 * @threadsafety It is safe to call this function from any thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_IOFromConstMem
 * @sa SDL_CloseIO
 * @sa SDL_FlushIO
 * @sa SDL_ReadIO
 * @sa SDL_SeekIO
 * @sa SDL_TellIO
 * @sa SDL_WriteIO
 *
 * @from SDL_iostream.h:319 SDL_IOStream * SDL_IOFromMem(void *mem, size_t size);
 */
export const ioFromMem = lib.symbols.SDL_IOFromMem;

/**
 * Use this function to prepare a read-only memory buffer for use with
 * SDL_IOStream.
 *
 * This function sets up an SDL_IOStream struct based on a memory area of a
 * certain size. It assumes the memory area is not writable.
 *
 * Attempting to write to this SDL_IOStream stream will report an error
 * without writing to the memory buffer.
 *
 * This memory buffer is not copied by the SDL_IOStream; the pointer you
 * provide must remain valid until you close the stream. Closing the stream
 * will not free the original buffer.
 *
 * If you need to write to a memory buffer, you should use SDL_IOFromMem()
 * with a writable buffer of memory instead.
 *
 * The following properties will be set at creation time by SDL:
 *
 * - `SDL_PROP_IOSTREAM_MEMORY_POINTER`: this will be the `mem` parameter that
 *   was passed to this function.
 * - `SDL_PROP_IOSTREAM_MEMORY_SIZE_NUMBER`: this will be the `size` parameter
 *   that was passed to this function.
 *
 * @param mem a pointer to a read-only buffer to feed an SDL_IOStream stream.
 * @param size the buffer size, in bytes.
 * @returns a pointer to a new SDL_IOStream structure or NULL on failure; call
 *          SDL_GetError() for more information.
 *
 * @threadsafety It is safe to call this function from any thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_IOFromMem
 * @sa SDL_CloseIO
 * @sa SDL_ReadIO
 * @sa SDL_SeekIO
 * @sa SDL_TellIO
 *
 * @from SDL_iostream.h:363 SDL_IOStream * SDL_IOFromConstMem(const void *mem, size_t size);
 */
export const ioFromConstMem = lib.symbols.SDL_IOFromConstMem;

/**
 * Use this function to create an SDL_IOStream that is backed by dynamically
 * allocated memory.
 *
 * This supports the following properties to provide access to the memory and
 * control over allocations:
 *
 * - `SDL_PROP_IOSTREAM_DYNAMIC_MEMORY_POINTER`: a pointer to the internal
 *   memory of the stream. This can be set to NULL to transfer ownership of
 *   the memory to the application, which should free the memory with
 *   SDL_free(). If this is done, the next operation on the stream must be
 *   SDL_CloseIO().
 * - `SDL_PROP_IOSTREAM_DYNAMIC_CHUNKSIZE_NUMBER`: memory will be allocated in
 *   multiples of this size, defaulting to 1024.
 *
 * @returns a pointer to a new SDL_IOStream structure or NULL on failure; call
 *          SDL_GetError() for more information.
 *
 * @threadsafety It is safe to call this function from any thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_CloseIO
 * @sa SDL_ReadIO
 * @sa SDL_SeekIO
 * @sa SDL_TellIO
 * @sa SDL_WriteIO
 *
 * @from SDL_iostream.h:393 SDL_IOStream * SDL_IOFromDynamicMem(void);
 */
export const ioFromDynamicMem = lib.symbols.SDL_IOFromDynamicMem;

/**
 * Create a custom SDL_IOStream.
 *
 * Applications do not need to use this function unless they are providing
 * their own SDL_IOStream implementation. If you just need an SDL_IOStream to
 * read/write a common data source, you should use the built-in
 * implementations in SDL, like SDL_IOFromFile() or SDL_IOFromMem(), etc.
 *
 * This function makes a copy of `iface` and the caller does not need to keep
 * it around after this call.
 *
 * @param iface the interface that implements this SDL_IOStream, initialized
 *              using SDL_INIT_INTERFACE().
 * @param userdata the pointer that will be passed to the interface functions.
 * @returns a pointer to the allocated memory on success or NULL on failure;
 *          call SDL_GetError() for more information.
 *
 * @threadsafety It is safe to call this function from any thread.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_CloseIO
 * @sa SDL_INIT_INTERFACE
 * @sa SDL_IOFromConstMem
 * @sa SDL_IOFromFile
 * @sa SDL_IOFromMem
 *
 * @from SDL_iostream.h:428 SDL_IOStream * SDL_OpenIO(const SDL_IOStreamInterface *iface, void *userdata);
 */
export const openIo = lib.symbols.SDL_OpenIO;

/**
 * Close and free an allocated SDL_IOStream structure.
 *
 * SDL_CloseIO() closes and cleans up the SDL_IOStream stream. It releases any
 * resources used by the stream and frees the SDL_IOStream itself. This
 * returns true on success, or false if the stream failed to flush to its
 * output (e.g. to disk).
 *
 * Note that if this fails to flush the stream for any reason, this function
 * reports an error, but the SDL_IOStream is still invalid once this function
 * returns.
 *
 * This call flushes any buffered writes to the operating system, but there
 * are no guarantees that those writes have gone to physical media; they might
 * be in the OS's file cache, waiting to go to disk later. If it's absolutely
 * crucial that writes go to disk immediately, so they are definitely stored
 * even if the power fails before the file cache would have caught up, one
 * should call SDL_FlushIO() before closing. Note that flushing takes time and
 * makes the system and your app operate less efficiently, so do so sparingly.
 *
 * @param context SDL_IOStream structure to close.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function is not thread safe.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_OpenIO
 *
 * @from SDL_iostream.h:460 bool SDL_CloseIO(SDL_IOStream *context);
 */
export const closeIo = lib.symbols.SDL_CloseIO;

/**
 * Get the properties associated with an SDL_IOStream.
 *
 * @param context a pointer to an SDL_IOStream structure.
 * @returns a valid property ID on success or 0 on failure; call
 *          SDL_GetError() for more information.
 *
 * @threadsafety This function is not thread safe.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @from SDL_iostream.h:473 SDL_PropertiesID SDL_GetIOProperties(SDL_IOStream *context);
 */
export const getIoProperties = lib.symbols.SDL_GetIOProperties;

/**
 * Query the stream status of an SDL_IOStream.
 *
 * This information can be useful to decide if a short read or write was due
 * to an error, an EOF, or a non-blocking operation that isn't yet ready to
 * complete.
 *
 * An SDL_IOStream's status is only expected to change after a SDL_ReadIO or
 * SDL_WriteIO call; don't expect it to change if you just call this query
 * function in a tight loop.
 *
 * @param context the SDL_IOStream to query.
 * @returns an SDL_IOStatus enum with the current state.
 *
 * @threadsafety This function is not thread safe.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @from SDL_iostream.h:493 SDL_IOStatus SDL_GetIOStatus(SDL_IOStream *context);
 */
export const getIoStatus = lib.symbols.SDL_GetIOStatus;

/**
 * Use this function to get the size of the data stream in an SDL_IOStream.
 *
 * @param context the SDL_IOStream to get the size of the data stream from.
 * @returns the size of the data stream in the SDL_IOStream on success or a
 *          negative error code on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function is not thread safe.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @from SDL_iostream.h:507 Sint64 SDL_GetIOSize(SDL_IOStream *context);
 */
export const getIoSize = lib.symbols.SDL_GetIOSize;

/**
 * Seek within an SDL_IOStream data stream.
 *
 * This function seeks to byte `offset`, relative to `whence`.
 *
 * `whence` may be any of the following values:
 *
 * - `SDL_IO_SEEK_SET`: seek from the beginning of data
 * - `SDL_IO_SEEK_CUR`: seek relative to current read point
 * - `SDL_IO_SEEK_END`: seek relative to the end of data
 *
 * If this stream can not seek, it will return -1.
 *
 * @param context a pointer to an SDL_IOStream structure.
 * @param offset an offset in bytes, relative to `whence` location; can be
 *               negative.
 * @param whence any of `SDL_IO_SEEK_SET`, `SDL_IO_SEEK_CUR`,
 *               `SDL_IO_SEEK_END`.
 * @returns the final offset in the data stream after the seek or -1 on
 *          failure; call SDL_GetError() for more information.
 *
 * @threadsafety This function is not thread safe.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_TellIO
 *
 * @from SDL_iostream.h:536 Sint64 SDL_SeekIO(SDL_IOStream *context, Sint64 offset, SDL_IOWhence whence);
 */
export const seekIo = lib.symbols.SDL_SeekIO;

/**
 * Determine the current read/write offset in an SDL_IOStream data stream.
 *
 * SDL_TellIO is actually a wrapper function that calls the SDL_IOStream's
 * `seek` method, with an offset of 0 bytes from `SDL_IO_SEEK_CUR`, to
 * simplify application development.
 *
 * @param context an SDL_IOStream data stream object from which to get the
 *                current offset.
 * @returns the current offset in the stream, or -1 if the information can not
 *          be determined.
 *
 * @threadsafety This function is not thread safe.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_SeekIO
 *
 * @from SDL_iostream.h:556 Sint64 SDL_TellIO(SDL_IOStream *context);
 */
export const tellIo = lib.symbols.SDL_TellIO;

/**
 * Read from a data source.
 *
 * This function reads up `size` bytes from the data source to the area
 * pointed at by `ptr`. This function may read less bytes than requested.
 *
 * This function will return zero when the data stream is completely read, and
 * SDL_GetIOStatus() will return SDL_IO_STATUS_EOF. If zero is returned and
 * the stream is not at EOF, SDL_GetIOStatus() will return a different error
 * value and SDL_GetError() will offer a human-readable message.
 *
 * @param context a pointer to an SDL_IOStream structure.
 * @param ptr a pointer to a buffer to read data into.
 * @param size the number of bytes to read from the data source.
 * @returns the number of bytes read, or 0 on end of file or other failure;
 *          call SDL_GetError() for more information.
 *
 * @threadsafety This function is not thread safe.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_WriteIO
 * @sa SDL_GetIOStatus
 *
 * @from SDL_iostream.h:582 size_t SDL_ReadIO(SDL_IOStream *context, void *ptr, size_t size);
 */
export const readIo = lib.symbols.SDL_ReadIO;

/**
 * Write to an SDL_IOStream data stream.
 *
 * This function writes exactly `size` bytes from the area pointed at by `ptr`
 * to the stream. If this fails for any reason, it'll return less than `size`
 * to demonstrate how far the write progressed. On success, it returns `size`.
 *
 * On error, this function still attempts to write as much as possible, so it
 * might return a positive value less than the requested write size.
 *
 * The caller can use SDL_GetIOStatus() to determine if the problem is
 * recoverable, such as a non-blocking write that can simply be retried later,
 * or a fatal error.
 *
 * @param context a pointer to an SDL_IOStream structure.
 * @param ptr a pointer to a buffer containing data to write.
 * @param size the number of bytes to write.
 * @returns the number of bytes written, which will be less than `size` on
 *          failure; call SDL_GetError() for more information.
 *
 * @threadsafety This function is not thread safe.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_IOprintf
 * @sa SDL_ReadIO
 * @sa SDL_SeekIO
 * @sa SDL_FlushIO
 * @sa SDL_GetIOStatus
 *
 * @from SDL_iostream.h:614 size_t SDL_WriteIO(SDL_IOStream *context, const void *ptr, size_t size);
 */
export const writeIo = lib.symbols.SDL_WriteIO;

/**
 * Flush any buffered data in the stream.
 *
 * This function makes sure that any buffered data is written to the stream.
 * Normally this isn't necessary but if the stream is a pipe or socket it
 * guarantees that any pending data is sent.
 *
 * @param context SDL_IOStream structure to flush.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function is not thread safe.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_OpenIO
 * @sa SDL_WriteIO
 *
 * @from SDL_iostream.h:675 bool SDL_FlushIO(SDL_IOStream *context);
 */
export const flushIo = lib.symbols.SDL_FlushIO;

/**
 * Load all the data from an SDL data stream.
 *
 * The data is allocated with a zero byte at the end (null terminated) for
 * convenience. This extra byte is not included in the value reported via
 * `datasize`.
 *
 * The data should be freed with SDL_free().
 *
 * @param src the SDL_IOStream to read all available data from.
 * @param datasize a pointer filled in with the number of bytes read, may be
 *                 NULL.
 * @param closeio if true, calls SDL_CloseIO() on `src` before returning, even
 *                in the case of an error.
 * @returns the data or NULL on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function is not thread safe.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_LoadFile
 * @sa SDL_SaveFile_IO
 *
 * @from SDL_iostream.h:701 void * SDL_LoadFile_IO(SDL_IOStream *src, size_t *datasize, bool closeio);
 */
export const loadFileIo = lib.symbols.SDL_LoadFile_IO;

/**
 * Load all the data from a file path.
 *
 * The data is allocated with a zero byte at the end (null terminated) for
 * convenience. This extra byte is not included in the value reported via
 * `datasize`.
 *
 * The data should be freed with SDL_free().
 *
 * @param file the path to read all available data from.
 * @param datasize if not NULL, will store the number of bytes read.
 * @returns the data or NULL on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function is not thread safe.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_LoadFile_IO
 * @sa SDL_SaveFile
 *
 * @from SDL_iostream.h:724 void * SDL_LoadFile(const char *file, size_t *datasize);
 */
export const loadFile = lib.symbols.SDL_LoadFile;

/**
 * Save all the data into an SDL data stream.
 *
 * @param src the SDL_IOStream to write all data to.
 * @param data the data to be written. If datasize is 0, may be NULL or a
 *             invalid pointer.
 * @param datasize the number of bytes to be written.
 * @param closeio if true, calls SDL_CloseIO() on `src` before returning, even
 *                in the case of an error.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function is not thread safe.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_SaveFile
 * @sa SDL_LoadFile_IO
 *
 * @from SDL_iostream.h:745 bool SDL_SaveFile_IO(SDL_IOStream *src, const void *data, size_t datasize, bool closeio);
 */
export const saveFileIo = lib.symbols.SDL_SaveFile_IO;

/**
 * Save all the data into a file path.
 *
 * @param file the path to write all available data into.
 * @param data the data to be written. If datasize is 0, may be NULL or a
 *             invalid pointer.
 * @param datasize the number of bytes to be written.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function is not thread safe.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @sa SDL_SaveFile_IO
 * @sa SDL_LoadFile
 *
 * @from SDL_iostream.h:764 bool SDL_SaveFile(const char *file, const void *data, size_t datasize);
 */
export const saveFile = lib.symbols.SDL_SaveFile;

/**
 * Use this function to read a byte from an SDL_IOStream.
 *
 * This function will return false when the data stream is completely read,
 * and SDL_GetIOStatus() will return SDL_IO_STATUS_EOF. If false is returned
 * and the stream is not at EOF, SDL_GetIOStatus() will return a different
 * error value and SDL_GetError() will offer a human-readable message.
 *
 * @param src the SDL_IOStream to read from.
 * @param value a pointer filled in with the data read.
 * @returns true on success or false on failure or EOF; call SDL_GetError()
 *          for more information.
 *
 * @threadsafety This function is not thread safe.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @from SDL_iostream.h:790 bool SDL_ReadU8(SDL_IOStream *src, Uint8 *value);
 */
export const readU8 = lib.symbols.SDL_ReadU8;

/**
 * Use this function to read a signed byte from an SDL_IOStream.
 *
 * This function will return false when the data stream is completely read,
 * and SDL_GetIOStatus() will return SDL_IO_STATUS_EOF. If false is returned
 * and the stream is not at EOF, SDL_GetIOStatus() will return a different
 * error value and SDL_GetError() will offer a human-readable message.
 *
 * @param src the SDL_IOStream to read from.
 * @param value a pointer filled in with the data read.
 * @returns true on success or false on failure; call SDL_GetError() for more
 *          information.
 *
 * @threadsafety This function is not thread safe.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @from SDL_iostream.h:809 bool SDL_ReadS8(SDL_IOStream *src, Sint8 *value);
 */
export const readS8 = lib.symbols.SDL_ReadS8;

/**
 * Use this function to read 16 bits of little-endian data from an
 * SDL_IOStream and return in native format.
 *
 * SDL byteswaps the data only if necessary, so the data returned will be in
 * the native byte order.
 *
 * This function will return false when the data stream is completely read,
 * and SDL_GetIOStatus() will return SDL_IO_STATUS_EOF. If false is returned
 * and the stream is not at EOF, SDL_GetIOStatus() will return a different
 * error value and SDL_GetError() will offer a human-readable message.
 *
 * @param src the stream from which to read data.
 * @param value a pointer filled in with the data read.
 * @returns true on successful write or false on failure; call SDL_GetError()
 *          for more information.
 *
 * @threadsafety This function is not thread safe.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @from SDL_iostream.h:832 bool SDL_ReadU16LE(SDL_IOStream *src, Uint16 *value);
 */
export const readU16Le = lib.symbols.SDL_ReadU16LE;

/**
 * Use this function to read 16 bits of little-endian data from an
 * SDL_IOStream and return in native format.
 *
 * SDL byteswaps the data only if necessary, so the data returned will be in
 * the native byte order.
 *
 * This function will return false when the data stream is completely read,
 * and SDL_GetIOStatus() will return SDL_IO_STATUS_EOF. If false is returned
 * and the stream is not at EOF, SDL_GetIOStatus() will return a different
 * error value and SDL_GetError() will offer a human-readable message.
 *
 * @param src the stream from which to read data.
 * @param value a pointer filled in with the data read.
 * @returns true on successful write or false on failure; call SDL_GetError()
 *          for more information.
 *
 * @threadsafety This function is not thread safe.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @from SDL_iostream.h:855 bool SDL_ReadS16LE(SDL_IOStream *src, Sint16 *value);
 */
export const readS16Le = lib.symbols.SDL_ReadS16LE;

/**
 * Use this function to read 16 bits of big-endian data from an SDL_IOStream
 * and return in native format.
 *
 * SDL byteswaps the data only if necessary, so the data returned will be in
 * the native byte order.
 *
 * This function will return false when the data stream is completely read,
 * and SDL_GetIOStatus() will return SDL_IO_STATUS_EOF. If false is returned
 * and the stream is not at EOF, SDL_GetIOStatus() will return a different
 * error value and SDL_GetError() will offer a human-readable message.
 *
 * @param src the stream from which to read data.
 * @param value a pointer filled in with the data read.
 * @returns true on successful write or false on failure; call SDL_GetError()
 *          for more information.
 *
 * @threadsafety This function is not thread safe.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @from SDL_iostream.h:878 bool SDL_ReadU16BE(SDL_IOStream *src, Uint16 *value);
 */
export const readU16Be = lib.symbols.SDL_ReadU16BE;

/**
 * Use this function to read 16 bits of big-endian data from an SDL_IOStream
 * and return in native format.
 *
 * SDL byteswaps the data only if necessary, so the data returned will be in
 * the native byte order.
 *
 * This function will return false when the data stream is completely read,
 * and SDL_GetIOStatus() will return SDL_IO_STATUS_EOF. If false is returned
 * and the stream is not at EOF, SDL_GetIOStatus() will return a different
 * error value and SDL_GetError() will offer a human-readable message.
 *
 * @param src the stream from which to read data.
 * @param value a pointer filled in with the data read.
 * @returns true on successful write or false on failure; call SDL_GetError()
 *          for more information.
 *
 * @threadsafety This function is not thread safe.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @from SDL_iostream.h:901 bool SDL_ReadS16BE(SDL_IOStream *src, Sint16 *value);
 */
export const readS16Be = lib.symbols.SDL_ReadS16BE;

/**
 * Use this function to read 32 bits of little-endian data from an
 * SDL_IOStream and return in native format.
 *
 * SDL byteswaps the data only if necessary, so the data returned will be in
 * the native byte order.
 *
 * This function will return false when the data stream is completely read,
 * and SDL_GetIOStatus() will return SDL_IO_STATUS_EOF. If false is returned
 * and the stream is not at EOF, SDL_GetIOStatus() will return a different
 * error value and SDL_GetError() will offer a human-readable message.
 *
 * @param src the stream from which to read data.
 * @param value a pointer filled in with the data read.
 * @returns true on successful write or false on failure; call SDL_GetError()
 *          for more information.
 *
 * @threadsafety This function is not thread safe.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @from SDL_iostream.h:924 bool SDL_ReadU32LE(SDL_IOStream *src, Uint32 *value);
 */
export const readU32Le = lib.symbols.SDL_ReadU32LE;

/**
 * Use this function to read 32 bits of little-endian data from an
 * SDL_IOStream and return in native format.
 *
 * SDL byteswaps the data only if necessary, so the data returned will be in
 * the native byte order.
 *
 * This function will return false when the data stream is completely read,
 * and SDL_GetIOStatus() will return SDL_IO_STATUS_EOF. If false is returned
 * and the stream is not at EOF, SDL_GetIOStatus() will return a different
 * error value and SDL_GetError() will offer a human-readable message.
 *
 * @param src the stream from which to read data.
 * @param value a pointer filled in with the data read.
 * @returns true on successful write or false on failure; call SDL_GetError()
 *          for more information.
 *
 * @threadsafety This function is not thread safe.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @from SDL_iostream.h:947 bool SDL_ReadS32LE(SDL_IOStream *src, Sint32 *value);
 */
export const readS32Le = lib.symbols.SDL_ReadS32LE;

/**
 * Use this function to read 32 bits of big-endian data from an SDL_IOStream
 * and return in native format.
 *
 * SDL byteswaps the data only if necessary, so the data returned will be in
 * the native byte order.
 *
 * This function will return false when the data stream is completely read,
 * and SDL_GetIOStatus() will return SDL_IO_STATUS_EOF. If false is returned
 * and the stream is not at EOF, SDL_GetIOStatus() will return a different
 * error value and SDL_GetError() will offer a human-readable message.
 *
 * @param src the stream from which to read data.
 * @param value a pointer filled in with the data read.
 * @returns true on successful write or false on failure; call SDL_GetError()
 *          for more information.
 *
 * @threadsafety This function is not thread safe.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @from SDL_iostream.h:970 bool SDL_ReadU32BE(SDL_IOStream *src, Uint32 *value);
 */
export const readU32Be = lib.symbols.SDL_ReadU32BE;

/**
 * Use this function to read 32 bits of big-endian data from an SDL_IOStream
 * and return in native format.
 *
 * SDL byteswaps the data only if necessary, so the data returned will be in
 * the native byte order.
 *
 * This function will return false when the data stream is completely read,
 * and SDL_GetIOStatus() will return SDL_IO_STATUS_EOF. If false is returned
 * and the stream is not at EOF, SDL_GetIOStatus() will return a different
 * error value and SDL_GetError() will offer a human-readable message.
 *
 * @param src the stream from which to read data.
 * @param value a pointer filled in with the data read.
 * @returns true on successful write or false on failure; call SDL_GetError()
 *          for more information.
 *
 * @threadsafety This function is not thread safe.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @from SDL_iostream.h:993 bool SDL_ReadS32BE(SDL_IOStream *src, Sint32 *value);
 */
export const readS32Be = lib.symbols.SDL_ReadS32BE;

/**
 * Use this function to read 64 bits of little-endian data from an
 * SDL_IOStream and return in native format.
 *
 * SDL byteswaps the data only if necessary, so the data returned will be in
 * the native byte order.
 *
 * This function will return false when the data stream is completely read,
 * and SDL_GetIOStatus() will return SDL_IO_STATUS_EOF. If false is returned
 * and the stream is not at EOF, SDL_GetIOStatus() will return a different
 * error value and SDL_GetError() will offer a human-readable message.
 *
 * @param src the stream from which to read data.
 * @param value a pointer filled in with the data read.
 * @returns true on successful write or false on failure; call SDL_GetError()
 *          for more information.
 *
 * @threadsafety This function is not thread safe.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @from SDL_iostream.h:1016 bool SDL_ReadU64LE(SDL_IOStream *src, Uint64 *value);
 */
export const readU64Le = lib.symbols.SDL_ReadU64LE;

/**
 * Use this function to read 64 bits of little-endian data from an
 * SDL_IOStream and return in native format.
 *
 * SDL byteswaps the data only if necessary, so the data returned will be in
 * the native byte order.
 *
 * This function will return false when the data stream is completely read,
 * and SDL_GetIOStatus() will return SDL_IO_STATUS_EOF. If false is returned
 * and the stream is not at EOF, SDL_GetIOStatus() will return a different
 * error value and SDL_GetError() will offer a human-readable message.
 *
 * @param src the stream from which to read data.
 * @param value a pointer filled in with the data read.
 * @returns true on successful write or false on failure; call SDL_GetError()
 *          for more information.
 *
 * @threadsafety This function is not thread safe.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @from SDL_iostream.h:1039 bool SDL_ReadS64LE(SDL_IOStream *src, Sint64 *value);
 */
export const readS64Le = lib.symbols.SDL_ReadS64LE;

/**
 * Use this function to read 64 bits of big-endian data from an SDL_IOStream
 * and return in native format.
 *
 * SDL byteswaps the data only if necessary, so the data returned will be in
 * the native byte order.
 *
 * This function will return false when the data stream is completely read,
 * and SDL_GetIOStatus() will return SDL_IO_STATUS_EOF. If false is returned
 * and the stream is not at EOF, SDL_GetIOStatus() will return a different
 * error value and SDL_GetError() will offer a human-readable message.
 *
 * @param src the stream from which to read data.
 * @param value a pointer filled in with the data read.
 * @returns true on successful write or false on failure; call SDL_GetError()
 *          for more information.
 *
 * @threadsafety This function is not thread safe.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @from SDL_iostream.h:1062 bool SDL_ReadU64BE(SDL_IOStream *src, Uint64 *value);
 */
export const readU64Be = lib.symbols.SDL_ReadU64BE;

/**
 * Use this function to read 64 bits of big-endian data from an SDL_IOStream
 * and return in native format.
 *
 * SDL byteswaps the data only if necessary, so the data returned will be in
 * the native byte order.
 *
 * This function will return false when the data stream is completely read,
 * and SDL_GetIOStatus() will return SDL_IO_STATUS_EOF. If false is returned
 * and the stream is not at EOF, SDL_GetIOStatus() will return a different
 * error value and SDL_GetError() will offer a human-readable message.
 *
 * @param src the stream from which to read data.
 * @param value a pointer filled in with the data read.
 * @returns true on successful write or false on failure; call SDL_GetError()
 *          for more information.
 *
 * @threadsafety This function is not thread safe.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @from SDL_iostream.h:1085 bool SDL_ReadS64BE(SDL_IOStream *src, Sint64 *value);
 */
export const readS64Be = lib.symbols.SDL_ReadS64BE;

/**
 * Use this function to write a byte to an SDL_IOStream.
 *
 * @param dst the SDL_IOStream to write to.
 * @param value the byte value to write.
 * @returns true on successful write or false on failure; call SDL_GetError()
 *          for more information.
 *
 * @threadsafety This function is not thread safe.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @from SDL_iostream.h:1107 bool SDL_WriteU8(SDL_IOStream *dst, Uint8 value);
 */
export const writeU8 = lib.symbols.SDL_WriteU8;

/**
 * Use this function to write a signed byte to an SDL_IOStream.
 *
 * @param dst the SDL_IOStream to write to.
 * @param value the byte value to write.
 * @returns true on successful write or false on failure; call SDL_GetError()
 *          for more information.
 *
 * @threadsafety This function is not thread safe.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @from SDL_iostream.h:1121 bool SDL_WriteS8(SDL_IOStream *dst, Sint8 value);
 */
export const writeS8 = lib.symbols.SDL_WriteS8;

/**
 * Use this function to write 16 bits in native format to an SDL_IOStream as
 * little-endian data.
 *
 * SDL byteswaps the data only if necessary, so the application always
 * specifies native format, and the data written will be in little-endian
 * format.
 *
 * @param dst the stream to which data will be written.
 * @param value the data to be written, in native format.
 * @returns true on successful write or false on failure; call SDL_GetError()
 *          for more information.
 *
 * @threadsafety This function is not thread safe.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @from SDL_iostream.h:1140 bool SDL_WriteU16LE(SDL_IOStream *dst, Uint16 value);
 */
export const writeU16Le = lib.symbols.SDL_WriteU16LE;

/**
 * Use this function to write 16 bits in native format to an SDL_IOStream as
 * little-endian data.
 *
 * SDL byteswaps the data only if necessary, so the application always
 * specifies native format, and the data written will be in little-endian
 * format.
 *
 * @param dst the stream to which data will be written.
 * @param value the data to be written, in native format.
 * @returns true on successful write or false on failure; call SDL_GetError()
 *          for more information.
 *
 * @threadsafety This function is not thread safe.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @from SDL_iostream.h:1159 bool SDL_WriteS16LE(SDL_IOStream *dst, Sint16 value);
 */
export const writeS16Le = lib.symbols.SDL_WriteS16LE;

/**
 * Use this function to write 16 bits in native format to an SDL_IOStream as
 * big-endian data.
 *
 * SDL byteswaps the data only if necessary, so the application always
 * specifies native format, and the data written will be in big-endian format.
 *
 * @param dst the stream to which data will be written.
 * @param value the data to be written, in native format.
 * @returns true on successful write or false on failure; call SDL_GetError()
 *          for more information.
 *
 * @threadsafety This function is not thread safe.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @from SDL_iostream.h:1177 bool SDL_WriteU16BE(SDL_IOStream *dst, Uint16 value);
 */
export const writeU16Be = lib.symbols.SDL_WriteU16BE;

/**
 * Use this function to write 16 bits in native format to an SDL_IOStream as
 * big-endian data.
 *
 * SDL byteswaps the data only if necessary, so the application always
 * specifies native format, and the data written will be in big-endian format.
 *
 * @param dst the stream to which data will be written.
 * @param value the data to be written, in native format.
 * @returns true on successful write or false on failure; call SDL_GetError()
 *          for more information.
 *
 * @threadsafety This function is not thread safe.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @from SDL_iostream.h:1195 bool SDL_WriteS16BE(SDL_IOStream *dst, Sint16 value);
 */
export const writeS16Be = lib.symbols.SDL_WriteS16BE;

/**
 * Use this function to write 32 bits in native format to an SDL_IOStream as
 * little-endian data.
 *
 * SDL byteswaps the data only if necessary, so the application always
 * specifies native format, and the data written will be in little-endian
 * format.
 *
 * @param dst the stream to which data will be written.
 * @param value the data to be written, in native format.
 * @returns true on successful write or false on failure; call SDL_GetError()
 *          for more information.
 *
 * @threadsafety This function is not thread safe.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @from SDL_iostream.h:1214 bool SDL_WriteU32LE(SDL_IOStream *dst, Uint32 value);
 */
export const writeU32Le = lib.symbols.SDL_WriteU32LE;

/**
 * Use this function to write 32 bits in native format to an SDL_IOStream as
 * little-endian data.
 *
 * SDL byteswaps the data only if necessary, so the application always
 * specifies native format, and the data written will be in little-endian
 * format.
 *
 * @param dst the stream to which data will be written.
 * @param value the data to be written, in native format.
 * @returns true on successful write or false on failure; call SDL_GetError()
 *          for more information.
 *
 * @threadsafety This function is not thread safe.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @from SDL_iostream.h:1233 bool SDL_WriteS32LE(SDL_IOStream *dst, Sint32 value);
 */
export const writeS32Le = lib.symbols.SDL_WriteS32LE;

/**
 * Use this function to write 32 bits in native format to an SDL_IOStream as
 * big-endian data.
 *
 * SDL byteswaps the data only if necessary, so the application always
 * specifies native format, and the data written will be in big-endian format.
 *
 * @param dst the stream to which data will be written.
 * @param value the data to be written, in native format.
 * @returns true on successful write or false on failure; call SDL_GetError()
 *          for more information.
 *
 * @threadsafety This function is not thread safe.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @from SDL_iostream.h:1251 bool SDL_WriteU32BE(SDL_IOStream *dst, Uint32 value);
 */
export const writeU32Be = lib.symbols.SDL_WriteU32BE;

/**
 * Use this function to write 32 bits in native format to an SDL_IOStream as
 * big-endian data.
 *
 * SDL byteswaps the data only if necessary, so the application always
 * specifies native format, and the data written will be in big-endian format.
 *
 * @param dst the stream to which data will be written.
 * @param value the data to be written, in native format.
 * @returns true on successful write or false on failure; call SDL_GetError()
 *          for more information.
 *
 * @threadsafety This function is not thread safe.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @from SDL_iostream.h:1269 bool SDL_WriteS32BE(SDL_IOStream *dst, Sint32 value);
 */
export const writeS32Be = lib.symbols.SDL_WriteS32BE;

/**
 * Use this function to write 64 bits in native format to an SDL_IOStream as
 * little-endian data.
 *
 * SDL byteswaps the data only if necessary, so the application always
 * specifies native format, and the data written will be in little-endian
 * format.
 *
 * @param dst the stream to which data will be written.
 * @param value the data to be written, in native format.
 * @returns true on successful write or false on failure; call SDL_GetError()
 *          for more information.
 *
 * @threadsafety This function is not thread safe.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @from SDL_iostream.h:1288 bool SDL_WriteU64LE(SDL_IOStream *dst, Uint64 value);
 */
export const writeU64Le = lib.symbols.SDL_WriteU64LE;

/**
 * Use this function to write 64 bits in native format to an SDL_IOStream as
 * little-endian data.
 *
 * SDL byteswaps the data only if necessary, so the application always
 * specifies native format, and the data written will be in little-endian
 * format.
 *
 * @param dst the stream to which data will be written.
 * @param value the data to be written, in native format.
 * @returns true on successful write or false on failure; call SDL_GetError()
 *          for more information.
 *
 * @threadsafety This function is not thread safe.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @from SDL_iostream.h:1307 bool SDL_WriteS64LE(SDL_IOStream *dst, Sint64 value);
 */
export const writeS64Le = lib.symbols.SDL_WriteS64LE;

/**
 * Use this function to write 64 bits in native format to an SDL_IOStream as
 * big-endian data.
 *
 * SDL byteswaps the data only if necessary, so the application always
 * specifies native format, and the data written will be in big-endian format.
 *
 * @param dst the stream to which data will be written.
 * @param value the data to be written, in native format.
 * @returns true on successful write or false on failure; call SDL_GetError()
 *          for more information.
 *
 * @threadsafety This function is not thread safe.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @from SDL_iostream.h:1325 bool SDL_WriteU64BE(SDL_IOStream *dst, Uint64 value);
 */
export const writeU64Be = lib.symbols.SDL_WriteU64BE;

/**
 * Use this function to write 64 bits in native format to an SDL_IOStream as
 * big-endian data.
 *
 * SDL byteswaps the data only if necessary, so the application always
 * specifies native format, and the data written will be in big-endian format.
 *
 * @param dst the stream to which data will be written.
 * @param value the data to be written, in native format.
 * @returns true on successful write or false on failure; call SDL_GetError()
 *          for more information.
 *
 * @threadsafety This function is not thread safe.
 *
 * @since This function is available since SDL 3.2.0.
 *
 * @from SDL_iostream.h:1343 bool SDL_WriteS64BE(SDL_IOStream *dst, Sint64 value);
 */
export const writeS64Be = lib.symbols.SDL_WriteS64BE;

