![Python - Async Comprehension Banner](assets/banner.png)

# Python - Async Comprehension

## Description
This project dives into the magical world of asynchronous programming in Python, where time behaves differently and waiting becomes productive (yes, really). Instead of blocking everything like a traffic jam, we learn how to let things happen concurrently — like a well-organized multitasker. Think of it as teaching Python to juggle tasks without dropping any balls.

---

## Learning Objectives
With this project, I learned how to write asynchronous generators and finally understand what’s really going on behind that mysterious `async` keyword. I also learned how to use async comprehensions to collect data efficiently without freezing everything, which feels a bit like unlocking a hidden Python superpower. On top of that, I got comfortable with type-annotating generators, making my code cleaner, more readable, and less likely to make future-me cry.

---

## Requirements
- OS: Ubuntu 20.04 LTS
- Python version: `python3` (3.9)
- All files must end with a new line
- The first line of all files must be exactly: `#!/usr/bin/env python3`
- A README.md file at the root of the project is mandatory
- Code must follow pycodestyle (version 2.5.*)
- All files must be executable
- No module imports allowed unless explicitly stated
- All modules must have documentation
- All functions must have documentation
- All functions and coroutines must be type-annotated

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
### 0 - Async Generator

- **Status:** Mandatory  
- **Objectives:** Create an asynchronous generator that yields random numbers  
- **Constraint:** Must wait asynchronously between each yield  
- **Expected behavior:** Generates 10 random numbers between 0 and 10 with a 1-second delay each  

**Files**
- `0-async_generator.py`

---

### 1 - Async Comprehension

- **Status:** Mandatory  
- **Objectives:** Use an async comprehension to collect values from an async generator  
- **Constraint:** Must use async comprehension syntax  
- **Expected behavior:** Returns a list of 10 random numbers generated asynchronously  

**Files**
- `1-async_comprehension.py`

---

### 2 - Run time for four parallel comprehensions

- **Status:** Mandatory  
- **Objectives:** Execute multiple async comprehensions in parallel  
- **Constraint:** Must use `asyncio.gather`  
- **Expected behavior:** Runs four async comprehensions concurrently and returns total execution time (around 10 seconds)  

**Files**
- `2-measure_runtime.py`

---

## Authors
**Gwenaelle PICHOT**
- Student at Holberton School
- Track: holbertonschool: web back-end
- Project: Python - Async Comprehension