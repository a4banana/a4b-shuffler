/**
 * Generates random character from seed
 * @param {number} seed Random seed (0-1)
 * @returns {string} Single random character
 */
export const getRandomCharacterBySeed = ( seed: number ): string =>
    seed.toString( 36 ).substring( 2, 3 );

/**
 * Sets character case based on seed
 * @param {number} seed Random seed (0-1)
 * @returns {(text: string) => string} Case transformer function
 */
export const defineCaseBySeed = ( seed: number ) =>
    ( text: string ): string =>
        seed > 0.5 ? text.toUpperCase() : text.toLowerCase();

/**
 * Generates random character with random case
 * @param {number} seed Random seed (0-1)
 * @returns {string} Random character with random case
 */
export const generateRandomCharacter = ( seed: number ): string =>
    defineCaseBySeed( seed )( getRandomCharacterBySeed( seed ))

/**
 * Calculates rate array for text animation
 * @param {string} text Input text
 * @returns {Array<number>} Array of progress rates
 */
export const getRatesByTextLength = ( text: string ): Array<number> =>
    Array.from({ length: text.length }, ( _, i ) => i / ( text.length - 1 || 1))