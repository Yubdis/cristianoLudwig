const debounce = (fn) => {
    let frame;

    return (...params) => {
        if (frame) {
            cancelAnimationFrame(frame);
        }

        frame = requestAnimationFrame(() => {
            fn(...params);
        });
    };
};

const storeScroll = () => {
    document.documentElement.dataset.scroll = window.scrollY;
};

storeScroll();

document.addEventListener('scroll', debounce(storeScroll), { passive: true });

const navBarClick = function(e) {
    document.getElementById('nav-bar').classList.toggle('active');
};

document.getElementById('nav-bar').addEventListener('click', navBarClick);
