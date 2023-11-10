document.addEventListener('DOMContentLoaded', () => {
    // Variables
    /*const baseDeDatos = [
        {
            id: 1,
            nombre: "Burrata",
            datos:"Con tomate, salsa pesto y tostada focaccia",
            precio: 40.00,
            imagen: "Imagenes/Burrata.png",
            sub: "ENTRADAS"
        },
        {
            id: 2,
            nombre: "Dedos de Mozzarella",
            datos:"5 unidades de dedos de mozzarella acompañados de miel mostaza",
            precio: 28.00,
            imagen: "Imagenes/Dedos De Mozzarella.png"
        },
        {
            id: 3,
            nombre: "Langostinos Apanados",
            datos:"7 unidades de langostinos apanados, acompañados de mayonesa siracha",
            precio: 43.00,
            imagen: "Imagenes/Langostinos Apanado.png"
        },
        {
            id: 4,
            nombre: "Carpaccio De Salmon",
            datos: "Finas tajadas de salmón fresco con champiñones encurtidos, cebolla, cebollin, alcaparras y sour cream",
            precio: 42.00,
            imagen: "Imagenes/Carpaccio De Salmon.png"
        },
        {
            id: 5,
            nombre:"Berenjenas a la Parmigiana",
            datos: "Apanadas y gratinadas, con salsa napolitana, queso de mozzarella y parmesano",
            precio: 40.00,
            imagen: "Imagenes/Berenjenas a la Parmigiana.png"
        },
        {
            id: 6,
            nombre:"Risotto de Champiñones",
            datos: "Arborio cremoso, caldo casero, champiñones y hierbas aromáticas",
            precio: 40.00,
            imagen: "Imagenes/Risotto.png",
            sub: "PLATOS FUERTES"
        },
        {
            id:7,
            nombre:"Pizza napoletana",
            datos: "Masa delgada, tomates San Marzano y mozzarella de búfala.",
            precio: 31.00,
            imagen: "Imagenes/Pizza Napoletana.png"
        },
        {
            id:8,
            nombre:"Pizza Diavola",
            datos: "Picante pepperoni, tomate vibrante y queso fundido se unen en una masa fina y crujiente.",
            precio: 36.00,
            imagen: "Imagenes/Pizza Diavola.png"
        },
        {
            id:9,
            nombre:"Pasta a la Rueda",
            datos: "Fettuccine terminado en nuestro queso Grana Padano con prosciutto y manzana.",
            precio: 47.00,
            imagen: "Imagenes/Pasta a la Rueda.png"
        },
        {
            id:10,
            nombre:"Pasta al ragú",
            datos: "Fideos artesanales se entrelazan con una salsa ragú rica y sabrosa.",
            precio: 37.00,
            imagen: "Imagenes/Pasta al ragú.png"
        },
        {
            id:11,
            nombre:"Pasta Carbonara",
            datos: "Fettuccine bañado en una salsa sedosa de huevo, panceta crujiente y queso Pecorino.",
            precio: 36.00,
            imagen: "Imagenes/Pasta Carbonara.png"
        },
        {
            id:12,
            nombre:"Cannelloni",
            datos: "Rollitos de pasta gratinados rellenos de ricotta y espinaca o pollo en salsa napolitana.",
            precio: 41.00,
            imagen: "Imagenes/Cannelloni.png"
        },
        {
            id:13,
            nombre:"Rigatoni e Burrata",
            datos: "Pasta corta en salsa de tomate, albahaca fresca, tomates secos y burrata con pipeta de aceite de peperoncino.",
            precio: 49.00,
            imagen: "Imagenes/Rigatoni e Burrata.png",
            sub: "RECOMENDACIÓN DEL CHEF"
        },
        {
            id:14,
            nombre:"Pasta del Oceano",
            datos: "Pasta larga tipo mafaldini, terminada al horno con camarones, calamar, mejillones, queso boconccini, albahaca frita y tomates san marzano con queso gorgonzola.",
            precio: 57.00,
            imagen: "Imagenes/Pasta del Oceano.png"
        },
        {
            id:15,
            nombre:"Tiramisú",
            datos: "Clásico tiramisú italiano de queso mascarpone, café y crema de vainilla.",
            precio: 15.00,
            imagen: "Imagenes/Tiramisú.png",
            sub: "POSTRES"
        },
        {
            id:16,
            nombre:"Pavlova",
            datos: "Trozos de merengue con helado de amarena, crumble de galleta, fresas y crema batida.",
            precio: 15.00,
            imagen:"Imagenes/Pavlova.png"
        },
        {
            id:17,
            nombre:"Profiteroles",
            datos: "5 Repollitas rellenas de helado de vainilla. Acompañados con salsa de chocolate o arequipe.",
            precio: 20.00,
            imagen:"Imagenes/Profiteroles.png"
        },
        {
            id:18,
            nombre:"Torta Philadelphia",
            datos: "Tarta de queso Philadelphia de textura suave, con salsa de chocolate negro, tierra de albahaca, crema chantilly , frutas frescas y salsa de frutos rojos.",
            precio: 20.00,
            imagen:"Imagenes/Torta Philadelphia.png"
        },
        {
            id:19,
            nombre:"Agua Manantial",
            datos: "Agua manantial de 600 ml con gas o sin gas.",
            precio: 6.00,
            imagen:"Imagenes/Agua Manantial.png",
            sub: "BEBIDAS"
        },
        {
            id:20,
            nombre:"Jugo Natural",
            datos: "Jugo natural en agua o en leche",
            precio: 9.00,
            imagen:"Imagenes/Jugo Natural.png"
        },
        {
            id:21,
            nombre:"Coca Cola en Lata",
            datos: "Presentacion de 330 ml.",
            precio: 8.00,
            imagen:"Imagenes/Coca Cola en Lata.png"
        },
        {
            id:22,
            nombre:"Limonada",
            datos: "Limonada natural,de coco o de mango.",
            precio: 8.50,
            imagen:"Imagenes/Limonada.png"
        }
    ];*/

    var carrito = [];
    const divisa = '€';
    const DOMitems = document.querySelector('#items');
    const DOMcarrito = document.querySelector('#carrito');
    const DOMtotal = document.querySelector('#total');
    const DOMbotonVaciar = document.querySelector('#boton-vaciar');
    const DOMbotonMesa = document.querySelector('#boton-mesa');
    const DOMbotonDomicilio = document.querySelector('#boton-domicilio');
    const miLocalStorage = window.localStorage;

    // Funciones

    //Dibujar todos los productos//
    /*function renderizarProductos() {
        baseDeDatosProductos.forEach((info) => {
            // Estructura
            const miNodo = document.createElement('div');
            // Body
            const miNodoCardBody = document.createElement('div');
            // Titulo
            const miNodoTitle = document.createElement('h3');
            miNodoTitle.textContent = info.name;
            // Datos
            const miNodoData = document.createElement('p');
            miNodoData.textContent = info.datos;
            // Imagen
            const miNodoImagen = document.createElement('img');
            miNodoImagen.setAttribute('src', info.imagen);
            // Precio
            const miNodoPrecio = document.createElement('p');
            miNodoPrecio.textContent = `${info.precio}${divisa}`;
            // Boton 
            const miNodoBoton = document.createElement('button');
            miNodoBoton.textContent = '+';
            miNodoBoton.setAttribute('marcador', info.id);
            miNodoBoton.addEventListener('click', anyadirProductoAlCarrito);
            //Subtitulos
            const miNodoSub = document.createElement('h2')
            miNodoSub.textContent = info.sub;
            // Insertar los hijos
            miNodoCardBody.appendChild(miNodoSub);
            miNodoCardBody.appendChild(miNodoImagen);
            miNodoCardBody.appendChild(miNodoTitle);
            miNodoCardBody.appendChild(miNodoData);
            miNodoCardBody.appendChild(miNodoPrecio);
            miNodoCardBody.appendChild(miNodoBoton);

            miNodo.appendChild(miNodoCardBody);
            DOMitems.appendChild(miNodo);
        });
    }*/

    //Añadir productos al carrito
    function anyadirProductoAlCarrito(evento) {
        // Añadir el Nodo al carrito
        carrito.push(evento.target.getAttribute('marcador'))
        // Actualizar el carrito 
        actualizarCarrito();
        // Actualizar el LocalStorage
        guardarCarritoEnLocalStorage();

    }

    //Dibujar todos los productos guardados en el carrito
    function actualizarCarrito() {
        // Vaciar todo el html
        DOMcarrito.textContent = '';
        // Quitar los duplicados
        const carritoSinDuplicados = [...new Set(carrito)];
        // Generarlos Nodos a partir de carrito
        carritoSinDuplicados.forEach((item) => {
            // Obtener el item que se necesita de la variable base de datos de todos los platos
            const miItem = baseDeDatosProductos.filter((itemBaseDatosProductos) => {
                // ¿Coincide el id? Solo puede existir un caso
                return itemBaseDatosProductos.id === parseInt(item);
            });
            // Contar el número de veces que se repite el producto
            const numeroUnidadesItem = carrito.reduce((total, itemId) => {
                // ¿Coincide el id? Incrementar el contador, en caso contrario no
                return itemId === item ? total += 1 : total;
            }, 0);
            // Crear el nodo del item del carrito
            const miNodo = document.createElement('li');
            miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].name} - ${miItem[0].price}${divisa}`;
            // Boton de borrar
            const miBoton = document.createElement('button');
            miBoton.textContent = 'X';
            miBoton.style.marginLeft = '1rem';
            miBoton.dataset.item = item;
            miBoton.addEventListener('click', borrarItemCarrito);
            // Insertar el boton
            miNodo.appendChild(miBoton);
            DOMcarrito.appendChild(miNodo);
        });
       // Calcular el precio total en el HTML
       DOMtotal.textContent = calcularTotal();
    }

    //Borrar un elemento del carrito//
    function borrarItemCarrito(evento) {
        // Obtener el producto ID que hay en el boton pulsado
        const id = evento.target.dataset.item;
        // Borrar todos los productos
        carrito = carrito.filter((carritoId) => {
            return carritoId !== id;
        });
        // Volver a actualizar
        actualizarCarrito();
        // Actualizar el LocalStorage
        guardarCarritoEnLocalStorage();
    }

    //Calcular el precio total teniendo en cuenta la cantidad de cada plato
    function calcularTotal() {
        // Recorrer el array del carrito 
        return carrito.reduce((total, item) => {
            // De cada elemento obtener su precio
            const miItem = baseDeDatosProductos.filter((itemBaseDatos) => {
                return itemBaseDatos.id === parseInt(item);
            });
            // Sumar al total
            return total + miItem[0].price;
        }, 0).toFixed(2);
    }

    //Vaciar el carrito y volver a dibujarlo
    function vaciarCarrito() {
        // Limpiar los productos guardados
        carrito = [];
        // Actualizar los cambios
        actualizarCarrito();
        // Borrar LocalStorage
        localStorage.clear();
    }

    function guardarCarritoEnLocalStorage () {
        miLocalStorage.setItem('carrito', JSON.stringify(carrito));
    }

    function cargarCarritoDeLocalStorage () {
        // ¿Existe un carrito previo guardado en LocalStorage?
        if (miLocalStorage.getItem('carrito') !== null) {
            // Carga la información
            carrito = JSON.parse(miLocalStorage.getItem('carrito'));
        }
    }

    //Mostrar mensaje a la mesa
    function mesa() {
        if(DOMtotal.textContent==0.00){
            swal("Mesa", "Primero debe realizar un pedido antes de enviarlo", "error");
        }else{
            swal("Mesa", "Gracias por realizar el pedido, levante la mano para que uno de nuestros meseros reciba su orden.", "success");
        }
        vaciarCarrito();
        actualizarCarrito();
        localStorage.clear();
    }

    //Enviar domicilio
    function domicilio(event) {
        let pedido=[];
        let productos=[];
        let cantidades=[];
        if(DOMtotal.textContent==0.00){
            event.preventDefault();
            swal("Domicilio", "Primero debe realizar un pedido antes de enviarlo", "error");
        }else{
            for (let i = 0; i < carrito.length; i++) {
                let productoEncontrado = false; 
    
                for (let n = 0; n < productos.length; n++) {
                    if (productos[n] === carrito[i]) {
                        cantidades[n] = cantidades[n] + 1;
                        productoEncontrado = true; 
                        break;
                    }
                }
                if (!productoEncontrado) {
                    productos.push(carrito[i]);
                    cantidades.push(1);
                }
            }
            for(let p = 0; p<productos.length; p++){
                let productillo ={
                    product_id:productos[p],
                    quantity:cantidades[p]
                };
                pedido.push(productillo);
            }
        }
        vaciarCarrito();
        actualizarCarrito();
        miLocalStorage.setItem('pedido', JSON.stringify(pedido));
    }

    // URL de la API
    const url = "http://127.0.0.1:8000/api/products"; 
    const baseDeDatosProductos = [];
    // Realiza una solicitud GET a la API
    fetch(url)
    .then((response) => {
    // Verifica si la solicitud fue exitosa (código de respuesta HTTP 200)
        if (response.status === 200) {
        // Convierte la respuesta JSON en un objeto JavaScript
        return response.json();
        } else {
        // Maneja el error si la solicitud no es exitosa
        alert(`Error al hacer la solicitud. Código de respuesta: ${response.status}`);
        }
    })
    .then((data) => {
        var titulo = "";
        // Obtiene los datos de todos los objetos en la respuesta
        data.forEach((item) => {
        baseDeDatosProductos.push(item);
            // Estructura
            const miNodo = document.createElement('div');
            // Body
            const miNodoCardBody = document.createElement('div');
            // Titulo
            const miNodoTitle = document.createElement('h3');
            miNodoTitle.textContent = item.name;
            // Datos
            const miNodoData = document.createElement('p');
            miNodoData.textContent = item.description;
            // Imagen
            const miNodoImagen = document.createElement('img');
            miNodoImagen.setAttribute('src', item.image);
            // Precio
            const miNodoPrecio = document.createElement('p');
            miNodoPrecio.textContent = `${item.price}${divisa}`;
            // Boton 
            const miNodoBoton = document.createElement('button');
            miNodoBoton.textContent = '+';
            miNodoBoton.setAttribute('marcador', item.id);
            miNodoBoton.addEventListener('click', anyadirProductoAlCarrito);
            //Subtitulos
            if (titulo === "" && item.category === "ENTRADAS"){
                titulo = "ENTRADAS";
                const miNodoSub = document.createElement('h2')
                miNodoSub.textContent = item.category;
                miNodoCardBody.appendChild(miNodoSub);
            }
            if (titulo === "ENTRADAS" && item.category === "PLATOS FUERTES"){
                titulo = "PLATOS FUERTES";
                const miNodoSub = document.createElement('h2')
                miNodoSub.textContent = item.category;
                miNodoCardBody.appendChild(miNodoSub);
            }
            if (titulo === "PLATOS FUERTES" && item.category === "RECOMENDACIÓN DEL CHEF"){
                titulo = "RECOMENDACIÓN DEL CHEF";
                const miNodoSub = document.createElement('h2')
                miNodoSub.textContent = item.category;
                miNodoCardBody.appendChild(miNodoSub);
            }
            if (titulo === "RECOMENDACIÓN DEL CHEF" && item.category === "POSTRES"){
                titulo = "POSTRES";
                const miNodoSub = document.createElement('h2')
                miNodoSub.textContent = item.category;
                miNodoCardBody.appendChild(miNodoSub);
            }
            if (titulo === "POSTRES" && item.category === "BEBIDAS"){
                titulo = "BEBIDAS";
                const miNodoSub = document.createElement('h2')
                miNodoSub.textContent = item.category;
                miNodoCardBody.appendChild(miNodoSub);
            }
            const miNodoEspacio = document.createElement('p');
            // Insertar los hijos
            miNodoCardBody.appendChild(miNodoImagen);
            miNodoCardBody.appendChild(miNodoTitle);
            miNodoCardBody.appendChild(miNodoData);
            miNodoCardBody.appendChild(miNodoPrecio);
            miNodoCardBody.appendChild(miNodoBoton);
            miNodoCardBody.appendChild(miNodoEspacio);

            miNodo.appendChild(miNodoCardBody);
            DOMitems.appendChild(miNodo);
        });
        actualizarCarrito();
    })
    .catch((error) => {
        alert(error);
    });

    // Evento vaciar carrito
    DOMbotonVaciar.addEventListener('click', vaciarCarrito);

    // Evento pedido a mesa
    DOMbotonMesa.addEventListener('click', mesa);

    // Evento pedido a domicilio
    DOMbotonDomicilio.addEventListener('click', domicilio);

    // Inicio
    cargarCarritoDeLocalStorage();
    //actualizarCarrito();
  });