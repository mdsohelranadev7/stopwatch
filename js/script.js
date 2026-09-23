// let input = document.getElementById('input')
let display = document.getElementById('display')
let start = document.getElementById('start')
let stop = document.getElementById('stop')
let reset = document.getElementById('reset')




let milisecound = 0;
let secound = 0;
let minit = 0;

let timerid = null;
function sssss() {
    if (timerid !== null) {
        clearInterval(timerid)
    }
    timerid = setInterval(() => {
        starttime()
    }, 10)
}



function starttime() {

    milisecound++
    if (milisecound == 100) {
        milisecound = 0;
        secound++
        if (secound == 60) {
            secound = 0;
            minit++
        }
    }

    let minits = String(minit).padStart(2, "0")
    let secounds = String(secound).padStart(2, "0")
    let milisecounds = String(milisecound).padStart(2, "0")


    display.textContent = `${minits}:${secounds}:${milisecounds}`
}


start.addEventListener('click', () => {
    sssss()

})


stop.addEventListener('click', () => {

    clearInterval(timerid)


})

reset.addEventListener('click', () => {
    clearInterval(timerid)
    display.textContent = `00:00:00`

    // milisecound = secound = minit = 0

    milisecound = 0;
    secound = 0;
    minit = 0;
})