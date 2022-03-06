const billInput = document.querySelector("#tip-price"),
      personInput = document.querySelector("#tip-person"),
      percentageInput = document.querySelector(".button-field"),
      customInput = document.querySelector("#btn-num"),
      restBtn = document.getElementById('reset-btn');

const calculate = new Calculate();
const ui = new Ui();

percentageInput.addEventListener("click", (item) => {
  if (item.target.classList.contains("tip-percentage")) {
    percentageValue = item.target.value;
    calculate.getPercentageValue(
      percentageValue,
      billInput.value,
      personInput.value
    );

    if (calculate.people != "" && calculate.bill != "") {
      let solution = calculate.calculateTip();
      ui.showCalculatedTip(solution);
    }
  }
});

personInput.addEventListener("input", () => {
  if (Number(personInput.value) === 0) {
  } else {
    let solution = calculate.calculateTip();
    ui.showCalculatedTip(solution);
  }
});

customInput.addEventListener("input", () => {
  console.log(customInput.value);
  if (customInput.value === "") {
    return;
  } else {
    calculate.getPercentageValue(
      customInput.value,
      billInput.value,
      personInput.value
    );

    let solution = calculate.calculateTip();
    if (calculate.people != "" && calculate.bill != "") {
      ui.showCalculatedTip(solution);
    }
  }
});

restBtn.onclick = () => ui.resetUi(billInput, customInput, personInput);