const populate = async (value, currency,convertcurrency) => {
    let myStr = ""
    // ✅ Using Frankfurter API instead of CurrencyAPI
    let url = `https://api.frankfurter.app/latest?amount=${value}&from=${currency}`;

    let response = await fetch(url)
    let rJson = await response.json()
    document.querySelector(".output").style.display = "block"

    if (rJson["rates"].hasOwnProperty(convertcurrency)) {

    myStr += `
        <tr>
            
            <td>${Math.round(rJson["rates"][convertcurrency])}</td>
            <td>${convertcurrency}</td>
        </tr>
    `;
} else {
    myStr = `<tr><td colspan="2">Key not found</td></tr>`;
}
    const tableBody = document.querySelector("tbody");
    tableBody.innerHTML = myStr;
}

const btn = document.querySelector(".btn")
btn.addEventListener("click", (e) => {
    e.preventDefault()
    const value = parseInt(document.querySelector("input[name='quantity']").value);
    const currency = document.querySelector("select[name='currency']").value
    const convertcurrency=document.querySelector("select[name='currency_to_convert']").value
    populate(value, currency,convertcurrency)
})
