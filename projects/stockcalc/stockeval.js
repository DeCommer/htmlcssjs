const targetIn = document.getElementById('target-in');
const entryIn = document.getElementById('entry-in');
const stopIn = document.getElementById('stop-in');
const sharesIn = document.getElementById('shares-in');
const enterBtn = document.getElementById('enter-btn');
const clearBtn = document.getElementById('clear-btn');
const profitText = document.querySelector(".profit-txt");
const costText = document.querySelector(".cost-txt");
const riskText = document.querySelector(".risk-txt");
const resultsShowHide = document.querySelector(".results-container");

function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function run() {
    const profit = parseFloat((targetIn.value - entryIn.value) * sharesIn.value).toFixed(2);
    const cost = parseFloat(entryIn.value * sharesIn.value).toFixed(2);
    const risk = parseFloat((stopIn.value - entryIn.value) * sharesIn.value).toFixed(2);
    profitText.innerHTML = `Profit: <span class="money-text green">$${formatNumber(profit)}</span>`;
    costText.innerHTML = `Cost: <span class="money-text yellow">$${formatNumber(cost)}</span>`;
    riskText.innerHTML = `Risk: <span class="money-text red">$${formatNumber(risk)}</span>`;
}

run();

enterBtn.addEventListener('click', () => {
    run();
});

clearBtn.addEventListener('click', () => {
    targetIn.value = null;
    entryIn.value = null;
    stopIn.value = null;
    sharesIn.value = null;

    profitText.innerHTML = `Profit: <span class="money-text green">$0.00</span>`;
    costText.innerHTML = `Cost: <span class="money-text yellow">$0.00</span>`;
    riskText.innerHTML = `Risk: <span class="money-text red">$0.00</span>`;
});


// ======== equations ============
// p = (t - e) * n
// c = e * n
// r = (s - e) * n  