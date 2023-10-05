const listaClientes = () =>
  fetch("https://fake-api-doguito-petshop-clientes-js-en-la-web-crud-async.vercel.app/perfil").then((respuesta) => respuesta.json());

const crearCliente = (nombre, email) => {
  return fetch("https://fake-api-doguito-petshop-clientes-js-en-la-web-crud-async.vercel.app/perfil", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nombre, email, id: uuid.v4() }),
  });
};

const eliminarCliente = (id) => {
  return fetch(`https://fake-api-doguito-petshop-clientes-js-en-la-web-crud-async.vercel.app/perfil/${id}`, {
    method: "DELETE",
  });
};


const detalleCliente = (id) => {
  return fetch(`https://fake-api-doguito-petshop-clientes-js-en-la-web-crud-async.vercel.app/perfil/${id}`).then((respuesta) =>
    respuesta.json()
  );
};

const actualizarCliente = (nombre, email, id) => {
  return fetch(`https://fake-api-doguito-petshop-clientes-js-en-la-web-crud-async.vercel.app/perfil/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nombre, email }),
  })
    .then((respuesta) => respuesta)
    .catch((err) => console.log(err));
};

export const clientServices = {
  listaClientes,
  crearCliente,
  eliminarCliente,
  detalleCliente,
  actualizarCliente,
};
