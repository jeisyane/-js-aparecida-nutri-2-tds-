var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;
   
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
 
    var tdImc = paciente.querySelector(".info-imc");
    var peso = tdPeso.textContent;
    
    var tdImc = paciente.querySelector(".info-imc");

    
    var altura = tdAltura.textContent;

    var pesoEhValido = true;
    var alturaEhValida = true;

    if (peso <= 0 || peso >= 1000) {
        console.log("Altura inválido!");
        pesoEhvalido = false;
        tdImc.textContent = "Peso inválido!";
    }
        paciente.getElementsByClassName.color = "red"
    if (altura <= 0 || altura >= 3.00) {
        console.log("Altura inválida");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida!";
    }

    if (alturaEhValida && pesoEhValido) {
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    }
}
titulo.addEventListener("click", mostraMensagem)
function mostraMensagem() {
    console.log("Olá eu fui clicado!");
}

 var botaoAdicionar =
document.querySelector("#adicicionar-paciente");
botaoAdicionar.addEventListener("click"),function(Event) 

{
  Event.preventDefault();
     //console.log("oi, clique aqui")
     var form = document.querySelector("#form-adicional");

     var name = form.name.value;
     var peso = form.peso.value;
     var altura = form.altura.value;
     var gordura = form.gordura.value;

     var paciente=ocument.cheateElement("Tr");

     var nameTd =document.createElement("Td");
     var pesoTd =document.createElement("Td");
     var alturaTd =document.createElement("Td");
     var gorduraTd =document.createElement("Td");
     var imcTd =document.createElement("Td");

     nameTd.textContent= nome;
     pesoTd.textContent=peso;
     alturaTd.textContent=altura;
     gorduraTd.textContent=gordura;

     pacienteTr.oppendChild(nomeTd);
     pacienteTr.oppendChild(pesoTd);
     pacienteTr.oppendChild(alturaTd);
     pacienteTr.oppendChild(gorduraTd);

     var tabela = document.querySelector("#tabela-pacientes");
     tabela.oppendChild(pacienteTr);

}

