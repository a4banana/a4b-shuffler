/**
 * Interface for A4B Shuffler
 * @interface IA4BShuffler
 */
export interface IA4BShuffler {
    /**
     * Get shuffled text at specified progress
     * @param {number} progress Progress value between 0 and 1
     * @returns {string} Shuffled text
     */
    getShuffledTextByProgress: ( progress: number ) => string;
}