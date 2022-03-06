const billInput = document.querySelector('#tip-price');
const personInput = document.querySelector('#tip-person');
const percentageInput = document.querySelector('.button-field');
const customInput = document.querySelector('#btn-num');

const calculate = new Calculate();
const ui = new Ui();



percentageInput.addEventListener("click", (item) => {
  if (item.target.classList.contains("tip-percentage")) {
    percentageValue = item.target.value;
    calculate.getPercentageValue(percentageValue, billInput.value, personInput.value);
    
    if (calculate.people != "" && calculate.bill != "") {
      let answer = calculate.calculateTip()
      // console.log(answer);
    }

  } 
});

personInput.addEventListener('input', () => {
  console.log(typeof personInput.value);

  if (Number(personInput.value) === 0) {
    
  } else {
    let answer = calculate.calculateTip()
  }

})

customInput.addEventListener('input', () => {
  calculate.getPercentageValue(customInput.value, billInput.value, personInput.value);
 
  if (calculate.people != "" && calculate.bill != "") {
      let answer = calculate.calculateTip()
  }
})


