import { readFileSync } from "node:fs"
import { createWasm } from "@xwat/wabt"
import { expect, test } from "vitest"

test("Add", async () => {
  const code = readFileSync("./wat/sin.wat", "utf-8")
  const wasm = await createWasm<{ sin: (a: number) => number }>(code)
  const { sin } = wasm.exports
  expect(sin(Math.PI / 2)).toEqual(1)
  const df = sin(Math.PI / 4) - Math.sin(Math.PI / 4)
  expect(Math.abs(df) < 1e6).toEqual(true)

  for (let i = 0; i < 100; i++) {
    const v = (Math.random() - 0.5) * 100 * Math.PI
    const a = sin(v)
    const b = Math.sin(v)
    expect(Math.abs(a - b) < 1e6).toEqual(true)
  }
})
