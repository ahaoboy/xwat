import { parse } from "@xwat/wasm-tools"
import { type Node, render } from "@xwat/xwat"

export async function createWasm<Exports>(
  mod: Node | string,
  env: WebAssembly.Imports = {},
): Promise<WebAssembly.Instance & { exports: Exports }> {
  const code: string = typeof mod !== "string" ? render(mod) : mod
  const buffer = parse(code)
  const module = await WebAssembly.compile(buffer)
  const instance = await WebAssembly.instantiate(module, env)
  return instance as WebAssembly.Instance & { exports: Exports }
}
