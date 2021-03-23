import { pushCards } from './db.js'

const form = document.querySelector('form')

form.addEventListener('submit', event => {
  event.preventDefault()

  const questionInput = form['question__text'].value
  const answerInput = form['answer__text'].value
  const tagInput = form['tag__text']
  const tagsArray = itemsStringToArray(tagInput.value)

  const input = {
    question: questionInput,
    answer: answerInput,
    tags: tagsArray,
  }

  pushCards(input)

  form.reset()
  alert('Section created!')
})

function itemsStringToArray(tagString) {
  const tagArray = tagString.split(',')

  console.log('section done')
  return tagArray
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
