const circles = document.querySelectorAll('.circle');

circles.forEach(circle => {
  circle.addEventListener('click', () => {
    const info = circle.getAttribute('data-info');
    const imgPath = circle.getAttribute('data-img');

    if (circle.innerHTML.trim() === info) {
      circle.innerHTML = `<img src="${imgPath}" alt="icon" style="width:60px;height:60px;">`;
    } else {
      circle.innerHTML = info;
    }
  });
});


const tmiInput = document.getElementById('tmi-input');
const saveTmiBtn = document.getElementById('save-tmi');
const tmiList = document.getElementById('tmi-list');

saveTmiBtn.addEventListener('click', () => {
  const text = tmiInput.value.trim();
  if (text) {
    const p = document.createElement('p');
    p.textContent = text;
    tmiList.appendChild(p);
    tmiInput.value = '';
  }
});

const likeBtn = document.getElementById('like-btn');
const likeCount = document.getElementById('like-count');
let count = 0;

likeBtn.addEventListener('click', () => {
  count++;
  likeCount.textContent = count;
});
