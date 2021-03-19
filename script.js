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
 
 
 
 
 
 
//     answer[i].style.display = "block"


//  button[i].addEventListener('click', () => {
//     answer[i].style.display = "none"
//  })


// })
// }





// const button = document.querySelector("button");
// const container = document.querySelector(".container");
// // const input = document.querySelector("input");

// button.addEventListener("click", () => {
//   const box = document.createElement("div");
//   box.classList.add("box");
//   container.append(box);
//   box.innerHTML = `<input type="color">`;

//   const input = document.querySelector("input");
//   const color = input.value;

//   box.addEventListener("input", () => {
//     const color = input.value;
//     box.style.background = color;
//     box.reset();
//   });
// });