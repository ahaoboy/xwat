import {
  $,
  Export,
  Func,
  Module,
  i32,
  local,
  param,
  render,
  result,
} from "@xwat/xwat"

function Add() {
  const arg1 = <param.i32 />
  const arg2 = <param.i32 />
  const ret = <result.i32 />
  return (
    <Func params={[arg2, arg1]} ret={ret}>
      <local.get var={arg1} />
      <local.get var={arg2} />
      <i32.add />
    </Func>
  )
}

export default (
  <Module>
    <Export value={Add} />
  </Module>
)
