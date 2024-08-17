import { createWasm } from "@xwat/wabt"
import { expect, test } from "vitest"
import Mod from "../example/while"

test("While", async () => {
  const wasm = await createWasm<{ Echo: (a: number, b: number) => undefined }>(
    Mod,
    { env: { log: console.log } },
  )
  const { Echo } = wasm.exports
  Echo(9, 9)
})
