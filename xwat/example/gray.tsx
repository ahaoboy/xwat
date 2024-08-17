import {
  $,
  BrIf,
  Call,
  Else,
  Export,
  Func,
  If,
  Import,
  Loop,
  Memory,
  Module,
  Return,
  Then,
  i32,
  local,
  param,
  render,
  result,
} from "../src"

const log = <Func name="log" params={[<param.i32 />]} />
const mem = <Memory name="mem" pageSize={1} />
function Gray() {
  const n = <param.i32 />
  const ret = <result.i32 />
  const i = <local.i32 name="i" />
  const sum = <local.i32 name="sum" />
  return (
    <Func params={[n]} ret={ret}>
      <i32.const value={0} />
      <local.set var={i} />

      <i32.const value={0} />
      <local.set var={sum} />

      <Loop name="loop">
        <local.get var={i} />
        <i32.const value={2} />
        <i32.shl />
        <i32.load />
        <local.get var={sum} />
        <i32.add />
        <local.set var={sum} />

        <local.get var={i} />
        <i32.const value={1} />
        <i32.add />
        <local.set var={i} />

        <local.get var={i} />
        <local.get var={n} />
        <i32.lt_s />
        <BrIf name="loop" />
      </Loop>
      <local.get var={sum} />
    </Func>
  )
}

export default (
  <Module>
    <Import scope="env" name="log" value={log} />
    <Memory name="mem" pageSize={1} />
    <Export value={Gray} />
    <Export name="memory" value={mem} />
  </Module>
)
