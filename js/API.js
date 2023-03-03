const url = 'http://localhost:4000/clientes';

// Guardar un nuevo cliente en el json 
export const nuevoCliente = async cliente => {

    try {
        await fetch(url, {
            method: 'POST',
            body: JSON.stringify(cliente),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        window.location.href = 'index.html';
    } catch (error) {
        console.log(error);
    }
}

// Obtiene todos los clientes
export const obtenerClientes = async () => {
    try {
        const answer = await fetch(url);
        const datos = await answer.json();
        return datos;
    } catch (error) {
        console.log(error)
    }
}

// Eliminar clientes
export const eliminarCliente = async id => {
    try {
        await fetch(`${url}/${id}`, {
            method: 'DELETE'
        })
    } catch (error) {
        console.log(error)
    }
}

// Obtiene un cliente por su id
export const obtenerCliente = async id => {
    try {
        const answer = await fetch(`${url}/${id}`);
        const dato = await answer.json();
        return dato;
    } catch (error) {
        console.log(error);
    }
}

// Actualizar registro
export const editarCliente = async cliente => {
    try {
        await fetch(`${url}/${cliente.id}`, {
            method: 'PUT',
            body: JSON.stringify(cliente),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        window.location.href = 'index.html';
    } catch (error) {
        console.log(error);
    }
}