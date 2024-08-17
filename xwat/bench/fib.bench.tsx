import { createWasm } from "@xwat/wabt"
import { bench, describe } from "vitest"
import Mod from "../example/fib"
import {
  $,
  Export,
  Fragment,
  Func,
  Import,
  Memory,
  Module,
  Offset,
  f32,
  i32,
  local,
  param,
  result,
} from "../src"

function jsFib(n: number): number {
  return n < 2 ? n : jsFib(n - 1) + jsFib(n - 2)
}

describe("fib", async () => {
  const {
    exports: { Fib },
  } = await createWasm<{ Fib: (a: number) => number }>(Mod)

  for (let i = 1; i <= 10; i++) {
    console.log(jsFib(i), Fib(i))
  }
  bench("js", () => {
    jsFib(10)
  })

  bench("wasm", () => {
    Fib(10)
  })
})
