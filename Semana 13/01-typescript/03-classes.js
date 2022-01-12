var Hamburguesa = /** @class */ (function () {
    //solamente es accesible de forma directa dentro de la propia clase
    function Hamburguesa(id, nombre) {
        this.id = id;
        this.nombre = nombre;
        this.ingredientes = [];
        this.preparacion = "";
        this._ingredienteSecreto = "plancton";
    }
    Object.defineProperty(Hamburguesa.prototype, "ingredienteSecreto", {
        //getter - obtener
        get: function () {
            return this._ingredienteSecreto;
        },
        //setter - dar
        set: function (nuevoIngrediente) {
            this._ingredienteSecreto = nuevoIngrediente;
        },
        enumerable: false,
        configurable: true
    });
    return Hamburguesa;
}());
var CangreBurguer = new Hamburguesa(1, "Cangreburguer");
CangreBurguer.ingredienteSecreto = "lechuguita";
console.log(CangreBurguer.ingredienteSecreto);
