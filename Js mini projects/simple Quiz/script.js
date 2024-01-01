const que = [
    {
        ques: "Which is the largest animal in the world?",
        ans:[
            {text:"Shark", correct:false},
            {text:"Blue Whale", correct:true},
            {text:"Elephant", correct:false},
            {text:"Giraffe", correct:false}
        ]
    },

    {
        ques: "Which is the  largest dessert in the world?",
        ans:[
            {text:"Kalahari", correct:false},
            {text:"Gobi", correct:false},
            {text:"Sahara", correct:false},
            {text:"Antarctica", correct:true}
        ]
    },

    {
        ques: "Which is the smallest continent in the world?",
        ans:[
            {text:"Asia", correct:false},
            {text:"Australia", correct:true},
            {text:"Arctic", correct:false},
            {text:"Africa", correct:false}
        ]
    }
];


const queElement = document.getElementById("que");
const ansBtns= document.getElementById("ans-btns");
const nextBtn= document.getElementById("next-btn");

let currentQueIndex = 0;
let score = 0;

function startQuiz(){
    currentQueIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Next";
    showQue();
}


function  showQue(){
    resetState();
    let currentQue = que[currentQueIndex];
    let queNo =  currentQueIndex + 1;
    queElement.innerHTML =  queNo +"."+ currentQue.ques;

    currentQue.ans.forEach(ans=>{
        const button = document.createElement("button");
        button.innerHTML = ans.text;
        button.classList.add("btn");
        ansBtns.appendChild(button);

        if(ans.correct){
            button.dataset.correct = ans.correct;
        }
        button.addEventListener("click", selectAns);
       
    })

}

function resetState(){
    nextBtn.style.display = "none";

while(ansBtns.firstChild){
    ansBtns.removeChild(ansBtns.firstChild);
}

}

function selectAns(e){
        const selectBtn = e.target;
        const iscorrect = selectBtn.dataset.correct === "true";
        if(iscorrect){
            selectBtn.classList.add("correct");
            score++;
        }

        else{
            selectBtn.classList.add("incorrect");
        }

    Array.from(ansBtns.children).forEach(button=>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }

        button.disabled = true;
    });

    nextBtn.style.display = "block";
}

function showScore(){
    resetState();
    queElement.innerHTML = `You scored ${score} out of ${que.length}`;
    nextBtn.innerHTML = "Play again";
    nextBtn.style.display = "block";
}

function handleNextBtn(){
    currentQueIndex++;

    if(currentQueIndex < que.length){
       showQue();
    }

    else{
        showScore();
    }
}

nextBtn.addEventListener("click",()=>{

    if(currentQueIndex < que.length){
        handleNextBtn();
    }

    else{
        startQuiz();
    }
})

startQuiz();