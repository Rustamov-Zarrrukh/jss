let names = ["Alex", "John", "Constantine", "Tyler", "Smith", "Smith"]
let colors = ["red", "green", "blue", "black", "yellow", "red"]

let RandomElement = arr => arr[Math.floor(Math.random() * arr.length)];

let elements = document.querySelectorAll("div[id^='element-']")
elements.forEach(elem => {
  elem.textContent = RandomElement(names)
  elem.style.color = RandomElement(colors)
});
