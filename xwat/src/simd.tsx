import {
  f32x4_op0,
  f64x2_op0,
  i16x8_op0,
  i32x4_op0,
  i8x16_op0,
  v128_op0,
} from "./const"
import { createOp0 } from "./op"

export const v128 = {
  ...createOp0("v128", v128_op0),
  const(
    prop: {
      type: "f32x4" | "i32x4" | "i8x16"
      value: number[]
    },
    children: Node[] = [],
  ) {
    return {
      op: "v128.const",
      prop,
      children,
    }
  },
  load(prop = {}, children: Node[] = []) {
    return {
      op: "v128.load",
      prop,
      children,
    }
  },
  store(prop = {}, children: Node[] = []) {
    return {
      op: "v128.store",
      prop,
      children,
    }
  },
  load8x8_u(prop = {}, children: Node[] = []) {
    return {
      op: "v128.load8x8_u",
      prop,
      children,
    }
  },
}

export const i8x16 = createOp0("i8x16", i8x16_op0)
export const i16x8 = createOp0("i16x8", i16x8_op0)
export const i32x4 = createOp0("i32x4", i32x4_op0)
export const f32x4 = createOp0("f32x4", f32x4_op0)
export const f64x2 = createOp0("f64x2", f64x2_op0)
