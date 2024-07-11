import noUiSlider from 'nouislider';
import Choices from 'choices.js';

var creditSlider = document.querySelector('#credit-slider');
if (creditSlider) {
  // Инициализация слайдера для цены с одной ручкой
  noUiSlider.create(creditSlider, {
    start: 500000,
    step: 10000,
    connect: 'lower',
    tooltips: [
      {
        to: function (value) {
          value = Math.round(value);
          return value;
        }

      }
    ],
    range: {
      'min': 500000,
      'max': 50000000
    }
  });
}

if (document.querySelector('.credit')) {
  const targetSelect = new Choices('#credit-select', {
    searchEnabled: false,
    itemSelectText: '',



  });
  targetSelect.passedElement.element.addEventListener('change', (event) => {
    let credit1 = document.getElementById("credit1");
    credit1.value = event.target.value;
    console.log(credit1.value);
  });


}
