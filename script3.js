function login() {
    const email = document.getElementById('usuario').value;
    const password = document.getElementById('password').value;

    // Datos a enviar en la solicitud POST
    const data = {
        email: email,
        password: password
    };

    // Configurar la solicitud Fetch
    const url = "https://jpizza-mlmd-pnt20232-unisabana.onrender.com/api/login";
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + btoa(email+':'+password)
        },
        body: JSON.stringify(data)
    })
    .then((response) => {
        return response.json();
    })
    .then(data => {
        // Procesar la respuesta exitosa
        console.log(data);
        alert(`${data.mensaje}`);
        sessionStorage.setItem('token', data.token);
    })
    .catch(error => {
        // Capturar y mostrar errores en la consola
        console.error('Error:', error);
    });
}

function telefonsito() {
    // Configurar la solicitud Fetch 
    const elem = document.getElementById('celular_cliente');
    const telefonito = elem.value;
    if (!telefonito) { // '', 0, null, undefined // valores truthy , falsy
        alert("Digíte un número primero");
        return '';
    }
    const url =`https://jpizza-mlmd-pnt20232-unisabana.onrender.com/api/telefonsito?CelularCliente=${telefonito}`;
    const token = sessionStorage.getItem('token'); 
    fetch(url, { 
        method: 'GET',  
        headers: { 
        'Authorization': `Bearer ${token}`, 
        } 
    }) 
    .then(response => response.json()) 
    .then(data => {
        console.log(data);
        if (data.error !== undefined){
            alert(`${data.error}`);
        }
        else{
            // Obtén la referencia de la tabla
            const tabla = document.getElementById('tabla');;
            // Elimina todas las filas, excepto la primera (encabezado)
            while (tabla.rows.length > 1) {
                tabla.deleteRow(1);
            }
            if (data[0] === undefined) {
                // Datos vacíos, hacer algo, mostrar mensaje, etc.
                alert('No hay datos para mostrar.');
            } else {
                alert('Cargando info.');
                // Procesar y mostrar los datos en la tabla

                // Itera sobre los pedidos y agrega cada uno a la tabla
                data.forEach(pedido => {
                // Crea una nueva fila
                const fila = tabla.insertRow();
                // Agrega celdas para cada propiedad del pedido
                const propiedades = ['NombreCliente', 'CelularCliente', 'CorreoCliente', 'DireccionCliente', 'Productos', 'Estado'];
                propiedades.forEach(propiedad => {
                const celda = fila.insertCell();
                celda.textContent = pedido[propiedad];
                });
            });
            }
        }
    })
    .catch(error => console.error(error)); 
}

function emailsito() {
    // Configurar la solicitud Fetch 
    const elem = document.getElementById('correo_electronico');
    const emailito = elem.value;
    if (!emailito) { // '', 0, null, undefined // valores truthy , falsy
        alert("Digíte un email primero");
        return '';
    }
    const url =`https://jpizza-mlmd-pnt20232-unisabana.onrender.com/api/emailsito?CorreoCliente=${emailito}`;
    const token = sessionStorage.getItem('token'); 
    fetch(url, { 
        method: 'GET',  
        headers: { 
        'Authorization': `Bearer ${token}`, 
        } 
    }) 
    .then(response => response.json()) 
    .then(data => {
        console.log(data);
        if (data.error !== undefined){
            alert(`${data.error}`);
        }
        else{
            // Obtén la referencia de la tabla
            const tabla = document.getElementById('tabla');;
            // Elimina todas las filas, excepto la primera (encabezado)
            while (tabla.rows.length > 1) {
                tabla.deleteRow(1);
            }
            if (data[0] === undefined) {
                // Datos vacíos, hacer algo, mostrar mensaje, etc.
                alert('No hay datos para mostrar.');
            } else {
                alert('Cargando info.');
                // Procesar y mostrar los datos en la tabla

                // Itera sobre los pedidos y agrega cada uno a la tabla
                data.forEach(pedido => {
                // Crea una nueva fila
                const fila = tabla.insertRow();
                // Agrega celdas para cada propiedad del pedido
                const propiedades = ['NombreCliente', 'CelularCliente', 'CorreoCliente', 'DireccionCliente', 'Productos', 'Estado'];
                propiedades.forEach(propiedad => {
                const celda = fila.insertCell();
                celda.textContent = pedido[propiedad];
                });
            });
            }
        }
    })
    .catch(error => console.error(error)); 
}

function cerrar() {
    sessionStorage.removeItem('token');
    window.location.href = 'index.html';
}