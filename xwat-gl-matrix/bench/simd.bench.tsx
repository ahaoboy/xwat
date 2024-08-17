import {
  $,
  Export,
  Fragment,
  Func,
  Memory,
  Module,
  Offset,
  f32,
  f32x4,
  local,
  param,
  v128,
} from "@xwat/xwat"
import { mat2, mat4 } from "gl-matrix"
import * as RsWasm from "gl-matrix-wasm"
import { bench, describe } from "vitest"
import xwatWasm from "../wasm"

describe("multiplyScalarAndAdd", async () => {
  const scale = 2
  const mod = await xwatWasm()
  const watA = mod.mat2.fromValues(1, 2, 3, 4)
  const watB = mod.mat2.fromValues(4, 3, 2, 1)
  const watOut = mod.mat2.create()
  mod.mat2.multiplyScalarAndAdd(watOut, watA, watB, scale)

  const watSimdA = mod.mat2.fromValues(1, 2, 3, 4)
  const watSimdB = mod.mat2.fromValues(4, 3, 2, 1)
  const watSimdOut = mod.mat2.create()
  const watScale = mod.mat2.fromValues(scale, scale, scale, scale)
  mod.mat2.multiplyScalarAndAddSimd(watSimdOut, watSimdA, watSimdB, watScale)

  const glA = mat2.fromValues(1, 2, 3, 4)
  const glB = mat2.fromValues(4, 3, 2, 1)
  const glOut = mat2.create()
  mat2.multiplyScalarAndAdd(glOut, glA, glB, scale)

  console.log(mod.mat2.toValues(watOut))
  console.log(mod.mat2.toValues(watSimdOut))
  console.log(glOut)

  bench("gl-matrix", () => {
    mat2.multiplyScalarAndAdd(glOut, glA, glB, scale)
  })

  bench("xwat-wasm", () => {
    mod.mat2.multiplyScalarAndAdd(watOut, watA, watB, scale)
  })

  bench("xwat-wasm-simd", () => {
    mod.mat2.multiplyScalarAndAddSimd(watSimdOut, watSimdA, watSimdB, watScale)
  })
})
