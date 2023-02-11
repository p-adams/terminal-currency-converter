interface CurrencyConverter {
  amount: string;
  from: string;
  to: string;
}

export default class CurrencyConverterCoordinator {
  #amount: number;
  #from: string;
  #to: string;
  constructor({ amount, from, to }: CurrencyConverter) {
    this.#amount = +amount;
    this.#from = from;
    this.#to = to;
  }

  public get amount(): number {
    return this.#amount;
  }

  public get from(): string {
    return this.#from;
  }

  public get to(): string {
    return this.#to;
  }

  public printConversion() {
    const conversion = 0;
    console.log(`${this.from}:${this.amount} => ${this.to}:${conversion}`);
  }
}
