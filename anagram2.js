function anagram(firstword,secondword)
{
    let first=0;
    let second=0;
    let firstlen=firstword.length;
    let secondlen=secondword.length;
    let j=0;
    let temp=0;
    if(firstlen===secondlen)
    {
      for(let i=0;i<firstlen;i++)
      { 
          
          
        if(firstword[i]===secondword[j])
        {
           let t=0;
           
            if((secondlen-1)==j)
           {
               (secondword[secondlen-1]==firstword[i])
           {
               console.log("it is a anagram");
           }
           }

           j++;
          
           temp=firstword[t];
           firstword[t]=firstword[i];
           firstword[i]=temp;
           
           t++;
           i=t;
        }
        else if(i==firstlen-1)
        {   
            if(firstword[firstlen-1]!=secondword[j])
            {
            
            console.log("not a anagram ");
         
            }   
        }
        
    
          
      } 
      
    }       
        
       
    else{
        console.log("not a anagram");
        }
}

console.log(anagram("listen","silent"));

