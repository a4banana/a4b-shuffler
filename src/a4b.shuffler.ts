/**
* A4B-Shuffler module implementation
* @module shuffler
*
* Core implementation of text shuffling animation with configurable transitions.
*/

import { getRatesByTextLength, generateRandomCharacter } from './utils.ts';
import type { IA4BShuffler } from "./types.ts";

/** Initial character for animation placeholders */
const INITIAL_CHARACTER = "-";

/**
* Configuration options for the animation controller
* @interface A4BShufflerOptions
*/ 
interface A4BShufflerOptions {
    /** Original text to shuffle */
    text: string;
    /** Animation delay multiplier (default: 2.5) */
    delay?: number;
}

/**
* Creates text shuffling animation controller
* @param {A4BShufflerOptions} options Configuration options
* @param {string} options.text Text to animate
* @param {number} [options.delay=2.5] Animation delay multiplier
* @returns {IA4BShuffler} Animation controller instance
* @example
* ```ts
* const shuffler = A4BShuffler({ 
*   text: "Hello",
*   delay: 2.0 
* });
* ```
*/
const A4BShuffler = ({
    text,
    delay = 2.5 
}: A4BShufflerOptions ): IA4BShuffler => {

    const rates = getRatesByTextLength( text );

    const getShuffledTextByProgress = ( progress: number ): string =>
        rates
            .map(( rate, i ) =>
                progress >= rate ? text.charAt( i ) // original string
                    : progress < rate / delay ? INITIAL_CHARACTER // initial character
                    : generateRandomCharacter( Math.random()))
            .join( "" )
    
    return {
        getShuffledTextByProgress
    }
}

/**
* Creates a text shuffling animation controller
* @function A4BShuffler
* @exports A4BShuffler
*/
export default A4BShuffler;