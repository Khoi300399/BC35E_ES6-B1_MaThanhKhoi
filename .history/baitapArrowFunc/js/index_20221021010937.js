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

  // for (let i in arrButton) {
  //   if (arrButton[i].classList[1] === color) {
  //     arrButton[i].classList.remove("active");
  //   }
  //   arrButton[i].classList.add("active");
  // }
  addActive(arrButton);
};

let addActive = (arrBtn) => {
  arrBtn.forEach((ele) => {
    ele.addE;
  });
};
changeColor();
