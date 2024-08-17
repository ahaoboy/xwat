export type Instance = WebAssembly.Instance & {
  exports: {
    memory: WebAssembly.Memory
  }
}

export type Env = WebAssembly.Imports & {}

export default async function (env: Env = {}) {
  const i = import.meta.url.lastIndexOf("/")
  const dir = import.meta.url.slice(0, i)
  const url = `${dir}/xwat-wasi.wasm`
  const resp = await fetch(url)
  const buffer = await resp.arrayBuffer()

  const wasmModule = await WebAssembly.compile(buffer)
  const instance = (await WebAssembly.instantiate(wasmModule, env)) as Instance

  return {
    instance,
    memory: instance.exports.memory,
  }
}
