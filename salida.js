//Curso de typerscrip comando para compilar tsc salida.ts -w o --watch
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//console.log("hello word");
// Types
// Una vez definida la variable no se puede cambiar el valor a no ser que se convierta  usando el signo de + y ""
var myString = "hello word";
myString = 23 + "";
// asignar tipo de dato (var usuario: string ="juan";)
var miVariable = 24;
var miBoolean = true;
//any acepta cualquier tipo de dato.
var mivar = "hello";
mivar = 24;
//document.write(myString);
//document.write(miVariable.toString());
// Arrays en Typescrip
// Espesificar el tipo de dato en un array.  var arreglo: any[] = ["ivan","matias","ferrada"]; o con su tipo de dato.... var numeroArray: number[] = [1,2,3];
var stringArrays = ["ivan", "matias", "ferrada"];
stringArrays = ["ivan", 24, false];
var stringArray = ["ivan", "matias", "ferrada"];
var numberArray = [1, 2, 3];
var bolerArray = [true, false, true];
//console.log(stringArrays);
//console.log(numberArray);
//console.log(bolerArray);
// tuple
var stringTuple;
stringTuple = ["ivan", 24];
//console.log(stringTuple);
// void, undefined, null
var myVoid = undefined;
var myNull = null;
var myUndefined = undefined;
// typeof(variable) acepta una variable y devuelve el tipo de variable.
//document.write(typeof(myNull);
// funcions
// en las funciones tambien se tiene que espesificar el tipo de dato en la variable y de ser una suma se coloca en return  el :number tipo de variable y seguido el return.
function getSum(nm1, nm2) {
    return nm1 + nm2;
}
var mySum = function (nm1, nm2) {
    if (typeof (nm1) === 'string') {
        nm1 = parseInt(nm1);
    }
    if (typeof (nm2) === 'string') {
        nm2 = parseInt(nm2);
    }
    return nm1 + nm2;
};
function getName(firsName, lastName) {
    if (lastName == undefined) {
        return firsName;
    }
    return firsName + " " + lastName;
}
//document.write(getName("ian","curtis"));
function myVoidFunction() {
    return;
}
function showTodo(todo) {
    console.log(todo.title + " - " + todo.text);
    var myTodo = { title: 'Eat Dinner', text: 'loren' };
    showTodo(myTodo);
    document.write();
}
// Clases
var soldado = /** @class */ (function () {
    function soldado(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.actividad = this.actividad;
    }
    soldado.prototype.register = function () {
        console.log(this.name + " is registered!");
    };
    soldado.prototype.showMeAge = function () {
        return this.age;
    };
    soldado.prototype.AgeInYears = function () {
        return this.age + 'years';
    };
    return soldado;
}());
var john = new soldado('john', 'jhon@gmail.com', 21);
console.log(john);
var Member = /** @class */ (function (_super) {
    __extends(Member, _super);
    function Member(id, name, email, age) {
        var _this = 
        // hereda de componente padre
        _super.call(this, name, email, age) || this;
        _this.id = id;
        _this.cuotaNumero = _this.cuotaNumero;
        _this.curso = _this.curso;
        return _this;
    }
    Member.prototype.payInvoice = function () {
        console.log(this.name + " paide invoice");
    };
    return Member;
}(soldado));
var gordon = new Member(1, 'gordon', 'gordon@gmail.com', 25, 'cuatro');
gordon.payInvoice();
document.write();
