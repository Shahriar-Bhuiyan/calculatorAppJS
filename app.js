const display1El = document.querySelector('.display-1');
const display2El = document.querySelector('.display-2');  
const tempresultEl = document.querySelector('.temp-result'); 
const numbersEl = document.querySelectorAll(".number");   
const operationEl = document.querySelectorAll('.operation'); 
const equalEl = document.querySelector(".equal");  
const clearEl = document.querySelector(".all-clear"); 
const clearlastEl = document.querySelector(".last-entity-clear");  
 
let dis1Num = ''; 
let dis2Num = ''; 
let result = null; 
let lastOperation = ''; 
let haveDot = false; 
 
numbersEl.forEach(number =>{ 
    number.addEventListener("click",(e)=>{ 
        if(e.target.innerText === "." && !haveDot){ 
            haveDot = true; 
            
        }else if(e.target.innerText === "." && haveDot){ 
            return;
        } 
        dis2Num += e.target.innerText; 
        display2El.innerText = dis2Num; 
         
        
    })
});
 
operationEl.forEach(operation =>{ 
    operation.addEventListener("click",(e)=>{ 
        if(!dis2Num) return;  
        haveDot = false; 
        const operationName = e.currentTarget.innerText; 
        if(dis1Num && dis2Num && lastOperation){ 
            mathOperation();
        }else{ 
            result = parseFloat(dis2Num);
        }  
        lastOperation = operationName;
        clearVar(operationName); 
        console.log(result);
        }) 
})
 
function clearVar(name = ''){ 
    dis1Num += dis2Num+ " " + name + " "; 
    display1El.innerText = dis1Num;  
    display2El.innerText = ''; 
    dis2Num = '';  
    tempresultEl.innerText = result; 

}  
 
function mathOperation(){ 
if(lastOperation === "x"){ 
    result = parseFloat(result) * parseFloat(dis2Num);
}else if(lastOperation === "+"){ 
    result = parseFloat(result) + parseFloat(dis2Num); 
}else if(lastOperation === "-"){ 
    result = parseFloat(result) - parseFloat(dis2Num); 
}else if(lastOperation === "/"){ 
    result = parseFloat(result) / parseFloat(dis2Num); 
}
}  
 
equalEl.addEventListener("click",(e)=>{ 
    // if(!dis1Num || !dis2Num ) return; 
    // haveDot = false; 
    // mathOperation(); 
    // clearVar();   
    // display1El.innerText = result;  
    // display2El.innerText = "0"; 
    // tempresultEl.innerText = '';
    // dis2Num = ""; 
    // dis1Num = "";  
    console.log("hello world");
    
}); 
 
clearEl.addEventListener("click",(e)=>{ 
    display1El.innerText = "0";
    display2El.innerText = "0"; 
    dis1Num = ""; 
    dis2Num = ""; 
    haveDot = false; 
    tempresultEl.innerText = "0"; 
    result = "";
})
 
clearlastEl.addEventListener("click",()=>{ 
    dis2Num = ""; 
    display2El.innerText = "0"
})
 

window.addEventListener("keypress",(e)=>{ 
    if( 
    e.key === "0" || 
    e.key === "1" || 
    e.key === "2" || 
    e.key === "3" || 
    e.key === "4" || 
    e.key === "5" || 
    e.key === "6" || 
    e.key === "7" || 
    e.key === "8" || 
    e.key === "9" || 
    e.key === "." 
    ){ 
        clickButton(e.key)
    }else if( 
          
        e.key === "+" ||
        e.key === "/" || 
     e.key === "%" ||  
     e.key === "-"){ 
     clickOperation(e.key)
    }else if(e.key === "*"){ 
        clickOperation("x" || "X")
    }else if(e.key === "Enter" || e.key === "="){ 
     clickEqual()
    } ; 
    console.log(e.key) 
   
}); 
 
window.addEventListener("keydown",(e)=>{ 
   if(e.keyCode === 46){ 
    clickDelete();
   }
})
 
function clickButton(key){ 
    numbersEl.forEach(button =>{ 
        if(button.innerHTML === key){ 
            button.click(); 
            button.classList.add("hover"); 
            setTimeout(()=>{ 
                button.classList.remove("hover");
            },250)
        }
    })
} 
function clickOperation(key){ 
    operationEl.forEach(button =>{ 
        if(button.innerText === key){ 
            button.click(); 
            button.classList.add("hover"); 
            setTimeout(()=>{ 
                button.classList.remove("hover");
            },250)
        }
    })
} 
function clickEqual(){ 
    equalEl.click();
} 

function clickDelete(){ 
    display1El.innerText = "0";
display2El.innerText = "0"; 
dis1Num = ""; 
dis2Num = ""; 
haveDot = false; 
tempresultEl.innerText = "0"; 
result = "";
}