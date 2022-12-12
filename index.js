let url="https://apis.ccbp.in/random-quote";
let quote="";
let speedTypingTestEle=document.getElementById("speedTypingTest");
let timerEle=document.getElementById("timer");
let quoteDisplayEle = document.getElementById("quoteDisplay");
let quoteinputEle = document.getElementById("quoteInput");
let resultEle=document.getElementById("result");
let submitBtnEle=document.getElementById("submitBtn");
let restartBtnEle=document.getElementById("restartBtn");
let spinnerEle=document.getElementById("spinner");
spinnerEle.classList.remove("d-none");
let currentTimeSecsEle=document.getElementById("currentTimeSecs");

let data={
    quotedDisplayed: quote,
    typed:""
}
let options={
    method:"GET"
}

fetch(url,options)
    .then(function(response){
        return response.json();
    })
    .then(function(jsonData){
        spinnerEle.classList.add("d-none");
        data.quotedDisplayed=jsonData.content;
        quoteDisplayEle.textContent=data.quotedDisplayed;
    });

let counter=0 
let timerId=setInterval(function(){
    counter=counter+1;
    currentTimeSecsEle.textContent=counter;
},1000)

quoteinputEle.addEventListener("change",function(event){
    data.typed=event.target.value;
});

submitBtnEle.addEventListener("click",function(event){
    event.preventDefault();
    if(data.quotedDisplayed===data.typed){
        resultEle.textContent="You typed in "+counter+" seconds";
        resultEle.style.color="#323f4b";
        clearInterval(timerId);
    }else{
        resultEle.textContent="You typed Incorrect sentence";
        resultEle.style.color="#323f4b";
    }
});