import {
  $,
  BrIf,
  Call,
  Else,
  Export,
  Func,
  If,
  Import,
  Loop,
  Memory,
  Module,
  Return,
  Then,
  i32,
  local,
  param,
  render,
  result,
} from "@xwat/xwat"

const log = <Func params={[<param.i32 />]} />
const mem = <Memory name="mem" pageSize={1} />
export function Invert() {
  const $src = <param.i32 />
  const $w = <param.i32 />
  const $h = <param.i32 />
  const $c = <param.i32 />
  const $stride = <param.i32 />
  const $dist = <param.i32 />

  const $i = <local.i32 name="i" />
  const $j = <local.i32 name="j" />
  const $p = <local.i32 name="p" />
  const $wh = <local.i32 name="wh" />
  return (
    <Func params={[$src, $w, $h, $c, $stride, $dist]}>
      <i32.const value={0} />
      <local.set var={$i} />

      <i32.const value={0} />
      <local.set var={$j} />

      <local.get var={$w} />
      <local.get var={$h} />
      <local.get var={$stride} />
      <i32.mul />
      <i32.mul />
      <local.set var={$wh} />

      <Loop>
        {/* <local.get var={$i} />
				<i32.load8_u />
				<Call fn={log} /> */}
        {/* <local.get var={i} />
				<i32.const value={2} />
				<i32.shl />
				<i32.load />
				<local.get var={sum} />
				<i32.add />
				<local.set var={sum} /> */}
        <i32.const value={0} />
        <local.set var={$j} />

        <Loop>
          <local.get var={$i} />
          <local.get var={$j} />
          <i32.add />
          <local.set var={$p} />

          <local.get var={$p} />
          <local.get var={$dist} />
          <i32.add />
          <i32.const value={255} />
          <local.get var={$p} />
          <i32.load8_u />
          <i32.sub />
          <i32.store8 />
          {/* <Call fn={log} /> */}

          <local.get var={$j} />
          <i32.const value={1} />
          <i32.add />
          <local.set var={$j} />

          <local.get var={$j} />
          <local.get var={$c} />
          <i32.lt_u />
          <BrIf />
        </Loop>

        <Loop>
          <local.get var={$i} />
          <local.get var={$j} />
          <i32.add />
          <local.set var={$p} />

          <local.get var={$p} />
          <local.get var={$dist} />
          <i32.add />
          <local.get var={$p} />
          <i32.load8_u />
          <i32.store8 />

          <local.get var={$j} />
          <i32.const value={1} />
          <i32.add />
          <local.set var={$j} />

          <local.get var={$j} />
          <local.get var={$stride} />
          <i32.lt_u />
          <BrIf />
        </Loop>

        {/* i+1 */}
        <local.get var={$i} />
        <local.get var={$stride} />
        <i32.add />
        <local.set var={$i} />

        {/* i<pixels return */}
        <local.get var={$i} />
        <local.get var={$wh} />
        <i32.lt_s />
        <BrIf />
      </Loop>
    </Func>
  )
}

// export default (
//   <Module>
//     <Import scope="env" name="log" value={log} />
//     <Memory name="mem" pageSize={1} />
//     <Invert />
//     <Export value={Invert} />
//     <Export name="memory" value={mem} />
//   </Module>
// )
