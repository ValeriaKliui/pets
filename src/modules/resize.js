function resize(e) {
    let windowWidth = document.documentElement.clientWidth;
    let slider = document.querySelector('.slider');
    let burger = document.querySelector('.burger');
    let menuMobile = document.querySelector('.menu_mobile');

    if (windowWidth <= 767) {

        if (burger) {
            let nav = document.querySelector('.nav');
            let navMobile = nav.cloneNode(true);
            let shadow = document.querySelector('.shadowing');
            if (menuMobile) {
                if (!menuMobile.querySelector('.nav')) {
                    menuMobile.append(navMobile);
                }
                burger.addEventListener('click', () => {
                    menuMobile.classList.toggle('hidden');
                    menuMobile.classList.toggle('menu_mobile_centered');
                    burger.classList.toggle('burger_opened');
                    document.body.classList.toggle('stop-scroll');
                    shadow.classList.toggle('hidden')
                })
            }
            document.addEventListener('click', e => {
                let target = e.target;
                if (menuMobile.classList.contains('menu_mobile_centered') && !target.closest('.burger')) {
                    if (!target.closest('.menu_mobile') || target.closest('a')) {
                        menuMobile.classList.toggle('menu_mobile_centered');
                        menuMobile.classList.toggle('hidden');
                        burger.classList.toggle('burger_opened');
                        document.body.classList.toggle('stop-scroll');
                        shadow.classList.toggle('hidden')
                        }
                }
            })
        }
    }
    else if (windowWidth >= 768 && windowWidth < 1268) {
    }
    else {

    }
}


export { resize } 