import { getCards } from './lib/db.js'
import { createCard } from './lib/card.js'

const content = document.querySelector('.main-grid__container')

const data = getCards()

for (let i = 0; i < data.length; i++) {
  const cardArticle = createCard(data[i])
  content.append(cardArticle)
}

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
