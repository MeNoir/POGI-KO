const input = document.querySelector("input");
const body = document.body;

function getContrastYIQ(hexColor) {
  const r = parseInt(hexColor.slice(1, 3), 16);
  const g = parseInt(hexColor.slice(3, 5), 16);
  const b = parseInt(hexColor.slice(5, 7), 16);
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq;
}

function updateColors(selectedColor) {
  const btn = document.querySelector(".btn");
  body.style.backgroundColor = selectedColor;
  const contrastColor = getContrastYIQ(selectedColor) >= 128 ? "black" : "white";
  body.style.color = contrastColor;
  
  
}

input.oninput = () => {
  const selectedColor = input.value;
  updateColors(selectedColor);
  localStorage.setItem("selectedColor", selectedColor);
};

const savedColor = localStorage.getItem("selectedColor");
if (savedColor) {
  updateColors(savedColor);
  input.value = savedColor;
}



let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

window.onscroll = () => {
  menu.classList.remove('bx-x');
  navbar.classList.remove('active');
};

const sr = ScrollReveal({
  distance: '60px',
  duration: 2500,
  reset: true,
});

sr.reveal('.home-text', { delay: 200, origin: 'top' });
sr.reveal('.home-img', { delay: 400, origin: 'top' });
sr.reveal('.about, .cta, .resume, .contact, .footer', { delay: 200, origin: 'top' });


