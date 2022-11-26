// selecting all drum(button) from html in form of an array
// this will return array of elements of class drum.
let drum = document.querySelectorAll(".drum");


// click event listener
for (let x = 0; x < drum.length; x++) {
  // this function will called when we click on any of the button with class="drum"
  drum[x].addEventListener("click", function () {
    let buttonInnerHtml = this.innerHTML;
    getSound(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);
  });
}


// keypress event listener
document.addEventListener("keypress", function(event){
   let key= event.key.toLowerCase();
   getSound(key);
   buttonAnimation(key);
});

function getSound(drumText){
    let audio;
    switch (drumText) {
        case "w":
          audio = new Audio("sounds/tom-3.mp3");
          audio.play();
          break;
        case "d":
          audio = new Audio("sounds/crash.mp3");
          audio.play();
          break;
        case "a":
          audio = new Audio("sounds/kick-bass.mp3");
          audio.play();
          break;
        case "k":
          audio = new Audio("sounds/snare.mp3");
          audio.play();
          break;
        case "l":
          audio = new Audio("sounds/tom-1.mp3");
          audio.play();
          break;
        case "j":
          audio = new Audio("sounds/tom-2.mp3");
          audio.play();
          break;
        case "s":
          audio = new Audio("sounds/tom-4.mp3");
          audio.play();
          break;
          default:
              alert("not correct drum");
      }
};

// this function will add effect(css) on the active drum.
function buttonAnimation(currentKey){
let activeDrum = document.querySelector("."+ currentKey);
activeDrum.classList.add("pressed");

// this function will be called after delay of 1000ms.
setTimeout(function(){
  activeDrum.classList.remove("pressed");
}, 1000);
}
