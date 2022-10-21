let jumpText = () => {
  let text = document.querySelector(".heading").innerHTML;
  let arrText = [...text];
  //   console.log(arrText);
  renderUI(arrText);
};

let renderUI = (arr) => {
  let contentHTML = ``;
  for (let value of arr) {
    contentHTML += /*html */ `
    <span>value</span>
    `;
  }
  document.querySelector(".heading").innerHTML = contentHTML;
};
jumpText();
