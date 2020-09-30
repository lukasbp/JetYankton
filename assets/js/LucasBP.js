function session(){
    sessionStorage.setItem("nome", nome.value);
    sessionStorage.setItem("email", email.value);    
    sessionStorage.setItem("telefone", tell.value);
    sessionStorage.setItem("assunto", ass.value);
    sessionStorage.setItem("mensagem", msg.value);
    
    alert("Itens adicionado.");
    /**/
}

  function mostraDados(){
        var nomeCapturado = document.getElementById('nomeid').value;
        document.getElementById('nomeDigitado').innerHTML = nomeCapturado;
        var emailCapturado = document.getElementById('emailid').value;
        document.getElementById('emailDigitado').innerHTML = emailCapturado;
        var foneCapturado = document.getElementById('foneid').value;
        document.getElementById('foneDigitado').innerHTML = foneCapturado;
        var assuntoCapturado = document.getElementById('assuntoid').value;
        document.getElementById('assuntoDigitado').innerHTML = assuntoCapturado;
        var msgCapturado = document.getElementById('msgid').value;
        document.getElementById('msgDigitado').innerHTML = msgCapturado;  
    } 
  $('.ui.form')
    .form({
      fields: {
        nomeid: {
          identifier: 'nomeid',
          rules: [
          {
            type   : 'empty',
            prompt : 'Por favor digite seu nome'
          }
          ]
        },
        foneid: {
          identifier: 'foneid',
          rules: [
          {
            type   : 'minLength[9]',
            prompt : 'Digite um telefone valido'
          }
          ]
        },
        emailid: {
          identifier: 'emailid',
          rules: [
          {
            type   : 'email',
            prompt : 'Por favor digite um endereco de email valido'
          }
          ]
        },
        assuntoid: {
          identifier: 'assuntoid',
          rules: [
          {
            type   : 'empty',
            prompt : 'Por favor digite o assunto'
          }
          ]
        },
        msgid: {
          identifier: 'msgid',
          rules: [
          {
              type   : 'empty',
              prompt : 'A mensagem esta vazia'
          }
          ]
        },
      }
    })
    ;
    function adicionar(){
        sessionStorage.setItem("Nome", nomeid.value);
        sessionStorage.setItem("E-mail", emailid.value);
        sessionStorage.setItem("Telefone", foneid.value); 
        sessionStorage.setItem("Assunto", assuntoid.value);
        sessionStorage.setItem("Mensagem", msgid.value);
    
        alert("Valores salvos no sessionStorage");
    }
