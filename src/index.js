import './index.html';
import './pets.html';
import './index.scss';
import './modules/active-link';
import { shineActiveLink } from './modules/active-link';
import './modules/active-pet_card';
import { shineActiveButton } from './modules/active-pet_card';
import {resize } from './modules/resize';
import {makeSlider } from './modules/slider';

shineActiveLink();
shineActiveButton();

resize();
window.addEventListener('resize',resize);
makeSlider();
