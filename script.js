const response = await fetch(
    "https://api.github.com/repos/davicesarmorais/ls-2024-2/contents/exercicios"
);

let exercicios = await response.json();

exercicios = exercicios
    .filter((exercicio) => exercicio.type === "dir")
    .map(
        (exercicio) =>
            `https://raw.githubusercontent.com/davicesarmorais/ls-2024-2/refs/heads/main/${exercicio.path}/README.md`
    );

let htmlContent = "";

for (const exercicio of exercicios) {
    const responseReadme = await fetch(exercicio);

    let readme = await responseReadme.text();

    // Extrair o conteúdo YAML, levando em consideração o início e fim correto
    const yamlMatch = readme.match(/^---\s*([\s\S]+?)\s*---/);
    let exercicioYaml = {};

    if (yamlMatch) {
        const yamlContent = yamlMatch[1].trim();

        const yamlLines = yamlContent.split("\n").map((line) => line.trim());
        yamlLines.forEach((line) => {
            const [key, ...valueParts] = line
                .split(":")
                .map((item) => item.trim());

            if (key && valueParts.length > 0) {
                const value = valueParts.join(":").trim();
                exercicioYaml[key] = value;
            }
        });
    }

    let nomeExercicio = exercicioYaml.name || "Exercício sem nome";
    let exercicioLink = exercicioYaml.link || "";
    let preview = exercicioYaml.preview || "";

    htmlContent += `
        <div class="exercicio">
            <h2><a href="${preview}" target="_blank">${nomeExercicio}</a></h2>
            
            <div class="links">
                <a href="${preview}" target="_blank">Preview</a>
                <a href="${exercicioLink}" target="_blank">Link do exercicio</a>
            </div>
        </div>
    `;
}

document.querySelector("main").innerHTML = htmlContent;
