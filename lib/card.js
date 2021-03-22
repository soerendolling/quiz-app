export function createCard(data) {
  const cardArticle = document.createElement('article')
  cardArticle.classList.add('quiz-card')
  cardArticle.classList.add('bookmarkPage')

  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
  svg.classList.add('quiz-card__bookmark')
  svg.setAttribute('viewbox', '0 0 24 24')
  svg.setAttribute('stroke', 'currentColor')
  svg.innerHTML = `  <path
   stroke-linecap="round"
   stroke-linejoin="round"
   stroke-width="2"
   d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
 />`
  cardArticle.append(svg)

  const cardSection = document.createElement('section')
  cardArticle.append(cardSection)

  const cardQuestion = document.createElement('h3')
  cardQuestion.textContent = data.question
  cardSection.append(cardQuestion)

  const cardButton = document.createElement('button')
  cardButton.classList.add('quiz-card__button')
  cardButton.textContent = 'Show the Answer'
  cardArticle.append(cardButton)

  const cardAnswer = document.createElement('div')
  cardAnswer.classList.add('quiz-card__answer')
  cardAnswer.textContent = data.answer
  cardArticle.append(cardAnswer)

  const cardTagSpan = document.createElement('span')
  cardTagSpan.classList.add('quiz-card__taglayout')
  cardArticle.append(cardTagSpan)

  for (let i = 0; i < data.tags.length; i++) {
    const cardTags = document.createElement('span')
    cardTags.classList.add('quiz-card__tag')
    cardTags.textContent = data.tags[i]
    cardTagSpan.append(cardTags)
  }

  return cardArticle
}

console.log(createCard)

/* <article class="quiz-card">
            
<svg
  class="quiz-card__bookmark"
  xmlns="http://www.w3.org/2000/svg"
  viewbox="0 0 24 24"
  stroke="currentColor"
>
  <path
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="2"
    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
  />
</svg>


<section>
  <h3>This is a question</h3>
  <p>ipsum dolor, sit amet consectetur adipisicing elit. Debit</p>
</section>
<button class="quiz-card__button">Show the Answer</button>
<div class="quiz-card__answer">fsdg met consectetur</div>
<span class="quiz-card__taglayout">
  <span class="quiz-card__tag">Tag1</span>
  <span class="quiz-card__tag">Tag2</span>
  <span class="quiz-card__tag">Tag3</span>
  <span class="quiz-card__tag">Tag4</span>
</span>
</article> */
// }
