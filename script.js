const calculatorScreen = document.querySelector(".calculator-screen")
const numbers = document.querySelectorAll(".number")
const operators = document.querySelectorAll(".operator")
const equalSign = document.querySelector(".equal-sign")
const clearBtn = document.querySelector('.all-clear')
const decimal = document.querySelector('.decimal')

let prevNumber=''
let calculationOperator=''
let currentNumber='0'

/* Tampilan Angka */
const updateScreen = (number) => {
calculatorScreen.value = number
}

/* Inputan Angka */
const inputNumber = (number) => {
  if (currentNumber === '0') {
    currentNumber = number
  }else{
    currentNumber += number
  }
}

numbers.forEach((number) =>{
  number.addEventListener('click', (event) => {
    inputNumber(event.target.value)
    updateScreen(currentNumber)
  })
})

/* Input Operator Penjumlahan */
const inputOperator = (operator) => {
  if (calculationOperator === '') {
    prevNumber = currentNumber
  }
  calculationOperator = operator
  currentNumber = '0'
}

operators.forEach((operator) => {
  operator.addEventListener('click', (event)  => {
    inputOperator(event.target.value)
  })
})

/* Hasil Penjumlahan/Button = */
equalSign.addEventListener('click', () => {
  calculate()
  updateScreen(currentNumber)
})

/* Perhitungan kali/bagi/tambah/kurang */
const calculate = () => {
  let result = '';
  switch (calculationOperator){
    case '+':
      result =parseFloat(prevNumber) + parseFloat(currentNumber);
      break;
    case '-':
      result = parseFloat(prevNumber) - parseFloat(currentNumber);
      break;
    case '*':
      result =  parseFloat(prevNumber) * parseFloat(currentNumber);
      break;
    case '/':
      result =  parseFloat(prevNumber) / parseFloat(currentNumber);
      break;
    default:
      break;
  }
  currentNumber = result;
  calculationOperator = '';
};

/* reset angka menjadi 0 */
const clearAll = () => {
  prevNumber = ''
  calculationOperator = ''
  currentNumber = '0'
}

clearBtn.addEventListener('click', () => {
  clearAll()
  updateScreen(currentNumber)
  //console.log('AC button is pressed')
})

/* input koma */
inputDecimal = (dot) => {
  if (currentNumber.includes('.')) {
    return
  }
  currentNumber +=dot
}

decimal.addEventListener('click', (event) => {
  inputDecimal(event.target.value)
  updateScreen(currentNumber)
})