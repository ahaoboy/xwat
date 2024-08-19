import { $, Drop, Export, Func, Module, local, param, result } from "../src"

function First() {
  const $p1 = <param.i32 name="p1" />
  const $p2 = <param.i32 name="p2" />
  const $ret = <result.i32 />
  return (
    <Func params={[$p1, $p2]} ret={$ret}>
      <local.get var={$p1} />
      <local.get var={$p2} />
      <Drop />
    </Func>
  )
}

export default (
  <Module>
    <Export value={First} />
  </Module>
)
