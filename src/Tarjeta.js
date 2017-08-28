import {Estado, EstadoTarjetas} from './EstadoTarjetas';

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
        if (this.estado === Estado.ABIERTO || this.estado === Estado.SOLUCIONADO) {
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
    onClick(app) {
        EstadoTarjetas.abrirTarjeta(this, app);
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
