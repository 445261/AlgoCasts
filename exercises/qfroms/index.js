// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
    constructor() {
        this.stackData = new Stack()
        this.stackCache = new Stack()
    }

    add(record) {
        this.stackData.push(record)
    }

    remove() {
        while (this.stackData.peek()) {
            this.stackCache.push(this.stackData.pop())
        }
        
        const record = this.stackCache.pop()
        
        while (this.stackCache.peek()) {
            this.stackData.push(this.stackCache.pop())
        }

        return record
    }

    peek() {
        while (this.stackData.peek()) {
            this.stackCache.push(this.stackData.pop())
        }
        
        const record = this.stackCache.peek()
        
        while (this.stackCache.peek()) {
            this.stackData.push(this.stackCache.pop())
        }

        return record
    }

}

module.exports = Queue;
