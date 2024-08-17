import { createWasm } from "@xwat/wabt"
import { expect, test, vi } from "vitest"
import init from "../wasm/index"

test("Gray", async () => {
  const { rgba } = await init()
  const w = 2
  const h = 2
  const img = rgba.fromColor(w, h, [1, 2, 3, 4])
  const out = rgba.create(w, h)
  rgba.gray(out, img)
  expect([...rgba.toValues(out)]).toEqual([
    2, 2, 2, 4, 2, 2, 2, 4, 2, 2, 2, 4, 2, 2, 2, 4,
  ])
})
test("Gray overflow", async () => {
  const { rgba } = await init()
  const w = 2
  const h = 2
  const img = rgba.fromColor(w, h, [255, 0, 255, 255])
  const out = rgba.create(w, h)
  rgba.gray(out, img)
  expect([...rgba.toValues(out)]).toEqual([
    170, 170, 170, 255, 170, 170, 170, 255, 170, 170, 170, 255, 170, 170, 170,
    255,
  ])
})
