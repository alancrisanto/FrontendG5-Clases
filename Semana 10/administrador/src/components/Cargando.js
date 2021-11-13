
export default function Cargando() {
    return (
        // los estilos inline en react son un objeto
        <div 
        style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            zIndex:99,
            backgroundColor: "white",

        }}
        >
            <i className="fas fa-cog fa-spin fa-6x"
            style={{
                color:"slateblue",
                position: "absolute",
                top: "cal(50% - 50px)",
                left: "cal(50% - 50px)",

            }}
            ></i>
        </div>
    )
}
