import { createWasm } from "@xwat/wabt"
import { expect, test } from "vitest"
import Mod from "../example/drop"

test("Add", async () => {
  const wasm = await createWasm<{ First: (a: number, b: number) => number }>(
    Mod,
  )
  const { First } = wasm.exports
  expect(First(1, 2)).toBe(1)
  expect(First(2, 1)).toBe(2)
  expect(First(11, 22)).toBe(11)
})
