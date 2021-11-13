export default function Producto({item, añadirACarrito}) {

    const {id, nombre, descripcion, precio, imagen} = item;

    const ejecutarCarrito = () => {
        let objetoCarrito = {

            id,
            nombre,
            precio,
        };

        añadirACarrito(objetoCarrito)
    };

    return (
        <div className="producto">
            <img className="img-top" src={imagen} alt={nombre}/>
            <div className="text-bottom">
                <h4>{nombre}</h4>
                <p>{descripcion}</p>
                <div className="prod-info">
                    <span>{precio}</span>
                    <button className="btn-agregar"onClick={ejecutarCarrito}>
                        Agregar
                    </button>
                </div>
            </div>
        </div>
    )
}
