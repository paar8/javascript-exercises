let repeatString = function(string,num) {
    let ans = "";
if (num !== 0 && num > 0) {

    for (let i = 1; i <= num; i++) 
    {
     ans += string;
    };

    return ans;
}

else if (num < 0){
    return "ERROR";
}
 
else return('');

};

// Do not edit below this line
module.exports = repeatString;
