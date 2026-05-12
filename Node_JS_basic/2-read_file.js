const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
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
      const firstnameTab = obj[group];
      const numberOfStudents = obj[group].length;
      const listOfName = obj[group].join(', ');
      console.log(`Number of students in ${group}: ${numberOfStudents}. List: ${listOfName}`)
    })
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
