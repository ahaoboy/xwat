import { $, Export, Func, Import, Memory, Module, param } from "@xwat/xwat"
import { GrayRgba } from "./gray"
import { Invert } from "./invert"
import { InvertRgba, InvertRgba64, InvertRgbaSimd } from "./invert64"

export * from "./gray"
export * from "./invert"

export const log = <Func name="log" params={[<param.i32 />]} />
const mem = <Memory name="mem" pageSize={6000} />
export default (
  <Module>
    <Import scope="env" name="log" value={log} />
    <Export value={Invert} />
    <Export value={GrayRgba} />
    <Export value={InvertRgba} />
    <Export value={InvertRgbaSimd} />
    <Export value={InvertRgba64} />
    <Export name="memory" value={mem} />
  </Module>
)
