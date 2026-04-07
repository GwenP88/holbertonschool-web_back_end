![Python - Variable Annotations Banner](assets/banner.png)

# Python - Variable Annotations

## Description
This project introduces type annotations in Python 3 and demonstrates how to use them to improve code readability, reliability, and maintainability. It covers basic and advanced typing concepts including function annotations, variable typing, complex types, duck typing, and static type checking using mypy.

---

## Learning Objectives
At the end of this project, I learned to:

- I learned to add type annotations in Python 3 without arguing with my code for hours  
- I learned to specify function signatures and variable types so my future self stops guessing what I meant  
- I learned what duck typing is (and no, it has nothing to do with actual ducks, sadly)  
- I learned to use mypy to check my code, so Python stops trusting me blindly  

---

## Requirements
- OS: Ubuntu 20.04 LTS
- Python version: `python3` (3.9)
- All files must end with a new line
- The first line of all files must be exactly: `#!/usr/bin/python3`
- A README.md file at the root of the project is mandatory
- Code must follow pycodestyle (version 2.5.*)
- All files must be executable
- File length will be tested using `wc`

### Documentation : 
- All modules must have documentation:
`python3 -c 'print(__import__("my_module").__doc__)`

- All classes must have documentation:
`python3 -c 'print(__import__("my_module").MyClass.__doc__)`

- All functions (inside and outside a class) must have documentation:
`python3 -c 'print(__import__("my_module").my_function.__doc__)`
`python3 -c 'print(__import__("my_module").MyClass.my_function.__doc__)`

- Documentation must be a clear and complete sentence explaining the purpose of the module, class, or function (not just a single word)

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
<sub>Mandatory tasks completion: 100% ---  Advanced tasks completion: 100%</sub>
</p>

---

## Tasks

### 0 - Basic annotations - add
- Task status: Mandatory
- Task objectives: Define a type-annotated function that adds two floats
- Task constraint: Use proper type annotations for parameters and return
- Expected behavior: Returns the sum of two float values

**Files:** 0-add.py

---

### 1 - Basic annotations - concat
- Task status: Mandatory
- Task objectives: Define a function that concatenates two strings
- Task constraint: Use type annotations for string inputs and output
- Expected behavior: Returns a concatenated string

**Files:** 1-concat.py

---

### 2 - Basic annotations - floor
- Task status: Mandatory
- Task objectives: Create a function that returns the floor of a float
- Task constraint: Return type must be an integer
- Expected behavior: Returns the floor value of the given float

**Files:** 2-floor.py

---

### 3 - Basic annotations - to string
- Task status: Mandatory
- Task objectives: Convert a float into a string
- Task constraint: Use type annotations correctly
- Expected behavior: Returns the string representation of the float

**Files:** 3-to_str.py

---

### 4 - Define variables
- Task status: Mandatory
- Task objectives: Define and annotate variables with specific types and values
- Task constraint: Respect given types (int, float, bool, str)
- Expected behavior: Variables are correctly typed and assigned

**Files:** 4-define_variables.py

---

### 5 - Complex types - list of floats
- Task status: Mandatory
- Task objectives: Sum a list of floats
- Task constraint: Use List[float] annotation
- Expected behavior: Returns the sum as a float

**Files:** 5-sum_list.py

---

### 6 - Complex types - mixed list
- Task status: Mandatory
- Task objectives: Handle a list containing both ints and floats
- Task constraint: Use Union[int, float]
- Expected behavior: Returns the total as a float

**Files:** 6-sum_mixed_list.py

---

### 7 - Complex types - string and int/float to tuple
- Task status: Mandatory
- Task objectives: Return a tuple with a string and squared numeric value
- Task constraint: Use Tuple and Union annotations
- Expected behavior: Returns (string, squared value as float)

**Files:** 7-to_kv.py

---

### 8 - Complex types - functions
- Task status: Mandatory
- Task objectives: Return a function that multiplies a float
- Task constraint: Use Callable annotation
- Expected behavior: Returned function multiplies input by given multiplier

**Files:** 8-make_multiplier.py

---

### 9 - Duck typing - iterable object
- Task status: Mandatory
- Task objectives: Annotate function using iterable and sequence types
- Task constraint: Use Iterable and Sequence
- Expected behavior: Returns list of tuples (element, length)

**Files:** 9-element_length.py

---

### 10 - Duck typing - first element
- Task status: Advanced
- Task objectives: Safely return first element of a sequence
- Task constraint: Use Optional and Any
- Expected behavior: Returns first element or None

**Files:** 100-safe_first_element.py

---

### 11 - More involved type annotations
- Task status: Advanced
- Task objectives: Implement generic typing with TypeVar
- Task constraint: Use Mapping, Union, TypeVar
- Expected behavior: Returns value from mapping or default

**Files:** 101-safely_get_value.py

---

### 12 - Type Checking
- Task status: Advanced
- Task objectives: Fix typing issues using mypy
- Task constraint: No type errors allowed
- Expected behavior: Code passes mypy validation successfully

**Files:** 102-type_checking.py

---

## Authors
**Gwenaelle PICHOT**
- Student at Holberton School
- Track: holbertonschool: web back-end
- Project: Python - Variable Annotations