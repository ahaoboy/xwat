import { readFileSync } from "node:fs"
import { createWasm } from "@xwat/wabt"
import { bench, describe } from "vitest"
import {
  $,
  Export,
  Fragment,
  Func,
  Import,
  Memory,
  Module,
  Offset,
  f32,
  i32,
  local,
  param,
  result,
} from "../src"

describe("eq-i32", async () => {
  const code = readFileSync("./wat/sin.wat", "utf-8")
  const {
    exports: { sin },
  } = await createWasm<{ sin: (a: number) => number }>(code)

  for (let i = 1; i <= 4; i++) {
    console.log(sin(Math.PI / i), Math.sin(Math.PI / i))
  }
  bench("wasm", () => {
    sin(Math.PI / 4)
  })

  bench("js", () => {
    Math.sin(Math.PI / 4)
  })
})
