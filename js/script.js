{
    
    const formElement = document.querySelector(".js-form");
   

    const calculateResult = (amount, currency) => {

        const eurRate = 4.4854;
        const chfRate = 4.6478;
        const usdRate = 4.0420;
        const gbpRate = 5.2507;
        const cadRate = 3.0641;
        const audRate = 2.7384;
        const czkRate = 0.1883;
        const dkkRate = 0.6019;
        const inrRate = 0.0480;
        const jpyRate = 2.9115;
        const myrRate = 0.8600;
        const nokRate = 0.3975;
        const sgdRate = 3.0000;

        switch (currency) {

            case "EUR":
                return amount / eurRate;


            case "CHF":
                return amount / chfRate;


            case "USD":
                return amount / usdRate;


            case "GBP":
                return amount / gbpRate;


            case "CAD":
                return amount / cadRate;


            case "AUD":
                return amount / audRate;


            case "CZK":
                return amount / czkRate;


            case "DKK":
                return amount / dkkRate;


            case "INR":
                return amount / inrRate;


            case "JPY":
                return amount / jpyRate;


            case "MYR":
                return amount / myrRate;


            case "NOK":
                return amount / nokRate;


            case "SGD":
                return amount / sgdRate;

        }
    };

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    const amountElement = document.querySelector(".js-amount");
    const currencyElement = document.querySelector(".js-currency");
    const resultElement = document.querySelector(".js-result");

    const amount = +amountElement.value;
    const currency = currencyElement.value;

    const result = calculateResult(amount, currency);

resultElement.innerHTML = `Za swoje ${amount.toFixed(2)} PLN otrzymasz dokładnie <strong>${result.toFixed(2)} ${currency}</strong>`;

    });
}