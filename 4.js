// Число-палиндром с обеих сторон (справа налево и слева направо) 
// читается одинаково. Самое большое число-палиндром, 
// полученное умножением двух двузначных чисел – 9009 = 91 × 99.

// Найдите самый большой палиндром, 
// полученный умножением двух трехзначных чисел.

function isPalindrom(str) {
  return String(str) === [...String(str)].reverse().join('')
}

function getPalindromNumber(){

  for (let i = 999; i > 99; i--) {
    for (let j = i; j > (i - 100); j--) {      
      
      if (isPalindrom(i * j)) return i * j
            
    }    
  }
  return 0
}

console.log(getPalindromNumber());