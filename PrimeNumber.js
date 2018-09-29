
    alert("Prime Time!");
   
    var numArray = [];

    var primeArray = [];

    var compositeArray= [];

    //var alphabet = { "1" :"a","2":"b","3":"c","4":"d","5":"e","6":"f","7":"g","8":"h","9":"i","10":"j","11":"k","12":"l","13":"m",14:"n",15:"o","p","q","r","s","t","u","v","w","x","y","z"};

    function sortPrimeNumbers(){
        alert("Sorting Prime Numbers");
        var i;
        for(i=0; i < numArray.length; i++){

        switch (numArray[i])
        {
            case 0:
            case 1:
            break;
            default:
                if(isPrime(numArray[i])){
                    primeArray[primeArray.length]=numArray[i];
                }else{
                    compositeArray[compositeArray.length]=numArray[i];
                }
            break;
        }
        }
        var j; 
        for (j = 0; j < primeArray.length; j++){
            document.getElementById("output1").innerHTML += "<li>"+ primeArray[j] +"</li>";
        }
        var k;
        for (k = 0; k < compositeArray.length; k++){
            document.getElementById("output3").innerHTML += "<li>"+ compositeArray[k] +"</li>";
        }
    }

    function createNumberList(highestNumber){
        var i;
        for (i = 0; i <= highestNumber; i++)
        {
            addToArray(i,numArray);
            document.getElementById("output2").innerHTML += "<li>"+ numArray[i] +"</li>";
        }
        
    }

    function addToArray(i,theArray)
    {
        theArray[i] = i;
    }

    function isPrime(num){
        var numDivides = 0;

        if (num > 1){
           // alert("the number is: " + num);
           console.log("the number is: " + num);
            var i;
            for (i = 1; i <= num; i++){
              //alert(num  + "%" + i + "=" + num % i);
              //console.log(num  + "%" + i + "=" + num % i);
                if (num % i == 0){
                    numDivides++;
                    //alert("Number of divides: " + numDivides);
                    console.log("Number of divides: " + numDivides);
                }
            }  
            console.log("The Final Number of Divides: " + numDivides);
            if (numDivides > 2 ){                
                //alert(num + " is a composite number");
                console.log(num + " is a composite number");
                return false;
            }else if (numDivides = 2) {
                //alert(num + " is a prime number");
                console.log(num + " is a prime number");
                return true;
            }
        }
    }





/*
function isPrime(num){
    var numDivides = 0;
    for (var i = 0; i < num; i++){
       if (num % i == 0){
            numDivides++;
       }
       if (numDivides > 2 ){
           addToArray(num,primeArray);
           return true;
       }
    }
    if (numDivides < 3){
        addToArray(num,primeArray);
        return false;
    }
}
*/
