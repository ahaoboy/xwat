import { createWasm } from "@xwat/wabt"
import { expect, test } from "vitest"
import Mod from "../example/fac"

test("Fac", async () => {
  const wasm = await createWasm<{
    Fac: (n: number) => number
  }>(Mod)
  const { Fac } = wasm.exports
  expect(Fac(1)).toBe(1)
  expect(Fac(10)).toBe(3628800)
})
