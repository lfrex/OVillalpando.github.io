console.log("javascript works");

const classicTerrorModal = document.querySelector("#classic-terror-modal");
const classicTerrorModalBtn = document.querySelector("#classic-terrors");
const exitCtmBtn = document.querySelector(".ctm-return")
const modernTerrorModal = document.querySelector("#modern-terror-modal");
const modernTerrorModalBtn = document.querySelector("#modern-terrors");
const exitMtmlBtn = document.querySelector(".mtm-return");

classicTerrorModalBtn.addEventListener("click", function() {
    classicTerrorModal.style.display = "block";
})

modernTerrorModalBtn.addEventListener("click", function() {
    modernTerrorModal.style.display = "block";
})

exitCtmBtn.addEventListener("click", function() {
    classicTerrorModal.style.display = "none";
})

exitMtmlBtn.addEventListener("click", function() {
    modernTerrorModal.style.display = "none";
})

window.addEventListener("click", function(evt) {
    if(evt.target == classicTerrorModal || evt.target == modernTerrorModal) {
        classicTerrorModal.style.display = "none";
        modernTerrorModal.style.display = "none";
    }
})
