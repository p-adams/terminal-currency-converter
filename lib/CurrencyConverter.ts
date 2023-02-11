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
    this.#currency = new Currency(this.#to);
  }

  public get conversion(): number {
    return this.#conversion;
  }

  public set conversion(v: number) {
    this.#conversion = v;
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

  public async printConversion() {
    const rate = await this.currency.getRate(this.from);
    this.conversion = (this.amount * Math.round(rate * 100)) / 100;
    console.log(
      `${this.from}:${this.amount} => ${this.to}:${this.conversion.toFixed(2)}`
    );
  }
}
