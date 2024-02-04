"use strict";
console.log("aaa");
//Object.defineProperty(exports, "__esModule", { value: true });
//Object.defineProperty(exports, "__esModule", { value: true });

var fileContent = loadFile("module/pdf/output.txt");
console.log(fileContent);
function loadFile(filePath) {
    var result = null;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", filePath, false);
    xmlhttp.send();
    if (xmlhttp.status == 200) {
        result = xmlhttp.responseText;
    }
    console.log(result);
    return result;
}

const fs = require("fs");
var data = "";
// ファイル非同期読み込み
fs.readFile('module/pdf/output.txt', 'utf-8', function (err, data) {
    if (err) {
        console.error("読み込み中のエラー:", err);
        return;
    }

    
});

const test_p= document.getElementById("p#yotei_space")
test_p.textContent("test_text")
var get_text = data.split("\r\n");
//console.log(get_text);
var yotei_ran = new Array(get_text.length);
for (var i = 0; i < get_text.length; i++) {
    yotei_ran[i] = document.createElement("label");
    yotei_ran[i].textContent = get_text[i];
}
console.log("output");
for (var _i = 0, yotei_ran_1 = yotei_ran; _i < yotei_ran_1.length; _i++) {
    var i = yotei_ran_1[_i];
    document.querySelector("label#yotei_space").appendChild(i);
}