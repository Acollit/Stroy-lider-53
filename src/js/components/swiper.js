import Swiper from 'swiper';
import { Navigation, Pagination, Thumbs } from 'swiper/modules';
Swiper.use([Navigation, Pagination, Thumbs]);

const ThumbsInner = new Swiper('.hit__thumbs-inner', {
  slidesPerView: 7,
  spaceBetween: 20,

});

const swiperInner = new Swiper('.hit__swiper-inner', {
  slidesPerView: 1,
  spaceBetween: 20,



});



const swiperThumbs = new Swiper('.hit__thumbs', {
  slidesPerView: 4,
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

const swiperAbout = new Swiper('.about__swiper', {
  slidesPerView: 3,
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


  thumbs: {
    swiper: swiperProjectInnerThumbs,
  }
});


const swiperSectionHitThumbs = new Swiper('.section-hit__thumbs', {
  slidesPerView: 4,
  spaceBetween: 24,
  navigation: {
    nextEl: '.section-hit__arrow-right',
    prevEl: '.section-hit__arrow-left',
  },

});









