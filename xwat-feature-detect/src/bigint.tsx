// ;; Name: BigInt integration
//   ;; Proposal: https://github.com/WebAssembly/JS-BigInt-integration

import {
  $,
  Export,
  Func,
  Module,
  i32,
  i64,
  local,
  param,
  result,
} from "@xwat/xwat"

export function DetectBigInt() {
  const $a = <param.i64 />
  const $ret = <result.i64 />
  return (
    <Func params={[$a]} ret={$ret}>
      <local.get var={$a} />
    </Func>
  )
}
