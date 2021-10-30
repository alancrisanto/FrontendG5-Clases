// Reglas del componente
// 1. funcion o clase
// 2. El nombre de la funcion/componente tiene que empezar con mayusculas
// 3. Esa funcion/componente tiene que retornar algo
// 3.2 JSX utiliza (<html></html>) para indicar que dibujará elementos
// 3.1 el return es el JSX que se dibujará
// 4. Tiene que expoertarse por defecto para que otros componentes lo puedan reutilizar

//los props se reciben en el hijo con el nombre del "atributo" que se le puso en el componente Padre
//estos props son como los parámetros de una función
//<Main subtitulo="ewrw" tituloPadre={estado} actualizarInfo={setEstado} />
function Main({subtitulo, tituloPadre, actualizarTitulo, mostrarInfo}) {

    return (<main>
		<div>
			<h2>{subtitulo}</h2>
			{/* renderizado condicional, a partir props, estado, variable*/}
			{/* si mostrarInfo es true ? muestro esto si es verdad : muestro esto otro si es false */}
			{mostrarInfo ? (<p>Lorem ipsum dolor sit amet.</p>) : null}
			<p>El titulo de App es {tituloPadre}</p>
			<button onClick={() => {actualizarTitulo("Titulo desde Main")}}>
				Actualizar desde Main
			</button>
		</div>
	</main>);
}

export default Main;
