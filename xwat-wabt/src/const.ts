export const NumType = {
  i32: 0x7f,
  i64: 0x7e,
  f32: 0x7d,
  f64: 0x7c,
}

export const VecType = 0x7b

export const RefType = {
  funcRef: 0x70,
  externRef: 0x6f,
}

export const Global = {
  const: 0x00,
  var: 0x01,
}

export const ControlInstr = {
  BlockType: 0x40,
  unreachable: 0x00,
  nop: 0x01,
  block: 0x02,
  loop: 0x03,
  if: 0x04,
  br: 0x0c,
  br_if: 0x0d,
  br_table: 0x0e,
  return: 0x0f,
  call: 0x10,
  call_indirect: 0x11,
}

export const RefInstr = {
  // ref.null
  null: 0xd0,

  // ref.is_null
  is_null: 0xd1,

  // ref.func
  func: 0xd2,
}

export const ParamInstr = {
  drop: 0x1a,
  select: 0x1b,
  selectVec: 0x1c,
}

export const VarInstr = {
  localGet: 0x20,
  localSet: 0x21,
  localTee: 0x22,
  globalGet: 0x23,
  globalSet: 0x24,
}
export const TableInstr = {
  tableGet: 0x25,
  tableSet: 0x26,
  // tableInit: 0xFC 12,
  // elemDrop: 0xFC 13,
  // tableCopy: 0xFc 14,
  // tableGrow: 0xFC 15,
  // tableSize: 0xFc 16,
  // tableFill: 0xFC 17,
}

export const MemInstr = {
  i32Load: 0x28,
  i64Load: 0x29,
  f32Load: 0x2a,
  f64Load: 0x2b,
  i32Load8S: 0x2c,
  i32Load8U: 0x2d,
  i32Load16S: 0x2e,
  i32Load16U: 0x2f,
  i64Load8S: 0x30,
  i64Load8U: 0x31,
  i64Load16S: 0x32,
  i64Load16U: 0x33,
  i64Load32S: 0x34,
  i64Load32U: 0x35,
  i32Store: 0x36,
  i64Store: 0x37,
  f32Store: 0x38,
  f64Store: 0x39,
  i32Store8: 0x3a,
  i32Store16: 0x3b,
  i64Store8: 0x3c,
  i64Store16: 0x3d,
  i64Store32: 0x3e,
  memorySize: 0x3f,
  memoryGrow: 0x40,
  memoryInit: 0xfc,
  dataDrop: 0xfc,
  memoryCopy: 0xfc,
  memoryFill: 0xfc,
}

export const NumInstr = {
  i32Const: 0x41,
  i64Const: 0x42,
  f32Const: 0x43,
  f64Const: 0x44,

  // i32
  i32Eqz: 0x45,
  i32Eq: 0x46,
  i32Ne: 0x47,
  i32LtS: 0x48,
  i32LtU: 0x49,
  i32GtS: 0x4a,
  i32GtU: 0x4b,
  i32LeS: 0x4c,
  i32LeU: 0x4d,
  i32GeS: 0x4e,
  i32GeU: 0x4f,

  // i64
  i64Eqz: 0x50,
  i64Eq: 0x51,
  i64Ne: 0x52,
  i64LtS: 0x53,
  i64LtU: 0x54,
  i64GtS: 0x55,
  i64GtU: 0x56,
  i64LeS: 0x57,
  i64LeU: 0x58,
  i64GeS: 0x59,
  i64GeU: 0x5a,

  // f32
  f32Eq: 0x5b,
  f32Ne: 0x5c,
  f32Lt: 0x5d,
  f32Gt: 0x5e,
  f32Le: 0x5f,
  f32Ge: 0x60,

  // f64
  f64Eq: 0x61,
  f64Ne: 0x62,
  f64Lt: 0x63,
  f64Gt: 0x64,
  f64Le: 0x65,
  f64Ge: 0x66,

  // math
  i32Clz: 0x67,
  i32Ctz: 0x68,
  i32Popcnt: 0x69,
  i32Add: 0x6a,
  i32Sub: 0x6b,
  i32Mul: 0x6c,
  i32DivS: 0x6d,
  i32DivU: 0x6e,
  i32RemS: 0x6f,
  i32RemU: 0x70,
  i32And: 0x71,
  i32Or: 0x72,
  i32Xor: 0x73,
  i32Shl: 0x74,
  i32ShrS: 0x75,
  i32ShrU: 0x76,
  i32Rotl: 0x77,
  i32Rotr: 0x78,
  i64Clz: 0x79,
  i64Ctz: 0x7a,
  i64Popcnt: 0x7b,
  i64Add: 0x7c,
  i64Sub: 0x7d,
  i64Mul: 0x7e,
  i64DivS: 0x7f,
  i64DivU: 0x80,
  i64RemS: 0x81,
  i64RemU: 0x82,
  i64And: 0x83,
  i64Or: 0x84,
  i64Xor: 0x85,
  i64Shl: 0x86,
  i64ShrS: 0x87,
  i64ShrU: 0x88,
  i64Rotl: 0x89,
  i64Rotr: 0x8a,
  f32Abs: 0x8b,
  f32Neg: 0x8c,
  f32Ceil: 0x8d,
  f32Floor: 0x8e,
  f32Trunc: 0x8f,
  f32Nearest: 0x90,
  f32Sqrt: 0x91,
  f32Add: 0x92,
  f32Sub: 0x93,
  f32Mul: 0x94,
  f32Div: 0x95,
  f32Min: 0x96,
  f32Max: 0x97,
  f32Copysign: 0x98,
  f64Abs: 0x99,
  f64Neg: 0x9a,
  f64Ceil: 0x9b,
  f64Floor: 0x9c,
  f64Trunc: 0x9d,
  f64Nearest: 0x9e,
  f64Sqrt: 0x9f,
  f64Add: 0xa0,
  f64Sub: 0xa1,
  f64Mul: 0xa2,
  f64Div: 0xa3,
  f64Min: 0xa4,
  f64Max: 0xa5,
  f64Copysign: 0xa6,
  i32WrapI64: 0xa7,
  i32TruncF32S: 0xa8,
  i32TruncF32U: 0xa9,
  i32TruncF64S: 0xaa,
  i32TruncF64U: 0xab,
  i64ExtendI32S: 0xac,
  i64ExtendI32U: 0xad,
  i64TruncF32S: 0xae,
  i64TruncF32U: 0xaf,
  i64TruncF64S: 0xb0,
  i64TruncF64U: 0xb1,
  f32ConvertI32S: 0xb2,
  f32ConvertI32U: 0xb3,
  f32ConvertI64S: 0xb4,
  f32ConvertI64U: 0xb5,
  f32DemoteF64: 0xb6,
  f64ConvertI32S: 0xb7,
  f64ConvertI32U: 0xb8,
  f64ConvertI64S: 0xb9,
  f64ConvertI64U: 0xba,
  f64PromoteF32: 0xbb,
  i32ReinterpretF32: 0xbc,
  i64ReinterpretF64: 0xbd,
  f32ReinterpretI32: 0xbe,
  f64ReinterpretI64: 0xbf,
  i32Extend8S: 0xc0,
  i32Extend16S: 0xc1,
  i64Extend8S: 0xc2,
  i64Extend16S: 0xc3,
  i64Extend32S: 0xc4,

  // sat
  // | 0xFC 0:u32 ⇒ i32.trunc_sat_f32_s
  // | 0xFC 1:u32 ⇒ i32.trunc_sat_f32_u
  // | 0xFC 2:u32 ⇒ i32.trunc_sat_f64_s
  // | 0xFC 3:u32 ⇒ i32.trunc_sat_f64_u
  // | 0xFC 4:u32 ⇒ i64.trunc_sat_f32_s
  // | 0xFC 5:u32 ⇒ i64.trunc_sat_f32_u
  // | 0xFC 6:u32 ⇒ i64.trunc_sat_f64_s
  // | 0xFC 7:u32 ⇒ i64.trunc_sat_f64_u
}

export const ExprEnd = 0x0b

export const Section = {
  custom: 0,
  type: 1,
  import: 2,
  function: 3,
  table: 4,
  memory: 5,
  export: 7,
  start: 8,
  element: 9,
  code: 10,
  data: 11,
  dataCount: 12,
}

export const ExportSection = {
  func: 0x00,
  table: 0x01,
  mem: 0x02,
  global: 0x03,
}

export const Magic = [0x00, 0x61, 0x73, 0x6d]

export const Version = [0x01, 0x00, 0x00, 0x00]
