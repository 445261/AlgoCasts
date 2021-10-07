// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// runtime is exponential, use memoization to improve preformance
function fib(n) {
    if (n < 2) return n

    //remember if using memorizer, the fib call will be the memoized fib not og fib
    return fib(n - 1) + fib(n - 2)
}


function memoizer(fn) {
    const cache = {}

    return function(...args) {
        if (cache[args]) return cache[args]

        const result = fn.apply(this, args)
        cache[args] = result

        return result
    }
}

//fib converted to memoized fib, now will always be memoized fib even when being called in og function
fib = memoizer(fib)

module.exports = fib;

console.log(fib(8))



// recursive runtime is exponential
// function fib(n) {
//     if (n < 2) return n

//     return fib(n - 1) + fib(n - 2)
// }




// runtime is linear
// function fib(n) {
//     if (n === 0) return 0
//     if (n === 1) return 1

//     let counter = 2
//     let current
//     let previous = 1
//     let secondPrevious = 0

//     while (counter <= n) {
//         current = previous + secondPrevious

//         secondPrevious = previous
//         previous = current

//         counter++
//     }
//     return current
// }

// runtime is linear
// function fib(n) {
//     const results = [0, 1]

//     for (let i = 2; i <= n; i++) {
//         const a = results[i - 1]
//         const b = results[i - 2]

//         results.push(a+b)
//     }
//     return results[n]
// }