var video = document.getElementById("myVideo"); //변수 video는 myVideo를 찾음
var btn = document.getElementById("myBtn"); //변수 btn은 myBtn을 찾음

function myFunction() {
    if (video.paused) { //영상이 움직일때
        video.play();
        btn.innerHTML = "Pause";
    }
    
    else {
        video.pause(); //영상이 멈춰있을때
        btn.innerHTML = "Play";
    }
}