const burgerDisplay = document.querySelector(".name-field");
const button = document.querySelector("img");

//GET
function getData() {
  fetch("https://my-burger-api.herokuapp.com/burgers/")
    .then((response) => response.json())
    .then((data) => {
      const randomNumber = Math.floor(Math.random() * data.length);
      console.log(randomNumber);

      //console.log(data);
      const name = data[randomNumber].name;
      //console.log(name);
      burgerDisplay.innerHTML = name;
    });
}

button.addEventListener("click", getData);
