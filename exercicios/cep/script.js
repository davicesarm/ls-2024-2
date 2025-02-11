async function fetchCep(cep) {
  try {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    if (!response.ok) return null;

    const data = await response.json();
    if (data.erro) return null

    return data
  }
  catch (error) {
    return null                                                               
  }
}

function fillAdress(data) {
  document.getElementById("endereco").value = data.logradouro;
  document.getElementById("bairro").value = data.bairro;
  document.getElementById("estado").value = data.uf;
  document.getElementById("cidade").value = data.localidade;
}

function updateCepInput(cep, label, data, replaceClass) {
  if (!data && cep) {
    label.classList.remove("hidden");
    cepInput.classList.remove(replaceClass);
    cepInput.classList.add("border-red-300");
  } else if (!cep) {
    label.classList.add("hidden");
    cepInput.classList.add(replaceClass);
    cepInput.classList.remove("border-red-300");
  } else {
    label.classList.add("hidden");
    cepInput.classList.add(replaceClass);
    cepInput.classList.remove("border-red-300");
    fillAdress(data);
  }
};

const cepInput = document.getElementById("cep"); 
const label = document.querySelector("label");

let timeout;
cepInput.addEventListener("input", (event) => {
  clearTimeout(timeout);
  timeout = setTimeout(async () => {
    const cep = event.target.value;
    const data = await fetchCep(cep);
    updateCepInput(cep, label, data, "focus:border-neutral-500");
  }, 100);
});

