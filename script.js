const numberPrefix = 'number-';
const numberClasses = (() => {
    let output = [];
    for (let index = 1; index <= 6; index++) {
        output.push(numberPrefix + index);
    }
    return output;
})();

const roll = () => {
    return Math.floor(Math.random() * 6) + 1;
}

const run = () => {
    let randomNumber1 = roll();
    let randomNumber2 = roll()

    console.log(randomNumber1);
    console.log(randomNumber2);
}

const setNumber = (el, num) => {
    numberClasses.forEach((e) => {
        el.classList.remove(e);
    });
    el.classList.add(numberPrefix + num)
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('.throw-cubics').addEventListener('click', () => {
        let num = roll();
        setNumber(document.querySelector('.box-1'), num);
        num = roll();
        setNumber(document.querySelector('.box-2'), num);
    })
});