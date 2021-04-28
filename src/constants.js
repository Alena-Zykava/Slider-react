import mountain from './assets/mountain.jpg';
import lake from './assets/lake.jpg';
import bridge from './assets/bridge.jpg';


const dataSlides = [
  {
    title: 'Mountain',
    image: mountain,
  },
  {
    title: 'Lake',
    image: lake,
  },
  {
    title: 'Bridge',
    image: bridge,
  },
];

const WIDTH_SLIDER = 200;

const MAX_SHIFT_SLIDE = 0 - (dataSlides.length - 1) * WIDTH_SLIDER;

export {dataSlides, WIDTH_SLIDER, MAX_SHIFT_SLIDE};