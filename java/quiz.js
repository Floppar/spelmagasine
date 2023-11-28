const Questions = [{
    q: "Kva er hovudstaden i Russland?",
    a: [{ text: "Berlin", isCorrect: false },
    { text: "Volgograd", isCorrect: false },
    { text: "Moskva", isCorrect: true },
    { text: "Mumbai", isCorrect: false }
    ]

},
{
    q: "Kva er ei blåkval",
    a: [{ text: "fisk", isCorrect: false, isSelected: false },
    { text: "insekt", isCorrect: false },
    { text: "plante", isCorrect: false },
    { text: "pattedyr", isCorrect: true }
    ]

},
{
    q: "Når er Noregs nasjonaldag?",
    a: [{ text: "4. juni", isCorrect: false },
    { text: "17. mai", isCorrect: true },
    { text: "17. oktober", isCorrect: false },
    { text: "12. desember", isCorrect: false }
    ]

},
{
    q: "Er gammastråling Ioniserande?",
    a: [{ text: "nei", isCorrect: false },
    { text: "ja", isCorrect: true },
    ]

},
{
    q: "Kva har USA?",
    a: [{ text: "president", isCorrect: true },
    { text: "konge", isCorrect: false },
    { text: "diktator", isCorrect: false },
    { text: "statsminister", isCorrect: false },
    ]

},
{
    q: "Kva er rett?",
    a: [{ text: "rett svar", isCorrect: false },
    { text: "denne", isCorrect: false },
    { text: "dei andre er feil", isCorrect: false },
    { text: "denne er rett", isCorrect: true }
    ]

},
{
    q: "Kvar ligger Filipinene?",
    a: [{ text: "Nord Amerika", isCorrect: false },
    { text: "Asia", isCorrect: false },
    { text: "Oceania", isCorrect: true },
    { text: "Europa", isCorrect: false },
    ]

},
{
    q: "Når blei Noreg eit sjølvstendig land?",
    a: [{ text: "1923", isCorrect: false },
    { text: "1905", isCorrect: true },
    { text: "2011", isCorrect: false },
    { text: "1814", isCorrect: false },
    ]

},

]

let currQuestion = 0
let score = 0

function loadQues() {
    const question = document.getElementById("ques")
    const opt = document.getElementById("opt")

    question.textContent = Questions[currQuestion].q;
    opt.innerHTML = ""

    for (let i = 0; i < Questions[currQuestion].a.length; i++) {
        const choicesdiv = document.createElement("div");
        const choice = document.createElement("input");
        const choiceLabel = document.createElement("label");

        choice.type = "radio";
        choice.name = "answer";
        choice.value = i;

        choiceLabel.textContent = Questions[currQuestion].a[i].text;

        choicesdiv.appendChild(choice);
        choicesdiv.appendChild(choiceLabel);
        opt.appendChild(choicesdiv);
    }
}

loadQues();

function loadScore() {
    const totalScore = document.getElementById("score")
    totalScore.textContent = `Du skårte ${score} ut av ${Questions.length}`
}


function nextQuestion() {
    if (currQuestion < Questions.length - 1) {
        currQuestion++;
        loadQues();
    } else {
        document.getElementById("opt").remove()
        document.getElementById("ques").remove()
        document.getElementById("btn").remove()
        loadScore();
    }
}

function checkAns() {
    const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);

    if (Questions[currQuestion].a[selectedAns].isCorrect) {
        score++;
        console.log("rett")
        nextQuestion();
    } else {
        nextQuestion();
    }
}