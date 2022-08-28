
const nota = document.querySelector("#valor");
const resultado = document.querySelector("#resultado");
const botao = document.querySelector("#calcular");


function calcular(){

    console.log("entrou aqui")
    let tamanho = nota
    let lista = [];
    let luidy = 5
    let moura = 9

    console.log(tamanho.value);

    for ( i = 1; i <= tamanho.value; i++ )  {
        console.log("entrou aqui tbm")
        if ((i % moura != 0) && (i%luidy == 0)) {
            let name = 'Luidy';  
            lista.push(name);
        } 
        else if ((i%luidy != 0) && (i % moura == 0 )) 
        {
            let name = 'Moura'; 
            lista.push(name);
        }
        else if ((i % moura == 0)  && (i % luidy == 0)){
            let name = 'LuidyMoura';
            lista.push(name);
        }
        else{
            lista.push(i);
        } 
        
            
    }

    
    console.log(lista);
    return lista;
}


botao.onclick = () => {
    resultado.value = calcular();
}