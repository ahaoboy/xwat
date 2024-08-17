import {
  $,
  CallIndirect,
  Elem,
  Else,
  Export,
  Func,
  If,
  Module,
  Return,
  Select,
  Table,
  Then,
  Type,
  i32,
  local,
  param,
  render,
  result,
} from "../src"
const $i32_to_i32 = <Type params={["i32"]} ret="i32" />

function Inc() {
  return (
    <Func type={$i32_to_i32}>
      <local.get var={0} />
      <i32.const value={1} />
      <i32.add />
    </Func>
  )
}

function Dec() {
  const $p1 = <param.i32 />
  const $ret = <result.i32 />
  return (
    <Func params={[$p1]} ret={$ret}>
      <local.get var={$p1} />
      <i32.const value={1} />
      <i32.sub />
    </Func>
  )
}

function Calc() {
  const $p1 = <param.i32 />
  const $p2 = <param.i32 />
  const $ret = <result.i32 />
  return (
    <Func params={[$p1, $p2]} ret={$ret}>
      <local.get var={$p1} />
      <local.get var={$p2} />
      <CallIndirect type={$i32_to_i32} />
    </Func>
  )
}
export default (
  <Module>
    <Table size={32} />
    <Elem index={0} value={[Inc, Dec]} />
    <Export value={Calc} />
  </Module>
)
