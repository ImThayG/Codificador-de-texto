let txtarea = document.querySelector("#texto");
let saida = document.querySelector(".output");

function criptografar(){
    let texto = txtarea.value;

    let sub = texto.replace("i", "imes").replace("a", "ai").replace("o", "ober").replace("u", "ufat")
    saida.innerHTML = '<textarea readonly id="textoCopy">' + sub + '</textarea>' + ' <input type="button" value="Copiar" id="copiar" onclick="copiar()">'
   
};

function descriptografar(){
    let texto = txtarea.value;
    let descripto = texto.replace("imes", "i").replace("ai", "a").replace("ober", "o").replace("ufat", "u")

    saida.innerHTML = '<textarea readonly id="textoCopy">' + descripto + '</textarea>' + ' <input type="button" value="Copiar" id="copiar" onclick="copiar()">'
}

function copiar(){
    var textoCop = document.getElementById('textoCopy');

  if(textoCop.value.length == ''){
    alert("Não há texto para copiar.")
  }else{
    textoCop.select();
    document.execCommand('copy');
    alert("Texto copiado.");}
   
}
