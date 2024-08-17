import { build } from "@xwat/build"
import Mod from "../src/index"

async function main() {
  build(Mod, {
    name: "gl-matrix",
    single: true,
    sync: true,
  })
}

main()
