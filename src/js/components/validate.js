import { validateForms } from '../functions/validate-forms.js';

function disabled() {
  let graphModal = document.querySelector('.graph-modal');
  let modal = document.getElementById('modal');
  let modal4 = document.getElementById('modal4');
  let modal2 = document.getElementById('modal2');
  modal.classList.remove('graph-modal-open');
  modal.classList.remove('fade');
  modal.classList.remove('animate-open');
  modal2.classList.remove('graph-modal-open');
  modal2.classList.remove('fade');
  modal2.classList.remove('animate-open');
  modal4.classList.add('graph-modal-open');
  modal4.classList.add('fade');
  modal4.classList.add('animate-open');
  graphModal.classList.add('is-open');




  setTimeout(function () {

    modal4.classList.remove('graph-modal-open');
    modal4.classList.remove('fade')
    modal4.classList.remove('animate-open')
    graphModal.classList.remove('is-open')
    page.classList.remove('disable-scroll')

  }, 1500);
}

const file = document.getElementById('file-upload');
const filebtn = document.getElementById('filebtn');
const page = document.querySelector('.page__body')
if (filebtn) {
  filebtn.addEventListener('click', () => {
    if (file.files.length > 0) {
    } else {
      disabled()
    }

  });
  file.addEventListener('change', () => {
    if (file.files.length > 0) {
      filebtn.type = "submit";
    } else {
      filebtn.type = "button";
    }
  });
}


function thanks() {
  let graphModal = document.querySelector('.graph-modal');
  let modal = document.getElementById('modal');
  let modal3 = document.getElementById('modal3');
  let modal4 = document.getElementById('modal4');
  let modal2 = document.getElementById('modal2');
  modal.classList.remove('graph-modal-open');
  modal.classList.remove('fade');
  modal.classList.remove('animate-open');
  modal2.classList.remove('graph-modal-open');
  modal2.classList.remove('fade');
  modal2.classList.remove('animate-open');
  modal4.classList.remove('graph-modal-open');
  modal4.classList.remove('fade');
  modal4.classList.remove('animate-open');
  modal3.classList.add('graph-modal-open');
  modal3.classList.add('fade');
  modal3.classList.add('animate-open');
  graphModal.classList.add('is-open');




  setTimeout(function () {

    modal3.classList.remove('graph-modal-open');
    modal3.classList.remove('fade')
    modal3.classList.remove('animate-open')
    graphModal.classList.remove('is-open')
    page.classList.remove('disable-scroll')

  }, 3000);
}







const rules1 = [


  {
    ruleSelector: '.graph-modal__tel',
    tel: true,
    telError: ' ',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: ' '
      }
    ]
  },


];

const rules2 = [


  {
    ruleSelector: '.form__tel',
    tel: true,
    telError: ' ',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: ' '
      }
    ]
  },
];



const rules4 = [
  {
    ruleSelector: '.leave__input',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: ' '
      },

    ]
  },
];

const rules5= [
  {
    ruleSelector: '.modal__tel',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: ' '
      },

    ]
  },
];






validateForms('.graph-modal__form', rules1, 1, thanks);
validateForms('.modal__form', rules5, 1, thanks);
if (document.querySelector('.form__form')) {
  validateForms('.form__form', rules2, 1, thanks);
}


if (document.querySelector('.leave')) {
  validateForms('.leave__form', rules4, 1, thanks);
}




