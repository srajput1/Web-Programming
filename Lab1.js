console.log("function 1");
function sumOfSquare(num1,num2,num3)
{
    if ((num1) == null || (num2) == null || (num3) == null)
    console.log("Insert an input");
    else if (isNaN(num1) || isNaN(num2) || isNaN(num3))
    console.log("Wrong input. Input should be an numerical");
    else
    {
   
        let x=Math.pow(num1,2);
        let y=Math.pow(num2,2);
        let z=Math.pow(num3,2);
        let answer= x+y+z;
        return answer;      
    }
    
}
console.log("Sum of Squares of the numbers is : "+sumOfSquare(5,3,10));

console.log("Function 2");
function sayHelloTo()
{
    
   if(arguments.length==0)
         console.log("Please Enter values");
   else if(arguments.length==1)
         console.log("Hello  "+arguments[0]);
   else if(arguments.length==2)
         console.log("Hello  "+arguments[0]+""+arguments[1]+" I hope you are having a good day!");
   else if(arguments.length==3)
         console.log("Hello  "+arguments[2]+""+arguments[0]+""+arguments[1]+" I hope you are having a good evening!");
   else
         console.log("Yo have entered More Arguments");
}
sayHelloTo("Phil");
sayHelloTo("PhiL","Barrresi");
sayHelloTo("Phil","Barresi","Mr.");

console.log("Function 3");
function cupsOfCoffee(howManyCups) {
    
        let str = "";
        let x = howManyCups;
        if(x == null)
            console.log ("Insert a valid input");
    
         else if(isNaN(x)||x <= 0)
            console.log ("Invalid value ");

        else {
            while (x > 0) {
                if (x > 2) {
                    let str1 = `\n${x} cups of coffee on the desk! ${x} cups of coffee! \nPick one up, drink the cup, ${x - 1} cups of coffee on the desk!\n`
                    x-=1;
                    str = `${str}${str1}`;
                }
               else if (x == 2) {
                    let str2 = `\n2 cups of coffee on the desk! 2 cups of coffee! \nPick one up, drink the cup, 1 cup of coffee on the desk!\n`;
                    x-=1;
                    str = `${str}\n${str2}`;
                }
                    else if (x == 1) {
                    let str3 = `1 cup of coffee on the desk! 1 cup of coffee! \nPick it up, drink the cup, no more coffee left on the desk!\n`
                    x-=1;
                    str = `${str}\n${str3}`;
                }
            }
            return str;
    
        }
    }
  console.log(" "+cupsOfCoffee(5));
  console.log("Function 4");
  function occurrencesOfSubstring(fullString, subString)
  {
      let count=0;
      let x=0;
      while(x!=-1)
      {
        x=fullString.indexOf(subString,x);
        if(x!=-1)
        {
            count++;
            x+=subString.length;

        }
      }
    console.log("Occurence Of Substring "+subString+" in String "+fullString+" is "+count);
    
  }
  occurrencesOfSubstring("Hellllllo World!!","ll");
 
  console.log("Function 5");
  function randomizeSentences(paragraph)
   {
    var paragraph1 = paragraph.match(/[^\.!\?]+[\.!\?]+/g);
    var paralength = paragraph1.length;

    if (paralength == 0 || paralength == 1|| paragraph.constructor!= String)
        console.log( "Insert a sentence");
    else {
        for (i = 0; i < paralength / 2; i++) {

            var x = Math.floor(Math.random(Date.now()) * paragraph1.length);
          var y = Math.floor(Math.random(Date.now()) * paragraph1.length);

            var temp = paragraph1[x];
            paragraph1[x] = paragraph1[y];
           paragraph1[y] = temp;

        }
        var string1 ="";
        for (i = 0; i < paralength; i++)
            string1 = string1 + paragraph1[i];
        console.log(string1);
    }
}
var paragraph = " Hello, world! I am a paragraph. You can tell that I am a paragraph because there are multiple sentences that are split up by punctuation marks. Grammar can be funny, so I will only put in paragraphs with periods, exclamation marks, and question marks -- no quotations.";
randomizeSentences(paragraph)