import {Estado, EstadoTarjetas} from './EstadoTarjetas';

class Tarjeta {
    constructor(id, imagen, numero) {
        this.id = "tarjeta-" + id;
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
            return Tarjeta.BASE;
        }
    }
    get clase() {
        let clase = "";
        switch (this.posicion % Tarjeta.COLUMNA) {
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
        app.setState({clicks: app.state.clicks + 1});
    }
    static crearTarjetas() {
        const tarjetas = new Array(Tarjeta.LIMITE);
         for(let i = 0; i <= Tarjeta.LIMITE; i++) {
             tarjetas[i] = new Tarjeta(i, "imagen-" + (Math.floor(i / 2) + 1) + ".jpg", Math.random());
         }
         tarjetas.sort((x,y) => (x.numero - y.numero));
         let pos = 0;
         tarjetas.forEach(function(item){item.posicion = pos++});
         return tarjetas;
    }
}
Tarjeta.LIMITE = 15;
Tarjeta.COLUMNA = Math.floor(Math.sqrt(Tarjeta.LIMITE + 1));
Tarjeta.FILA = Math.floor((Tarjeta.LIMITE + 1) / Tarjeta.COLUMNA);
Tarjeta.BASE = "cubierta.jpg";

export default Tarjeta;
export {Tarjeta};
