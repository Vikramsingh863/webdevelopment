const a= document.querySelectorAll("button")
string= ""
console.log(a)
Array.from(a).forEach((button)=>{
button.addEventListener('click',function(e){
    
    if(e.target.textContent == '='){
        
        string = eval(string)

        document.getElementById("result").value = string
    }
    else if(e.target.textContent == "C"||e.target.textContent == "CE"){
    
        {string= " "}
        document.getElementById("result").value = string;
    }
    else{
    
    string= string+e.target.textContent 
    document.getElementById("result").value = string;
    }
})
})
