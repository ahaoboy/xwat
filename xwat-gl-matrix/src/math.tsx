import { $, Func, Import, param, result } from "@xwat/xwat"

export const sin = (
  <Func name="sin" params={[<param.f32 />]} ret={<result.f32 />} />
)
export const cos = (
  <Func name="cos" params={[<param.f32 />]} ret={<result.f32 />} />
)
export const tan = (
  <Func name="tan" params={[<param.f32 />]} ret={<result.f32 />} />
)
