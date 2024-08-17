import sharp from "sharp"
import { bench, describe } from "vitest"
import init from "../wasm"

function jsGray(
  rgba: Uint8Array,
  w: number,
  h: number,
  c: number,
  stride: number,
  dist: Uint8Array,
) {
  for (let i = 0; i < w * h * stride; i += stride) {
    for (let k = 0; k < c; k++) {
      dist[i + k] = 255 - rgba[i + k]
    }

    for (let k = c; k < stride; k++) {
      dist[i + k] = rgba[i + k]
    }
  }
}

function getRgba(w: number, h: number, c: [number, number, number, number]) {
  const rgba = new Uint8Array(w * h * 4)
  for (let i = 0; i < w * h; i++) {
    for (let k = 0; k < 4; k++) {
      rgba[i * 4 + k] = c[k]
    }
  }
  return rgba
}

describe("invert", async () => {
  const width = 3840
  const height = 2400
  const channels = 4
  const rgbaPixels = getRgba(width, height, [0, 0, 255, 255])
  await sharp(rgbaPixels, {
    raw: {
      width,
      height,
      channels,
    },
  }).toFile("./output/input.png")
  const { rgba, memory } = await init()
  const input = rgba.create(width, height)
  rgba.setPixels(input, rgbaPixels)
  const output = rgba.create(width, height)

  rgba.invert(input, output)
  const grayBuf = memory.buffer.slice(rgbaPixels.length, rgbaPixels.length * 2)
  await sharp(grayBuf, {
    raw: {
      width,
      height,
      channels,
    },
  }).toFile("./output/wasm.png")

  const jsDist = new Uint8Array(rgbaPixels.length)
  jsGray(rgbaPixels, width, height, 3, 4, jsDist)
  await sharp(jsDist, {
    raw: {
      width,
      height,
      channels,
    },
  }).toFile("./output/js.png")

  bench("js", () => {
    jsGray(rgbaPixels, width, height, 3, 4, jsDist)
  })

  bench("wasm", () => {
    rgba.invert(input, output)
  })
})
