import { expect, test } from "vitest"
import init from "../wasm/add"

test("Add", () => {
  const { Add } = init()
  expect(Add(1, 2)).toBe(3)
  expect(Add(11, 2)).toBe(13)
  expect(Add(1, 12)).toBe(13)
})
