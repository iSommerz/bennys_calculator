document.addEventListener("DOMContentLoaded", function() {
    const parts = {
        S: { value: 1320, comission: 500 },
        A: { value: 980, comission: 500 },
        B: { value: 900, comission: 400 },
        C: { value: 640, comission: 400 },
        D: { value: 340, comission: 400 },
        M: { value: 900, comission: 400 }
    }

    const qty = document.getElementById("qty");
    const type = document.getElementById("type");
    const totalBennys = document.getElementById("totalbennys");
    const comissionElement = document.getElementById("comission");

    function calculate() {
        const selectedType = type.value;
        const selectedPart = parts[selectedType];
        const quantity = parseInt(qty.value);
        const valueTotal = selectedPart.value * quantity;
        const comissionTotal = selectedPart.comission * quantity;

        totalBennys.textContent = valueTotal;
        comissionElement.textContent = comissionTotal;
    }

    qty.addEventListener("input", calculate);
    type.addEventListener("change", calculate);
});