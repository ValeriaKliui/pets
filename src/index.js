import './index.html';
import './pets.html';
import './index.scss';
import './modules/active-link';
import { shineActiveLink } from './modules/active-link';
import './modules/active-pet_card';
import { shineActiveButton } from './modules/active-pet_card';
import {resize } from './modules/resize';
import {makeSlider} from './modules/slider';
import { makePopUp } from './modules/make_pop-up';
import { cardTemplate } from './modules/opened_pop-up';
import './modules/opened_pop-up';


shineActiveLink();
shineActiveButton();

resize();
window.addEventListener('resize',resize);

makeSlider();
document.addEventListener('click', makePopUp);

cardTemplate();
