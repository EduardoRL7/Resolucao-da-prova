
const lado1 = document.querySelector("#lado1");
const lado2 = document.querySelector("#lado2");
const lado3 = document.querySelector("#lado3");
const resultado = document.querySelector("#resultado");
const botao = document.querySelector("#calcular");


botao.onclick = () => {
    if((lado1.value == lado2.value) && (lado2.value == lado3.value) && (lado3.value == lado1.value)){
        resultado.value = "Equilátero"
        
    }else if ((lado1.value == lado2.value) || (lado2.value == lado3.value) || (lado3.value == lado1.value)){
        resultado.value = "Isósceles"
     
    }else {
        resultado.value = "Escaleno"
    }
}

''