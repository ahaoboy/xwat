import { createWasm } from "@xwat/wabt"
import { expect, test, vi } from "vitest"
import Mod from "../example/loop-br"

test("Loop", async () => {
  const log = vi.fn()
  const wasm = await createWasm<{ LoopLog: (n: number) => void }>(Mod, {
    env: { log },
  })
  const { LoopLog } = wasm.exports
  const n = 10
  LoopLog(n)
  expect(log.mock.calls).toEqual(
    Array(n)
      .fill(0)
      .map((_, k) => [k]),
  )
})
