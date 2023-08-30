function demo1() {
  picea.run(
    { user: "demo@zelucash", password: "Zelucash_123" },
    onTransactionCompleted
  );
}

function onTransactionCompleted(tr) {
  var tituloText = document.getElementById("titulo");
  tituloText.innerHTML = "Gracias por utilizar nuestro servicio de Trade-In";

  var textoInfo = document.getElementById("texto-info");
  textoInfo.innerHTML =
    "Guarde el siguiente número de transacción para el procesa de recogida del dispositivo:";

  var elementTransaction = document.getElementById("transaction");
  elementTransaction.innerText = tr.number;

  var startBtn = document.getElementById("boton-start-diagnostics");
  startBtn.style.display = "none";
}
