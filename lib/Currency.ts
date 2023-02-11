export interface ICurrency {
  code: string;
  getRate: (code: string) => void;
}

export default class Currency implements ICurrency {
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
  public async getRate(code: string): Promise<number> {
    const fmtCode = code.toLocaleLowerCase();
    const data = await fetch(
      `http://www.floatrates.com/daily/${fmtCode}.json`
    ).then((res) => res.json());

    return data[this.code]?.rate;
  }
}
