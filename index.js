for(var i=0; i<document.querySelectorAll(".drum").length ;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click" , function(){
	var obj=this.innerHTML;
	playA(obj);
  disp(obj);
	});
}
document.addEventListener("keydown" ,function(event){
  playA(event.key);
  disp(event.key);
});
function playA(obj)
{
  //var obj=this.innerHTML;
  switch (obj) {
    case "w":
    var audio=new Audio('sounds/crash.mp3');
    audio.play();
    break;
    case "a":
    var audio=new Audio('sounds/kick-bass.mp3');
    audio.play();
    break;
    case "s":
    var audio=new Audio('sounds/snare.mp3');
    audio.play();
    break;
    case "d":
    var audio=new Audio('sounds/tom-1.mp3');
    audio.play();
    break;
    case "j":
    var audio=new Audio('sounds/tom-2.mp3');
    audio.play();
    break;
    case "k":
    var audio=new Audio('sounds/tom-3.mp3');
    audio.play();
    break;
    case "l":
    var audio=new Audio('sounds/tom-4.mp3');
    audio.play();
    break;

    default:console.log("Invalid Input");

  }

}

function disp(obj)
{
  document.querySelector("."+obj).classList.add("pressed");
  setTimeout(function(){
    document.querySelector("."+obj).classList.remove("pressed");
  },100);
}

// function ()
// {
//     //---------------------
//     //IF-ELSE
//     //---------------------
//     if(this.innerHTML=="w")
//     {
//       var audio=new Audio('sounds/crash.mp3');
//       audio.play();
//     }
//     else if(this.innerHTML=="a")
//     {
//       var audio=new Audio('sounds/kick-bass.mp3');
//       audio.play();
//     }
//     else if(this.innerHTML=="s")
//     {
//       var audio=new Audio('sounds/snare.mp3');
//       audio.play();
//     }
//     else if(this.innerHTML=="d")
//     {
//       var audio=new Audio('sounds/tom-1.mp3');
//       audio.play();
//     }
//     else if(this.innerHTML=="j")
//     {
//       var audio=new Audio('sounds/tom-2.mp3');
//       audio.play();
//     }
//     else if(this.innerHTML=="k")
//     {
//       var audio=new Audio('sounds/tom-3.mp3');
//       audio.play();
//     }
//     else if(this.innerHTML=="l")
//     {
//       var audio=new Audio('sounds/tom-4.mp3');
//       audio.play();
//     }
    //----------------------
    // SWITCH case
    //----------------------
    // var obj=this.innerHTML;
    // switch (obj) {
    //   case "w":
    //   var audio=new Audio('sounds/crash.mp3');
    //   audio.play();
    //   break;
    //   case "a":
    //   var audio=new Audio('sounds/kick-bass.mp3');
    //   audio.play();
    //   break;
    //   case "s":
    //   var audio=new Audio('sounds/snare.mp3');
    //   audio.play();
    //   break;
    //   case "d":
    //   var audio=new Audio('sounds/tom-1.mp3');
    //   audio.play();
    //   break;
    //   case "j":
    //   var audio=new Audio('sounds/tom-2.mp3');
    //   audio.play();
    //   break;
    //   case "k":
    //   var audio=new Audio('sounds/tom-3.mp3');
    //   audio.play();
    //   break;
    //   case "l":
    //   var audio=new Audio('sounds/tom-4.mp3');
    //   audio.play();
    //   break;
    //
    //   default:console.log("Invalid Input");
    //
    // }
