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
  let button = document.querySelector(`.${color}`).classList;
  house.add(`${color}`);
  button.add("active");
  if (house.length > 2) {
    house.remove(house[1]);
    button.remove(button[1]);
  }
  console.log("house: ", button);
};
changeColor();
