import { $, Export, Module } from "@xwat/xwat"
import { DetectBigInt } from "./bigint"

export default (
  <Module>
    <Export value={DetectBigInt} />
  </Module>
)
