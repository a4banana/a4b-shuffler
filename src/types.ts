/**
* Defines interface for text shuffling animation controller
* @module types
* 
* @example
* ```ts
* const shuffler: IA4BShuffler = {
*   getShuffledTextByProgress: (p) => p === 1 ? "Hello" : "-----"
* }
* ```
*/

/**
* Interface for text shuffling animation controller
* @interface IA4BShuffler 
*/
export interface IA4BShuffler {
     /** 
    * Returns text with characters revealed based on progress
    * @param {number} progress Animation progress (0-1)
    * @returns {string} Current state of animated text
    * @example
    * ```ts
    * shuffler.getShuffledTextByProgress(0)   // "-----" 
    * shuffler.getShuffledTextByProgress(0.5) // "He--o"
    * shuffler.getShuffledTextByProgress(1)   // "Hello"
    * ```
    */
    getShuffledTextByProgress: ( progress: number ) => string;
}