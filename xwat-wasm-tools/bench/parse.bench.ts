import { bench, describe } from "vitest"
import Wabt from "wabt"
import { parse } from ".."
import { code } from "./code"

describe("parse", async () => {
  const wabt = await Wabt()

  parse(code)
  wabt.parseWat("test.wat", code)

  bench("wabt", () => {
    wabt.parseWat("test.wat", code)
  })

  bench("wasm-tools-wasm", () => {
    parse(code)
  })
})
