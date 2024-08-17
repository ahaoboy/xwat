import {
  $,
  Export,
  Fragment,
  Func,
  Memory,
  Module,
  type Node,
  Nop,
  f32,
  i32,
  local,
  param,
  result,
} from "@xwat/xwat"

function vec_vec_op(n: number, op = <Nop />) {
  const $out = <param.i32 />
  const $a = <param.i32 />

  return (
    <Func params={[$out, $a]}>
      <local.get var={$out} />
      <local.get var={$a} />
      <f32.load />
      {op}
      <f32.store />

      {Array(n - 1)
        .fill(0)
        .map((_, k) => {
          return (
            <Fragment>
              <local.get var={$out} />
              <i32.const value={(k + 1) * 4} />
              <i32.add />
              <local.get var={$a} />
              <i32.const value={(k + 1) * 4} />
              <i32.add />
              <f32.load />
              {op}
              <f32.store />
            </Fragment>
          )
        })}
    </Func>
  )
}

function vec_vec_op_vec(n: number, op: Node) {
  const $out = <param.i32 />
  const $arg1 = <param.i32 />
  const $arg2 = <param.i32 />

  return (
    <Func params={[$out, $arg1, $arg2]}>
      <local.get var={$out} />
      <local.get var={$arg1} />
      <f32.load />
      <local.get var={$arg2} />
      <f32.load />
      {op}
      <f32.store />

      {Array(n - 1)
        .fill(0)
        .map((_, k) => {
          return (
            <Fragment>
              <local.get var={$out} />
              <i32.const value={4} />
              <i32.add />
              <local.get var={$arg1} />
              <i32.const value={4} />
              <i32.add />
              <f32.load />
              <local.get var={$arg2} />
              <i32.const value={4} />
              <i32.add />
              <f32.load />
              {op}
              <f32.store />
            </Fragment>
          )
        })}
    </Func>
  )
}
export function Clone1() {
  return vec_vec_op(1)
}

export function Clone2() {
  return vec_vec_op(2)
}
export function Clone4() {
  return vec_vec_op(4)
}

export function Clone16() {
  return vec_vec_op(16)
}

export function Add2() {
  return vec_vec_op_vec(2, <f32.add />)
}

export function Subtract2() {
  return vec_vec_op_vec(2, <f32.sub />)
  // return vec2_op_vec2(<f32.sub />)
}

export function Multiply2() {
  return vec_vec_op_vec(2, <f32.mul />)
  // return vec2_op_vec2(<f32.mul />)
}

export function Divide2() {
  return vec_vec_op_vec(2, <f32.div />)
  // return vec2_op_vec2(<f32.div />)
}

export function Min2() {
  return vec_vec_op_vec(2, <f32.min />)
  // return vec2_op_vec2(<f32.min />)
}
export function Max2() {
  return vec_vec_op_vec(2, <f32.max />)
  // return vec2_op_vec2(<f32.max />)
}

export function Ceil2() {
  return vec_vec_op(2, <f32.ceil />)
}

export function Nearest2() {
  return vec_vec_op(2, <f32.nearest />)
}

export function Floor2() {
  return vec_vec_op(2, <f32.floor />)
}

export function Scale2() {
  const $out = <param.i32 />
  const $arg1 = <param.i32 />
  const $arg2 = <param.f32 />

  return (
    <Func params={[$out, $arg1, $arg2]}>
      <local.get var={$out} />
      <local.get var={$arg1} />
      <f32.load />
      <local.get var={$arg2} />
      <f32.mul />
      <f32.store />

      <local.get var={$out} />
      <i32.const value={4} />
      <i32.add />
      <local.get var={$arg1} />
      <i32.const value={4} />
      <i32.add />
      <f32.load />
      <local.get var={$arg2} />
      <f32.mul />
      <f32.store />
    </Func>
  )
}

export function ScaleAndAdd2() {
  const $out = <param.i32 />
  const $arg1 = <param.i32 />
  const $arg2 = <param.i32 />
  const $arg3 = <param.f32 />

  return (
    <Func params={[$out, $arg1, $arg2, $arg3]}>
      <local.get var={$out} />
      <local.get var={$arg1} />
      <f32.load />
      <local.get var={$arg2} />
      <f32.load />
      <f32.mul />
      <local.get var={$arg3} />
      <f32.add />
      <f32.store />
      <local.get var={$out} />
      <i32.const value={4} />
      <i32.add />
      <local.get var={$arg1} />
      <i32.const value={4} />
      <i32.add />
      <f32.load />
      <local.get var={$arg2} />
      <i32.const value={4} />
      <i32.add />
      <f32.load />
      <f32.mul />
      <local.get var={$arg3} />
      <f32.add />
      <f32.store />
    </Func>
  )
}

export function Distance2() {
  const $a = <param.i32 />
  const $b = <param.i32 />
  const $ret = <result.f32 />
  const $dx = <local.f32 />
  const $dy = <local.f32 />
  return (
    <Func params={[$a, $b]} ret={$ret}>
      <local.get var={$a} />
      <f32.load />
      <local.get var={$b} />
      <f32.load />
      <f32.sub />
      <local.tee var={$dx} />
      <local.get var={$dx} />
      <f32.mul />

      <local.get var={$a} />
      <i32.const value={4} />
      <i32.add />
      <f32.load />
      <local.get var={$b} />
      <i32.const value={4} />
      <i32.add />
      <f32.load />
      <f32.sub />
      <local.tee var={$dy} />
      <local.get var={$dy} />
      <f32.mul />

      <f32.add />
      <f32.sqrt />
    </Func>
  )
}

export function SquaredDistance2() {
  const $a = <param.i32 />
  const $b = <param.i32 />
  const $ret = <result.f32 />
  const $dx = <local.f32 />
  const $dy = <local.f32 />
  return (
    <Func params={[$a, $b]} ret={$ret}>
      <local.get var={$a} />
      <f32.load />
      <local.get var={$b} />
      <f32.load />
      <f32.sub />
      <local.tee var={$dx} />
      <local.get var={$dx} />
      <f32.mul />

      <local.get var={$a} />
      <i32.const value={4} />
      <i32.add />
      <f32.load />
      <local.get var={$b} />
      <i32.const value={4} />
      <i32.add />
      <f32.load />
      <f32.sub />
      <local.tee var={$dy} />
      <local.get var={$dy} />
      <f32.mul />

      <f32.add />
    </Func>
  )
}

export function Length2() {
  const $a = <param.i32 />
  const $ret = <result.f32 />
  return (
    <Func params={[$a]} ret={$ret}>
      <local.get var={$a} />
      <f32.load />
      <local.get var={$a} />
      <f32.load />
      <f32.mul />

      <local.get var={$a} />
      <i32.const value={4} />
      <i32.add />
      <f32.load />
      <local.get var={$a} />
      <i32.const value={4} />
      <i32.add />
      <f32.load />
      <f32.mul />

      <f32.add />
      <f32.sqrt />
    </Func>
  )
}

export function SquaredLength2() {
  const $a = <param.i32 />
  const $ret = <result.f32 />
  return (
    <Func params={[$a]} ret={$ret}>
      <local.get var={$a} />
      <f32.load />
      <local.get var={$a} />
      <f32.load />
      <f32.mul />

      <local.get var={$a} />
      <i32.const value={4} />
      <i32.add />
      <f32.load />
      <local.get var={$a} />
      <i32.const value={4} />
      <i32.add />
      <f32.load />
      <f32.mul />

      <f32.add />
    </Func>
  )
}

export function Negate2() {
  const $out = <param.i32 />
  const $a = <param.i32 />
  return (
    <Func params={[$out, $a]}>
      <local.get var={$out} />
      <local.get var={$a} />
      <f32.load />
      <f32.neg />
      <f32.store />

      <local.get var={$out} />
      <i32.const value={4} />
      <i32.add />
      <local.get var={$a} />
      <i32.const value={4} />
      <i32.add />
      <f32.load />
      <f32.neg />
      <f32.store />
    </Func>
  )
}

export function Inverse2() {
  const $out = <param.i32 />
  const $a = <param.i32 />
  return (
    <Func params={[$out, $a]}>
      <local.get var={$out} />
      <f32.const value={1} />
      <local.get var={$a} />
      <f32.load />
      <f32.div />
      <f32.store />

      <local.get var={$out} />
      <i32.const value={4} />
      <i32.add />
      <f32.const value={1} />
      <local.get var={$a} />
      <i32.const value={4} />
      <i32.add />
      <f32.load />
      <f32.div />
      <f32.store />
    </Func>
  )
}
