function Passou() {
    document.getElementById("chamber").style.backgroundColor= "antiquewhite";
}
function Tomou(){
    document.getElementById("chamber").style.backgroundColor= "white";
}

function Passou1() {
    document.getElementById("indiv").style.backgroundColor= "antiquewhite";
}
function Tomou1(){
    document.getElementById("indiv").style.backgroundColor= "white";
}
//+++++++++++++++++
function Passou22() {
  document.getElementById("chamber").style.backgroundColor= "aqua";
}
function Tomou22(){
  document.getElementById("chamber").style.backgroundColor= "white";
}

//++++++++++++++++


function loadDoc() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("superdiv").innerHTML =
    this.responseText;
    console.log('carregou o ajax');
  }
  xhttp.open("GET", "nu2.html");
  xhttp.send();
}

var x = document.getElementById("myAudio"); 

function playAudio() { 
x.play(); 
console.log('audio foi');
} 

const erro = document.getElementById('erroep2');

function emfalso() {
  erro.classList.remove('fica-esconde');
  setTimeout(clear, 1000);
  console.log('nao funcionou');
}

function clear(){
  const erro = document.getElementById('erroep2');
  erro.classList.add('fica-esconde');
}
//++++++++++++++++++++++++++++++++++++++++++++++++++++++
function loadDoc2() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("superdiv").innerHTML =
    this.responseText;
    console.log('carregou o ajax');
  }
  xhttp.open("GET", "nu3.html");
  xhttp.send();
}