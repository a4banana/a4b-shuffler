import { assertEquals } from "jsr:@std/assert@1";
import { A4BShuffler } from "../../main.ts";

/**
 * Integration tests for A4B-Shuffler
 */
Deno.test("Shuffle Integration", async (t) => {
    const text = "Hello"
    const shuffler = A4BShuffler({ text, delay: 1})
   
    /**
     * Test full animation cycle from start to end
     */
    await t.step("full progress cycle", () => {
      assertEquals(shuffler.getShuffledTextByProgress(0).replaceAll(/[^-]/g, '-'), "-----")
      assertEquals(shuffler.getShuffledTextByProgress(1), text)
      assertEquals(shuffler.getShuffledTextByProgress(0.5).length, text.length)
    })
})