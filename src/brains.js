(() => {
    const logo = document.getElementById('dvdlogo');
    const w = 210;
    const h = 130;
    const bounds = {
        x: window.innerWidth,
        y: window.innerHeight
    };
    //  0:start in the center
    logo.style.top = bounds.y - h >> 1;
    logo.style.left = bounds.x - w >> 1;

    //  1:decide random direction to travel

    //  2:go to bounds

    //  3:decide random counter direction

    //  4:GOTO:2

})();