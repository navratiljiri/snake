window.onload = () => {
    let inputs = document.querySelectorAll("input")
    let submit = document.querySelector("input[name=send]");
    for (let index = 0; index < 2; index++) {
        inputs[index].addEventListener("change", () => {
            if(inputs[0].value.length > 20 ||inputs[0].value.length > 30 ) {
                inputs[index].style.boxShadow = "6px 5px 0px 2px red"
                inputs[index].style.border = "1px solid red"
            }
            else if(inputs[index].value.length === 0) {
                inputs[index].style.boxShadow = "6px 5px 0px 2px #464646"
                inputs[index].style.border = "1px solid #464646"
            }
            else {
                inputs[index].style.boxShadow = "6px 5px 0px 2px green"
                inputs[index].style.border = "1px solid green"
            }
        })   
    }

    
}