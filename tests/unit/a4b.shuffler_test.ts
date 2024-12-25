import { assertEquals } from "jsr:@std/assert@1"
import { A4BShuffler } from "../../main.ts"

/**
* Unit tests for A4BShuffler
*/
Deno.test("A4BShuffler unit", async (t) => {
  /**
   * Test initialization with text
   */
  await t.step("should initialize with text", () => {
    const text = "Test"
    const shuffler = A4BShuffler({ text })
    assertEquals(typeof shuffler.getShuffledTextByProgress, "function")
  })
 
  /**
   * Test empty string handling
   */
  await t.step("should handle empty string", () => {
    const shuffler = A4BShuffler({ text: "" })
    assertEquals(shuffler.getShuffledTextByProgress(1), "")
  })
 })