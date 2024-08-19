import { Component, NodeProp } from "./dom"

export function createOp0<
  const N extends string,
  const T extends readonly string[],
>(
  ty: N,
  opList: T,
): {
  [K in T[number]]: (prop: NodeProp, children?: Node[]) => Component
} {
  const obj = {} as any
  for (const i of opList) {
    const op = `${ty}.${i}`
    obj[i] = (prop = {}, children = []) => ({
      op,
      prop,
      children,
    })
  }
  return obj
}
