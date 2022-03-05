class Calculate {
  constructor(bill, custom, people) {
    this.bill = bill;
    this.people = people;
    this.custom = custom;
    this.percentage;
  }
  getPercentageValue() {
    let percentageValue;
    percentageInput.addEventListener("click", (item) => {
      if (item.target.classList.contains("tip-percentage")) {
        percentageValue = item.target.textContent;
      }
      this.percentage = percentageValue;
      // console.log(this.percentage);
    });
  }
}
