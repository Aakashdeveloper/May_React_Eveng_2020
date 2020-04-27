///////Data Types///////////
String ="ddff"  'fee345'  '423534' "true"
Number= 545  43464  3464.4645
Boolean true/false

Es5/ Es6/ Es7 
Ecma Script

///////
var we can redeclare and reassign
let we cannot redeclare but can reassign
const we cannot redeclare but nor reassign


var a = 10
undefined
typeof(a)
"number"
var b = "10"
undefined
typeof(b)
"string"
var b = 10.09097
undefined
typeof(b)
"number"
var b = true
undefined
typeof(b)
"boolean"


var a = 10
var b = 20
/////
var a;
var b; //declare
a=10  //assignment
b=20
var a = 10
undefined
a
10
var a= 20
undefined
> a
20
> a = 30
30
> a
30
> 


> let b = 20
undefined
> b
20
> let b = 21
Thrown:
SyntaxError: Identifier 'b' has already been declared
> b = 21
21
> b
21

const d = 10
undefined
> const d = 11
Thrown:
SyntaxError: Identifier 'd' has already been declared
> d = 11
Thrown:
TypeError: Assignment to constant variable.


var a = 10
var b = 20
a+b
30

//es6
function add(a,b){
    return a+b
}

add(1,2)
3

//es6
let add = (a,b) => {return a+b}
add(1,2)
3

/////Object/////

var movies = {
    "name":"Avenger",
    "rating":4.5
}

undefined
movies
{name: "Avenger", rating: 4.5}
movies.name
"Avenger"
movies.rating        
4.5
movies['name']
"Avenger"
movies['rating']
4.5

/////String Literals/////
var movies = {
    "name":"Avenger",
    "rating":4.5
}

//Es5
"my movie name is "+movies.name+" and rating is "+movies.rating

//Es6
`my movie name is ${movies.name} and rating is ${movies.rating}`


//////Es5////
function language(name,country){
    this.name = name;
    this.country=country;
}

var hindi = new language('Hindi','India')

/////es6///
class geo{
    constructor(lat,long){
        this.lat = lat;
        this.long=long;
    }
}


class language extends geo{
    constructor(name,country,lat,long){
        super(lat,long)
        this.name = name;
        this.country=country;
    }
}

var English = new language('English','UK')


///
Map & Filter
IndexOf


function add(a,b){
    return a+b
}

const add = (a,b) => { return a+b} 