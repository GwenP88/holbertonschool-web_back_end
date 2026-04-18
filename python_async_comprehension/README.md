<p align="center">
  <img src="./assets/banner.jpeg" alt="holbertonschool-web-back-end Banner">
</p>

# Python - Async Comprehension

> Async generators, async comprehensions, and the satisfying mystery of why 4 × 10s equals 10s.

---

## 📝 Description

This project builds on my async foundations by introducing asynchronous generators and async comprehensions — two powerful patterns for producing and consuming data asynchronously. I write a coroutine that yields random numbers over time, collect them elegantly with an async comprehension, and then run four of them in parallel to discover a counterintuitive but deeply logical result: running four 10-second tasks concurrently still only takes about 10 seconds. Understanding why is the whole point.

---

## 🎯 Learning Objectives

By the end of this project, I am able to write asynchronous generators using `async def` and `yield`, consume them using `async for` and async comprehensions (`[... async for ...]`), and annotate generators and coroutines with appropriate types from the `typing` module. I understand why running coroutines in parallel with `asyncio.gather` does not multiply their total runtime.

---

## 🛠️ Technologies Used

This project is written in Python 3 (version 3.9), running on Ubuntu 20.04 LTS. It uses the built-in `asyncio` and `random` modules. All functions and coroutines are fully type-annotated using `typing.AsyncGenerator`, `typing.List`, and `typing.Generator`. All modules and functions include mandatory docstrings. Code style is enforced with pycodestyle 2.5.x.

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
cd holbertonschool-web_back_end/python_async_comprehension
```

No external packages required — everything used is part of Python's standard library.

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

### Task 0 - Async Generator

- Mandatory
- Write a coroutine `async_generator() -> AsyncGenerator[float, None]` that loops 10 times, waits 1 second asynchronously each iteration, then yields a random float between 0 and 10
- Uses `asyncio.sleep(1)` and the `random` module; type-annotated with `AsyncGenerator`
- Yields 10 random floats over approximately 10 seconds, consumable via `async for`

**Files:** `0-async_generator.py`

---

### Task 1 - Async Comprehensions

- Mandatory
- Write a coroutine `async_comprehension() -> List[float]` that collects 10 random numbers from `async_generator` using an async comprehension and returns them as a list
- Uses `[value async for value in async_generator()]` syntax; type-annotated with `List[float]`
- Returns a list of 10 floats gathered asynchronously in a single elegant expression

**Files:** `1-async_comprehension.py`

---

### Task 2 - Run time for four parallel comprehensions

- Mandatory
- Write a coroutine `measure_runtime() -> float` that runs `async_comprehension` four times in parallel using `asyncio.gather` and returns the total runtime
- Total runtime is approximately 10 seconds (not 40) because all four coroutines run concurrently — they all wait at the same time, not sequentially
- Returns the total elapsed time as a float; demonstrates the power of concurrent async execution

**Files:** `2-measure_runtime.py`

---

## 🤝 Contributions & Acknowledgements

Thanks to Holberton School for the parallel runtime puzzle — the "why is it 10 seconds and not 40?" moment is one of those genuine lightbulb instants that makes concurrency finally feel intuitive. Also, async comprehensions are just beautiful syntax.

---

## 👤 Author

**Gwenaelle PICHOT**
- Student at Holberton School
- Track: holbertonschool-web_back_end
- Project: python_async_comprehension