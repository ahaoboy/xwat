import { $, Call, Func, Import, Module, Start, i32, local, param } from "../src"

const $log = <Func name="log" params={[<param.i32 />]} />
function Main() {
  const $n = <local.i32 />
  return (
    <Func>
      <i32.const value={10} />
      <local.tee var={$n} />
      <Call fn={$log} />
    </Func>
  )
}

export default (
  <Module>
    <Import scope="env" name="log" value={$log} />
    <Start value={Main} />
  </Module>
)
