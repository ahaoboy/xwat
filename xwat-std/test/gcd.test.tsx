import { expect, test } from 'vitest'
import { Gcd, } from '../src'
import { $, Export, Module, render, } from '@xwat/xwat'
import { createWasm } from "@xwat/wabt"

test("gcd", async () => {
  const Mod = <Module>
    <Export value={Gcd} />
  </Module>
  const wasm = await createWasm<{ Gcd: (a: number, b: number) => number }>(Mod);
  const gcd = wasm.exports.Gcd
  expect(gcd(1, 1)).toBe(1)
  expect(gcd(10, 0)).toBe(10)
  expect(gcd(0, 10)).toBe(10)
  expect(gcd(0, 0)).toBe(0)
  expect(gcd(3, 9)).toBe(3)
  expect(gcd(27, 6)).toBe(3)
  expect(gcd(13, 7)).toBe(1)
  expect(gcd(2, 8)).toBe(2)
  expect(gcd(81, 9)).toBe(9)
})