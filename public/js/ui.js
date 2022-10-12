import { allReadDB } from "./firebase.js"

// ターゲット
var targetEl = document.getElementById("tableArea");

// table
var tableEl = document.createElement("table");
tableEl.setAttribute("class", "table table-hover table-border");

// thead
var theadEl = document.createElement("thead");
var theadTrEl = document.createElement("tr");

// tbody
var tbodyEl = document.createElement("tbody");

// 編集
allReadDB(theadTrEl, tbodyEl);

// thead結合
theadEl.appendChild(theadTrEl);

// ボタン作成
var trBtnEl = document.createElement("tr");
trBtnEl.setAttribute("class", "table-primary");
trBtnEl.setAttribute("data-bs-toggle", "modal");
trBtnEl.setAttribute("data-bs-target", "#exampleModal");
var tdBtnEl = document.createElement("td");
tdBtnEl.setAttribute("colspan", "3");
var btnElText = "追加する";
tdBtnEl.textContent = btnElText;
trBtnEl.appendChild(tdBtnEl);
// タイミングを考えたい。。。
tbodyEl.appendChild(trBtnEl);

// table結合
tableEl.appendChild(tbodyEl);

// ターゲット結合
targetEl.appendChild(tableEl);
tableEl.appendChild(theadEl);
