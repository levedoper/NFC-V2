resizeHeight = (input) => {
    sWidth = window.innerWidth;
    sHeight = window.innerHeight;
    document.getElementById(input).style.height = `${sHeight}px`;
    document.getElementById(input).innerHTML = sHeight;
};