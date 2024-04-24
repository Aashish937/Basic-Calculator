const Solve = (char) =>{
    let sound = document.getElementById("audio");
    sound.play();
    let display = document.getElementById("display");
    display.value += char;
}

const Clear = () =>{
    let sound = document.getElementById("audio");
    sound.play();
    let display = document.getElementById("display");
    display.value = "";
} 

const Backspace = () =>{
    let sound = document.getElementById("audio");
    sound.play();
    let display = document.getElementById("display");
    display.value = display.value.slice(0,-1);
}

const Result = () =>{
    let sound = document.getElementById("audio");
    sound.play();
    let display = document.getElementById("display");
    let expression = display.value;
    try {
        display.value = eval(expression);
    } catch(err) {
        display.value = "Error!!!"
    }
}