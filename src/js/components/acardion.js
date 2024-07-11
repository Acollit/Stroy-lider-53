document.addEventListener('DOMContentLoaded', () => {
  const item = document.querySelectorAll(".quest__item")
  item.forEach(el => {
    el.addEventListener('click', (e) => {
      const self = e.currentTarget;
      const btn = self.querySelector(".quest__btn")
      const text = self.querySelector(".quest__text")
      text.classList.toggle('quest__text--active')
      self.classList.toggle('quest__box--active')
      btn.classList.toggle('quest__btn--active')

      if (text.classList.contains('quest__text--active')) {
        text.style.maxHeight = text.scrollHeight + 'px';
      } else {
        text.style.maxHeight = null;
      }

    });
  });



})
