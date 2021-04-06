var lastText = "";
var Google = 0;
var msg = new SpeechSynthesisUtterance();
var voices = window.speechSynthesis.getVoices();
console.log("cargaando pagina");
speechSynthesis.speak(new SpeechSynthesisUtterance("Yo sere tu traductor gracias por usar mi codigo")); 

//**********************************************************
//         CONFIGURACION DE VOZ DE API GOOGLE
//**********************************************************
// 0 Google Deutsch true
// 1 Google US English 
// 2 Google UK English Female 
// 3 Google UK English Male 
// 4 Google español 
// 5 Google español de Estados Unidos 
// 6 Google français 
// 7 Google हिन्दी 
// 8 Google Bahasa Indonesia 
// 9 Google italiano 
// 10 Google 日本語 
// 11 Google 한국의 
// 12 Google Nederlands 
// 13 Google polski 
// 14 Google português do Brasil 
// 15 Google русский 
// 16 Google 普通话（中国大陆） 
// 17 Google 粤語（香港） 
// 18 Google 國語（臺灣）
// **************************************************
// cargue el idioma deseado segun su numero

  Google = 5

// ***********************

msg.voice = voices[Google];
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



