/// <reference path="./Teacher.ts" />
namespace Subjects {
  export class Subject {
    // Use definite assignment (!) so TS knows you'll set this later
    teacher!: Teacher;

    setTeacher(teacher: Teacher) {
      this.teacher = teacher;
    }
  }
}
