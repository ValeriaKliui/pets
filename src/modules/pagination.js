const GALLERY = document.querySelector('.gallery');
const SLIDES_CONTAINER = document.querySelector('.slides__container');
const ALL_ITEMS = document.querySelectorAll('.pets__card');
const ITEM_LEFT = document.querySelector('.left__card');
const ITEM_RIGHT = document.querySelector('.right__card')
const ITEM_ACTIVE = document.querySelector('.active__cards')

let cardsAmount = 0;
window.addEventListener('resize', setAmountOfCards);
function setAmountOfCards() {
    let windowWidth = document.documentElement.clientWidth;
    if (windowWidth >= 1267) {
        cardsAmount = 8;
    }
    if (windowWidth < 1267 && windowWidth > 767) {
        cardsAmount = 6;
    }
    if (windowWidth <= 767) {
        cardsAmount = 4;
    }
}


function makePagination() {
    //     const BTN_LEFT = GALLERY.querySelector('.controller_left');
    //     const BTN_RIGHT = GALLERY.querySelector('.controller_right');
    // //     BTN_LEFT.addEventListener('click', moveLeft);
    // //     BTN_RIGHT.addEventListener('click', moveRight);
    // //     SLIDES_CONTAINER.addEventListener('animationend', (event) => {
    // //         if (event.animationName === "move-left") {
    // //             SLIDES_CONTAINER.classList.remove('transition_left');
    // //             let copiedLeft = ITEM_LEFT.cloneNode(true);
    // //             copiedLeft.classList.remove('left__card');
    // //             ITEM_ACTIVE.prepend(copiedLeft);
    // //             ITEM_LEFT.innerHTML = randomCard().innerHTML;
    // //             ITEM_RIGHT.innerHTML = ITEM_ACTIVE.lastElementChild.innerHTML;
    // //             ITEM_ACTIVE.lastElementChild.remove();
    // //             ITEM_RIGHT.classList.add('right__card');
    // //         }
    // //         else if (event.animationName === "move-right") {
    // //             SLIDES_CONTAINER.classList.remove('transition_right');
    // //             let copiedRight = ITEM_RIGHT.cloneNode(true);
    // //             copiedRight.classList.remove('right__card');
    // //             ITEM_ACTIVE.append(copiedRight);
    // //             ITEM_RIGHT.innerHTML = randomCard().innerHTML;
    // //             ITEM_LEFT.innerHTML = ITEM_ACTIVE.firstElementChild.innerHTML;
    // //             ITEM_ACTIVE.firstElementChild.remove();
    // //             ITEM_LEFT.classList.add('left__card');
    // //         }

    // //         SLIDES_CONTAINER.classList.remove('transition_left');
    // //         SLIDES_CONTAINER.classList.remove('transition_right');
    // //         BTN_LEFT.addEventListener('click', moveLeft);
    // //         BTN_RIGHT.addEventListener('click', moveRight);
    // //     });
    // // }
}


const shuffle = (array) => {
    let m = array.length, t, i;

    // Пока есть элементы для перемешивания
    while (m) {

        // Взять оставшийся элемент
        i = Math.floor(Math.random() * m--);

        // И поменять его местами с текущим элементом
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }

    return array;
}

export { makePagination }