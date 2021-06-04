var cepField = document.querySelector("#app #cepField");
var consultButton = document.querySelector("#app #consultButton");
var content = document.querySelector("#app main");


consultButton.addEventListener("click", run);


function run(event) {
    event.preventDefault(); // Previne que ao clicar no botão, atualize a página.

    var zipCode = cepField.value;

    // Formatando CEP
    zipCode = zipCode.replace(" ", "");
    zipCode = zipCode.replace(".", "");
    zipCode = zipCode.trim();

    content.innerHTML = ""; // Limpa o conteúdo

    axios.get("https://viacep.com.br/ws/" + zipCode + "/json/")
        .then(res => {
            if (res.data.erro) {
                throw new Error("CEP inexistente!");
            }

            createLine(res.data.logradouro);
            createLine(res.data.localidade + "/" + res.data.uf);
            createLine(res.data.bairro);


        })
        .catch(err => {
            createLine(err);
        })

}

function createLine(text) {

    var line = document.createElement("p");
    var text = document.createTextNode(text);

    line.appendChild(text);
    content.appendChild(line);

}