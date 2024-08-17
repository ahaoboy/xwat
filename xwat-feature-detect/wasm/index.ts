// DetectBigInt

import DetectBigIntInit from "./feature-detect"

function tryWrap(fn: () => Promise<boolean>) {
  return async () => {
    try {
      const r = await fn()
      return r
    } catch {
      return false
    }
  }
}

export default async () => {
  const bigint = tryWrap(async () => {
    const { DetectBigInt } = await DetectBigIntInit()
    return DetectBigInt(1n) === 1n
  })

  return {
    bigint,
  }
}
async function main() {
  // const { DetectBigInt } = await DetectBigIntInit()
  // console.log(DetectBigInt(1n), DetectBigInt(1n) === 1n)

  const bytes = [0, 97, 115, 109, 1, 0, 0, 0, 1, 5, 1, 95, 1, 120, 0]
  return WebAssembly.validate(new Uint8Array(bytes))
}

main()
