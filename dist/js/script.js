function assignValues(){
    var inputEmail= document.getElementById("email");
    localStorage.setItem("email", inputEmail.value);
  //  console.log(inputEmail.value); // testando 
  alert('Inscrição realiza com sucesso!');
}