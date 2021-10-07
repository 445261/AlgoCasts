// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,  2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    const results = []

    let counter = 1
    let columnStart = 0
    let columnEnd = n - 1
    let rowStart = 0
    let rowEnd = n - 1

    // create matrix
    for (let i = 0; i < n; i++) {
        results.push([])
    }

    // fill in matrix
    while (columnStart <= columnEnd && rowStart <= rowEnd){
        
        // top row
        for (let i = columnStart; i <= columnEnd; i++) {
            results[rowStart][i] = counter
            counter++
        }
        rowStart++

        // right column
        for (let i = rowStart; i <= rowEnd; i++) {
            results[i][columnEnd] = counter
            counter++
        }
        columnEnd--

        // bottom row
        for (let i = columnEnd; i >= columnStart; i--) {
            results[rowEnd][i] = counter
            counter++
        }
        rowEnd--

        // left column
        for (let i = rowEnd; i >= rowStart; i--) {
            results[i][columnStart] = counter
            counter++
        }
        columnStart++
    }

    // console.log(counter, columnStart, columnEnd, rowStart, rowEnd)
    // console.log(results)
    return results
}

module.exports = matrix;

console.table(matrix(3))