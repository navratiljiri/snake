let vertical = 0;
let horizontal = 0;
let HerniPole = [];
let end = false;
var cas;
let snake = ["0"];
window = onload = () => {

  function buz(smer) {
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
   try {
    document.getElementById(HerniPole[vertical][horizontal].id).style.background = "black";
    snake.push(HerniPole[vertical][horizontal].id);

    document.getElementById(snake.shift().style.background = "black");
  
   } 
  catch (error) {
     clearInterval(cas);
     end = true;
   }
    
  }

  vytvorHerniPole();
  dvojrozmernePole();


  window.addEventListener("keydown", function (event) {
  let smer = "";
  if(!end) {
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
     cas = setInterval(buz,200,smer);
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
