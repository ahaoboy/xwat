import { createWasm } from "@xwat/wabt"
import { expect, test } from "vitest"
import Mod from "../example/simd"

// test("Add", async () => {
//   const wasm = await createWasm<{
//     Add: (out: number, a: number, b: number) => number;
//     memory: WebAssembly.Memory
//   }
//   >(Mod)

//   const { Add, memory } = wasm.exports

//   const dv = new DataView(memory.buffer)
//   const n = 8
//   for (let i = 0; i < n; i++) {
//     dv.setFloat32(i * 4, i, true)
//   }

//   Add(4 * 4 * 2, 0, 4 * 4)

//   for (let i = 0; i < 12; i++) {
//     const s = dv.getFloat32(i * 4, true)
//     console.log(i, s)
//   }
// })

test("Mat2MultiplyScalarAndAdd", async () => {
  const wasm = await createWasm<{
    Mat2MultiplyScalarAndAdd: (
      out: number,
      a: number,
      b: number,
      scale: number,
    ) => number
    memory: WebAssembly.Memory
  }>(Mod)

  const { Mat2MultiplyScalarAndAdd, memory } = wasm.exports
  const dv = new DataView(memory.buffer)
  for (let i = 0; i < 8; i++) {
    dv.setFloat32(i * 4, i, true)
  }

  for (let i = 8; i < 12; i++) {
    dv.setFloat32(i * 4, 2, true)
  }

  const vecSize = 4 * 4
  Mat2MultiplyScalarAndAdd(vecSize * 3, 0, vecSize, vecSize * 2)

  for (let i = 0; i < 16; i++) {
    const s = dv.getFloat32(i * 4, true)
    console.log(i, s)
  }
})
