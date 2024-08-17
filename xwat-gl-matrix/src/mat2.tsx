import {
  $,
  Call,
  Fragment,
  Func,
  Offset,
  f32,
  f32x4,
  i32,
  local,
  param,
  result,
  v128,
} from "@xwat/xwat"
import { Epsilon } from "./const"
import { cos, sin } from "./math"

export function Mat2Transpose() {
  const $out = <param.i32 />
  const $a = <param.i32 />

  const move = (outIndex: number, aIndex: number) => (
    <Fragment>
      <Offset ptr={$out} offset={outIndex} stride={4} />
      <Offset ptr={$a} offset={aIndex} stride={4} />
      <f32.load />
      <f32.store />
    </Fragment>
  )
  return (
    <Func params={[$out, $a]}>
      {move(0, 0)}
      {move(1, 2)}
      {move(2, 1)}
      {move(3, 3)}
    </Func>
  )
}

export function Mat2Invert() {
  const $out = <param.i32 />
  const $a = <param.i32 />

  const $valuesA = Array(4)
    .fill(0)
    .map(() => <local.f32 />)

  const $det = <local.f32 />
  return (
    <Func params={[$out, $a]}>
      {$valuesA.map((i, k) => (
        <Fragment>
          <Offset ptr={$a} offset={k} stride={4} />
          <f32.load />
          <local.set var={i} />
        </Fragment>
      ))}

      <f32.const value={1} />
      <local.get var={$valuesA[0]} />
      <local.get var={$valuesA[3]} />
      <f32.mul />
      <local.get var={$valuesA[2]} />
      <local.get var={$valuesA[1]} />
      <f32.mul />
      <f32.sub />
      <f32.div />
      <local.set var={$det} />

      <Offset ptr={$out} offset={0} stride={4} />
      <local.get var={$valuesA[3]} />
      <local.get var={$det} />
      <f32.mul />
      <f32.store />

      <Offset ptr={$out} offset={1} stride={4} />
      <local.get var={$valuesA[1]} />
      <f32.neg />
      <local.get var={$det} />
      <f32.mul />
      <f32.store />

      <Offset ptr={$out} offset={2} stride={4} />
      <local.get var={$valuesA[2]} />
      <f32.neg />
      <local.get var={$det} />
      <f32.mul />
      <f32.store />

      <Offset ptr={$out} offset={3} stride={4} />
      <local.get var={$valuesA[0]} />
      <local.get var={$det} />
      <f32.mul />
      <f32.store />
    </Func>
  )
}

export function Mat2Determinant() {
  const $a = <param.i32 />
  const $ret = <result.f32 />
  const $det = <local.f32 />

  const $valuesA = Array(4)
    .fill(0)
    .map(() => <local.f32 />)

  return (
    <Func params={[$a]} ret={$ret}>
      {$valuesA.map((i, k) => (
        <Fragment>
          <Offset ptr={$a} offset={k} stride={4} />
          <f32.load />
          <local.set var={i} />
        </Fragment>
      ))}

      <local.get var={$valuesA[0]} />
      <local.get var={$valuesA[3]} />
      <f32.mul />
      <local.get var={$valuesA[2]} />
      <local.get var={$valuesA[1]} />
      <f32.mul />
      <f32.sub />
    </Func>
  )
}

export function Mat2Adjoint() {
  const $out = <param.i32 />
  const $a = <param.i32 />

  return (
    <Func params={[$out, $a]}>
      <Offset ptr={$out} offset={0} stride={4} />
      <Offset ptr={$a} offset={3} stride={4} />
      <f32.load />
      <f32.store />

      <Offset ptr={$out} offset={1} stride={4} />
      <Offset ptr={$a} offset={1} stride={4} />
      <f32.load />
      <f32.neg />
      <f32.store />

      <Offset ptr={$out} offset={2} stride={4} />
      <Offset ptr={$a} offset={2} stride={4} />
      <f32.load />
      <f32.neg />
      <f32.store />

      <Offset ptr={$out} offset={3} stride={4} />
      <Offset ptr={$a} offset={0} stride={4} />
      <f32.load />
      <f32.store />
    </Func>
  )
}

export function Mat2Multiply() {
  const $a = <param.i32 />
  const $b = <param.i32 />
  const $out = <param.i32 />

  const $valuesA = Array(4)
    .fill(0)
    .map(() => <local.f32 />)
  const $valuesB = Array(4)
    .fill(0)
    .map(() => <local.f32 />)

  return (
    <Func params={[$out, $a, $b]}>
      {$valuesA.map((i, k) => (
        <Fragment>
          <Offset ptr={$a} offset={k} stride={4} />
          <f32.load />
          <local.set var={i} />
        </Fragment>
      ))}

      {$valuesB.map((i, k) => (
        <Fragment>
          <Offset ptr={$b} offset={k} stride={4} />
          <f32.load />
          <local.set var={i} />
        </Fragment>
      ))}

      <Offset ptr={$out} offset={0} stride={4} />
      <local.get var={$valuesA[0]} />
      <local.get var={$valuesB[0]} />
      <f32.mul />
      <local.get var={$valuesA[2]} />
      <local.get var={$valuesB[1]} />
      <f32.mul />
      <f32.add />
      <f32.store />

      <Offset ptr={$out} offset={1} stride={4} />
      <local.get var={$valuesA[1]} />
      <local.get var={$valuesB[0]} />
      <f32.mul />
      <local.get var={$valuesA[3]} />
      <local.get var={$valuesB[1]} />
      <f32.mul />
      <f32.add />
      <f32.store />

      <Offset ptr={$out} offset={2} stride={4} />
      <local.get var={$valuesA[0]} />
      <local.get var={$valuesB[2]} />
      <f32.mul />
      <local.get var={$valuesA[2]} />
      <local.get var={$valuesB[3]} />
      <f32.mul />
      <f32.add />
      <f32.store />
      <Offset ptr={$out} offset={3} stride={4} />
      <local.get var={$valuesA[1]} />
      <local.get var={$valuesB[2]} />
      <f32.mul />
      <local.get var={$valuesA[3]} />
      <local.get var={$valuesB[3]} />
      <f32.mul />
      <f32.add />
      <f32.store />
    </Func>
  )
}

export function Mat2Rotate() {
  const $out = <param.i32 />
  const $a = <param.i32 />
  const $rad = <param.f32 />

  const $valuesA = Array(4)
    .fill(0)
    .map(() => <local.f32 />)

  const $s = <local.f32 />
  const $c = <local.f32 />
  return (
    <Func params={[$out, $a, $rad]}>
      {$valuesA.map((i, k) => (
        <Fragment>
          <Offset ptr={$a} offset={k} stride={4} />
          <f32.load />
          <local.set var={i} />
        </Fragment>
      ))}
      <local.get var={$rad} />
      <Call fn={sin} />
      <local.set var={$s} />

      <local.get var={$rad} />
      <Call fn={cos} />
      <local.set var={$c} />

      <Offset ptr={$out} offset={0} stride={4} />
      <local.get var={$valuesA[0]} />
      <local.get var={$c} />
      <f32.mul />
      <local.get var={$valuesA[2]} />
      <local.get var={$s} />
      <f32.mul />
      <f32.add />
      <f32.store />
      <Offset ptr={$out} offset={1} stride={4} />
      <local.get var={$valuesA[1]} />
      <local.get var={$c} />
      <f32.mul />
      <local.get var={$valuesA[3]} />
      <local.get var={$s} />
      <f32.mul />
      <f32.add />
      <f32.store />

      <Offset ptr={$out} offset={2} stride={4} />
      <local.get var={$valuesA[0]} />
      <local.get var={$s} />
      <f32.neg />
      <f32.mul />
      <local.get var={$c} />
      <local.get var={$valuesA[2]} />
      <f32.mul />
      <f32.add />
      <f32.store />

      <Offset ptr={$out} offset={3} stride={4} />
      <local.get var={$valuesA[1]} />
      <local.get var={$s} />
      <f32.neg />
      <f32.mul />
      <local.get var={$valuesA[3]} />
      <local.get var={$c} />
      <f32.mul />
      <f32.add />
      <f32.store />
    </Func>
  )
}

export function Mat2Scale() {
  const $out = <param.i32 />
  const $a = <param.i32 />
  const $v = <param.i32 />

  const $valuesA = Array(4)
    .fill(0)
    .map(() => <local.f32 />)
  const $valuesV = Array(2)
    .fill(0)
    .map(() => <local.f32 />)

  return (
    <Func params={[$out, $a, $v]}>
      {$valuesA.map((i, k) => (
        <Fragment>
          <Offset ptr={$a} offset={k} stride={4} />
          <f32.load />
          <local.set var={i} />
        </Fragment>
      ))}
      {$valuesV.map((i, k) => (
        <Fragment>
          <Offset ptr={$v} offset={k} stride={4} />
          <f32.load />
          <local.set var={i} />
        </Fragment>
      ))}

      <Offset ptr={$out} offset={0} stride={4} />
      <local.get var={$valuesA[0]} />
      <local.get var={$valuesV[0]} />
      <f32.mul />
      <f32.store />

      <Offset ptr={$out} offset={1} stride={4} />
      <local.get var={$valuesA[1]} />
      <local.get var={$valuesV[0]} />
      <f32.mul />
      <f32.store />

      <Offset ptr={$out} offset={2} stride={4} />
      <local.get var={$valuesA[2]} />
      <local.get var={$valuesV[1]} />
      <f32.mul />
      <f32.store />

      <Offset ptr={$out} offset={3} stride={4} />
      <local.get var={$valuesA[3]} />
      <local.get var={$valuesV[1]} />
      <f32.mul />
      <f32.store />
    </Func>
  )
}

export function Mat2FromRotation() {
  const $out = <param.i32 />
  const $rad = <param.f32 />

  const $s = <local.f32 />
  const $c = <local.f32 />
  return (
    <Func params={[$out, $rad]}>
      <local.get var={$rad} />
      <Call fn={sin} />
      <local.set var={$s} />

      <local.get var={$rad} />
      <Call fn={cos} />
      <local.set var={$c} />

      <Offset ptr={$out} offset={0} stride={4} />
      <local.get var={$c} />
      <f32.store />

      <Offset ptr={$out} offset={1} stride={4} />
      <local.get var={$s} />
      <f32.store />

      <Offset ptr={$out} offset={2} stride={4} />
      <local.get var={$s} />
      <f32.neg />
      <f32.store />

      <Offset ptr={$out} offset={3} stride={4} />
      <local.get var={$c} />
      <f32.store />
    </Func>
  )
}

export function Mat2FromScaling() {
  const $out = <param.i32 />
  const $v = <param.i32 />

  return (
    <Func params={[$out, $v]}>
      <Offset ptr={$out} offset={0} stride={4} />
      <Offset ptr={$v} offset={0} stride={4} />
      <f32.load />
      <f32.store />

      <Offset ptr={$out} offset={1} stride={4} />
      <f32.const value={0} />
      <f32.store />

      <Offset ptr={$out} offset={2} stride={4} />
      <f32.const value={0} />
      <f32.store />

      <Offset ptr={$out} offset={3} stride={4} />
      <Offset ptr={$v} offset={1} stride={4} />
      <f32.load />
      <f32.store />
    </Func>
  )
}

export function Mat2Frob() {
  const $out = <param.i32 />
  const $ret = <result.f32 />
  return (
    <Func params={[$out]} ret={$ret}>
      {Array(4)
        .fill(0)
        .map((_, k) => {
          return (
            <Fragment>
              <Offset ptr={$out} offset={k} stride={4} />
              <f32.load />
              <Offset ptr={$out} offset={k} stride={4} />
              <f32.load />
              <f32.mul />
            </Fragment>
          )
        })}
      <f32.add />
      <f32.add />
      <f32.add />

      <f32.sqrt />
    </Func>
  )
}

// TODO
// export function Mat2LDU() {}

export function Mat2Add() {
  const $out = <param.i32 />
  const $a = <param.i32 />
  const $b = <param.i32 />
  return (
    <Func params={[$out, $a, $b]}>
      {Array(4)
        .fill(0)
        .map((_, k) => {
          return (
            <Fragment>
              <Offset ptr={$out} offset={k} stride={4} />
              <Offset ptr={$a} offset={k} stride={4} />
              <f32.load />
              <Offset ptr={$b} offset={k} stride={4} />
              <f32.load />
              <f32.add />
              <f32.store />
            </Fragment>
          )
        })}
    </Func>
  )
}

export function Mat2Subtract() {
  const $out = <param.i32 />
  const $a = <param.i32 />
  const $b = <param.i32 />
  return (
    <Func params={[$out, $a, $b]}>
      {Array(4)
        .fill(0)
        .map((_, k) => {
          return (
            <Fragment>
              <Offset ptr={$out} offset={k} stride={4} />
              <Offset ptr={$a} offset={k} stride={4} />
              <f32.load />
              <Offset ptr={$b} offset={k} stride={4} />
              <f32.load />
              <f32.sub />
              <f32.store />
            </Fragment>
          )
        })}
    </Func>
  )
}

export function Mat2ExactEquals() {
  const $a = <param.i32 />
  const $b = <param.i32 />
  const $ret = <result.i32 />
  return (
    <Func params={[$a, $b]} ret={$ret}>
      {Array(4)
        .fill(0)
        .map((_, k) => {
          return (
            <Fragment>
              <Offset ptr={$a} offset={k} stride={4} />
              <f32.load />
              <Offset ptr={$b} offset={k} stride={4} />
              <f32.load />
              <f32.eq />
            </Fragment>
          )
        })}
      <i32.and />
      <i32.and />
      <i32.and />
    </Func>
  )
}

export function Mat2Equals() {
  const $a = <param.i32 />
  const $b = <param.i32 />
  const $ret = <result.i32 />
  return (
    <Func params={[$a, $b]} ret={$ret}>
      {Array(4)
        .fill(0)
        .map((_, k) => {
          return (
            <Fragment>
              <Offset ptr={$a} offset={k} stride={4} />
              <f32.load />
              <Offset ptr={$b} offset={k} stride={4} />
              <f32.load />
              <f32.sub />
              <f32.abs />

              <f32.const value={1} />
              <Offset ptr={$a} offset={k} stride={4} />
              <f32.load />
              <Offset ptr={$b} offset={k} stride={4} />
              <f32.load />
              <f32.max />
              <f32.max />
              <Epsilon />
              <f32.mul />
              <f32.le />
            </Fragment>
          )
        })}
      <i32.and />
      <i32.and />
      <i32.and />
    </Func>
  )
}

export function Mat2MultiplyScalar() {
  const $out = <param.i32 />
  const $a = <param.i32 />
  const $b = <param.f32 />
  return (
    <Func params={[$out, $a, $b]}>
      {Array(4)
        .fill(0)
        .map((_, k) => {
          return (
            <Fragment>
              <Offset ptr={$out} offset={k} stride={4} />
              <Offset ptr={$a} offset={k} stride={4} />
              <f32.load />
              <local.get var={$b} />
              <f32.mul />
              <f32.store />
            </Fragment>
          )
        })}
    </Func>
  )
}

export function Mat2MultiplyScalarAndAdd() {
  const $out = <param.i32 />
  const $a = <param.i32 />
  const $b = <param.i32 />
  const $scale = <param.f32 />
  return (
    <Func params={[$out, $a, $b, $scale]}>
      {Array(4)
        .fill(0)
        .map((_, k) => {
          return (
            <Fragment>
              <Offset ptr={$out} offset={k} stride={4} />
              <Offset ptr={$a} offset={k} stride={4} />
              <f32.load />
              <Offset ptr={$b} offset={k} stride={4} />
              <f32.load />
              <local.get var={$scale} />
              <f32.mul />
              <f32.add />

              <f32.store />
            </Fragment>
          )
        })}
    </Func>
  )
}

export function Mat2MultiplyScalarAndAddSimd() {
  const $out = <param.i32 />
  const $a = <param.i32 />
  const $b = <param.i32 />
  const $scale = <param.i32 />
  return (
    <Func params={[$out, $a, $b, $scale]}>
      <local.get var={$out} />

      <local.get var={$a} />
      <v128.load />

      <local.get var={$b} />
      <v128.load />
      <local.get var={$scale} />
      <v128.load />
      <f32x4.mul />

      <f32x4.add />

      <v128.store />
    </Func>
  )
}
