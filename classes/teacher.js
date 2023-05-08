const Person = require('./person');

// Your code here
class Teacher extends Person {
  constructor(firstName, lastName, subject, yearsOfExperience) {
    super(firstName, lastName);
    this.subject = subject;
    this.yearsOfExperience = yearsOfExperience;
  }
  static combinedYearsOfExperience(teachers){
    //Must be an array
    if (!Array.isArray(teachers)) {
      throw Error('combinedYearsOfExperience only takes the array as an argument');
    }

    //All must be instances of Teacher
    for (let teacher of teachers) {
      if (!(teacher instanceof Teacher)) {
        throw Error('All items in the array must be the instances of Teacher');
      }
    }

    //Will get here if the above conditions are true
    return teachers.reduce((sum, teacher) => sum + teacher.yearsOfExperience, 0);
  }
}
/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Teacher;
} catch {
  module.exports = null;
}
