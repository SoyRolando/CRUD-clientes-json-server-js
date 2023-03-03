import { obtenerCliente, editarCliente } from './API.js';
import { mostrarAlerta, validar } from './funciones.js'

const nombreInput = document.querySelector('#nombre');
const emailInput = document.querySelector('#email');
const telefonoInput = document.querySelector('#telefono');
const empresaInput = document.querySelector('#empresa');
const idInput = document.querySelector('#id');
const formulario = document.querySelector('#formulario');

(function () {
    document.addEventListener('DOMContentLoaded', async () => {

        // Obtener el id en la URL del cliente que se quiere editar
        const parametrosURL = new URLSearchParams(window.location.search);
        const idCliente = parseInt(parametrosURL.get('id'));


        const cliente = await obtenerCliente(idCliente);

        mostrarCliente(cliente);

        formulario.addEventListener('submit', validarCliente)

    })

    function mostrarCliente(cliente) {
        const { nombre, telefono, email, empresa, id } = cliente;

        nombreInput.value = nombre;
        emailInput.value = email;
        telefonoInput.value = telefono;
        empresaInput.value = empresa;
        idInput.value = id;

    }

    function validarCliente(e) {
        e.preventDefault();

        const cliente = {
            nombre: nombreInput.value,
            email: emailInput.value,
            telefono: telefonoInput.value,
            empresa: empresaInput.value,
            id: parseInt(idInput.value)
        }
        if (validar(cliente)) {
            mostrarAlerta('Llene los Campos Correctamente');
            return;
        }
        // Reescribir el objeto
        editarCliente(cliente);
    }



})();