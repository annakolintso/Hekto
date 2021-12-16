import '../style/index.scss';
import Swiper from 'swiper/bundle';
import 'swiper/scss';
import {createDropdown, createTabs} from './helper';

new Swiper('.js-hero-slider', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
  speed: 600,
  autoplay: {
    delay: 3000,
  },
});
createDropdown();
createTabs();
