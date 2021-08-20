const display1 = document.querySelector(".display-1"); 
const display2 = document.querySelector(".display-2"); 
const tempResult = document.querySelector(".temp-result"); 
const numbers = document.querySelectorAll(".number"); 
const operator = document.querySelectorAll(".operation"); 
const clear = document.querySelector(".all-clear"); 
const clearLast = document.querySelector(".last-entity-clear"); 
const equalBtn = document.querySelector(".equal");  
 
let dis1 = "" 
let dis2 = "" 
let result = null;  
let lastOperation = ""; 
let Dot = false;

 
numbers.forEach((e)=>{ 
 e.addEventListener("click",(num) =>{ 
     if(num.target.innerText === "." && !Dot){ 
          Dot = true; 
         
     }else if(num.target.innerText === "." && Dot){ 
         return; 
     }  
     dis2 += num.target.innerText; 
     display2.innerText = dis2;
 })
}); 
 
// operators for equation 
 
operator.forEach((e)=>{ 
    e.addEventListener("click",(operator)=>{  
          
        if(display1.textContent === "0" && !dis2){ 
            display1.textContent = display2.textContent;   
            
             const operation = operator.currentTarget.innerHTML;
            clearDisplay1(operation); 
            lastOperation = operation; 
            display2.innerHTML = "0";
            
        }  
        if(!dis2)return;
       
        Dot = false;
        const operation = operator.currentTarget.innerText;  
        if(dis1 && dis2 && lastOperation){ 
            mathOperation();
        }else{ 
            result = parseFloat(dis2);
        }  
        lastOperation = operation;
        clearDisplay2(operation); 
        
    })
}); 
 
function clearDisplay2(name = ""){ 
    dis1 += dis2 + " " + name ; 
    display1.innerText = dis1;  
    display2.innerText = ""; 
    dis2 = "" 
    tempResult.innerText = result;
}  
function clearDisplay1(name = ""){  
   display1.innerText = dis2 ; 
    console.log("hello world") ; 
    dis1 += display2.innerHTML + " " + name ; 
    display1.innerText = dis1; 
    dis2 = ""; 

    
}
 
function mathOperation(){ 
    if(lastOperation === "x"){ 
        result = parseFloat(result) * parseFloat(dis2);
    }else if(lastOperation === "+"){ 
        result = parseFloat(result) + parseFloat(dis2); 
    }else if(lastOperation === "-"){ 
        result = parseFloat(result) - parseFloat(dis2); 
    }else if(lastOperation === "/"){ 
        result = parseFloat(result) / parseFloat(dis2); 
    }else if(lastOperation==="%"){ 
        result = (parseFloat(result) * parseFloat(dis2)) / 100;
    }
    }  
     
     
 equalBtn.addEventListener("click",()=>{  
     if(display2.textContent === ""){ 
         display2.innerHTML = result; 
         dis2 = "" 
         dis1 = "" 
         display1.innerHTML = "0"; 
         tempResult.innerHTML = "0"
     } 
    if(!dis1 || !dis2)return;  

     
     Dot = false; 
     mathOperation(); 
     clearDisplay2(); 
    display1.innerText = "0";  
    display2.innerText = result; 
    dis1 = "" ; 
    dis2 = ""; 
    tempResult.innerText = "0"; 
    console.log("hello world");
 }); 
  
 clear.addEventListener("click",()=>{ 
     display1.innerText = "0"; 
     display2.innerText = "0"; 
     dis1 = "" ;
     dis2 = "" ;
     result = "" ;
     Dot = ""; 
     tempResult.innerText = "0";
 })  
  
 clearLast.addEventListener("click",(e)=>{ 
     display2.innerHTML = "0"; 
     dis2 = "";
 })
