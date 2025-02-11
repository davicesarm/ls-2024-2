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

function createForm() {
  const fields = {
    endereco: "Endereço",
    numero: "Número",
    bairro: "Bairro",
    cidade: "Cidade",
    estado: "Estado",
  };

  const createInputField = (id, placeholder) => {
    const input = document.createElement("input");
    input.id = id;
    input.placeholder = placeholder;
    input.type = "text";
    input.className =
      "max-w-full border border-solid border-neutral-700 rounded-xs p-2 w-full outline-none focus:border-neutral-500 select-none";
    return input;
  }

  const form = document.createElement("form");
  form.className = "flex flex-col gap-4 w-lg mx-4";

  const cepInputDiv = document.createElement("div");
  cepInputDiv.className = "relative";
  form.appendChild(cepInputDiv);

  const label = document.createElement("label");
  label.className =
    "hidden text-xs text-red-300 font-bold right-3 top-3 absolute text-neutral-200";
  label.htmlFor = "cep";
  label.innerText = "CEP inválido";
  cepInputDiv.appendChild(label);

  const cepInput = createInputField("cep", "CEP");
  cepInputDiv.appendChild(cepInput);

  const updateCepInput = (cep, data, replaceClass) => {
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
  }

  let timeout;
  cepInput.addEventListener("input", (event) => {
    clearTimeout(timeout);
    timeout = setTimeout(async () => {
      const cep = event.target.value;
      const data = await fetchCep(cep);
      updateCepInput(cep, data, "focus:border-neutral-500");
    }, 200);
  });

  Object.entries(fields).forEach(([id, placeholder]) => {
    const input = createInputField(id, placeholder);
    form.appendChild(input);
  });

  return form;
}

document.querySelector("main").appendChild(createForm());
