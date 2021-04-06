console.log("cargaando pagina");
speechSynthesis.speak(new SpeechSynthesisUtterance("Yo sere tu traductor gracias por usar mi codigo")); 
var lastText = "";
var msg = new SpeechSynthesisUtterance();
var voices = window.speechSynthesis.getVoices();
msg.voice = voices[5];
msg.volume = 1; // 0 to 1
msg.rate = 1.19; // 0.1 to 2
msg.pitch = 0; //0 to 2

function check() {
  try {
    var nowText = document.querySelectorAll('p[data-purpose="transcript-cue-active"] font')[1];
  } catch (error) {
    console.log("cargaando pagina");
    
  }
  if (typeof nowText !== "undefined"){

    var currentText = "";
    currentText = nowText.innerText;  // tomar el texto

    if (lastText !== currentText) {
      msg.text = currentText;
      speechSynthesis.speak(msg);
      lastText = currentText;
      console.log(lastText);
      
    }
  }
  else {
    console.clear(MessageEvent)
  }  
  
}

window.i = setInterval(check, 600);



// ************************youtube ******************************
// 'p[data-purpose="transcript-cue-active"] font')[1].innerHTML;
// document.querySelectorAll('span[class=captions-text] span[class= caption-visual-line]')[0].innerText