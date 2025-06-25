
document.getElementById("entradaValor").addEventListener("change", function() {
    const val = parseFloat(this.value);
    const realStr = val.toExponential(6);  // Notación científica
    const bin = floatToBinary(val);        // Simulación

    document.getElementById("valorBox").textContent = realStr;
    document.getElementById("decimalBox").textContent = val.toFixed(8);
    document.getElementById("binario").innerHTML =
        [...bin].map(b => `<span class='bit-ok'>${b}</span>`).join('');
});

// Simula conversión IEEE 754 de 32 bits
function floatToBinary(f) {
    let buf = new ArrayBuffer(4);
    new Float32Array(buf)[0] = f;
    let intView = new Uint32Array(buf)[0];
    return intView.toString(2).padStart(32, '0');
}
