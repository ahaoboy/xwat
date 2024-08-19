import {
  $,
  BrIf,
  Export,
  Func,
  Import,
  Loop,
  Memory,
  Module,
  i32,
  local,
  param,
} from "../src"

const log = <Func name="log" params={[<param.i32 />]} />
const mem = <Memory name="mem" pageSize={1} />
function Inv() {
  const $src = <param.i32 />
  const $n = <param.i32 />
  const $dist = <param.i32 />

  const $i = <local.i32 name="i" />
  return (
    <Func params={[$src, $n, $dist]}>
      <i32.const value={0} />
      <local.set var={$i} />

      <Loop>
        <local.get var={$i} />
        <local.get var={$n} />
        <i32.add />

        <i32.const value={255} />
        <local.get var={$i} />
        <i32.load8_u />
        <i32.sub />
        <i32.store8 />

        <local.get var={$i} />
        <i32.const value={1} />
        <i32.add />
        <local.set var={$i} />

        <local.get var={$i} />
        <local.get var={$n} />
        <i32.lt_s />
        <BrIf />
      </Loop>
    </Func>
  )
}

export default (
  <Module>
    <Import scope="env" name="log" value={log} />
    <Export value={Inv} />
    <Export name="memory" value={mem} />
  </Module>
)
