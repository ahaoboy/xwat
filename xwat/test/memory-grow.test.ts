import { createWasm } from "@xwat/wabt"
import { expect, test, vi } from "vitest"
import { k } from "vitest/dist/reporters-LqC_WI4d"
import Mod from "../example/memory-grow"

test("LogMemory", async () => {
  const wasm = await createWasm<{
    Fill: (n: number, from: number, to: number) => void
    Sum: (from: number, to: number) => number
    memory: WebAssembly.Memory
  }>(Mod, { env: { log: console.log } })
  const { Fill, Sum, memory } = wasm.exports
  const dv = new DataView(memory.buffer)

  const pageByte = 65536
  console.log(memory, memory.buffer.byteLength)
  Fill(1, 0, pageByte)
  const s = Sum(0, pageByte)
  expect(s).toEqual(pageByte / 4)
  memory.grow(1)
  Fill(2, pageByte, pageByte * 2)
  const s2 = Sum(0, pageByte * 2)
  expect(s2).toEqual(pageByte / 4 + pageByte / 2)
})
