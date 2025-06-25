 // Longint truncado a 32 bits
document.getElementById("entradaValor").addEventListener("change", function() {
    const val = parseInt(this.value);
    let trunc = val | 0;
    document.getElementById("valorBox").textContent = trunc;
    document.getElementById("binario").textContent = (trunc >>> 0).toString(2).padStart(32, '0');
});
