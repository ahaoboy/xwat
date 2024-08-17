import init from "./lena"

export const RgbaTag = Symbol("RgbaTag")
export const KernelTag = Symbol("KernelTag")

export type Rgba = {
  ptr: number
  width: number
  height: number
  tag: typeof RgbaTag
}

export type Kernel = {
  ptr: number
  width: number
  height: number
  tag: typeof KernelTag
}

const PageSize = 65536
export default async () => {
  let globalPtr = 0
  const { memory, Invert, InvertRgba, InvertRgbaSimd, GrayRgba, InvertRgba64 } =
    await init({
      env: {
        sin: Math.sin,
        cos: Math.cos,
        tan: Math.tan,
        log: console.log,
      },
    })

  let buf = new Uint8Array(memory.buffer)

  function malloc(size: number): number {
    const free = memory.buffer.byteLength - globalPtr
    const ptr = globalPtr
    globalPtr += size
    if (free >= size) {
      return ptr
    }

    const need = size - free
    const n = Math.ceil(
      Math.max(need / PageSize, memory.buffer.byteLength / PageSize),
    )
    memory.grow(n)
    buf = new Uint8Array(memory.buffer)
    return ptr
  }

  function store1(p: number, v0: number) {
    buf[p] = v0
  }

  function store2(p: number, v0: number, v1: number) {
    buf[p] = v0
    buf[p + 1] = v1
  }

  function store4(p: number, v0: number, v1: number, v2: number, v3: number) {
    buf[p] = v0
    buf[p + 1] = v1
    buf[p + 2] = v2
    buf[p + 3] = v3
  }

  function load(p: number): number {
    return buf[p]
  }

  const kernel = {
    create(width: number, height: number): Kernel {
      const ptr = malloc(width * height * 4)
      return {
        ptr,
        width,
        height,
        tag: KernelTag,
      }
    },
  }
  const rgba = {
    create(width: number, height: number): Rgba {
      const ptr = malloc(width * height * 4)
      return {
        ptr,
        width,
        height,
        tag: RgbaTag,
      }
    },
    setPixels(out: Rgba, pixels: number[] | Uint8Array | Uint8ClampedArray) {
      new Uint8Array(memory.buffer).set(pixels, out.ptr)
      return out
    },
    toValues(img: Rgba): Uint8Array {
      const size = img.width * img.height * 4
      return new Uint8Array(memory.buffer.slice(img.ptr, img.ptr + size))
    },
    fromColor(
      width: number,
      height: number,
      color: [r: number, g: number, b: number, a: number],
    ): Rgba {
      const ptr = globalPtr
      const size = width * height * 4
      globalPtr += size

      for (let i = 0; i < size; i += 4) {
        store4(ptr + i, color[0], color[1], color[2], color[3])
      }

      return {
        ptr,
        width,
        height,
        tag: RgbaTag,
      }
    },
    gray(out: Rgba, img: Rgba) {
      GrayRgba(out.ptr, img.ptr, img.width, img.height)
      return out
    },
    invert(out: Rgba, img: Rgba) {
      InvertRgba(out.ptr, img.ptr, img.height, img.width)
    },
    invertSimd(out: Rgba, img: Rgba) {
      InvertRgbaSimd(out.ptr, img.ptr, img.height, img.width)
    },
    invert64(out: Rgba, img: Rgba) {
      InvertRgba64(out.ptr, img.ptr, img.height, img.width)
    },
  }

  return { rgba, kernel, memory }
}
