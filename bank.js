//bank system in cs 
//1.chack balance  2. deposide balance   3.widrowal amounce 
let bal = 10000;
let choose = Number(prompt("enter your choice in 1,2,3:    "))
 if (choose===1){
    console.log("your balance is",bal);
 }
 else if (choose===2){
   let deb = Number(prompt("enter your amount"));
   bal = deb += bal ; 
   console.log("your deb seccussful your amount is ", bal );
 }
 
 else if (choose===3){
   let wed = Number(prompt("enter your amount"));
   bal = wed -= bal ; 
   console.log("your wed seccussful your amount is ",bal );
 }
 