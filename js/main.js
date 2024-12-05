const morningDiv = document.getElementById("morning")
const afternoonDiv = document.getElementById("afternoon")
const eveningDiv = document.getElementById("evening")

//set divs as avent listeners and add animations
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

//append checkbutton
function addMorningCheck() {
    const checkButton = document.createElement("input")
    checkButton.type = "checkbox"

    removeListener()
    removeClass()

    morningDiv.appendChild(checkButton)
}

function addAfternoonCheck() {
    const checkButton = document.createElement("input")
    checkButton.type = "checkbox"

    removeListener()
    removeClass()

    afternoonDiv.appendChild(checkButton)
}

function addEveningCheck() {
    const checkButton = document.createElement("input")
    checkButton.type = "checkbox"

    removeListener()
    removeClass()

    eveningDiv.appendChild(checkButton)
}


//first event listener
document.querySelector("#addCheck").addEventListener("click", addCheck);