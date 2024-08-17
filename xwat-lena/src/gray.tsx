import {
  $,
  Br,
  Call,
  Fragment,
  Func,
  If,
  Loop,
  Offset,
  Select,
  Then,
  i32,
  local,
  param,
} from "@xwat/xwat"
import { log } from "./index"

export function GrayRgba() {
  const $out = <param.i32 />
  const $img = <param.i32 />
  const $w = <param.i32 />
  const $h = <param.i32 />

  const $img_ptr = <local.i32 />
  const $out_ptr = <local.i32 />
  const $sum = <local.i32 />
  const $img_end = <local.i32 />
  return (
    <Func params={[$out, $img, $w, $h]}>
      <local.get var={$img} />
      <local.set var={$img_ptr} />

      <local.get var={$out} />
      <local.set var={$out_ptr} />

      <local.get var={$w} />
      <local.get var={$h} />
      <i32.mul />
      <i32.const value={4} />
      <i32.mul />
      <local.get var={$img} />
      <i32.add />
      <local.set var={$img_end} />

      <Loop>
        <i32.const value={0} />
        <local.set var={$sum} />

        <local.get var={$img_ptr} />
        <local.get var={$img_end} />
        <i32.lt_u />
        <If>
          <Then>
            <Offset ptr={$img_ptr} offset={0} stride={1} />
            <i32.load8_u />
            <Offset ptr={$img_ptr} offset={1} stride={1} />
            <i32.load8_u />
            <Offset ptr={$img_ptr} offset={2} stride={1} />
            <i32.load8_u />
            <i32.add />
            <i32.add />
            <i32.const value={3} />
            <i32.div_u />
            <local.set var={$sum} />

            <Offset ptr={$out_ptr} offset={0} stride={1} />
            <local.get var={$sum} />
            <i32.store8 />
            <Offset ptr={$out_ptr} offset={1} stride={1} />
            <local.get var={$sum} />
            <i32.store8 />
            <Offset ptr={$out_ptr} offset={2} stride={1} />
            <local.get var={$sum} />
            <i32.store8 />

            <Offset ptr={$out_ptr} offset={3} stride={1} />
            <Offset ptr={$img_ptr} offset={3} stride={1} />
            <i32.load />
            <i32.store8 />

            <local.get var={$img_ptr} />
            <i32.const value={4} />
            <i32.add />
            <local.set var={$img_ptr} />

            <local.get var={$out_ptr} />
            <i32.const value={4} />
            <i32.add />
            <local.set var={$out_ptr} />
            <Br />
          </Then>
        </If>
      </Loop>
    </Func>
  )
}
