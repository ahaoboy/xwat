import { createWasm } from "@xwat/wabt"
import { expect, test } from "vitest"
import Mod from "../example/fib"

test("Fib", async () => {
  const wasm = await createWasm<{
    Fib: (n: number) => number
  }>(Mod)
  const { Fib } = wasm.exports
  expect(Fib(1)).toBe(1)
  expect(Fib(10)).toBe(55)
})
