const converterBtn = document.querySelector(".convert--btn");

converterBtn.addEventListener("click", async () => {
  try {
    const from = document.querySelector("#country-from").value;
    const to = document.querySelector("#country-to").value;
    const amount = Number(document.querySelector("#amount").value);

    if (!from || !to || !amount) return;

    converterBtn.textContent = "Loading ...";

    const res = await fetch(`https://api.exchangerate-api.com/v4/latest/USD`);

    const data = await res.json();

    const fromCurrency = data.rates[from];
    const toCurrency = data.rates[to];

    const rate = (toCurrency / fromCurrency) * amount;

    document.querySelector(".converted").textContent = `${to} ${rate.toFixed(
      2
    )}`;
    converterBtn.textContent = "Converter";
  } catch (err) {
    console.log(err);
  }
});
