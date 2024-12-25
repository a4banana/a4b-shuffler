/**
* Utility functions for text shuffling animation
* @module utils
*/

/**
* Generates random character from seed
* @param {number} seed Random seed (0-1)
* @returns {string} Single random character in base-36
* @example
* ```ts
* getRandomCharacterBySeed(0.5) // "7"
* ```
*/
export const getRandomCharacterBySeed = ( seed: number ): string =>
    seed.toString( 36 ).substring( 2, 3 );

/**
* Sets character case based on seed
* @param {number} seed Random seed (0-1) 
* @returns {(text: string) => string} Function that transforms text case based on seed
* @example
* ```ts
* const upperCase = defineCaseBySeed(0.6)
* upperCase("test") // "TEST"
* ```
*/
export const defineCaseBySeed = ( seed: number ) =>
    ( text: string ): string =>
        seed > 0.5 ? text.toUpperCase() : text.toLowerCase();

/**
* Combines random character generation and case transformation
* @param {number} seed Random seed (0-1)
* @returns {string} Random character with case determined by seed
* @example
* ```ts
* generateRandomCharacter(0.6) // "A"
* ```
*/
export const generateRandomCharacter = ( seed: number ): string =>
    defineCaseBySeed( seed )( getRandomCharacterBySeed( seed ))

/**
* Calculates progress rate array for text animation 
* @param {string} text Input text
* @returns {Array<number>} Array of evenly distributed rates from 0 to 1
* @example
* ```ts
* getRatesByTextLength("abc") // [0, 0.5, 1]
* ```
*/
export const getRatesByTextLength = ( text: string ): Array<number> =>
    Array.from({ length: text.length }, ( _, i ) => i / ( text.length - 1 || 1))