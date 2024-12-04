function funcaoEmJavascriptParaCalcularAAreaDeUmCirculoDadoORaioUsandoPiRAoQuadrado(
    raioQueSeraDadoPeloUsuario
) {
    /*
    Esta função calcula a área de um círculo com base no raio fornecido pelo usuário.
    A fórmula utilizada é A = π * r², onde A é a área e r é o raio.
    
    Parâmetros:
    - raio: O raio do círculo (número).
    
    Retorna:
    - A área do círculo (número).
    */
    // TODO: refatorar o código e deixar mais descritivo
    PI = Math.PI; // Esse é o PI que será usado para calcular a area do circulo em conjunto do raio que sera dado pelo usuario
    let raioDadoPeloUsuario = raioQueSeraDadoPeloUsuario; // Esse é o raio que foi dado pelo usuario e ser a usado em conjunto do pi para calcular o raio de um circulo
    let aoQuadradoQueSeraUsadoParaCalcularAAreaDoCirculoESeraElevadoEmRaioQueSeraDadoPeloUsuario = 2; // Esse é o quadrado, é o fato que elevara o raio que sera dado pelo usuario e calculara a area de circulo usando o pi também
    let resultadoDoCalculoDaAreaDeUmCirculoFeitoUsandoORaioQueFoiDadoPeloUsuarioEoPi =
        PI *
        raioDadoPeloUsuario **
            aoQuadradoQueSeraUsadoParaCalcularAAreaDoCirculoESeraElevadoEmRaioQueSeraDadoPeloUsuario; // Esse é o resultado do calculo do circulo usando o raio dado pelo usuario o quadrado e o pi
    return resultadoDoCalculoDaAreaDeUmCirculoFeitoUsandoORaioQueFoiDadoPeloUsuarioEoPi; // Esse é o que a funcção retorna
}

console.log(
    funcaoEmJavascriptParaCalcularAAreaDeUmCirculoDadoORaioUsandoPiRAoQuadrado(
        (raioQueSeraDadoPeloUsuario = 10)
    )
);
