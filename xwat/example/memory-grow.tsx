import {
  $,
  Br,
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

const $log = <Func name="log" params={[<param.i32 />]} />
function Fill() {
  const $n = <param.i32 />
  const $from = <param.i32 />
  const $to = <param.i32 />
  const $i = <local.i32 />
  return (
    <Func params={[$n, $from, $to]}>
      <local.get var={$from} />
      <local.set var={$i} />

      <Loop>
        <local.get var={$i} />
        <local.get var={$to} />
        <i32.lt_u />

        <If>
          <Then>
            <local.get var={$i} />
            <local.get var={$n} />
            <i32.store />

            <local.get var={$i} />
            <i32.const value={4} />
            <i32.add />
            <local.set var={$i} />
            <Br />
          </Then>
        </If>
      </Loop>
    </Func>
  )
}
function Sum() {
  const $from = <param.i32 />
  const $to = <param.i32 />
  const $i = <local.i32 />
  const $sum = <local.i32 />
  const $ret = <result.i32 />
  return (
    <Func params={[$from, $to]} ret={$ret}>
      <local.get var={$from} />
      <local.set var={$i} />

      <i32.const value={0} />
      <local.set var={$sum} />

      <Loop>
        <local.get var={$i} />
        <local.get var={$to} />
        <i32.lt_u />

        <If>
          <Then>
            <local.get var={$sum} />
            <local.get var={$i} />
            <i32.load />
            <i32.add />
            <local.set var={$sum} />

            <local.get var={$i} />
            <i32.const value={4} />
            <i32.add />
            <local.set var={$i} />
            <Br />
          </Then>
        </If>
      </Loop>
      <local.get var={$sum} />
    </Func>
  )
}

export default (
  <Module>
    <Import scope="env" name="log" value={$log} />
    <Export value={Fill} />
    <Export value={Sum} />
    <Export name="memory" value={<Memory name="mem" pageSize={1} />} />
  </Module>
)
