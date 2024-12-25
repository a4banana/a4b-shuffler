/**
 * Text animation library that transitions through random characters
 * @module a4b-shuffler
 * 
 * This module provides text animation functionality with random character transitions
 * during the animation progress.
 * 
 * @example
 * ```ts
 * import { A4BShuffler } from "@a4banana/a4b-shuffler";
 * 
 * const shuffler = A4BShuffler({ text: "Hello" });
 * shuffler.getShuffledTextByProgress(0);   // "-----"
 * shuffler.getShuffledTextByProgress(0.5); // "He--o"
 * shuffler.getShuffledTextByProgress(1);   // "Hello"
 * ```
 */

/**
 * Text shuffling animation interface definition
 * @see {@link A4BShuffler}
 */
export { type IA4BShuffler } from './src/types.ts';

/**
 * Creates text shuffling animation controller
 * @see {@link IA4BShuffler}
 */
export { default as A4BShuffler } from './src/a4b.shuffler.ts';