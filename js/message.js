const butt = document.getElementById('m-btn');
const content = document.querySelector('.content');
const text = document.getElementById('myText');

function flashText(elementId, interval) {
  const element = document.getElementById(elementId);
  if (element) {
    setInterval(function() {
      if (element.style.visibility === 'hidden') {
        element.style.visibility = 'visible';
      } else {
        element.style.visibility = 'hidden';
      }
    }, interval);
  }
}

butt.addEventListener('click', () => {
    text.style.display = "block"
    content.style.display = "block"
    butt.style.display = "none"

    flashText('myText', 200);
    
    console.log("test");
});

