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
const mem = <Memory name="mem" pageSize={1} />
function ExactEqualsI32() {
  const $a = <param.i32 />
  const $b = <param.i32 />
  const $ret = <result.i32 />
  return (
    <Func params={[$a, $b]} ret={$ret}>
      {Array(4)
        .fill(0)
        .map((_, k) => {
          return (
            <Fragment>
              <Offset ptr={$a} offset={k} stride={4} />
              <i32.load />
              <Offset ptr={$b} offset={k} stride={4} />
              <i32.load />
              <i32.eq />
            </Fragment>
          )
        })}
      <i32.and />
      <i32.and />
      <i32.and />
    </Func>
  )
}

function ExactEqualsF32() {
  const $a = <param.i32 />
  const $b = <param.i32 />
  const $ret = <result.i32 />
  return (
    <Func params={[$a, $b]} ret={$ret}>
      {Array(4)
        .fill(0)
        .map((_, k) => {
          return (
            <Fragment>
              <Offset ptr={$a} offset={k} stride={4} />
              <f32.load />
              <Offset ptr={$b} offset={k} stride={4} />
              <f32.load />
              <f32.eq />
            </Fragment>
          )
        })}
      <i32.and />
      <i32.and />
      <i32.and />
    </Func>
  )
}

const Mod = (
  <Module>
    <Memory name="mem" pageSize={1} />
    <Export value={ExactEqualsI32} />
    <Export value={ExactEqualsF32} />
    <Export name="memory" value={mem} />
  </Module>
)

describe("eq-i32", async () => {
  const mod = await createWasm<{
    ExactEqualsI32: (a: number, b: number) => boolean
    ExactEqualsF32: (a: number, b: number) => boolean
    memory: WebAssembly.Memory
  }>(Mod)

  const { memory, ExactEqualsI32, ExactEqualsF32 } = mod.exports
  const dv = new DataView(memory.buffer)

  const n = 10
  for (let i = 0; i < n; i++) {
    dv.setInt32(i * 4, i, true)
  }
  function jsExactEquals(a: number, b: number) {
    return (
      dv.getInt32(a, true) === dv.getInt32(b, true) &&
      dv.getInt32(a + 4, true) === dv.getInt32(b + 4, true) &&
      dv.getInt32(a + 8, true) === dv.getInt32(b + 8, true) &&
      dv.getInt32(a + 12, true) === dv.getInt32(b + 12, true)
    )
  }
  console.log(ExactEqualsI32(0, 16))
  console.log(jsExactEquals(0, 16))

  bench("js-eq", () => {
    jsExactEquals(0, 16)
  })

  bench("wasm-eq", () => {
    !!ExactEqualsI32(0, 16)
  })
})

describe("eq-f32", async () => {
  const mod = await createWasm<{
    ExactEqualsI32: (a: number, b: number) => boolean
    ExactEqualsF32: (a: number, b: number) => boolean
    memory: WebAssembly.Memory
  }>(Mod)

  const { memory, ExactEqualsI32, ExactEqualsF32 } = mod.exports

  const dv = new DataView(memory.buffer)

  const n = 10
  for (let i = 0; i < n; i++) {
    dv.setFloat32(i * 4, i, true)
  }
  function jsExactEquals(a: number, b: number) {
    return (
      dv.getFloat32(a, true) === dv.getFloat32(b, true) &&
      dv.getFloat32(a + 4, true) === dv.getFloat32(b + 4, true) &&
      dv.getFloat32(a + 8, true) === dv.getFloat32(b + 8, true) &&
      dv.getFloat32(a + 12, true) === dv.getFloat32(b + 12, true)
    )
  }
  console.log(ExactEqualsF32(0, 16))
  console.log(jsExactEquals(0, 16))

  bench("js-eq", () => {
    jsExactEquals(0, 16)
  })

  bench("wasm-eq", () => {
    !!ExactEqualsF32(0, 16)
  })
})
