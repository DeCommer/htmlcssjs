
const randArr = [];
let length = 5;

for(let i = 1; i <= length; i++) {
    const randomNumber = Math.floor(Math.random() * 1000) + 1
    randArr.push(randomNumber);
}

console.log(randArr);
