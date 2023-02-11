interface CurrencyConverterArgs {
  amount: string;
  from: string;
  to: string;
}

interface CurrencyConverterCoordinator {
  amount: number;
  from: string;
  to: string;
  printConversion: () => void;
}

export default class CurrencyConverter implements CurrencyConverterCoordinator {
  #amount;
  #from;
  #to;
  constructor({ amount, from, to }: CurrencyConverterArgs) {
    this.#amount = +amount;
    this.#from = from;
    this.#to = to;
  }

  public get amount() {
    return this.#amount;
  }

  public get from() {
    return this.#from;
  }

  public get to() {
    return this.#to;
  }

  public printConversion() {
    const conversion = 0;
    console.log(`${this.from}:${this.amount} => ${this.to}:${conversion}`);
  }
}
