import LenaWasm from "@xwat/lena/wasm/index"
import sharp from "sharp"
import { bench, describe } from "vitest"

function jsInvert(
  out: Uint8Array,
  img: Uint8Array,
  width: number,
  height: number,
) {
  const pixels = width * height * 4
  for (let i = 0; i < pixels; i += 4) {
    out[i] = 255 - img[i]
    out[i + 1] = 255 - img[i + 1]
    out[i + 2] = 255 - img[i + 2]
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
  const wasmOutSimd = rgba.create(width, height)
  const wasmOut64 = rgba.create(width, height)
  const wasmImg = rgba.create(width, height)

  rgba.setPixels(wasmImg, rgbaPixels)
  await sharp(rgba.toValues(wasmImg), {
    raw: {
      width,
      height,
      channels,
    },
  }).toFile("./output/raw-invert.png")

  rgba.invert(wasmOut, wasmImg)
  await sharp(rgba.toValues(wasmOut), {
    raw: {
      width,
      height,
      channels,
    },
  }).toFile("./output/wasm-invert.png")

  rgba.invertSimd(wasmOutSimd, wasmImg)
  await sharp(rgba.toValues(wasmOutSimd), {
    raw: {
      width,
      height,
      channels,
    },
  }).toFile("./output/wasm-invert-simd.png")

  rgba.invert64(wasmOut64, wasmImg)
  await sharp(rgba.toValues(wasmOut64), {
    raw: {
      width,
      height,
      channels,
    },
  }).toFile("./output/wasm-invert-64.png")

  jsInvert(jsOut, rgbaPixels, width, height)
  await sharp(jsOut, {
    raw: {
      width,
      height,
      channels,
    },
  }).toFile("./output/js-invert.png")
  bench("js", () => {
    jsInvert(jsOut, rgbaPixels, width, height)
  })

  bench("wasm", () => {
    rgba.invert(wasmOut, wasmImg)
  })

  bench("wasm-simd", () => {
    rgba.invertSimd(wasmOut, wasmImg)
  })

  bench("wasm-64", () => {
    rgba.invert64(wasmOut, wasmImg)
  })
})
