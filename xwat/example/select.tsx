import {
  $,
  Export,
  Func,
  Module,
  Select,
  i32,
  local,
  param,
  result,
} from "../src"

function Max() {
  const $p1 = <param.i32 />
  const $p2 = <param.i32 />
  const $ret = <result.i32 />
  return (
    <Func params={[$p2, $p1]} ret={$ret}>
      <local.get var={$p1} />
      <local.get var={$p2} />
      <local.get var={$p1} />
      <local.get var={$p2} />
      <i32.gt_s />
      <Select />
    </Func>
  )
}
export default (
  <Module>
    <Export value={Max} />
  </Module>
)
