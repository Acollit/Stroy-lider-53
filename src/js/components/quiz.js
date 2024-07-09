const quizItems = document.querySelectorAll('.quiz__item');
const nextButtons = document.querySelectorAll('.quiz__next');
const prevButtons = document.querySelectorAll('.quiz__prev');
const block = document.querySelector('.quiz__block')

let count = document.querySelector('.quiz__count--active');
nextButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const currentItem = quizItems[index];
    const nextItem = quizItems[index + 1];
    count.textContent = index + 2;

    if (index === 6) {
      block.classList.add('quiz__block--dis');
    }
    if (nextItem) {
      currentItem.classList.remove('quiz__item--active');
      nextItem.classList.add('quiz__item--active');
    }
  });
});

prevButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const currentItem = quizItems[index + 1];
    const prevItem = quizItems[index];
    count.textContent = index + 1;
    if (prevItem) {
      currentItem.classList.remove('quiz__item--active');
      prevItem.classList.add('quiz__item--active');
    }
  });
});
