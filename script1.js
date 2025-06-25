 // Integer correcto
document.getElementById("entradaValor").addEventListener("change", function() {
    const val = parseInt(this.value);
    let trunc = ((val & 0xFFFF) << 16) >> 16;
    document.getElementById("valorBox").textContent = trunc;
    document.getElementById("binario").textContent = (trunc >>> 0).toString(2).padStart(16, '0');
});
