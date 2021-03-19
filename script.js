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
        bookmark[i].style.fill = "none"
        console.log("ticked")
        
     } else {
        bookmark[i].style.fill = "black"
        console.log("notticked")
     }
    
    });
}





// const bookmark = document.querySelectorAll('.question-card__bookmark')

// for (let i = 0; i < bookmark.length; i++) {
//   bookmark[i].addEventListener('click', () => {
//     if (bookmark[i].classList.contains('far')) {
//       bookmark[i].classList.remove('far', 'fa-bookmark')
//       bookmark[i].classList.add('fas', 'fa-bookmark')
//     } else {
//       bookmark[i].classList.remove('fas', 'fa-bookmark')
//       bookmark[i].classList.add('far', 'fa-bookmark')
//     }
//   })
// }


 
 
 
