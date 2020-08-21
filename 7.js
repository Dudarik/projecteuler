// Выписав первые шесть простых чисел, получим 2, 3, 5, 7, 11 и 13. 
// Очевидно, что 6-ое простое число - 13.

// Какое число является 10001-ым простым числом?


//Ужасное решение
function getPrimes10001(){
  const selve = []
  const primes =[]
  const n = 110000
  let i = 2

  while (primes.length < 10001){
    if (!selve[i]){
      primes.push(i)
      for (let j = i * i; j <= n; j += i) {
        selve[j] = true        
      }
    } 
    i++
  }  
  return primes[10000]
}

console.log(getPrimes10001())