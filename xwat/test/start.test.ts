import { createWasm } from "@xwat/wabt"
import { expect, test, vi } from "vitest"
import Mod from "../example/start"

test("Start", async () => {
  const log = vi.fn()
  await createWasm(Mod, { env: { log } })
  expect(log.mock.calls).toEqual([[10]])
})
