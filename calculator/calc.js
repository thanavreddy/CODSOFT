const display=document.getElementById('display')

function appendtodisplay(input) {
    if (display.value=="Error"){
        display.value="" 
        display.value+=input
    }
    else{
    display.value +=input
    }
}

function cleardisplay(){
    display.value=''

}

function calculate() {
try{
    display.value=eval(display.value)
}
catch(error){
    display.value="Error"
}
}

function clearelement(){
    display.value=display.value.slice(0,-1)

}