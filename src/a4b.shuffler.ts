/**
* A4B-Shuffler
* Text shuffling animation library with random character transitions.
* 
* @example
* const shuffler = A4BShuffler({ text: 'Text To Shuffle' })
* 
* // Get shuffled text by progress (0-1)
* shuffler.getShuffledTextByProgress(0)      // "-------------"       (Initial)
* shuffler.getShuffledTextByProgress(0.5)    // "Te-t To Sh-f-le"    (Mix)
* shuffler.getShuffledTextByProgress(1)      // "Text To Shuffle"    (Final)
* 
* @param {Object} options Configuration options
* @param {string} options.text - Text to shuffle
* @param {number} [options.delay=2.5] - Animation delay multiplier
* @returns {IA4BShuffler} Shuffler instance
*/

import { getRatesByTextLength, generateRandomCharacter } from './utils.ts';
import type { IA4BShuffler } from "./types.ts";

const INITIAL_CHARACTER = "-";

/**
 * Configuration options for A4B Shuffler
 * @interface A4BShufflerOptions
 */
interface A4BShufflerOptions {
    /** Text to shuffle */
    text: string;
    /** Animation delay multiplier */
    delay?: number;
}

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