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
  Module,
  Then,
  While,
  i32,
  local,
  param,
  render,
  result,
} from "../src"
const log = <Func name="log" params={[<param.i32 />]} />

function Echo() {
  const $arg1 = <param.i32 />
  const $arg2 = <param.i32 />

  const $i = <local.i32 name="i" />
  const $j = <local.i32 name="j" />
  return (
    <Func params={[$arg2, $arg1]}>
      <i32.const value={0} />
      <local.set var={$i} />

      <i32.const value={0} />
      <local.set var={$j} />

      <Loop>
        <local.get var={$i} />
        <local.get var={$arg1} />
        <i32.lt_s />

        <If>
          <Then>
            <local.get var={$i} />
            <Call fn={log} />

            <local.get var={$i} />
            <i32.const value={1} />
            <i32.add />
            <local.set var={$i} />
            <Br />
          </Then>
        </If>
      </Loop>
    </Func>
  )
}

export default (
  <Module>
    <Import scope="env" name="log" value={log} />
    <Export value={Echo} />
  </Module>
)
