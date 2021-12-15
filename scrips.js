const button = document.getElementById("convert-button")
const select = document.getElementById("currency-select")

const dolar = 5.68
const euro = 6.41
const bitcoin = 0.0000039
const won = 208.85

const convertValue = () => {
    const inputValue = document.getElementById("input-value").value;
    const realValueText = document.getElementById("currency-value-text");
    const convertValueText = document.getElementById("currency-value-text1");

    realValueText.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(inputValue);

    if (select.value === "US$ Dólar Americano") {
        convertValueText.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputValue / dolar);
    }
    if (select.value === "€ Euro") {
        convertValueText.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputValue / euro);
    }
    if (select.value === "Bitcoin") {
        convertValueText.innerHTML = inputValue * bitcoin
    }
    if (select.value === "₩ Won Sul-coreano") {
        convertValueText.innerHTML = new Intl.NumberFormat("sc-SC", {
            style: "currency",
            currency: "KRW",
        }).format(inputValue * won);
    }
}

const changeCurrency = () => {
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.getElementById("currency-img")

    if (select.value === "US$ Dólar Americano") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImg.src = "./assets/estados-unidos (1) 1.jpg"
    }

    if (select.value === "€ Euro") {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/Design sem nome 1.jpg"
    }

    if (select.value === "Bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "./assets/Bitcoin-Logo.jpg"
        currencyImg.style.height = '44px'
    }
    if (select.value === "₩ Won Sul-coreano") {
        currencyName.innerHTML = "₩ Won Sul-coreano"
        currencyImg.src = "./assets/Flag_of_South_Korea.svg.jpg"
        currencyImg.style.height = '44px'
    }
    convertValue()
}

button.addEventListener("click", convertValue)
select.addEventListener('change', changeCurrency)