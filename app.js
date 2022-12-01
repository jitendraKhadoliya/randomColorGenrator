const myButton = document.querySelector(".mybtn");
const Body = document.body;
const myColor = document.querySelector(".myColor")


function randomColorGenrator(){
    const red = Math.floor(Math.random() *255);
    const green = Math.floor(Math.random() *255);
    const blue = Math.floor(Math.random() *255);
    const gernratedColor = `rgb(${red},${green},${blue})`
    return gernratedColor;
}


myButton.addEventListener("click",()=>{
    const gernratedColor = randomColorGenrator();
    Body.style.backgroundColor = gernratedColor;
    myColor.textContent = gernratedColor;
});