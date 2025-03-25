const sumAll = function(num1,num2) {
    let error = "ERROR";
    let finalSum = 0;
    
    let bigNumber = Math.max(num1,num2);
    let smallNumber = Math.min(num1,num2);

    if ((typeof num1 === "string" ) || (typeof num2 === "string")){
        return error;
    }
    else if ((typeof num1 === "object" ) || (typeof num2 === "object")){
        return error;
    }
    else if ((num1 != Math.floor(num1)) || num2 != Math.floor(num2) ){
        return error;
    }
    else if ((bigNumber >= 0) && (smallNumber >= 0)){
        for (let i = smallNumber; i <= bigNumber; i++) {
            finalSum = finalSum + i;
        }
    }
    else{
         return error;
    }
    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
