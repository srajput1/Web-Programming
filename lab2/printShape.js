let TSRshape = exports = module.exports;

TSRshape.triangle= value => 
{
        if (value === null || value === undefined || !Number.isInteger(value)|| value===0) 
         {
                console.log("Please Enter a valid value");
         } 
        else 
        {   
            console.log("The height is: " +value);
            for(let i=1;i<=value;i++)
            {
                 let str="";
                for(let j=i;j<=value;j++)
                {
                    if (j < value)
                    {
                        str +=" ";
                    }
                    else if (j == value)
                    {
                        str +="\/";
                    }
                }
                if (i !== 1) 
                {
                   for(let k=1;k<i;k++)
                    {
                        if (i != value)
                        {
                            str = str+ " " + " ";
                        }
                        else
                        {
                            str = str+ "-" + "-";
                        }
                       
                    }
                }
                str =str + "\\";
                console.log(str);
            } 
        }
    
} 

console.log("\n"); 

TSRshape.square = value => {
    
    if (value < 2 || value === undefined || !Number.isInteger(value)||value===null) {
        console.log("value must be greater than 2");
    } 
    else 
    {
        console.log("The line number is: " +value);
        for(let i=1;i<=value;i++)
        {
            let str = "";
            str =str+ "|";
           for(let j=1;j<=value;j++)
           { 
                if (i == 1 || i == value){
                    str += "-";
                }
                else
                {
                    str +=" ";
                }
            }
            str += "|";
            console.log(str);
          
        }
    }
       
}

console.log("\n"); 


TSRshape.rhombus = value => 
{
    
    let x = value / 2;     
    let y = 0;       
    if (value < 2 || value === undefined || !Number.isInteger(value) || value % 2 != 0) {
        console.log("Enter only multiples of 2");
    } 
    else 
    {   
        console.log(" lines entered is: " +value);
       for(let i=1;i<=value;i++)
        {
           
            let str = "";
            if (i <= value / 2) 
            {
                x--;
                y += 2;
            } 
            else if (i > value / 2+1) 
            {
                x++;
                y -= 2;
            }
                for(let j=1;j<=x;j++)
                {
                    str += " ";
           
                }

            if (i <= value / 2)
            {
                str += "\/";
            }
            else
            {
                str += "\\";
            }
            if (i == 1 || i == value)
            {
                str += "-";
            }
            else
            {
                
               for(let j=1;j<y;j++)
                {
                    str += " ";               
                }
            } 
            if (i <= value / 2)
            {
                str += "\\";
            } 
            else
            {
                str += "\/";
            }
            console.log(str);
        } 
    }
    
}
