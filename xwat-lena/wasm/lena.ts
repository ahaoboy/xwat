
export type Instance = WebAssembly.Instance & {
  exports: {
    Invert(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): undefined;
    GrayRgba(arg0: number, arg1: number, arg2: number, arg3: number): undefined;
    InvertRgba(dist: number, src: number, w: number, h: number): undefined;
    InvertRgbaSimd(dist: number, src: number, w: number, h: number): undefined;
    InvertRgba64(dist: number, src: number, w: number, h: number): undefined;
    memory: WebAssembly.Memory;
};
};

export type Env = WebAssembly.Imports & {};


const base64 = "AGFzbQEAAAABFQNgAX8AYAZ/f39/f38AYAR/f39/AAILAQNlbnYDbG9nAAADBgUBAgICAgUEAQDwLgdLBgZJbnZlcnQAAQhHcmF5UmdiYQACCkludmVydFJnYmEAAw5JbnZlcnRSZ2JhU2ltZAAEDEludmVydFJnYmE2NAAFBm1lbW9yeQIACvoEBXkBBH9BACEGQQAhByABIAIgBGxsIQgDQEEAIQcDQCAGIAdqIQkgCSAFakH/ASAJLQAAazoAACAHQQFqIQcgByADSQ0ACwNAIAYgB2ohCSAJIAVqIAktAAA6AAAgB0EBaiEHIAcgBEkNAAsgBiAEaiEGIAYgCEgNAAsLhQEBBH8gASEEIAAhBSACIANsQQRsIAFqIQYDQEEAIQcgBCAGSQRAIARBAGotAAAgBEEBai0AACAEQQJqLQAAampBA24hByAFQQBqIAc6AAAgBUEBaiAHOgAAIAVBAmogBzoAACAFQQNqIARBA2ooAgA6AAAgBEEEaiEEIAVBBGohBQwBCwsLggEBBH8gACEEIAEhBSAAIAIgA0EEbGxqIQZB/wEhBwNAIAQgBkkEQCAEQQBqIAcgBUEAai0AAGs6AAAgBEEBaiAHIAVBAWotAABrOgAAIARBAmogByAFQQJqLQAAazoAACAEQQNqIAVBA2otAAA6AAAgBEEEaiEEIAVBBGohBQwBCwsLlAEBA38gACEEIAEhBSAAIAIgA0EEbGxqIQYDQCAEIAZJBEAgBP0M/////////////////////yAF/QAEAP1x/QsEACAEQQNqIAVBA2otAAA6AAAgBEEHaiAFQQdqLQAAOgAAIARBC2ogBUELai0AADoAACAEQQ9qIAVBD2otAAA6AAAgBEEQaiEEIAVBEGohBQwBCwsLXQIDfwF+IAAhBCABIQUgACACIANBBGxsaiEGQgFCIIZCAX0hBwNAIAQgBkkEQCAEIAcgBTUCAH0+AgAgBEEDaiAFQQNqLQAAOgAAIARBBGohBCAFQQRqIQUMAQsLCwChAgRuYW1lAUIGAANsb2cBBkludmVydAIIR3JheVJnYmEDCkludmVydFJnYmEEDkludmVydFJnYmFTaW1kBQxJbnZlcnRSZ2JhNjQCiAEFAQQGAWkHAWoIAndoCQFwAgQEB2xvY2FsXzAFB2xvY2FsXzEGB2xvY2FsXzIHB2xvY2FsXzMDBAQHb3V0X3B0cgUHaW1nX3B0cgYCd2gHA21heAQDBAdvdXRfcHRyBQdpbWdfcHRyBgJ3aAUEBAdvdXRfcHRyBQdpbWdfcHRyBgJ3aAcDbWF4A0MFAQMABmxvb3BfMAEGbG9vcF8xAgZsb29wXzICAQAGbG9vcF8zAwEABmxvb3BfNAQBAAZsb29wXzUFAQAGbG9vcF82BgYBAANtZW0=";


export default async function(env: Env = {}) {
    
const dataURIPrefix = "data:application/octet-stream;base64,";
  const url = dataURIPrefix + base64;
const resp = await fetch(url);
const buffer = await resp.arrayBuffer();

  const wasmModule = await WebAssembly.compile(buffer);
  const instance = (await WebAssembly.instantiate(wasmModule, env)) as Instance;

  
  function Invert(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): undefined {
    const fn = instance.exports.Invert;
    return fn(arg0, arg1, arg2, arg3, arg4, arg5)
  }
  
  
  function GrayRgba(arg0: number, arg1: number, arg2: number, arg3: number): undefined {
    const fn = instance.exports.GrayRgba;
    return fn(arg0, arg1, arg2, arg3)
  }
  
  
  function InvertRgba(dist: number, src: number, w: number, h: number): undefined {
    const fn = instance.exports.InvertRgba;
    return fn(dist, src, w, h)
  }
  
  
  function InvertRgbaSimd(dist: number, src: number, w: number, h: number): undefined {
    const fn = instance.exports.InvertRgbaSimd;
    return fn(dist, src, w, h)
  }
  
  
  function InvertRgba64(dist: number, src: number, w: number, h: number): undefined {
    const fn = instance.exports.InvertRgba64;
    return fn(dist, src, w, h)
  }
  

  return {
    instance,
    Invert,
    GrayRgba,
    InvertRgba,
    InvertRgbaSimd,
    InvertRgba64,
    memory: instance.exports.memory
  };
}

