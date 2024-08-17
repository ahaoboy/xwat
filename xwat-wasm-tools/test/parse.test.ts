import { expect } from "vitest"
import { test } from "vitest"
import { parse } from ".."

test("parse", () => {
  const bin = parse("(module)")
  expect([...bin]).toEqual([0, 97, 115, 109, 1, 0, 0, 0])
})
