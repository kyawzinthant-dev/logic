// var a = 3;

// b = () =>{

//     return console.log(a);
// }

// console.log(b());


// a = 4;
// let b = 2; 
// let c = a * b;
// c.e = 4;
// console.log(c.e);


// function a() {
//     return [this.a,this.b()()];
// }
// a.a = {
//     a : 3,
//     b : function(){
//         var that = this;
//         return function(){
//             return that.a = this.a;
//         }
//     }
// }
// a = a.bind(a.a);
// console.log(a());


// greeting = (name,greet) => {
//     this.greet = greet;
//     var hello = "HELLO!";
//     return function() {return `${this.greet} !! ${hello} ${name}`}
// }
// var newGreeting = greeting("Kyaw","Greeting").bind(undefined);
// console.log(newGreeting())


// b = b - 1;
// var b = !undefined;
// console.log(b);


// var a = {property:3}
// var b = a;
// b.property = 5;
// console.log(a.property*b.property);


// function Car (wheel){
//     this.wheel = wheel;
//     return wheel;
// }
// var c1 = new Car(4);
// var c2 = Car(3);

// console.log(c1.wheel+c2);
// console.log(c1.wheel+c2.wheel);

// a = {
//     b:3,
//     c(){
//        d = () => this.b;
//        console.log(d());
//     }
// }
// a.c();

var a = 6;
function b(){
   c = a;
   c--+a--;
}
b();
console.log(c);