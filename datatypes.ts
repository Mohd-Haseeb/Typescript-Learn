// TS has functionality of Type Inferencing

/*********
@ String Data type
*******/


let first_name : string = 'Haseeb';

let last_name : string = 'Mohd'

console.log(`${first_name} ${last_name}`)
console.log(first_name.length)

/*********
@ Number Data type
*******/

let age:number;

age = 100;
age = 13.8;

let dob:string = '24';

let result = parseInt(dob);


/*********
@ Boolean Data type
*******/

let isValid:boolean = false;

console.log(isValid);


/*********
@ Array Data type
*******/
let names:string[] = [];

let names2:Array<number>;

names2 = [1,2,4]

names2.push(99)

names.push('a')
names.push('b')
names.push('c')

console.log(names)

/*********
@ Enum Data type
*******/

const enum Color  {
        Red,
        Green,
        Blue
};

let c:Color = Color.Red;



/*********
@ Tuple Data type
*******/

let swapNums: [number, number];

function swapNumbers(n1:number, n2:number) : [number, number]{
    return [n2, n1]
};

swapNums = swapNumbers(12,15);


/*********
@ any Data type
*******/

let department : any;

department = 'String';
department = true;







