
function idade(faixaEtaria: any){
    
    if(faixaEtaria <= 21){
      return  "jovem"
    } if(faixaEtaria <= 65){
       return "adulto"
    } if( faixaEtaria >= 66){
       return "Idoso"
    }
       
}

console.log(idade(25))