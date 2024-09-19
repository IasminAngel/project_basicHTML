// document.write("Hello World!");

// document.write("<h1>"+document.title+"<h1>");


function inserir_nota() {

    const nota = parseFloat(document.getElementById('nota').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    
    if (nota < 0 || nota2 < 0) {
        document.getElementById('Final').textContent = "Números negativos não são constados, coloque números a partir de 0 !";
        document.getElementById('resultado').textContent = "";
        return; 
    }
    
    const notaFinal = (nota + nota2) / 2;
    const resultadoLabel = document.getElementById('Final');

    resultadoLabel.textContent = notaFinal;

     let resultado;
    if (notaFinal >= 7) {

        resultado = "Aprovado!";

    } else if (notaFinal < 4) {

        resultado = "Sem direito a recuperação!";

    } else {
        resultado = "Reprovado!"
    }


    const resultadoLabel2 = document.getElementById('resultado');
    resultadoLabel2.textContent = resultado;
}

function inserir_ABC() {

    const abc = parseFloat(document.getElementById('notaABC').value);
    const resultadoLabel3 = document.getElementById('resultadoABC');
    
   

    let resultadoABC;
    if (abc <= 10) {

        resultadoABC = "A";

    } else if (notaFinal < 4) {

        resultado = "Sem direito a recuperação!";

    } else {
        resultado = "Reprovado!"
    }

    resultadoLabel3.textContent = abc;
}


