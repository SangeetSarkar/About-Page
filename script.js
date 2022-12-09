const content=document.querySelector('.container-content');

const historyBtn=document.querySelector('body > div.content > div > div.button-container > button.history');
const visionBtn=document.querySelector('body > div.content > div > div.button-container > button.vision');
const goalsBtn=document.querySelector('body > div.content > div > div.button-container > button.goals');

let isHistorySet=true,isVisionSet=false,isGoalsSet=false;

let history="historys";
let vision="visions";
let goal="goals";

function displayHistory(){
    if(isHistorySet==false){
        content.innerHTML=history;
        isHistorySet=true;
        isVisionSet=false;
        isGoalsSet=false
    }
}

function displayVision(){
    if(isVisionSet==false){
        content.innerHTML=vision;
        isHistorySet=false
        isVisionSet=true;
        isGoalsSet=false
    }
}

function displayGoals(){
    if(isGoalsSet==false){
        content.innerHTML=goal;
        isHistorySet=false
        isVisionSet=false
        isGoalsSet=true;

    }
}

historyBtn.addEventListener('click',displayHistory);
visionBtn.addEventListener('click',displayVision);
goalsBtn.addEventListener('click',displayGoals);


