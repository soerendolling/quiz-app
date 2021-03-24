import { pushCards } from './db.js'
import { getCards } from './db.js'

const form = document.querySelector('form')

form.addEventListener('submit', event => {
  event.preventDefault()

  const questionInput = form['question__text']
  const answerInput = form['answer__text']
  const tagInput = form['tag__text']

  const data = getCards()

  const input = {
    id: data.length + 1,
    question: questionInput.value,
    answer: answerInput.value,
    tags: itemsStringToArray(tagInput.value),
  }

  pushCards(input)

  form.reset()
  alert('Section created!')
})

function itemsStringToArray(tagString) {
  const returnArray = tagString.split(',')

  console.log('section done')
  return returnArray
}

// const questionData = []

// const form = document.querySelector('form')

// form.addEventListener('submit', event => {
//   event.preventDefault()

// const inputQuestion = form['question__text']
// const inputAnswer = form['answer__text']
// const inputTags = form['tag__text']

//   const newQuestion = {
//     questions: inputQuestion.value,
//     answer: inputAnswer.value,
//     tags: inputTags.value,
//   }

//   questionData.push(newQuestion)
//   console.log(questionData)
//   form.reset()
// })
