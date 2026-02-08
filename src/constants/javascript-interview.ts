export const JAVASCRIPT_INTERVIEW ={
    JS_INTERVIEW_QUESTIONS : [
  // Closures
  {
    id: 'closure-1',
    title: 'Closure with setTimeout in Loop',
    difficulty: 'Medium',
    category: 'Closures',
    question: 'What will be the output of this code? This is one of the most famous closure interview questions.',
    code: `// Problem: Classic closure issue
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
// Output: 3, 3, 3 (after 1 second)

// Solution 1: Using let (block scope)
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
// Output: 0, 1, 2

// Solution 2: Using IIFE
for (var i = 0; i < 3; i++) {
  ((j) => {
    setTimeout(() => {
      console.log(j);
    }, 1000);
  })(i);
}
// Output: 0, 1, 2`,
    output: 'Problem outputs: 3, 3, 3 | Solutions output: 0, 1, 2',
    explanation: [
      'var has function scope, so all iterations share the SAME variable i',
      'By the time setTimeout callbacks run, the loop has finished and i = 3',
      'let creates a new binding for each iteration (block scope)',
      'IIFE creates a new scope capturing the current value of i as j'
    ],
    keyPoints: [
      'var is function-scoped, let is block-scoped',
      'setTimeout callbacks are queued and run after the loop completes',
      'Closures capture variables by reference, not by value'
    ],
    timeComplexity: 'O(n) - n iterations',
    spaceComplexity: 'O(n) - n closures created'
  },
  {
    id: 'closure-2',
    title: 'Counter with Closure',
    difficulty: 'Easy',
    category: 'Closures',
    question: 'Create a counter using closures that cannot be accessed directly.',
    code: `function createCounter() {
  let count = 0;  // Private variable
  
  return {
    increment() {
      count++;
      return count;
    },
    decrement() {
      count--;
      return count;
    },
    getCount() {
      return count;
    }
  };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1
console.log(counter.getCount());  // 1
console.log(counter.count);       // undefined (private!)`,
    output: '1, 2, 1, 1, undefined',
    explanation: [
      'count variable is enclosed in createCounter function scope',
      'Returned object methods have access to count via closure',
      'count cannot be accessed directly from outside (data encapsulation)',
      'Each call to createCounter creates a new independent counter'
    ],
    keyPoints: [
      'Closures enable private variables in JavaScript',
      'Functions returned from a function remember their lexical scope',
      'This is the module pattern for data encapsulation'
    ],
    timeComplexity: 'O(1) for all operations',
    spaceComplexity: 'O(1) - constant space for counter'
  },

  // Hoisting
  {
    id: 'hoisting-1',
    title: 'Variable and Function Hoisting',
    difficulty: 'Medium',
    category: 'Hoisting',
    question: 'What will be the output? Understand how hoisting affects var, let, const, and functions.',
    code: `console.log(a);    // undefined (var is hoisted, initialized to undefined)
console.log(b);    // ReferenceError: Cannot access 'b' before initialization
console.log(c);    // ReferenceError: Cannot access 'c' before initialization
console.log(foo);  // [Function: foo] (function declaration hoisted entirely)
console.log(bar);  // undefined (var hoisted, but not the function assignment)

var a = 1;
let b = 2;
const c = 3;

function foo() {
  return "Hello";
}

var bar = function() {
  return "World";
};

// How JavaScript interprets this (conceptually):
// var a = undefined;
// var bar = undefined;
// function foo() { return "Hello"; }
// --- Temporal Dead Zone for let/const ---
// console.log(a);  // undefined
// a = 1;
// let b = 2;
// const c = 3;
// bar = function() {...}`,
    output: 'undefined, ReferenceError, ReferenceError, [Function], undefined',
    explanation: [
      'var declarations are hoisted and initialized to undefined',
      'let/const are hoisted but NOT initialized (Temporal Dead Zone)',
      'Function declarations are fully hoisted with their body',
      'Function expressions (var bar = function) only hoist the var declaration'
    ],
    keyPoints: [
      'TDZ (Temporal Dead Zone) exists from block start until let/const declaration',
      'Always declare variables at the top of their scope',
      'Prefer const > let > var for predictable behavior'
    ],
    timeComplexity: 'N/A - compile-time behavior',
    spaceComplexity: 'N/A'
  },

  // this keyword
  {
    id: 'this-1',
    title: 'Understanding "this" Keyword',
    difficulty: 'Hard',
    category: 'this Keyword',
    question: 'What will be the output in each scenario? Master the "this" binding rules.',
    code: `const obj = {
  name: "Alice",
  
  // Regular function - 'this' depends on how it's called
  greet() {
    console.log("Hello, " + this.name);
  },
  
  // Arrow function - 'this' is lexically inherited
  greetArrow: () => {
    console.log("Hello, " + this.name);
  },
  
  // Nested function problem & solution
  delayedGreet() {
    // Problem: regular function loses 'this'
    setTimeout(function() {
      console.log("Delayed: " + this.name); // undefined
    }, 100);
    
    // Solution 1: Arrow function
    setTimeout(() => {
      console.log("Arrow: " + this.name); // "Alice"
    }, 100);
    
    // Solution 2: bind
    setTimeout(function() {
      console.log("Bind: " + this.name); // "Alice"
    }.bind(this), 100);
  }
};

obj.greet();           // "Hello, Alice"
obj.greetArrow();      // "Hello, undefined" (arrow uses global this)

const greet = obj.greet;
greet();               // "Hello, undefined" (lost context)
greet.call(obj);       // "Hello, Alice" (explicit binding)
greet.apply(obj);      // "Hello, Alice" (explicit binding)
greet.bind(obj)();     // "Hello, Alice" (hard binding)`,
    output: 'See comments in code for each scenario',
    explanation: [
      'Method call (obj.greet()): this = obj',
      'Arrow functions: this is inherited from enclosing scope',
      'Standalone function call: this = undefined (strict) or window (non-strict)',
      'call/apply/bind: explicitly set this value'
    ],
    keyPoints: [
      'Arrow functions do NOT have their own this',
      'call(thisArg, arg1, arg2) vs apply(thisArg, [args]) vs bind(thisArg)',
      'bind returns a new function, call/apply invoke immediately'
    ],
    timeComplexity: 'N/A',
    spaceComplexity: 'O(1)'
  },

  // Promises
  {
    id: 'promise-1',
    title: 'Promise Execution Order',
    difficulty: 'Hard',
    category: 'Promises & Async',
    question: 'What is the output order? Understand the event loop and microtasks.',
    code: `console.log("1");

setTimeout(() => console.log("2"), 0);

Promise.resolve().then(() => console.log("3"));

Promise.resolve()
  .then(() => {
    console.log("4");
    return Promise.resolve();
  })
  .then(() => console.log("5"));

console.log("6");

// Output: 1, 6, 3, 4, 5, 2

/* Execution explanation:
 * 1. Sync: console.log("1") → outputs "1"
 * 2. setTimeout callback → queued to MACRO task queue
 * 3. Promise.then → queued to MICRO task queue
 * 4. Promise.then chain → queued to MICRO task queue
 * 5. Sync: console.log("6") → outputs "6"
 * 6. Call stack empty, check MICRO queue first
 *    - Outputs "3", then "4", then "5"
 * 7. MICRO queue empty, check MACRO queue
 *    - Outputs "2"
 */`,
    output: '1, 6, 3, 4, 5, 2',
    explanation: [
      'Synchronous code runs first: logs 1, then 6',
      'Microtasks (Promises) run before Macrotasks (setTimeout)',
      'Promise.then callbacks are added to the microtask queue',
      'setTimeout callback goes to the macrotask queue',
      'Event loop: Run sync → Clear microtasks → Run one macrotask → Repeat'
    ],
    keyPoints: [
      'Microtasks: Promise.then, queueMicrotask, MutationObserver',
      'Macrotasks: setTimeout, setInterval, setImmediate, I/O',
      'Microtask queue is emptied completely before each macrotask'
    ],
    timeComplexity: 'O(1) for each operation',
    spaceComplexity: 'O(n) for queued callbacks'
  },
  {
    id: 'promise-2',
    title: 'Promise.all vs Promise.allSettled vs Promise.race',
    difficulty: 'Medium',
    category: 'Promises & Async',
    question: 'When to use each Promise method? Understand the differences.',
    code: `const p1 = Promise.resolve(1);
const p2 = Promise.reject("Error!");
const p3 = new Promise(res => setTimeout(() => res(3), 1000));

// Promise.all - Fails fast if ANY promise rejects
Promise.all([p1, p2, p3])
  .then(results => console.log("all:", results))
  .catch(err => console.log("all error:", err));
// Output: "all error: Error!"

// Promise.allSettled - Waits for ALL, never rejects
Promise.allSettled([p1, p2, p3])
  .then(results => console.log("allSettled:", results));
// Output: [
//   { status: "fulfilled", value: 1 },
//   { status: "rejected", reason: "Error!" },
//   { status: "fulfilled", value: 3 }
// ]

// Promise.race - First to settle wins (resolve OR reject)
Promise.race([p1, p2, p3])
  .then(result => console.log("race:", result))
  .catch(err => console.log("race error:", err));
// Output: "race: 1" (p1 resolves first)

// Promise.any - First to RESOLVE wins (ignores rejections)
Promise.any([p2, p3, Promise.resolve(2)])
  .then(result => console.log("any:", result));
// Output: "any: 2"`,
    output: 'See comments for each method output',
    explanation: [
      'Promise.all: Returns array of results OR rejects on first rejection',
      'Promise.allSettled: Always resolves with array of {status, value/reason}',
      'Promise.race: Returns first settled promise (resolve or reject)',
      'Promise.any: Returns first fulfilled, only rejects if ALL reject'
    ],
    keyPoints: [
      'Use .all when all promises must succeed',
      'Use .allSettled when you need results regardless of success/failure',
      'Use .race for timeouts or first-response-wins scenarios',
      'Use .any when you need at least one success'
    ],
    timeComplexity: 'O(n) where n is number of promises',
    spaceComplexity: 'O(n) to store results'
  },

  // Event Loop
  {
    id: 'eventloop-1',
    title: 'Async/Await Execution Order',
    difficulty: 'Hard',
    category: 'Event Loop',
    question: 'What is the output order with async/await?',
    code: `async function async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 end");
}

async function async2() {
  console.log("async2");
}

console.log("script start");

setTimeout(() => console.log("setTimeout"), 0);

async1();

new Promise((resolve) => {
  console.log("promise1");
  resolve();
}).then(() => {
  console.log("promise2");
});

console.log("script end");

/* Output:
 * script start
 * async1 start
 * async2
 * promise1
 * script end
 * async1 end
 * promise2
 * setTimeout
 */`,
    output: 'script start → async1 start → async2 → promise1 → script end → async1 end → promise2 → setTimeout',
    explanation: [
      '"script start" - synchronous',
      'async1() called: logs "async1 start", then calls async2()',
      'async2() logs "async2" synchronously, returns resolved promise',
      'await pauses async1, rest goes to microtask queue',
      'Promise executor runs sync: logs "promise1"',
      '.then callback goes to microtask queue',
      '"script end" - synchronous',
      'Microtasks run: "async1 end", then "promise2"',
      'Macrotask runs: "setTimeout"'
    ],
    keyPoints: [
      'await pauses the async function, not the entire program',
      'Code after await is like a .then() callback (microtask)',
      'Promise executor function runs synchronously',
      'async functions always return a Promise'
    ],
    timeComplexity: 'O(1)',
    spaceComplexity: 'O(1)'
  },

  // Prototypes
  {
    id: 'prototype-1',
    title: 'Prototype Chain and Inheritance',
    difficulty: 'Medium',
    category: 'Prototypes',
    question: 'Understand how prototype inheritance works in JavaScript.',
    code: `function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function() {
  console.log(this.name + " makes a sound");
};

function Dog(name, breed) {
  Animal.call(this, name); // Call parent constructor
  this.breed = breed;
}

// Set up prototype chain
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.speak = function() {
  console.log(this.name + " barks");
};

const dog = new Dog("Rex", "German Shepherd");

console.log(dog.name);           // "Rex"
console.log(dog.breed);          // "German Shepherd"
dog.speak();                     // "Rex barks"

console.log(dog instanceof Dog);    // true
console.log(dog instanceof Animal); // true

// Prototype chain:
// dog → Dog.prototype → Animal.prototype → Object.prototype → null

// Modern ES6 class syntax (syntactic sugar):
class Cat extends Animal {
  constructor(name, color) {
    super(name);
    this.color = color;
  }
  speak() {
    console.log(\`\${this.name} meows\`);
  }
}`,
    output: 'Rex, German Shepherd, Rex barks, true, true',
    explanation: [
      'Animal.call(this, name) borrows parent constructor',
      'Object.create(Animal.prototype) creates new object with Animal as prototype',
      'We reset constructor reference after overwriting prototype',
      'ES6 classes are syntactic sugar over prototype-based inheritance'
    ],
    keyPoints: [
      '__proto__ is the actual prototype link, prototype is on constructor functions',
      'Object.create() creates object with specified prototype',
      'instanceof checks the entire prototype chain',
      'hasOwnProperty() checks only the object itself, not prototype'
    ],
    timeComplexity: 'O(1) for property access, O(n) for chain lookup',
    spaceComplexity: 'O(1) per instance'
  },

  // Debounce and Throttle
  {
    id: 'debounce-1',
    title: 'Implement Debounce Function',
    difficulty: 'Medium',
    category: 'Utility Functions',
    question: 'Implement a debounce function from scratch.',
    code: `function debounce(func, delay) {
  let timeoutId;
  
  return function(...args) {
    // Clear previous timer
    clearTimeout(timeoutId);
    
    // Set new timer
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

// Usage: Search input that waits for user to stop typing
const searchInput = document.getElementById('search');
const handleSearch = debounce((e) => {
  console.log('Searching for:', e.target.value);
  // API call here
}, 300);

searchInput.addEventListener('input', handleSearch);

/* How it works:
 * User types: "h" → timer starts (300ms)
 * User types: "he" → previous timer cleared, new timer starts
 * User types: "hel" → previous timer cleared, new timer starts
 * User types: "hell" → previous timer cleared, new timer starts
 * User types: "hello" → previous timer cleared, new timer starts
 * User stops typing → 300ms later, function executes ONCE with "hello"
 */`,
    output: 'Function executes once after user stops typing for 300ms',
    explanation: [
      'Debounce delays function execution until after a pause in calls',
      'Each new call resets the timer, canceling the previous one',
      'func.apply(this, args) preserves context and passes all arguments',
      'Useful for: search inputs, resize handlers, save drafts'
    ],
    keyPoints: [
      'Debounce: Execute after X ms of no calls (waits for silence)',
      'clearTimeout prevents multiple executions',
      'Arrow function in setTimeout would lose "this" context'
    ],
    timeComplexity: 'O(1) per call',
    spaceComplexity: 'O(1) - one timer reference'
  },
  {
    id: 'throttle-1',
    title: 'Implement Throttle Function',
    difficulty: 'Medium',
    category: 'Utility Functions',
    question: 'Implement a throttle function from scratch.',
    code: `function throttle(func, limit) {
  let inThrottle = false;
  
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
}

// Alternative: Throttle with trailing call
function throttleWithTrailing(func, limit) {
  let lastCall = 0;
  let lastArgs = null;
  let timeoutId = null;
  
  return function(...args) {
    const now = Date.now();
    
    if (now - lastCall >= limit) {
      func.apply(this, args);
      lastCall = now;
    } else {
      lastArgs = args;
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(this, lastArgs);
        lastCall = Date.now();
      }, limit - (now - lastCall));
    }
  };
}

// Usage: Scroll handler that fires at most once per 100ms
window.addEventListener('scroll', throttle(() => {
  console.log('Scroll position:', window.scrollY);
}, 100));

/* Debounce vs Throttle:
 * Debounce: Wait until calls stop, then execute once
 * Throttle: Execute at most once per time period
 * 
 * Use Debounce: Search input, window resize end, auto-save
 * Use Throttle: Scroll position, mouse move, API rate limiting
 */`,
    output: 'Function executes at most once every 100ms during scrolling',
    explanation: [
      'Throttle limits function execution to once per time period',
      'First call executes immediately, subsequent calls are blocked',
      'After limit expires, next call will execute',
      'Useful for: scroll events, mousemove, rate limiting'
    ],
    keyPoints: [
      'Throttle: Execute at most once per X ms (consistent intervals)',
      'inThrottle flag prevents execution during cooldown period',
      'Throttle guarantees regular execution during continuous events'
    ],
    timeComplexity: 'O(1) per call',
    spaceComplexity: 'O(1)'
  },

  // Array Methods
  {
    id: 'array-1',
    title: 'Array Methods: map, filter, reduce',
    difficulty: 'Easy',
    category: 'Array Methods',
    question: 'Implement and understand core array methods.',
    code: `const numbers = [1, 2, 3, 4, 5];

// MAP: Transform each element
const doubled = numbers.map(n => n * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// Custom map implementation
Array.prototype.myMap = function(callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
};

// FILTER: Keep elements that pass test
const evens = numbers.filter(n => n % 2 === 0);
console.log(evens); // [2, 4]

// Custom filter implementation
Array.prototype.myFilter = function(callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};

// REDUCE: Accumulate to single value
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 15

// Custom reduce implementation
Array.prototype.myReduce = function(callback, initialValue) {
  let acc = initialValue !== undefined ? initialValue : this[0];
  const startIdx = initialValue !== undefined ? 0 : 1;
  
  for (let i = startIdx; i < this.length; i++) {
    acc = callback(acc, this[i], i, this);
  }
  return acc;
};

// Chaining example
const result = numbers
  .filter(n => n > 2)      // [3, 4, 5]
  .map(n => n * 2)         // [6, 8, 10]
  .reduce((a, b) => a + b); // 24
console.log(result); // 24`,
    output: '[2,4,6,8,10], [2,4], 15, 24',
    explanation: [
      'map: Creates new array with transformed elements (1:1 mapping)',
      'filter: Creates new array with elements passing the test',
      'reduce: Reduces array to single value using accumulator',
      'All methods are immutable - they return new arrays'
    ],
    keyPoints: [
      'map always returns same length array',
      'filter returns same or smaller array',
      'reduce can return any type (number, object, array, etc.)',
      'These methods do not mutate the original array'
    ],
    timeComplexity: 'O(n) for each method',
    spaceComplexity: 'O(n) for map/filter, O(1) for reduce'
  },

  // Deep Clone
  {
    id: 'clone-1',
    title: 'Deep Clone vs Shallow Clone',
    difficulty: 'Medium',
    category: 'Object Operations',
    question: 'Understand and implement deep cloning in JavaScript.',
    code: `const original = {
  name: "John",
  address: { city: "NYC", zip: "10001" },
  hobbies: ["reading", "coding"]
};

// SHALLOW CLONE - nested objects are still referenced
const shallow1 = { ...original };
const shallow2 = Object.assign({}, original);

shallow1.address.city = "LA";
console.log(original.address.city); // "LA" - MUTATED!

// DEEP CLONE - completely independent copy

// Method 1: JSON (simple but has limitations)
const deep1 = JSON.parse(JSON.stringify(original));
// ⚠️ Loses: functions, undefined, Dates, RegExp, Map, Set, circular refs

// Method 2: structuredClone (modern, recommended)
const deep2 = structuredClone(original);
// ✅ Handles: Dates, RegExp, Map, Set, ArrayBuffer, circular refs
// ⚠️ Cannot clone: functions, DOM nodes, certain objects

// Method 3: Custom recursive function
function deepClone(obj, visited = new WeakMap()) {
  // Handle primitives and null
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }
  
  // Handle circular references
  if (visited.has(obj)) {
    return visited.get(obj);
  }
  
  // Handle Date
  if (obj instanceof Date) {
    return new Date(obj.getTime());
  }
  
  // Handle Array
  if (Array.isArray(obj)) {
    const arrCopy = [];
    visited.set(obj, arrCopy);
    for (const item of obj) {
      arrCopy.push(deepClone(item, visited));
    }
    return arrCopy;
  }
  
  // Handle Object
  const objCopy = {};
  visited.set(obj, objCopy);
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      objCopy[key] = deepClone(obj[key], visited);
    }
  }
  return objCopy;
}`,
    output: 'Deep clone creates independent copy, shallow clone shares nested references',
    explanation: [
      'Spread/Object.assign only copy first level (shallow)',
      'JSON method is simple but loses functions, undefined, special objects',
      'structuredClone is the modern solution for most cases',
      'Custom function needed for full control (functions, symbols, etc.)'
    ],
    keyPoints: [
      'Shallow: new object, same nested references',
      'Deep: completely new object tree',
      'WeakMap in custom function handles circular references',
      'structuredClone is available in modern browsers and Node.js 17+'
    ],
    timeComplexity: 'O(n) where n is total number of properties',
    spaceComplexity: 'O(n) for the cloned structure'
  },

  // Call, Apply, Bind
  {
    id: 'call-apply-bind',
    title: 'Implement call, apply, and bind',
    difficulty: 'Hard',
    category: 'Function Methods',
    question: 'Implement call, apply, and bind from scratch.',
    code: `// Custom call implementation
Function.prototype.myCall = function(context, ...args) {
  context = context || globalThis;
  
  // Create unique property to avoid overwriting
  const fnSymbol = Symbol('fn');
  context[fnSymbol] = this;
  
  // Call function with context
  const result = context[fnSymbol](...args);
  
  // Clean up
  delete context[fnSymbol];
  
  return result;
};

// Custom apply implementation
Function.prototype.myApply = function(context, argsArray = []) {
  context = context || globalThis;
  const fnSymbol = Symbol('fn');
  context[fnSymbol] = this;
  
  const result = context[fnSymbol](...argsArray);
  
  delete context[fnSymbol];
  return result;
};

// Custom bind implementation
Function.prototype.myBind = function(context, ...boundArgs) {
  const fn = this;
  
  return function(...args) {
    // Handle 'new' operator
    if (new.target) {
      return new fn(...boundArgs, ...args);
    }
    return fn.apply(context, [...boundArgs, ...args]);
  };
};

// Usage examples
function greet(greeting, punctuation) {
  return \`\${greeting}, \${this.name}\${punctuation}\`;
}

const person = { name: "Alice" };

console.log(greet.myCall(person, "Hello", "!"));    // "Hello, Alice!"
console.log(greet.myApply(person, ["Hi", "?"]));    // "Hi, Alice?"

const boundGreet = greet.myBind(person, "Hey");
console.log(boundGreet("!"));                        // "Hey, Alice!"`,
    output: 'Hello, Alice!, Hi, Alice?, Hey, Alice!',
    explanation: [
      'call: Invokes function with given context and individual arguments',
      'apply: Same as call but takes arguments as array',
      'bind: Returns new function with bound context and optional partial args',
      'Symbol ensures we do not overwrite existing properties'
    ],
    keyPoints: [
      'Attach function as property of context object, then call it',
      'Symbol() creates unique key to avoid collisions',
      'bind returns function, call/apply execute immediately',
      'bind with partial application is called currying'
    ],
    timeComplexity: 'O(1)',
    spaceComplexity: 'O(n) for bound arguments in bind'
  },

  // Currying
  {
    id: 'currying-1',
    title: 'Function Currying',
    difficulty: 'Medium',
    category: 'Functional Programming',
    question: 'What is currying and how to implement it?',
    code: `// Currying transforms f(a, b, c) into f(a)(b)(c)

// Basic curry example
function multiply(a) {
  return function(b) {
    return function(c) {
      return a * b * c;
    };
  };
}
console.log(multiply(2)(3)(4)); // 24

// Arrow function version
const multiplyArrow = a => b => c => a * b * c;

// Generic curry function
function curry(fn) {
  return function curried(...args) {
    // If we have enough arguments, call the function
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }
    // Otherwise, return a function that collects more args
    return function(...moreArgs) {
      return curried.apply(this, [...args, ...moreArgs]);
    };
  };
}

// Usage
function add(a, b, c) {
  return a + b + c;
}

const curriedAdd = curry(add);

console.log(curriedAdd(1)(2)(3));     // 6
console.log(curriedAdd(1, 2)(3));     // 6
console.log(curriedAdd(1)(2, 3));     // 6
console.log(curriedAdd(1, 2, 3));     // 6

// Practical example: Creating reusable functions
const log = curry((level, date, message) => {
  console.log(\`[\${level}] \${date}: \${message}\`);
});

const errorLog = log("ERROR");
const todayErrorLog = errorLog(new Date().toISOString().split('T')[0]);

todayErrorLog("Something went wrong!");
// [ERROR] 2024-01-15: Something went wrong!`,
    output: '24, 6 (all variations), [ERROR] date: message',
    explanation: [
      'Currying breaks multi-argument function into series of single-argument functions',
      'fn.length gives the number of expected parameters',
      'Curried function collects arguments until it has enough to execute',
      'Enables partial application and function composition'
    ],
    keyPoints: [
      'Currying is about transforming function signature, not calling it',
      'Partial application: fixing some arguments to create specialized function',
      'Useful for creating reusable function pipelines',
      'Common in functional programming and libraries like Ramda, Lodash'
    ],
    timeComplexity: 'O(1) per call',
    spaceComplexity: 'O(n) for stored arguments'
  },

  // Memoization
  {
    id: 'memoization-1',
    title: 'Function Memoization',
    difficulty: 'Medium',
    category: 'Performance',
    question: 'Implement memoization for expensive function calls.',
    code: `// Basic memoization
function memoize(fn) {
  const cache = new Map();
  
  return function(...args) {
    const key = JSON.stringify(args);
    
    if (cache.has(key)) {
      console.log('Cache hit for:', key);
      return cache.get(key);
    }
    
    console.log('Computing for:', key);
    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
}

// Example: Expensive fibonacci
function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}

const memoFib = memoize(function(n) {
  if (n <= 1) return n;
  return memoFib(n - 1) + memoFib(n - 2);
});

console.log(memoFib(40)); // Fast!
console.log(memoFib(40)); // Instant - cached

// Advanced: Memoization with expiry
function memoizeWithExpiry(fn, ttl = 5000) {
  const cache = new Map();
  
  return function(...args) {
    const key = JSON.stringify(args);
    const cached = cache.get(key);
    
    if (cached && Date.now() - cached.timestamp < ttl) {
      return cached.value;
    }
    
    const result = fn.apply(this, args);
    cache.set(key, { value: result, timestamp: Date.now() });
    return result;
  };
}

// Advanced: LRU Cache memoization
function memoizeLRU(fn, maxSize = 100) {
  const cache = new Map();
  
  return function(...args) {
    const key = JSON.stringify(args);
    
    if (cache.has(key)) {
      const value = cache.get(key);
      cache.delete(key);
      cache.set(key, value); // Move to end (most recent)
      return value;
    }
    
    const result = fn.apply(this, args);
    cache.set(key, result);
    
    if (cache.size > maxSize) {
      const firstKey = cache.keys().next().value;
      cache.delete(firstKey); // Remove oldest
    }
    
    return result;
  };
}`,
    output: 'First call computes, subsequent calls return cached result',
    explanation: [
      'Memoization caches function results based on arguments',
      'JSON.stringify creates cache key from arguments',
      'Map preserves insertion order (useful for LRU)',
      'Trade memory for speed - space/time tradeoff'
    ],
    keyPoints: [
      'Only pure functions should be memoized (same input = same output)',
      'JSON.stringify fails for circular references and functions in args',
      'Consider cache invalidation and memory limits',
      'WeakMap can be used if keys are objects (auto garbage collection)'
    ],
    timeComplexity: 'O(1) for cached calls, original complexity for first call',
    spaceComplexity: 'O(n) where n is number of unique argument sets'
  },

  // Equality
  {
    id: 'equality-1',
    title: '== vs === and Object.is()',
    difficulty: 'Easy',
    category: 'Type Coercion',
    question: 'Understand the differences between equality operators.',
    code: `// == (Loose Equality) - performs type coercion
console.log(1 == "1");        // true (string → number)
console.log(true == 1);       // true (boolean → number)
console.log(null == undefined); // true (special case)
console.log("" == 0);         // true (empty string → 0)
console.log([] == false);     // true ([] → "" → 0, false → 0)
console.log([] == ![]);       // true (both become 0)

// === (Strict Equality) - no type coercion
console.log(1 === "1");       // false
console.log(true === 1);      // false
console.log(null === undefined); // false
console.log(NaN === NaN);     // false (NaN is not equal to itself!)

// Object.is() - like === but handles edge cases
console.log(Object.is(NaN, NaN));   // true ✓
console.log(Object.is(-0, +0));     // false ✓
console.log(-0 === +0);             // true (=== fails here)

// Object comparison - by reference, not value
const obj1 = { a: 1 };
const obj2 = { a: 1 };
const obj3 = obj1;

console.log(obj1 === obj2);   // false (different references)
console.log(obj1 === obj3);   // true (same reference)

// Deep equality check
function deepEqual(a, b) {
  if (a === b) return true;
  
  if (typeof a !== 'object' || typeof b !== 'object' ||
      a === null || b === null) {
    return false;
  }
  
  const keysA = Object.keys(a);
  const keysB = Object.keys(b);
  
  if (keysA.length !== keysB.length) return false;
  
  for (const key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) {
      return false;
    }
  }
  
  return true;
}

console.log(deepEqual(obj1, obj2)); // true`,
    output: 'See comments for each comparison result',
    explanation: [
      '== coerces types before comparison (usually avoid)',
      '=== compares type AND value without coercion (prefer this)',
      'Object.is() is most precise, handles NaN and -0 correctly',
      'Objects are compared by reference, not by their contents'
    ],
    keyPoints: [
      'Always use === unless you specifically need type coercion',
      'NaN === NaN is false, use Object.is(NaN, NaN) or Number.isNaN()',
      'null == undefined is true, but null === undefined is false',
      'For object comparison, use deep equality or JSON.stringify'
    ],
    timeComplexity: 'O(1) for primitive comparison, O(n) for deep equality',
    spaceComplexity: 'O(d) for deep equality where d is nesting depth'
  },

  // Spread and Rest
  {
    id: 'spread-rest-1',
    title: 'Spread vs Rest Operator',
    difficulty: 'Easy',
    category: 'ES6+ Features',
    question: 'Understand the difference between spread and rest operators.',
    code: `// SPREAD: Expands elements (used in function calls, arrays, objects)

// 1. Array spread
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];  // [1, 2, 3, 4, 5]
const arrCopy = [...arr1];     // Shallow copy

// 2. Object spread
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };     // { a: 1, b: 2, c: 3 }
const obj3 = { ...obj1, a: 99 };    // { a: 99, b: 2 } - later wins

// 3. Function call spread
const nums = [1, 2, 3];
console.log(Math.max(...nums));     // 3

// REST: Collects elements (used in function params, destructuring)

// 1. Function parameters
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4, 5));    // 15

// 2. Array destructuring
const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first);   // 1
console.log(second);  // 2
console.log(rest);    // [3, 4, 5]

// 3. Object destructuring
const { a, ...others } = { a: 1, b: 2, c: 3 };
console.log(a);       // 1
console.log(others);  // { b: 2, c: 3 }

// Common patterns
// Remove property from object
const { password, ...userWithoutPassword } = user;

// Merge with override
const defaults = { theme: 'dark', lang: 'en' };
const userPrefs = { lang: 'fr' };
const settings = { ...defaults, ...userPrefs };
// { theme: 'dark', lang: 'fr' }

// Clone and modify
const newState = { ...state, loading: true };`,
    output: 'See comments for each operation result',
    explanation: [
      'Spread (...) EXPANDS an iterable into individual elements',
      'Rest (...) COLLECTS multiple elements into an array/object',
      'Both use ... syntax but in different positions',
      'Spread is used in expressions, Rest is used in patterns/params'
    ],
    keyPoints: [
      'Spread creates shallow copies, not deep copies',
      'Rest must be the last element in destructuring',
      'Object spread copies own enumerable properties',
      'Order matters: later properties override earlier ones'
    ],
    timeComplexity: 'O(n) where n is number of elements',
    spaceComplexity: 'O(n) for creating new array/object'
  },

  // Nullish Coalescing
  {
    id: 'nullish-1',
    title: 'Nullish Coalescing vs OR Operator',
    difficulty: 'Easy',
    category: 'ES6+ Features',
    question: 'When to use ?? vs || for default values?',
    code: `// || (OR) - returns first truthy value
// Problem: treats 0, '', false as "missing" values

const count = 0;
const message = '';
const isActive = false;

console.log(count || 10);     // 10 (0 is falsy - WRONG!)
console.log(message || 'Hi'); // 'Hi' ('' is falsy - WRONG!)
console.log(isActive || true); // true (false is falsy - WRONG!)

// ?? (Nullish Coalescing) - only null/undefined trigger fallback
// Introduced in ES2020

console.log(count ?? 10);     // 0 ✓ (0 is not null/undefined)
console.log(message ?? 'Hi'); // '' ✓ ('' is not null/undefined)
console.log(isActive ?? true); // false ✓ (false is not null/undefined)

// null and undefined DO trigger fallback
console.log(null ?? 'default');      // 'default'
console.log(undefined ?? 'default'); // 'default'

// Optional Chaining with Nullish Coalescing
const user = {
  name: 'Alice',
  settings: null
};

// Safe property access with fallback
const theme = user.settings?.theme ?? 'dark';
console.log(theme); // 'dark'

// Common pattern: API responses
function getUser(data) {
  return {
    name: data?.name ?? 'Anonymous',
    age: data?.age ?? 0,
    isVerified: data?.isVerified ?? false
  };
}

// Short-circuit evaluation
let value = null;
value ??= 'default'; // Same as: value = value ?? 'default'
console.log(value);  // 'default'

// Cannot mix ?? with && or || without parentheses
// null || undefined ?? 'never' // SyntaxError!
(null || undefined) ?? 'never'; // OK: 'never'`,
    output: 'See comments for comparison between || and ??',
    explanation: [
      '|| returns first truthy value (falsy: 0, "", false, null, undefined, NaN)',
      '?? only considers null and undefined as "missing"',
      'Use ?? when 0, empty string, or false are valid values',
      '??= is the nullish assignment operator'
    ],
    keyPoints: [
      'Use || for boolean coercion needs',
      'Use ?? for default values when 0/""/false are valid',
      '?? has lower precedence than most operators',
      'Cannot mix ?? directly with || or && (use parentheses)'
    ],
    timeComplexity: 'O(1)',
    spaceComplexity: 'O(1)'
  },

  // Flatten Array
  {
    id: 'flatten-1',
    title: 'Flatten Nested Array',
    difficulty: 'Medium',
    category: 'Array Operations',
    question: 'Implement array flattening to any depth.',
    code: `// Built-in: Array.flat()
const nested = [1, [2, [3, [4, 5]]]];

console.log(nested.flat());      // [1, 2, [3, [4, 5]]] - depth 1
console.log(nested.flat(2));     // [1, 2, 3, [4, 5]] - depth 2
console.log(nested.flat(Infinity)); // [1, 2, 3, 4, 5] - fully flat

// Custom implementation: Recursive
function flattenRecursive(arr, depth = 1) {
  if (depth < 1) return arr.slice();
  
  return arr.reduce((acc, item) => {
    if (Array.isArray(item)) {
      acc.push(...flattenRecursive(item, depth - 1));
    } else {
      acc.push(item);
    }
    return acc;
  }, []);
}

// Custom implementation: Iterative with stack
function flattenIterative(arr, depth = Infinity) {
  const result = [];
  const stack = arr.map(item => [item, depth]);
  
  while (stack.length) {
    const [item, d] = stack.pop();
    
    if (Array.isArray(item) && d > 0) {
      // Push items in reverse order to maintain original order
      for (let i = item.length - 1; i >= 0; i--) {
        stack.push([item[i], d - 1]);
      }
    } else {
      result.push(item);
    }
  }
  
  return result.reverse();
}

// Using generator function
function* flattenGenerator(arr, depth = Infinity) {
  for (const item of arr) {
    if (Array.isArray(item) && depth > 0) {
      yield* flattenGenerator(item, depth - 1);
    } else {
      yield item;
    }
  }
}

console.log([...flattenGenerator(nested)]); // [1, 2, 3, 4, 5]

// Bonus: flatMap (flat + map in one pass)
const sentences = ["Hello world", "How are you"];
const words = sentences.flatMap(s => s.split(" "));
console.log(words); // ["Hello", "world", "How", "are", "you"]`,
    output: '[1, 2, 3, 4, 5] for fully flattened array',
    explanation: [
      'arr.flat(depth) is the built-in method (ES2019)',
      'Recursive solution is cleaner but may hit stack limit',
      'Iterative solution uses explicit stack, no recursion limit',
      'Generator approach is memory efficient for large arrays'
    ],
    keyPoints: [
      'flat() does not mutate the original array',
      'flat(Infinity) flattens to any depth',
      'flatMap is equivalent to map().flat(1)',
      'Stack-based iteration avoids call stack overflow'
    ],
    timeComplexity: 'O(n) where n is total number of elements',
    spaceComplexity: 'O(n) for the result array + O(d) for recursion depth'
  }
],
 QUESTION_CATEGORIES : [
  'All',
  'Closures',
  'Hoisting',
  'this Keyword',
  'Promises & Async',
  'Event Loop',
  'Prototypes',
  'Utility Functions',
  'Array Methods',
  'Object Operations',
  'Function Methods',
  'Functional Programming',
  'Performance',
  'Type Coercion',
  'ES6+ Features',
  'Array Operations'
]
}