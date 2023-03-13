function calcularCuotas() {
    // Obtener el valor1 ingresado por el usuario
    var valor = parseFloat(document.getElementById("valor").value);
    var valor1 = valor + 10000;
    // Calcular los intereses
    var interes3 = valor1 * 0.2051097;
    var interes6 = valor1 * 0.3344009;
    var interes12 = valor1 * 0.6369291;
  
    // Calcular los totales y convertirlos a números enteros
    var total3 = Math.round((valor1 + interes3) / 1);
    var total6 = Math.round((valor1 + interes6) / 1);
    var total12 = Math.round((valor1 + interes12) / 1);

    // Calcular las cuotas
    var cuota3 = total3 / 3;
    var cuota6 = total6 / 6;
    var cuota12 = total12 / 12;
  
    // Mostrar los resultados en la página web con formato de moneda y números enteros
    document.getElementById("resultado3").textContent = "3 cuotas de: " + cuota3.toLocaleString('es-AR', {style: 'currency', currency: 'ARS'}) + " (total: " + total3.toLocaleString('es-AR', {style: 'currency', currency: 'ARS'}) + ")";
    document.getElementById("resultado6").textContent = "6 cuotas de: " + cuota6.toLocaleString('es-AR', {style: 'currency', currency: 'ARS'}) + " (total: " + total6.toLocaleString('es-AR', {style: 'currency', currency: 'ARS'}) + ")";
    document.getElementById("resultado12").textContent = "12 cuotas de: " + cuota12.toLocaleString('es-AR', {style: 'currency', currency: 'ARS'}) + " (total: " + total12.toLocaleString('es-AR', {style: 'currency', currency: 'ARS'}) + ")";
  }
  