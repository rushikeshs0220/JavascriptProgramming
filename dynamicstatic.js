function count(string,substring) {
    let count = 0;
    let len = string.length;
    let sublen = substring.length;
    var j=0;
    
        for(let i = 0; i < len; i++) {
            
                 if(string[i] ===substring[j] )
                 {
                 j++;
                 
                 if(string[i]===substring[sublen-1])
                 {
                     
                     count++;
                     j=0;
                 }
               
                 }
                 
                  
                 else{
                 j=0;
                 }
                 
                
             
               
        }
     
        
        return count;
    

    
}

console.log(count("shshshshdiasdiiasdishshssiasdisaijdshsh hvaueviuv vauueajvjajvshv  jnajefjaejvjaevj shsh hvhahhsh ","sh")); 
