import type { ICurrency } from "./Currency.ts";
import Currency from "./Currency.ts";
interface CurrencyConverterArgs {
  amount: string;
  from: string;
  to: string;
}

interface CurrencyConverterCoordinator {
  amount: number;
  from: string;
  to: string;
  currency: Currency;
  conversion: number;
  printConversion: () => void;
}

export default class CurrencyConverter implements CurrencyConverterCoordinator {
  #amount;
  #from;
  #to;
  #currency;
  #conversion = 0;
  constructor({ amount, from, to }: CurrencyConverterArgs) {
    this.#amount = +amount;
    this.#from = from;
    this.#to = to;
    this.#currency = new Currency(from);
  }

  public get conversion(): number {
    return this.#conversion;
  }

  public get currency(): Currency {
    return this.#currency;
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
