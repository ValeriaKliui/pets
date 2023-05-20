const SLIDER = document.querySelector('.slider');
const SLIDES_CONTAINER = document.querySelector('.slides__container');
const ALL_ITEMS = document.querySelectorAll('.pets__card');
const ITEM_LEFT = document.querySelector('.left__card');
const ITEM_RIGHT = document.querySelector('.right__card')
const ITEM_ACTIVE = document.querySelector('.active__cards')

function makeSlider() {
    if (SLIDER) {
        const moveLeft = () => {
            SLIDES_CONTAINER.classList.add('transition_left');
            BTN_LEFT.removeEventListener('click', moveLeft);
            BTN_RIGHT.removeEventListener('click', moveRight);
        }
        const moveRight = () => {
            SLIDES_CONTAINER.classList.add('transition_right');
            BTN_LEFT.removeEventListener('click', moveLeft);
            BTN_RIGHT.removeEventListener('click', moveRight);
        }
        const randomCard = () => {
            let arrayOfCards = Array.from(ALL_ITEMS);
            let index = Math.floor(Math.random() * (arrayOfCards.length));
            // console.log(arrayOfCards)
            return arrayOfCards[index];
        }

        const BTN_LEFT = SLIDER.querySelector('.arrow_left');
        const BTN_RIGHT = SLIDER.querySelector('.arrow_right');
        BTN_LEFT.addEventListener('click', moveLeft);
        BTN_RIGHT.addEventListener('click', moveRight);
        SLIDES_CONTAINER.addEventListener('animationend', (event) => {
            if (event.animationName === "move-left") {
                SLIDES_CONTAINER.classList.remove('transition_left');
                let copiedLeft = ITEM_LEFT.cloneNode(true);
                copiedLeft.classList.remove('left__card');
                ITEM_ACTIVE.prepend(copiedLeft);
                ITEM_LEFT.innerHTML = randomCard().innerHTML;
                ITEM_RIGHT.innerHTML = ITEM_ACTIVE.lastElementChild.innerHTML;
                ITEM_ACTIVE.lastElementChild.remove();
                ITEM_RIGHT.classList.add('right__card');
            }
            else if (event.animationName === "move-right") {
                SLIDES_CONTAINER.classList.remove('transition_right');
                let copiedRight = ITEM_RIGHT.cloneNode(true);
                copiedRight.classList.remove('right__card');
                ITEM_ACTIVE.append(copiedRight);
                ITEM_RIGHT.innerHTML = randomCard().innerHTML;
                ITEM_LEFT.innerHTML = ITEM_ACTIVE.firstElementChild.innerHTML;
                ITEM_ACTIVE.firstElementChild.remove();
                ITEM_LEFT.classList.add('left__card');
            }

            SLIDES_CONTAINER.classList.remove('transition_left');
            SLIDES_CONTAINER.classList.remove('transition_right');
            BTN_LEFT.addEventListener('click', moveLeft);
            BTN_RIGHT.addEventListener('click', moveRight);
        });
    }
}

export { makeSlider}