const http = require('http');
const fs = require('fs');

const app = http.createServer((request, response) => {
  const { url } = request;

  if (url === '/') {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end('Hello Holberton School!');
  } else if (url === '/students') {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    const database = process.argv[2];
    fs.readFile(database, 'utf8', (error, data) => {
      if (error) {
        response.end('This is the list of our students\nCannot load the database');
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
      response.end(message);
    });
  }
});

app.listen(1245);

module.exports = app;
