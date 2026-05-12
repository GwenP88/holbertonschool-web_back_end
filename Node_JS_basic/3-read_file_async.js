const fs = require('fs');

function countStudents(path) {
  const promise = new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
        return;
      }
      const lines = data.split('\n');
      const students = lines.slice(1);
      const newTab = students.filter((line) => line.trim());
      console.log(`Number of students: ${newTab.length}`);
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
        console.log(`Number of students in ${group}: ${numberOfStudents}. List: ${listOfName}`);
      });
      resolve();
    });
  });
  return promise;
}

module.exports = countStudents;
