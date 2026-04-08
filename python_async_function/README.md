![Python - Async Banner](assets/banner.png)

# Python - Async

## Description
This project introduces asynchronous programming in Python using the `asyncio` module. It focuses on understanding how to write and manage coroutines, execute concurrent tasks, and measure execution performance. The goal is to build efficient programs for I/O-bound operations without relying on threads or processes.


---

## Learning Objectives
At the end of this project, I learned to:

- Finally understand what `async` and `await` are… and stop pretending I did before. 
- Run asynchronous programs with `asyncio` without breaking everything (most of the time). 
- Launch multiple coroutines at once and feel like I have superpowers over time.  
- Create and manage `asyncio` tasks like a (slightly less stressed) project manager. 
- Use the `random` module in async code and accept that chaos is sometimes part of the plan.  

---

## Requirements
- OS: Ubuntu 20.04 LTS
- Python version: `python3` (3.9)
- Allowed editors: vi, vim, emacs
- All files must end with a new line
- The first line of all files must be exactly: `#!/usr/bin/env python3`
- A README.md file at the root of the project is mandatory
- Code must follow pycodestyle (version 2.5.x)
- All files must be executable
- The length of files will be tested using `wc`
- All functions and coroutines must be type-annotated
- All modules must have documentation
- All functions must have proper documentation (clear sentences explaining their purpose)

---

## Usage / Execution
All Python scripts can be executed in two ways:

### 1. Direct execution
Make the file executable and run it directly:
```bash
chmod +x filename.py
./filename.py
```

### 2. Using Python interpreter
Run the script with Python:
```bash
python3 filename.py
```

---

## Project Progress
<p align="center">
<img src="assets/progress_barre_100.gif" alt="Mandatory tasks progress" width="80%">
</p>

<p align="center">
<sub>Mandatory tasks completion: 100%</sub>
</p>

---

## Tasks
### 0 - The basics of async
I learned to create my very first asynchronous coroutine `wait_random`, which waits for a random delay between 0 and `max_delay` (because apparently waiting randomly is now a feature, not a bug). It then returns that delay as a float using the `random` module.

**Files**
- 0-basic_async_syntax.py

---

### 1 - Execute multiple coroutines concurrently
I learned to create `wait_n`, a function that launches `wait_random` multiple times at once (yes, at the same time, like magic). It returns all delays in ascending order without using `sort()`… because that would be too easy.

**Files**
- 1-concurrent_coroutines.py

---

### 2 - Measure runtime
I learned to measure how fast my async code actually runs (spoiler: faster than I expected). The `measure_time` function calculates the average execution time of `wait_n` using the `time` module.

**Files**
- 2-measure_runtime.py

---

### 3 - Tasks
I learned to create `task_wait_random`, which wraps my coroutine into an `asyncio.Task`. And plot twist: this time it’s not even an async function. Python really likes to keep things interesting.

**Files**
- 3-tasks.py

---

### 4 - Tasks with concurrency
I learned to reuse everything I built before to create `task_wait_n`, a version of `wait_n` that works with tasks. Basically, same idea… but upgraded and even more concurrent.

**Files**
- 4-tasks.py

---

## Authors
**Gwenaelle PICHOT**
- Student at Holberton School
- Track: holbertonschool: web back-end
- Project: Python - Async