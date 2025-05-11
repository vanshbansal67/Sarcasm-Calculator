const resultEl = document.getElementById('display');
const expressionEl = document.getElementById('expression')
const sarcasticDisplayEl = document.getElementById('sarcasm');


let finalResult = '0'
let expressionDisplay = ''
let sarcasmDisplay = ''
let firstOperand = null
let secondOperand = null
let operator = null

const sarcasticResponses = [
    'Tu banega coder re?',
    'Wah beta wah!',
    'Shaabash, calculator bhi thak gaya.',
    'Mathematician ban gaya kya?',
    'Kya hi tezi dikhayi!',
    'Bas karo, ab Nobel milega.',
    'Mummy ko dikhaya ye genius kaam?',
    'Aise questions ke liye bhi calculator?',
    'Kitna dimaag lagaya yaar!',
    "Aunty bolegi: 'IT engineer hai yeh!'",
    'Result de diya, chai pila do ab.',
    'Ye toh mera chhota bhai bhi kar leta.',
    'Arey wah, lagta hai tuition waste nahi gaya.',
    'Kya mast calculation tha re!',
    'Apne dimaag ka bhi use kar le kabhi.',
    'Next sum ke liye pandit bulaoon kya?',
    'Bhai tu toh topper nikla!',
    "Calculator bhi soch raha: 'Yeh kya kar raha hai?'",
    'Arrey maths ke Newton!',
    'Result aaya... party kab de raha?',
    'Einstein, is that you?',
    "Are you training for LKG Math Olympiad or just showing off?", "Congrats! Aapne calculator ka IQ permanently low kar diya."

    , "Aapki calculation dekh ke AI ne resignation de diya.",
    "Aise calculation to calculator ne neend mein bhi solve kar liya hota.",
    "Basic math se calculator ki feelings hurt ho rahi hain.",






];

function calculate() {
    let result;
    switch (operator) {
        case '+':
            result = parseInt(firstOperand) + parseInt(secondOperand)
            break
        case '-':
            result = parseInt(firstOperand) - parseInt(secondOperand)
            break
        case 'x':
            result = parseInt(firstOperand) * parseInt(secondOperand)
            break
        case '/':
            result = parseInt(firstOperand) / parseInt(secondOperand)
            break
        case '%':
            result = parseInt(firstOperand) % parseInt(secondOperand)
            break
        default:
            result = 0
    }
    finalResult = result

    sarcasmDisplay = getRandomSarcasm();
    UpdateDisplay()
    return result
}

function getRandomSarcasm() {
    return sarcasticResponses[Math.floor(Math.random() * sarcasticResponses.length)]
}

function clearDisplay() {
    finalResult = '0'
    expressionDisplay = ''
    sarcasmDisplay = ''
    firstOperand = null
    secondOperand = null
    operator = null
    UpdateDisplay()
}
function setOperator(nextOperator) {
    if (operator) {
        // console.log("entered");

        const result = calculate()
        expressionDisplay = ''
        expressionDisplay += result + nextOperator
        firstOperand = result
        secondOperand = null
    } else {
        expressionDisplay += nextOperator
    }
    operator = nextOperator
    UpdateDisplay()
}
function appendNumber(number) {
    if (!firstOperand) {
        firstOperand = number
    }
    else if (!secondOperand) {
        secondOperand = number
    }
    expressionDisplay = expressionDisplay + number
    UpdateDisplay();
}

function UpdateDisplay() {
    resultEl.textContent = finalResult;
    expressionEl.textContent = expressionDisplay
    sarcasticDisplayEl.textContent = sarcasmDisplay
}
UpdateDisplay()