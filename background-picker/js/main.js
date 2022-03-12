const UIpantImg = document.querySelectorAll('.pant-img');
const UIshirtImg = document.querySelectorAll('.shirt-img');

UIpantImg.forEach(item => {
  item.addEventListener('click', function (e) {
    e.preventDefault()
    const UIpantCard = document.querySelector('.pants-card'),
          UIpantSec = document.querySelector('.pants-section');

    let scrValue = e.target.attributes.src.value;
    UIpantCard.style.backgroundImage  = `url(${scrValue})`;
    UIpantCard.classList.toggle('transistion-left');
    UIpantSec.style.backgroundImage  = `url(${scrValue})`;
  })
})

UIshirtImg.forEach(item => {
  item.addEventListener('click', function (e) {
    e.preventDefault()
    const UIshirtCard = document.querySelector('.shirts-card'),
          UIshirtSec = document.querySelector('.shirts-section');

    let scrValue = e.target.attributes.src.value;
    UIshirtCard.style.backgroundImage  = `url(${scrValue})`;
    UIshirtCard.classList.toggle('transistion-left');
    UIshirtSec.style.backgroundImage  = `url(${scrValue})`;
  })
})
