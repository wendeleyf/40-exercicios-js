document.querySelector("#btn-somar").addEventListener("click", function(){
  numero1 = document.querySelector("#numero1").value;
  numero2 = document.querySelector("#numero2").value;
  soma = Number(numero1) + Number(numero2)
  document.querySelector("#resultado").value = soma;
})