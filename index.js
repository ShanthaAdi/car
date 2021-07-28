const button= document.querySelector(".vertical")
button.addEventListener("click", question);
let isrotated= false;

function question(){
    isrotated?reverse():rotate();
};

function rotate()
{
    isrotated= true;
    button.classList.add("rotate");
};
function reverse()
{
    isrotated=false;
    button.classList.remove("rotate");
};


const bulb = document.querySelectorAll('.bulb');

    for(var i = 0;i<bulb.length;i++){
        bulb[i].classList.add("animation");
        setInterval(function(){
            const bulb = document.querySelectorAll('bulb');
            for(var i = 0;i<bulb.length;i++){
            bulb[i].classList.remove('animation');} }
            , 3000);
     
    }
