const burgerDisplay = document.querySelector(".name-field");
const button = document.querySelector("img");

//GET
function getData() {
  fetch("https://my-burger-api.herokuapp.com/burgers/")
    .then((response) => response.json())
    .then((data) => {
      const randomNumber = Math.floor(Math.random() * data.length);
      console.log(randomNumber);
      const name = data[randomNumber].name;
      burgerDisplay.innerHTML = name;
    });
}

button.addEventListener("click", getData);
