const billInput = document.querySelector('#tip-price');
const personInput = document.querySelector('#tip-person');
const percentageInput = document.querySelector('.button-field');
const customInput = document.querySelector('#btn-num');

const calculate = new Calculate();



percentageInput.addEventListener("click", (item) => {
  if (item.target.classList.contains("tip-percentage")) {
    percentageValue = item.target.value;
    calculate.getPercentageValue(percentageValue, billInput.value, personInput.value);
    
    if (calculate.people != "" && calculate.bill != "") {
      let answer = calculate.calculateTip()
    }

    // console.log(calculate.bill);
  } 
});



// personInput.addEventListener('input', rechout)

// function rechout () {
//   console.log("hello");
// }

// console.log(calculate);
