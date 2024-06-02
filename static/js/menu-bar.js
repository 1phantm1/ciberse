const xmark = document.querySelector("i#xmark")
const menu = document.querySelector("i#menu-icon")
const menu_list = document.querySelector("div#menu-collapsed")
const menu_overflow = document.querySelector("div#overflow-menu")
let openmenu = false

menu.addEventListener("click", function() {
    if(!openmenu){
        menu_list.style.top = "0%"
        menu.style.top = "-40%"
        menu_overflow.style.display = "block"
        menu_overflow.style.opacity = "1"
        openmenu = true
    }
})
xmark.addEventListener("click", function() {
    if(openmenu){
        menu_list.style.top = "-40%"
        menu.style.display = "0%"
        menu_overflow.style.display = "none"
        menu_overflow.style.opacity = "0"

        openmenu = false
    }
})