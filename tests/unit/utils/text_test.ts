import { assertEquals } from "jsr:@std/assert@1"
import { getRatesByTextLength } from "../../../src/utils.ts"

/**
* Unit tests for text utility functions
*/
Deno.test("text utils", async (t) => {
  /**
   * Test rate calculations for text animation
   */
  await t.step("getRatesByTextLength", () => {
    assertEquals(getRatesByTextLength("abc"), [0, 0.5, 1])
    assertEquals(getRatesByTextLength(""), [])
    assertEquals(getRatesByTextLength("a"), [0])
    assertEquals(getRatesByTextLength("test"), [0, 1/3, 2/3, 1])
  })
})