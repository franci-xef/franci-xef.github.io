function addCheck() {
    document.querySelector("#morning").addEventListener("click", addMorningCheck)
    document.querySelector("#afternoon").addEventListener("click", addAfternoonCheck)
    document.querySelector("#evening").addEventListener("click", addEveningCheck)
}

function removeListener() {
    document.querySelector("#morning").removeEventListener("click", addMorningCheck)
    document.querySelector("#afternoon").removeEventListener("click", addAfternoonCheck)
    document.querySelector("#evening").removeEventListener("click", addEveningCheck)
}

function addMorningCheck() {
    removeListener()


}

function addAfternoonCheck() {
    removeListener()


}

function addEveningCheck() {
    removeListener()


}

document.querySelector("#add").addEventListener("click", addCheck);