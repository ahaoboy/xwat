import {
  $,
  Export,
  Func,
  Memory,
  Module,
  f32x4,
  i32,
  local,
  param,
  render,
  result,
  v128,
} from "../src"

function Add() {
  const $out = <param.i32 />
  const $arg1 = <param.i32 />
  const $arg2 = <param.i32 />
  return (
    <Func params={[$out, $arg1, $arg2]}>
      <local.get var={$out} />

      <local.get var={$arg1} />
      <v128.load />
      <local.get var={$arg2} />
      <v128.load />
      <f32x4.add />

      <v128.store />
    </Func>
  )
}

function Mat2MultiplyScalarAndAdd() {
  const $out = <param.i32 />
  const $a = <param.i32 />
  const $b = <param.i32 />
  const $scale = <param.i32 />
  return (
    <Func params={[$out, $a, $b, $scale]}>
      <local.get var={$out} />

      <local.get var={$a} />
      <v128.load />

      <local.get var={$b} />
      <v128.load />
      <local.get var={$scale} />
      <v128.load />

      <f32x4.mul />

      <f32x4.add />

      <v128.store />
    </Func>
  )
}

const mem = <Memory name="mem" pageSize={1} />
export default (
  <Module>
    <Export name="memory" value={mem} />
    <Export value={Add} />
    <Export value={Mat2MultiplyScalarAndAdd} />
  </Module>
)
