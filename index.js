
for(var i = 0; i < document.querySelectorAll(".drum").length; i++ ){ //7 drum buttons, will loop through all
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
  });
}
