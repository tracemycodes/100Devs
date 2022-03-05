const billInput = document.querySelector('#tip-price')
const personInput = document.querySelector('#tip-person')
const percentageInput = document.querySelector('.button-field');
const customInput = document.querySelector('#btn-num')

const calculate = new Calculate(billInput, customInput.value, personInput);

// const getPercentageValue = () => {
//   let percentageValue;
//   percentageInput.addEventListener('click', item => {
//   if (item.target.classList.contains('tip-percentage')) {
//     percentageValue = item.target.textContent   
//   } else if (item.target.className = 'custom') {
//     percentageValue = item.target.value
//   }
//   return percentageValue;
// })
// }

calculate.getPercentageValue(percentageInput)

console.log(calculate);
