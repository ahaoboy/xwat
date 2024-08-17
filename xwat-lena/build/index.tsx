import { build } from "@xwat/build"
import {
  $,
  Fragment,
  Func,
  If,
  Loop,
  Offset,
  Then,
  i32,
  local,
  param,
} from "@xwat/xwat"
import Mod from "../src/index"

async function main() {
  build(Mod, {
    name: "lena",
    single: true,
  })
}

main()
