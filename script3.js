function login() {
    const email = document.getElementById('Usuario').value;
    const password = document.getElementById('Contraseña').value;

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
    .then(response => response.json())
    .then(data => {
        // Procesar la respuesta exitosa
        console.log(data);
        sessionStorage.setItem('token', data.token);
    })
    .catch(error => {
        // Capturar y mostrar errores en la consola
        console.error('Error:', error);
    });
}

function telefonsito() {
    // Configurar la solicitud Fetch 
    const elem = document.getElementById('Celular_cliente');
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
        .then(json => console.log(json)) 
        .catch(error => console.error(error)); 
}