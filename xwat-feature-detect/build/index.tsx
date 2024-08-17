import { build } from "@xwat/build"
import Mod from "../src"

async function main() {
  build(Mod, {
    name: "feature-detect",
    single: true,
  })
}

main()
