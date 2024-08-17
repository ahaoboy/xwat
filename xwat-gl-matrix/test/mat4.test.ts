import { expect, test } from "vitest"
import init from "../wasm/index"

test("Mat4 create", () => {
  const { mat4 } = init()
  const v = mat4.create()
  const v2 = mat4.clone(v)
  expect(mat4.toValues(v)).toEqual([
    1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1,
  ])
  expect(mat4.toValues(v2)).toEqual([
    1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1,
  ])
})
test("Mat4 multiply", () => {
  const { mat4 } = init()
  const a = mat4.create()
  const b = mat4.create()
  const out = mat4.create()
  mat4.multiply(out, a, b)
  expect(mat4.toValues(out)).toEqual([
    1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1,
  ])

  mat4.set(a, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16)
  mat4.set(b, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1)
  mat4.multiply(out, a, b)
  expect(mat4.toValues(out)).toEqual([
    386, 444, 502, 560, 274, 316, 358, 400, 162, 188, 214, 240, 50, 60, 70, 80,
  ])
})
