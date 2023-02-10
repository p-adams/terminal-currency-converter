export class Currency {
  #code: string;
  constructor(code: string) {
    this.#code = code.toLocaleLowerCase();
  }
  public get code(): string {
    return this.#code;
  }
  public set code(code: string) {
    this.#code = code;
  }
  public convertTo(toCode: string) {
    const fmtToCode = toCode.toLocaleLowerCase();
    fetch(`http://www.floatrates.com/daily/${fmtToCode}.json`)
      .then((res) => res.json())
      .then((res) => console.log(res));
  }
}

const usd = new Currency("USD");
usd.convertTo("afn");
