//1 Ouvir o evento de quando o usario por o cep
document.getElementById("cep").addEventListener("blur", (evento) => {
    const elemento = evento.target;
    const cepInformado = elemento.value;

  //2 validar CEP
    if(!(cepInformado.length === 8))
        return;

    //3. Fazer busca no viaCEP
      // 3.1 
    fetch(`https://viacep.com.br/ws/${cepInformado}/json/`)
      .then(response => response.json()) 
      .then(data => {
            //3.2 Processamento da Página
            if(!data.erro){
                document.getElementById("logradouro").value = data.logradouro;
                document.getElementById("bairro").value = data.bairro;
                document.getElementById("cidade").value = data.localidade;
                document.getElementById("estado").value = data.uf;
                document.getElementById("regiao").value = data.regiao;
            }else{

            
                alert("CEP NÂO ENCONTRADO")
            }
      })
      .catch(error => console.error("Erro Ao encontrar o CEP " ,error ));

  })

  const Enderecosalvo = document.getElementById("salvar");

  Enderecosalvo.addEventListener("click", () => {
      const cep = document.getElementById("cep").value;
      const logradouro = document.getElementById("logradouro").value;
      const bairro = document.getElementById("bairro").value;
      const cidade = document.getElementById("cidade").value;
      const estado = document.getElementById("estado").value;
      const regiao = document.getElementById("regiao").value;
      const numero = document.getElementById("numero").value;
  
      // Salvar os dados no localStorage
      localStorage.setItem("cep", cep);
      localStorage.setItem("logradouro", logradouro);
      localStorage.setItem("bairro", bairro);
      localStorage.setItem("cidade", cidade);
      localStorage.setItem("estado", estado);
      localStorage.setItem("regiao", regiao);
      localStorage.setItem("numero", numero);
  });
  
  // 5. Recuperar os dados ao carregar a página
  document.addEventListener('DOMContentLoaded', () => {
      const cepSalvo = localStorage.getItem("cep");
      const logradouroSalvo = localStorage.getItem("logradouro");
      const bairroSalvo = localStorage.getItem("bairro");
      const cidadeSalvo = localStorage.getItem("cidade");
      const estadoSalvo = localStorage.getItem("estado");
      const regiaoSalva = localStorage.getItem("regiao");
      const numeroSalvo = localStorage.getItem("numero");
  
      // Preencher os campos com os dados salvos, se existirem
      if (cepSalvo) {
          document.getElementById("cep").value = cepSalvo;
          document.getElementById("logradouro").value = logradouroSalvo;
          document.getElementById("bairro").value = bairroSalvo;
          document.getElementById("cidade").value = cidadeSalvo;
          document.getElementById("estado").value = estadoSalvo;
          document.getElementById("regiao").value = regiaoSalva;
          document.getElementById("numero").value = numeroSalvo;
      }
  });















fetch('viacep.com.br/ws/${data}/json/')
	.then(response => response.json())
	.then(data => console.log(data))
	.catch(error => console.error('Error:', error));




