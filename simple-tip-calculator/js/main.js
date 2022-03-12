const billInput = document.querySelector("#tip-price"),
  personInput = document.querySelector("#tip-person"),
  percentageInput = document.querySelector(".button-field"),
  customInput = document.querySelector("#btn-num"),
  resetBtn = document.getElementById("reset-btn"),
  tipBtn = document.querySelectorAll(".tip-percentage");

const calculate = new Calculate();
const ui = new Ui();

tipBtn.forEach((btn, index, btnArr) => {
  btn.addEventListener("click", () => {
    btnArr.forEach((btn) => {
      btn.classList.remove("active-btn");
    });
    btn.classList.add("active-btn");
  });
});

percentageInput.addEventListener("click", (item) => {
  if (item.target.classList.contains("tip-percentage")) {
    customInput.value = "";
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

customInput.addEventListener("input", () => {
  tipBtn.forEach((btn) => btn.classList.remove("active-btn"));
  if (customInput.value == "") {
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

personInput.addEventListener("input", () => {
  calculate.getPercentageValue(
    customInput.value,
    billInput.value,
    personInput.value
  );
  if (Number(personInput.value) === 0) {
    document.querySelector(".error-msg").style.display = "block";
    personInput.classList.add("error-value");
    setTimeout(errorMsg, 2000);
  } else {
    if (calculate.bill == "" || calculate.percentage == "") {
      return alert("set amount and percentage value");
    } else {
      let solution = calculate.calculateTip();
      ui.showCalculatedTip(solution);
    }
  }
});

function errorMsg() {
  document.querySelector(".error-msg").style.display = "none";
  personInput.classList.remove("error-value");
}

resetBtn.onclick = () =>
  ui.resetUi(billInput, customInput, personInput, tipBtn);
