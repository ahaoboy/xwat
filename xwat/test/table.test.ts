import { createWasm } from "@xwat/wabt"
import { expect, test } from "vitest"
import Mod from "../example/table"

test("Add", async () => {
  const wasm = await createWasm<{ Calc: (a: number, b: number) => number }>(Mod)
  const { Calc } = wasm.exports

  expect(Calc(1, 0)).toEqual(2)
  expect(Calc(1, 1)).toEqual(0)
})
