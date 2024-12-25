import { assertEquals } from "jsr:@std/assert@1"
import { getRandomCharacterBySeed, defineCaseBySeed, generateRandomCharacter } from "../../../src/utils.ts"

/**
* Unit tests for random character generation utilities
*/
Deno.test("random utils", async (t) => {
  /**
   * Test random character generation from seed
   */
  await t.step("getRandomCharacterBySeed", () => {
    assertEquals(getRandomCharacterBySeed(0.5).length, 1)
    assertEquals(typeof getRandomCharacterBySeed(0.123), "string")
  })

  /**
   * Test case transformation based on seed
   */
  await t.step("defineCaseBySeed", () => {
    const upperCaseFn = defineCaseBySeed(0.6)
    assertEquals(upperCaseFn("test"), "TEST")
    assertEquals(upperCaseFn("TEST"), "TEST")
  })

  /**
   * Test random character generation with case
   */
  await t.step("generateRandomCharacter", () => {
    const char = generateRandomCharacter(0.6)
    assertEquals(char.length, 1)
    assertEquals(char, char.toUpperCase())
  })
})