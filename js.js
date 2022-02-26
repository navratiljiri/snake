let vertical = 0;
let horizontal = 0;
let HerniPole = [];
let casovac = 0;
let end = false;
let spawnFood = false;
let smer = "";
var cas, jidlo;
let snake = ["0"];
window = onload = () => {

  vytvorHerniPole();
  dvojrozmernePole();
  window.addEventListener("keydown", function (event) {
    if (!end) {
      switch (event.key) {
        case "ArrowUp": {
          smer = "nahoru";
          break;
        }
        case "ArrowDown": {
          smer = "dolu";
          break;
        }
        case "ArrowRight": {
          smer = "doprava";
          break;
        }
        case "ArrowLeft": {
          smer = "doleva"
          break;
        }
      }
      clearInterval(cas);
      cas = setInterval(buz, 200, smer);
    }

  })
}
dvojrozmernePole = () => {
  let pole = document.querySelectorAll(".pole");
  let indexx = 0;
  for (let i = 0; i <= 10; i++) {
    for (let j = 0; j <= 10; j++) {
      HerniPole[i] = [];
    }
  }

  for (let index = 0; index <= 9; index++) {
    for (let index2 = 0; index2 <= 9; index2++) {
      HerniPole[index][index2] = pole[indexx];
      indexx++;
    }

  }
}
vytvorHerniPole = () => {
  let box = document.querySelector(".box")
  for (let index = 0; index < 100; index++) {
    let div = document.createElement("div");
    div.className = "pole";
    div.id = index
    box.appendChild(div);

  }
}

function buz(smer) {
  casovac++;
  switch (smer) {
    case "nahoru":
      vertical--;
      break;

    case "dolu":
      vertical++
      break;

    case "doprava":
      horizontal++
      break;

    case "doleva":
      horizontal--
      break;
  }
  if(casovac === 5) {
    casovac = 0;
    spawn();
  }

try{
  let pole = document.getElementById(HerniPole[vertical][horizontal].id);
  if (pole.style.background === "green") {
      snake.push(HerniPole[vertical][horizontal].id)
      pole.style.background = "black";
  }
  else if(pole.style.background === "black") {
    gameOver();
  }
  else {
    pole.style.background = "black";
    snake.push(HerniPole[vertical][horizontal].id);
    let last = snake.shift();
    document.getElementById(last).style.background = "white";
  }
}
catch (error) {
   gameOver();
 } 
}

function spawn() {
  let RandomPole = document.getElementById(HerniPole[Math.floor(Math.random() * 10)][Math.floor(Math.random() * 10)].id)
  while(RandomPole.style.background === "black") {
    RandomPole = document.getElementById(HerniPole[Math.floor(Math.random() * 10)][Math.floor(Math.random() * 10)].id)
  }
RandomPole.style.background = "green";
  
}
function gameOver() {
  clearInterval(cas);
  clearInterval(jidlo);
  end = true;
  window.alert("konec!")
}