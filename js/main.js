const videoBox = document.querySelector('.video-box');
window.addEventListener('scroll', function(){
    const val = 1200 - window.scrollY;
    videoBox.style.clipPath = "circle("+ val +"px at center center)";
});