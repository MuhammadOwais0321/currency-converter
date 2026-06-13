/****************variable Elements****************/
declare const fromAmountElement: HTMLInputElement | null;
declare const convertedAmountElement: HTMLInputElement | null;
declare const fromCurrencyElement: HTMLSelectElement | null;
declare const toCurrencyElement: HTMLSelectElement | null;
declare const resultElement: HTMLDivElement | null;
declare const converterContainer: HTMLDivElement | null;
/****************Arry to populate the select tags with these countries ****************/
type curn = {
    code: string;
    name: string;
};
declare const countries: curn[];
/****************Function to get exchange rate using API****************/
declare const getExchangeRate: () => Promise<void>;
//# sourceMappingURL=script.d.ts.map