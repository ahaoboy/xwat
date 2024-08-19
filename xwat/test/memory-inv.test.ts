import { createWasm } from "@xwat/wabt"
import { expect, test, vi } from "vitest"
import Mod from "../example/memory-inv"

test("LogMemory", async () => {
  const wasm = await createWasm<{
    Inv: (src: number, n: number, dist: number) => void
    memory: WebAssembly.Memory
  }>(Mod, { env: { log: console.log } })
  const { Inv, memory } = wasm.exports
  const dv = new DataView(memory.buffer)

  const n = 10
  for (let i = 0; i < n; i++) {
    dv.setUint8(i, i)
  }
  Inv(0, n, n)
  const r = new Uint8Array(memory.buffer.slice(n, n + n))

  expect([...r]).toEqual(
    Array(n)
      .fill(0)
      .map((_, k) => 255 - k),
  )
})
