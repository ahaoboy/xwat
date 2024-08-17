export const v128 = {
  const(
    prop: {
      type: "f32x4" | "i32x4" | "i8x16"
      value: number[]
    },
    children: Node[] = [],
  ) {
    return {
      op: "v128.const",
      prop,
      children,
    }
  },
  load(prop = {}, children: Node[] = []) {
    return {
      op: "v128.load",
      prop,
      children,
    }
  },
  store(prop = {}, children: Node[] = []) {
    return {
      op: "v128.store",
      prop,
      children,
    }
  },
  load8x8_u(prop = {}, children: Node[] = []) {
    return {
      op: "v128.load8x8_u",
      prop,
      children,
    }
  },
}

export const f32x4 = {
  mul(prop = {}, children: Node[] = []) {
    return {
      op: "f32x4.mul",
      prop,
      children,
    }
  },
  add(prop = {}, children: Node[] = []) {
    return {
      op: "f32x4.add",
      prop,
      children,
    }
  },
}
export const i8x16 = {
  sub_sat_u(prop = {}, children: Node[] = []) {
    return {
      op: "i8x16.sub_sat_s",
      prop,
      children,
    }
  },
  sub(prop = {}, children: Node[] = []) {
    return {
      op: "i8x16.sub",
      prop,
      children,
    }
  },
  sub_sat_s(prop = {}, children: Node[] = []) {
    return {
      op: "i8x16.sub_sat_s",
      prop,
      children,
    }
  },
}
