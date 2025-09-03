// Add this inside your form validation logic
feedback.classList.add("show");

1.// Calculate Eco Points Based on User Action
function calculateEcoPoints(actionType, quantity) {
  const pointValues = {
    recycle: 10,
    compost: 8,
    reuse: 5,
    litterPickup: 15
  };

  const basePoints = pointValues[actionType] || 0;
  return basePoints * quantity;
}

// Example usage:
const userPoints = calculateEcoPoints("recycle", 3); // returns 30

2.// Trigger a DOM Animation Class
function triggerAnimation(elementId, animationClass) {
  const el = document.getElementById(elementId);
  if (!el) return;

  el.classList.add(animationClass);

  // Remove class after animation ends to allow retrigger
  setTimeout(() => {
    el.classList.remove(animationClass);
  }, 1000); // assumes 1s animation
}

// Example usage:
triggerAnimation("rewardBadge", "bounce");

3.// Local vs Global Scope Demo
let globalCount = 0; // Global scope

function incrementGlobal() {
  globalCount++;
  return globalCount;
}

function localCounter() {
  let localCount = 0; // Local scope
  localCount++;
  return localCount;
}

// Example usage:
incrementGlobal(); // returns 1, then 2, etc.
localCounter();    // always returns 1

4. //Reusable Fade Toggle
function toggleFade(elementId, show) {
  const el = document.getElementById(elementId);
  if (!el) return;

  el.style.transition = "opacity 0.5s ease";
  el.style.opacity = show ? 1 : 0;
}

// Example usage:
toggleFade("formFeedback", true); // fades in

5.// Dynamic Reward Tier Calculation
function getRewardTier(points) {
  if (points >= 100) return "Gold";
  if (points >= 50) return "Silver";
  if (points >= 20) return "Bronze";
  return "Starter";
}

// Example usage:
const tier = getRewardTier(65); // returns "Silver"


function animateBox() {
  const box = document.getElementById("box");
  box.classList.add("animate");

  setTimeout(() => box.classList.remove("animate"), 600); // reset
}

function flipCard(cardElement) {
  cardElement.classList.toggle("flipped");
}

function toggleLoading(show) {
  const loader = document.getElementById("loader");
  loader.style.display = show ? "block" : "none";
}

function showModal() {
  document.getElementById("modal").classList.add("show");
}

function hideModal() {
  document.getElementById("modal").classList.remove("show");
}

Bonus: Reusable Animation Trigger
function triggerAnimation(id, className, duration = 1000) {
  const el = document.getElementById(id);
  if (!el) return;

  el.classList.add(className);
  setTimeout(() => el.classList.remove(className), duration);
}

triggerAnimation("box", "animate", 600);

