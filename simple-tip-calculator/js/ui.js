class Ui {
  constructor() {
    this.tipPercentage = document.getElementById('tip-percentage');
    this.totalPercentage = document.getElementById('total-percentage');
  }
  loading() {
    document.querySelector('.calculated-tip').style.display = 'block'
    document.querySelector('.loading-spinner-blocks').style.display = 'none'
  }
  showCalculatedTip(solution) {
    this.tipPercentage.textContent = `$${solution.tipPerPerson.toFixed(2)}`
    this.totalPercentage.textContent = `$${solution.amountPerPerson.toFixed(2)}`
    document.querySelector('.calculated-tip').style.display = 'none'
    document.querySelector('.loading-spinner-blocks').style.display = 'inline-block'
    setTimeout(this.loading, 2000)
  }
  resetUi(billInput, customInput, personInput) {
    billInput.value = ''
    customInput.value = ''
    personInput.value = ''
    this.tipPercentage.textContent = `$0.00`
    this.totalPercentage.textContent = `$0.00`
  }
}