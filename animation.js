let head = document.querySelector("header");        //selecting header

const myanimation = head.animate([{         //starting animation
        transform: 'translateY(3em)'
    },
    {                                //transform header along Y-axis
        transform: 'translateY(-1em)'
    }],
    {
    duration: 1000,                  //setting properties likes duration, iterations, direction and easing
    iterations: Infinity,
    direction: 'alternate',
    easing: 'ease'
});

let section1 = document.querySelector('section');       //selecting section element

const myanimation2 = section1.animate([{        //starting animation
        transform: 'translateX(1em) scale(0.9)'
    },
    {                                //transform header along x-axis and scaling the items from 0 to 2
        transform: 'translateX(-1em) scale(-0.9)'
    }], 
    {
    duration: 3000,         //setting properties likes duration, iterations, direction and easing
    iterations: Infinity,
    direction: 'alternate',
    easing: 'ease-in-out'
});

myanimation.pause();        //pausing animations as a default
myanimation2.pause();

let playanimation = document.getElementById('playanimation');       //selecting play button
playanimation.onclick = function () {       //running funciton on button click to play animation
myanimation.play();                      //playing
};

let pauseanimation = document.getElementById('pauseanimation');         //selecting pause button
pauseanimation.onclick = function () {          //running funciton on button click to pause both animations
myanimation.pause();
myanimation2.pause();                        //pausing
};

let moreanimation = document.getElementById('moreanimation');       //selecting third button for more animation
moreanimation.onclick = function () {        //function to play more animation on third button click 
myanimation2.play();
};