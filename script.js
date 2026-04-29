let ventanaModal = document.getElementById("ventana-modal"),
    textoModal = document.getElementById("texto-modal");

function alertaCompra(event){
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const tel = document.getElementById("tel").value;
    const album = document.getElementById("album").value;

    textoModal.innerHTML = "Estimado: <u>"+name+"</u> su pedido se ha hecho, se enviará la información relacionada al email: <u>"+email+".</u><br>Usted Compró el album: "+album

    ventanaModal.showModal();
}

function cerrarVentana() {
    ventanaModal.close();
}