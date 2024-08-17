import { createWasm } from "@xwat/wabt"
import { expect, test } from "vitest"
import Mod from "../example/global"

test("Global", async () => {
  const g = new WebAssembly.Global({ value: "i32", mutable: true }, 5)
  const wasm = await createWasm<{
    GetGlobal: () => number
    SetGlobal: (v: number) => void
  }>(Mod, {
    env: {
      g,
    },
  })
  const { GetGlobal, SetGlobal } = wasm.exports
  expect(GetGlobal()).toEqual(5)
  SetGlobal(1)
  expect(GetGlobal()).toEqual(1)
})
