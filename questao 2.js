
console.log("Chamou JS")

const valor1 = document.querySelector("#valor1");
const valor2 = document.querySelector("#valor2");
const valor3 = document.querySelector("#valor3");
const resultado1 = document.querySelector("#resultado1");
const resultado2 = document.querySelector("#resultado2");
const botao = document.querySelector("#calcular");       


botao.onclick = () => {

    const delta = (((valor2.value * valor2.value) - 4) * (valor1.value * valor3.value));
    console.log(delta);
  
    if (!valor1.value || !valor2.value || !valor3.value) {
     alert("Insira os valores de a, b e c");
    } else if (valor1.value == 0) {
      alert("O valor de a, deve ser diferente de 0");
   } else if (delta < 0) {
      alert("Sem raízes reais");
    } else {
      console.log("entrou aquiiiii")
      resultado1.value = (-valor2.value + Math.sqrt(delta)) / (2 * valor1.value);
      console.log("resultado1")
      resultado2.value = (-valor2.value - Math.sqrt(delta)) / (2 * valor1.value);
      console.log("resultado2")
    }
}