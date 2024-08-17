import { build } from "@xwat/build"
import Mod from "../src"

async function main() {
  build(Mod, {
    name: "fib",
    single: true,
    sync: true,
  })
}

main()
