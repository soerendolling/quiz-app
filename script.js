import {data} from "./lib/db.js"
import {createCard} from "./lib/card.js"


const content = document.querySelector(".main-grid__container")

for (let i = 0; i < data.length;i++) {
   const cardArticle = createCard(data[i])
   content.append(cardArticle)

}


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
const article = document.querySelectorAll(".quiz-card")



for (let i = 0; i < bookmark.length;i++){

   if (data[i].isBookmarked) {
      bookmark[i].style.fill = "black"
      
   } else  {
      bookmark[i].style.fill = "none"
   }

    bookmark[i].addEventListener('click', () => {
     const bookmarkTicked = bookmark[i].classList.toggle(".quiz-card__bookmark")
     
    

     console.log(bookmarkTicked)
     console.log(data[i].isBookmarked)

     if (bookmarkTicked)  {
      bookmark[i].style.fill = "none"
        console.log("filled")
     } else  {
      
      bookmark[i].style.fill = "black"
      console.log("notfilled")
     }
    
    });
}




const questionData = []

const form = document.querySelector("form")

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


// function myFunction() {
//    console.log("button-pressed")
//    const element = document.querySelector(".body-grid__main");
//    const footer = document.querySelector(".body-grid__footer")
//    const dmButton = document.querySelector(".dark-mode__button");
//    const tags = document.querySelectorAll(".profile-skill__tag");
//    const loButton = document.querySelector(".logout__button");
//    const header = document.querySelector(".body-grid__header")
//    const text = document.querySelector(".profile-text")
//    const profile = document.querySelector(".picture-section__picture")
//    const name = document.querySelector(".picture-section__name")

//    for (let i = 0; i < tags.length;i++){
//       tags[i].style.backgroundColor = "pink"
//    tags[i].style.color = "white"
//    }

//    header.style.backgroundColor = "darkgrey"
//    element.style.backgroundColor = "black"
//    footer.style.backgroundColor = "darkgrey"
//    dmButton.style.backgroundColor = "pink"
//    dmButton.style.color = "white"
//    loButton.style.backgroundColor = "pink"
//    loButton.style.color = "white"
//    text.style.backgroundColor = "pink"
//    text.style.color = "white"
//    profile.style.backgroundColor = "pink"
//    name.style.backgroundColor = "pink"
//    name.style.color = "white"
// }



 
 
 
