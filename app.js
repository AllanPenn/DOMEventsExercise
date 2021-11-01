const button1 = document.getElementById(`one`);
button1.onclick = () => {
  alert("Cool! You can hear/understand a hummingbird and ants");
}
const h3 = document.querySelector(`h3`);
h3.addEventListener(`mouseenter`, () => {
  alert(`OH NO! The squirrels are on to you. Now you have to leave this reality and move to a new one`);
});
const form = document.querySelector(`form`);
form.addEventListener(`submit`, () => {
  alert(`${form.elements.quote.value}`);
});
// BONUS
const darkMode = document.getElementById(`dm`);
const everything = document.querySelectorAll(`*`);
darkMode.addEventListener(`click`, () => {
  for (elements of everything){
    elements.classList.toggle(`dark-mode`);
  }
});
const reality = document.querySelector(`#reality`);
let clickCount = 0
reality.addEventListener(`click`, () => {
  clickCount++;
  if (clickCount < 3){
    alert(`You have successfully moved to another reality`);
  } else if (clickCount === 3){
    alert(`OH NO! You can only move to a new another reality a couple times. You are stuck in this reality!`);
  }
});