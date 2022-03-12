class Calculate {
  constructor() {
    this.bill;
    this.people;
    this.percentage;
  }
  getPercentageValue(percentageInput, bill, people) {
    this.percentage = percentageInput;
    this.people = people;
    this.bill = bill;
  }
  
  calculateTip() {
    let amount = parseInt(this.bill) / 100 * parseInt(this.percentage),
        tipAmount = amount + parseInt(this.bill),
        tipPerPerson = amount / parseInt(this.people),
        amountPerPerson = tipAmount / parseInt(this.people);

    return {
      tipPerPerson,
      amountPerPerson
    };
  }
}
