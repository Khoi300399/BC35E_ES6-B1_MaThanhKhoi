let jumpText = () => {
  let text = document.querySelector(".heading").innerHTML;
  let arrText = [...text];
  //   console.log(arrText);
  renderUI(arrText);
};

let renderUI = (arr) => {
  let contentHTML = ``;
  for (let i in arr) {
    contentHTML += /*html */ `
    <span></span>
    `;
  }
};
jumpText();
