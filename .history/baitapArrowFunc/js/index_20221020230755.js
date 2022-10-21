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
  let arrButton = document.querySelectorAll(".color-button");
  house.add(`${color}`);
  if (house.length > 2) {
    house.remove(house[1]);
  }
  for (let index in arrButton) {
    if (arrButton[index].classList.value === `color-button ${color}`) {
    }
  }
  // console.log("house: ", arrButton[1].classList.value);
};
changeColor();
