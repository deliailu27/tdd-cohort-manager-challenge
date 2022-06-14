


class Cohort {

    constructor(cohortName){
    this.capacity = 24
    this.students= []
    this.cohortName =cohortName
    }

     addStudent (ID, firstName, lastName, github, email){
        if (this.students.length++ < this.capacity){
        const newStudent = {
            'studentID':ID,
            'first name':firstName,
            'last name':lastName,
            'github username':github,
            'email':email
        }

        this.students.push (newStudent)}
        else return 'exceed max capacity'

    }



}




module.exports = Cohort