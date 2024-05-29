function pallindrome(string){
    
    let stringlen=string.len;
    let newstring=string.substr(-stringlen);
    let j=stringlen-1;
    let temp=0;
    for(let i=0;i<stringlen/2;i++)
    {
        temp=newstring[i];
        newstring[i]=newstring[j];
        newstring[j]=temp;
        j--;
        
    }
    if(string==newstring)
    {
        console.log("it is a pallindrome");
    }
    else
    {
        console.log("not a pallindrome");
    }
}

console.log(pallindrome("madam"));