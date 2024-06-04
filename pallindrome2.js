function Palindrome(string) {
    const len = string.length;
    for (let i = 0; i < len / 2; i++) {
        if (string[i] !== string[len - 1 - i]) {
            
            console.log("This is not a pallindorme");
            return false;
           

        }
    }
   console.log("This is a pallindrome");
   return true;
   
}


console.log(Palindrome("racecar")); 
console.log(Palindrome("hello"));  