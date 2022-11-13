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
