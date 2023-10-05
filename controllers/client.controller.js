import { clientServices } from "../service/client-service.js";

//backticks
const crearNuevaLinea = (nombre, email, id) => {
  const linea = document.createElement("tr");
  const contenido = `
    <td class="td" data-td>
      ${nombre}
    </td>
    <td>${email}</td>
    <td>
      <ul class="table__button-control">
        <li>
          <a
            href="../screens/editar_cliente.html?id=${id}"
            class="simple-button simple-button--edit"
          >
            Editar
          </a>
        </li>
        <li>
          <button class="simple-button simple-button--delete" type="button" id="${id}">
            Eliminar
          </button>
        </li>
      </ul>
    </td>
  `;
  linea.innerHTML = contenido;
  const btn = linea.querySelector("button");
  btn.addEventListener("click", () => {
    Swal.fire({
      title: 'Desea eliminarlo?',
      text: "Esta acción no se puede revertir",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Si, eliminarlo'
    }).then((result) => {
      if (result.isConfirmed) {
        const id = btn.id;
        clientServices
          .eliminarCliente(id)
          .then((respuesta) => {
            console.log(respuesta);
            Swal.fire(
              'Eliminado!',
              'El cliente fue eliminado.',
              'success'
            ).then(() => {
              location.reload();
            });
          })
          .catch((err) => alert("Ocurrió un error"));
      }
    })
  });
  

  return linea;
};

const table = document.querySelector("[data-table]");

clientServices
  .listaClientes()
  .then((data) => {
    data.forEach(({ nombre, email, id }) => {
      const nuevaLinea = crearNuevaLinea(nombre, email, id);
      table.appendChild(nuevaLinea);
    });
  })
  .catch((error) => alert("Ocurrió un error"));
