class Person {
    #name
    #email
    #id
    constructor(name, email, id){
        this.email = email;
        this.id = id;
        this.#name = name;
    }

    set email(email) {
        if (email.includes("@")) {
        this.#email = email;
        } else {
        throw new Error("Invalid Email");
        }
    }

    set id(id) {
    if (id > 0) {
      this.#id = id;
    } else {
      throw new Error("Invalid Id");
    }
  }

  get email(){
    return this.#email;
  }

  get name(){
    return this.#name;
  }

  get id(){
    return this.#id;
  }

  preform() {
    console.log("General Task");
  }
 
}

class Principal extends Person {
  constructor(name, email, id) {
    super(name, email, id);
    this.users = [];
  }
 
  addUser(user) {
    this.users.push(user);
    console.log(`Admin ${this.name} added ${user.name}`);
  }
 
  removeUser(userId) {
    this.users = this.users.filter((user) => {
      user.id !== userId;
    });
    console.log(`Admin ${this.name} remove user with id ${userId}`);
  }
 
  listUsers() {
    this.users.forEach((user) => {
      console.log(`- user name ${user.name}`);
    });
  }
  perform() {
    console.log(`principal managing users`);
  }
}


class Teacher extends Person{
    constructor(name, email, id, subject) {
    super(name, email, id);
    this.subject = subject;
    this.students = [];
  }

  grade(student, grade){
    this.students.push({student: student.name , grade: grade });
  }

  listStudents(){
    console.log(this.students);
  }

  preform(){
    console.log("teacher is grading students");
    
  }

}

class Student extends Person{
    constructor(name, email, id, subject) {
    super(name, email, id);
    this.subjects = [];
  }

  enroll(subject){
    this.subjects.push(subject);
  }

  listSubjects(){
    console.log(this.subjects);
    
  }

  preform(){
    console.log("student is enrolling in class");
    
  }
}

const principal = new Principal("Dr. Smith", "smith@school.edu", 1);
const teacher = new Teacher("Ms. Johnson", "johnson@school.edu", 2, "Math");
const student = new Student("Alice", "alice@student.edu", 3);


principal.addUser(teacher);
principal.addUser(student);


teacher.grade(student, "A");

student.enroll("Math");
student.enroll("Science");

const members = [principal, teacher, student];
members.forEach(member => member.preform());

principal.listUsers();
teacher.listStudents();
student.listSubjects();