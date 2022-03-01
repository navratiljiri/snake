let vertical = 0;
let horizontal = 0;
let casovac = 0;
let skore = 0;
let HerniPole = [];
let end = false;
let smer = "";
let cas, jidlo;
let snake = ["0"];
window = onload = () => {

document.querySelector("input").addEventListener("click", function() {
  restart()
})


  vytvorHerniPole();
  dvojrozmernePole();
  window.addEventListener("keyup", function (event) {
    let JinaKlavesa = false;
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
        default :
        JinaKlavesa = true;
          break;
      }
      if(!JinaKlavesa) {
        clearInterval(cas);
        cas = setInterval(buz, 100, smer);
      }
    }
    else {
      restart()
    }

  })
}

dvojrozmernePole = () => {
  let pole = document.querySelectorAll(".pole");
  let indexx = 0;
  for (let i = 0; i <= 20; i++) {
    for (let j = 0; j <= 20; j++) {
      HerniPole[i] = [];
    }
  }

  for (let index = 0; index <= 19; index++) {
    for (let index2 = 0; index2 <= 19; index2++) {
      HerniPole[index][index2] = pole[indexx];
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
    if (0 == index) {
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
  if(casovac === 8) {
    casovac = 0;
    spawn();
  }

try {
  let pole = document.getElementById(HerniPole[vertical][horizontal].id)
  if (pole.style.background === "green") {
      snake.push(HerniPole[vertical][horizontal].id)
      pole.style.background = "black";
      skore++
      document.querySelector("p").innerHTML = "Skore: " + skore
  }
  else if(pole.style.background === "black") {
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

function spawn() {
  let RandomPole = document.getElementById(HerniPole[Math.floor(Math.random() * 20)][Math.floor(Math.random() * 20)].id)
  while(RandomPole.style.background === "black") {
    RandomPole = document.getElementById(HerniPole[Math.floor(Math.random() * 20)][Math.floor(Math.random() * 20)].id)
  }
RandomPole.style.background = "green";
  
}
gameOver = () => {
  clearInterval(cas);
  clearInterval(jidlo);
  end = true;
  window.alert("konec!")
}

restart = () => {
  clearInterval(cas);
  end = false
  skore = 0
  vertical = 0
  horizontal = 0
  snake = ["0"]
  for (let index = 0; index < 400; index++) {
    document.getElementById(index).style.background = "white"
    if(0 === index) {
      document.getElementById(index).style.background = "black"
    }
  }
}