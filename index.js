function factorial(x){
    if(x == 0)
    return  1;
    else
    return x * factorial(x - 1);
}
function fact(){
    var n = document.getElementById("b1").value;
    if(n == "")
    alert("Enter any postive number")
    else if(n >= 0)
    {      
    const output = factorial(n);
    document.getElementById("result").innerText = output;
}
}