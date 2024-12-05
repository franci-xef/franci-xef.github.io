const morningDiv = document.getElementById("morning")
const afternoonDiv = document.getElementById("afternoon")
const eveningDiv = document.getElementById("evening")

function addCheck() {
    document.querySelector("#morning").addEventListener("click", addMorningCheck)
    morningDiv.classList.add("animation")
    
    document.querySelector("#afternoon").addEventListener("click", addAfternoonCheck)
    afternoonDiv.classList.add("animation")

    document.querySelector("#evening").addEventListener("click", addEveningCheck)
    eveningDiv.classList.add("animation")
}

function removeListener() {
    document.querySelector("#morning").removeEventListener("click", addMorningCheck)
    document.querySelector("#afternoon").removeEventListener("click", addAfternoonCheck)
    document.querySelector("#evening").removeEventListener("click", addEveningCheck)
}

function removeClass() {
    morningDiv.classList.remove("animation")
    afternoonDiv.classList.remove("animation")
    eveningDiv.classList.remove("animation")
}

function addMorningCheck() {
    removeListener()
    removeClass()

}

function addAfternoonCheck() {
    removeListener()
    removeClass()

}

function addEveningCheck() {
    removeListener()
    removeClass()

}

document.querySelector("#add").addEventListener("click", addCheck);