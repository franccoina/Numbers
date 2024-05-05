//A

const myFirstNum = 21
const mySecondNum = "12"

console.log(myFirstNum)
console.log(mySecondNum)
console.log("")

console.log(myFirstNum + mySecondNum)
console.log("")

console.log(myFirstNum + Number(mySecondNum))
console.log(myFirstNum - mySecondNum)
console.log(myFirstNum / mySecondNum)
console.log(myFirstNum * mySecondNum)
console.log("")

console.log(typeof myFirstNum)
console.log(Number.isInteger(myFirstNum))
console.log("")

document.write(myFirstNum);

//B

const num1 = 211111111111111112
const num2 = 122_221_11_222
const num3 = 21221212121212121

console.log(num1 + num2)
console.log(num1 - num2)
console.log(num1 / num2)
console.log(num1 * num2)
console.log(Number.isFinite(Infinity))
console.log(Number.isFinite(mySecondNum))
console.info(Number.MAX_VALUE)
console.info(Number.MIN_VALUE)

//C

let piNum = Math.PI

console.info(piNum.toString())
console.info(piNum.toString(2))
console.info(piNum.toString(8))
console.info(piNum.toString(16))

console.log(num1.toExponential(2))
console.log("")

//D
const example=5.12

console.log(example.toFixed())
console.log(example.toFixed(1))
console.log(example.toFixed(2))
console.log(example.toFixed(3))
console.log("")

//E

const numeroParaRedondear=3.5


console.log(Math.round(numeroParaRedondear))
console.log(Math.floor(numeroParaRedondear))
console.log(Math.ceil(numeroParaRedondear))
console.log(Math.trunc(numeroParaRedondear))
console.log("")

//F

//(valor maximo)

const randomNum1=Math.floor(Math.random()*100)
document.write(randomNum1)
console.log(randomNum1)
console.log("")

//floor y trunc ((valor maximo - valor minimo + 1) + valor minimo)
//round ((valor maximo - valor minimo) + valor minimo)

const randomNum2=Math.floor(Math.random()*(100-50 + 1)+50)
document.write(randomNum2)
console.log(randomNum2)
console.log("")

//G

const absolute = -50
console.log(Math.abs(absolute))
console.log("")

//H

const power = 4

console.log(4*4*4*4*4)
console.log(Math.pow(power,5))
console.log(Math.sqrt(power))
console.log(Math.cbrt(power))
console.log("")

//I

console.log(Math.sign(absolute))
console.log("")

//J

list=[1,5,3,9,2]


console.log(list.sort())
console.log(list.sort().reverse())
console.log("")

console.log(Math.max(...list))
console.log(Math.max(1,5,3,9,2))

console.log(Math.min(...list))
console.log("")


