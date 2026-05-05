<p align="center">
  <img src="./assets/banner.png" alt="holbertonschool-web-back-end Banner">
</p>

# holbertonschool-web_back_end

> Python on the server side — async, typed, and ready to handle whatever you throw at it. 🐍

---

## 📄 Description

This repository contains my back-end development projects completed as part of the Holberton School curriculum. It focuses on Python's advanced features for building efficient, readable, and production-quality server-side code, as well as modern JavaScript through the ES6 standard. The Python projects explore type annotations, asynchronous programming with `asyncio`, and the elegant combination of async generators with async comprehensions. The JavaScript projects cover ES6 syntax and class-based object-oriented programming, data manipulation with arrays and modern data structures, and asynchronous programming through Promises and `async/await`. Together, they form a cohesive arc: from making code self-documenting and type-safe, to understanding how to run tasks concurrently, to producing and consuming asynchronous data streams in a clean and Pythonic way — and on the JS side, from mastering modern syntax to building well-structured, inheritance-ready class hierarchies, manipulating data efficiently with ES6 methods, and handling asynchronous operations elegantly.

---

## 🎯 Learning Objectives

Across these projects, I learn how to use Python's type annotation system to clearly express the expected types of function parameters, return values, and variables — and how to validate them with `mypy` before runtime. I become comfortable with complex typing constructs from the `typing` module including `List`, `Tuple`, `Union`, `Optional`, `Callable`, `Iterable`, `Sequence`, `Mapping`, and `TypeVar`. I understand the `async` and `await` syntax and how the asyncio event loop enables concurrent execution without threads. I know how to create and schedule coroutines, wrap them in `asyncio.Task` objects, and run multiple coroutines in parallel using `asyncio.gather` — including why four concurrent 10-second tasks still complete in about 10 seconds. I am also able to write asynchronous generators using `async def` with `yield`, consume them with `async for`, and collect their output elegantly with async comprehensions.

On the JavaScript side, I understand what ES6 is and why it represents a major milestone in the evolution of the language. I can clearly articulate the difference between `const`, `let`, and `var`, and I know when to use each one appropriately. I am comfortable working with block-scoped variables, arrow functions, default parameters, rest and spread syntax, template literals, shorthand object syntax, computed property names, and `for...of` loops. I can write and consume iterators, and build report-style objects using ES6 patterns. I also know how to define ES6 classes, add instance and static methods, implement getters and setters with type validation, use `extends` and `super` for inheritance, and apply metaprogramming concepts using Symbols such as `Symbol.toPrimitive` and `Symbol.toStringTag`.

I know how to use `map`, `filter`, and `reduce` on arrays to transform and aggregate data in a clean and functional style. I understand typed arrays and how to manipulate binary data using `ArrayBuffer` and `DataView`. I am comfortable working with the `Set`, `Map`, and `WeakMap` data structures, knowing when to use each one and how they differ from plain objects and arrays.

I also understand what Promises are, why they exist, and how to use the `then`, `resolve`, and `catch` methods to handle asynchronous outcomes. I am comfortable using every method of the Promise object, including `Promise.all`, `Promise.allSettled`, and `Promise.race`. I know how to use `throw` and `try/catch` to handle errors gracefully, and I am able to write `async` functions using the `await` operator to make asynchronous code readable and maintainable.

By the end of this repository, I have a solid grasp of both the static and dynamic sides of modern Python — code that is well-typed, well-structured, and genuinely concurrent — as well as a strong foundation in modern JavaScript for writing clean, expressive, object-oriented, and asynchronous server-side code.

---

## 📁 Repository Structure

```bash
holbertonschool-web_back_end/
├── python_variable_annotations/
├── python_async_function/
├── python_async_comprehension/
├── pagination/
├── NoSQL/
├── ES6_basic/
├── ES6_classes/
├── ES6_data_manipulation/
├── ES6_promise/
└── README.md
```

---

## ✨ Projects / Contents

### python_variable_annotations
- Introduction to Python type annotations: simple types, complex types from `typing`, duck typing, and static validation with `mypy`
- Python 3.9, `typing` module, `math` module, `mypy`, pycodestyle

### python_async_function
- Asynchronous programming with `asyncio`: coroutines, concurrent execution, `asyncio.Task`, runtime measurement
- Python 3.9, `asyncio`, `random`, `time`, pycodestyle

### python_async_comprehension
- Async generators and async comprehensions: producing random values asynchronously and collecting them with elegant syntax
- Python 3.9, `asyncio`, `random`, `typing.AsyncGenerator`, pycodestyle

### pagination
- Pagination strategies from simple index-based page slicing to hypermedia-enriched responses and deletion-resilient index tracking, applied on a real CSV dataset
- Python 3.9, `csv`, `math`, `typing`, pycodestyle

### NoSQL
- Introduction to NoSQL databases and MongoDB: document storage, CRUD operations via MongoDB shell and PyMongo, aggregation pipelines, and real-world log analysis on Nginx access logs
- MongoDB 4.4, Python 3.9, PyMongo 4.8.0, pycodestyle

### ES6_basic
- Modern JavaScript syntax introduced in ES6: block-scoped variables, arrow functions, default parameters, rest and spread syntax, template literals, shorthand object notation, computed property names, `for...of` loops, and iterators
- Node.js 20.x, Jest, Babel, ESLint (Airbnb), npm 9.x

### ES6_classes
- Object-oriented programming in JavaScript using ES6 classes: constructors, getters and setters, instance and static methods, class inheritance with `extends` and `super`, and metaprogramming with `Symbol.toPrimitive` and `Symbol.toStringTag`
- Node.js 20.x, Jest, Babel, ESLint (Airbnb), npm 9.x

### ES6_data_manipulation
- ES6 data manipulation techniques: `map`, `filter`, and `reduce` on arrays, typed arrays with `ArrayBuffer` and `DataView`, and modern data structures including `Set`, `Map`, and `WeakMap`
- Node.js 20.x, Jest, Babel, ESLint (Airbnb), npm 9.x

### ES6_promise
- Asynchronous JavaScript through Promises: creating, resolving, and rejecting promises, chaining with `then` and `catch`, handling multiple promises with `Promise.all`, `Promise.allSettled`, and `Promise.race`, error handling with `throw` and `try/catch`, and writing `async/await` functions
- Node.js 20.x, Jest, Babel, ESLint (Airbnb), npm 9.x

---

## 🛠️ Technologies Used

The Python projects in this repository are written in **Python 3** (version 3.9) and run on **Ubuntu 20.04 LTS**. The main tools and modules used are the built-in `asyncio`, `random`, `time`, and `math` modules, along with Python's `typing` module for type annotations. Static type checking is performed with **mypy**. Code style is enforced with **pycodestyle** (version 2.5.x). No external frameworks are required beyond the Python standard library and `mypy`.

The JavaScript projects are written in **JavaScript (ES6+)** and interpreted with **Node.js 20.x.x** on **Ubuntu 20.04 LTS**. They use **Jest** as the testing framework, **Babel** (via `babel-jest` and `@babel/preset-env`) for transpilation, and **ESLint** with the Airbnb base configuration for code quality. Scripts are managed through **npm 9.x.x**.

---

## ⚙️ Prerequisites

**For Python projects:**
- OS: Ubuntu 20.04 LTS
- Python version: `python3` (3.9)
- pycodestyle: version 2.5.x (`pip install pycodestyle`)
- mypy: optional but recommended for `python_variable_annotations` (`pip install mypy`)
- All scripts must be executable and start with `#!/usr/bin/env python3`

**For JavaScript projects:**
- OS: Ubuntu 20.04 LTS
- Node.js: `20.x.x` / npm: `9.x.x`
- Jest, Babel, and ESLint are installed via `npm install` from each project's `package.json`
- All source files must use the `.js` extension and end with a new line
- All functions must be exported

---

## ▶️ Usage

```bash
git clone https://github.com/GwenP88/holbertonschool-web_back_end.git
cd holbertonschool-web_back_end
```

Navigate into any project directory and consult its `README.md` for task-specific instructions.

**Python projects** — scripts can be run directly or through the interpreter:

```bash
cd python_async_function
chmod +x 0-basic_async_syntax.py
./0-basic_async_syntax.py
# or
python3 0-basic_async_syntax.py
```

**JavaScript projects** — use npm scripts after installing dependencies:

```bash
cd ES6_basic
npm install
npm run dev 0-main.js   # Run a specific file
npm run test            # Run all Jest tests
npm run full-test       # Run tests + ESLint linting
```

Each project directory is self-contained with its own `README.md`, source files, and any required assets.

---

## 🤝 Contributions & Acknowledgements

A warm thank you to Holberton School for a curriculum that makes Python's advanced features feel genuinely exciting rather than intimidating. The async concurrency projects in particular deliver one of those rare "aha" moments — the kind that makes you immediately want to explain it to someone else. The ES6 projects are no different: once you replace `var` with `const` and `let`, you never look back. And once you discover that `Promise.allSettled` exists, you wonder how you ever lived without it. Thanks also to `mypy` for being the most constructively annoying type checker I have ever worked with.

---

## 👤 Author

**Gwenaelle PICHOT**
- Student at Holberton School
- Repository: `holbertonschool-web_back_end`