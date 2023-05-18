let slider = document.querySelector('.slider');
let popUp = document.querySelector('.pop-up');
let popUpWrapper = document.querySelector('.pop-up__wrapper');
let petsCards = slider.querySelector('.pets__card')
let closeButton = popUpWrapper.querySelector('.close');

let shadow = document.querySelector('.shadowing');

function makePopUp() {
    if (slider) {
        slider.addEventListener('click', (event) => {
            let target = event.target;
            if (target.matches('button')) {
                popUpWrapper.classList.toggle('hidden');
                // document.body.classList.toggle('stop-scroll');
                shadow.classList.toggle('hidden')
            }
        }
        )
        closeButton.addEventListener('click', (event) => {
            popUpWrapper.classList.toggle('hidden');
        })
        if (!popUpWrapper.classList.contains('hidden')) {
            document.addEventListener('click', (event) => {
                let target = event.target;
                    if (!target.closest('.pop-up__wrapper')) {
                        console.log('j')
                    }
            }
            )
        }
    }
}
export { makePopUp }