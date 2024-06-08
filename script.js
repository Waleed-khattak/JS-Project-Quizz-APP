let Qdb = [
    {
        question: "Q1 : Largest province of Pakistan is ?",
        a: "Kpk",
        b: "Sindh",
        c: "Balochistan",
        d: "Punjab",
        ans: "answer3"
    },

    {
        question: "Q2 : Capital of Pakistan is ?",
        a: "IslamAbad",
        b: "Karachi",
        c: "Lahore",
        d: "Peshawar",
        ans: "answer1"
    },

    {
        question: "Q3 : The current Prime Minister of pakistan is ?",
        a: "Imran khan",
        b: "Shehbaz sharif",
        c: "Bilawal Butto",
        d: "None of above",
        ans: "answer2"
    },

    {
        question: "Q4 : The highest mountain peak in pakistan ?",
        a: "Mount evrest",
        b: "Nanga parbat",
        c: "K2",
        d: "none of above",
        ans: "answer3"
    },

    {
        question: "Q5 : Founder of pakistan is ?",
        a: "Allama iqbal",
        b: "Mahatma Gandhi",
        c: "Indira gandhi",
        d: "Muhammad ali jinnah",
        ans: "answer4"
    },

    {
        question: "Q6 : Official language of pakistan is ?",
        a: "Hindi",
        b: "English",
        c: "Urdu",
        d: "a and b Both",
        ans: "answer3"
    },

    {
        question: "Q7 : As a Pakistani our independence year is ?",
        a: "1947",
        b: "1871",
        c: "1901",
        d: "1855",
        ans: "answer1"
    },

    {
        question: "Q8 : Length of the coastline of pakistan is ?",
        a: "650 km",
        b: "700 km",
        c: "750 km",
        d: "800 km",
        ans: "answer3"
    }
];

let questions = document.getElementById('question');
let option1 = document.getElementById('option1');
let option2 = document.getElementById('option2');
let option3 = document.getElementById('option3');
let option4 = document.getElementById('option4');
let btn = document.getElementById('btn');
let answers = document.querySelectorAll('.answer');
let scorearea = document.querySelector('.scorearea');
let showscore = document.querySelector('#showscore');

let questioncount = 0;
let score  = 0;

let loadquestion = () => {
    
    let listquestion = Qdb[questioncount];

    questions.innerHTML = listquestion.question;
    option1.innerHTML = listquestion.a;
    option2.innerHTML = listquestion.b;
    option3.innerHTML = listquestion.c;
    option4.innerHTML = listquestion.d;
}

loadquestion();

let checkanswer = () =>{
    let answer;

    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked)
        {
            answer = curAnsElem.id;
        }

    });
    return answer;
}


let deselectAll = () => {
    answers.forEach((curAnsElem) => {
        curAnsElem.checked = false;
    });
}

btn.addEventListener('click', () =>{
    let checkedanswer = checkanswer();
    console.log(checkedanswer);
    
    if(checkedanswer == Qdb[questioncount].ans)
    {
        score++;
    }

    console.log(score);

    questioncount++;

    deselectAll();

    if(questioncount < Qdb.length)
    {
    loadquestion();
    }
    else
    {
    showscore.style.display = 'block';
      scorearea.innerHTML =  `<h4>your score is ${score} / ${Qdb.length} ✌</h4>
      <button id="btn1" onclick="location.reload()">Try Again</button>`;

    }
});



