function count(name,) {
    let count = 0;
    let f = "f";
    let t = "t";
    let len = name.length;

    
        for (let i = 0; i < len; i++) {
            if (name[i] == f ){
                
           if(name[i + 1] == t) 
            {
                count++;
            }
            }
            
        }
        return count;
    

    
}

console.log(count("Rushiftsft")); 