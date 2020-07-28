// Lev2_1

let background = document.getElementsByTagName("body");
let greyBtn = document.getElementById("grauTaste");
let whiteBtn = document.getElementById("weissTaste");
let blueBtn = document.getElementById("blauTaste");
let yellowBtn = document.getElementById("gelbTaste");

const changeBgColor = (color) => {
    background[0]
    document.body.style.background = color;
};

greyBtn.addEventListener('click', function () {
    changeBgColor("gray");
});

whiteBtn.addEventListener('click', () => changeBgColor("white"));
blueBtn.addEventListener('click', () => changeBgColor("blue"));
yellowBtn.addEventListener('click', () => changeBgColor("yellow"));