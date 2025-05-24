// Interface describing the class methods
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Interface describing the class constructor
interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// Class implementing the interface
class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

// Function to create a student using the constructor interface
function createStudent(
  ctor: StudentClassConstructor,
  firstName: string,
  lastName: string
): StudentClassInterface {
  return new ctor(firstName, lastName);
}

// Example usage
const student = createStudent(StudentClass, 'Unathi', 'Mathokazi');
console.log(student.displayName());        // Output: Unathi
console.log(student.workOnHomework());    // Output: Currently working
// String literal type for Subjects
type Subjects = 'Math' | 'History';

// Function that returns what class is being taught
function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  } else {
    return 'Teaching History';
  }
}

// Example usage
console.log(teachClass('Math'));    // Output: Teaching Math
console.log(teachClass('History')); // Output: Teaching History
