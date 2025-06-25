 // Byte (8 bits sin signo)
document.getElementById("entradaValor").addEventListener("change", function() {
    const val = parseInt(this.value);
    let trunc = val & 0xFF;
    document.getElementById("valorBox").textContent = trunc;
    document.getElementById("binario").textContent = trunc.toString(2).padStart(8, '0');
});
