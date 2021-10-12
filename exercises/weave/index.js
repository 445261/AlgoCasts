// --- Directions
// 1) Complete the task in weave/queue.js
// 2) Implement the 'weave' function.  Weave
// receives two queues as arguments and combines the
// contents of each into a new, third queue.
// The third queue should contain the *alterating* content
// of the two queues.  The function should handle
// queues of different lengths without inserting
// 'undefined' into the new one.
// *Do not* access the array inside of any queue, only
// use the 'add', 'remove', and 'peek' functions.
// --- Example
//    const queueOne = new Queue();
//    queueOne.add(1);
//    queueOne.add(2);
//    const queueTwo = new Queue();
//    queueTwo.add('Hi');
//    queueTwo.add('There');
//    const q = weave(queueOne, queueTwo);
//    q.remove() // 1
//    q.remove() // 'Hi'
//    q.remove() // 2
//    q.remove() // 'There'

const Queue = require('./queue');

function weave(sourceOne, sourceTwo) {
    const woven = new Queue()

    while (sourceOne.peek() || sourceTwo.peek()) {
        if (sourceOne.peek()) {
            woven.add(sourceOne.remove())
        } 
        
        if (sourceTwo.peek()) {
            woven.add(sourceTwo.remove())
        }
    }
    return woven
}

module.exports = weave;

const s1 = new Queue()
s1.add(1)
s1.add(2)
s1.add(3)
s1.add(4)
s1.add(5)

const s2 = new Queue()
s2.add('a')
s2.add('b')
s2.add('c')

console.log(weave(s1, s2))
