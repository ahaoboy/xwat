import { createWasm } from "@xwat/wabt"
import { expect, test, vi } from "vitest"
import Mod from "../example/imports"

test("Imports", async () => {
  const log = vi.fn()
  const wasm = await createWasm<{
    LogInc: (n: number) => void
  }>(Mod, { env: { log } })
  const { LogInc } = wasm.exports
  LogInc(1)
  expect(log.mock.calls[0]).toEqual([2])
})
