export function createOp0(op: string) {
  return (prop = {}, children = []) => ({
    op,
    prop,
    children,
  })
}
