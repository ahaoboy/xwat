import { createWasm } from "@xwat/wabt"
import { expect, test } from "vitest"
import Mod from "../example/add"

test("Add", async () => {
  const wasm = await createWasm<{ Add: (a: number, b: number) => number }>(Mod)
  const { Add } = wasm.exports
  expect(Add(1, 2)).toBe(3)
  expect(Add(11, 2)).toBe(13)
  expect(Add(1, 12)).toBe(13)
})
