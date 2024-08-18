export type Component = (prop: any, children: Node[]) => Node

export function $(fn: Component, prop: any = {}, ...children: Node[]): Node {
  if (typeof fn === "function") {
    const node = fn(prop ?? {}, children ?? [])
    node.tag = fn.name
    for (const c of children) {
      c.parent = node
    }
    return node
  }

  return prop
}

export type ConstProp = {
  value: number
}

export type Node = {
  parent?: Node
  tag: string
  op: string
  prop: NodeProp
  children: Node[]
  run: (vm: VM) => void
}

export type NodeProp = Record<string, any>

function helper(t: "i32" | "i64" | "f32" | "f64") {
  return {
    add: (prop: NodeProp, children: Node[] = []) => ({
      prop,
      children,
      op: `${t}.add`,
    }),
    abs: (prop: NodeProp, children: Node[] = []) => ({
      prop,
      children,
      op: `${t}.abs`,
    }),
    le: (prop: NodeProp, children: Node[] = []) => ({
      prop,
      children,
      op: `${t}.le`,
    }),
    mul: (prop: NodeProp, children: Node[] = []) => ({
      prop,
      children,
      op: `${t}.mul`,
    }),
    sub: (prop: NodeProp, children: Node[] = []) => ({
      prop,
      children,
      op: `${t}.sub`,
    }),
    div: (prop: NodeProp, children: Node[] = []) => ({
      prop,
      children,
      op: `${t}.div`,
    }),
    div_s: (prop: NodeProp, children: Node[] = []) => ({
      prop,
      children,
      op: `${t}.div_s`,
    }),
    div_u: (prop: NodeProp, children: Node[] = []) => ({
      prop,
      children,
      op: `${t}.div_u`,
    }),
    ceil: (prop: NodeProp, children: Node[] = []) => ({
      prop,
      children,
      op: `${t}.ceil`,
    }),
    floor: (prop: NodeProp, children: Node[] = []) => ({
      prop,
      children,
      op: `${t}.floor`,
    }),
    sqrt: (prop: NodeProp, children: Node[] = []) => ({
      prop,
      children,
      op: `${t}.sqrt`,
    }),
    neg: (prop: NodeProp, children: Node[] = []) => ({
      prop,
      children,
      op: `${t}.neg`,
    }),
    rem_s: (prop: NodeProp, children: Node[] = []) => ({
      prop,
      children,
      op: `${t}.rem_s`,
    }),
    rem_u: (prop: NodeProp, children: Node[] = []) => ({
      prop,
      children,
      op: `${t}.rem_u`,
    }),
    nearest: (prop: NodeProp, children: Node[] = []) => ({
      prop,
      children,
      op: `${t}.nearest`,
    }),
    min: (prop: NodeProp, children: Node[] = []) => ({
      prop,
      children,
      op: `${t}.min`,
    }),
    max: (prop: NodeProp, children: Node[] = []) => ({
      prop,
      children,
      op: `${t}.max`,
    }),
    sin: (prop: NodeProp, children: Node[] = []) => ({
      prop,
      children,
      op: `${t}.sin`,
    }),
    cos: (prop: NodeProp, children: Node[] = []) => ({
      prop,
      children,
      op: `${t}.cos`,
    }),
    and: (prop: NodeProp, children: Node[] = []) => ({
      prop,
      children,
      op: `${t}.and`,
    }),
    eq: (prop: NodeProp, children: Node[] = []) => ({
      prop,
      children,
      op: `${t}.eq`,
    }),
    eqz: (prop: NodeProp, children: Node[] = []) => ({
      prop,
      children,
      op: `${t}.eq`,
    }),
    lt_u: (prop: NodeProp, children: Node[] = []) => ({
      prop,
      children,
      op: `${t}.lt_u`,
    }),
    le_u: (prop: NodeProp, children: Node[] = []) => ({
      prop,
      children,
      op: `${t}.le_u`,
    }),
    lt_s: (prop: NodeProp, children: Node[] = []) => ({
      prop,
      children,
      op: `${t}.lt_s`,
    }),
    gt_s: (prop: NodeProp, children: Node[] = []) => ({
      prop,
      children,
      op: `${t}.gt_s`,
    }),
    gt_u: (prop: NodeProp, children: Node[] = []) => ({
      prop,
      children,
      op: `${t}.gt_u`,
    }),
    le_s: (prop: NodeProp, children: Node[] = []) => ({
      prop,
      children,
      op: `${t}.le_s`,
    }),
    const: (prop: ConstProp, children: Node[] = []) => ({
      op: `${t}.const`,
      prop,
      children,
    }),
    shl: (prop: { memory?: any }, children: Node[] = []) => ({
      op: `${t}.shl`,
      prop,
      children,
    }),
    load: (prop: { memory?: any }, children: Node[] = []) => ({
      op: `${t}.load`,
      prop,
      children,
    }),
    store: (prop: { memory?: any }, children: Node[] = []) => ({
      op: `${t}.store`,
      prop,
      children,
    }),
    load32_u: (prop: { memory?: any }, children: Node[] = []) => ({
      op: `${t}.load32_u`,
      prop,
      children,
    }),
    load8_u: (prop: { memory?: any }, children: Node[] = []) => ({
      op: `${t}.load8_u`,
      prop,
      children,
    }),
    store8: (prop: { memory?: any }, children: Node[] = []) => ({
      op: `${t}.store8`,
      prop,
      children,
    }),
    store32: (prop: { memory?: any }, children: Node[] = []) => ({
      op: `${t}.store32`,
      prop,
      children,
    }),
  }
}
// i32,i64,f32,f64
export const i32 = helper("i32")
export const i64 = helper("i64")
export const f32 = helper("f32")
export const f64 = helper("f64")

function tab(s: string, depth: number) {
  return s
    .split("\n")
    .map((i) => "  ".repeat(depth) + i)
    .join("\n")
}

export function render(node: Node): string {
  let typeIndex = 0
  let memoryIndex = 0
  let loopIndex = 0
  let blockIndex = 0
  let localIndex = 0
  let globalVarIndex = 0
  const exportNodes = new Set<Node>()
  const importNodes = new Set<Node>()
  const funcLocalsNodes = new Set<Node>()
  const typeNodes = new Set<Node>()
  function dfs(root: Node | Node[], depth = 0): string {
    if (Array.isArray(root)) {
      if (root.length === 0) {
        return "nop"
      }
      return root
        .map((i) => {
          if (Array.isArray(i) || i.op === "fragment") {
            return `${dfs(i, depth + 1)}`
          }
          return `(${dfs(i, depth + 1)})`
        })
        .join("\n")
    }
    switch (root.op) {
      case "table": {
        return `(table ${root.prop.size} funcref)`
      }
      case "elem": {
        const fnList = root.prop.value ?? []
        for (const fn of fnList) {
          importNodes.add(fn)
        }
        const fnCode = fnList.map((i: Component) => `$${i.name}`).join(" ")
        return `(elem (i32.const ${root.prop.index}) ${fnCode})`
      }
      case "call_indirect": {
        const ty = root.prop.type
        if (!ty.prop.name) {
          ty.prop.name = `type_${typeIndex++}`
        }
        const name = ty.prop.name
        typeNodes.add(ty)
        return `call_indirect (type $${name})`
      }
      case "type": {
        const tyName = root.prop.name ?? `type_${typeIndex++}`
        root.prop.name = tyName
        const paramCode = root.prop.params
          .map((i: Node) => `(param ${i})`)
          .join(" ")
        const retCode = root.prop.ret ? "(result i32)" : ""
        return `(type $${tyName} (func ${paramCode}  ${retCode}))`
      }
      case "select":
      case "nop":
      case "drop": {
        return tab(`${root.op}`, depth)
      }
      case "start": {
        exportNodes.add(root.prop.value)
        return tab(`(start $${root.prop.value.name})`, depth)
      }
      case "fragment": {
        if (root.children.length === 0) {
          return ""
        }
        const s = root.children
          .map((i) => {
            if (Array.isArray(i) || i.op === "fragment") {
              return `${dfs(i, depth + 1)}`
            }
            return `(${dfs(i, depth + 1)})`
          })
          .join("\n")
        return tab(s, depth)
      }

      case "module": {
        const children = [...root.children]
        const s = children.map((i) => dfs(i, depth + 1)).join("\n")
        const fnDeclCode = [...exportNodes]
          .map((i) => {
            if (typeof i === "function") {
              const node = $(i as any)
              return dfs(node, depth + 1)
            }
            return dfs(i, depth + 1)
          })
          .join("\n")
        const importFnDeclCode = [...importNodes]
          .map((i) => {
            if (typeof i === "function") {
              const node = $(i as any)
              return dfs(node, depth + 1)
            }
            return dfs(i, depth + 1)
          })
          .join("\n")

        const typeNodesCode = [...typeNodes]
          .map((i) => {
            if (typeof i === "function") {
              const node = $(i as any)
              return dfs(node, depth + 1)
            }
            return dfs(i, depth + 1)
          })
          .join("\n")

        const code = [typeNodesCode, importFnDeclCode, s, fnDeclCode].join("\n")
        return tab(`(module\n${code}\n)`, depth)
      }
      case "global.get":
      case "global.set": {
        const name = root.prop.var.name ?? root.prop.var.prop.name
        return `${root.op} $${name}`
      }
      case "v128.const": {
        const { type, value } = root.prop
        return `v128.const ${type} ${value.join(" ")}`
      }
      case "import": {
        switch (root.prop.value.op) {
          case "memory": {
            const scope = root.prop.scope || "env"
            return tab(
              `(import "${scope}" "${root.prop.name}" (memory $${root.prop.value.prop.name} ${root.prop.value.prop.size}))`,
              depth,
            )
          }
          case "func": {
            const scope = root.prop.scope || "env"
            const params = root.prop?.value?.prop?.params ?? []
            const arg =
              params.map((i: Node) => `(param ${i.prop.type})`).join(" ") || ""
            const ret = root.prop?.value?.prop?.ret
              ? `(result ${root.prop?.value?.prop?.ret.prop.type})`
              : ""

            if (!root.prop.value.prop.name) {
              root.prop.value.prop.name = root.prop.name
            }
            return tab(
              `(import "${scope}" "${root.prop.name}" (func $${root.prop.name} ${arg} ${ret}))`,
              depth,
            )
          }

          case "global.i64":
          case "global.i32":
          case "global.f32":
          case "global.f64": {
            const name = root.prop.name
            const varName = root.prop.value.name ?? `global_${globalVarIndex++}`
            root.prop.value.name = varName
            const scope = root.prop.scope
            const type = root.prop.value.op.split(".")[1]
            const mut = !!root.prop.value.prop.mut
            const typeCode = mut ? `(mut ${type})` : type
            return `(global $${varName} (import "${scope}" "${name}") ${typeCode})`
          }
          default: {
            console.log("root todo: ", root, root.prop.value)
            throw new Error("todo")
          }
        }
      }
      case "i64.shl":
      case "i32.shl": {
        return `${root.op}`
      }
      case "i32.store":
      case "i32.load": {
        if (root.prop?.memory) {
          // need multi-memory support
          return `${root.op} (memory $${root.prop.memory.prop.name})`
        }
        return root.op
      }
      case "i64.const":
      case "f32.const":
      case "f64.const":
      case "i32.const": {
        return `${root.op} ${root.prop.value}`
      }

      case "i8x16.sub":
      case "i8x16.sub_sat_u":
      case "i8x16.sub_sat_s":

      case "f32x4.add":
      case "f32x4.mul":
      case "v128.load":
      case "v128.store":

      case "i32.add":
      case "i32.div_s":
      case "i32.div_u":
      case "i32.eq":
      case "i32.or":
      case "i32.and":
      case "i32.sub":
      case "i32.mul":
      case "i32.le_s":
      case "i32.le_u":
      case "i32.lt_s":
      case "i32.load8_u":
      case "i32.store8":
      case "i32.lt_u":
      case "i32.gt_s":
      case "i32.gt_u":
      case "i32.rem_s":
      case "i32.rem_u":

      case "i64.div_s":
      case "i64.div_u":
      case "i64.gt_s":
      case "i64.gt_u":
      case "i64.add":
      case "i64.store":
      case "i64.eq":
      case "i64.and":
      case "i64.or":
      case "i64.sub":
      case "i64.mul":
      case "i64.le_s":
      case "i64.le_u":
      case "i64.lt_s":
      case "i64.load8_u":
      case "i64.load32_u":
      case "i64.store8":
      case "i64.store32":
      case "i64.lt_u":

      case "f32.add":
      case "f32.le":
      case "f32.abs":
      case "f32.eq":
      case "f32.load":
      case "f32.store":
      case "f32.sub":
      case "f32.mul":
      case "f32.le_s":
      case "f32.le_u":
      case "f32.lt_s":
      case "f32.load8_u":
      case "f32.load32_u":
      case "f32.store8":
      case "f32.store32":
      case "f32.div":
      case "f32.lt_u":
      case "f32.ceil":
      case "f32.floor":
      case "f32.min":
      case "f32.max":
      case "f32.sqrt":
      case "f32.nearest":
      case "f32.neg":
      case "f32.sin":
      case "f32.cos":

      case "f64.add":
      case "f64.le":
      case "f64.abs":
      case "f64.eq":
      case "f64.load":
      case "f64.store":
      case "f64.sub":
      case "f64.mul":
      case "f64.le_s":
      case "f64.le_u":
      case "f64.lt_s":
      case "f64.load8_u":
      case "f64.load32_u":
      case "f64.store8":
      case "f64.store32":
      case "f64.div":
      case "f64.lt_u":
      case "f64.ceil":
      case "f64.floor":
      case "f64.min":
      case "f64.max":
      case "f64.sqrt":
      case "f64.neg":
      case "f64.sin":
      case "f64.cos":
      case "f64.nearest": {
        const op = root.op
        if (!root.children.length) {
          return `${op}`
        }
        const s = root.children.map((i) => `(${dfs(i, depth + 1)})`).join("\n")
        return tab(`(${op}\n${s})`, depth)
      }
      case "call": {
        const name = root.prop.fn.name ?? root.prop.fn.prop.name
        // importNodes.add(root.prop.fn)
        return tab(`call $${name}`, 0)
      }
      case "local.get":
      case "local.set":
      case "local.tee": {
        if (typeof root.prop.var === "number") {
          return tab(`${root.op} ${root.prop.var}`, 0)
        }
        if (root.prop.var.op !== "param") {
          funcLocalsNodes.add(root.prop.var)
        }
        if (
          root.prop.var.prop.index === undefined &&
          root.prop.var.prop.name === undefined
        ) {
          let fn = root.parent
          while (fn && fn.op !== "func") {
            fn = fn.parent
          }
          root.prop.var.prop.name = `local_${localIndex++}`
        }
        const varName =
          root.prop.var.prop.index ?? `$${root.prop.var.prop.name}`
        return tab(`${root.op} ${varName}`, 0)
      }
      case "local.i32": {
        const name = root.prop.name ?? `local_${localIndex++}`
        root.prop.name = name
        return `local $${name} i32`
      }
      case "local.i64": {
        const name = root.prop.name ?? `local_${localIndex++}`
        root.prop.name = name
        return `local $${name} i64`
      }
      case "local.f32": {
        const name = root.prop.name ?? `local_${localIndex++}`
        root.prop.name = name
        return `local $${name} f32`
      }
      case "local.f64": {
        const name = root.prop.name ?? `local_${localIndex++}`
        root.prop.name = name
        return `local $${name} f64`
      }
      case "export": {
        const name = root.prop.value.name
        exportNodes.add(root.prop.value)

        if (typeof root.prop.value === "function") {
          return tab(`(export "${name}" (func $${name}))`, depth)
        }

        switch (root.prop.value.op) {
          case "memory": {
            const name = root.prop.value.prop.name
            return tab(
              `(export "${root.prop.name ?? name}" (memory $${name}))`,
              depth,
            )
          }
          default: {
            throw new Error("todo")
          }
        }
      }
      case "memory": {
        const name = root.prop.name ?? `memory_${memoryIndex++}`
        root.prop.name = name
        if (root.prop.shared) {
          return tab(
            `(memory $${name} ${root.prop.initial} ${root.prop.maximum})`,
            depth,
          )
        }
        return tab(`(memory $${name} ${root.prop.pageSize ?? 1})`, depth)
      }
      case "func": {
        for (const i in root.prop?.params) {
          root.prop.params[i].prop.index = i
        }
        const params = root.prop?.params ?? []
        const arg =
          params.map((i: Node) => `(param ${i.prop.type})`).join(" ") || ""
        const ret = root.prop?.ret ? `(result ${root.prop.ret.prop.type})` : ""

        const s = root.children
          .map((i) => {
            if (Array.isArray(i) || i.op === "fragment") {
              return tab(`${dfs(i, depth + 1)}`, depth)
            }
            return tab(`(${dfs(i, depth + 1)})`, depth)
          })
          .join("\n")

        const localCode = [...funcLocalsNodes]
          .filter((i) => !params.includes(i))
          .map((i) => {
            const name = i.prop.name ?? i.prop.index
            return `(local $${name} ${i.tag})`
          })
          .join("\n")
        funcLocalsNodes.clear()
        localIndex = 0

        const ty = root.prop.type
        const typeCode = ty ? `(type $${ty.prop.name} )` : `${arg} ${ret}`
        return tab(
          `(func $${root.tag} ${typeCode}
${localCode}
${tab(s, 1)}
)`,
          depth,
        )
      }

      case "if": {
        const ret = root.prop?.ret?.prop?.type
        const s = root.children.map((i) => dfs(i, depth + 1)).join("\n")
        const retStr = ret ? `(result ${ret})` : ""
        return tab(`if ${retStr} \n${tab(s, 1)}`, 0)
      }
      case "else": {
        const s = root.children
          .map((i) => {
            if (i.op === "fragment") {
              return tab(`${dfs(i, depth + 1)}`, 0)
            }
            return tab(`(${dfs(i, depth + 1)})`, 0)
          })
          .join("\n")
        return tab(`(else\n${tab(s, 1)}\n)`, 0)
      }
      case "then": {
        const s = root.children
          .map((i: Node) => {
            if (Array.isArray(i) || ["fragment"].includes(i.op)) {
              return tab(`${dfs(i, depth + 1)}`, 0)
            }
            return tab(`(${dfs(i, depth + 1)})`, 0)
          })
          .join("\n")
        return `(then\n${tab(s, 1)}\n)`
      }
      case "return": {
        return tab("return", 0)
      }
      case "loop": {
        const id = root.prop?.name ?? `loop_${loopIndex++}`
        root.prop.name = id
        const child = root.children
          .map((i) => tab(`(${dfs(i, depth + 1)})`, depth))
          .join("\n")
        return tab(
          `loop $${id}
${child}
`,
          0,
        )
      }
      case "block": {
        const name = root.prop?.name ?? `block_${blockIndex++}`
        root.prop.name = name
        const child = root.children
          .map((i) => tab(`(${dfs(i, depth + 1)})`, depth))
          .join("\n")
        return tab(
          `(block
${child}
)`,
          0,
        )
      }
      case "br_if": {
        let loopNode = root.parent
        while (loopNode && loopNode.op !== "loop") {
          loopNode = loopNode.parent
        }
        const name = root.prop?.name ?? loopNode?.prop?.name
        return `br_if $${name}`
      }
      case "br": {
        let loopNode = root.parent
        while (loopNode && loopNode.op !== "loop") {
          loopNode = loopNode.parent
        }
        const name = root.prop?.name ?? loopNode?.prop?.name
        return `br $${name}`
      }

      case "for": {
        const { init = [], cond, iter, stmt } = root.prop
        const initStr = init.map((i: Node) => `(${dfs(i)})`).join("\n")
        return `
        ${initStr}
        (loop)
        `
      }

      case "while": {
        const { cond, stmt = [] } = root.prop
        const condStr = cond
          .map((i: Node) => `(${dfs(i, depth + 1)})`)
          .join("\n")
        const stmtStr = stmt
          .map((i: Node) => `(${dfs(i, depth + 1)})`)
          .join("\n")
        return `loop
${condStr}
${stmtStr}`
      }
      case "data": {
        return `(data (i32.const ${root.prop.index ?? 0}) "${root.prop.value}")`
      }
      default: {
        console.log("root todo: ", root)
        throw new Error("todo")
      }
    }
  }

  return dfs(node)
}

export type ModuleProps = {
  imports?: any
}

export const Module = (prop: ModuleProps, children: any) => {
  return {
    op: "module",
    prop,
    children,
  }
}

export const Start = (prop: any, children: any) => {
  return {
    op: "start",
    prop,
    children,
  }
}
export const Nop = (prop: any, children: any) => {
  return {
    op: "nop",
    prop,
    children,
  }
}

/*
 (func $add (param $lhs i32) (param $rhs i32) (result i32)
    local.get $lhs
    local.get $rhs
    i32.add)
*/

export type FuncProps = {
  params?: Node[]
  ret?: Node
  locals?: Node[]
  name?: string
  type?: Node
}

export const Func = (prop: FuncProps, children: Node[] = []) => {
  return {
    op: "func",
    prop,
    children,
  }
}

export const param = {
  i32: (prop: { name?: string }) => ({
    op: "param",
    prop: {
      ...prop,
      type: "i32",
    },
  }),
  i64: (prop: { name?: string }) => ({
    op: "param",
    prop: {
      ...prop,
      type: "i64",
    },
  }),
  f32: (prop: { name?: string }) => ({
    op: "param",
    prop: {
      ...prop,
      type: "f32",
    },
  }),
  f64: (prop: { name?: string }) => ({
    op: "param",
    prop: {
      ...prop,
      type: "f64",
    },
  }),
}

export const result = {
  i32: () => ({
    op: "result",
    prop: {
      type: "i32",
    },
  }),
  i64: () => ({
    op: "result",
    prop: {
      type: "i64",
    },
  }),
  f32: () => ({
    op: "result",
    prop: {
      type: "f32",
    },
  }),
  f64: () => ({
    op: "result",
    prop: {
      type: "f64",
    },
  }),
}

export const global = {
  i32: (prop: { name?: string; mut?: boolean }, children = []) => {
    return {
      op: "global.i32",
      prop,
      children,
    }
  },
  i64: (prop: { name?: string; mut?: boolean }, children = []) => {
    return {
      op: "global.i64",
      prop,
      children,
    }
  },
  f32: (prop: { name?: string; mut?: boolean }, children = []) => {
    return {
      op: "global.f32",
      prop,
      children,
    }
  },
  f64: (prop: { name?: string; mut?: boolean }, children = []) => {
    return {
      op: "global.f64",
      prop,
      children,
    }
  },
  get: (prop: { var: Node }, children = []) => {
    return {
      op: "global.get",
      prop,
      children,
    }
  },
  set: (prop: { var: Node }, children = []) => {
    return {
      op: "global.set",
      prop,
      children,
    }
  },
}

export const local = {
  get: (prop: { var: any }) => {
    return {
      op: "local.get",
      prop,
    }
  },
  set: (prop: { var: any }) => {
    return {
      op: "local.set",
      prop,
    }
  },
  tee: (prop: { var: any }) => {
    return {
      op: "local.tee",
      prop,
    }
  },
  i32: (prop: { name?: string; value?: number }) => {
    return {
      op: "local.i32",
      prop,
    }
  },
  i64: (prop: { name?: string; value?: number }) => {
    return {
      op: "local.i64",
      prop,
    }
  },
  f32: (prop: { name?: string; value?: number }) => {
    return {
      op: "local.f32",
      prop,
    }
  },
  f64: (prop: { name?: string; value?: number }) => {
    return {
      op: "local.f64",
      prop,
    }
  },
}
export const Select = (prop = {}, children: Node[] = []) => {
  return {
    op: "select",
    prop,
    children,
  }
}
export const Call = (prop: { fn: Component }, children: Node[] = []) => {
  return {
    op: "call",
    prop,
    children,
  }
}
export const If = (prop: { ret?: Node }, children: Node[] = []) => {
  return {
    op: "if",
    prop,
    children,
  }
}

export const Then = (prop = {}, children: Node[] = []) => {
  return {
    op: "then",
    prop,
    children,
  }
}

export const Else = (prop = {}, children: Node[] = []) => {
  return {
    op: "else",
    prop,
    children,
  }
}
export const Return = (prop = {}, children: Node[] = []) => {
  return {
    op: "return",
    prop,
    children,
  }
}

export const Loop = (
  prop: {
    name?: string
  },
  children: Node[] = [],
) => {
  return {
    op: "loop",
    prop,
    children,
  }
}

export const While = (
  prop: {
    name?: string
    cond?: Node
    stmt?: Node
  },
  children: Node[] = [],
) => {
  return {
    op: "while",
    prop,
    children,
  }
}

export const Break = (
  prop: {
    name?: string
  },
  children: Node[] = [],
) => {
  return {
    op: "break",
    prop,
    children,
  }
}

export const Block = (
  prop: {
    name?: string
  },
  children: Node[] = [],
) => {
  return {
    op: "block",
    prop,
    children,
  }
}
export const BrIf = (
  prop: {
    name?: string
  },
  children: Node[] = [],
) => {
  return {
    op: "br_if",
    prop,
    children,
  }
}

export const Br = (
  prop: {
    name?: string
  },
  children: Node[] = [],
) => {
  return {
    op: "br",
    prop,
    children,
  }
}
export class VM {
  constructor(public stack: number[] = []) {}
  run(node: Node) {
    node.run(this)
  }
}
export function Export(
  prop: { name?: string; value: (() => Node) | (() => Node)[] },
  children: Node[] = [],
) {
  return {
    op: "export",
    prop,
    children,
  }
}
export function Memory(
  prop: {
    name?: string
    pageSize?: number
    initial?: number
    maximum?: number
    shared?: boolean
  },
  children: Node[] = [],
) {
  return {
    op: "memory",
    prop,
    children,
  }
}

export function Fragment(
  prop: { key?: number | string },
  children: Node[] = [],
) {
  return {
    op: "fragment",
    prop,
    children,
  }
}

export function Data(
  prop: {
    memory?: Node
    value: string
    index: number
  },
  children: Node[] = [],
) {
  return {
    op: "data",
    prop,
    children,
  }
}

export function Import(
  prop: {
    name: string
    scope?: string
    value: Component | Component[]
  },
  children: Node[] = [],
) {
  return {
    op: "import",
    prop,
    children,
  }
}
export function Drop(prop = {}, children: Node[] = []) {
  return {
    op: "drop",
    prop,
    children,
  }
}

export function Table(
  prop: {
    size: number
  },
  children: Node[] = [],
) {
  return {
    op: "table",
    prop,
    children,
  }
}

export function Elem(
  prop: {
    index: number
    value: (Node | Component)[]
  },
  children: Node[] = [],
) {
  return {
    op: "elem",
    prop,
    children,
  }
}

export function Type(
  prop: {
    name?: string
    params: ("i32" | "i64" | "f32" | "f64")[]
    ret: "i32" | "i64" | "f32" | "f64"
  },
  children: Node[] = [],
) {
  return {
    op: "type",
    prop,
    children,
  }
}

export function CallIndirect(
  prop: {
    type: Node
  },
  children: Node[] = [],
) {
  return {
    op: "call_indirect",
    prop,
    children,
  }
}

export function ReturnCall(
  prop: {
    type: Node
  },
  children: Node[] = [],
) {
  return {
    op: "return_call",
    prop,
    children,
  }
}

export function ReturnCallIndirect(
  prop: {
    type: Node
  },
  children: Node[] = [],
) {
  return {
    op: "return_call_indirect",
    prop,
    children,
  }
}
