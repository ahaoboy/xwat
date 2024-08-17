import {
  $,
  Br,
  BrIf,
  Call,
  Else,
  Export,
  Fragment,
  Func,
  If,
  Import,
  Loop,
  Memory,
  Module,
  Return,
  Then,
  i8x16,
  i32,
  i64,
  local,
  param,
  render,
  result,
  v128,
} from "@xwat/xwat"

const log = <Func params={[<param.i32 />]} />
const mem = <Memory name="mem" pageSize={1} />
export function InvertRgba() {
  const $out = <param.i32 name="dist" />
  const $img = <param.i32 name="src" />
  const $w = <param.i32 name="w" />
  const $h = <param.i32 name="h" />

  const $out_ptr = <local.i32 name="out_ptr" />
  const $img_ptr = <local.i32 name="img_ptr" />
  const $end = <local.i32 name="wh" />
  const $max = <local.i32 name="max" />
  return (
    <Func params={[$out, $img, $w, $h]}>
      <local.get var={$out} />
      <local.set var={$out_ptr} />
      <local.get var={$img} />
      <local.set var={$img_ptr} />

      <local.get var={$out} />
      <local.get var={$w} />
      <local.get var={$h} />
      <i32.const value={4} />
      <i32.mul />
      <i32.mul />
      <i32.add />
      <local.set var={$end} />

      <i32.const value={255} />
      <local.set var={$max} />

      <Loop>
        <local.get var={$out_ptr} />
        <local.get var={$end} />
        <i32.lt_u />
        <If>
          <Then>
            {Array(3)
              .fill(0)
              .map((_, k) => (
                <Fragment>
                  <local.get var={$out_ptr} />
                  <i32.const value={k} />
                  <i32.add />
                  <local.get var={$max} />
                  <local.get var={$img_ptr} />
                  <i32.const value={k} />
                  <i32.add />
                  <i32.load8_u />
                  <i32.sub />
                  <i32.store8 />
                </Fragment>
              ))}

            <local.get var={$out_ptr} />
            <i32.const value={3} />
            <i32.add />
            <local.get var={$img_ptr} />
            <i32.const value={3} />
            <i32.add />
            <i32.load8_u />
            <i32.store8 />

            <local.get var={$out_ptr} />
            <i32.const value={4} />
            <i32.add />
            <local.set var={$out_ptr} />

            <local.get var={$img_ptr} />
            <i32.const value={4} />
            <i32.add />
            <local.set var={$img_ptr} />
            <Br />
          </Then>
        </If>
      </Loop>
    </Func>
  )
}

export function InvertRgba64() {
  const $out = <param.i32 name="dist" />
  const $img = <param.i32 name="src" />
  const $w = <param.i32 name="w" />
  const $h = <param.i32 name="h" />

  const $out_ptr = <local.i32 name="out_ptr" />
  const $img_ptr = <local.i32 name="img_ptr" />
  const $end = <local.i32 name="wh" />
  const $max = <local.i64 name="max" />
  return (
    <Func params={[$out, $img, $w, $h]}>
      <local.get var={$out} />
      <local.set var={$out_ptr} />
      <local.get var={$img} />
      <local.set var={$img_ptr} />

      <local.get var={$out} />
      <local.get var={$w} />
      <local.get var={$h} />
      <i32.const value={4} />
      <i32.mul />
      <i32.mul />
      <i32.add />
      <local.set var={$end} />

      <i64.const value={1} />
      <i64.const value={32} />
      <i64.shl />
      <i64.const value={1} />
      <i64.sub />
      <local.set var={$max} />

      <Loop>
        <local.get var={$out_ptr} />
        <local.get var={$end} />
        <i32.lt_u />
        <If>
          <Then>
            <local.get var={$out_ptr} />
            <local.get var={$max} />
            <local.get var={$img_ptr} />
            <i64.load32_u />
            <i64.sub />
            <i64.store32 />

            <local.get var={$out_ptr} />
            <i32.const value={3} />
            <i32.add />
            <local.get var={$img_ptr} />
            <i32.const value={3} />
            <i32.add />
            <i32.load8_u />
            <i32.store8 />

            <local.get var={$out_ptr} />
            <i32.const value={4} />
            <i32.add />
            <local.set var={$out_ptr} />

            <local.get var={$img_ptr} />
            <i32.const value={4} />
            <i32.add />
            <local.set var={$img_ptr} />
            <Br />
          </Then>
        </If>
      </Loop>
    </Func>
  )
}

export function InvertRgbaSimd() {
  const $out = <param.i32 name="dist" />
  const $img = <param.i32 name="src" />
  const $w = <param.i32 name="w" />
  const $h = <param.i32 name="h" />

  const $out_ptr = <local.i32 name="out_ptr" />
  const $img_ptr = <local.i32 name="img_ptr" />
  const $end = <local.i32 name="wh" />
  return (
    <Func params={[$out, $img, $w, $h]}>
      <local.get var={$out} />
      <local.set var={$out_ptr} />
      <local.get var={$img} />
      <local.set var={$img_ptr} />

      <local.get var={$out} />
      <local.get var={$w} />
      <local.get var={$h} />
      <i32.const value={4} />
      <i32.mul />
      <i32.mul />
      <i32.add />
      <local.set var={$end} />

      <Loop>
        <local.get var={$out_ptr} />
        <local.get var={$end} />
        <i32.lt_u />
        <If>
          <Then>
            <local.get var={$out_ptr} />
            <v128.const type="i8x16" value={new Array(16).fill(255)} />
            <local.get var={$img_ptr} />
            <v128.load />
            <i8x16.sub />
            <v128.store />

            <local.get var={$out_ptr} />
            <i32.const value={3} />
            <i32.add />
            <local.get var={$img_ptr} />
            <i32.const value={3} />
            <i32.add />
            <i32.load8_u />
            <i32.store8 />

            <local.get var={$out_ptr} />
            <i32.const value={7} />
            <i32.add />
            <local.get var={$img_ptr} />
            <i32.const value={7} />
            <i32.add />
            <i32.load8_u />
            <i32.store8 />

            <local.get var={$out_ptr} />
            <i32.const value={11} />
            <i32.add />
            <local.get var={$img_ptr} />
            <i32.const value={11} />
            <i32.add />
            <i32.load8_u />
            <i32.store8 />

            <local.get var={$out_ptr} />
            <i32.const value={15} />
            <i32.add />
            <local.get var={$img_ptr} />
            <i32.const value={15} />
            <i32.add />
            <i32.load8_u />
            <i32.store8 />

            <local.get var={$out_ptr} />
            <i32.const value={16} />
            <i32.add />
            <local.set var={$out_ptr} />

            <local.get var={$img_ptr} />
            <i32.const value={16} />
            <i32.add />
            <local.set var={$img_ptr} />
            <Br />
          </Then>
        </If>
      </Loop>
    </Func>
  )
}

export default (
  <Module>
    <Import scope="env" name="log" value={log} />
    <Memory name="mem" pageSize={1000} />
    <InvertRgba />
    <Export value={InvertRgba} />
    <Export name="memory" value={mem} />
  </Module>
)
