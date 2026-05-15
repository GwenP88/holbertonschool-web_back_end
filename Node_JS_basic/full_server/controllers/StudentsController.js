import readDatabase from '../utils';

export default class StudentsController {
  static async getAllStudents(request, response) {
    try {
      const studentsByField = await readDatabase(process.argv[2]);
      let message = ('This is the list of our students');
      Object.keys(studentsByField).sort((a, b) => a.localeCompare(b)).forEach((group) => {
        const numberOfStudents = studentsByField[group].length;
        const listOfName = studentsByField[group].join(', ');
        message += (`\nNumber of students in ${group}: ${numberOfStudents}. List: ${listOfName}`);
      });
      response.status(200).send(message);
    } catch (error) {
      response.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    try {
      const studentsByField = await readDatabase(process.argv[2]);
      const listOfStudent = studentsByField[major].join(', ');
      const message = (`List: ${listOfStudent}`);
      response.status(200).send(message);
    } catch (error) {
      response.status(500).send('Cannot load the database');
    }
  }
}
