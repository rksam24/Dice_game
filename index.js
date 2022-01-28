// taking player name form user

function play(){
  var player1Name = document.getElementById("player1").value ;
  var player2Name = document.getElementById("player2").value;
  if (player1Name === "")
    player1Name ="Player 1";

  if (player2Name === "")
    player2Name ="Player 2";

  document.querySelectorAll("p")[0].textContent=player1Name;
  document.querySelectorAll("p")[1].textContent=player2Name;

  // generting random dice number
  var player1Dice = Math.floor( Math.random()*6 + 1);
  var player2Dice = Math.floor( Math.random()*6 + 1);

  // changing dice number
  var player1ImageSrc = "images/dice"+player1Dice + ".png";
  var player2ImageSrc = "images/dice"+player2Dice + ".png";

  document.querySelector("img.img1").src=player1ImageSrc;
  document.querySelector("img.img2").src = player2ImageSrc;

  var winner = "";

  //checking which player win
  if(player1Dice === player2Dice) winner = "Draw";
  else if(player1Dice>player2Dice)
    winner = player1Name + " is Winner 🚩";
  else
    winner = player2Name + " is Winner 🚩";

  document.querySelector(".container h1").textContent = winner;
  return ;
}
