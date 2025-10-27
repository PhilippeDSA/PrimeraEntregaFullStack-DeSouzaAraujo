import express from "express";
const app = express()

const productos = [
    {
        id: 1,
        nombre: "Auriculares Bluetooth",
        categoria: "Electrónica",
        precio: 24999,
        stock: 12
    },
    {
        id: 2,
        nombre: "Zapatillas Urbanas",
        categoria: "Ropa",
        precio: 45999,
        stock: 8
    },
    {
        id: 3,
        nombre: "Café Molido Premium 500g",
        categoria: "Alimentos",
        precio: 8999,
        stock: 25
    },
    {
        id: 4,
        nombre: "Mouse Inalámbrico",
        categoria: "Electrónica",
        precio: 10999,
        stock: 15
    },
    {
        id: 5,
        nombre: "Remera Oversize",
        categoria: "Ropa",
        precio: 15999,
        stock: 20
    }
];

app.get("/", (req, res) => {
    res.send("Hola , esto es una respuesta desde la api con el path /")
})

app.get("/perfil", (req, res) => {
    res.send("Hola esto es una respuesta desde la api con el path /pe")
})
app.get("/perfil/:userId", (req, res) => {
    const idUser = req.params.userId
    res.send("Consultaste el perfil del usuario con el id:" + idUser)
})
//Endpoint que devuelve la lista de productos
app.get("/product", (req, res) => {
    res.json(productos)
})
//EndPoint que devuelve informacion de un producto especifico
app.get("/product/:productId/", (req, res) => {
    const productId = parseInt(req.params.productId)
    const productFinded = productos.find(prod => prod.id === productId)
    if (!productFinded) { return res.status(404).json({ payload: null, message: "Not Found" }) }
    res.status(200).json({ payload: productFinded })

})

app.listen(8080, () => {
    console.log("Server on port 8080")
})