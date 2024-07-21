import noUiSlider from 'nouislider';
import Isotope from 'isotope-layout';

// Получаем элементы слайдеров и селекторов
var priceSlider = document.querySelector('#price-slider');
var sizeSlider = document.querySelector('#size-slider');
var floorSelect = document.querySelector('#floor'); // Селектор для фильтрации по этажности
var roomSelect = document.querySelector('input[name="room"]:checked'); // Радио-кнопки для фильтрации по количеству спален
var complectSelect = document.querySelector('input[name="complect"]:checked'); // Радио-кнопки для фильтрации по комплектности

if (priceSlider) {
  // Инициализация слайдера для цены с одной ручкой
  noUiSlider.create(priceSlider, {
    start: 500000,
    step: 1000,
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
      'max': 5000000
    }
  });
}

if (sizeSlider) {
  // Инициализация слайдера для размера с одной ручкой
  noUiSlider.create(sizeSlider, {
    start: 20,
    step: 5,
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
      'min': 20,
      'max': 300
    }
  });
}

const grid = document.querySelector('.catalog__grid');

if (grid) {
  const iso = new Isotope(grid, {
    itemSelector: '.catalog__item',
    layoutMode: 'masonry',
    masonry: {
      gutter: 24,
    },
    getSortData: {
      price: (itemElem) => parseInt(itemElem.getAttribute('data-price'), 10),
      size: (itemElem) => parseInt(itemElem.getAttribute('data-size'), 10),
    }
  });

  const getSelectedRadioValue = (name) => {
    const selectedRadio = document.querySelector(`input[name="${name}"]:checked`);
    return selectedRadio ? selectedRadio.value : null;
  };


  const applyFilters = () => {
    if (priceSlider && sizeSlider) {
      const minPrice = Number(priceSlider.noUiSlider.get());
      const minSize = Number(sizeSlider.noUiSlider.get());
      const selectedFloor = getSelectedRadioValue('Floor');
      const selectedRoom = getSelectedRadioValue('room');
      const selectedComplect = getSelectedRadioValue('complect');

      let filterFn = (itemElem) => {
        const itemPrice = parseInt(itemElem.getAttribute('data-price'), 10);
        const itemSize = parseInt(itemElem.getAttribute('data-size'), 10);
        const itemFloor = itemElem.getAttribute('data-floor');
        const itemRoom = itemElem.getAttribute('data-room');
        const itemComplect = itemElem.getAttribute('data-complect');

        const matchesPrice = itemPrice >= minPrice;
        const matchesSize = itemSize >= minSize;
        const matchesFloor = !selectedFloor || itemFloor === selectedFloor;
        const matchesRoom = !selectedRoom || itemRoom === selectedRoom;
        const matchesComplect = !selectedComplect || itemComplect === selectedComplect;

        return matchesPrice && matchesSize && matchesFloor && matchesRoom && matchesComplect;
      };

      iso.arrange({
        filter: filterFn
      });


    }
  };


  applyFilters();

  // Обработчики для обновления фильтра
  const search = document.querySelector('.catalog__btn');
  if (search) {
    search.addEventListener('click', () => {
      applyFilters();
    });
  }

  // Обработчики для радио-кнопок
  const radioButtons = document.querySelectorAll('input[type="radio"]');
  radioButtons.forEach(radio => {
    radio.addEventListener('click', function (event) {
      if (this.previousChecked) {
        this.checked = false;
        this.previousChecked = false;
      } else {
        this.previousChecked = true;
      }
    });
    // Initialize the previousChecked property
    radio.previousChecked = radio.checked;
  });

  // Добавляем обработчик для кнопки "Сбросить"
  const resetButton = document.querySelector('.catalog__clear');
  function reset() {
    // Сброс значений слайдеров
    if (priceSlider) {
      priceSlider.noUiSlider.set(300000);
    }
    if (sizeSlider) {
      sizeSlider.noUiSlider.set(15);
    }

    // Сброс радио-кнопок
    const allRadioButtons = document.querySelectorAll('input[type="radio"]');
    allRadioButtons.forEach(radio => {
      radio.checked = false;
      radio.previousChecked = false;
    });
  }

  if (resetButton) {
    resetButton.addEventListener('click', () => {
      reset();
      applyFilters();
    });
  }

  const catalogBtn = document.getElementById('catalogbtn')
  const catalog = document.querySelector('.catalog__aside')
  catalogBtn.addEventListener('click', () => {
    if (catalog.classList.contains('catalog__aside--active')) {
      catalog.classList.remove('catalog__aside--active')
    } else {
      catalog.classList.add('catalog__aside--active')
    }
  });

}
