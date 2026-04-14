# Python - Variable Annotations

> Type hints: because your future self deserves to know what that function actually expects.

---

## 📝 Description

This project introduces me to Python's type annotation system — a way to document the expected types of function parameters, return values, and variables without changing how the code actually runs. I start with simple annotated functions and progressively tackle complex types using the `typing` module: lists, unions, tuples, callables, iterables, and generics. I also learn to validate my annotations with `mypy`, Python's static type checker, and discover the elegance of duck typing even within a typed world.

---

## 🎯 Learning Objectives

By the end of this project, I am able to use type annotations in Python 3 to specify function signatures and variable types clearly. I understand how to use the `typing` module to express complex types like `List`, `Tuple`, `Union`, `Optional`, `Callable`, `Iterable`, `Sequence`, `Mapping`, and `TypeVar`. I grasp the concept of duck typing as it applies to annotated code, and I know how to validate my code with `mypy` to catch type errors before runtime.

---

## 🛠️ Technologies Used

This project is written in Python 3 (version 3.9), running on Ubuntu 20.04 LTS. It uses Python's built-in `typing` module and the `math` module where needed. Static type checking is performed with `mypy`. All modules and functions include mandatory docstrings. Code style is enforced with pycodestyle 2.5.*.

---

## ⚙️ Requirements

- OS: Ubuntu 20.04 LTS
- Python version: `python3` (3.9)
- All files must end with a new line
- The first line of all files must be exactly: `#!/usr/bin/env python3`
- A README.md file at the root of the project is mandatory
- Code must follow pycodestyle (version 2.5.*)
- All files must be executable
- All modules, classes, and functions must have meaningful docstrings

---

## 🚀 Installation

```bash
git clone https://github.com/GwenP88/holbertonschool-web_back_end.git
cd holbertonschool-web_back_end/python_variable_annotations

# Optional: install mypy for type checking
pip install mypy
```

---

## ▶️ Usage / Execution

```bash
chmod +x filename.py
./filename.py

# Type-check a file with mypy:
mypy filename.py
```

---

## 📊 Project Progress

<p align="center">
<img src="assets/progress_barre_100.gif" alt="Mandatory tasks progress" width="80%">
</p>

<p align="center">
<sub>Mandatory tasks completion: 100% --- Advanced tasks completion: 100%</sub>
</p>

---

## ✨ Features

### Task 0 - Basic annotations - add

- Mandatory
- Write a type-annotated function `add(a: float, b: float) -> float` that returns the sum of two floats
- Both parameters and the return type are annotated as `float`
- Returns the sum of `a` and `b` as a float; `__annotations__` confirms all three types

**Files:** `0-add.py`

---

### Task 1 - Basic annotations - concat

- Mandatory
- Write a type-annotated function `concat(str1: str, str2: str) -> str` that returns the concatenation of two strings
- Both parameters and return type are annotated as `str`
- Returns `str1 + str2` as a single concatenated string

**Files:** `1-concat.py`

---

### Task 2 - Basic annotations - floor

- Mandatory
- Write a type-annotated function `floor(n: float) -> int` that returns the floor of a float using `math.floor`
- Input annotated as `float`; return annotated as `int`
- Returns the largest integer less than or equal to `n`

**Files:** `2-floor.py`

---

### Task 3 - Basic annotations - to string

- Mandatory
- Write a type-annotated function `to_str(n: float) -> str` that returns the string representation of a float
- Input annotated as `float`; return annotated as `str`
- Returns `str(n)` as a properly typed string

**Files:** `3-to_str.py`

---

### Task 4 - Define variables

- Mandatory
- Define and annotate four variables: `a: int = 1`, `pi: float = 3.14`, `i_understand_annotations: bool = True`, `school: str = "Holberton"`
- Each variable has an explicit type annotation matching its value type
- All four variables are accessible with their correct annotated types

**Files:** `4-define_variables.py`

---

### Task 5 - Complex types - list of floats

- Mandatory
- Write a type-annotated function `sum_list(input_list: List[float]) -> float` that returns the sum of a list of floats
- Uses `List[float]` from the `typing` module
- Returns the total sum as a float

**Files:** `5-sum_list.py`

---

### Task 6 - Complex types - mixed list

- Mandatory
- Write a type-annotated function `sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float` that returns the sum of a mixed list of integers and floats
- Uses `List[Union[int, float]]` from `typing`
- Returns the total sum as a float regardless of input type mix

**Files:** `6-sum_mixed_list.py`

---

### Task 7 - Complex types - string and int/float to tuple

- Mandatory
- Write a type-annotated function `to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]` that returns a tuple of the string and the square of the number
- Uses `Tuple[str, float]` and `Union[int, float]` from `typing`
- Returns `(k, v ** 2)` where the second element is annotated as `float`

**Files:** `7-to_kv.py`

---

### Task 8 - Complex types - functions

- Mandatory
- Write a type-annotated function `make_multiplier(multiplier: float) -> Callable[[float], float]` that returns a function multiplying a float by `multiplier`
- Uses `Callable[[float], float]` from `typing`
- Returns a callable that takes a float and returns a float

**Files:** `8-make_multiplier.py`

---

### Task 9 - Let's duck type an iterable object

- Mandatory
- Annotate the function `element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]` that returns a list of `(element, length)` tuples
- Uses `Iterable`, `Sequence`, `List`, and `Tuple` from `typing`; relies on duck typing for the input
- Works with any iterable of sequences (strings, lists, tuples, etc.) without type enforcement at runtime

**Files:** `9-element_length.py`

---

### Task 10 - Duck typing - first element of a sequence

- Advanced
- Annotate `safe_first_element(lst: Sequence[Any]) -> Optional[Any]` that returns the first element or `None`
- Uses `Sequence`, `Any`, and `Optional` from `typing`
- Returns `lst[0]` if the sequence is non-empty, `None` otherwise, with proper optional typing

**Files:** `100-safe_first_element.py`

---

### Task 11 - More involved type annotations

- Advanced
- Annotate `safely_get_value(dct: Mapping, key: Any, default: Union[T, None] = None) -> Union[Any, T]` using a `TypeVar`
- Uses `TypeVar`, `Mapping`, `Any`, and `Union` from `typing`
- Demonstrates generic type annotations where the default value's type constrains the return type

**Files:** `101-safely_get_value.py`

---

### Task 12 - Type Checking

- Advanced
- Use `mypy` to validate and fix a `zoom_array` function; correct the type annotations so `mypy` reports no issues
- Fix involves changing `Tuple` to `List` in the return type and `3.0` to `3` in the caller; `mypy` must pass with zero errors
- The final version passes `mypy` validation: `Success: no issues found in 1 source file`

**Files:** `102-type_checking.py`

---

## 🤝 Contributions & Acknowledgements

Thanks to Holberton School for introducing me to type annotations. I came in thinking they were optional decoration — I left understanding they are a form of documentation that also catches bugs. `mypy` is now a friend, not a foe.

---

## 👤 Author

**Gwenaelle PICHOT**
- Student at Holberton School
- Track: holbertonschool-web_back_end
- Project: python_variable_annotations