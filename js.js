window = onload = () => {
  let pole = document.querySelectorAll(".pole");
  let HerniPole = [];
  for (let i = 0; i<= 10; i++) {
    for(let j = 0; j<= 10; j++) {
        HerniPole[i] = [];
    }
}

  for (let index = 0; index <= 10; index++) {
   for (let index2 = 0; index2 <= 10; index2++) {
    HerniPole[index2][index] = pole[index2];
   }
    
  }
  let snake = []
  let horizontal = 0;
  let vertical = 0;
  window.addEventListener("keydown", function(event) {

      console.log(event.key)
        switch(event.key) {
            case "ArrowUp": {
            vertical--;
                break;
            }
             case "ArrowDown": {
               vertical++;
                break;
            }
            case "ArrowRight": {
              horizontal++;
              HerniPole[horizontal][vertical];
              break;
            }
            case "Arrowleft": {
              horizontal--;
              break;
            }

        }
  })
}