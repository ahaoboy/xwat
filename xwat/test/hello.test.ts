import { createWasm } from "@xwat/wabt"
import { expect, test } from "vitest"
import Mod from "../example/hello"

test("hello", async () => {
  const wasm = await createWasm<{
    mem: WebAssembly.Memory
  }>(Mod)
  console.log(wasm.exports.mem)
  const bytes = new Uint8Array(wasm.exports.mem.buffer, 0, 11)
  const string = new TextDecoder("utf8").decode(bytes)
  expect(string).toEqual("hello world")
})
