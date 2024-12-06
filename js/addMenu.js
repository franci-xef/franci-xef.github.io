const contentDiv = document.getElementById("content")
const addMenuDiv = document.getElementById("addMenu")

function openMenu() {
    addMenuDiv.style.display = "flex"
}

function closeMenu() {
    addMenuDiv.style.display = "none"
}

document.querySelector("#closeMenu").addEventListener("click", closeMenu)
document.querySelector("#spawnAddMenu").addEventListener("click", openMenu)