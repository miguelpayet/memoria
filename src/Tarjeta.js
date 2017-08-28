const Estado = {INICIAL: 1, CLICK: 2, ABIERTO: 3, SOLUCIONADO: 4};
class Tarjeta {
    constructor(id, cubierta, imagen, numero) {
        this.id = "tarjeta-" + id;
        this.cubierta = cubierta;
        this.imagen = imagen;
        this.numero = numero;
        this.posicion = undefined;
        this.estado = Estado.INICIAL;
        this.onClick = this.onClick.bind(this);
    }
    get archivo() {
        if (this.estado === Estado.ABIERTO) {
            return this.imagen;
        } else {
            return this.cubierta;
        }
    }
    get clase() {
        let clase = "";
        switch (this.posicion % 4) {
            case 0:
                clase = "inicio";
                break;
            case 3:
                clase =  "fin";
                break;
            default:
                clase =  "medio";
        }
        switch (this.estado) {
            case Estado.ABIERTO:
                clase += " abierto";
                break;
            case Estado.CLICK:
                clase += " click";
                break;
            default:
                break;
        }
        return clase;
    }
    get final() {
        return (this.posicion % 4 === 3);
    }
    onClick() {
        switch (this.estado) {
            case Estado.INICIAL:
                this.estado = Estado.CLICK;
                break;
            case Estado.CLICK:
                break;
            case Estado.ABIERTO:
                break;
            case Estado.SOLUCIONADO:
                break;
            default:
                break;
        }
    }
    static crearTarjetas() {
        const LIMITE = 15;
        const base = "cubierta.jpg";
        const tarjetas = new Array(LIMITE);
         for(let i = 0; i <= LIMITE; i++) {
             tarjetas[i] = new Tarjeta(i, base, "imagen-" + (Math.floor(i / 2) + 1) + ".jpg", Math.random());
         }
         tarjetas.sort((x,y) => (x.numero - y.numero));
         let pos = 0;
         tarjetas.forEach(function(item){item.posicion = pos++});
         return tarjetas;
    }
}

export default Tarjeta;
export {Tarjeta};
