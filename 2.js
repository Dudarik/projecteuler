// Каждый следующий элемент ряда Фибоначчи получается при 
// сложении двух предыдущих. Начиная с 1 и 2, 
// первые 10 элементов будут:

// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

// Найдите сумму всех четных элементов ряда Фибоначчи, 
// которые не превышают четыре миллиона.

function getEvenFib(n) {
  let a = 1
  let b = 1
  let c = 0
  let resArr = []

  for (let i = 3; c < n; i++) {
    
    c = a + b

    if (c % 2 == 0) resArr.push(c)

    a = b
    b = c
  } 
  return resArr
}

function sumEvenFib(n){
  return getEvenFib(n).reduce((sum, current) => sum + current, 0)      
}

console.log(sumEvenFib(4000000))