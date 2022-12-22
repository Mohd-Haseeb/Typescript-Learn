interface User {
    name : string;
    age? : number;
    id : number;
    email : string
};

let user:User = {
    name : 'haseeb',
    id : 1092,
    email : 'abc@def.ghi'
};

interface Student extends User {
    subjects : string[]
};

let h :Student = {
    name : 'haseeb',
    id : 1092,
    email : 'abc@def.ghi',
    subjects : ['a', 'b']
}

interface Login {
    login() : User
};


