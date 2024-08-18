import {
  $,
  Else,
  Func,
  If,
  local,
  param,
  result,
  Then,
  i32,
  Br,
  Call,
} from "@xwat/xwat"

export function Gcd() {
  const $a = <param.i32 />
  const $b = <param.i32 />
  const $ret = <result.i32 />
  const $i = <local.i32 />

  return (
    <Func params={[$a, $b]} ret={$ret}>
      <local.get var={$b} />

      <If ret={$ret}>
        <Then>
          <local.get var={$b} />
          <local.get var={$a} />
          <local.get var={$b} />
          <i32.rem_s />
          <Call fn={Gcd} />
        </Then>
        <Else>
          <local.get var={$a} />
        </Else>
      </If>
    </Func>
  )
}
