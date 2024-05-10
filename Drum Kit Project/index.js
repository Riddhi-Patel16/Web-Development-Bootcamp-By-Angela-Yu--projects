// // first method to add sound
for(var i=0;i<(document.querySelectorAll(".drum").length);i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("keydown",function(event)
    {
        console.log(event);
        var num=event.key;
        switch(num)
        {
            case "w":
                var audio=new Audio('sounds/tom-1.mp3');
                audio.play();
                break;
            case "a":
                var audio=new Audio('sounds/tom-2.mp3');
                audio.play();
                break;
            case "s":
                var audio=new Audio('sounds/tom-3.mp3');
                audio.play();
                break;
            case "d":
                var audio=new Audio('sounds/tom-4.mp3');
                audio.play();
                break;
            case "j":
                var audio=new Audio('sounds/snare.mp3');
                audio.play();
                break;
            case "k":
                var audio=new Audio('sounds/crash.mp3');
                audio.play();
                break;
            case "l":
                var audio=new Audio('sounds/kick-bass.mp3');
                audio.play();
                break;
            default:
                console.log("invalid");
                break;} 
                animation(num);
    });  
}
// second method to add sound
document.querySelectorAll("button").forEach((o,index) => {
    // console.log(o);
    // console.log(index);
    o.addEventListener('click',function(){
        //    console.log(index);
           var audio;
           if(index==0)
           {
            audio=new Audio();
            audio.setAttribute("src","./sounds/tom-1.mp3");
           }
          else  if(index==1)
           {
            audio=new Audio("./sounds/tom-2.mp3");
           }
          else  if(index==2)
           {
            audio=new Audio("./sounds/tom-3.mp3");
           }
           else if(index==3)
           {
            audio=new Audio("./sounds/tom-4.mp3");
           }
           else if(index==4)
           {
            audio=new Audio("./sounds/snare.mp3");
           }
           else if(index==5)
           {
            audio=new Audio("./sounds/crash.mp3");
           }
           else if(index==6)
           {
            audio=new Audio("./sounds/kick-bass.mp3");
           }
           else  {
            console.log("invalid");
           }
           audio.play();
           animation(o.innerHTML);
    })
})

function animation(currentkey)
{
    var btn=document.querySelector("."+currentkey);
    btn.classList.add("pressed");
    setTimeout(function(){
        btn.classList.remove("pressed");   
    },100);
}

