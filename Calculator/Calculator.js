const display = document.getElementById("output_display")

function appendToDisplay(input){
    display.value +=input;
}

function clearDisplay(input){
    display.value ="";
}

function calculate(input){
    display.value = eval(display.value);
}