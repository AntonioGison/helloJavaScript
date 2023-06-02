class School{
  constructor(name,level,numberOfStudents){
    this._name = name;
    this._level = level;
    this._nOS = numberOfStudents;
  }

  get name(){
    return this._name;
  }
  
  get level(){
    return this._level;
  }

  get nOS(){
    return this._nOS;
  }

  //check if is a number
  set snOS(isnum){
   if(Number.isInteger(isnum)){
     return this.nOS = isnum;
   }
    else{
      return 'Invalid input: numberOfStudents must be set to a Number.';
    }
  }
  
  quickFacts(){
    console.log(`${this.name} educates ${this.nOS} OF STUDENTS students at the ${this.level} school level.`);
  }

 static pickSubstituteTeacher(substituteTeachers){
    let rand = Math.floor(Math.random()*substituteTeachers.length);
    return substituteTeachers[rand];
  }
}

class PrimarySchool extends School{
  constructor(name,numberOfStudents,pickupPolicy){
    //note: pass primary as level
    super(name,'primary',numberOfStudents);
   this._pickupPolicy = pickupPolicy;
  }

  get pickupPolicy(){
    return this._pickupPolicy;
  }
}

class HighSchool extends School {
  constructor(name,numberOfStudents,sportsTeam){
    //note: pass primary as level
    super(name,'high',numberOfStudents);
   this._sportsTeam = sportsTeam;
  }

  get sportsTeam(){
    return this._sportsTeam;
  }
}
//create a new instance of primary school
const lorraineHansbury = new PrimarySchool('Lorraine Hansbury',514,'Students must be picked up by a parent, guardian, or a family member over the age of 13.');


console.log(lorraineHansbury.quickFacts());

const randomTeacher = School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);

console.log(randomTeacher);


const alSmith = new HighSchool('Al E. Smith',415,['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);

console.log(alSmith.sportsTeam);




