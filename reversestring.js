function reversedString(string1,string2)
{
  let reversed ='';
  let string1len=string1.length;
  let string2len=string2.length;
  for(let i=string1len-1;i>=0;i--)
    {
        reversed+=string1[i];
    }
    if(reversed===string2)
        {
            console.log("they both are reverse of each other");
        }
    else{
            console.log("they are not reverse of each other");
    }



}
reversedString("man","nam");