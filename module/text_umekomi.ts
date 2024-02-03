//const input= document.querySelector("input#long");
//const select = document.querySelector("select#tanni");
//var log = document.getElementById("values");
//input.addEventListener("input", main);

// 1000mm
// 1m
// 0.001km
// 39.37inch
// 3.281ft
// 0.001mile 1mile=1609.344m


import * as fs from 'fs';
const data: String=""
// ファイル非同期読み込み
fs.readFile('module/pdf/output.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error("読み込み中のエラー:", err);
        return;
    }
    
});

const get_text: String[] =data.split("\r\n")
    console.log(get_text);
var yotei_ran: HTMLLabelElement[] = new Array(get_text.length);
for(let i: number=0; i<get_text.length; i++){
    yotei_ran[i] = document.createElement("label")
    yotei_ran[i].textContent = get_text[i];
}

for(let i of yotei_ran){
    document.querySelector("p#yotei_space").appendChild()

}


//var select = document.getElementById('tanni');
//var tanni = "km";

/** 
select.onchange = function(){
  tanni=this.value;
  main()
}
*/
/**
function main(){
    let get_number= parseInt(input.value);
    let labelArray = new Array(6);
    labelArray[0] = document.querySelector('label#km');
    labelArray[1] = document.querySelector('label#cm');
    labelArray[2] = document.querySelector('label#m');
    labelArray[3] = document.querySelector('label#mm');
    labelArray[4] = document.querySelector('label#inch');
    labelArray[5] = document.querySelector('label#ft');
    
    let kmText, cmText, mText, mmText, inchText, ftText, mileText;
    if (tanni ==="km"){
        var text=[get_number, get_number*100000, get_number*1000, get_number*1000000, get_number*39370, get_number*3280];
    } 
    else if (tanni ==="cm"){
        var text=[get_number*0.00001, get_number, get_number*0.01, get_number*10, get_number*0.394, get_number*0.033];
    } 
    else if (tanni ==="m"){
        var text=[get_number*0.001, get_number*100, get_number, get_number*1000000000, get_number*39.37, get_number*3.281];
    } 
    else if (tanni ==="mm"){
        var text=[get_number*0.000001, get_number*0.1, get_number*0.01, get_number, get_number*0.039, get_number*0.003];
    } 
    else if (tanni ==="inch"){
        var text=[get_number*0.000025, get_number*0.00025, get_number*0.025, get_number*25.4, get_number*1, get_number*0.083];
    } 
    else{
        var text=[get_number*0.000305, get_number*30.48, get_number*0.305, get_number*304.8, get_number*12, get_number];
    } 

    //console.log(text[0]);
    for(i=0; i<6; i++){

        labelArray[i].innerText=text[i];
    }

}
 */
/**
document.querySelector('input#long').addEventListener("input", () => {
    let get_number= target.value;
    console.log(get_number);
    const cmLabel = document.querySelector('label#km');
    cmLabel.innerText=get_number;
  });
  
*/
  //addEventListener("change", (event) => {});

/**     要素の追加の部分
var process_num =1
//要素の追加
//<p id=process-1><label>  行程1：<input type="text"></label><label>  担当者</label><input type="text" id="process-1-manager"></p>

document.querySelector('button#processAdd').addEventListener('click', () => {
    const newForm_processName = document.createElement('input');
    newForm_processName.type = 'text';
    newForm_processName.value= "hoge" + process_num;
    
    const newForm_processManager = document.createElement('input');
    newForm_processManager.type = 'text';
    newForm_processManager.value= "hoge" + process_num;

    const newLabel_processName = document.createElement('label');
    newLabel_processName.textContent = '行程'+(process_num+1)+'：';

    const newLabel_processManager = document.createElement('label');
    newLabel_processManager.textContent = '  担当者：';

    const newP = document.createElement('p');
    newP.id = "process-"+ (process_num+1);

    process_num++

    newLabel_processName.appendChild(newForm_processName);
    newP.append(newLabel_processName);
    newLabel_processManager.appendChild(newForm_processManager);
    newP.append(newLabel_processManager);
    document.querySelector('p#process-1').appendChild(newP);

    let msg = document.querySelector('label#processCount');
    msg.innerText = process_num;
  });

//要素の削除
document.querySelector('button#processDelete').addEventListener('click', () => {
    const list_element = document.getElementById("process-"+(process_num));
    let msg = document.querySelector('Label#processCount');
    if (process_num>1){
        list_element.remove();
        process_num-=1
    }
    msg.innerText = process_num;
  });

  document.querySelector('input').addEventListener("change", () => {
    const list_element = document.getElementById("process-"+(process_num));
    
    console.log("A")
  });
  //addEventListener("change", (event) => {});
 */