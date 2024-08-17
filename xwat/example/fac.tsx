import {
  $,
  Call,
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

function Fac() {
  const n = <param.i32 />
  const ret = <result.i32 />
  return (
    <Func params={[n]} ret={ret}>
      <local.get var={n} />
      <i32.const value={1} />
      <i32.lt_u />
      <If ret={ret}>
        <Then>
          <i32.const value={1} />
        </Then>
        <Else>
          <local.get var={n} />
          <local.get var={n} />
          <i32.const value={1} />
          <i32.sub />
          <Call fn={Fac} />
          <i32.mul />
        </Else>
      </If>
    </Func>
  )
}
export default (
  <Module>
    <Export value={Fac} />
  </Module>
)
