import { mat4 } from "gl-matrix"
import * as RsWasm from "gl-matrix-wasm"
import { bench, describe } from "vitest"
import xwatWasm from "../wasm"

describe("mat4", async () => {
  await RsWasm.init()
  const rsWasmA = RsWasm.Matrix4.create()
  const rsWasmB = RsWasm.Matrix4.create()
  const rsWasmOut = RsWasm.Matrix4.create()
  RsWasm.Matrix4.multiply(rsWasmOut, rsWasmA, rsWasmB)

  const mod = await xwatWasm()
  const watA = mod.mat4.create()
  const watB = mod.mat4.create()
  const watOut = mod.mat4.create()
  mod.mat4.multiply(watOut, watA, watB)

  const glA = mat4.create()
  const glB = mat4.create()
  const glOut = mat4.create()
  mat4.multiply(glOut, glA, glB)

  bench("gl-matrix", () => {
    mat4.multiply(glOut, glA, glB)
  })

  bench("gl-matrix-wasm", () => {
    RsWasm.Matrix4.multiply(rsWasmOut, rsWasmA, rsWasmB)
  })
  bench("xwat-wasm", () => {
    mod.mat4.multiply(watOut, watA, watB)
  })
})
