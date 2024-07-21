import Swiper from 'swiper';
import { Navigation, Pagination, Thumbs } from 'swiper/modules';
Swiper.use([Navigation, Pagination, Thumbs]);

const ThumbsInner = new Swiper('.hit__thumbs-inner', {
  slidesPerView: 'auto',
  spaceBetween: 20,

});

const swiperInner = new Swiper('.hit__swiper-inner', {
  slidesPerView: 1,
  spaceBetween: 20,



});



const swiperThumbs = new Swiper('.hit__thumbs', {
  slidesPerView: 'auto',
  spaceBetween: 24,
  navigation: {
    nextEl: '.hit__arrow-right',
    prevEl: '.hit__arrow-left',
  },

});


const swiper = new Swiper('.hit__swiper', {
  slidesPerView: 1,
  spaceBetween: 20,

  thumbs: {
    swiper: swiperThumbs,
  }

});







const ThumbsInnerTwo = new Swiper('.hit__thumbs-inner--two', {
  slidesPerView: 'auto',
  spaceBetween: 20,

});

const swiperInnerTwo = new Swiper('.hit__swiper-inner--two', {
  slidesPerView: 1,
  spaceBetween: 20,



});



const swiperThumbsTwo = new Swiper('.hit__thumbs--two', {
  slidesPerView: 'auto',
  spaceBetween: 24,
  navigation: {
    nextEl: '.hit__arrow-right--two',
    prevEl: '.hit__arrow-left--two',
  },

});





const swiperTwo = new Swiper('.hit__swiper--two', {
  slidesPerView: 1,
  spaceBetween: 20,

  thumbs: {
    swiper: swiperThumbsTwo,
  }

});







const ThumbsInnerThree = new Swiper('.hit__thumbs-inner--three', {
  slidesPerView: 'auto',
  spaceBetween: 20,

});

const swiperInnerThree = new Swiper('.hit__swiper-inner--three', {
  slidesPerView: 1,
  spaceBetween: 20,



});



const swiperThumbsTree = new Swiper('.hit__thumbs--three', {
  slidesPerView: 'auto',
  spaceBetween: 24,
  navigation: {
    nextEl: '.hit__arrow-right--three',
    prevEl: '.hit__arrow-left--three',
  },

});





const swiperThree = new Swiper('.hit__swiper--three', {
  slidesPerView: 1,
  spaceBetween: 20,

  thumbs: {
    swiper: swiperThumbsTree,
  }

});


const ThumbsInnerFour = new Swiper('.hit__thumbs-inner--four', {
  slidesPerView: 'auto',
  spaceBetween: 20,

});

const swiperInnerFour = new Swiper('.hit__swiper-inner--four', {
  slidesPerView: 1,
  spaceBetween: 20,



});



const swiperThumbsFour = new Swiper('.hit__thumbs--four', {
  slidesPerView: 'auto',
  spaceBetween: 24,
  navigation: {
    nextEl: '.hit__arrow-right--four',
    prevEl: '.hit__arrow-left--four',
  },

});





const swiperFour = new Swiper('.hit__swiper--four', {
  slidesPerView: 1,
  spaceBetween: 20,

  thumbs: {
    swiper: swiperThumbsFour,
  }

});




const swiperAbout = new Swiper('.about__swiper', {
  slidesPerView: 'auto',
  spaceBetween: 24,
  navigation: {
    nextEl: '.about__arrow-right',
    prevEl: '.about__arrow-left',
  },

});





const swiperSectionStocks = new Swiper('.section-stocks__swiper', {
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: '.section-stocks__arrow-right',
    prevEl: '.section-stocks__arrow-left',
  },


});



const swiperGallery = new Swiper('.gallery__swiper', {
  slidesPerView: 'auto',
  spaceBetween: 24,



});
const swiperProjectInnerThumbs = new Swiper('.project-inner__thumbs', {
  slidesPerView: 'auto',
  spaceBetween: 20,



});

const swiperProjectInner = new Swiper('.project-inner__swiper', {
  slidesPerView: 1,
  spaceBetween: 24,
  autoHeight: true,

  thumbs: {
    swiper: swiperProjectInnerThumbs,
  }
});


const swiperSectionHitThumbs = new Swiper('.section-hit__thumbs', {
  slidesPerView: 'auto',
  spaceBetween: 24,
  navigation: {
    nextEl: '.section-hit__arrow-right',
    prevEl: '.section-hit__arrow-left',
  },

});









