const secondHand = document.querySelector(".second-hand")
const minHand = document.querySelector(".min-hand")
const hourHand = document.querySelector(".hour-hand")
function setDate(){
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegree = (seconds/60)*360;
    secondHand.style.transform=`rotate(${secondsDegree}deg)`;

    const minuteHand = now.getMinutes();
    const minsDegree = (minuteHand/60)*360;
    minHand.style.transform=`rotate(${minsDegree}deg)`;

    const hours = now.getHours();
    const hoursDegree = (hours/60)*360;
    hourHand.style.transform=`rotate(${hoursDegree}deg)`


    
    console.log(secondsDegree);
};
setInterval(setDate, 1000);