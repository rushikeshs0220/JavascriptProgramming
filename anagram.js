function anagram(firstword,secondword)
{
    let first=0;
    let second=0;
    let firstLen=firstword.length;
    let secondLen=secondword.length;
    let j=0;
    if(firstLen===secondLen)
    {
      for(let i=0;i<firstLen;i++)
      {
        if(firstword[i]===secondword[j])
        {
           j++;
           i=0
           if(secondword[secondLen-1]===firstword[i])
           {
               first++;
           }
        }
        else if(firstLen-1==i)
         {
             if(firstword[firstLen-1]!=secondword[j])
                {
                 console.log("not a anagram");
                }
         }
      }
     
      
        i=0;
        for( j=0;j<secondLen;j++)
      {
        if(firstword[i]===secondword[j])
        {
           i++;
           j=0;
           if(firstword[firstLen-1]===secondword[j])
           {
               second++;
           }
        }
         else if(secondLen-1==j)
         {
             if(firstword[i]!=secondword[secondLen-1])
                {
                 console.log("not a anagram");
                }
         }
       }
      
        
        if(first==1 &&second==1)
        {
            console.log("it is a anagram");
        }
      
      
    }
       
    else{
        console.log("not a anagram");
    }
}