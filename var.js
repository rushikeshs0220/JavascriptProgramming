<script>
    <p id="demo">this is javascript let info</p>
    /*
    there is no such condition required here that we should declare it  first before using it
    they can be reassigned
    can be redeclared
    */
    var a=10;
    var b=20;
    var x=a+b;
 document.getElementById("demo").innerHTML="the value is" + x;
 //here the result would be the value is 30
 /*
but we can redeclare it in curly brackets and the value can be different
var was used before this newer version
 */
</script>