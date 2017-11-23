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
        let goAgain = true;
        x += stepX;
        if (x <= bounds.left) {
            x = bounds.left;
            goAgain = false;
        } else if (x >= bounds.right) {
            goAgain = false;
        }
        y += stepY;
        if (y <= bounds.top) {
            y = bounds.top;
            goAgain = false;
        } else if (y >= bounds.bottom) {
            y = bounds.bottom;
            goAgain = false;
        }
        logo.style.top = y;
        logo.style.left = x;
        return goAgain && requestAnimationFrame(() => goToBounds(stepX, stepY));
    };

    goToBounds(getStep(trueFalse()), getStep(trueFalse()));


    //  2:go to bounds

    //  3:decide random counter direction

    //  4:GOTO:2

})();