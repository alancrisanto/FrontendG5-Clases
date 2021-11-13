// En hojas de estilo se debe poner la extensión
// OJO: Los estilos que yo importo no afectan solamente al componente en el que lo estoy importando
// afecta a toda la aplicación
import "./CSS/estilos.css"

import { useState } from "react"

//import NombreFunción from "ruta/Nombre_Archivo"

import Header from "./components/Header"
import NavSide from "./components/NavSide"
import Main from "./components/Main"

import { listaPlatillos } from "./utilis/data"

export default function App() {

    const [carrito, setCarrito] = useState([]);

    const añadirACarrito = (objPlatillo) =>{
        
        // primero preguntamos si ya existe
        // findIndex() : -1 no existe, 0 a + si existe
        const existe = carrito.findIndex((plato) => plato.id === objPlatillo.id);

        if (existe === -1) {
            //  si no existe, lo añado con la cantidad base de 1
            setCarrito([...carrito, {...objPlatillo, cantidad: 1}]);
        } else{
            // Si existe hay que modificar el carrito
            let carritoTmp = [...carrito];
            carritoTmp[existe].cantidad += 1;
            setCarrito(carritoTmp);
        }

        
    };

    return (
        <div className="contenedor">
            <div className="aplicacion">
                <Header/>
                <div className="principal">
                    <NavSide/>
                     {/* <Componente nombre_props={valor_props} */}
                    <Main lista={listaPlatillos}
                    añadirACarrito={añadirACarrito}
                    />
                </div>
            </div>
            <div className="boleta">
                <table>
                    <thead>
                        <tr>
                            <th>Plato</th>
                            <th>P. Unit</th>
                            <th>Cant</th>
                            <th>SubTotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {carrito.map((plato, i) => (
                            <tr key={i}>
                                <td>{plato.nombre}</td>
                                <td>S/ {plato.precio}</td>
                                <td>{plato.cantidad}</td>
                                <td>{plato.cantidad * plato.precio}</td>
                            </tr>
                        ))}

                        <tr>
                            <td colSpan="3">Total</td>
                            <td></td>{carrito.reduce((total, plato)=>{
                                return total + plato.precio * plato.cantidad;
                            }, 0)}
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};
