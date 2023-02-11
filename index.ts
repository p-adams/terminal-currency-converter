import CurrencyConverter from "./lib/CurrencyConverter.ts";

function main() {
  // TODO: validate args input
  const [amount, from, to] = Deno.args;
  const currencyConverter = new CurrencyConverter({ amount, from, to });
  currencyConverter.printConversion();
}

main();
