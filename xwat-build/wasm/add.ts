export type Instance = WebAssembly.Instance & {
  exports: {
    Add(arg0: number, arg1: number): number
  }
}

export type Env = WebAssembly.Imports & {}

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"

// Use a lookup table to find the index.
const lookup = typeof Uint8Array === "undefined" ? [] : new Uint8Array(256)
for (let i = 0; i < chars.length; i++) {
  lookup[chars.charCodeAt(i)] = i
}

function decode(base64: string): ArrayBuffer {
  let bufferLength = base64.length * 0.75
  const len = base64.length
  let p = 0

  if (base64[base64.length - 1] === "=") {
    bufferLength--
    if (base64[base64.length - 2] === "=") {
      bufferLength--
    }
  }

  const arraybuffer = new ArrayBuffer(bufferLength)
  const bytes = new Uint8Array(arraybuffer)

  for (let i = 0; i < len; i += 4) {
    const encoded1 = lookup[base64.charCodeAt(i)]
    const encoded2 = lookup[base64.charCodeAt(i + 1)]
    const encoded3 = lookup[base64.charCodeAt(i + 2)]
    const encoded4 = lookup[base64.charCodeAt(i + 3)]

    bytes[p++] = (encoded1 << 2) | (encoded2 >> 4)
    bytes[p++] = ((encoded2 & 15) << 4) | (encoded3 >> 2)
    bytes[p++] = ((encoded3 & 3) << 6) | (encoded4 & 63)
  }

  return arraybuffer
}

const base64 =
  "AGFzbQEAAAABBwFgAn9/AX8DAgEABwcBA0FkZAAACgkBBwAgASAAagsADQRuYW1lAQYBAANBZGQ="

export default function (env: Env = {}) {
  const buffer = decode(base64)

  const wasmModule = new WebAssembly.Module(buffer)
  const instance = new WebAssembly.Instance(wasmModule, env) as Instance

  function Add(arg0: number, arg1: number): number {
    const fn = instance.exports.Add
    return fn(arg0, arg1)
  }

  return {
    instance,
    Add,
  }
}
