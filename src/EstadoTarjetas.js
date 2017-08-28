const Estado = {INICIAL: 1, CLICK: 2, ABIERTO: 3, SOLUCIONADO: 4};

let tarjetas = [];

class EstadoTarjetas {
    static abrirTarjeta(item, app) {
        console.log("abrirTarjeta " + item.id);
        if (tarjetas.length === 2) {
            alert("¡error!");
        }
        const pos = tarjetas.findIndex((i) => item.id === i.id)
        if (item.estado === Estado.INICIAL) {
            if (pos === -1) {
                item.estado = Estado.ABIERTO; //CLICK;
                tarjetas.push(item);
            }
        } else if (item.estado === Estado.ABIERTO) { //CLICK) {
             if ((pos !== -1)) {
                tarjetas.splice(pos, 1);
            }
            item.estado = Estado.INICIAL;
        }
        if (tarjetas.length === 2) {
            tarjetas.forEach((element) => {element.estado = Estado.ABIERTO;}, this);
            setTimeout(function() {
                const _estado = (tarjetas[0].imagen === tarjetas[1].imagen) ? Estado.SOLUCIONADO : Estado.INICIAL; 
                tarjetas.forEach((element) => {element.estado = _estado;}, this);                
                tarjetas.splice(0, 2);
                app.setState({list: app.state.list});
                app.clickear = true;
            }, 1000);
            app.clickear = false;
        }
    };
}

export default EstadoTarjetas;
export {Estado, EstadoTarjetas}