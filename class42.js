const idades = [15,21,30,17,18,44,12,50]
const maior = idades.filter((v,i, arr) => {
   if(v >= 18){
    return v
   }
})

console.log(maior)