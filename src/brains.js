(() => {
    const logo = document.getElementById('dvdlogo');
    const w = 210;
    const h = 130;
    const size = {
        w: window.innerWidth,
        h: window.innerHeight
    };
    const bounds = {
        top: 0,
        left: 0,
        right: size.w - w,
        bottom: size.h - h
    };
    let x = size.w - w >> 1;
    let y = size.h - h >> 1;

    //  0:start in the center
    logo.style.top = y;
    logo.style.left = x;

    //  1:decide random direction to travel
    const trueFalse = () => Math.round(Math.random());
    const getStep = isReverse => (Math.round(Math.random() * 9) + 1) * (isReverse ? -1 : 1);
    const goToBounds = (stepX, stepY) => {
        x += stepX;
        if (x <= bounds.left) {
            x = bounds.left;
            stepX = getStep(false);
        } else if (x >= bounds.right) {
            x = bounds.right;
            stepX = getStep(true);
        }
        y += stepY;
        if (y <= bounds.top) {
            y = bounds.top;
            stepY = getStep(false);
        } else if (y >= bounds.bottom) {
            y = bounds.bottom;
            stepY = getStep(true);
        }
        logo.style.top = y;
        logo.style.left = x;
        return requestAnimationFrame(() => goToBounds(stepX, stepY));
    };

    goToBounds(getStep(trueFalse()), getStep(trueFalse()));
})();
