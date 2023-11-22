var x=0;
var y=0;
var drawCircle="";
var speechRecognition = window.webkitSpeechRecognition;
var recognition = new speechRecognition();
var toNumber;

function start(){
    document.getElementById("status").innerHTML = "System is listening, please speak.";
    recognition.start();
}

recognition.onresult = function(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("status").innerHTML = "The speech has been recognized as"+content;
    toNumber = Number(content);
    if(Number.isInteger(toNumber)){
      drawCircle = "set";
      x = Math.floor(Math.random()*900);
      y = Math.floor(Math.random()*600);
    }
  }

function setup(){
    var canvas = createCanvas(900, 600);
}

function draw(){
    if(drawCircle == "set"){
        radius = Math.floor(Math.random()*100);
        for(var i = 0; i <= toNumber; i++){
          circle(x, y, radius);
        }
        document.getElementById("status").innerHTML = "Circle is drawn.";
        drawCircle = "";
    }
}
