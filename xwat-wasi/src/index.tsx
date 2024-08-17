import {
  $,
  Call,
  Data,
  Drop,
  Export,
  Func,
  Import,
  Memory,
  Module,
  Start,
  i32,
  param,
  result,
} from "@xwat/xwat"

export const wasi_snapshot_preview1 = {
  fd_write: (prop: { name?: string }) => {
    return (
      <Func
        name={prop.name}
        params={[<param.i32 />, <param.i32 />, <param.i32 />, <param.i32 />]}
        ret={<result.i32 />}
      />
    )
  },
}

const fd_write = <wasi_snapshot_preview1.fd_write />
function Main() {
  return (
    <Func>
      <i32.const value={0} />
      <i32.const value={8} />
      <i32.store />

      <i32.const value={4} />
      <i32.const value={12} />
      <i32.store />

      <i32.const value={1} />
      <i32.const value={0} />
      <i32.const value={1} />
      <i32.const value={20} />
      <Call fn={fd_write} />
      <Drop />
    </Func>
  )
}

const mem = <Memory name="memory" pageSize={1} />
export default (
  <Module>
    <Import scope="wasi_snapshot_preview1" name="fd_write" value={fd_write} />
    <Data value="hello world" index={8} />
    <Start value={Main} />
    <Export name="memory" value={mem} />
  </Module>
)
