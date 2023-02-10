export class Currency {
  #code: string;
  constructor(code: string) {
    this.#code = code;
  }
  public get code(): string {
    return this.#code;
  }
  public set code(code: string) {
    this.#code = code;
  }
  public convert(toCode: string) {}
}
