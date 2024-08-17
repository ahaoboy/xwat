import {
  $,
  Else,
  Export,
  Func,
  If,
  Module,
  Return,
  Then,
  i32,
  local,
  param,
  render,
  result,
} from "../src"

function Max() {
  const arg1 = <param.i32 />
  const arg2 = <param.i32 />
  const ret = <result.i32 />
  return (
    <Func params={[arg2, arg1]} ret={ret}>
      <local.get var={arg1} />
      <local.get var={arg2} />
      <i32.lt_u />
      <If ret={ret}>
        <Then>
          <local.get var={arg2} />
        </Then>
        <Else>
          <local.get var={arg1} />
        </Else>
      </If>
    </Func>
  )
}
export default (
  <Module>
    <Export value={Max} />
  </Module>
)
