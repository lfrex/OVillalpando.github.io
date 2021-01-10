console.log("javascript works");
//Game options:
const classicTerrorQuestions = [
    {
        question: "Year of publishing of Bram Stoker's \"Dracula\" novel?",
        imgUrl: "https://i.imgur.com/rdDlSCV.jpg",
        options: ["1931", "1987", "1897", "1892"],
        correctAnswer: 2
    },
    {
        question: "Name the actor who first interpreted \"Godzilla\" in a film:",
        imgUrl: "https://i.imgur.com/fctBHDk.jpg",
        options: ["Haruo Nakajima", "Toshiro Mifune", "Akira Kurosama", "Jean Reno"],
        correctAnswer: 0
    },
    {
        question: "Who was the first option to interpret the Creature in James Whale's \"Frankenstein\"?",
        imgUrl: "https://i.imgur.com/lplz8TJ.jpg",
        options: ["Bela Lugosi", "A real reanimated corpse", "Boris Karloff", "Lon Chaney"],
        correctAnswer: 0
    },
    {
        question: "Who wrote the novel in which was based the 1941's \"The Wolf Man\" movie?",
        imgUrl: "https://i.imgur.com/InBEmdX.png",
        options: ["Edgar Allan Poe", "Mary Shelley", "It is not based on a novel", "H.G. Wells"],
        correctAnswer: 2
    },
    {
        question: "How old was Mary Shelley when she started writing \"Frankenstein\"?",
        imgUrl: "https://i.imgur.com/rKNQKol.jpg",
        options: [20, 18, 41, 57],
        correctAnswer: 1
    },
    {
        question: "What its the most popular nickname for the \"Creature from Black Lagoon\"?",
        imgUrl: "https://i.imgur.com/Tzge2N4.jpg",
        options: ["Fishman", "Gill-Man", "Mer-Man", "Aqua-Man"],
        correctAnswer: 1
    },
    {
        question: "Who is the director of 1925 \"The Phantom of the Opera\"?",
        imgUrl: "https://i.imgur.com/j4NGL8d.jpg",
        options: ["Rupert Julian", "Tod Browning", "Alfred Hitchcock", "James Whale"],
        correctAnswer: 0
    },
    {
        question: "Who kill \"King Kong\" in the 1933's movie?",
        imgUrl: "https://i.imgur.com/MhALhjO.jpg",
        options: ["Airplanes", "Died of Covid-02", "Beauty", "A giant lizzard"],
        correctAnswer: 2
    },
    {
        question: "Who played Nosferatu in the 1925's movie?",
        imgUrl: "https://i.imgur.com/Fm0z9HV.png",
        options: ["Nicholas Cage", "Tilda Swinton", "A duck disguised as a vampire", "Max Schreck"],
        correctAnswer: 3
    },
    {
        question: "Which famous actor can be seen in a cameo rol in 1933's \"The invisible man\"?",
        imgUrl: "https://i.imgur.com/rukReju.jpg",
        options: ["Boris Karloff", "Tilda Swinton", "John Carradine", "Bela Lugosi"],
        correctAnswer: 2
    },
];   

const modernTerrorQuestions = [
    {
        question: "Who interpreted \"The Djinn\" in 1997's \"Whishmaster\" film?",
        imgUrl: "https://i.imgur.com/S5Qh2Se.jpg",
        options: ["Andrew Divoff", "Tilda Swinton", "David Hasselhoff", "Robert Kurtzman"],
        correctAnswer: 0
    },
    {
        question: "How many doors were destroyed by Jack Nicholson in \"The shinning\"?",
        imgUrl: "https://i.imgur.com/hV3exkY.jpg",
        options: [46, 72, 60, 24],
        correctAnswer: 0
    },
    {
        question: "How many sequels does \"Killer Clowns from Outter Space\" have?",
        imgUrl: "https://i.imgur.com/S5L2T9u.jpg",
        options: [0, 2, 6, 1],
        correctAnswer: 0
    },
    {
        question: "Whose special effects genious was the director of 1988's \"Pumpkinhead\"?",
        imgUrl: "https://i.imgur.com/2w1pWQU.jpg",
        options: ["Tilda Swinton", "Stan Winston", "Sebastian Stan", "Robert Kurtzman"],
        correctAnswer: 1
    },
    {
        question: "Real name of the clown who appears in the \"It\" movie?",
        imgUrl: "https://i.imgur.com/SwvE5De.png",
        options: ["Tilda Swinton", "Bill Skarsgard", "Pennywise", "Tim Curry"],
        correctAnswer: 2
    },
    {
        question: "What its the most popular nickname for the \"Creature from Black Lagoon\"?",
        imgUrl: "https://i.imgur.com/Tzge2N4.jpg",
        options: ["Fishman", "Gill-Man", "Mer-Man", "Aqua-Man"],
        correctAnswer: 1
    },
    {
        question: "Who is the director of 1925 \"The Phantom of the Opera\"?",
        imgUrl: "https://i.imgur.com/j4NGL8d.jpg",
        options: ["Rupert Julian", "Tod Browning", "Alfred Hitchcock", "James Whale"],
        correctAnswer: 0
    },
    {
        question: "Who kill \"King Kong\" in the 1933's movie?",
        imgUrl: "https://i.imgur.com/MhALhjO.jpg",
        options: ["Airplanes", "Died of Covid-02", "Beauty", "A giant lizzard"],
        correctAnswer: 2
    },
    {
        question: "Who played Nosferatu in the 1925's movie?",
        imgUrl: "https://i.imgur.com/Fm0z9HV.png",
        options: ["Nicholas Cage", "Tilda Swinton", "A duck disguised as a vampire", "Max Schreck"],
        correctAnswer: 3
    },
    {
        question: "Which famous actor can be seen in a cameo rol in 1933's \"The invisible man\"?",
        imgUrl: "https://i.imgur.com/rukReju.jpg",
        options: ["Boris Karloff", "Tilda Swinton", "John Carradine", "Bela Lugosi"],
        correctAnswer: 2
    },
];   






//Modal sections construction
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
