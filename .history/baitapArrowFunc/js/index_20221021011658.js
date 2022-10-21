let changeColor = () => {
  const colorList = [
    "pallet",
    "viridian",
    "pewter",
    "cerulean",
    "vermillion",
    "lavender",
    "celadon",
    "saffron",
    "fuschia",
    "cinnabar",
  ];
  let contentColors = ``;
  for (let index = 0; index < colorList.length; index++) {
    let color = colorList[index];
    contentColors += `
    <button class="color-button ${color}" onclick="btnChangeColor('${color}')"></button>
    `;
  }
  document.querySelector("#colorContainer").innerHTML = contentColors;
};

let btnChangeColor = (color) => {
  let house = document.getElementById("house").classList;
  let arrButton = document.querySelectorAll("button");
  house.add(`${color}`);
  if (house.length > 2) {
    house.remove(house[1]);
  }

  addClassActive(arrButton);
};

let addClassActive = (arrBtn) => {
  arrBtn.forEach((ele) => {
    ele.addEventListener("click", function () {
      arrBtn.forEach((btn) => btn.classList.remove("active"));

      this.classList.add("active");
    });
  });
};
changeColor();
