
const nota = document.querySelector("#nota");
const resultado = document.querySelector("#resultado");
const botao = document.querySelector("#calcular");


botao.onclick = () => {
    if(nota.value < 38){
        resultado.value = "Reprovado"
    }else if(nota.value >= 38){ 
        if(((Math.ceil(nota.value/5) * 5) - nota.value) < 3){
            resultado.value = Math.ceil(nota.value/5) * 5 ;
        }else{
            console.log('entrou');
            resultado.value = nota.value;
        }       
    }
}