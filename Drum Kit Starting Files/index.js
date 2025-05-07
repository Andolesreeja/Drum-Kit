//detecting button click

var len=$(".drum").length

for(var i=0;i<len ;i++){

 $(".drum").addEventListener("click", function () {

    var buttonInnerHtml = this.innerHTML;//stores the clicked value on console like "w","a"..

    makesound(buttonInnerHtml);

    buttonAnimation(buttonInnerHtml);


});
}
//detecting key pressed
document.addEventListener("keypress",function(event) {//event spcifies the keys pressed

   makesound(event.key);
   buttonAnimation(event.key); //detects which key got pressed

});

function makesound(key){ //based on the click or keypressed the sound is detected
    
    switch (key) {
        case "w":
            var tom1= new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
    
        case "a":
            var tom2= new Audio("sounds/tom-2.mp3");
            
            tom2.play();
            break;
    
        case "s":
            var tom3= new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
    
        case "d":
            var tom4= new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
    
        case "j":
            var snare= new Audio("sounds/snare.mp3");
            snare.play();
            break;
    
        case "k":
            var kick= new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
    
        case "l":
            var crash= new Audio("sounds/crash.mp3");
            crash.play();
            break;
        default: console.log(buttonInnerHtml)
    
    }
}

function buttonAnimation (currentkey) {

    var activeButton = document.querySelector("."+currentkey);

    activeButton.classList.add("pressed");

    setTimeout(function(){

        activeButton.classList.remove("pressed");
    },100 );
}

