import { createWasm } from "@xwat/wabt"
import { expect, test, vi } from "vitest"
import Mod from "../example/memory"

test("LogMemory", async () => {
  const log = vi.fn()
  const wasm = await createWasm<{
    LogMemory: (n: number) => void
    memory: WebAssembly.Memory
  }>(Mod, {
    env: { log },
  })
  const { LogMemory, memory } = wasm.exports
  const dv = new DataView(memory.buffer)

  const n = 10
  for (let i = 0; i < n; i++) {
    dv.setInt32(i * 4, i * i, true)
  }
  LogMemory(n)
  expect(log.mock.calls).toEqual(
    Array(n)
      .fill(0)
      .map((_, k) => [k * k]),
  )
})
