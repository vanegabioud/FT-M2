// Mostrar la Lista

$("#boton").click(() => {
  $.get("http://localhost:5000/amigos", function (data) {
    let lista = jQuery("#lista");
    lista.empty();
    let amigos = data;
    for (let i = 0; i < amigos.length; i++) {
      let amigo = document.createElement("li");
      amigo.innerText = amigos[i].name;
      lista.append(amigo);
    }
  });
});

// Buscar amigo

$("#search").click(() => {
  const span = $("#amigo");
  const input = $("#input");
  span.text("");
  $.get("http://localhost:5000/amigos/" + input.val(), (data) => {
    span.text(data.name);
    input.val("");
  });
});

//Borrar amigo
const inpDetele = document.querySelector("#inputDelete");
const btnDelete = document.querySelector("#delete");
const spanDelete = document.querySelector("#sucess");

btnDelete.addEventListener("click", () => {
  let idAmigo = inpDetele.value;
  fetch(`http//localhost:5000/amigos/${idAmigo}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then(() => {
      spanDelete.innerText = "Amigo borrado exitosamente";
    });
});
