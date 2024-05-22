<script>
    <p id="demo">this is javascript let info</p>
    /*
    they should be declared first before use 
    they can be reassigned 
    cannot be redeclared
    */
    let a=10;
    let b=20;
    let x=a+b;
 document.getElementById("demo").innerHTML="the value is" + x;
 //here the result would be the value is 30
 /*
but we can redeclare it in curly brackets and the value can be different
also it is unhoisted ,that is we have to declare it before using it
 */
</script>