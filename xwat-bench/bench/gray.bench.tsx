import LenaWasm from "@xwat/lena/wasm/index"
import sharp from "sharp"
import { bench, describe, } from "vitest"

function jsGray(
  out: Uint8Array,
  img: Uint8Array,
  width: number,
  height: number,
) {
  const pixels = width * height * 4
  for (let i = 0; i < pixels; i += 4) {
    const g = ((img[i] + img[i + 1] + img[i + 2]) / 3) | 0
    out[i] = g
    out[i + 1] = g
    out[i + 2] = g
    out[i + 3] = img[i + 3]
  }
}

describe("gray", async () => {
  const { rgba } = await LenaWasm()

  const url = "../assets/win.webp"
  const {
    data,
    info: { width, height, channels },
  } = await sharp(url).ensureAlpha().raw().toBuffer({ resolveWithObject: true })

  const rgbaPixels = new Uint8Array(data)
  const jsOut = new Uint8Array(width * height * channels)

  const wasmOut = rgba.create(width, height)
  const wasmImg = rgba.create(width, height)

  rgba.setPixels(wasmImg, rgbaPixels)
  await sharp(rgba.toValues(wasmImg), {
    raw: {
      width,
      height,
      channels,
    },
  }).toFile("./output/raw-gray.png")

  rgba.gray(wasmOut, wasmImg)
  await sharp(rgba.toValues(wasmOut), {
    raw: {
      width,
      height,
      channels,
    },
  }).toFile("./output/wasm-gray.png")
  jsGray(jsOut, rgbaPixels, width, height)
  await sharp(jsOut, {
    raw: {
      width,
      height,
      channels,
    },
  }).toFile("./output/js-gray.png")
  bench("js", () => {
    jsGray(jsOut, rgbaPixels, width, height)
  })

  bench("wasm", () => {
    rgba.gray(wasmOut, wasmImg)
  })
})
