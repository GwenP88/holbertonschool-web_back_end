function getStudentIdsSum(listStudents) {
  return listStudents.reduce((sum, currentStudent) => sum + currentStudent.id, 0);
}

export default getStudentIdsSum;
