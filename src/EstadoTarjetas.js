const Estado = {INICIAL: 1, ABIERTO: 2, SOLUCIONADO: 3};

class EstadoTarjetas {
    static abrirTarjeta(item, app) {
        if (EstadoTarjetas.tarjetas.length === 2) {
            if (EstadoTarjetas.tarjetas.every((value) => {return value.estado !== Estado.SOLUCIONADO})) {
                EstadoTarjetas.tarjetas.forEach((value) => {value.estado = Estado.INICIAL}, this);
            }
            EstadoTarjetas.tarjetas.splice(0, 2);        
        }
        const _pos = EstadoTarjetas.tarjetas.findIndex(i => item.id === i.id);
        if (_pos === -1 && item.estado === Estado.INICIAL) {
            item.estado = Estado.ABIERTO;
            EstadoTarjetas.tarjetas.push(item);
            if (EstadoTarjetas.tarjetas.length === 2) {
                const _imagenes = new Set(EstadoTarjetas.tarjetas.map((value) => {return value.imagen}));
                if (_imagenes.size === 1) {
                    EstadoTarjetas.tarjetas.forEach((value) => {value.estado = Estado.SOLUCIONADO;}, this);                                    
                }
            }
        }
        const queda = app.state.list.find(i => i.estado !== Estado.SOLUCIONADO);
        if (queda === undefined) {
            clearInterval(app.state.interval);
        }
    };
}
EstadoTarjetas.tarjetas = [];

export default EstadoTarjetas;
export {Estado, EstadoTarjetas}