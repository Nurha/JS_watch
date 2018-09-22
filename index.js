const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

const allHands    = document.querySelectorAll('.hand')

function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`; // es6 template literals

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + 90;
    minHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hours = now.getHours();
    const hoursDregrees = ((hours / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDregrees}deg)`;

    if(secondsDegrees === 90) {
        allHands.forEach(hand => hand.style.transition = 'none')  
    } else {
        allHands.forEach(hand => hand.style.transition = '')      
    }
}

setInterval(setDate, 1000);