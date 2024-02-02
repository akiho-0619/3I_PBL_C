const input = document.querySelector("input#weight");
//const select = document.querySelector("select#tanni");
var log = document.getElementById("values");
input.addEventListener("input", main);

// 1000mm
// 1m
// 0.001km
// 39.37inch
// 3.281ft
// 0.001mile 1mile=1609.344m

//var select = document.getElementById('tanni');
var tanni = "g";
select.onchange = function(){
  tanni=this.value;
  main()
}

function main(){
    let get_number= parseInt(input.value);
    let labelArray = new Array(5);
    labelArray[0] = document.querySelector('label#g');
    labelArray[1] = document.querySelector('label#kg');
    labelArray[2] = document.querySelector('label#t');
    labelArray[3] = document.querySelector('label#lb');
    labelArray[4] = document.querySelector('label#oz')
    
    if (tanni ==="g"){
        var text=[get_number, get_number*0.001, get_number*0.000001, get_number*0.002, get_number*0.035];
    } 
    else if (tanni ==="kg"){
        var text=[get_number*1000, get_number, get_number*0.001, get_number*2.205, get_number*35.274];
    } 
    else if (tanni ==="t"){
        var text=[get_number*1000000, get_number*1000, get_number, get_number*2204.623, get_number*35273.962];
    } 
    else if (tanni ==="lb"){
        var text=[get_number*453.592, get_number*0.454, get_number*0.000454, get_number, get_number*16];
    } 
    else{
        var text=[get_number*28.35, get_number*0.028, get_number*0.000028, get_number*0.062, get_number*1];
    } 
    

    //console.log(text[0]);
    for(i=0; i<5; i++){

        labelArray[i].innerText=text[i];
    }

}

/**
document.querySelector('input#long').addEventListener("input", () => {
    let get_number= target.value;
    console.log(get_number);
    const cmLabel = document.querySelector('label#km');
    cmLabel.innerText=get_number;
  });
  
*/
  //addEventListener("change", (event) => {});