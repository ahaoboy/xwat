
export type Instance = WebAssembly.Instance & {
  exports: {
    Add2(arg0: number, arg1: number, arg2: number): undefined;
    Subtract2(arg0: number, arg1: number, arg2: number): undefined;
    Multiply2(arg0: number, arg1: number, arg2: number): undefined;
    Divide2(arg0: number, arg1: number, arg2: number): undefined;
    Ceil2(arg0: number, arg1: number): undefined;
    Floor2(arg0: number, arg1: number): undefined;
    Nearest2(arg0: number, arg1: number): undefined;
    Min2(arg0: number, arg1: number, arg2: number): undefined;
    Max2(arg0: number, arg1: number, arg2: number): undefined;
    Scale2(arg0: number, arg1: number, arg2: number): undefined;
    ScaleAndAdd2(arg0: number, arg1: number, arg2: number, arg3: number): undefined;
    Distance2(arg0: number, arg1: number): number;
    SquaredDistance2(arg0: number, arg1: number): number;
    Length2(arg0: number): number;
    SquaredLength2(arg0: number): number;
    Inverse2(arg0: number, arg1: number): undefined;
    Negate2(arg0: number, arg1: number): undefined;
    Clone1(arg0: number, arg1: number): undefined;
    Clone2(arg0: number, arg1: number): undefined;
    Clone4(arg0: number, arg1: number): undefined;
    Clone16(arg0: number, arg1: number): undefined;
    Mat4Multiply(arg0: number, arg1: number, arg2: number): undefined;
    Mat2Transpose(arg0: number, arg1: number): undefined;
    Mat2Invert(arg0: number, arg1: number): undefined;
    Mat2Adjoint(arg0: number, arg1: number): undefined;
    Mat2Determinant(arg0: number): number;
    Mat2Multiply(arg0: number, arg1: number, arg2: number): undefined;
    Mat2Rotate(arg0: number, arg1: number, arg2: number): undefined;
    Mat2Scale(arg0: number, arg1: number, arg2: number): undefined;
    Mat2FromRotation(arg0: number, arg1: number): undefined;
    Mat2FromScaling(arg0: number, arg1: number): undefined;
    Mat2Frob(arg0: number): number;
    Mat2Add(arg0: number, arg1: number, arg2: number): undefined;
    Mat2Subtract(arg0: number, arg1: number, arg2: number): undefined;
    Mat2ExactEquals(arg0: number, arg1: number): number;
    Mat2Equals(arg0: number, arg1: number): number;
    Mat2MultiplyScalar(arg0: number, arg1: number, arg2: number): undefined;
    Mat2MultiplyScalarAndAdd(arg0: number, arg1: number, arg2: number, arg3: number): undefined;
    Mat2MultiplyScalarAndAddSimd(arg0: number, arg1: number, arg2: number, arg3: number): undefined;
    memory: WebAssembly.Memory;
  };
};

export type Env = WebAssembly.Imports & {};


const __lookup__ = new Uint8Array([
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 62, 0, 0, 0, 63, 52, 53,
  54, 55, 56, 57, 58, 59, 60, 61, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7,
  8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 0, 0, 0,
  0, 0, 0, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42,
  43, 44, 45, 46, 47, 48, 49, 50, 51, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
]);


function __decode_base64__(base64: string): Uint8Array {
  const len = base64.length;
  let bufferLength = (len >> 2) * 3;
  let p = 0;

  let fillZeros = 0;
  if (base64[len - 1] === "=") {
    bufferLength--;
    fillZeros = 1;
    if (base64[len - 2] === "=") {
      bufferLength--;
      fillZeros = 2;
    }
  }

  const bytes = new Uint8Array(bufferLength);

  const strLen = fillZeros ? len - 4 : len;

  for (let i = 0; i < strLen; i += 4) {
    const encoded1 = __lookup__[base64.charCodeAt(i)];
    const encoded2 = __lookup__[base64.charCodeAt(i + 1)];
    const encoded3 = __lookup__[base64.charCodeAt(i + 2)];
    const encoded4 = __lookup__[base64.charCodeAt(i + 3)];

    bytes[p++] = (encoded1 << 2) | (encoded2 >> 4);
    bytes[p++] = ((encoded2 & 15) << 4) | (encoded3 >> 2);
    bytes[p++] = ((encoded3 & 3) << 6) | (encoded4 & 63);
  }

  if (fillZeros === 1) {
    const encoded1 = __lookup__[base64.charCodeAt(strLen)];
    const encoded2 = __lookup__[base64.charCodeAt(strLen + 1)];
    const encoded3 = __lookup__[base64.charCodeAt(strLen + 2)];
    bytes[p++] = (encoded1 << 2) | (encoded2 >> 4);
    bytes[p++] = ((encoded2 & 15) << 4) | (encoded3 >> 2);
  } else if (fillZeros === 2) {
    const encoded1 = __lookup__[base64.charCodeAt(strLen)];
    const encoded2 = __lookup__[base64.charCodeAt(strLen + 1)];
    bytes[p++] = (encoded1 << 2) | (encoded2 >> 4);
  }
  return bytes;
}


const __wasm_base64__ = "AGFzbQEAAAABOwpgAX0BfWADf39/AGACf38AYAN/f30AYAR/f399AGACf38BfWABfwF9YAJ/fQBgAn9/AX9gBH9/f38AAh8DA2VudgNzaW4AAANlbnYDY29zAAADZW52A3RhbgAAAygnAQEBAQICAgEBAwQFBQYGAgICAgICAQICAgYBAwEHAgYBAQgIAwQJBQQBAIAIB5QEKARBZGQyAAMJU3VidHJhY3QyAAQJTXVsdGlwbHkyAAUHRGl2aWRlMgAGBUNlaWwyAAcGRmxvb3IyAAgITmVhcmVzdDIACQRNaW4yAAoETWF4MgALBlNjYWxlMgAMDFNjYWxlQW5kQWRkMgANCURpc3RhbmNlMgAOEFNxdWFyZWREaXN0YW5jZTIADwdMZW5ndGgyABAOU3F1YXJlZExlbmd0aDIAEQhJbnZlcnNlMgASB05lZ2F0ZTIAEwZDbG9uZTEAFAZDbG9uZTIAFQZDbG9uZTQAFgdDbG9uZTE2ABcMTWF0NE11bHRpcGx5ABgNTWF0MlRyYW5zcG9zZQAZCk1hdDJJbnZlcnQAGgtNYXQyQWRqb2ludAAbD01hdDJEZXRlcm1pbmFudAAcDE1hdDJNdWx0aXBseQAdCk1hdDJSb3RhdGUAHglNYXQyU2NhbGUAHxBNYXQyRnJvbVJvdGF0aW9uACAPTWF0MkZyb21TY2FsaW5nACEITWF0MkZyb2IAIgdNYXQyQWRkACMMTWF0MlN1YnRyYWN0ACQPTWF0MkV4YWN0RXF1YWxzACUKTWF0MkVxdWFscwAmEk1hdDJNdWx0aXBseVNjYWxhcgAnGE1hdDJNdWx0aXBseVNjYWxhckFuZEFkZAAoHE1hdDJNdWx0aXBseVNjYWxhckFuZEFkZFNpbWQAKQZtZW1vcnkCAAqpGycrACAAIAEqAgAgAioCAJI4AgAgAEEEaiABQQRqKgIAIAJBBGoqAgCSOAIACysAIAAgASoCACACKgIAkzgCACAAQQRqIAFBBGoqAgAgAkEEaioCAJM4AgALKwAgACABKgIAIAIqAgCUOAIAIABBBGogAUEEaioCACACQQRqKgIAlDgCAAsrACAAIAEqAgAgAioCAJU4AgAgAEEEaiABQQRqKgIAIAJBBGoqAgCVOAIACx4AIAAgASoCAI04AgAgAEEEaiABQQRqKgIAjTgCAAseACAAIAEqAgCOOAIAIABBBGogAUEEaioCAI44AgALHgAgACABKgIAkDgCACAAQQRqIAFBBGoqAgCQOAIACysAIAAgASoCACACKgIAljgCACAAQQRqIAFBBGoqAgAgAkEEaioCAJY4AgALKwAgACABKgIAIAIqAgCXOAIAIABBBGogAUEEaioCACACQQRqKgIAlzgCAAsiACAAIAEqAgAgApQ4AgAgAEEEaiABQQRqKgIAIAKUOAIACzEAIAAgASoCACACKgIAlCADkjgCACAAQQRqIAFBBGoqAgAgAkEEaioCAJQgA5I4AgALLAECfSAAKgIAIAEqAgCTIgIgApQgAEEEaioCACABQQRqKgIAkyIDIAOUkpELKwECfSAAKgIAIAEqAgCTIgIgApQgAEEEaioCACABQQRqKgIAkyIDIAOUkgsgACAAKgIAIAAqAgCUIABBBGoqAgAgAEEEaioCAJSSkQsfACAAKgIAIAAqAgCUIABBBGoqAgAgAEEEaioCAJSSCygAIABDAACAPyABKgIAlTgCACAAQQRqQwAAgD8gAUEEaioCAJU4AgALHgAgACABKgIAjDgCACAAQQRqIAFBBGoqAgCMOAIACw4AIAAgASoCAAE4AgABCx4AIAAgASoCAAE4AgAgAEEEaiABQQRqKgIAATgCAAtAACAAIAEqAgABOAIAIABBBGogAUEEaioCAAE4AgAgAEEIaiABQQhqKgIAATgCACAAQQxqIAFBDGoqAgABOAIAC4wCACAAIAEqAgABOAIAIABBBGogAUEEaioCAAE4AgAgAEEIaiABQQhqKgIAATgCACAAQQxqIAFBDGoqAgABOAIAIABBEGogAUEQaioCAAE4AgAgAEEUaiABQRRqKgIAATgCACAAQRhqIAFBGGoqAgABOAIAIABBHGogAUEcaioCAAE4AgAgAEEgaiABQSBqKgIAATgCACAAQSRqIAFBJGoqAgABOAIAIABBKGogAUEoaioCAAE4AgAgAEEsaiABQSxqKgIAATgCACAAQTBqIAFBMGoqAgABOAIAIABBNGogAUE0aioCAAE4AgAgAEE4aiABQThqKgIAATgCACAAQTxqIAFBPGoqAgABOAIAC7QGARR9IAFBAGoqAgAhAyABQQRqKgIAIQQgAUEIaioCACEFIAFBDGoqAgAhBiABQRBqKgIAIQcgAUEUaioC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Ck1hdDJSb3RhdGUfCU1hdDJTY2FsZSAQTWF0MkZyb21Sb3RhdGlvbiEPTWF0MkZyb21TY2FsaW5nIghNYXQyRnJvYiMHTWF0MkFkZCQMTWF0MlN1YnRyYWN0JQ9NYXQyRXhhY3RFcXVhbHMmCk1hdDJFcXVhbHMnEk1hdDJNdWx0aXBseVNjYWxhcigYTWF0Mk11bHRpcGx5U2NhbGFyQW5kQWRkKRxNYXQyTXVsdGlwbHlTY2FsYXJBbmRBZGRTaW1kAowECQ4CAgdsb2NhbF8wAwdsb2NhbF8xDwICB2xvY2FsXzADB2xvY2FsXzEYFAMHbG9jYWxfMAQHbG9jYWxfMQUHbG9jYWxfMgYHbG9jYWxfMwcHbG9jYWxfNAgHbG9jYWxfNQkHbG9jYWxfNgoHbG9jYWxfNwsHbG9jYWxfOAwHbG9jYWxfOQ0IbG9jYWxfMTAOCGxvY2FsXzExDwhsb2NhbF8xMhAIbG9jYWxfMTMRCGxvY2FsXzE0Eghsb2NhbF8xNRMIbG9jYWxfMTYUCGxvY2FsXzE3FQhsb2NhbF8xOBYIbG9jYWxfMTkaBQIHbG9jYWxfMAMHbG9jYWxfMQQHbG9jYWxfMgUHbG9jYWxfMwYHbG9jYWxfNBwEAQdsb2NhbF8wAgdsb2NhbF8xAwdsb2NhbF8yBAdsb2NhbF8zHQgDB2xvY2FsXzAEB2xvY2FsXzEFB2xvY2FsXzIGB2xvY2FsXzMHB2xvY2FsXzQIB2xvY2FsXzUJB2xvY2FsXzYKB2xvY2FsXzceBgMHbG9jYWxfMAQHbG9jYWxfMQUHbG9jYWxfMgYHbG9jYWxfMwcHbG9jYWxfNAgHbG9jYWxfNR8GAwdsb2NhbF8wBAdsb2NhbF8xBQdsb2NhbF8yBgdsb2NhbF8zBwdsb2NhbF80CAdsb2NhbF81IAICB2xvY2FsXzADB2xvY2FsXzEGBgEAA21lbQ==";


export default function(env: Env = {}){
  
  const buffer = __decode_base64__(__wasm_base64__);
  

  const wasmModule = new WebAssembly.Module(buffer);
  const instance = new WebAssembly.Instance(wasmModule, env) as Instance;

  
  function Add2(arg0: number, arg1: number, arg2: number): undefined {
    const fn = instance.exports.Add2;
    return fn(arg0, arg1, arg2);
  }
  
  
  function Subtract2(arg0: number, arg1: number, arg2: number): undefined {
    const fn = instance.exports.Subtract2;
    return fn(arg0, arg1, arg2);
  }
  
  
  function Multiply2(arg0: number, arg1: number, arg2: number): undefined {
    const fn = instance.exports.Multiply2;
    return fn(arg0, arg1, arg2);
  }
  
  
  function Divide2(arg0: number, arg1: number, arg2: number): undefined {
    const fn = instance.exports.Divide2;
    return fn(arg0, arg1, arg2);
  }
  
  
  function Ceil2(arg0: number, arg1: number): undefined {
    const fn = instance.exports.Ceil2;
    return fn(arg0, arg1);
  }
  
  
  function Floor2(arg0: number, arg1: number): undefined {
    const fn = instance.exports.Floor2;
    return fn(arg0, arg1);
  }
  
  
  function Nearest2(arg0: number, arg1: number): undefined {
    const fn = instance.exports.Nearest2;
    return fn(arg0, arg1);
  }
  
  
  function Min2(arg0: number, arg1: number, arg2: number): undefined {
    const fn = instance.exports.Min2;
    return fn(arg0, arg1, arg2);
  }
  
  
  function Max2(arg0: number, arg1: number, arg2: number): undefined {
    const fn = instance.exports.Max2;
    return fn(arg0, arg1, arg2);
  }
  
  
  function Scale2(arg0: number, arg1: number, arg2: number): undefined {
    const fn = instance.exports.Scale2;
    return fn(arg0, arg1, arg2);
  }
  
  
  function ScaleAndAdd2(arg0: number, arg1: number, arg2: number, arg3: number): undefined {
    const fn = instance.exports.ScaleAndAdd2;
    return fn(arg0, arg1, arg2, arg3);
  }
  
  
  function Distance2(arg0: number, arg1: number): number {
    const fn = instance.exports.Distance2;
    return fn(arg0, arg1);
  }
  
  
  function SquaredDistance2(arg0: number, arg1: number): number {
    const fn = instance.exports.SquaredDistance2;
    return fn(arg0, arg1);
  }
  
  
  function Length2(arg0: number): number {
    const fn = instance.exports.Length2;
    return fn(arg0);
  }
  
  
  function SquaredLength2(arg0: number): number {
    const fn = instance.exports.SquaredLength2;
    return fn(arg0);
  }
  
  
  function Inverse2(arg0: number, arg1: number): undefined {
    const fn = instance.exports.Inverse2;
    return fn(arg0, arg1);
  }
  
  
  function Negate2(arg0: number, arg1: number): undefined {
    const fn = instance.exports.Negate2;
    return fn(arg0, arg1);
  }
  
  
  function Clone1(arg0: number, arg1: number): undefined {
    const fn = instance.exports.Clone1;
    return fn(arg0, arg1);
  }
  
  
  function Clone2(arg0: number, arg1: number): undefined {
    const fn = instance.exports.Clone2;
    return fn(arg0, arg1);
  }
  
  
  function Clone4(arg0: number, arg1: number): undefined {
    const fn = instance.exports.Clone4;
    return fn(arg0, arg1);
  }
  
  
  function Clone16(arg0: number, arg1: number): undefined {
    const fn = instance.exports.Clone16;
    return fn(arg0, arg1);
  }
  
  
  function Mat4Multiply(arg0: number, arg1: number, arg2: number): undefined {
    const fn = instance.exports.Mat4Multiply;
    return fn(arg0, arg1, arg2);
  }
  
  
  function Mat2Transpose(arg0: number, arg1: number): undefined {
    const fn = instance.exports.Mat2Transpose;
    return fn(arg0, arg1);
  }
  
  
  function Mat2Invert(arg0: number, arg1: number): undefined {
    const fn = instance.exports.Mat2Invert;
    return fn(arg0, arg1);
  }
  
  
  function Mat2Adjoint(arg0: number, arg1: number): undefined {
    const fn = instance.exports.Mat2Adjoint;
    return fn(arg0, arg1);
  }
  
  
  function Mat2Determinant(arg0: number): number {
    const fn = instance.exports.Mat2Determinant;
    return fn(arg0);
  }
  
  
  function Mat2Multiply(arg0: number, arg1: number, arg2: number): undefined {
    const fn = instance.exports.Mat2Multiply;
    return fn(arg0, arg1, arg2);
  }
  
  
  function Mat2Rotate(arg0: number, arg1: number, arg2: number): undefined {
    const fn = instance.exports.Mat2Rotate;
    return fn(arg0, arg1, arg2);
  }
  
  
  function Mat2Scale(arg0: number, arg1: number, arg2: number): undefined {
    const fn = instance.exports.Mat2Scale;
    return fn(arg0, arg1, arg2);
  }
  
  
  function Mat2FromRotation(arg0: number, arg1: number): undefined {
    const fn = instance.exports.Mat2FromRotation;
    return fn(arg0, arg1);
  }
  
  
  function Mat2FromScaling(arg0: number, arg1: number): undefined {
    const fn = instance.exports.Mat2FromScaling;
    return fn(arg0, arg1);
  }
  
  
  function Mat2Frob(arg0: number): number {
    const fn = instance.exports.Mat2Frob;
    return fn(arg0);
  }
  
  
  function Mat2Add(arg0: number, arg1: number, arg2: number): undefined {
    const fn = instance.exports.Mat2Add;
    return fn(arg0, arg1, arg2);
  }
  
  
  function Mat2Subtract(arg0: number, arg1: number, arg2: number): undefined {
    const fn = instance.exports.Mat2Subtract;
    return fn(arg0, arg1, arg2);
  }
  
  
  function Mat2ExactEquals(arg0: number, arg1: number): number {
    const fn = instance.exports.Mat2ExactEquals;
    return fn(arg0, arg1);
  }
  
  
  function Mat2Equals(arg0: number, arg1: number): number {
    const fn = instance.exports.Mat2Equals;
    return fn(arg0, arg1);
  }
  
  
  function Mat2MultiplyScalar(arg0: number, arg1: number, arg2: number): undefined {
    const fn = instance.exports.Mat2MultiplyScalar;
    return fn(arg0, arg1, arg2);
  }
  
  
  function Mat2MultiplyScalarAndAdd(arg0: number, arg1: number, arg2: number, arg3: number): undefined {
    const fn = instance.exports.Mat2MultiplyScalarAndAdd;
    return fn(arg0, arg1, arg2, arg3);
  }
  
  
  function Mat2MultiplyScalarAndAddSimd(arg0: number, arg1: number, arg2: number, arg3: number): undefined {
    const fn = instance.exports.Mat2MultiplyScalarAndAddSimd;
    return fn(arg0, arg1, arg2, arg3);
  }
  

  return {
    instance,
    Add2,
    Subtract2,
    Multiply2,
    Divide2,
    Ceil2,
    Floor2,
    Nearest2,
    Min2,
    Max2,
    Scale2,
    ScaleAndAdd2,
    Distance2,
    SquaredDistance2,
    Length2,
    SquaredLength2,
    Inverse2,
    Negate2,
    Clone1,
    Clone2,
    Clone4,
    Clone16,
    Mat4Multiply,
    Mat2Transpose,
    Mat2Invert,
    Mat2Adjoint,
    Mat2Determinant,
    Mat2Multiply,
    Mat2Rotate,
    Mat2Scale,
    Mat2FromRotation,
    Mat2FromScaling,
    Mat2Frob,
    Mat2Add,
    Mat2Subtract,
    Mat2ExactEquals,
    Mat2Equals,
    Mat2MultiplyScalar,
    Mat2MultiplyScalarAndAdd,
    Mat2MultiplyScalarAndAddSimd,
    memory: instance.exports.memory
  };
}

