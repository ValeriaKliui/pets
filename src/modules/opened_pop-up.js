import petsInfo from './pets.json';
import { POP_UP } from './make_pop-up'
import { SLIDER } from './slider';

const PETS_CARD = POP_UP.querySelector('.card');
const PET_PHOTO = PETS_CARD.querySelector('.card__img');
const PET_NAME = PETS_CARD.querySelector('.card__title');
const PET_TYPE = PETS_CARD.querySelector('.card__subtitle');
const PET_DESCRIPTION = PETS_CARD.querySelector('.card__description');
const PET_AGE = PETS_CARD.querySelector('.age');
const PET_INOCULATIONS = PETS_CARD.querySelector('.inoculations');
const PET_DISEASES = PETS_CARD.querySelector('.diseases');
const PET_PARASITES = PETS_CARD.querySelector('.parasites');

SLIDER.addEventListener('click', cardTemplate)

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