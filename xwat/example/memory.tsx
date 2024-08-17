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
function LogMemory() {
  const n = <param.i32 />
  const i = <local.i32 name="i" />
  return (
    <Func params={[n]}>
      <i32.const value={0} />
      <local.set var={i} />

      <Loop name="loop">
        <local.get var={i} />
        <i32.const value={2} />
        <i32.shl />
        <i32.load />

        <Call fn={log} />

        <local.get var={i} />
        <i32.const value={1} />
        <i32.add />
        <local.set var={i} />

        <local.get var={i} />
        <local.get var={n} />
        <i32.lt_s />
        <BrIf name="loop" />
      </Loop>
    </Func>
  )
}

export default (
  <Module>
    <Import scope="env" name="log" value={log} />
    <Export value={LogMemory} />
    <Export name="memory" value={mem} />
  </Module>
)
