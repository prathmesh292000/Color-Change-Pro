//generate a random color

const randomColor = function (){
    const hex ="0123456789ABCDEF"
    let color = '#'
    for(let i = 0; i < 6; i++){
     color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
};

let IntervalID;

const StartColorChanger = function(){
    if (!IntervalID){
        IntervalID = setInterval(ChangeBgColor, 1000)
    }
    function ChangeBgColor(params) {
        document.body.style.backgroundColor = randomColor()
    }
};
const StopColorChanger = function(){
     clearInterval(IntervalID);
     IntervalID = null;
};

document.querySelector('#start').addEventListener('click', StartColorChanger)
document.querySelector('#stop').addEventListener('click', StopColorChanger)