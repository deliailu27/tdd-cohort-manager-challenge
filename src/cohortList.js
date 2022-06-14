const Cohort = require('../src/cohort.js')

class cohortList {
    constructor(){
        this.list = []
    }

    addCohort (cohortName) {
        if (cohortName===undefined){
                return 'Cohort name not defined'
        }
        for (let i = 0; i < this.list.length; i++) {
             if (this.list[i].cohortName === cohortName){
                 return 'Cohort name already exists'
             }
        }

            const newCohort = new Cohort(cohortName)
            this.list.push(newCohort)
            return newCohort
        
    }

    searchCohort (searchCohortName) {
        for (let i = 0; i < this.list.length; i++) {
           if (this.list[i].cohortName === searchCohortName) {
               return this.list[i]
           }
           else return 'Cohort not found'
            
        }
    }

    removeCohort (removeCohort) {
        const cohorttoremove = this.list.find(Cohort => Cohort.cohortName===removeCohort)
        if (!cohorttoremove){ 
            return 'cohort not found'
        }
        this.list.splice(this.list.indexOf(removeCohort),1)
        return this.list
    }

    addStudenttoCohort (cohortName, ID, firstName, lastName, github, email){
       for (let i = 0; i < this.list.length; i++) {
        if (this.list[i].cohortName === cohortName) {
            const toCohort = this.list[i]
            toCohort.addStudent(ID, firstName, lastName, github, email)
            toCohort.students = toCohort.students.filter(function(element){
                return element !==undefined;
            })
            return toCohort.students
        }
        else return 'cohort not found'
     }
       

    }

    removeStudent (cohort,studentName){
        const studentCohort = this.list.find(Cohort => Cohort.cohortName===cohort)
        if (!studentCohort){
            return 'cohort not found'
        }

        const studenttoRemove = studentCohort.students.find(newStudent=>newStudent['first name']===studentName)

       
        if (!studenttoRemove){
            return 'student not found'
        }

        console.log(studentCohort)
        
        studentCohort.students.splice(studentCohort.students.indexOf(studentName),1)
        return studentCohort.students
        
    }

    //searchStudentbyID()

  

}

const list= new cohortList
list.addCohort('test')
list.addStudenttoCohort('test',1,'test','test','test','test')

list.removeStudent('cohort 1','null')

console.log(list)





module.exports = cohortList