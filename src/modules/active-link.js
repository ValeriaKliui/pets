function shineActiveLink() {
    let nav = document.querySelector('.nav');
    if (nav) {
        let links = nav.querySelectorAll('a');
        links.forEach(x => {if (x.href === window.location.href) x.classList.add('active')} );
}
}
export { shineActiveLink }