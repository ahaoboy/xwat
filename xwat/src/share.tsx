import { $, Fragment, type Node, i32, local } from "./index"

export function Offset({
  ptr,
  offset,
  stride = 4,
}: { ptr: Node; offset: number; stride: number }) {
  return (
    <Fragment>
      <local.get var={ptr} />
      <i32.const value={offset * stride} />
      <i32.add />
    </Fragment>
  )
}
