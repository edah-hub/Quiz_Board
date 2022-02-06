function mySubmitButton(){
  //variable declared
    var score = 0;
    var currentAnswer1 = document.Questions.question1.value;
    var currentAnswer2 = document.Questions.question2.value;
    var currentAnswer3 = document.Questions.question3.value;
    var currentAnswer4 = document.Questions.question4.value;
    var currentAnswer5= document.Questions.question5.value;
    var results=document.getElementById("results");

    if (currentAnswer1 =="Hypertext Markup Languge"){score+=10};
    if (currentAnswer2 =="Cascading Style Sheet"){score+=10};
    if (currentAnswer3 =="Hypertext Preprocessor"){score+=10};
    if (currentAnswer4 =="Java Script"){score+=10};
    if (currentAnswer5 =="Sequential Query Language"){score+=10};
    
     //scores

     if (score==50){
        results.textContent="score is 100%. Passed";
    }else if (score==40){
        results.textContent="score is 80%. Passed";
    }else if (score==30){
        results.textContent="score is 60%. Passed";
    }else if (score==20){
        results.textContent="score is 40%. Failed";
    }else if (score==10){
        results.textContent="score is 20%. Failed";
    }else {
        results.textContent="score is 0.Failed";
    
    }

}
//alert
alert("Quiz submitted!");