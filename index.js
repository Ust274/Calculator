const display = document.getElementById("display");

function appendTo(input){
    display.value+=input;
}

function clearDisplay(){
    display.value="";
}

function calculate(){
    try{
        display.value=eval(display.value).toFixed(2,0);
    }
   catch(error){
    display.value="Error"
   }
}