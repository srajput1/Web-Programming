(function () {
    
        function palindrome(input) { 
            var input = input.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
            var input = input.replace(/[.,\/#!$%\^&\*;:{}=\-_`'"?~()]/g,"");
            var input = input.replace("[", "");
            var input = input.replace(/[\[\]']+/g,'');
            var input = input.replace(/[\n\r\t]+/g, ' ');
            var input = input.replace(/(\r\n|\n|\r)/g, " ");
            
            var ccount = 0;
            if(input==="") {  
                throw "Must Provide the Input";  
            }   
            if ((input.length) % 2 === 0) {  
                ccount = (input.length) / 2;  
            } else {   
                if (input.length === 1) {  
                    return "Entry is a palindrome.";  
             
                } else {    
                    ccount = (input.length - 1) / 2;  
                }  
            }  
            for (var x = 0; x < ccount; x++) {  
           
                if (input[x] != input.slice(-1-x)[0]) {  
                    return "Given Input is not a Palindrome";  
                 }               

          
    }  
 
    return "Given Input is a Palindrome"; 
    } 



    var staticForm = document.getElementById("static-form");

    if (staticForm) {
        var firstNumberElement = document.getElementById("number1");
        var ulist = document.getElementById("list");
      
        var errorContainer = document.getElementById("error-container");
        var errorTextElement = errorContainer.getElementsByClassName("text-goes-here")[0];

        var resultContainer = document.getElementById("result-container");
        var resultTextElement = resultContainer.getElementsByClassName("text-goes-here")[0];

        
        staticForm.addEventListener("submit", function (event) {
            event.preventDefault();

            try {
                errorContainer.classList.add("hidden");
                resultContainer.classList.add("hidden");

                var firstNumberValue = firstNumberElement.value;
                var stringlist = firstNumberElement.value;

                

                var result = palindrome(firstNumberValue);
                var res = "Given Input is a Palindrome";
                if(result==res){
                resultTextElement.textContent =  ""+ result;
                resultContainer.classList.remove("hidden");} else {errorTextElement.textContent = ""+ result;
                errorContainer.classList.remove("hidden");}
                
                var entry = document.createElement('li');
                if(result==res){
                entry.setAttribute("class", "is-palindrome");} else {entry.setAttribute("class", "not-palindrome");}
                entry.appendChild(document.createTextNode(stringlist));
                ulist.appendChild(entry);
            } 
                catch (e) {
                var message = typeof e === "string" ? e : e.message;
                errorTextElement.textContent = e;
                errorContainer.classList.remove("hidden");
            }
        });
    }


})();
