import { $, Fragment, type Node, i32, local } from "@xwat/xwat"

export function Clamp(prop: { var: Node; min: Node; max: Node }) {
  return (
    <Fragment>
      {/* <i32.const value={prop.max} />
    <i32.const value={prop.min} />
    <local.get var={prop.var} />
    <i32.min />
    <i32.max /> */}
    </Fragment>
  )
}
