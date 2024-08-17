import { $, Export, Import, Memory, Module } from "@xwat/xwat"
import {
  Mat2Add,
  Mat2Adjoint,
  Mat2Determinant,
  Mat2Equals,
  Mat2ExactEquals,
  Mat2Frob,
  Mat2FromRotation,
  Mat2FromScaling,
  Mat2Invert,
  Mat2Multiply,
  Mat2MultiplyScalar,
  Mat2MultiplyScalarAndAdd,
  Mat2MultiplyScalarAndAddSimd,
  Mat2Rotate,
  Mat2Scale,
  Mat2Subtract,
  Mat2Transpose,
} from "./mat2"
import { Mat4Multiply } from "./mat4"
import { cos, sin, tan } from "./math"
import {
  Add2,
  Ceil2,
  Clone1,
  Clone2,
  Clone4,
  Clone16,
  Distance2,
  Divide2,
  Floor2,
  Inverse2,
  Length2,
  Max2,
  Min2,
  Multiply2,
  Nearest2,
  Negate2,
  Scale2,
  ScaleAndAdd2,
  SquaredDistance2,
  SquaredLength2,
  Subtract2,
} from "./vec2"

const mem = <Memory name="mem" pageSize={1024} />

export default (
  <Module>
    <Import scope="env" name="sin" value={sin} />
    <Import scope="env" name="cos" value={cos} />
    <Import scope="env" name="tan" value={tan} />
    <Export value={Add2} />
    <Export value={Subtract2} />
    <Export value={Multiply2} />
    <Export value={Divide2} />
    <Export value={Ceil2} />
    <Export value={Floor2} />
    <Export value={Nearest2} />
    <Export value={Min2} />
    <Export value={Max2} />
    <Export value={Scale2} />
    <Export value={ScaleAndAdd2} />
    <Export value={Distance2} />
    <Export value={SquaredDistance2} />
    <Export value={Length2} />
    <Export value={SquaredLength2} />
    <Export value={Inverse2} />
    <Export value={Negate2} />
    <Export value={Clone1} />
    <Export value={Clone2} />
    <Export value={Clone4} />
    <Export value={Clone16} />
    <Export value={Mat4Multiply} />
    <Export value={Mat2Transpose} />
    <Export value={Mat2Invert} />
    <Export value={Mat2Adjoint} />
    <Export value={Mat2Determinant} />
    <Export value={Mat2Multiply} />
    <Export value={Mat2Rotate} />
    <Export value={Mat2Scale} />
    <Export value={Mat2FromRotation} />
    <Export value={Mat2FromScaling} />
    <Export value={Mat2Frob} />
    <Export value={Mat2Add} />
    <Export value={Mat2Subtract} />
    <Export value={Mat2ExactEquals} />
    <Export value={Mat2Equals} />
    <Export value={Mat2MultiplyScalar} />
    <Export value={Mat2MultiplyScalarAndAdd} />
    <Export value={Mat2MultiplyScalarAndAddSimd} />
    <Export name="memory" value={mem} />
  </Module>
)
