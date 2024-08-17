import { createWasm } from "@xwat/wabt"
import { expect, test, vi } from "vitest"
import Mod from "../example/memory-sum"

test("LogMemory", async () => {
  const wasm = await createWasm<{
    SumMemory: (n: number) => number
    memory: WebAssembly.Memory
  }>(Mod, { env: { log: console.log } })
  const { SumMemory, memory } = wasm.exports
  const dv = new DataView(memory.buffer)

  const n = 10
  for (let i = 0; i < n; i++) {
    dv.setInt32(i * 4, i * i, true)
  }
  const sum = SumMemory(n)
  expect(sum).toEqual(
    Array(n)
      .fill(0)
      .map((_, k) => k * k)
      .reduce((pre, cur) => pre + cur, 0),
  )
})
