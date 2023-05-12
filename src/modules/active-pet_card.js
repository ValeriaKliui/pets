let shinedButton;

function shineActiveButton(){
    let gallery = document.querySelector('.gallery');
    if (gallery) {
    gallery.onmouseover =(event)=>{
        let target = event.target;
        if (target.closest('.pets__card')){
        shineButton(target.closest('.pets__card'));
        }
    }
}
}

function shineButton(card){
let button = card.querySelector('.button');
    if (shinedButton) {
        shinedButton.classList.remove('active');
      }
      shinedButton = button;
      shinedButton.classList.add('active');
}
export {shineActiveButton}