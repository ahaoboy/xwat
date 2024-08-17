import init from "./gl-matrix"

export const Vec2Tag = Symbol("Vec2Tag")
export const Mat2Tag = Symbol("Mat2Tag")
export const Mat4Tag = Symbol("Mat4Tag")

export type Vec2 = {
  ptr: number
  tag: typeof Vec2Tag
}

export type Mat4 = {
  ptr: number
  tag: typeof Mat4Tag
}

export type Mat2 = {
  ptr: number
  tag: typeof Mat2Tag
}

export default () => {
  let globalPtr = 0
  const {
    memory,
    Add2,
    Subtract2,
    Multiply2,
    Divide2,
    Ceil2,
    Floor2,
    Nearest2,
    Min2,
    Max2,
    Scale2,
    ScaleAndAdd2,
    Distance2,
    SquaredDistance2,
    Length2,
    SquaredLength2,
    Inverse2,
    Negate2,
    Clone2,
    Clone4,
    Clone16,
    Mat4Multiply,
    Mat2Transpose,
    Mat2Invert,
    Mat2Adjoint,
    Mat2Determinant,
    Mat2Multiply,
    Mat2Rotate,
    Mat2Scale,
    Mat2FromRotation,
    Mat2FromScaling,
    Mat2Frob,
    Mat2Add,
    Mat2Subtract,
    Mat2ExactEquals,
    Mat2Equals,
    Mat2MultiplyScalar,
    Mat2MultiplyScalarAndAdd,
    Mat2MultiplyScalarAndAddSimd,
  } = init({
    env: {
      sin: Math.sin,
      cos: Math.cos,
      tan: Math.tan,
    },
  })

  const dv = new DataView(memory.buffer)

  function store1(p: number, v0: number) {
    dv.setFloat32(p, v0, true)
  }

  function store2(p: number, v0: number, v1: number) {
    dv.setFloat32(p, v0, true)
    dv.setFloat32(p + 4, v1, true)
  }

  function store4(p: number, v0: number, v1: number, v2: number, v3: number) {
    dv.setFloat32(p, v0, true)
    dv.setFloat32(p + 4, v1, true)
    dv.setFloat32(p + 8, v2, true)
    dv.setFloat32(p + 12, v3, true)
  }

  function store16(
    p: number,
    v0: number,
    v1: number,
    v2: number,
    v3: number,
    v4: number,
    v5: number,
    v6: number,
    v7: number,
    v8: number,
    v9: number,
    v10: number,
    v11: number,
    v12: number,
    v13: number,
    v14: number,
    v15: number,
  ) {
    dv.setFloat32(p, v0, true)
    dv.setFloat32(p + 4, v1, true)
    dv.setFloat32(p + 8, v2, true)
    dv.setFloat32(p + 12, v3, true)
    dv.setFloat32(p + 16, v4, true)
    dv.setFloat32(p + 20, v5, true)
    dv.setFloat32(p + 24, v6, true)
    dv.setFloat32(p + 28, v7, true)
    dv.setFloat32(p + 32, v8, true)
    dv.setFloat32(p + 36, v9, true)
    dv.setFloat32(p + 40, v10, true)
    dv.setFloat32(p + 44, v11, true)
    dv.setFloat32(p + 48, v12, true)
    dv.setFloat32(p + 52, v13, true)
    dv.setFloat32(p + 56, v14, true)
    dv.setFloat32(p + 60, v15, true)
  }
  function load(p: number): number {
    return dv.getFloat32(p, true)
  }

  const Vec2Offset = 4 * 2
  const vec2 = {
    create(): Vec2 {
      const v = { ptr: globalPtr, tag: Vec2Tag } as const
      store2(globalPtr, 0, 0)
      globalPtr += Vec2Offset
      return v
    },
    clone(v: Vec2): Vec2 {
      const v2 = { ptr: globalPtr, tag: Vec2Tag } as const
      Clone2(v2.ptr, v.ptr)
      globalPtr += Vec2Offset
      return v2
    },
    copy(out: Vec2, a: Vec2): Vec2 {
      Clone2(out.ptr, a.ptr)
      return out
    },
    fromValues(x: number, y: number): Vec2 {
      const v2 = { ptr: globalPtr, tag: Vec2Tag } as const
      store2(globalPtr, x, y)
      globalPtr += Vec2Offset
      return v2
    },
    toValues(v: Vec2) {
      return [load(v.ptr), load(v.ptr + 4)]
    },

    set(out: Vec2, x: number, y: number) {
      store2(out.ptr, x, y)
    },
    add(out: Vec2, a: Vec2, b: Vec2) {
      Add2(out.ptr, a.ptr, b.ptr)
      return out
    },
    subtract(out: Vec2, a: Vec2, b: Vec2) {
      Subtract2(out.ptr, a.ptr, b.ptr)
      return out
    },
    multiply(out: Vec2, a: Vec2, b: Vec2) {
      Multiply2(out.ptr, a.ptr, b.ptr)
      return out
    },
    divide(out: Vec2, a: Vec2, b: Vec2) {
      Divide2(out.ptr, a.ptr, b.ptr)
      return out
    },
    min(out: Vec2, a: Vec2, b: Vec2) {
      Min2(out.ptr, a.ptr, b.ptr)
      return out
    },
    max(out: Vec2, a: Vec2, b: Vec2) {
      Max2(out.ptr, a.ptr, b.ptr)
      return out
    },
    scale(out: Vec2, a: Vec2, b: number) {
      Scale2(out.ptr, a.ptr, b)
      return out
    },
    ceil(out: Vec2, a: Vec2) {
      Ceil2(out.ptr, a.ptr)
      return out
    },
    floor(out: Vec2, a: Vec2) {
      Floor2(out.ptr, a.ptr)
      return out
    },
    round(out: Vec2, a: Vec2) {
      Nearest2(out.ptr, a.ptr)
      return out
    },
    scaleAndAdd(out: Vec2, a: Vec2, b: Vec2, scale: number) {
      ScaleAndAdd2(out.ptr, a.ptr, b.ptr, scale)
      return out
    },
    distance(a: Vec2, b: Vec2) {
      return Distance2(a.ptr, b.ptr)
    },
    squaredDistance(a: Vec2, b: Vec2) {
      return SquaredDistance2(a.ptr, b.ptr)
    },
    length(a: Vec2) {
      return Length2(a.ptr)
    },
    squaredLength(a: Vec2) {
      return SquaredLength2(a.ptr)
    },
    inverse(out: Vec2, a: Vec2) {
      return Inverse2(out.ptr, a.ptr)
    },
    negate(out: Vec2, a: Vec2) {
      return Negate2(out.ptr, a.ptr)
    },
  }

  const Mat4Offset = 4 * 16
  const Mat2Offset = 4 * 4
  const mat4 = {
    create(): Mat4 {
      const v = { ptr: globalPtr, tag: Mat4Tag } as const
      store16(globalPtr, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
      globalPtr += Mat4Offset
      return v
    },
    clone(v: Mat4): Mat4 {
      const out = { ptr: globalPtr, tag: Mat4Tag } as const
      Clone16(out.ptr, v.ptr)
      globalPtr += Mat4Offset
      return out
    },
    copy(out: Mat4, a: Mat4): Mat4 {
      Clone16(out.ptr, a.ptr)
      return out
    },
    fromValues(
      m00: number,
      m01: number,
      m02: number,
      m03: number,
      m10: number,
      m11: number,
      m12: number,
      m13: number,
      m20: number,
      m21: number,
      m22: number,
      m23: number,
      m30: number,
      m31: number,
      m32: number,
      m33: number,
    ): Vec2 {
      const v2 = { ptr: globalPtr, tag: Vec2Tag } as const
      store16(
        globalPtr,
        m00,
        m01,
        m02,
        m03,
        m10,
        m11,
        m12,
        m13,
        m20,
        m21,
        m22,
        m23,
        m30,
        m31,
        m32,
        m33,
      )
      globalPtr += Mat4Offset
      return v2
    },
    set(
      out: Mat4,
      m00: number,
      m01: number,
      m02: number,
      m03: number,
      m10: number,
      m11: number,
      m12: number,
      m13: number,
      m20: number,
      m21: number,
      m22: number,
      m23: number,
      m30: number,
      m31: number,
      m32: number,
      m33: number,
    ) {
      store16(
        out.ptr,
        m00,
        m01,
        m02,
        m03,
        m10,
        m11,
        m12,
        m13,
        m20,
        m21,
        m22,
        m23,
        m30,
        m31,
        m32,
        m33,
      )
    },
    toValues(v: Mat4) {
      return [
        load(v.ptr),
        load(v.ptr + 4),
        load(v.ptr + 8),
        load(v.ptr + 12),
        load(v.ptr + 16),
        load(v.ptr + 20),
        load(v.ptr + 24),
        load(v.ptr + 28),
        load(v.ptr + 32),
        load(v.ptr + 36),
        load(v.ptr + 40),
        load(v.ptr + 44),
        load(v.ptr + 48),
        load(v.ptr + 52),
        load(v.ptr + 56),
        load(v.ptr + 60),
      ]
    },
    identity(out: Mat4) {
      store16(out.ptr, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
      return out
    },
    multiply(out: Mat4, a: Mat4, b: Mat4) {
      Mat4Multiply(out.ptr, a.ptr, b.ptr)
    },
  }

  const mat2 = {
    create(): Mat2 {
      const v = { ptr: globalPtr, tag: Mat2Tag } as const
      store4(globalPtr, 1, 0, 0, 1)
      globalPtr += Mat2Offset
      return v
    },
    clone(v: Mat2): Mat2 {
      const out = { ptr: globalPtr, tag: Mat2Tag } as const
      Clone4(out.ptr, v.ptr)
      globalPtr += Mat2Offset
      return out
    },
    copy(out: Mat2, a: Mat2): Mat2 {
      Clone4(out.ptr, a.ptr)
      return out
    },
    identity(out: Mat2): Mat2 {
      store4(out.ptr, 1, 0, 0, 1)
      return out
    },
    fromValues(m00: number, m01: number, m10: number, m11: number) {
      const out = { ptr: globalPtr, tag: Mat2Tag } as const
      store4(globalPtr, m00, m01, m10, m11)
      globalPtr += Mat2Offset
      return out
    },
    set(out: Mat2, m00: number, m01: number, m10: number, m11: number) {
      store4(out.ptr, m00, m01, m10, m11)
      return out
    },
    toValues(v: Mat2) {
      return [load(v.ptr), load(v.ptr + 4), load(v.ptr + 8), load(v.ptr + 12)]
    },
    transpose(out: Mat2, a: Mat2) {
      Mat2Transpose(out.ptr, a.ptr)
      return out
    },
    invert(out: Mat2, a: Mat2) {
      Mat2Invert(out.ptr, a.ptr)
      return out
    },
    adjoint(out: Mat2, a: Mat2) {
      Mat2Adjoint(out.ptr, a.ptr)
      return out
    },
    determinant(a: Mat2): number {
      return Mat2Determinant(a.ptr)
    },

    rotate(out: Mat2, a: Mat2, rad: number) {
      Mat2Rotate(out.ptr, a.ptr, rad)
      return out
    },
    scale(out: Mat2, a: Mat2, v: Vec2) {
      Mat2Scale(out.ptr, a.ptr, v.ptr)
      return out
    },
    fromRotation(out: Mat2, rad: number) {
      Mat2FromRotation(out.ptr, rad)
      return out
    },
    str(out: Mat2) {
      const v = mat2.toValues(out)
      return `mat2("${v.join(", ")}")`
    },
    fromScaling(out: Mat2, v: Vec2) {
      Mat2FromScaling(out.ptr, v.ptr)
      return out
    },
    frob(a: Mat2) {
      return Mat2Frob(a.ptr)
    },
    multiply(out: Mat2, a: Mat2, b: Mat2) {
      Mat2Multiply(out.ptr, a.ptr, b.ptr)
      return out
    },
    mul(out: Mat2, a: Mat2, b: Mat2) {
      Mat2Multiply(out.ptr, a.ptr, b.ptr)
      return out
    },
    add(out: Mat2, a: Mat2, b: Mat2) {
      Mat2Add(out.ptr, a.ptr, b.ptr)
      return out
    },
    subtract(out: Mat2, a: Mat2, b: Mat2) {
      Mat2Subtract(out.ptr, a.ptr, b.ptr)
      return out
    },
    sub(out: Mat2, a: Mat2, b: Mat2) {
      Mat2Subtract(out.ptr, a.ptr, b.ptr)
      return out
    },
    exactEquals(a: Mat2, b: Mat2) {
      return !!Mat2ExactEquals(a.ptr, b.ptr)
    },
    equals(a: Mat2, b: Mat2) {
      return !!Mat2Equals(a.ptr, b.ptr)
    },
    multiplyScalar(out: Mat2, a: Mat2, scale: number) {
      Mat2MultiplyScalar(out.ptr, a.ptr, scale)
      return out
    },
    multiplyScalarAndAdd(out: Mat2, a: Mat2, b: Mat2, scale: number) {
      Mat2MultiplyScalarAndAdd(out.ptr, a.ptr, b.ptr, scale)
      return out
    },
    multiplyScalarAndAddSimd(out: Mat2, a: Mat2, b: Mat2, scale: Mat2) {
      Mat2MultiplyScalarAndAddSimd(out.ptr, a.ptr, b.ptr, scale.ptr)
      return out
    },
  }
  return {
    mat2,
    vec2,
    mat4,
  }
}
