import Producto from "./Producto"


// lista viene del APP línea 20
export default function Main({lista, añadirACarrito}) {
    return (
        <div>
            {lista.map((item, i)=>(
                <Producto key={i} item={item} añadirACarrito={añadirACarrito}/>
            ))}
        </div>
    )
}
