import { InstMap, Magic, Version } from "./const"

export interface Printer {
  print_op0(op: string): Printer
}

export class StringPrinter implements Printer {
  code = ""
  print_op0(op: string): Printer {
    this.code += op
    return this
  }

  toString(): string {
    return this.code
  }
}

export class BinaryPrinter implements Printer {
  code: number[] = [...Magic, ...Version]
  print_op0(op: string): Printer {
    this.code.push(InstMap[op])
    return this
  }

  toBinary(): Uint8Array {
    return new Uint8Array(this.code)
  }
}
