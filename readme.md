A toolkit for building wasm applications using TSX

Implementing functions using TSX components
```tsx
export function Add() {
  const $a = <param.i32 />
  const $b = <param.i32 />
  const $ret = <result.i32 />
  return (
    <Func params={[$b, $a]} ret={$ret}>
      <local.get var={$a} />
      <local.get var={$b} />
      <i32.add />
    </Func>
  )
}
```

Compile the above components into wat code

```tsx
(export "Add" (func $Add))
(func $Add (param i32) (param i32) (result i32)

    (local.get 1)
    (local.get 0)
    (i32.add)
)
```

The wasm file can be directly built through the component

```ts
import Mod from "../example/add"
const wasm = await createWasm<{ Add: (a: number, b: number) => number }>(Mod)
const { Add } = wasm.exports
expect(Add(1, 2)).toBe(3)
expect(Add(11, 2)).toBe(13)
expect(Add(1, 12)).toBe(13)
```
## bench
In some scenarios, wasm is 10 times faster than js
<div align="center">
	<a href="https://github.com/ahaoboy/neofetch">
		<img src="assets/bench.svg">
	</a>
</div>

## todo
- [ ] Automatic Dependency Collection