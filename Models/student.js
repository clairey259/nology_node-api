const db = require("../Config/firebase");

class Student {
  constructor(data) {
    (this.name = data.name),
      (this.age = data.age),
      (this.id = data.id),
      (this.interests = data.interests),
      (this.dateCreated = new Date().toUTCString());
  }

  static findAll() {
    return db
      .collection("students")
      .get()
      .then((res) => {
        console.log(res.docs);
        return res.docs.map((doc) => doc.data());
      })
      .catch("sorry something went wrong");
  }

  static async find(id) {
    const studentsRef = db.collection("students");
    const student = await studentsRef.where('id', '==', parseInt(id)).get();
    if (student.empty) {
      console.log("no matching students");
      return;
    }
   return student.docs.map((doc) => doc.data());
    }

  async save() {
    //this.dateModified = new Date().toUTCString();
    const student = { ...this };
    const res = await db.collection("students").doc().set(student);
  }

  static async destroy(id) {
    await db
      .collection("students")
      .where("id", "==", parseInt(id))
      .get()
      .then((res) => res.forEach((r) => r.ref.delete()));
    return `Deleted a student with the id ${id}`;
  }
}

module.exports = Student;
