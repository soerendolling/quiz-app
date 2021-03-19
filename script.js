const button = document.querySelectorAll('button')
const answer = document.querySelectorAll('.quiz-card__answer')

for (let i = 0; i < answer.length;i++){
button[i].addEventListener('click', () => {
 const added = answer[i].classList.toggle(".quiz-card__answer")
 
 if (added) {
    answer[i].style.display = "block"
 } else {
    answer[i].style.display = "none"
 }

});
} 
 
const bookmark = document.querySelectorAll(".quiz-card__bookmark")
for (let i = 0; i < bookmark.length;i++){
    bookmark[i].addEventListener('click', () => {
     const bookmarkTicked = bookmark[i].classList.toggle(".quiz-card__bookmark")
     
     if (bookmarkTicked) {
        bookmark[i].style.fill = "black"
        console.log("notticked")
     } else {
        bookmark[i].style.fill = "none"
        console.log("ticked")
     }
    
    });
}

const questionData = []

const form = document.querySelector("form")
const darkModeButton = document.querySelector(".dark-mode__button")


form.addEventListener("submit", (event) => {
    event.preventDefault();

const inputQuestion = form["question__text"];
  const inputAnswer = form["answer__text"];
  const inputTags = form["tag__text"];

  const newQuestion = {
    questions: inputQuestion.value,
    answer: inputAnswer.value,
    tags: inputTags.value,
  };

  questionData.push(newQuestion);
  console.log(questionData);
  form.reset();

})

const body = document.querySelector(".root-color")

darkModeButton.addEventListener("click",() => {
body.style.backgroundColor = "black"

}
)



 
 
 
