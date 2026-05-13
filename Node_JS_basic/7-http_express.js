const express = require('express');
const fs = require('fs');

const app = express();

const PORT = process.env.PORT || 1245;
const database = process.argv[2];
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});
app.get('/students', (req, res) => {
  fs.readFile(database, 'utf8', (error, data) => {
    if (error) {
      res.send('This is the list of our students\nCannot load the database');
      return;
    }
    const lines = data.split('\n');
    const students = lines.slice(1);
    const newTab = students.filter((line) => line.trim());
    let message = (`This is the list of our students\nNumber of students: ${newTab.length}`);
    const obj = {};
    newTab.forEach((line) => {
      const student = line.split(',');
      const firstname = student[0];
      const field = student[3];
      if (!obj[field]) {
        obj[field] = [];
      }
      obj[field].push(firstname);
    });
    Object.keys(obj).forEach((group) => {
      const numberOfStudents = obj[group].length;
      const listOfName = obj[group].join(', ');
      message += (`\nNumber of students in ${group}: ${numberOfStudents}. List: ${listOfName}`);
    });
    res.send(message);
  });
});

app.listen(PORT);

module.exports = app;
