const contentDiv = document.getElementById("content")


function spawnMenu() {
    const addMenuDiv =  document.createElement("div")
    addMenuDiv.id = "addMenu"
    contentDiv.appendChild(addMenuDiv)

}

document.querySelector("#spawnAddMenu").addEventListener("click", spawnMenu)