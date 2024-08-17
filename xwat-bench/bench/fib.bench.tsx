import init from "@xwat/fib/wasm/fib"
import { bench, describe, expect } from "vitest"

function jsFib(n: number): number {
  return n < 2 ? n : jsFib(n - 1) + jsFib(n - 2)
}

describe("fib", async () => {
  const { Fib } = await init()
  for (let i = 1; i <= 16; i++) {
    // console.log(i, jsFib(i), Fib(i));
    expect(jsFib(i) === Fib(i)).toEqual(true)
  }
  bench("js", () => {
    for (let i = 1; i <= 16; i++) {
      jsFib(i)
    }
  })

  bench("wasm", () => {
    for (let i = 1; i <= 16; i++) {
      Fib(i)
    }
  })
})
