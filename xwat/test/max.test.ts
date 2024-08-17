import { createWasm } from "@xwat/wabt"
import { expect, test } from "vitest"
import Mod from "../example/max"

test("Max", async () => {
  const wasm = await createWasm<{
    Max: (a: number, b: number) => void
  }>(Mod)
  const { Max } = wasm.exports
  expect(Max(1, 2)).toBe(2)
  expect(Max(10, 20)).toBe(20)
})
