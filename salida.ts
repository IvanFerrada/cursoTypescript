//Curso de typerscrip comando para compilar tsc salida.ts -w o --watch

//console.log("hello word");


// Types

// Una vez definida la variable no se puede cambiar el valor a no ser que se convierta  usando el signo de + y ""



var myString ="hello word"
myString = 23 + "";


// asignar tipo de dato (var usuario: string ="juan";)
var miVariable:number = 24;

var miBoolean:boolean = true;

//any acepta cualquier tipo de dato.


var mivar: any = "hello";
mivar = 24;

//document.write(myString);
//document.write(miVariable.toString());

// Arrays en Typescrip

// Espesificar el tipo de dato en un array.  var arreglo: any[] = ["ivan","matias","ferrada"]; o con su tipo de dato.... var numeroArray: number[] = [1,2,3];

var stringArrays: any[] = ["ivan" , "matias" , "ferrada"];
stringArrays = ["ivan",24,false];

var stringArray: string[] = ["ivan","matias","ferrada"];

var numberArray: number[] = [1,2,3];

var bolerArray: boolean[] = [true,false,true];

//console.log(stringArrays);

//console.log(numberArray);

//console.log(bolerArray);

// tuple

var stringTuple: [string,number];

stringTuple =["ivan",24];

//console.log(stringTuple);


// void, undefined, null

let  myVoid: void = undefined;
let  myNull: null = null;
let  myUndefined: undefined = undefined;


// typeof(variable) acepta una variable y devuelve el tipo de variable.

//document.write(typeof(myNull);



// funcions
// en las funciones tambien se tiene que espesificar el tipo de dato en la variable y de ser una suma se coloca en return  el :number tipo de variable y seguido el return.
function getSum ( nm1:number , nm2:number ):number{
    return nm1 + nm2;
}

let mySum = function(nm1: number | string,nm2: number | string):number{
    if(typeof(nm1) === 'string'){
        nm1 = parseInt(nm1);
    }
    if(typeof(nm2) === 'string'){
        nm2 = parseInt(nm2);
    }
    return nm1 + nm2; 
}

function getName(firsName :string, lastName? :string ):string{
    if(lastName == undefined){
        return firsName;
    }
    
    return `${firsName} ${lastName}`;
}

//document.write(getName("ian","curtis"));


function myVoidFunction():void{
    return;
}

// Interfaces

interface iTodo{
    title: string,
    text : string
}

function showTodo(todo: iTodo){
    console.log( `${ todo.title } - ${todo.text}` );

    let myTodo:iTodo = {title:'Eat Dinner', text:'loren'}

    showTodo(myTodo);
    document.write();
}


// Clases

class soldado{
    name: string;
    lastName: string;
    email: string;
    private age: number;
    actividad: boolean;

    constructor(name:string,email:string,age:number){
        this.name = name;
        this.email = email;
        this.age = age;
        this.actividad = this.actividad;

    }

    register(){
    console.log(`${this.name} is registered!`);
    
    }

    showMeAge(){
        return this.age;
    }
    public AgeInYears(){
        return this.age + 'years'
    }

}

let john = new soldado ('john','jhon@gmail.com',21);

console.log(john);


 class Member extends soldado {
     cuotaNumero:string;
     curso:number;
     id:number;
    constructor(id,name,email,age){
        // hereda de componente padre
        super(name,email,age)
        this.id = id;
        this.cuotaNumero = this.cuotaNumero;
        this.curso = this.curso;
    }

        payInvoice(){
            console.log( `${this.name} paide invoice` );

        }       


 }

let gordon = new Member(1,'gordon','gordon@gmail.com',25,'cuatro');
gordon.payInvoice();

document.write();