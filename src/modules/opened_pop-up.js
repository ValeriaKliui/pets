import petsInfo from './pets.json';
import { POP_UP } from './make_pop-up'
import { SLIDER } from './slider';

const PETS_CARD = document.querySelector('.card');
const PET_PHOTO = document.querySelector('.card__img');
const PET_NAME = document.querySelector('.card__title');
const PET_TYPE = document.querySelector('.card__subtitle');
const PET_DESCRIPTION = document.querySelector('.card__description');
const PET_AGE = document.querySelector('.age');
const PET_INOCULATIONS = document.querySelector('.inoculations');
const PET_DISEASES = document.querySelector('.diseases');
const PET_PARASITES = document.querySelector('.parasites');

if (SLIDER) {
SLIDER.addEventListener('click', cardTemplate)
}

function cardTemplate(event) {
    if (event) {
        let card = event.target.closest('.pets__card');
        if (card) {
            let openedPetName = card.querySelector('.pets-card-title').innerText.trim();
            petsInfo.forEach(pet => {
                if (pet.name === openedPetName) {
                PET_PHOTO.src = pet.img;
                console.log(pet.img, PET_PHOTO.src)
                PET_NAME.innerText = pet.name;
                PET_TYPE.innerText = `${pet.type} - ${pet.breed}`;
                PET_DESCRIPTION.innerText = pet.description;
                PET_AGE.innerText = pet.age;
                PET_INOCULATIONS.innerText = pet.inoculations.join(', ');
                PET_DISEASES.innerText = pet.diseases.join(', ');
                PET_PARASITES.innerText = pet.parasites.join('m');
                }
            })
        }
    }
}
export { cardTemplate }