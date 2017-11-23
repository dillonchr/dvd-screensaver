(() => {
    //  the svg to move around
    const logo = document.getElementById('dvdlogo');
    //  width of the svg
    const w = 210;
    //  height of the svg
    const h = 130;
    //  throwaways for window size
    const windowW = window.innerWidth;
    const windowH = window.innerHeight;
    //  static max and min values for logo position
    const bounds = {
        top: 0,
        left: 0,
        right: windowW - w,
        bottom: windowH - h
    };
    //  current `left` css value for svg
    let x = windowW - w >> 1;
    //  current `top` css value for svg
    let y = windowH - h >> 1;
    //  returns 0 or 1
    const trueFalse = () => Math.round(Math.random());
    //  returns step distance in px sometimes inverted to bounce up/left
    const getStep = isReverse => (Math.round(Math.random() * 5) + 2) * (isReverse ? -1 : 1);
    const shuffleColor = () => logo.style.fill = `#${((1 << 24) * Math.random() | 0).toString(16)}`;
    //  endless function that keeps bouncing the svg between all four boundaries
    const goToBounds = (stepX, stepY) => {
        x += stepX;
        y += stepY;
        if (x <= bounds.left || x >= bounds.right) {
            stepX = getStep(x >= bounds.right);
        }
        if (y <= bounds.top || y >= bounds.bottom) {
            stepY = getStep(y >= bounds.bottom);
        }
        logo.style.top = y;
        logo.style.left = x;
        return requestAnimationFrame(() => goToBounds(stepX, stepY));
    };

    setInterval(shuffleColor, 5000);

    window.addEventListener('resize', () => {
        bounds.bottom = window.innerHeight - h;
        bounds.right = window.innerWidth - w;
    });

    window.addEventListener('keydown', window.close);
    window.addEventListener('mousemove', window.close);
    window.addEventListener('mousedown', window.close);

    //  kick off the goodness
    goToBounds(getStep(trueFalse()), getStep(trueFalse()));
})();
