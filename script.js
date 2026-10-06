function CparaF() {
    const temperatura = Number(document.getElementById("temperatura").value);

    if (isNaN(temperatura)) {
        document.getElementById("resultado").textContent =
            "Digite uma temperatura.";
        return;
    }

    const resultado = (temperatura * 9 / 5) + 32;

    atualizarFundo(temperatura);

    document.getElementById("resultado").textContent =
        `${temperatura} °C = ${resultado.toFixed(2)} °F`;
}

function FparaC() {
    const temperatura = Number(document.getElementById("temperatura").value);

    if (isNaN(temperatura)) {
        document.getElementById("resultado").textContent =
            "Digite uma temperatura.";
        return;
    }

    const resultado = (temperatura - 32) * 5 / 9;

    atualizarFundo(resultado);

    document.getElementById("resultado").textContent =
        `${temperatura} °F = ${resultado.toFixed(2)} °C`;
}

function atualizarFundo(temperaturaC) {
    if (temperaturaC <= 0) {
        document.body.style.backgroundImage = 'url("background/gelado.png")';
    } else if (temperaturaC >= 100) {
        document.body.style.backgroundImage = 'url("background/quente.png")';
    } else {
        document.body.style.backgroundImage = 'url("background/morno.png")';
    }
}
