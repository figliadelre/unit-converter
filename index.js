/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.getElementById("convert-btn")
let inputVal = ""

convertBtn.addEventListener("click", function(){
    let inputVal = document.getElementById("input-num").value
    lengthCalc(inputVal)
    volumeCalc(inputVal)
    massCalc(inputVal)
})

function lengthCalc(num) {
    feetConv = (num * 3.281)
    metersConv = (num / 3.281)
    document.getElementById("length").textContent = 
        `${num} m = ${Number(feetConv.toFixed(3))} ft | 
            ${num} ft = ${Number(metersConv.toFixed(3))} m`
}

function volumeCalc(num) {
    gallonConv = (num * 0.264)
    litersConv = (num / 0.264)
    document.getElementById("volume").textContent = 
        `${num} L = ${Number(gallonConv.toFixed(3))} gal | 
            ${num} gal = ${Number(litersConv.toFixed(3))} L`
}

function massCalc(num) {
    lbsConv = (num * 2.204)
    kgConv = (num / 2.204)
    document.getElementById("mass").textContent = 
    `${num} kg = ${Number(lbsConv.toFixed(3))} lbs | 
        ${num} lbs = ${Number(kgConv.toFixed(3))} kg`
}