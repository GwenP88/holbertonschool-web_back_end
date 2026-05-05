<p align="center">
  <img src="./assets/banner.jpg" alt="holbertonschool-web-back-end Banner">
</p>

# ES6 data manipulation
 
> Bending JavaScript arrays, sets, maps, and typed arrays to my will — one ES6 method at a time.
 
---
 
## 📝 Description
 
This project explores ES6 data manipulation techniques in JavaScript, focusing on the powerful built-in methods available for working with arrays, typed arrays, sets, maps, and weak maps. Through a series of progressive tasks, I implement functions that leverage modern JavaScript to efficiently query, transform, filter, and aggregate data structures. The project is part of the Holberton School web back-end curriculum and is built on top of Node.js with Babel for ES6 transpilation.
 
---
 
## 🎯 Learning Objectives
 
At the end of this project, I am able to explain the following concepts without the help of Google. I know how to use `map`, `filter`, and `reduce` on arrays to transform, filter, and aggregate data in a clean and functional style. I understand what typed arrays are and how to manipulate binary data using `ArrayBuffer` and `DataView`. I am also comfortable working with the `Set`, `Map`, and `WeakMap` data structures — knowing when to use each one, what makes them distinct from plain objects and arrays, and how `WeakMap` differs from `Map` in terms of memory management and key constraints.
 
---
 
## 🛠️ Technologies Used
 
This project is written entirely in JavaScript (ES6+) and runs on Node.js. I use Babel (`@babel/core`, `@babel/preset-env`) to transpile modern ES6 syntax, and `babel-jest` along with Jest for unit testing. ESLint is configured to enforce code quality and style consistency across all files. The project is managed with npm, and scripts are executed via `npm run dev` using `babel-node`.
 
---
 
## ⚙️ Requirements
 
- **OS:** Ubuntu 20.04 LTS
- **Runtime:** Node.js `20.x.x` — npm `9.x.x`
- **Allowed editors:** `vi`, `vim`, `emacs`, `Visual Studio Code`
- All files must end with a new line
- A `README.md` file at the root of the project folder is mandatory
- All code files must use the `.js` extension
- All functions must be exported
- Code is tested using **Jest** via `npm run test`
- Code is linted using **ESLint**
- The entire project (tests + lint) can be verified with `npm run full-test`
### Setup — Install Node.js 20.x.x
 
Run the following in your home directory:
 
```bash
curl -sL https://deb.nodesource.com/setup_20.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
```
 
Verify the installation:
 
```bash
nodejs -v   # v20.15.1
npm -v      # 10.7.0
```
 
### Install Jest, Babel, and ESLint
 
In your project directory:
 
```bash
npm install --save-dev jest
npm install --save-dev babel-jest @babel/core @babel/preset-env
npm install --save-dev eslint
```
 
> Don't forget to run `npm install` once you have the `package.json` in place.
 
---
 
## 🚀 Installation
 
```bash
git clone https://github.com/GwenP88/holbertonschool-web_back_end.git
cd holbertonschool-web_back_end/ES6_data_manipulation
npm install
```
 
---
 
## ▶️ Usage / Execution
 
All JavaScript files can be executed using the `npm run dev` script with Babel transpilation:
 
```bash
npm run dev <main_file>.js
```
 
For example:
 
```bash
npm run dev 0-main.js
```
 
To run the test suite:
 
```bash
npm test
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
 
---
 
**Task 0 - Basic list of objects**
 
- **Status:** Mandatory
- **Objective:** Create a `getListStudents` function that returns a hardcoded array of student objects.
- **Constraint:** Each object must have `id` (Number), `firstName` (String), and `location` (String) attributes.
- **Expected behavior:** Returns an array of 3 student objects in a specific order (Guillaume, James, Serena).
- **Files:** `0-get_list_students.js`
---
 
**Task 1 - More mapping**
 
- **Status:** Mandatory
- **Objective:** Create a `getListStudentIds` function that extracts all `id` values from an array of student objects.
- **Constraint:** Must use the `map` function; returns an empty array if the argument is not an array.
- **Expected behavior:** Returns `[1, 2, 5]` for a valid students array, `[]` for non-array input.
- **Files:** `1-get_list_student_ids.js`
---
 
**Task 2 - Filter**
 
- **Status:** Mandatory
- **Objective:** Create a `getStudentsByLocation` function that filters students by city.
- **Constraint:** Must use the `filter` function on the array.
- **Expected behavior:** Returns only the student objects whose `location` matches the given city string.
- **Files:** `2-get_students_by_loc.js`
---
 
**Task 3 - Reduce**
 
- **Status:** Mandatory
- **Objective:** Create a `getStudentIdsSum` function that computes the sum of all student `id` values.
- **Constraint:** Must use the `reduce` function on the array.
- **Expected behavior:** Returns `8` for the default student list (1 + 2 + 5).
- **Files:** `3-get_ids_sum.js`
---
 
**Task 4 - Combine**
 
- **Status:** Mandatory
- **Objective:** Create an `updateStudentGradeByCity` function that returns students from a specific city with an updated grade field.
- **Constraint:** Must combine `filter` and `map`; assigns `'N/A'` if no matching grade is found in `newGrades`.
- **Expected behavior:** Returns filtered students with a `grade` property appended, either from `newGrades` or `'N/A'`.
- **Files:** `4-update_grade_by_city.js`
---
 
**Task 5 - Typed Arrays**
 
- **Status:** Mandatory
- **Objective:** Create a `createInt8TypedArray` function that returns a `DataView` over a new `ArrayBuffer` with an `Int8` value written at a given position.
- **Constraint:** Throws the error `Position outside range` if the position is invalid.
- **Expected behavior:** Returns a `DataView` with the correct byte written at the specified offset.
- **Files:** `5-typed_arrays.js`
---
 
**Task 6 - Set data structure**
 
- **Status:** Mandatory
- **Objective:** Create a `setFromArray` function that converts any array into a `Set`.
- **Constraint:** Accepts an array of any element type; duplicates are automatically removed by the `Set`.
- **Expected behavior:** Returns a `Set` containing all unique values from the input array.
- **Files:** `6-set.js`
---
 
**Task 7 - More set data structure**
 
- **Status:** Mandatory
- **Objective:** Create a `hasValuesFromArray` function that checks if all array elements exist in a given set.
- **Constraint:** Accepts a `Set` and an `Array`; returns a boolean.
- **Expected behavior:** Returns `true` only if every element of the array is present in the set, `false` otherwise.
- **Files:** `7-has_array_values.js`
---
 
**Task 8 - Clean set**
 
- **Status:** Mandatory
- **Objective:** Create a `cleanSet` function that returns a dash-separated string of set values starting with a given prefix, with the prefix stripped from each value.
- **Constraint:** Returns an empty string if `startString` is empty or not a string.
- **Expected behavior:** For prefix `'bon'` and set `{'bonjovi', 'bonaparte', 'bonappetit', 'banana'}`, returns `'jovi-aparte-appetit'`.
- **Files:** `8-clean_set.js`
---
 
**Task 9 - Map data structure**
 
- **Status:** Mandatory
- **Objective:** Create a `groceriesList` function that returns a `Map` of grocery items with their quantities.
- **Constraint:** The map must contain exactly 5 entries with specific name/quantity pairs.
- **Expected behavior:** Returns a `Map` with keys like `'Apples'`, `'Tomatoes'`, etc., mapped to their respective quantities.
- **Files:** `9-groceries_list.js`
---
 
**Task 10 - More map data structure**
 
- **Status:** Mandatory
- **Objective:** Create an `updateUniqueItems` function that updates all map entries with quantity `1` to quantity `100`.
- **Constraint:** Throws the error `Cannot process` if the argument is not a `Map`.
- **Expected behavior:** Mutates the passed map in place, changing `Pasta: 1` and `Rice: 1` to `Pasta: 100` and `Rice: 100`.
- **Files:** `10-update_uniq_items.js`
---
 
**Task 11 - Weak link data structure**
 
- **Status:** Advanced
- **Objective:** Export a `WeakMap` instance (`weakMap`) and a `queryAPI` function that tracks how many times each endpoint object has been queried.
- **Constraint:** Throws the error `Endpoint load is high` when the query count for an endpoint reaches 5 or more.
- **Expected behavior:** Increments the count in `weakMap` on each call and raises an error at the threshold.
- **Files:** `100-weak.js`
---
 
## 🤝 Contributions & Acknowledgements
 
A big thank you to the Holberton School staff and peers who reviewed, tested, and occasionally saved me from my own off-by-one errors. Special thanks to the ES6 specification for existing, and to `console.log` for being my most loyal debugging companion throughout this project.
 
---
 
## 👤 Author
 
**Gwenaelle PICHOT**
 
- Student at Holberton School
- Track: holbertonschool-web_back_end
- Project: ES6 data manipulation