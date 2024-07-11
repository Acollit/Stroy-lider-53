import noUiSlider from 'nouislider';
import Isotope from 'isotope-layout';

// Получаем элементы слайдеров и селекторов
var priceSlider = document.querySelector('#price-slider');
var sizeSlider = document.querySelector('#size-slider');
var sizeSelect = document.querySelector('#size2'); // Новый селектор
var floorSelect = document.querySelector('#floor'); // Селектор для фильтрации по этажности

if (priceSlider) {
  // Инициализация слайдера для цены с одной ручкой
  noUiSlider.create(priceSlider, {
    start: 300000,
    step: 1000,
    connect: 'lower',
    tooltips: [
      {
        to: function (value) {
          value = Math.round(value);
          return value
        },

      }
    ],
    range: {
      'min': 300000,
      'max': 5000000
    }
  });
}

if (sizeSlider) {
  // Инициализация слайдера для размера с одной ручкой
  noUiSlider.create(sizeSlider, {
    start: 15,
    step: 5,
    connect: 'lower',
    tooltips: [
      {
        to: function (value) {
          value = Math.round(value);
        },
        from: function (value) {
          return value;
        }
      }
    ],
    range: {
      'min': 15,
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
      dimensions: (itemElem) => itemElem.getAttribute('data-dimensions')
    }
  });

  const applyFilters = () => {

    if (priceSlider && sizeSlider) {
      const minPrice = Number(priceSlider.noUiSlider.get());
      const minSize = Number(sizeSlider.noUiSlider.get());
      const selectedHouseType = document.querySelector('input[name="houseType"]:checked')?.value || 'Выбрать'; // Значение радио кнопки этажности
      const isAcerChecked = document.querySelector('input[name="acer"]:checked') !== null;
      const selectedSize = sizeSelect.value; // Значение селектора размера
      const selectedFloor = floorSelect.value; // Значение селектора этажности

      let filterFn = (itemElem) => {
        const itemPrice = parseInt(itemElem.getAttribute('data-price'), 10);
        const itemSize = parseInt(itemElem.getAttribute('data-size'), 10);
        const itemHouseType = itemElem.getAttribute('data-house-type');
        const itemHasAcer = itemElem.getAttribute('data-acer') === 'on';
        const itemDimensions = itemElem.getAttribute('data-dimensions');

        const matchesPrice = itemPrice >= minPrice;
        const matchesSize = itemSize >= minSize;
        const matchesHouseType = selectedHouseType === 'Выбрать' || itemHouseType === selectedHouseType;
        const matchesAcer = !isAcerChecked || itemHasAcer;
        const matchesDimensions = selectedSize === 'Выбрать' || itemDimensions === selectedSize;
        const matchesFloor = selectedFloor === 'Выбрать' || itemHouseType === selectedFloor;

        return matchesPrice && matchesSize && matchesHouseType && matchesAcer && matchesDimensions && matchesFloor;
      };

      iso.arrange({
        filter: filterFn
      });
    }
  };


  // Обработчики для обновления фильтра
  if (priceSlider) {
    priceSlider.noUiSlider.on('update', applyFilters);
  }

  if (sizeSlider) {
    sizeSlider.noUiSlider.on('update', applyFilters);
  }

  // Обработчики для радио-кнопок

  // Обработчик для нового селектора
  if (sizeSelect) {
    sizeSelect.addEventListener('change', applyFilters);
  }

  // Обработчик для селектора этажности
  if (floorSelect) {
    floorSelect.addEventListener('change', applyFilters);
  }


  // Добавляем обработчик для кнопки "Сбросить"
  const resetButton = document.querySelector('.filter__clean');
  function reset() {
    // Сброс значений слайдеров
    if (priceSlider) {
      priceSlider.noUiSlider.set(300000);
    }
    if (sizeSlider) {
      sizeSlider.noUiSlider.set(15);
    }



    // Сброс нового селектора
    if (sizeSelect) {
      sizeSelect.value = 'Выбрать';
    }

    // Сброс селектора этажности
    if (floorSelect) {
      floorSelect.value = 'Выбрать';
    }

    // Применить фильтры с новыми (сброшенными) значениями
    applyFilters();
  }
  document.addEventListener('DOMContentLoaded', function () {
    reset()
  });

  if (resetButton) {
    resetButton.addEventListener('click', () => {
      reset()
    });
  }

  // Обработчики для отмены выбора радиокнопок



}
