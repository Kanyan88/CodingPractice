//https://www.hackerrank.com/challenges/grading/problem

function gradingStudents(grades) {
  return grades.map((v) =>
    v % 5 >= 3 && 5 - (v % 5) + v >= 40 ? 5 - (v % 5) + v : v
  );
}
