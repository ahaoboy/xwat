import fs from "node:fs"
import path from "node:path"
import { parse } from "@xwat/wasm-tools"
import { type Node, render } from "@xwat/xwat"
import { encode } from "e-base64"

export type BuildOption = {
  name: string
  outDir: string
  single: boolean
  sync: boolean
  target: "web" | "nodejs"
}

const typeMap: Record<string, string> = {
  i32: "number",
  i64: "bigint",
  f32: "number",
  f64: "number",
}

function tab(s: string, deep = 2) {
  const prefix = ' '.repeat(deep)
  if (s.includes('\n')) {
    return prefix + s.replaceAll('\n', `\n${prefix}`)
  }

  return prefix + s
}

export async function build(node: Node, option: Partial<BuildOption> = {}) {
  const code = render(node)
  console.log(code)
  const buffer = parse(code)
  const { name, outDir, single, target, sync } = {
    name: "index",
    outDir: "wasm",
    single: false,
    target: "nodejs",
    sync: false,
    ...option,
  }

  const dir = path.join(path.resolve("."), outDir)
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir)
  }
  const wasmPath = path.join(dir, `${name}.wasm`)
  const tsPath = path.join(dir, `${name}.ts`)

  const exportsType = node.children
    .filter((i) => i.tag === "Export")
    .map((i) => {
      const name = i.prop.value.name
      const value =
        typeof i.prop.value === "function" ? i.prop.value() : i.prop.value
      if (value.op === "func") {
        const { params = [], ret } = value.prop

        return `${name}(${params
          .map((i: Node, k: number) => {
            const argName = i.prop.name ?? `arg${k}`
            return `${argName}: ${typeMap[i.prop.type]}`
          })
          .join(", ")}): ${typeMap[ret?.prop?.type] ?? "undefined"};`
      }
      if (value.op === "memory") {
        const name = i.prop.name ?? value.prop.name
        return `${name}: WebAssembly.Memory;`
      }
    })
    .join("\n")

  const fnCode = node.children
    .filter(
      (i) =>
        i.tag === "Export" &&
        (i.prop?.value?.op === "func" || typeof i.prop.value === "function"),
    )
    .map((i) => {
      const name = i.prop.value.name

      const { params = [], ret } =
        typeof i.prop.value === "function" ? i.prop.value().prop : i.prop.value
      return `
function ${name}(${params
          .map((i: Node, k: number) => {
            const argName = i.prop.name ?? `arg${k}`
            return `${argName}: ${typeMap[i.prop.type]}`
          })
          .join(", ")}): ${typeMap[ret?.prop.type]} {
  const fn = instance.exports.${name};
  return fn(${params
          .map((i: Node, k: number) => i.prop.name ?? `arg${k}`)
          .join(", ")});
}
`
    })
    .join("\n")

  const base64Code = `const dataURIPrefix = "data:application/octet-stream;base64,";
  const url = dataURIPrefix + __wasm_base64__;`

  const importUrlCode = `const i = import.meta.url.lastIndexOf('/')
const dir = import.meta.url.slice(0, i)
const url = \`$\{dir\}/${name}.wasm\``

  const exportName = node.children
    .filter((i) => i.tag === "Export")
    .map((i) => {
      if (typeof i.prop.value === "function") {
        return i.prop.value.name
      }
      if (i.prop.value.op === "memory") {
        const name = i.prop.name ?? i.prop.value.prop.name
        return `${name}: instance.exports.${name}`
      }
    })
    .join(",\n")
  const base64 = encode(buffer)
  const base64Data = `const __wasm_base64__ = "${base64}";`

  const decodeFnCode = `
const __lookup__ = new Uint8Array([
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 62, 0, 0, 0, 63, 52, 53,
  54, 55, 56, 57, 58, 59, 60, 61, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7,
  8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 0, 0, 0,
  0, 0, 0, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42,
  43, 44, 45, 46, 47, 48, 49, 50, 51, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
]);


function __decode_base64__(base64: string): Uint8Array {
  const len = base64.length;
  let bufferLength = (len >> 2) * 3;
  let p = 0;

  let fillZeros = 0;
  if (base64[len - 1] === "=") {
    bufferLength--;
    fillZeros = 1;
    if (base64[len - 2] === "=") {
      bufferLength--;
      fillZeros = 2;
    }
  }

  const bytes = new Uint8Array(bufferLength);

  const strLen = fillZeros ? len - 4 : len;

  for (let i = 0; i < strLen; i += 4) {
    const encoded1 = __lookup__[base64.charCodeAt(i)];
    const encoded2 = __lookup__[base64.charCodeAt(i + 1)];
    const encoded3 = __lookup__[base64.charCodeAt(i + 2)];
    const encoded4 = __lookup__[base64.charCodeAt(i + 3)];

    bytes[p++] = (encoded1 << 2) | (encoded2 >> 4);
    bytes[p++] = ((encoded2 & 15) << 4) | (encoded3 >> 2);
    bytes[p++] = ((encoded3 & 3) << 6) | (encoded4 & 63);
  }

  if (fillZeros === 1) {
    const encoded1 = __lookup__[base64.charCodeAt(strLen)];
    const encoded2 = __lookup__[base64.charCodeAt(strLen + 1)];
    const encoded3 = __lookup__[base64.charCodeAt(strLen + 2)];
    bytes[p++] = (encoded1 << 2) | (encoded2 >> 4);
    bytes[p++] = ((encoded2 & 15) << 4) | (encoded3 >> 2);
  } else if (fillZeros === 2) {
    const encoded1 = __lookup__[base64.charCodeAt(strLen)];
    const encoded2 = __lookup__[base64.charCodeAt(strLen + 1)];
    bytes[p++] = (encoded1 << 2) | (encoded2 >> 4);
  }
  return bytes;
}

`
  const bufferCode = `
${single ? base64Code : importUrlCode}
const resp = await fetch(url);
const buffer = await resp.arrayBuffer();
`

  const syncBufferCode = `
  const buffer = __decode_base64__(__wasm_base64__);
  `
  const asyncFnCode = `export default async function(env: Env = {}) {
    ${sync ? syncBufferCode : bufferCode}
  const wasmModule = await WebAssembly.compile(buffer);
  const instance = (await WebAssembly.instantiate(wasmModule, env)) as Instance;

${tab(fnCode)}

  return {
    instance,
${tab(exportName, 4)}
  };
}`

  const syncFnCode = `export default function(env: Env = {}){
  ${sync ? syncBufferCode : bufferCode}

  const wasmModule = new WebAssembly.Module(buffer);
  const instance = new WebAssembly.Instance(wasmModule, env) as Instance;

${tab(fnCode)}

  return {
    instance,
${tab(exportName, 4)}
  };
}`

  const tsCode = `
export type Instance = WebAssembly.Instance & {
  exports: {
${tab(exportsType, 4)}
  };
};

export type Env = WebAssembly.Imports & {};

${sync ? decodeFnCode : ""}
${single ? base64Data : ""}


${sync ? syncFnCode : asyncFnCode}

`
  if (single) {
    fs.writeFileSync(tsPath, tsCode)
  } else {
    fs.writeFileSync(tsPath, tsCode)
    fs.writeFileSync(wasmPath, buffer, "binary")
  }
}
