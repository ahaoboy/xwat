import { createWasm } from "@xwat/wabt"
import { expect, test, vi } from "vitest"
import init from "../wasm/index"

test("Invert", async () => {
  const mod = await init()
  const { rgba, memory } = mod
  const w = 2
  const h = 2
  const pixels = w * h * 4

  const out = rgba.create(w, h)
  const img = rgba.fromColor(w, h, [1, 2, 3, 4])
  rgba.invert(out, img)
  const r = new Uint8Array(memory.buffer.slice(out.ptr, out.ptr + pixels))
  expect([...r]).toEqual([
    254, 253, 252, 4, 254, 253, 252, 4, 254, 253, 252, 4, 254, 253, 252, 4,
  ])
})
