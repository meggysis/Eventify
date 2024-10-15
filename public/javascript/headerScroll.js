let previousScrollY = 0;
const header = document.querySelector('.eventify-header');

window.addEventListener('scroll', function() {
    const currentScrollY = window.scrollY; // scrollY gets current scroll position

    if (currentScrollY > previousScrollY) {
        // scroll down
        header.style.transform = 'translateY(-100%)'; // hide
    } else {
        // scroll up
        header.style.transform = 'translateY(0)'; // show
    }
    previousScrollY = currentScrollY; // scroll position update
});