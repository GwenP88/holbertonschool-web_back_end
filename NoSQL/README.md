<p align="center">
  <img src="./assets/banner.jpeg" alt="holbertonschool-web-back-end Banner" width="500">
</p>

# NoSQL

> SQL is great, but sometimes you just want to store your data without filling out a schema application first.

---

## 📝 Description

This project is my introduction to the world of NoSQL databases, and more specifically to **MongoDB**. Through a series of progressive tasks, I explored how document-oriented databases work, how they differ from relational databases, and how to interact with them both through the MongoDB shell and through Python using the PyMongo driver. The project covers everything from basic CRUD operations written as MongoDB scripts, to Python functions that query, update, and aggregate data — including a real-world log analysis task on Nginx access logs.

---

## 🎯 Learning Objectives

By the end of this project, I am able to explain what NoSQL means and articulate the key differences between SQL and NoSQL databases. I understand the concept of ACID properties and why NoSQL databases often trade some of them for scalability and flexibility. I know what document storage is and what the main types of NoSQL databases are. I can describe the benefits of using a NoSQL database and choose the right tool for the right use case. On the practical side, I am able to query, insert, update, and delete documents in MongoDB using both the shell and Python. I can also write aggregation pipelines to compute statistics and sort results, and I know how to use PyMongo to connect a Python script to a running MongoDB instance.

---

## 🛠️ Technologies Used

This project uses **MongoDB 4.4** as the database engine, running on Ubuntu 20.04 LTS. Shell scripts are written as MongoDB command files (piped into the `mongo` client). Python scripts are written in **Python 3.9** using the **PyMongo 4.8.0** driver for all database interactions. Code style follows **pycodestyle 2.5.\*** and all modules and functions are fully documented.

---

## ⚙️ Requirements

**MongoDB Command Files:**
- Interpreted on Ubuntu 20.04 LTS using MongoDB 4.4
- All files must end with a new line
- First line of each file must be a comment: `// my comment`
- File length tested with `wc`

**Python Scripts:**
- Interpreted on Ubuntu 20.04 LTS using Python 3.9 and PyMongo 4.8.0
- All files must end with a new line
- First line must be exactly `#!/usr/bin/env python3`
- Code must follow pycodestyle 2.5.\*
- All modules and functions must have documentation strings
- Code must not execute on import (use `if __name__ == "__main__":`)

---

## 🚀 Installation

**1. Install the missing `libssl1.1` dependency**
```bash
echo "deb http://security.ubuntu.com/ubuntu focal-security main" | sudo tee /etc/apt/sources.list.d/focal-security.list
sudo apt update
sudo apt install -y libssl1.1
sudo rm /etc/apt/sources.list.d/focal-security.list
sudo apt update
```

**2. Add the MongoDB 4.4 repository and key**
```bash
curl -fsSL https://www.mongodb.org/static/pgp/server-4.4.asc | sudo apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/4.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.4.list
sudo apt update
```

**3. Install MongoDB 4.4**
```bash
sudo apt install -y mongodb-org
```

**4. Prepare required directories and permissions**
```bash
sudo mkdir -p /var/lib/mongodb /var/log/mongodb
sudo chown -R mongodb:mongodb /var/lib/mongodb /var/log/mongodb
```

**5. Start `mongod`**
```bash
sudo -u mongodb /usr/bin/mongod --config /etc/mongod.conf &
```

**6. Install PyMongo**
```bash
pip3 install pymongo==4.8.0
```

**7. Clone the repository**
```bash
git clone https://github.com/GwenP88/holbertonschool-web_back_end.git
cd holbertonschool-web_back_end/NoSQL
```

---

## ▶️ Usage / Execution

**Running a MongoDB shell script:**
```bash
cat 3-all | mongo my_db
```

**Running a Python script:**
```bash
chmod +x 8-all.py
./8-all.py
```

Make sure MongoDB is running before executing any script. You can verify with:
```bash
mongod --version
# Expected: v4.4.xx
```

---

## 📊 Project Progress

<p align="center">
<img src="assets/progress_barre_100.gif" alt="Mandatory tasks progress" width="80%">
</p>

<p align="center">
<sub>Mandatory tasks completion: 100% - Advanced tasks completion: 100%</sub>
</p>
---

## ✨ Features

---

### Task 0 - List all databases
- **Status:** Mandatory ✅
- **Objective:** Write a MongoDB script that lists all databases on the server.
- **Constraint:** Must be a valid MongoDB shell command file.
- **Expected behavior:** Displays all available databases (admin, config, local, logs, etc.).
- **Files:** `0-list_databases`

---

### Task 1 - Create a database
- **Status:** Mandatory ✅
- **Objective:** Write a script that creates or switches to the database `my_db`.
- **Constraint:** The switch must be confirmed in the shell output.
- **Expected behavior:** Outputs `switched to db my_db`.
- **Files:** `1-use_or_create_database`

---

### Task 2 - Insert document
- **Status:** Mandatory ✅
- **Objective:** Insert a document with `name="Holberton school"` into the collection `school`.
- **Constraint:** The database name is passed as a `mongo` command option.
- **Expected behavior:** Returns `WriteResult({ "nInserted" : 1 })`.
- **Files:** `2-insert`

---

### Task 3 - All documents
- **Status:** Mandatory ✅
- **Objective:** List all documents in the collection `school`.
- **Constraint:** The database name is passed as a `mongo` command option.
- **Expected behavior:** Displays all documents with their `_id` and fields.
- **Files:** `3-all`

---

### Task 4 - All matches
- **Status:** Mandatory ✅
- **Objective:** List all documents where `name="Holberton school"` in the collection `school`.
- **Constraint:** The database name is passed as a `mongo` command option.
- **Expected behavior:** Returns only the matching documents.
- **Files:** `4-match`

---

### Task 5 - Count
- **Status:** Mandatory ✅
- **Objective:** Display the number of documents in the collection `school`.
- **Constraint:** The database name is passed as a `mongo` command option.
- **Expected behavior:** Outputs the total document count as an integer.
- **Files:** `5-count`

---

### Task 6 - Update
- **Status:** Mandatory ✅
- **Objective:** Add the attribute `address` with value `"972 Mission street"` to all documents where `name="Holberton school"`.
- **Constraint:** The database name is passed as a `mongo` command option.
- **Expected behavior:** Returns `WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })`.
- **Files:** `6-update`

---

### Task 7 - Delete by match
- **Status:** Mandatory ✅
- **Objective:** Delete all documents where `name="Holberton school"` in the collection `school`.
- **Constraint:** The database name is passed as a `mongo` command option.
- **Expected behavior:** Returns `{ "acknowledged" : true, "deletedCount" : 1 }`.
- **Files:** `7-delete`

---

### Task 8 - List all documents in Python
- **Status:** Mandatory ✅
- **Objective:** Write a Python function `list_all(mongo_collection)` that lists all documents in a collection.
- **Constraint:** Must return an empty list if the collection is empty. Uses a PyMongo collection object.
- **Expected behavior:** Returns and prints all documents with their `_id` and `name`.
- **Files:** `8-all.py`

---

### Task 9 - Insert a document in Python
- **Status:** Mandatory ✅
- **Objective:** Write a Python function `insert_school(mongo_collection, **kwargs)` that inserts a new document using keyword arguments.
- **Constraint:** Must return the new document's `_id`.
- **Expected behavior:** Inserts the document and returns the generated ObjectId.
- **Files:** `9-insert_school.py`

---

### Task 10 - Change school topics
- **Status:** Mandatory ✅
- **Objective:** Write a Python function `update_topics(mongo_collection, name, topics)` that updates all topics of a school document based on its name.
- **Constraint:** `topics` is a list of strings. All matching documents must be updated.
- **Expected behavior:** After calling the function, the school's topics are replaced with the new list.
- **Files:** `10-update_topics.py`

---

### Task 11 - Where can I learn Python?
- **Status:** Mandatory ✅
- **Objective:** Write a Python function `schools_by_topic(mongo_collection, topic)` that returns all schools offering a specific topic.
- **Constraint:** `topic` is a string to search within the `topics` array field.
- **Expected behavior:** Returns a list of school documents that include the given topic.
- **Files:** `11-schools_by_topic.py`

---

### Task 12 - Log stats
- **Status:** Mandatory ✅
- **Objective:** Write a Python script that displays statistics about Nginx logs stored in the `nginx` collection of the `logs` database.
- **Constraint:** Must display total log count, method breakdown (GET, POST, PUT, PATCH, DELETE), and the number of status check requests (`method=GET, path=/status`).
- **Expected behavior:** Outputs a formatted summary matching the exact expected output.
- **Files:** `12-log_stats.py`

---

### Task 13 - Regex filter
- **Status:** Advanced 🔮
- **Objective:** Write a MongoDB script that lists all documents where `name` starts with `Holberton` using a regex filter.
- **Constraint:** The database name is passed as a `mongo` command option.
- **Expected behavior:** Returns all documents with names matching `/^Holberton/`.
- **Files:** `100-find`

---

### Task 14 - Top students
- **Status:** Advanced 🔮**
- **Objective:** Write a Python function `top_students(mongo_collection)` that returns all students sorted by average score, with `averageScore` added to each result.
- **Constraint:** Results must be ordered by average score descending. Uses a MongoDB aggregation pipeline.
- **Expected behavior:** Returns a sorted list of student documents each containing their computed `averageScore`.
- **Files:** `101-students.py`

---

### Task 15 - Log stats - new version
- **Status:** Advanced 🔮
- **Objective:** Improve `12-log_stats.py` by adding the top 10 most frequent IPs in the `nginx` collection, sorted by count.
- **Constraint:** The IPs section must be sorted in descending order of occurrence.
- **Expected behavior:** Same output as task 12, with an additional `IPs:` section displaying the top 10 addresses and their counts.
- **Files:** `102-log_stats.py`

---

## 🤝 Contributions & Acknowledgements

This project was completed as part of the Holberton School curriculum. A special thanks to the Holberton team for introducing me to the document-oriented side of the database world — turns out storing data as flexible JSON-like documents is actually quite satisfying. Who knew that ditching the rigid table structure would feel so liberating?

---

## 👤 Author

- **Gwenaelle PICHOT**
- Holberton School student — Back-End Web Development Track
- Project: [NoSQL](https://github.com/GwenP88/holbertonschool-web_back_end/tree/main/NoSQL)