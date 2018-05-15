const print = require("./printShape");

function shape()
{                   
let triangle;
let square;
let rhombus;

console.log("Triangles are: \n");
triangle = print.triangle(1);
triangle = print.triangle(2);
triangle = print.triangle(3);
triangle = print.triangle(4);
triangle = print.triangle(5);
triangle = print.triangle(6);
triangle = print.triangle(7);
triangle = print.triangle(8);
triangle = print.triangle(9);
triangle = print.triangle(10);		


console.log("Squares are: \n");
square = print.square(2);
square = print.square(3);
square = print.square(4);
square = print.square(5);
square = print.square(6);
square = print.square(7);
square = print.square(8);
square = print.square(9);
square = print.square(10);		


console.log("Rhombusbuses are: \n ");                                                                                                                                                             
rhombus = print.rhombus(2);
rhombus = print.rhombus(4);
rhombus = print.rhombus(6);
rhombus = print.rhombus(8);
rhombus = print.rhombus(10);
rhombus = print.rhombus(12);
rhombus = print.rhombus(14);
rhombus = print.rhombus(16);
rhombus = print.rhombus(18);
rhombus = print.rhombus(20);		 	
} 
shape();

