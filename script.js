window.onload =function(){

    const content=document.querySelector('.container-content');
    
    const historyBtn=document.querySelector('.history');
    const visionBtn=document.querySelector('.vision');
    const goalsBtn=document.querySelector('.goals');
    
    let isHistorySet=true,isVisionSet=false,isGoalsSet=false;

    let h="Historys";
    let v="Visions";
    let g="Goals";
    
    function displayHistory(){
        if(isHistorySet==false){
            content.innerHTML=h;
            isHistorySet=true;
            isVisionSet=false;
            isGoalsSet=false

            historyBtn.style.backgroundColor='rgb(235, 221, 76)';
            visionBtn.style.backgroundColor='#effaf6';
            goalsBtn.style.backgroundColor='#effaf6';
        }
    }
    
    function displayVision(){
    if(isVisionSet==false){
        content.innerHTML=v;
        isHistorySet=false
        isVisionSet=true;
        isGoalsSet=false

        historyBtn.style.backgroundColor='#effaf6';
        visionBtn.style.backgroundColor='rgb(235, 221, 76)';
        goalsBtn.style.backgroundColor='#effaf6';        
    }
}

function displayGoals(){
    if(isGoalsSet==false){
        content.innerHTML=g;
        isHistorySet=false
        isVisionSet=false
        isGoalsSet=true;
        
        historyBtn.style.backgroundColor='#effaf6';
        visionBtn.style.backgroundColor='#effaf6';
        goalsBtn.style.backgroundColor='rgb(235, 221, 76)';
    }
}

historyBtn.addEventListener('click',displayHistory);
visionBtn.addEventListener('click',displayVision);
goalsBtn.addEventListener('click',displayGoals);

}

