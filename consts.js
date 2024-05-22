<script>
    <p id="demo">this is javascript const info</p>
    /*
    they should be declared first before use 
    they cannot be reassigned
    cannot be redeclared
    
    */
    const pi=3.14;
    /*
    but this is not alllowed 
    const pi;
    pi=3.14;

    */
 document.getElementById("demo").innerHTML=  pi;
 //here the result would be the value is 30
 /*
but we can redeclare it in curly brackets and the value can be different
also it is unhoisted ,that is we have to declare it before using it
 */
</script>