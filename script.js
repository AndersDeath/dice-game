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

const createLine = (num1, num2) => {
    return `
    <div class="score-cell">${num1}</div>
    <div class="score-cell">${num1}</div>`;
}

const scores = [];

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('.throw-cubics').addEventListener('click', () => {
        let num1 = roll();
        setNumber(document.querySelector('.box-1'), num1);
        let num2 = roll();
        setNumber(document.querySelector('.box-2'), num2);
        scores.push([num1, num2]);
        if(scores.length > 0) {
            let el =  document.querySelector('.scores');
            el.style.display = "block";
            const node = document.createElement('div');
            node.classList.add('score-line');
            node.innerHTML  = createLine(num1, num2);
            el.appendChild(node)
        }
    })
});