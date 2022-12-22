class Employee {
    name! : string;
    #id! : number; // private variable
    protected email : string; // protected is available within the class and classes which extend the class
    static #empCount : number = 0;

    constructor(name:string, id:number, email:string){
        this.name = name;
        this.#id = id;
        this.email = email;
        Employee.#empCount += 1;
    };

    get empId() : number {
        return this.#id;
    };

    set empId(id:number){
        this.#id = id;
    }


    getNameWithId() : string {
        return `${this.name} -> ${this.#id}`
    };

    static getEmployeeCount() : number{
        return this.#empCount;
    }

};

class Manager extends Employee {
    
    constructor(name:string, id:number, email:string){
        super(name, id, email);
    }
}


let naruto = new Employee('Uzumaki', 7, 'naruto@konoha.org');
let luffy = new Manager('Luffy', 5, 'luffy@onepiece.org');

console.log(naruto.getNameWithId());



