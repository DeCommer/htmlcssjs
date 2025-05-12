const dateText = document.getElementById('date-time')

let date = new Date();

dateText.innerHTML = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;



