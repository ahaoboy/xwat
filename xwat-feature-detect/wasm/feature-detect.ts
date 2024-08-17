export type Instance = WebAssembly.Instance & {
  exports: {
    DetectBigInt(arg0: bigint): bigint
  }
}

export type Env = WebAssembly.Imports & {}

const base64 =
  "AGFzbQEAAAABBgFgAX4BfgMCAQAHEAEMRGV0ZWN0QmlnSW50AAAKBgEEACAACw=="

export default async function (env: Env = {}) {
  const dataURIPrefix = "data:application/octet-stream;base64,"
  const url = dataURIPrefix + base64
  const resp = await fetch(url)
  const buffer = await resp.arrayBuffer()

  const wasmModule = await WebAssembly.compile(buffer)
  const instance = (await WebAssembly.instantiate(wasmModule, env)) as Instance

  function DetectBigInt(arg0: bigint): bigint {
    const fn = instance.exports.DetectBigInt
    return fn(arg0)
  }

  return {
    instance,
    DetectBigInt,
  }
}
