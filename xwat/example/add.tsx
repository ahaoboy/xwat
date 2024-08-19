import { $, Export, Func, Module, i32, local, param, result } from "../src"

function Add() {
  const $a = <param.i32 />
  const $b = <param.i32 />
  const $ret = <result.i32 />
  return (
    <Func params={[$b, $a]} ret={$ret}>
      <local.get var={$a} />
      <local.get var={$b} />
      <i32.add />
    </Func>
  )
}

export default (
  <Module>
    <Export value={Add} />
  </Module>
)
