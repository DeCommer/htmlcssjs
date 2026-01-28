const clickAmnttxt = document.getElementById('click-amount');
const plusBtn = document.getElementById('plus-btn'); 
const minusBtn = document.getElementById('minus-btn'); 
const resetBtn = document.getElementById('reset-btn');
const intervalIn = document.getElementById('interval-in');
const intervalTxt = document.getElementById('interval-amount');

let clickAmount = 0;
let intervalAmount = intervalIn.value;
let intervalincr = 0;

clickAmnttxt.innerHTML = clickAmount;
intervalTxt.innerHTML = intervalAmount;

const incr = () => {
    clickAmount++
    clickAmnttxt.innerHTML = clickAmount;
}

const decr = () => {
    clickAmount--
    clickAmnttxt.innerHTML = clickAmount;
}

const reset = () => {
    clickAmount = 0;
    intervalAmount = 0;
    intervalincr = 0;
    intervalIn.value = '';
    clickAmnttxt.innerHTML = 0;
    intervalTxt.innerHTML = 0;
}

const setInterval = () => {
    let intervalAmount = intervalIn.value;
    if(intervalAmount == clickAmount) {
        intervalincr++;
        intervalAmount = clickAmount
        intervalTxt.innerHTML = intervalincr;
        console.log(`Interval: ${intervalAmount}`);
        console.log(`click: ${clickAmount}`);
        console.log(`Increment: ${intervalincr}`);
    }
}

plusBtn.addEventListener('click', () => {
    incr();
    setInterval();
});

minusBtn.addEventListener('click', () => {
    decr();
})

resetBtn.addEventListener('click', () => {
    reset();
});

