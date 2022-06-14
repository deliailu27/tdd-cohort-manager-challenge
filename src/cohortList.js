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
        const cohorttoremove = this.list.find(item => item[cohortName]===removeCohorts)
        if (!cohorttoremove){ 
            return 'cohort not found'
        }
        else this.list.splice(this.list.indexOf(removeCohort),1)
    }

    addStudenttoCohort (cohortName, ID, firstName, lastName, github, email){
       for (let i = 0; i < this.list.length; i++) {
        if (this.list[i].cohortName === cohortName) {
            const toCohort = this.list[i]
            toCohort.addStudent(ID, firstName, lastName, github, email)
            return toCohort.students
        }
        else return 'cohort not found'
     }
       

    }

    searchStudentbyName

    

}

const list= new cohortList
list.addCohort('test')
console.log(list)



module.exports = cohortList