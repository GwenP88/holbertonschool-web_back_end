<p align="center">
  <img src="./assets/banner.png" alt="holbertonschool-web-back-end Banner">
</p>

# holbertonschool-web_back_end

> Python on the server side — async, typed, and ready to handle whatever you throw at it. 🐍

---

## 📄 Description

This repository contains my back-end development projects completed as part of the Holberton School curriculum. It focuses on Python's advanced features for building efficient, readable, and production-quality server-side code. The three projects covered here explore type annotations, asynchronous programming with `asyncio`, and the elegant combination of async generators with async comprehensions. Together, they form a cohesive arc: from making code self-documenting and type-safe, to understanding how to run tasks concurrently, to producing and consuming asynchronous data streams in a clean and Pythonic way.

---

## 🎯 Learning Objectives

Across these projects, I learn how to use Python's type annotation system to clearly express the expected types of function parameters, return values, and variables — and how to validate them with `mypy` before runtime. I become comfortable with complex typing constructs from the `typing` module including `List`, `Tuple`, `Union`, `Optional`, `Callable`, `Iterable`, `Sequence`, `Mapping`, and `TypeVar`. I understand the `async` and `await` syntax and how the asyncio event loop enables concurrent execution without threads. I know how to create and schedule coroutines, wrap them in `asyncio.Task` objects, and run multiple coroutines in parallel using `asyncio.gather` — including why four concurrent 10-second tasks still complete in about 10 seconds. I am also able to write asynchronous generators using `async def` with `yield`, consume them with `async for`, and collect their output elegantly with async comprehensions. By the end of this repository, I have a solid grasp of both the static and dynamic sides of modern Python: code that is well-typed, well-structured, and genuinely concurrent.

---

## 📁 Repository Structure

```bash
holbertonschool-web_back_end/
├── python_variable_annotations/
├── python_async_function/
├── python_async_comprehension/
├── pagination/
├── NoSQL/
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

---

## 🛠️ Technologies Used

Every project in this repository is written in **Python 3** (version 3.9) and runs on **Ubuntu 20.04 LTS**. The main tools and modules used across the repository are the built-in `asyncio`, `random`, `time`, and `math` modules, along with Python's `typing` module for type annotations. Static type checking is performed with **mypy**. Code style is enforced throughout with **pycodestyle** (version 2.5.x). No external frameworks or dependencies are required beyond the Python standard library and `mypy`.

---

## ⚙️ Prerequisites

- OS: Ubuntu 20.04 LTS
- Python version: `python3` (3.9)
- pycodestyle: version 2.5.x (`pip install pycodestyle`)
- mypy: optional but recommended for `python_variable_annotations` (`pip install mypy`)
- All scripts must be executable and start with `#!/usr/bin/env python3`

---

## ▶️ Usage

```bash
git clone https://github.com/GwenP88/holbertonschool-web_back_end.git
cd holbertonschool-web_back_end
```

Navigate into any project directory and consult its `README.md` for task-specific instructions. Scripts can be run directly or through the interpreter:

```bash
cd python_async_function
chmod +x 0-basic_async_syntax.py
./0-basic_async_syntax.py
# or
python3 0-basic_async_syntax.py
```

Each project directory is self-contained with its own `README.md`, source files, and any required assets.

---

## 🤝 Contributions & Acknowledgements

A warm thank you to Holberton School for a curriculum that makes Python's advanced features feel genuinely exciting rather than intimidating. The async concurrency projects in particular deliver one of those rare "aha" moments — the kind that makes you immediately want to explain it to someone else. Thanks also to `mypy` for being the most constructively annoying type checker I have ever worked with.

---

## 👤 Author

**Gwenaelle PICHOT**
- Student at Holberton School
- Repository: `holbertonschool-web_back_end`