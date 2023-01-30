const roll = () => {
    return Math.floor(Math.random() * 6) + 1;
}
const run = () => {
    let randomNumber1 = roll();
    let randomNumber2 = roll()

    console.log(randomNumber1);
    console.log(randomNumber2);

}

document.addEventListener("DOMContentLoaded", () => {
    
});