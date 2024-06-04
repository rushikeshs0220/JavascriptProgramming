function countAlphabets(string){
    for(let i=0;i<string.length;i++)
    {
        let size=0;
        for(let j=0;j<string.length;j++){
            if(string[i]==string[j])
           
            {
               size++;
               
            }
         
        }
           console.log(string[i] + ":" + size);
    }
}
countAlphabets("Javascript");
