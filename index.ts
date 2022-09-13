let age: number = 46
let firstname: string = "Jiho"
let isTeaching: boolean = true

const classes: string[] = ['js', 'ts']
const numberOfStudent: number[] = [11,22,33]
numberOfStudent.push(age)



enum TaxForms {
    indexTax = "aa",
    ChildCare = "bb",
    Crypto = "cc",
    RichDude = "dd",
}

function findIndex(index:number,arr: number[]): number {
    return arr[index]
}

const log = (msg: any): void => { 
    console.log(msg)
}

const complexObject:any = { 
    name: "Jiho",
    height: "here"
}

interface Human {
    name: string
    email: string
}

interface Teacher extends Human {
    age: number
    weight?: string
}

const complexObject2 : Teacher = { 
    name: "Jiho",
    email: "test@test.com",
    age: 94,
}

function displayTeacher(teacher: Teacher): string {
    return `teacher is ${teacher.age} old`
}

log(displayTeacher)

const postalcode:number|string = "929986"

const WhichTaxForm = TaxForms.Crypto

log(findIndex(1,numberOfStudent))