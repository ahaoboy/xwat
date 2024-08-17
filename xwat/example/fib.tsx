import { n } from "vitest/dist/reporters-LqC_WI4d"
import {
  $,
  Call,
  Else,
  Export,
  Fragment,
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

function Sub(prop: { var: Node; subtrahend: number }) {
  return (
    <Fragment>
      <local.get var={prop.var} />
      <i32.const value={prop.subtrahend} />
      <i32.sub />
    </Fragment>
  )
}
function Fib() {
  const $n = <param.i32 />
  const $ret = <result.i32 />
  return (
    <Func params={[$n]} ret={$ret}>
      <local.get var={$n} />
      <i32.const value={2} />
      <i32.lt_s />
      <If ret={$ret}>
        <Then>
          <local.get var={$n} />
        </Then>
        <Else>
          <Sub var={$n} subtrahend={1} />
          <Call fn={Fib} />
          <Sub var={$n} subtrahend={2} />
          <Call fn={Fib} />
          <i32.add />
        </Else>
      </If>
    </Func>
  )
}
export default (
  <Module>
    <Export value={Fib} />
  </Module>
)
