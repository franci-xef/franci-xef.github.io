const morning = document.getElementById("morning")
const afternoon =document.getElementById("afternoon")
const evening = document.getElementById("evening")
const custom = document.getElementById("custom")


function addMorning() {
    morning.style.display = "flex"
}

function addAfternoon() {
    afternoon.style.display = "flex"
}

function addEvening() {
    evening.style.display = "flex"
}

function addCustom() {
    custom.style.display = "flex"
}

function removeMorning() {
    morning.style.display = "none"
}

function removeAfternoon() {
    afternoon.style.display = "none"
}

function removeEvening() {
    evening.style.display = "none"
}

function removeCustom() {
    custom.style.display = "none"
}

document.querySelector("#addMorning").addEventListener("click", addMorning)
document.querySelector("#addAfternoon").addEventListener("click", addAfternoon)
document.querySelector("#addEvening").addEventListener("click", addEvening)
document.querySelector("#addCustom").addEventListener("click", addCustom)
document.querySelector("#remMorning").addEventListener("click", removeMorning)
document.querySelector("#remAfternoon").addEventListener("click", removeAfternoon)
document.querySelector("#remEvening").addEventListener("click", removeEvening)
document.querySelector("#remCustom").addEventListener("click", removeCustom)