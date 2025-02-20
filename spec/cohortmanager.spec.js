const Cohort = require('../src/cohort.js')
const { addCohort } = require('../src/cohortList.js')

const cohortList = require ('../src/cohortList.js')


describe('cohorts',()=>{
   let list 
    beforeEach(()=>{
        list = new cohortList
    })

    it ('add new cohort',()=>{
        const expected= { 
            capacity: 24, 
            students: [  ], 
            cohortName: 'cohort 1' 
          }
        const result = list.addCohort(expected.cohortName)
        expect (result.cohortName).toEqual(expected.cohortName)

    })

    it('cannot add same cohort name',()=>{
        list.addCohort('cohort 1')
        const result = list.addCohort('cohort 1')
        const expected= 'Cohort name already exists'

        expect(result).toEqual(expected)
    })

    it('cohort not fund',()=>{
        list.addCohort('cohort 1')
        const result= list.searchCohort ('cohort 5')
        const expected ='Cohort not found'

        expect(result).toEqual(expected)
    })

    it('add student to non existing cohort',()=>{
        list.addCohort('cohort 1')

        const result = list.addStudenttoCohort('cohort 5',1,'first name','last name','github','email')
        const expected = 'cohort not found'

        expect(result).toEqual(expected)


    })

    it ('add student to existing cohort',()=>{
        list.addCohort('cohort 1')

        const result=list.addStudenttoCohort('cohort 1',1,'Delia','Liu','deliagithub','delia@email.com')
        const expected = [{ 'studentID': 1, 'first name': 'Delia', 'last name': 'Liu', 'github username': 'deliagithub', 'email': 'delia@email.com' }]
        expect(result).toEqual(expected)
    })

    it('remove cohort',()=>{
        list.addCohort('cohort 1')

        const result=list.removeCohort('cohort 1')
        const expected =[]

        expect(result).toEqual(expected)
    })

    it('remove student cohort not found',()=>{
        list.addCohort('cohort 1')

        const result=list.removeStudent ('cohort 5','Delia')
        const expected ='cohort not found'

        expect(result).toEqual(expected)
    })

    it('remove student by name',()=>{
        list.addCohort('cohort 1')
        list.addStudenttoCohort('cohort 1',1,'Delia','Liu','deliagithub','delia@email.com')
        const expected=[]
        const result = list.removeStudent('cohort 1','Delia')

        expect(result).toEqual(expected)
    })

    it ('remove student not found',()=>{
        list.addCohort('cohort 1')
        list.addStudenttoCohort('cohort 1',2,'John','Doe','johngithub','john@email.com')
        const expected ='student not found'
        const result=list.removeStudent('cohort 1','Delia')

        expect(result).toEqual(expected)
    })

    

    
})