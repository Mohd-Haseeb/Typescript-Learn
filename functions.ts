// GENERIC FUNCTION

function add(num1:number, num2:number, num3? : number) : number {
    return  num3 ? num1 + num2 + num3 : num1 + num2;
};


// ARROW FUNCTION

const sub = (num1:number, num2:number = 10) : number => {
    return num1 - num2;
};

const divide = function(num1:number, num2:number) : number {
    return num1/num2;;
};



const mergeStrings = (employees : string[]) :string => {
    let res : string = '';

    employees.forEach(element => {
        res += element + ' '
    });

    return res;
};

let myAns = mergeStrings(['haseeb','shabrez', 'luffy']);
// console.log(myAns);


// GENERICS

function getItems<Type>(items : Type[]) : Type[] {
    return new Array<Type>().concat(items);
};

let concatNumbers = getItems<number>([1,2,3,4]);

let concatString = getItems<string>(['a', 'b', 'c', 'd']);

console.log(concatNumbers);
console.log(concatString)


