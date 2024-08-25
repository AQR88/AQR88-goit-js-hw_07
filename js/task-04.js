function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const boxesContainer = document.querySelector("#boxes");
  let size = 30;
  boxesContainer.style.display = "flex";
  boxesContainer.style.gap = "20px";
  boxesContainer.style.flexDirection = "row";
  boxesContainer.style.margin = "20px";

  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement("div");
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    size += 10;
    boxesContainer.appendChild(div);
  }
}

function destroyBoxes() {
  const boxesContainer = document.querySelector("#boxes");
  boxesContainer.innerHTML = "";
}

document.querySelector("[data-create]").addEventListener("click", () => {
  const amount = document.querySelector("#controls input").value;
  createBoxes(amount);
});

document.querySelector("[data-destroy]").addEventListener("click", () => {
  destroyBoxes();
});
