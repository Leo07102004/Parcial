const miLocalStorage = window.localStorage;
pedidoCompleto = [];

/*const registrarPedido = async (data) => {
    let respuesta;
    respuesta = await fetch ("http://127.0.0.1:8000/api/agregar-pedido",{
        method:"POST",
        body:JSON.stringify(data),
        headers:{"Content-type":"application/json"}
    })
    console.log(respuesta);
}*/

function generarNumeroAleatorioDeDiezDigitos() {
    const min = 1000000000;
    const max = 9999999999; 
    const numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
    return numeroAleatorio;
}

const numeroAleatorio = generarNumeroAleatorioDeDiezDigitos();
// Obtener los elementos input por su ID
const nombre = document.getElementById("Nombre");
const correo = document.getElementById("Correo");
const direccion = document.getElementById("Direccion");
const celular = document.getElementById("Celular");
// Evento click para obtener los valores cuando se presiona el botón
document.getElementById("envio").addEventListener("click", function(event) {
    // Obtener los valores ingresados en los tres campos de entrada
    //event.preventDefault();
    const valorNombre = nombre.value;
    const valorCorreo = correo.value;
    const valorDireccion = direccion.value;
    const valorCelular = celular.value;
    const datosCliente = {
        nombre:valorNombre,
        correo:valorCorreo,
        direccion:valorDireccion,
        celular:valorCelular
    };
    // Estado del pedido
    const estadoDefault = "pendiente";

    if (miLocalStorage.getItem('pedido') !== null) {
        // Carga la información
        pedidoCompleto = JSON.parse(miLocalStorage.getItem('pedido'));
        const pedidito ={
            //id:numeroAleatorio,
            productos:pedidoCompleto,
            cliente:datosCliente,
            estado:estadoDefault
        };
        miLocalStorage.setItem('pedido', JSON.stringify(pedidito));

        const url = "http://127.0.0.1:8000/api/agregar-pedido";
        const datosPedido = JSON.parse(localStorage.getItem("pedido"));
        const formData = new FormData();
        formData.append('Productos', JSON.stringify(datosPedido.productos));
        formData.append('NombreCliente', datosPedido.cliente.nombre);
        formData.append('CorreoCliente', datosPedido.cliente.correo);
        formData.append('DireccionCliente', datosPedido.cliente.direccion);
        formData.append('CelularCliente', datosPedido.cliente.celular);
        formData.append('Estado', datosPedido.estado);

        fetch(url, {
            method: 'POST',
            body: formData,
        })
            .then(response => {
                if (response.ok) {
                    return response.json(); // Procesa la respuesta de la API si la solicitud fue exitosa
                } else {
                    throw new Error('Error en la solicitud HTTP'); // Maneja errores en la solicitud
                }
            })
            .then(data => {
                // Maneja la respuesta de la API si es necesario
                alert('Respuesta de la API:'+ data);
            })
            /*.catch(error => {
                alert('Error al enviar los datos a la API:'+ error);
            });*/
        //registrarPedido({Productos:pedidoCompleto,NombreCliente:datosPedido.cliente.nombre,CorreoCliente:datosPedido.cliente.correo,DireccionCliente:datosPedido.cliente.direccion,CelularCliente:datosPedido.cliente.celular,Estado:datosPedido.estado})
    }
});
