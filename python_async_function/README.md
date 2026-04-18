<p align="center">
  <img src="./assets/banner.png" alt="holbertonschool-web-back-end Banner">
</p>

# Python - Async Function

> `async`, `await`, and the art of doing several things at once without losing your mind.

---

## 📝 Description

This project introduces me to asynchronous programming in Python using the `asyncio` library. I learn how to write coroutines, run them concurrently, measure their execution time, and wrap them in `asyncio.Task` objects for fine-grained control. Starting from a single coroutine that waits a random amount of time, I progressively build a concurrent system that spawns multiple coroutines and collects their results in sorted order — without ever calling `sort()`. Welcome to the world of async Python.

---

## 🎯 Learning Objectives

By the end of this project, I am able to explain the `async` and `await` syntax and how they differ from regular functions. I know how to execute an async program using `asyncio.run()`, how to run multiple coroutines concurrently, and how to create and manage `asyncio.Task` objects. I also understand how to use the `random` module within async code and how to measure the runtime of concurrent coroutines using the `time` module.

---

## 🛠️ Technologies Used

This project is written in Python 3 (version 3.9), running on Ubuntu 20.04 LTS. It uses the built-in `asyncio`, `random`, and `time` modules. All functions and coroutines are fully type-annotated. All modules and functions include mandatory docstrings. Code style is enforced with pycodestyle 2.5.x.

---

## ⚙️ Requirements

- OS: Ubuntu 20.04 LTS
- Python version: `python3` (3.9)
- All files must end with a new line
- The first line of all files must be exactly: `#!/usr/bin/env python3`
- A README.md file at the root of the project is mandatory
- Code must follow pycodestyle (version 2.5.x)
- All files must be executable
- All functions and coroutines must be type-annotated
- All modules and functions must have meaningful docstrings

---

## 🚀 Installation

```bash
git clone https://github.com/GwenP88/holbertonschool-web_back_end.git
cd holbertonschool-web_back_end/python_async_function
```

No external packages required — `asyncio` and `random` are part of Python's standard library.

---

## ▶️ Usage / Execution

```bash
chmod +x filename.py
./filename.py
# or
python3 filename.py
```

---

## 📊 Project Progress

<p align="center">
<img src="assets/progress_barre_100.gif" alt="Mandatory tasks progress" width="80%">
</p>

<p align="center">
<sub>Mandatory tasks completion: 100%</sub>
</p>

---

## ✨ Features

### Task 0 - The basics of async

- Mandatory
- Write an async coroutine `wait_random(max_delay: int = 10) -> float` that waits a random float number of seconds (between 0 and `max_delay`) and returns the delay
- Uses `asyncio.sleep` and the `random` module
- Returns the actual wait time as a float after the delay completes

**Files:** `0-basic_async_syntax.py`

---

### Task 1 - Let's execute multiple coroutines at the same time with async

- Mandatory
- Write an async routine `wait_n(n: int, max_delay: int) -> List[float]` that spawns `wait_random` `n` times concurrently and returns the list of delays in ascending order
- Uses concurrent execution (not sequential); results are sorted by natural completion order, never by calling `sort()`
- Returns a list of floats in ascending order reflecting the natural completion order of the concurrent coroutines

**Files:** `1-concurrent_coroutines.py`

---

### Task 2 - Measure the runtime

- Mandatory
- Write a regular (non-async) function `measure_time(n: int, max_delay: int) -> float` that measures the total execution time for `wait_n(n, max_delay)` and returns `total_time / n`
- Uses the `time` module to measure elapsed time; uses `asyncio.run()` to execute the coroutine
- Returns the average time per coroutine as a float

**Files:** `2-measure_runtime.py`

---

### Task 3 - Tasks

- Mandatory
- Write a regular function `task_wait_random(max_delay: int) -> asyncio.Task` that takes an integer and returns an `asyncio.Task` wrapping `wait_random`
- Uses `asyncio.create_task()` — this is a regular function, not a coroutine
- Returns a properly scheduled `asyncio.Task` object that can be awaited

**Files:** `3-tasks.py`

---

### Task 4 - Tasks

- Mandatory
- Write an async function `task_wait_n(n: int, max_delay: int) -> List[float]` that is nearly identical to `wait_n` but uses `task_wait_random` instead of `wait_random`
- Returns the list of delays in ascending order using concurrent task execution
- Demonstrates how `asyncio.Task` objects are interchangeable with coroutines in concurrent workflows

**Files:** `4-tasks.py`

---

## 🤝 Contributions & Acknowledgements

Thanks to Holberton School for making async programming click. The moment I understood that `await` yields control back to the event loop instead of blocking — and that this is exactly what makes concurrency possible — everything else fell into place.

---

## 👤 Author

**Gwenaelle PICHOT**
- Student at Holberton School
- Track: holbertonschool-web_back_end
- Project: python_async_function