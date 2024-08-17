import { build } from "@xwat/build"
import Mod from "../src/index"

async function main() {
  build(Mod, {
    name: "xwat-wasi",
    single: false,
  })
}

main()
