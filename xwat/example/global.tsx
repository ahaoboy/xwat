import {
  $,
  Export,
  Func,
  Import,
  Module,
  global,
  i32,
  local,
  param,
  render,
  result,
} from "../src"

const $g = <global.i32 mut={true} />
function GetGlobal() {
  const ret = <result.i32 />
  return (
    <Func ret={ret}>
      <global.get var={$g} />
    </Func>
  )
}
function SetGlobal() {
  const $v = <param.i32 />
  return (
    <Func params={[$v]}>
      <local.get var={$v} />
      <global.set var={$g} />
    </Func>
  )
}

export default (
  <Module>
    <Import name="g" value={$g} scope="env" />
    <Export value={GetGlobal} />
    <Export value={SetGlobal} />
  </Module>
)
