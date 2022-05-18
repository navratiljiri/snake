let vertical = 0;
let horizontal = 0;
let casovac = 0;
let skore = 0;
var timeout = 10000;
let HerniPole = [];
let end = false;
let smer = "";
let PovoleniStisku = true;
let controlVariable = 1;
let cas, jidlo;
let snake = [];



generuj();

window = onload = () => {
  document.querySelector(".btn").addEventListener("click", function () {
    restart()
  })
  document.getElementById("BtnRestart").addEventListener("click",function () {
    restart();
    document.querySelector(".MainDisplay").style.display = "flex";
    document.querySelector(".GameOverBox").style.display = "none";
    document.querySelector("main").style.filter = "blur(0px)"
  })
  vytvorHerniPole();
  dvojrozmernePole();

}



  window.addEventListener("keyup", function (event)  {
 
    let JinaKlavesa = false;
    if (!end) {
      switch (event.key) {
        case "ArrowUp": {
          if (HerniPole[vertical - 1][horizontal].id !== snake[skore - controlVariable]) {
            smer = "nahoru";
          }
          break;
        }
        case "ArrowDown": {
          if (HerniPole[vertical + 1][horizontal].id !== snake[skore - controlVariable]) {
            smer = "dolu";
          }
          break;
        }
        case "ArrowRight": {
          if (HerniPole[vertical][horizontal + 1].id !== snake[skore - controlVariable]) {
            smer = "doprava";
          }
          break;
        }
        case "ArrowLeft": {
          if (HerniPole[vertical][horizontal - 1].id !== snake[skore - controlVariable]) {
            smer = "doleva"
          }
          break;
        }
        default:
          JinaKlavesa = true;
          break;
      }
      if (!JinaKlavesa) {
        clearInterval(cas);
        cas = setInterval(buz, 100, smer);
      }
    }
  
  })




dvojrozmernePole = () => {
  let pole = document.querySelectorAll(".pole");
  let indexx = 0;
  for (let i = 0; i <= 20; i++) {
    for (let j = 0; j <= 20; j++) {
      HerniPole[i] = [];
    }
  }

  for (let vertikala = 0; vertikala <= 19; vertikala++) {
    for (let horizontala = 0; horizontala <= 19; horizontala++) {
      HerniPole[vertikala][horizontala] = pole[indexx];
      if (pole[indexx].style.background == "black") {
        vertical = vertikala
        horizontal = horizontala
      }
      indexx++;
    }
  }
}
vytvorHerniPole = () => {
  let box = document.querySelector(".box")
  for (let index = 0; index < 400; index++) {
    let div = document.createElement("div")
    div.className = "pole"
    div.id = index
    div.style.background = "white"

    if (snake[0] == index) {
      div.style.background = "black"
    }
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
  if (casovac === 10) {
    casovac = 0;
    spawn();
  }
  try {
    
    let pole = document.getElementById(HerniPole[vertical][horizontal].id)

    if (pole.style.background === "green") {
      snake.push(HerniPole[vertical][horizontal].id)
      pole.style.background = "black";
      skore++
      addingScore();
    }
    else if (pole.style.background === "yellow") {
      snake.push(HerniPole[vertical][horizontal].id)
      pole.style.background = "black";
      controlVariable += 2;
      skore += 3;
      addingScore();
    }
    else if (pole.style.background === "black") {
      gameOver();
    }
    else {
      pole.style.background = "black"
      snake.push(HerniPole[vertical][horizontal].id)
      let last = snake.shift()
      document.getElementById(last).style.background = "white"
    }
  }
  catch {
    gameOver();
  }
}
addingScore = () => {
  document.querySelector("p").innerHTML = "Skore: " + skore
}
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
let goldFood = 0;

function spawn() {
  goldFood++;
  if(goldFood == 5) {
      goldFood = 0; 
      let RandomPole = checkSpawn();    
      RandomPole.style.background = "yellow";
      setTimeout(() => {
        if(RandomPole.style.background === "yellow"){
          RandomPole.style.background = "white";
        }       
      },3000);
  }
  else {  
    checkSpawn().style.background = "green";
  }
 
}

checkSpawn = () => {
  let RandomPole = document.getElementById(HerniPole[Math.floor(Math.random() * 20)][Math.floor(Math.random() * 20)].id)
  while (RandomPole.style.background === "black") {
    RandomPole = document.getElementById(HerniPole[Math.floor(Math.random() * 20)][Math.floor(Math.random() * 20)].id)
  }
  return RandomPole;
}

gameOver = () => {
  clearInterval(cas)
  clearInterval(jidlo)
  end = true;
  document.querySelector(".MainDisplay").style.display = "none";
  document.querySelector(".GameOverBox").style.display = "flex";
  document.querySelector("main").style.filter = "blur(2px)"
  document.getElementById("skore").innerHTML = "Tvé skore činí: " + skore;
}

restart = () => {
  clearInterval(cas);
  end = false;
  controlVariable = 1;
  skore = 0
  goldFood = 0
  document.querySelector("p").innerHTML = "Skore: " + skore

  generuj()

  for (let index = 0; index < 400; index++) {
    document.getElementById(index).style.background = "white"
    if (snake[0] == index) {
      document.getElementById(index).style.background = "black"
    }
  }
  let pole = document.querySelectorAll(".pole");
  let indexx = 0;
  for (let vertikala = 0; vertikala <= 19; vertikala++) {
    for (let horizontala = 0; horizontala <= 19; horizontala++) {
      if (pole[indexx].style.background === "black") {
        vertical = vertikala
        horizontal = horizontala
      }
      indexx++
    }
  }
}

function generuj() {
  snake = [Math.floor(Math.random() * 400)];
}

