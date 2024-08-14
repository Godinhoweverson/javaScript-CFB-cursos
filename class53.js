 
 function myGeeks(){
    const operand1 = document.getElementById("operand1").value
     console.log(operand1);
 }

 const op = [
   (val) => {
     let res = 0;
     for (v of val) {
       res += v;
     }
     return res;
   },
   (val) => {
     let res = 0;
     for (v of val) {
       res *= v;
     }
     return res;
   },
   (val) => {
     for (v of val) {
       console.log(v)
     }

   }
 ];