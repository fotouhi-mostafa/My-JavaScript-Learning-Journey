# How JavaScript Works Behind the Scenes

**📝 Tip1: Garbage-collected: JavaScript automatically allocates memory when objects are created and frees it when they are not used anymore (garbage collection).**

**📝 Tip2: Concurrency model: How the JS engine handles multiple tasks happening at the same time**

**📝 Tip3: Single thread: JS runs in one single thread, so it can only do one thing at a time**

**📝 Tip4: JS engine: A program that executes JS codes. JS engine includes two parts, part one is Call Stack and part two is Memory Heap.**

![JavaScript Engine](https://felixgerschau.com/static/79486d91b22a7c1b4044fce88a4cae20/c1b63/js-event-loop-explained.png)

**📝 Tip5: Call Stack: A call stack is a mechanism for an interpreter (like the JavaScript interpreter in a web browser) to keep track of its place in a script that calls multiple functions — what function is currently being run and what functions are called from within that function, etc.**

**📝 Tip6: Memory Heap: It is used to store objects and functions in JavaScript. The engine doesn’t allocate a fixed amount of memory. Instead, it allocates more space as required.**

**📝 Tip7: Compilation: Entire code is converted into mechine code at once, and written to binary file that can be executed by computer**

**📝 Tip8: Interpretation: Interpreter runs through the source code and executes it line by line**

**📝 Tip9: Just-in-Time(JIT) compilation: Entire code is converted into mechine code at once, then executed immediately**

**📝 Tip10: The event loop: JavaScript has a runtime model based on an event loop, which is responsible for executing the code, collecting and processing events, and executing queued sub-tasks.**

**📝 Tip11: Execution Context: Environment in which a piece of JavaScript is executed. Stores all the necessary information for some code to be executed. There are two kinds of Execution Context in JavaScript: Global Execution Context (GEC) - Function Execution Context (FEC)**

**📝 Tip12: Every execution context includes "variable environment", "scope chain" and "this keyword". The variable environment includes "let - const - var decelerations", "functions" and "arguments object". of course, "Arrow Functions" don't include "arguments object" and "this keyword".**

**📝 Tip13: Scoping: How our programs variables are organized and accessed**

**📝 Tip14: Lexical Scope: Scoping is controlled by placement of functions and blocks in the code**

**📝 Tip15: Scope: Space or environment in which a certain variable is declared(variable environment in case of functions). There is global scope, function scope(local scope) and block scope**

**📝 Tip16: Scope of variable: Region of our code where a certain variable can be accessed**

**📝 Tip17: Variables declared in global scope are accessible everywhere**

**📝 Tip18: Functions are also block scoped, only in strict mode**

**📝 Tip19: Variables declared in block scope are accessible only inside block (let - const)**

**📝 Tip20: In "strict mode" the functions are "block scope"**

**📝 Tip21: Hoisting: Makes some types of variables accessible/usable in the code before they are declared.**

| items                 | Hoisted                           | Initial value | Scope                 |
| --------------------- | --------------------------------- | ------------- | --------------------- |
| fn decelarations      | Yes                               | actual fn     | block(in strict mode) |
| var variable          | Yes                               | undefined     | function              |
| let & const variables | No                                | TDZ           | block                 |
| fn expression         | Depends on using var or let/const |

**📝 Tip22: Hoisting(behind the scenes): Before execution, the code scanned for variable declarations, and for each variable, a new property is created in the variable environment object.**

**📝 Tip23: TDZ(Temporal Dead Zone): A temporal dead zone (TDZ) is the area of a block where a variable is inaccessible until the moment the computer completely initializes it with a value.**

![Temporal Dead Zone](https://res.cloudinary.com/practicaldev/image/fetch/s--IX3V7X76--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/sqouc39kfyfzeu0ica7i.png)

**📝 Tip24: Variables defined with let and const do not exist in the window object.**

**📝 Tip25: The "this" keyword refer to its own parent when it is used in the "arrow function".**

**📝 Tip26: In the "strict mode", the "this" keyword refers to "window object" when it is used in "regular function", else it's equal to "undefined".**

**📝 Tip27: For writing "methods" it's better to don't use "arrow functions".**

**📝 Tip28: The "arrow function" does not get its own "this" keyword.**

**📝 Tip29: The primitive types and the reference types**

![Primitive Types & Reference Types](https://miro.medium.com/max/1100/1*6NdX4JHxJEqjEc4C31KLsQ.png)
![Primitive Types & Reference Types](https://miro.medium.com/max/1100/1*RWaSRnWAYdJ1FG2NjkqVew.png)
