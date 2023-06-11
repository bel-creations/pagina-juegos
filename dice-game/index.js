// Jugador 1

var randomNumber1 = Math.floor(Math.random()*6)+1;

var randomDiceImage1 = "img/dice" + randomNumber1 + ".png";

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomDiceImage1);






// Jugador 2

var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomDiceImage2 = "img/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomDiceImage2);


// Ganador



if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "Gana jugador 1!";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").textContent = "Gana jugador 2!";
} else {
    document.querySelector("h1").textContent = "Empate!";
}