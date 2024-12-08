const contentDiv = document.getElementById("content")
const addMenuDiv = document.getElementById("addMenu")

function removeAnimation() {

}

function openMenu() {
    addMenuDiv.style.display = "flex"
    addMenuDiv.classList.remove("closeAnimation")
    addMenuDiv.classList.add("openAnimation")
}

function closeMenu() {
    addMenuDiv.classList.remove("openAnimation")
    addMenuDiv.classList.add("closeAnimation")
    
    setTimeout(function() {addMenuDiv.style.display = "none"}, 200)
}

document.querySelector("#closeMenu").addEventListener("click", closeMenu)
document.querySelector("#spawnAddMenu").addEventListener("click", openMenu)