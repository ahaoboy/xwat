import { $, Fragment, Func, f32, i32, local, param } from "@xwat/xwat"

export function Mat4Multiply() {
  const $out = <param.i32 />
  const $a = <param.i32 />
  const $b = <param.i32 />

  const $valuesA = Array(16)
    .fill(0)
    .map(() => {
      return <local.f32 />
    })

  const $valuesB = Array(4)
    .fill(0)
    .map(() => {
      return <local.f32 />
    })

  const readA = $valuesA.map((i, k) => {
    return (
      <Fragment>
        <local.get var={$a} />
        <i32.const value={k * 4} />
        <i32.add />
        <f32.load />
        <local.set var={i} />
      </Fragment>
    )
  })

  const readB = (offset: number) =>
    $valuesB.map((i, k) => {
      return (
        <Fragment>
          <local.get var={$b} />
          <i32.const value={(k + offset) * 4} />
          <i32.add />
          <f32.load />
          <local.set var={i} />
        </Fragment>
      )
    })

  const outN = (n: number, offset: number) => (
    <Fragment>
      <local.get var={$out} />
      <i32.const value={n * 4} />
      <i32.add />

      <local.get var={$valuesB[0]} />
      <local.get var={$valuesA[0 + offset]} />
      <f32.mul />
      <local.get var={$valuesB[1]} />
      <local.get var={$valuesA[4 + offset]} />
      <f32.mul />
      <local.get var={$valuesB[2]} />
      <local.get var={$valuesA[8 + offset]} />
      <f32.mul />
      <local.get var={$valuesB[3]} />
      <local.get var={$valuesA[12 + offset]} />
      <f32.mul />
      <f32.add />
      <f32.add />
      <f32.add />
      <f32.store />
    </Fragment>
  )

  return (
    <Func params={[$out, $a, $b]}>
      {readA}

      {readB(0)}
      {outN(0, 0)}
      {outN(1, 1)}
      {outN(2, 2)}
      {outN(3, 3)}

      {readB(4)}
      {outN(4, 0)}
      {outN(5, 1)}
      {outN(6, 2)}
      {outN(7, 3)}

      {readB(8)}
      {outN(8, 0)}
      {outN(9, 1)}
      {outN(10, 2)}
      {outN(11, 3)}

      {readB(12)}
      {outN(12, 0)}
      {outN(13, 1)}
      {outN(14, 2)}
      {outN(15, 3)}
    </Func>
  )
}
