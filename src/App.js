import React, { Component } from 'react';
import './App.css';
import Tarjeta from './Tarjeta';

class App extends Component {
  constructor(props) {
    super(props);
    this.clickear = true;
    this.state = {list: Tarjeta.crearTarjetas(), timerInicial: Date.now(), timerActual: Date.now(), clicks: 0, interval:undefined};
    this.onClick = this.onClick.bind(this);
  }
  onClick(item) {
    if (this.clickear) {
      if (this.state.interval === undefined) {
        const apli = this; 
        this.setState({timerInicial: Date.now(), interval: setInterval(function() {apli.setState({timerActual: Date.now()})}, 1000)});
      }
      item.onClick(this);
      this.setState({list: this.state.list});
    }
  }
  render() {
    const nombre = "juego de memoria";
    return (
      <div id="principal" className="principal">
        <div className="App">
            <h1>{nombre}</h1>
        </div>
        <div className="Tarjetas">
        {
          this.state.list.map(item =>
          <span key={"span-" + item.id}>
            <div className={item.clase} key={"imagen-" + item.id}>
              <img src={item.archivo} alt={item.id} onClick={() => this.onClick(item)}/>
            </div>
            {item.final && <div className="linea"></div>}
          </span>)
        }
        </div>
        <div key="contador" className="Contador">
          <span key="contador-hora">{Math.floor((this.state.timerActual - this.state.timerInicial) / 1000)}</span>
          &nbsp;-&nbsp;
          <span key="contador-clicks">{this.state.clicks}</span>
        </div>
      </div>
    )
  }
}

export default App;
