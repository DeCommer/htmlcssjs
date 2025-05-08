const clickAmnttxt = document.getElementById('click-amount');
const plusBtn = document.getElementById('plus-btn'); 
const minusBtn = document.getElementById('minus-btn'); 
const resetBtn = document.getElementById('reset-btn');

const incr = () => {
    clickAmnttxt.innerHTML ++;
}

const decr = () => {
    clickAmnttxt.innerHTML --;
}

const reset = () => {
    clickAmnttxt.innerHTML = 0;
}

plusBtn.addEventListener('click', () => {
    incr();
});

minusBtn.addEventListener('click', () => {
    decr();
})

resetBtn.addEventListener('click', () => {
    reset();
});