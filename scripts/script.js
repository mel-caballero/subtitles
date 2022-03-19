var textCatala = [""];
var textCastella = [""];
var textAngles = [""];

function generador() {
  var idioma = document.getElementById("idioma").value;
  var subtitol;
  switch(idioma) {
    case "ca":
      subtitol = textCatala[0];
    break;
    case "es":
      subtitol = textCastella[0];
    break;
    case "en":
      subtitol = textAngles[0];
    break;
    default:
      ser = "Ups ...";
  }
  console.log(subtitol);
  var text = breakString(subtitol, 30);
  document.getElementById("subtitols").innerHTML = text;
}

function breakString (str, limit) {
  var brokenString = '<div class="container"><p class="item">';
  for(var i = 0, count = 0, numChar = 0; i < str.length; i++){
      if (str[i] === ']'){
        numChar = count;
        count = 0;
        brokenString += ']</p><p class="item">'+numChar+'</p></div><div class="container"><p class="item">';
      }else if(str[i] === '.'){
        numChar = count;
        count = 0;
        brokenString += '.</p><p class="item">'+numChar+'</p></div><div class="container"><p class="item">';
      }else if(count >= limit && str[i] === ' '){
        numChar = count;
        count = 0;
        brokenString += '</p><p class="item">'+numChar+'</p></div><div class="container"><p class="item">';
      }else{
        count++;
        brokenString += str[i];
      }
  }
  return brokenString;
}

function borrar() {
  for(var i = 0; i < textCatala.length; i++){
    textCatala.pop();
  }
  for(var i = 0; i < textCastella.length; i++){
    textCastella.pop();
  }
  for(var i = 0; i < textAngles.length; i++){
    textAngles.pop();
  }
  console.log(textCatala);
  console.log(textCastella);
  console.log(textAngles);
  document.getElementById("textArea").style.display = "block";
}

function guarda() {
  var ca = document.getElementById("langCa").value;
  var es = document.getElementById("langEs").value;
  var en = document.getElementById("langEn").value;

  textCatala[0] = ca;
  textCastella[0] = es;
  textAngles[0] = en;

  console.log(textCatala);
  console.log(textCastella);
  console.log(textAngles);
  document.getElementById("textArea").style.display = "none";
}

function borraTalls(){
  document.getElementById("subtitols").innerHTML = "";
}