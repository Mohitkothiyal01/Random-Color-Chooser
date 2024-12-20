
// GERERATTE RANDOM COLOR

const randomColor = function(){
    const Hex = "0123456789ABCDEF"
    let color = "#";
    for(let i = 0; i< 6; i++){
        color += Hex[Math.floor(Math.random()*16)]
    }
    return color;
}

// console.log(randomColor());

let timeInterval;

const startChangingColor = function(){

    const changeBgcolor = function(){
        document.body.style.backgroundColor = randomColor();
    }
    if(!timeInterval){
        timeInterval = setInterval(changeBgcolor,1000);
    }
    
}

const stopChangingColor = function(){
clearInterval(timeInterval);
timeInterval = null;
}

document.querySelector('#start').addEventListener('click',startChangingColor);
document.querySelector('#stop').addEventListener('click',stopChangingColor);