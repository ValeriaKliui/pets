let slider = document.querySelector('.slider');
const POP_UP = document.querySelector('.pop-up');
let popUpWrapper = document.querySelector('.pop-up__wrapper');
let petsCards = slider.querySelector('.pets__card')
let closeButton = document.querySelector('.close');
let margin = (window.innerWidth - 1000)/2;
window.addEventListener('resize',setMargin);

let shadow = document.querySelector('.shadowing');
closeButton.classList.add('hidden');

function makePopUp(event) {
    let target = event.target;
    let itIsCard = target.closest('.pets__card');
    if (target.closest('.pop-up')) {
        return null
    }
    if (!itIsCard)
    {
        closeButton.classList.add('hidden');
        popUpWrapper.classList.add('hidden');
        popUpWrapper.classList.remove('pop-up__wrapper_centered');
        document.body.classList.remove('stop-scroll');
    }
    if (itIsCard)
    {
        closeButton.classList.remove('hidden');
        closeButton.style.marginRight = `${margin}px`;
        popUpWrapper.prepend(closeButton)
        popUpWrapper.classList.remove('hidden');
        popUpWrapper.classList.add('pop-up__wrapper_centered');
        document.body.classList.add('stop-scroll');
    }
}
function setMargin(){
    margin = (window.innerWidth - 1100 )/2;
    return margin;
}
export { makePopUp, POP_UP }