"use strict";
console.log("aaa");

var go_py = callPythonScript();
var fileContent = loadFile("module/pdf/output.txt");
var text_henkan = text_sousa(fileContent);//fileContent
var text_repl = text_replace(text_henkan);
//console.log(fileContent);
function loadFile(filePath) {
    var result = null;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", filePath, false);
    xmlhttp.send();
    if (xmlhttp.status == 200) {
        result = xmlhttp.responseText;
    }
    //console.log(result);
    return result;
}
/**
const fs = require("fs");
var data = "";
// ファイル非同期読み込み
fs.readFile('module/pdf/output.txt', 'utf-8', function (err, data) {
    if (err) {
        console.error("読み込み中のエラー:", err);
        return;
    }

    
});
 */
function text_sousa(fileContent){
    const today = new Date();
    var formattedDate = today.toISOString().slice(0, 10).split("-");
    formattedDate=parseInt((parseInt(formattedDate[0])<=3 ? "3" : "2") + formattedDate[0].padStart(2, "0")+  formattedDate[1].padStart(2, "0"));   //ex 10/05 -> 21005 01/05 -> 30105
    //console.log(formattedDate);
    var get_text = fileContent.split("\n");
    console.log(get_text)
    var match_text=Array();
    for(var i=0; i<get_text.length; i++){
        var now_text= get_text[i];
        var text_day= parseInt((parseInt(now_text.split("日")[0].split("月")[0])<=3 ? "3": "2") + now_text.split("日")[0].split("月")[0].padStart(2, "0")+  (now_text.split("日")[0].split("月")[1].padStart(2, "0")));
        if (i==0){
            console.log("debug")
            console.log(parseInt((parseInt(now_text.split("日")[0].split("月")[0])<=3 ? "3": "2") + now_text.split("日")[0].split("月")[0].padStart(2, "0")));
        }
        if( formattedDate <= text_day <= (formattedDate+100 > 21231 ? formattedDate+100 : formattedDate-1100+10000)){
            match_text.push(now_text);
        }
    }
    return match_text;
}

function text_replace(get_text){
    //console.log(get_text);
    var yotei_ran = new Array(get_text.length);
    for (var i = 0; i < get_text.length; i++) {
        yotei_ran[i] = document.createElement("p");
        yotei_ran[i].textContent = get_text[i];
    }
    console.log("output");
    for (var index = 0; index < yotei_ran.length; index++) {
        var i = yotei_ran[index];
        document.querySelector("div#yotei").appendChild(i);
    }

    
}



// JavaScript (例: script.js)
function callPythonScript() {
    // Pythonスクリプトが配置されているURLを指定
    const pythonScriptUrl = 'module/module_main.py';

    // Ajaxリクエストを送信
    fetch(pythonScriptUrl)
        .then(response => response.text())
        .then(data => {
            console.log('Pythonスクリプトの実行結果:');
        })
        .catch(error => {
            console.error('エラーが発生しました:', error);
        });

    console.log("python");
}