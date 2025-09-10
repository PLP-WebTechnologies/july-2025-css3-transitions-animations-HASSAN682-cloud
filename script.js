// Example of scope, parameters, return values, and animation triggers

// Function with parameters & return value
function greetUser(name) {
  return `Hello, ${name}!`;
}

// Local vs global scope demo
let userName = "Student"; // global variable

function showGreeting() {
  let message = greetUser(userName); // local variable
  console.log(message);
}

// Trigger fade-in text animation on button click
const button = document.getElementById("animateBtn");
const fadeText = document.getElementById("fadeText");

button.addEventListener("click", () => {
  showGreeting(); // demonstrates function call
  fadeText.classList.add("show"); // triggers CSS transition
});


const moveBtn = document.getElementById("moveBtn");
const animatedBox = document.getElementById("animatedBox");

moveBtn.addEventListener("click", () => {
  animatedBox.classList.add("move");

  // Optional: remove class after animation ends to allow retrigger
  animatedBox.addEventListener("animationend", () => {
    animatedBox.classList.remove("move");
  }, { once: true });
});



const card = document.getElementById("card");

card.addEventListener("click", () => {
  card.classList.toggle("flipped");
});


const toggleLoader = document.getElementById("toggleLoader");
const loader = document.getElementById("loader");

toggleLoader.addEventListener("click", () => {
  if(loader.style.animationPlayState === "paused") {
    loader.style.animationPlayState = "running";
  } else {
    loader.style.animationPlayState = "paused";
  }
});

const modal = document.getElementById("modal");
const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");

openModal.addEventListener("click", () => {
  modal.classList.add("show");
});

closeModal.addEventListener("click", () => {
  modal.classList.remove("show");
});

