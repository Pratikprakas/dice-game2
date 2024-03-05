
let randomNumber1 = Math.floor(Math.random()*6)+1;

let randomDiceImage1 = `./dice${randomNumber1}.png`;

document.querySelectorAll(".img1")[0].setAttribute("src",randomDiceImage1);

console.log(randomDiceImage1);



let randomNumber2 = Math.floor(Math.random()*6)+1;

let randomDiceImage2 = `./dice${randomNumber2}.png`;

document.querySelectorAll(".img2")[0].setAttribute("src",randomDiceImage2);

console.log(randomDiceImage2);


if(randomNumber1>randomNumber2){

    document.querySelector("h1").innerHTML="Player1 won";

}

else if(randomNumber1===randomNumber2){

    document.querySelector("h1").innerHTML="Draw";
    
}

else{
    document.querySelector("h1").innerHTML="Player2 won";
}









