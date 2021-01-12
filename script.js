console.log("javascript works");
//Game options:
const classicTerrorQuestions = [
    {
        question: "Year of publishing of Bram Stoker's \"Dracula\" novel?",
        imgUrl: "https://i.imgur.com/rdDlSCV.jpg",
        options: ["  1931", "  1987", "  1897", "  1892"],
        correctAnswer: 2
    },
    {
        question: "Name the actor who first interpreted \"Godzilla\" in a film:",
        imgUrl: "https://i.imgur.com/fctBHDk.jpg",
        options: ["  Haruo Nakajima", "  Toshiro Mifune", "  Akira Kurosama", "  Jean Reno"],
        correctAnswer: 0
    },
    {
        question: "Who was the first option to interpret the Creature in James Whale's \"Frankenstein\"?",
        imgUrl: "https://i.imgur.com/lplz8TJ.jpg",
        options: ["  Bela Lugosi", "  A real reanimated corpse", "  Boris Karloff", "  Lon Chaney"],
        correctAnswer: 0
    },
    {
        question: "Who wrote the novel in which was based the 1941's \"The Wolf Man\" movie?",
        imgUrl: "https://i.imgur.com/InBEmdX.png",
        options: ["  Edgar Allan Poe", "  Mary Shelley", "  It is not based on a novel", "  H.G. Wells"],
        correctAnswer: 2
    },
    {
        question: "How old was Mary Shelley when she started writing \"Frankenstein\"?",
        imgUrl: "https://i.imgur.com/rKNQKol.jpg",
        options: [  20,   18,   41,   57],
        correctAnswer: 1
    },
    {
        question: "What its the most popular nickname for the \"Creature from Black Lagoon\"?",
        imgUrl: "https://i.imgur.com/Tzge2N4.jpg",
        options: ["  Fishman", "  Gill-Man", "  Mer-Man", "  Aqua-Man"],
        correctAnswer: 1
    },
    {
        question: "Who is the director of 1925 \"The Phantom of the Opera\"?",
        imgUrl: "https://i.imgur.com/j4NGL8d.jpg",
        options: ["  Rupert Julian", "  Tod Browning", "  Alfred Hitchcock", "  James Whale"],
        correctAnswer: 0
    },
    {
        question: "Who kill \"King Kong\" in the 1933's movie?",
        imgUrl: "https://i.imgur.com/MhALhjO.jpg",
        options: ["  Airplanes", "  Died of Covid-02", "  Beauty", "  A giant lizzard"],
        correctAnswer: 2
    },
    {
        question: "Who played Nosferatu in the 1925's movie?",
        imgUrl: "https://i.imgur.com/Fm0z9HV.png",
        options: ["  Nicholas Cage", "  Tilda Swinton", "  A duck disguised as a vampire", "  Max Schreck"],
        correctAnswer: 3
    },
    {
        question: "Which famous actor can be seen in a cameo rol in 1933's \"The invisible man\"?",
        imgUrl: "https://i.imgur.com/rukReju.jpg",
        options: ["  Boris Karloff", "  Tilda Swinton", "  John Carradine", "  Bela Lugosi"],
        correctAnswer: 2
    },
];   

const modernTerrorQuestions = [
    {
        question: "Who interpreted \"The Djinn\" in 1997's \"Whishmaster\" film?",
        imgUrl: "https://i.imgur.com/S5Qh2Se.jpg",
        options: ["  Andrew Divoff", "  Tilda Swinton", "  David Hasselhoff", "  Robert Kurtzman"],
        correctAnswer: 0
    },
    {
        question: "How many doors were destroyed by Jack Nicholson in \"The shinning\"?",
        imgUrl: "https://i.imgur.com/hV3exkY.jpg",
        options: [  46,   72,   60,   24],
        correctAnswer: 0
    },
    {
        question: "How many sequels does \"Killer Clowns from Outter Space\" have?",
        imgUrl: "https://i.imgur.com/S5L2T9u.jpg",
        options: [  0,   2,   6,   1],
        correctAnswer: 0
    },
    {
        question: "Whose special effects genious was the director of 1988's \"Pumpkinhead\"?",
        imgUrl: "https://i.imgur.com/2w1pWQU.jpg",
        options: ["  Tilda Swinton", "  Stan Winston", "  Sebastian Stan", "  Robert Kurtzman"],
        correctAnswer: 1
    },
    {
        question: "Real name of the clown who appears in the \"It\" movie?",
        imgUrl: "https://i.imgur.com/SwvE5De.png",
        options: ["  Tilda Swinton", "  Bill Skarsgard", "  Pennywise", "  Tim Curry"],
        correctAnswer: 2
    },
    {
        question: "Who played the part of \"Lutz Ebensdorf\" in the 2018 remake of \"Suspiria\"?",
        imgUrl: "https://i.imgur.com/dVac83f.jpg",
        options: ["  Tilda Swinton", "  It was generated by computer", "  Nicholas Cage", "  Dario Argento"],
        correctAnswer: 0
    },
    {
        question: "How old is supposed to be \"Grandpa\" in Tobe Hooper's \"The Texas Chain Saw Massacre\"?",
        imgUrl: "https://i.imgur.com/ohSqKo8.jpg",
        options: [  85,   98,   124,   136],
        correctAnswer: 2
    },
    {
        question: "What kind of \"magic\" uses Charles Lee Ray to transfer his soul into Chucky's doll?",
        imgUrl: "https://i.imgur.com/Llc12UE.jpg",
        options: ["  Wiccan", "  Javascript", "  Kabbalah", "  Voodoo"],
        correctAnswer: 3
    },
    {
        question: "In whose short story both versions of \"The fly\" were based upon?",
        imgUrl: "https://i.imgur.com/4OfpsOt.jpg",
        options: ["  Stephen king", "  Patricia Highsmith", "  George Langelaan", "  Max Brooks"],
        correctAnswer: 2
    },
    {
        question: "Besides the sharks, what other animal appears in all \"Sharknado\" films?",
        imgUrl: "https://i.imgur.com/PYHtNC1.jpg",
        options: ["  A lavalantula", "  Tilda Swinton", "  A graboid ", "  A possum"],
        correctAnswer: 2
    },
];   

//Constants for Classic Challenge:

let currentQuestion = 0;
let correctAnswers = 0;
let gameCompleted = false;
const ctmChallenge = document.querySelector("#classic-terrors");

console.log(ctmChallenge);


//Display content for CTM-Challenge
ctmChallenge.addEventListener("click", function(evt) {
    displayCurrentQuestion(); 

    let ctmQuizzMessages = document.querySelector(".ctm-quizzMessages");
    ctmQuizzMessages.style.display = "none";

    document.querySelector(".ctm-modal-nxt-btn").addEventListener("click", function() {

        if(!gameCompleted){
            let radioBtnsReview = document.querySelector("input[type=radio]:checked");

            if (radioBtnsReview === null) {
                ctmQuizzMessages.innerText = "Don't be scared, you chicken! Please select an answer!";
                ctmQuizzMessages.style.display = "block";
            } else {
                console.log(radioBtnsReview.value);
                ctmQuizzMessages.style.display = "none";
                if (parseInt(radioBtnsReview.value) === classicTerrorQuestions[currentQuestion].correctAnswer) {
                    correctAnswers++;
                }
                
                currentQuestion++;

                if(currentQuestion < classicTerrorQuestions.length) {
                    displayCurrentQuestion();
                } else {
                    displayScore();
                    document.querySelector(".ctm-modal-nxt-btn").innerText = "Play Again?";
                    gameCompleted = true;
                }
                
            }
        } else {
            gameCompleted = false;
            document.querySelector(".ctm-modal-nxt-btn").innerText = "Next scare =>";
            resetGame();
            displayCurrentQuestion();
            hideScore();
        }
    });
});

//Display current question for CTM Challenge
function displayCurrentQuestion() {
    let question = classicTerrorQuestions[currentQuestion].question;
    let questionClass = document.querySelector(".ctm-modal-questions > .ctm-modal-question");
    let choiceList = document.querySelector(".ctm-modal-questions > .ctm-modal-answers");
    let numChoices = classicTerrorQuestions[currentQuestion].options.length;

    questionClass.innerText = question;
    choiceList.innerHTML = "";

    let choice;
    for(i = 0; i < numChoices; i++) {
        choice = classicTerrorQuestions[currentQuestion].options[i];

        let li = document.createElement("li");
        li.innerHTML = '<li><input type="radio" value="' + i + '" name="dynradio" />' + choice + '</li>'
        choiceList.appendChild(li);
    }
}

function resetGame() {
    currentQuestion = 0;
    correctAnswers = 0;
    hideScore();
}

//Functions to display-hide score CTM-Challenge

function displayScore() {
    if(correctAnswers == 10) {
        document.querySelector(".ctm-modal-questions > .ctm-modal-result").innerText = "You're simply a MONSTER GENIOUS! You got " + correctAnswers + " out of " + classicTerrorQuestions.length + "!";
        document.querySelector(".ctm-modal-questions > .ctm-modal-result").style.display = "block";
    } else if(correctAnswers == 8 || correctAnswers == 9) {
        document.querySelector(".ctm-modal-questions > .ctm-modal-result").innerText = "Amazing! You'got " + correctAnswers + " out of " + classicTerrorQuestions.length + "!";
        document.querySelector(".ctm-modal-questions > .ctm-modal-result").style.display = "block";
    } else if (correctAnswers == 7 || correctAnswers == 6) {
        document.querySelector(".ctm-modal-questions > .ctm-modal-result").innerText = "Not bad Boy! You're score is " + correctAnswers + " out of " + classicTerrorQuestions.length + "!";
        document.querySelector(".ctm-modal-questions > .ctm-modal-result").style.display = "block";
    } else if(correctAnswers == 5) {
        document.querySelector(".ctm-modal-questions > .ctm-modal-result").innerText = "C'mon Boy, you could do it better! You're score is " + correctAnswers + " out of " + classicTerrorQuestions.length + "!";
        document.querySelector(".ctm-modal-questions > .ctm-modal-result").style.display = "block";
    } else if(correctAnswers < 5) {
        document.querySelector(".ctm-modal-questions > .ctm-modal-result").innerText = "Geez! You only got " + correctAnswers + " right answers out of " + classicTerrorQuestions.length + "! Don't tell anyone you tried this!";
        document.querySelector(".ctm-modal-questions > .ctm-modal-result").style.display = "block";
    }
}

function hideScore() {
    document.querySelector(".ctm-modal-result").style.display = "none";
}


//Constants for Modern Challenge:

let mtmcurrentQuestion = 0;
let mtmcorrectAnswers = 0;
let mtmgameCompleted = false;
const mtmChallenge = document.querySelector("#modern-terrors");

console.log(mtmChallenge);


//Display content for MTM-Challenge
mtmChallenge.addEventListener("click", function(evt) {
    displayMtmCurrentQuestion(); 

    let mtmQuizzMessages = document.querySelector(".mtm-quizzMessages");
    mtmQuizzMessages.style.display = "none";

    document.querySelector(".mtm-modal-nxt-btn").addEventListener("click", function() {

        if(!mtmgameCompleted){
            let radioBtnsReview = document.querySelector("input[type=radio]:checked");

            if (radioBtnsReview === null) {
                mtmQuizzMessages.innerText = "Don't be scared, you chicken! Please select an answer!";
                mtmQuizzMessages.style.display = "block";
            } else {
                console.log(radioBtnsReview.value);
                mtmQuizzMessages.style.display = "none";
                if (parseInt(radioBtnsReview.value) === modernTerrorQuestions[mtmcurrentQuestion].correctAnswer) {
                    mtmcorrectAnswers++;
                }
                
                mtmcurrentQuestion++;

                if(mtmcurrentQuestion < modernTerrorQuestions.length) {
                    displayMtmCurrentQuestion();
                } else {
                    displayMtmScore();
                    document.querySelector(".mtm-modal-nxt-btn").innerText = "Play Again?";
                    mtmgameCompleted = true;
                }
                
            }
        } else {
            mtmgameCompleted = false;
            document.querySelector(".mtm-modal-nxt-btn").innerText = "Next scare =>";
            resetMtmGame();
            displayMtmCurrentQuestion();
            hideMtmScore();
        }
    });
});

//Display current question for CTM Challenge
function displayMtmCurrentQuestion() {
    let question = modernTerrorQuestions[mtmcurrentQuestion].question;
    let questionMtmClass = document.querySelector(".mtm-modal-questions > .mtm-modal-question");
    let choiceMtmList = document.querySelector(".mtm-modal-questions > .mtm-modal-answers");
    let numMtmChoices = modernTerrorQuestions[mtmcurrentQuestion].options.length;

    questionMtmClass.innerText = question;
    choiceMtmList.innerHTML = "";

    let choice;
    for(i = 0; i < numMtmChoices; i++) {
        choice = modernTerrorQuestions[mtmcurrentQuestion].options[i];

        let li = document.createElement("li");
        li.innerHTML = '<li><input type="radio" value="' + i + '" name="dynradio" />' + choice + '</li>'
        choiceMtmList.appendChild(li);
    }
}

function resetMtmGame() {
    mtmcurrentQuestion = 0;
    mtmcorrectAnswers = 0;
    hideMtmScore();
}

//Functions to display-hide score MTM-Challenge

function displayMtmScore() {
    if(mtmcorrectAnswers == 10) {
        document.querySelector(".mtm-modal-questions > .mtm-modal-result").innerText = "You're simply a MONSTER GENIOUS! You got " + mtmcorrectAnswers + " out of " + modernTerrorQuestions.length + "!";
        document.querySelector(".mtm-modal-questions > .mtm-modal-result").style.display = "block";
    } else if(mtmcorrectAnswers == 8 || mtmcorrectAnswers == 9) {
        document.querySelector(".mtm-modal-questions > .mtm-modal-result").innerText = "Amazing! You'got " + mtmcorrectAnswers + " out of " + modernTerrorQuestions.length + "!";
        document.querySelector(".mtm-modal-questions > .mtm-modal-result").style.display = "block";
    } else if (mtmcorrectAnswers == 7 || mtmcorrectAnswers == 6) {
        document.querySelector(".mtm-modal-questions > .mtm-modal-result").innerText = "Not bad Boy! You're score is " + mtmcorrectAnswers + " out of " + modernTerrorQuestions.length + "!";
        document.querySelector(".mtm-modal-questions > .mtm-modal-result").style.display = "block";
    } else if(mtmcorrectAnswers == 5) {
        document.querySelector(".mtm-modal-questions > .mtm-modal-result").innerText = "C'mon Boy, you could do it better! You're score is " + mtmcorrectAnswers + " out of " + modernTerrorQuestions.length + "!";
        document.querySelector(".mtm-modal-questions > .mtm-modal-result").style.display = "block";
    } else if(mtmcorrectAnswers < 5) {
        document.querySelector(".mtm-modal-questions > .mtm-modal-result").innerText = "Geez! You only got " + mtmcorrectAnswers + " right answers out of " + modernTerrorQuestions.length + "! Don't tell anyone you tried this!";
        document.querySelector(".mtm-modal-questions > .mtm-modal-result").style.display = "block";
    }
}

function hideMtmScore() {
    document.querySelector(".mtm-modal-result").style.display = "none";
}




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
