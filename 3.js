// Простые делители числа 13195 - это 5, 7, 13 и 29.

// Каков самый большой делитель числа 600851475143, 
// являющийся простым числом?

function getPrimes(num){

  const selve = []
  const primes =[]
  const n = Math.sqrt(num)

  for (let i = 2; i <= n; i++) {
    if (!selve[i]){
      primes.push(i)
      for (let j = i * i; j <= n; j += i) {
        selve[j] = true        
      }
    }    
  }
  return primes
}

function getPrimeFactor(n){
  let primesArr = getPrimes(n)
  
  for (let i = primesArr.length; i > 0; i--) {
    if (n % primesArr[i] == 0) return primesArr[i]    
  }
  return 0  
}

console.log(getPrimeFactor(600851475143))