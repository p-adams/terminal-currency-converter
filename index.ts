import CurrencyConverter from "./lib/CurrencyConverter.ts";

function main() {
  const [amount, from, to] = Deno.args;
  const currencyConverter = new CurrencyConverter({ amount, from, to });
  currencyConverter.printConversion();
}

main();
