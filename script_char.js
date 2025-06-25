
document.getElementById("entradaValor").addEventListener("change", function() {
    const input = this.value;
    const char = input.length > 0 ? input[0] : '?';
    const code = char.charCodeAt(0);
    const bin = code.toString(2).padStart(8, '0');

    document.getElementById("valorBox").textContent = `'${char}'`;
    document.getElementById("binario").innerHTML =
        [...bin].map(b => `<span class='bit-ok'>${b}</span>`).join('');
});
