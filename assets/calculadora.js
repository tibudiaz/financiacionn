function calcularCuotas() {
    // Obtener el valor ingresado por el usuario
    var valor = parseFloat(document.getElementById("valor").value);
  
    // Calcular las cuotas
    var cuota3 = valor / 3;
    var cuota6 = valor / 6;
    var cuota12 = valor / 12;
  
    // Calcular los intereses
    var interes3 = valor * 0.2051097;
    var interes6 = valor * 0.3344009;
    var interes12 = valor * 0.6369291;
  
    // Calcular los totales y convertirlos a números enteros
    var total3 = Math.round((valor + interes3) / 1);
    var total6 = Math.round((valor + interes6) / 1);
    var total12 = Math.round((valor + interes12) / 1);
  
    // Mostrar los resultados en la página web con formato de moneda y números enteros
    document.getElementById("resultado3").textContent = "3 cuotas de: " + cuota3.toLocaleString('es-AR', {style: 'currency', currency: 'ARS'}) + " (total: " + total3.toLocaleString('es-AR', {style: 'currency', currency: 'ARS'}) + ")";
    document.getElementById("resultado6").textContent = "6 cuotas de: " + cuota6.toLocaleString('es-AR', {style: 'currency', currency: 'ARS'}) + " (total: " + total6.toLocaleString('es-AR', {style: 'currency', currency: 'ARS'}) + ")";
    document.getElementById("resultado12").textContent = "12 cuotas de: " + cuota12.toLocaleString('es-AR', {style: 'currency', currency: 'ARS'}) + " (total: " + total12.toLocaleString('es-AR', {style: 'currency', currency: 'ARS'}) + ")";
  }
  