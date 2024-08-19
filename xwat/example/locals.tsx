import { $, Export, Func, Module, i32, local, param, result } from "../src"

function Add() {
  const $a = <local.i32 />
  const $b = <local.i32 />
  const $p1 = <param.i32 />
  const $p2 = <param.i32 />
  const $ret = <result.i32 />
  return (
    <Func params={[$p1, $p2]} ret={$ret}>
      <local.get var={$p1} />
      <local.tee var={$a} />
      <local.get var={$p2} />
      <local.tee var={$b} />
      <i32.add />
    </Func>
  )
}

export default (
  <Module>
    <Export value={Add} />
  </Module>
)
