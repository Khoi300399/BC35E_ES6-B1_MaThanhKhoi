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
  console.log(arrButton[0].classList.value);
  // addActive(arrButton);
};

let addActive = (arrBtn) => {
  for (let i in arrBtn) {
    if (arrBtn[i].classList.length === 3) {
      arrBtn[i].classList.remove("active");
      console.log(arrBtn[i].classList.length);
    }
    arrBtn[i].classList.add("active");
  }
};
changeColor();
