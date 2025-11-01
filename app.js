let universal = document.querySelectorAll('*')
universal.forEach(function (elem) {
    elem.style.margin = '0'
    elem.style.padding = '0'
    elem.style.boxSizing = 'border-box'
    elem.style.fontFamily = '"Poppins",serif'

})

let body = document.querySelector('body')
let bodyStyle = body.style
bodyStyle.background = '#eef4fa'
bodyStyle.minHeight = '100vh' 
bodyStyle.width = '100vw'
bodyStyle.overflowX = 'hidden'
bodyStyle.overflowY = 'auto' 
bodyStyle.display = 'flex'
bodyStyle.justifyContent = 'center'
bodyStyle.flexDirection = 'column' 
bodyStyle.alignItems = 'center' 
bodyStyle.paddingBottom = '100px' 



let main = document.createElement('main')
main.style.display = 'flex'
main.style.flexDirection = 'column'
// main.style.gap = '50px'
main.style.width = '100%'
main.style.height = 'auto'
main.style.marginTop = '100px'
main.style.textAlign = 'center'
main.style.alignItems = 'center'
body.prepend(main)

let mainh1 = document.createElement('h1')
mainh1.innerText = 'General Questions'
mainh1.style.fontFamily = '"Great Vibes",cursive'
mainh1.style.textShadow = '0 7px 6px'
mainh1.style.color = '#DDC774'

main.prepend(mainh1)

let question1 = document.createElement('div')
question1.id = 'question1'
question1.className = 'questions'
question1.innerText = 'Who built this website?'

let answer1 = document.createElement('div')
answer1.id = 'answer1'
answer1.className = 'answers'
answer1.innerText = 'This site was fully designed and developed by Ahmed using HTML, CSS, and JavaScript.'

let question2 = document.createElement('div')
question2.className = 'questions'
question2.id = 'question2'
question2.innerText = 'Why did you build this site?'

let answer2 = document.createElement('div')
answer2.className = 'answers'
answer2.id = 'answer2'
answer2.innerText = 'To practice my javascript skills and understanding'

let question3 = document.createElement('div')
question3.className = 'questions'
question3.id = 'question3'
question3.innerText = 'Can I view more of your projects?'

let answer3 = document.createElement('div')
answer3.className = 'answers'
answer3.id = 'answer3'
answer3.innerHTML = 'Of course! You can check on my <a href="https://github.com/AhmedRaza186" target="blank_">Git Hub</a>.'

let question4 = document.createElement('div')
question4.className = 'questions'
question4.id = 'question3'
question4.innerText = 'Can I contact you for collaborations or freelance work?'

let answer4 = document.createElement('div')
answer4.className = 'answers'
answer4.id = 'answer3'
answer4.innerHTML = '100%!U can DM me on <a href="https://www.instagram.com/the_ahmed__raza/" target="blank_">Instagram</a> or <a href="https://www.linkedin.com/in/ahmed-raza-14188b35b/" target="blank_">Linkedin</a>.'

main.appendChild(question1)
main.appendChild(answer1)
main.appendChild(question2)
main.appendChild(answer2)
main.appendChild(question3)
main.appendChild(answer3)
main.appendChild(question4)
main.appendChild(answer4)

document.querySelectorAll('.questions').forEach(function (elem) {
    elem.style.width = '60%'
    elem.style.height = '70px'
    elem.style.background = 'white'
    elem.style.boxShadow = '-1px 5px 7px 0px #0000004f'
    elem.style.marginTop = '50px'
    elem.style.fontSize = '1.3rem'
    elem.style.display = 'flex'
    elem.style.justifyContent = 'space-between'
    elem.style.alignItems = 'center'
    elem.style.padding = '0 15px'
    elem.style.letterSpacing = '1px'
    elem.style.cursor = 'pointer'
    elem.style.position = 'relative'
elem.style.zIndex = '2'
    elem.setAttribute('onclick', 'openAns(this)')



    let plus = document.createElement('div')
    plus.innerText = '+'
    plus.style.color = '#DDC774'
    plus.style.fontSize = '1.8rem'
    plus.style.transition = 'transform .6s ease-in-out'

    elem.appendChild(plus)

})
document.querySelectorAll('.answers').forEach(function (elem) {
    elem.style.width = '60%'
    elem.style.maxHeight = '0'
    elem.style.overflowX = 'hidden'
    elem.style.background = 'white'
    elem.style.boxShadow = '0 4px 10px #0000002e'
    elem.style.fontSize = '1.3rem'
    elem.style.padding = '10px 15px'
    elem.style.letterSpacing = '1px'
    elem.style.borderRadius = '10px'
    elem.style.color = '#000000ff'
    elem.style.opacity = '0'
    elem.style.transition = 'all .5s ease'
    elem.style.transform = 'translateY(-20px)'
    elem.style.position = 'relative'
elem.style.zIndex = '1'

})




function openAns(question) {
    question.lastElementChild.style.transform = 'rotate(45deg)'
    question.setAttribute('onclick', 'closeAns(this)')
    let answer = question.nextElementSibling
    answer.style.maxHeight = '300px'
    answer.style.opacity = '1'
    answer.style.transform = 'translateY(0)'
}

function closeAns(question) {
    question.lastElementChild.style.transform = 'rotate(0deg)'
    let answer = question.nextElementSibling
    answer.style.maxHeight = '0'
    answer.style.opacity = '0'
    answer.style.transform = 'translateY(-20px)'
    question.setAttribute('onclick', 'openAns(this)')
}

function makeResponsive() {
  let width = window.innerWidth
  let questionElems = document.querySelectorAll('.questions, .answers')

  questionElems.forEach(elem => {
    if (width <= 600) {
      elem.style.width = '90%'
      elem.style.fontSize = '.9rem'
      elem.overflowX = 'hidden'
    //   elem.style.padding = '10px'
    } else if (width <= 900) {
      elem.style.width = '80%'
      elem.style.fontSize = '1.1rem'
    } else {
      elem.style.width = '60%'
      elem.style.fontSize = '1.3rem'
    }
  })
}

window.addEventListener('resize', makeResponsive)
makeResponsive()
