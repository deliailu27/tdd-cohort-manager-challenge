class cohortManager {
    constructor(){
        this.list=[]
        
        
    }


    addCohort (name){
        const newCohort ={ 
            'name': name,
            'students':this.students,
           
        }
        this.list.push(newCohort)
    }
}


const Cohortmanager = new cohortManager 
Cohortmanager.addCohort ('cohort 1')

console.log (Cohortmanager)