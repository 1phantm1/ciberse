const basic = document.querySelector("button#basic")
const intermediary = document.querySelector("button#intermediary")
const advanced = document.querySelector("button#advanced")

const basic_photos = document.querySelector("div#basiclevel")
const inter_photos = document.querySelector("div#interlevel")
const adv_photos = document.querySelector("div#advlevel")

basic.addEventListener("click", () => {
    basic_photos.style.opacity = 1;
    inter_photos.style.opacity = 0;
    adv_photos.style.opacity = 0;
})
intermediary.addEventListener("click", () => {
    basic_photos.style.opacity = 0;
    inter_photos.style.opacity = 1;
    adv_photos.style.opacity = 0;
})
advanced.addEventListener("click", () => {
    basic_photos.style.opacity = 0;
    inter_photos.style.opacity = 0;
    adv_photos.style.opacity = 1;
})
