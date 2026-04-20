# holbertonschool-web_back_end — Pagination

> Because nobody wants to load 19,418 baby names at once. Trust me on this one.

---

## 📄 Description

This repository is part of my back-end web development curriculum at Holberton School. The `pagination` directory focuses on one of those backend concepts that sounds simple until you actually have to make it bulletproof: **pagination**. I built a series of progressively more robust pagination systems on top of a real-world CSV dataset of popular baby names. Starting from a basic index calculator, I worked my way up to hypermedia-enriched pagination and finally to a deletion-resilient version that keeps users from missing data even when rows disappear between requests.

---

## 🎯 Learning Objectives

Through this project, I learned how to paginate a dataset using simple `page` and `page_size` parameters, computing the correct start and end indexes for any given page. I also learned how to enrich pagination responses with hypermedia metadata — providing the client with everything it needs to navigate the dataset (current page, next page, previous page, total pages) without having to guess. Most importantly, I learned how to implement deletion-resilient pagination using index-based tracking, so that even if rows are deleted from the dataset between two requests, the user never silently skips over data. I am now able to design and implement pagination strategies that are safe, informative, and robust in real-world conditions.

---

## 📁 Repository Structure

```
holbertonschool-web_back_end/
└── pagination/
    ├── Popular_Baby_Names.csv
    ├── 0-simple_helper_function.py
    ├── 1-simple_pagination.py
    ├── 2-hypermedia_pagination.py
    └── 3-hypermedia_del_pagination.py
```

---

## ✨ Projects / Contents

### 0. Simple Helper Function
* Implements `index_range`, a utility function that takes `page` and `page_size` and returns the corresponding `(start_index, end_index)` tuple. Pages are 1-indexed.
* **Technologies:** Python 3.9, type annotations

### 1. Simple Pagination
* Implements a `Server` class with a `get_page` method that reads from the CSV dataset and returns the correct slice of data for a given page and page size. Uses `assert` to enforce valid inputs.
* **Technologies:** Python 3.9, `csv` module, type annotations

### 2. Hypermedia Pagination
* Extends the `Server` class with a `get_hyper` method that returns a rich dictionary including the data page, current page number, next/previous page numbers, and total page count.
* **Technologies:** Python 3.9, `csv` module, `math` module, type annotations

### 3. Deletion-Resilient Hypermedia Pagination
* Implements `get_hyper_index`, which uses an index-keyed dataset to ensure that even if rows are deleted between requests, the user receives the correct next batch of data without gaps.
* **Technologies:** Python 3.9, `csv` module, `Dict`, type annotations

---

## 🛠️ Technologies Used

This project is built entirely in **Python 3.9**, following **pycodestyle** (version 2.5.\*) formatting standards. I used the standard library modules `csv`, `math`, and `typing` throughout. All functions and methods are fully type-annotated and documented. The dataset used is a real CSV file of popular baby names (`Popular_Baby_Names.csv`), containing nearly 19,419 entries.

---

## ⚙️ Prerequisites

- **OS:** Ubuntu 20.04 LTS
- **Language:** Python 3.9
- **Style:** pycodestyle 2.5.\*
- **Dataset:** `Popular_Baby_Names.csv` (must be present in the `pagination/` directory)
- No external packages required — standard library only

---

## ▶️ Usage

Clone the repository and navigate to the pagination directory:

```bash
git clone https://github.com/GwenP88/holbertonschool-web_back_end.git
cd holbertonschool-web_back_end/pagination
```

Each file is independently executable. To test a specific task, run its corresponding main file:

```bash
# Example: test the deletion-resilient pagination
chmod +x 3-main.py
./3-main.py
```

Make sure `Popular_Baby_Names.csv` is present in the same directory before running any script.

---

## 🤝 Contributions & Acknowledgements

This project was completed as part of the Holberton School curriculum. While the code is my own work, I want to thank the Holberton team for crafting exercises that actually make you think — and for choosing a dataset charming enough to make debugging almost enjoyable. Almost.

---

## 👤 Author

* **Gwenaelle Pichot**
* Holberton School student
* Repository: holbertonschool-web_back_end : pagination