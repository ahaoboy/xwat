import { expect, test } from "vitest"
import init from "../wasm/index"

test("Mat2 create", () => {
  const { mat2 } = init()
  const v = mat2.create()
  const v2 = mat2.clone(v)
  expect(mat2.toValues(v)).toEqual([1, 0, 0, 1])
  expect(mat2.toValues(v2)).toEqual([1, 0, 0, 1])
})
test("Mat2 transpose", () => {
  const { mat2 } = init()
  const a = mat2.create()
  const out = mat2.create()
  mat2.set(a, 1, 2, 3, 4)
  expect(mat2.toValues(a)).toEqual([1, 2, 3, 4])
  mat2.transpose(out, a)
  expect(mat2.toValues(out)).toEqual([1, 3, 2, 4])
})
test("Mat2 invert", () => {
  const { mat2 } = init()
  const a = mat2.create()
  const out = mat2.create()
  mat2.set(a, 1, 2, 3, 4)
  mat2.invert(out, a)
  expect(mat2.toValues(out)).toEqual([-2, 1, 1.5, -0.5])
})
test("Mat2 adjoint", () => {
  const { mat2 } = init()
  const a = mat2.create()
  const out = mat2.create()
  mat2.set(a, 1, 2, 3, 4)
  mat2.adjoint(out, a)
  expect(mat2.toValues(out)).toEqual([4, -2, -3, 1])
})
test("Mat2 determinant", () => {
  const { mat2 } = init()
  const a = mat2.create()
  mat2.set(a, 1, 2, 3, 4)
  const det = mat2.determinant(a)
  expect(det).toEqual(-2)
})
test("Mat2 multiply", () => {
  const { mat2 } = init()
  const a = mat2.create()
  mat2.set(a, 1, 2, 3, 4)
  const b = mat2.create()
  mat2.set(b, 4, 3, 2, 1)
  const out = mat2.create()
  mat2.multiply(out, a, b)
  expect(mat2.toValues(out)).toEqual([13, 20, 5, 8])
})
test("Mat2 rotate", () => {
  const { mat2 } = init()
  const a = mat2.create()
  mat2.set(a, 1, 2, 3, 4)
  const out = mat2.create()
  mat2.rotate(out, a, Math.PI * 0.5)
  expect(mat2.toValues(out)).toEqual([
    3, 4, -1.0000001192092896, -2.000000238418579,
  ])
})
test("Mat2 scale", () => {
  const { mat2, vec2 } = init()
  const a = mat2.create()
  mat2.set(a, 1, 2, 3, 4)
  const v = vec2.create()
  vec2.set(v, 2, 4)
  const out = mat2.create()
  mat2.scale(out, a, v)
  expect(mat2.toValues(out)).toEqual([2, 4, 12, 16])
})

test("Mat2 fromRotation", () => {
  const { mat2 } = init()
  const out = mat2.create()
  mat2.fromRotation(out, Math.PI / 2)
  const r1 = mat2.fromValues(0, 1, -1, 0)
  expect(mat2.equals(out, r1)).toEqual(true)
})

test("Mat2 fromScaling", () => {
  const { mat2, vec2 } = init()
  const out = mat2.create()
  const v = vec2.fromValues(1, 2)
  mat2.fromScaling(out, v)
  expect(mat2.toValues(out)).toEqual([1, 0, 0, 2])
})

test("Mat2 frob", () => {
  const { mat2 } = init()
  const out = mat2.fromValues(0, 0, 3, 4)
  const r = mat2.frob(out)
  expect(r).toEqual(5)
})

// test("Mat2 LDU",  () => {
//   const { mat2, } =  init()
//   const out = mat2.create()
//   mat2.LDU(out, Math.PI / 2)
//   expect(mat2.toValues(out)).toEqual([0, 1, -1, 0])
// })
test("Mat2 add", () => {
  const { mat2 } = init()
  const out = mat2.create()

  const a = mat2.fromValues(1, 2, 3, 4)
  const b = mat2.fromValues(4, 3, 2, 1)
  mat2.add(out, a, b)
  expect(mat2.toValues(out)).toEqual([5, 5, 5, 5])
})

test("Mat2 subtract", () => {
  const { mat2 } = init()
  const out = mat2.create()
  const a = mat2.fromValues(1, 2, 3, 4)
  const b = mat2.fromValues(4, 3, 2, 1)
  mat2.subtract(out, a, b)
  expect(mat2.toValues(out)).toEqual([-3, -1, 1, 3])
})

test("Mat2 exactEquals", () => {
  const { mat2 } = init()
  const a = mat2.fromValues(1, 2, 3, 4)
  const b = mat2.fromValues(1.1, 2, 3, 4)
  expect(mat2.exactEquals(a, b)).toEqual(false)

  mat2.set(b, 1.00000001, 2, 3, 4)
  expect(mat2.exactEquals(a, b)).toEqual(true)

  mat2.set(b, 1.0000001, 2, 3, 4)
  expect(mat2.exactEquals(a, b)).toEqual(false)
})

test("Mat2 equals", () => {
  const { mat2 } = init()
  const a = mat2.fromValues(1, 2, 3, 4)
  const b = mat2.fromValues(4, 3, 2, 1)
  expect(mat2.equals(a, b)).toEqual(false)

  mat2.set(a, 4, 3, 2, 1)
  expect(mat2.equals(a, b)).toEqual(true)
})

test("Mat2 multiplyScalar", () => {
  const { mat2 } = init()
  const out = mat2.create()
  const a = mat2.fromValues(1, 2, 3, 4)
  mat2.multiplyScalar(out, a, 2)
  expect(mat2.toValues(out)).toEqual([2, 4, 6, 8])
})

test("Mat2 multiplyScalarAndAdd", () => {
  const { mat2 } = init()
  const out = mat2.create()
  const a = mat2.fromValues(1, 2, 3, 4)
  const b = mat2.fromValues(4, 3, 2, 1)
  mat2.multiplyScalarAndAdd(out, a, b, 2)
  expect(mat2.toValues(out)).toEqual([9, 8, 7, 6])
})
