import Mod from "../example/add"
import { build } from "../src"

async function main() {
  build(Mod, {
    name: "add",
    single: true,
    sync: true,
  })
}

main()
