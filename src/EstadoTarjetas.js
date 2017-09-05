const Estado = {INICIAL: 1, ABIERTO: 2, SOLUCIONADO: 3};

class EstadoTarjetas {
    static abrirTarjeta(item, app) {
        if (EstadoTarjetas.tarjetas.length === 2) {
            const _estado = (EstadoTarjetas.tarjetas[0].imagen === EstadoTarjetas.tarjetas[1].imagen) ? Estado.SOLUCIONADO : Estado.INICIAL; 
            EstadoTarjetas.tarjetas.forEach((element) => {element.estado = _estado;}, this);                
            EstadoTarjetas.tarjetas.splice(0, 2);
            app.setState({list: app.state.list});
            const queda = app.state.list.find(i => i.estado !== Estado.SOLUCIONADO);
            if (queda === undefined) {
                clearInterval(app.state.interval);
            }
        }
        const pos = EstadoTarjetas.tarjetas.findIndex((i) => item.id === i.id)
        if (item.estado === Estado.INICIAL) {
            if (pos === -1) {
                item.estado = Estado.ABIERTO; //CLICK;
                EstadoTarjetas.tarjetas.push(item);
            }
        } else if (item.estado === Estado.ABIERTO) { //CLICK) {
             if ((pos !== -1)) {
                EstadoTarjetas.tarjetas.splice(pos, 1);
            }
            item.estado = Estado.INICIAL;
        }
    };
}
EstadoTarjetas.tarjetas = [];

export default EstadoTarjetas;
export {Estado, EstadoTarjetas}