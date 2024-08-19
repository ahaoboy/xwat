import {
  $,
  Call,
  Export,
  Func,
  Import,
  Module,
  i32,
  local,
  param,
} from "../src"

const log = <Func name="log" params={[<param.i32 />]} />
function LogInc() {
  const arg1 = <param.i32 />
  return (
    <Func params={[arg1]}>
      <local.get var={arg1} />
      <i32.const value={1} />
      <i32.add />
      <Call fn={log} />
    </Func>
  )
}
export default (
  <Module>
    <Import scope="env" name="log" value={log} />
    <Export value={LogInc} />
  </Module>
)
