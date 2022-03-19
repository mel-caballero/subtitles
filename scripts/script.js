var textCatala = [""];
var textCastella = [""];
var textAngles = [""];

function generador() {
  let idioma = document.getElementById("idioma").value;

  switch(idioma) {
    case "es":
      subtitol = textCastella[0];
      break;
    case "en":
      subtitol = textAngles[0];
      break;
    case "ca":
    default:
      subtitol = textCatala[0];
      break;
  }
  //let text = breakString(subtitol, 30);
  //document.getElementById("subtitols").innerHTML = text;
  breakString(subtitol, 30);
}

function breakString (str, limit) {
  let sentence = "";
  let subt = [];
  let end = 0;
  str.forEach(element => {
    while (index != limit) {
      sentence =+ element;
    }
    subt.push(sentence);
    sentence = "";
    end + limit;
  });
  document.getElementById("subtitols").innerHTML = text;
}

function borrar() {
  for(let i = 0; i < textCatala.length; i++){
    textCatala.pop();
  }
  for(let i = 0; i < textCastella.length; i++){
    textCastella.pop();
  }
  for(let i = 0; i < textAngles.length; i++){
    textAngles.pop();
  }
  document.getElementById("langCa").value = "";
  document.getElementById("langES").value = "";
  document.getElementById("langEn").value = "";
  document.getElementById("textArea").style.display = "block";
}

function guarda() {
  let ca = document.getElementById("langCa").value;
  let es = document.getElementById("langEs").value;
  let en = document.getElementById("langEn").value;

  textCatala.push(ca);
  textCastella.push(es);
  textAngles.push(en);

  document.getElementById("textArea").style.display = "none";
}

function borraTalls(){
  document.getElementById("subtitols").innerHTML = "";
}