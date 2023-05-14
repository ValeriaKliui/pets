let slider = document.querySelector('.slider');
let sliderContainer = document.querySelector('.slides__container')

function makeSlider() {
    if (slider) {
        let rightButton = slider.querySelector('.arrow_right');
        rightButton.addEventListener('click', moveSlides);
        console.log(sliderContainer.clientWidth);
    }
}
function moveSlides(event){
    sliderContainer.style.transform = `translateX(-${cardWidth}px)`;
    cardWidth+=cardWidth;
}
export { makeSlider }