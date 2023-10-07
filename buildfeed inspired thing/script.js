import list from './list.json' assert { type: 'json' };
console.log(list.length);
document.getElementById("buildcount").innerHTML = "There are <b>" + list.length + "</b> builds in the database.";

let buildreq = document.querySelector('#buildreq');
let varreq = document.querySelector('#varreq');

buildreq.addEventListener('input', function () {
  let build = parseFloat(buildreq.value) - 1;
  document.getElementById("varcount").innerHTML = "There are <b>" + list[build]["Types"].length + "</b> variants of this build in the database.";
  document.getElementById("title").innerHTML = list[build]["OS"] + " build " + list[build]["Fulltag"];
  document.getElementById("BuildStatus").innerHTML = list[build]["BuildStatus"];
  document.getElementById("OS").innerHTML = list[build]["OS"];
  document.getElementById("Fulltag").innerHTML = list[build]["Fulltag"];
  document.getElementById("Stage").innerHTML = list[build]["Stage"];
  document.getElementById("CompTime").innerHTML = list[build]["CompTime"];
  document.getElementById("RelTime").innerHTML = list[build]["RelTime"];
  document.getElementById("Description").innerHTML = list[build]["Description"];
  document.getElementById("VarStatus").innerHTML = ""
  document.getElementById("Arch").innerHTML = ""
  document.getElementById("Debug").innerHTML = ""
  document.getElementById("Language").innerHTML = ""
  document.getElementById("SKU").innerHTML = ""
  document.getElementById("OEM").innerHTML = ""
});

varreq.addEventListener('input', function () {
  let build = parseFloat(buildreq.value) - 1;
  let variant = parseFloat(varreq.value) - 1;
  document.getElementById("VarStatus").innerHTML = list[build]["Types"][variant]["VarStatus"];
  document.getElementById("Arch").innerHTML = list[build]["Types"][variant]["Arch"];
  document.getElementById("Debug").innerHTML = list[build]["Types"][variant]["Debug"];
  document.getElementById("Language").innerHTML = list[build]["Types"][variant]["Language"];
  document.getElementById("SKU").innerHTML = list[build]["Types"][variant]["SKU"];
  document.getElementById("OEM").innerHTML = list[build]["Types"][variant]["OEM"];
});