/**
 * Text animation library that transitions through random characters
 * @module
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

/** Text shuffling animation controller interface */
export { type IA4BShuffler } from './src/types.ts';

/** Create text shuffling animation instance */
export { default as A4BShuffler } from './src/a4b.shuffler.ts';