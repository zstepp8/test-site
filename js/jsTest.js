let button = document.querySelector(".random-word-button");

const words = ["Zachary", "Stepp"];

button.addEventListener('click', () => {
    let num = Math.floor(Math.random() * words.length);
    button.innerHTML = words[num];
    button.style.backgroundColor = "random";
});