async function getExercicios() {
  const loading = document.createElement("div");
  loading.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-dasharray="16" stroke-dashoffset="16" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3c4.97 0 9 4.03 9 9"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="16;0"/><animateTransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/></path></svg>
    `;
  document.querySelector("main").appendChild(loading);

  let exercicios;
  try {
    const response = await fetch(
      "https://api.github.com/repos/davicesarm/ls-2024-2/contents/exercicios"
    );
    exercicios = await response.json();
  } catch (error) {
    console.error("Erro ao carregar exercicios");
    return [];
  } finally {
    loading.remove();
  }

  exercicios = filterExercicios(exercicios);
  return exercicios;
}

function filterExercicios(exercicios) {
  return exercicios
    .filter((exercicio) => exercicio.type === "dir")
    .map(
      (exercicio) =>
        `https://raw.githubusercontent.com/davicesarm/ls-2024-2/refs/heads/main/${exercicio.path}/README.md`
    );
}

function filterYaml(readme) {
  const yamlMatch = readme.match(/^---\s*([\s\S]+?)\s*---/);
  let exercicioYaml = {};

  if (yamlMatch) {
    const yamlContent = yamlMatch[1].trim();

    const yamlLines = yamlContent.split("\n").map((line) => line.trim());
    yamlLines.forEach((line) => {
      const [key, ...valueParts] = line.split(":").map((item) => item.trim());

      if (key && valueParts.length > 0) {
        const value = valueParts.join(":").trim();
        exercicioYaml[key] = value;
      }
    });
  }
  return exercicioYaml;
}

function pushExercicios(exercicios) {
  for (const exercicio of exercicios) {
    const htmlContent = document.createElement("div");
    htmlContent.innerHTML = `
            <div class="animate-pulse [animation-duration:1s] bg-neutral-800 border-neutral-700 border rounded p-4 h-28 w-80 flex flex-col justify-between">
                <div></div>
                <div class="flex justify-between">
                    <a class="text-neutral-700 bg-neutral-700 border border-neutral-600 rounded-full px-2">Preview</a>
                    <a class="text-neutral-700 bg-neutral-700 border border-neutral-600 rounded-full px-2">Link do exercicio</a>
                </div>
            </div>
        `;

    document.querySelector("main").appendChild(htmlContent);

    (async () => {
      let readme;
      try {
        const responseReadme = await fetch(exercicio);
        readme = await responseReadme.text();
      } catch (error) {
        console.error("Erro ao carregar readme");
        readme = "";
      }

      const exercicioYaml = filterYaml(readme);
      let nomeExercicio = exercicioYaml.name || "Exercício sem nome";
      let exercicioLink = exercicioYaml.link || "";
      let preview = exercicioYaml.preview || "";

      htmlContent.innerHTML = `
                <div class="bg-neutral-800 border-neutral-700 border rounded p-4 h-28 w-80 flex flex-col justify-between">
                    <h2 class="text-center font-bold text-lg">
                        <a class="hover:underline" href="${preview}" target="_blank">${nomeExercicio}</a>
                    </h2>
                    
                    <div class="flex justify-between">
                        <a class="ease duration-100 bg-neutral-700 border border-neutral-600 hover:shadow-lg hover:border-neutral-500 rounded-full px-2" href="${preview}" target="_blank">Preview</a>
                        <a class="ease duration-100 bg-neutral-700 border border-neutral-600 hover:shadow-lg hover:border-neutral-500 rounded-full px-2" href="${exercicioLink}" target="_blank">Link do exercicio</a>
                    </div>
                </div>
            `;
    })();
  }
}

const exercicios = await getExercicios();
pushExercicios(exercicios);
