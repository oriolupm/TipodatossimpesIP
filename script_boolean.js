
document.getElementById("entradaValor").addEventListener("change", function() {
    const input = this.value.trim().toLowerCase();
    let value = '--';
    let binario = '00000000';

    if (input === 'true') {
        value = 'TRUE';
        binario = '00000001';
    } else if (input === 'false') {
        value = 'FALSE';
        binario = '00000000';
    }

    document.getElementById("valorBox").textContent = value;
    document.getElementById("binario").innerHTML =
        [...binario].map(b => `<span class='bit-ok'>${b}</span>`).join('');
});
