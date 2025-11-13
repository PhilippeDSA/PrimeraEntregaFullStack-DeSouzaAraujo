const socket = io();

socket.on("productosActualizados", (products) => {
    const list = document.getElementById("productsList");
    list.innerHTML = "";
    products.forEach(p => {
        const li = document.createElement("li");
        li.textContent = `${p.title}-$${p.price}`;

        const btn = document.createElement("button");
        btn.textContent = "Eliminar";
        btn.onclick = () => socket.emit("eliminarProducto", p.id);
        li.appendChild(btn);
        list.appendChild(li);

    });
});

document.getElementById("productoForm").addEventListener("submit", e => {
    e.preventDefault();
    const title = document.getElementById("title").value;
    const price = document.getElementById("price").value;
    const id = Date.now();

    socket.emit("nuevoProducto", { id, title, price });
    e.target.reset();
});